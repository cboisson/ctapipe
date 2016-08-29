# Licensed under a 3-clause BSD style license - see LICENSE.rst
'''a parallelization system. It executes ctapipe algorithms in a multithread
environment.
It is based on ZeroMQ library (http://zeromq.org) to pass messages between
threads. ZMQ library allows to stay away from class concurrency mechanisms
like mutexes, critical sections semaphores, while being thread safe.
User defined steps thanks to Python classes.
Passing data between steps is managed by the router.
If a step is executed by several threads, the router uses LRU pattern
(least recently used ) to choose the step that will receive next data.
The router also manage Queue for each step.
'''

import zmq
from threading import Thread
from sys import exit
from os import path
from time import time
from time import sleep
from pickle import dumps
from traitlets import (Bool, Integer, Float, List, Dict, Unicode)
from ctapipe.pipeline.zmqpipe.producer_zmq import ProducerZmq
from ctapipe.pipeline.zmqpipe.stager_zmq import StagerZmq
from ctapipe.pipeline.zmqpipe.consumer_zmq import ConsumerZMQ
from ctapipe.pipeline.zmqpipe.router_queue_zmq import RouterQueue
from ctapipe.pipeline.producer_sequential import ProducerSequential
from ctapipe.pipeline.stager_sequential import StagerSequential
from ctapipe.pipeline.zmqpipe.drawer.pipelinedrawer import StagerRep
from ctapipe.utils import dynamic_class_from_module
from ctapipe.core import Tool

__all__ = ['Pipeline', 'PipelineError']

class PipeStep():

    '''
PipeStep reprensents a Pipeline step. One or several threads can be attach
    to this step.
Parameters
----------
    name : str
            pipeline configuration name
    next_steps_name: list(str)
    port_in : str
            port number to connect prev Router
    connexions : dict {'str : 'str'}
            key: connexion name(step name) , value port name
    main_connexion_name: str
            First step in next_steps configuration
    nb_thread : int
            mumber of thread to instantiate for this step
    level : step level in pipeline. Producer is level 0.
            Used to start/stop thread in correct order
    queue_limit: int
            Maximum number of element the router can queue
'''

    def __init__(self, name,
                 next_steps_name=list(),
                 port_in=None,
                 main_connexion_name=None,
                 nb_thread=1, level=0,
                 queue_limit = 0):

        self.name = name
        self.port_in = port_in
        self.next_steps_name = next_steps_name
        self.nb_thread = nb_thread
        self.level = level
        self.connexions = dict()
        self.threads = list()
        self.main_connexion_name = main_connexion_name
        self.queue_limit = queue_limit
        self.order_defined = False
        self.coroutine = None

    def __repr__(self):
        '''standard representation
        '''
        return ('Name[ ' + str(self.name)
                + '], next_steps_name[' + str(self.next_steps_name)
                + '], port in[ ' + str(self.port_in)
                + '], main connexion name  [ ' + str(self.main_connexion_name) + ' ]'
                + '], port in[ ' + str(self.port_in)
                + '], nb thread[ ' + str(self.nb_thread)
                + '], level[ ' + str(self.level)
                + '], queue_limit[ ' + str(self.queue_limit) + ']')


class PipelineError(Exception):

    def __init__(self, msg):
        '''Mentions that an exception occurred in the pipeline.
        '''
        self.msg = msg


class Pipeline(Tool):

    '''
    Represents a staged pattern of stage. Each stage in the pipeline
    is one or several threads containing a coroutine that receives messages
    from the previous stage and	yields messages to be sent to the next stage
    thanks to RouterQueue sequential_instances	'''

    description = 'run stages in multithread pipeline'
    gui_address = Unicode('localhost:5565', help='GUI adress and port').tag(
        config=True, allow_none=True)
    mode = Unicode('sequential', help='Pipeline mode [sequential | multithread]').tag(
        config=True, allow_none=True)
    producer_conf = Dict(
        help='producer description: name , module, class',
                                            allow_none=False).tag(config=True)
    stagers_conf = List(
        help='stagers list description in a set order:',
         allow_none=False).tag(config=True)
    consumer_conf = Dict(
        default_value={'name': 'CONSUMER', 'class': 'Producer',
                       'module': 'producer',  'prev': 'STAGE1'},
        help='producer description: name , module, class',
                allow_none=False).tag(config=True)
    aliases = Dict({'gui_address': 'Pipeline.gui_address', 'mode':'Pipeline.mode'})
    examples = ('prompt%> ctapipe-pipeline \
    --config=examples/brainstorm/pipeline/pipeline_py/example.json')

    PRODUCER = 'PRODUCER'
    STAGER = 'STAGER'
    CONSUMER = 'CONSUMER'
    ROUTER = 'ROUTER'

    producer = None
    consumer = None
    stagers = list()
    router = None
    producer_step = None
    stager_steps = None
    consumer_step = None
    step_threads = list()
    router_thread = None
    context = zmq.Context().instance()
    socket_pub = context.socket(zmq.PUB)
    levels_for_gui = list()

    def setup(self):
        if self.init() == False:
            self.log.error('Could not initialise pipeline')
            exit()

    def init(self):
        '''
        Create producers, stagers and consumers instance according to
         configuration
        Returns:
        --------
        bool : True if pipeline is correctly setup and all producer,stager
         and consumer initialised Otherwise False
        '''
        # Verify configuration instance
        if not path.isfile(self.config_file):
            self.log.error('Could not open pipeline config_file {}'
                           .format(self.config_file))
            return False
        # Gererate steps(producers, stagers and consumers) from configuration
        if not self.generate_steps():
            self.log.error("Error during steps generation")
            return False
        if self.mode == 'sequential':
            return self.init_sequential()
        elif self.mode == 'multithread':
            return self.init_multithread()
        else:
            self.log.error("{} is not a valid mode for pipeline".format(self.mode))



    def init_multithread(self):
        if not self.connect_gui():  return False
        if not self.configure_ports() : return False
        if not self.configure_producer() : return False
        router_names =  self.configure_router()
        if not self.configure_consumer(): return False
        if not self.configure_stagers(router_names) : return False
        self.router = RouterQueue(connexions=router_names,
                             gui_address=self.gui_address)
        if self.router.init() == False:
            return False
        # Define order in which step have to be start/stop
        self.def_thread_order()
        self.display_conf()
        return True

    def init_sequential(self):
        """
        """
        self.configure_ports()
        self.sequential_instances = dict()
        # set coroutines
        #producer
        conf = self.get_step_conf(self.producer_step.name)
        module = conf['module']
        class_name = conf['class']
        obj = dynamic_class_from_module(class_name, module, self)

        prod = ProducerSequential(obj, name=self.producer_step.name,
                                  connexions=self.producer_step.connexions,
                                  main_connexion_name = self.producer_step.main_connexion_name)
        prod.init()
        self.sequential_instances[self.producer_step.name] = prod
        #stages
        for step in (self.stager_steps ):
            conf = self.get_step_conf(step.name)
            module = conf['module']
            class_name = conf['class']
            obj = dynamic_class_from_module(class_name, module, self)
            stage = StagerSequential(obj,name = step.name, connexions=step.connexions,
                                     main_connexion_name=step.main_connexion_name)
            self.sequential_instances[step.name] = stage
            stage.init()
        #consumer
        conf = self.get_step_conf(self.consumer_step.name)
        module = conf['module']
        class_name = conf['class']
        obj = dynamic_class_from_module(class_name, module, self)
        obj.init()
        self.sequential_instances[self.consumer_step.name] = obj

        return True



    def configure_stagers(self,router_names):
        #STAGERS
        for stager_step in self.stager_steps:
            # each stage need a router to connect it to prev stages
            name = stager_step.name + '_' + 'router'
            router_names[name] = [stager_step.name+'_in',
                                  stager_step.name+'_out',
                                  stager_step.queue_limit]

            for i in range(stager_step.nb_thread):
                conf = self.get_step_conf(stager_step.name)
                try:
                    stager_zmq = self.instantiation(
                        stager_step.name ,
                        self.STAGER,
                        thread_name = stager_step.name
                            +'$$thread_number$$'
                            + str(i),
                        port_in=stager_step.port_in,
                        connexions = stager_step.connexions,
                        main_connexion_name = stager_step.main_connexion_name,
                        config=conf)
                except PipelineError as e:
                    self.log.error(e)
                    return False
                if stager_zmq.init() == False:
                    self.log.error('stager_zmq init failed')
                    return False
                self.stagers.append(stager_zmq)
                stager_step.threads.append(stager_zmq)
        return True


    def configure_consumer(self):
        try:
            consumer_zmq = self.instantiation(self.consumer_step.name,
                                      self.CONSUMER,
                                      port_in=self.consumer_step.port_in,
                                      config=self.consumer_conf)
        except PipelineError as e:
            self.log.error(e)
            return False
        if consumer_zmq.init() == False:
            self.log.error('consumer_zmq init failed')
            return False
        self.consumer = consumer_zmq
        return True

    def configure_router(self):
        # ROUTER
        sock_router_ports = dict()
        socket_dealer_ports = dict()
        router_names = dict()
        # each consumer need a router to connect it to prev stages
        name = self.consumer_step.name + '_' + 'router'
        router_names[name] = [self.consumer_step.name+'_in',
                              self.consumer_step.name+'_out',
                              self.consumer_step.queue_limit]
        return router_names

    def configure_producer(self):
        #PRODUCER
        try:
            producer_zmq = self.instantiation(
                self.producer_step.name, self.PRODUCER,
                connexions = self.producer_step.connexions,
                main_connexion_name = self.producer_step.main_connexion_name,
                config= self.producer_conf)
        except PipelineError as e:
            self.log.error(e)
            return False
        if producer_zmq.init() == False:
            self.log.error('producer_zmq init failed')
            return False
        self.producer = producer_zmq
        return True

    def connect_gui(self):
        # Get port for GUI
        if self.gui_address is not None:
            try:
                self.socket_pub.connect('tcp://' + self.gui_address)
            except zmq.error.ZMQError as e:
                self.log.info(str(e) + 'tcp://' + self.gui_address)
                return False
        return True


    def generate_steps(self):
        ''' Generate pipeline steps from configuration'''
        self.producer_step = self.get_pipe_steps(self.PRODUCER)
        self.stager_steps = self.get_pipe_steps(self.STAGER)
        self.consumer_step = self.get_pipe_steps(self.CONSUMER)
        if not self.producer_step:
            self.log.error("No producer in configuration")
            return False
        if not self.stager_steps:
            self.log.error("No stager in configuration")
            return False
        if not self.consumer_step:
            self.log.error("No consumer in configuration")
            return False
        return True

    def configure_ports(self):
        '''
        Define producer, steps and consumer port in/out
        '''
        #configure connexions (zmq port) for producer (one per next step)
        for next_step_name in self.producer_step.next_steps_name:
            self.producer_step.connexions[next_step_name]=next_step_name+'_in'
        self.producer_step.main_connexion_name = self.producer_step.next_steps_name[0]

        #configure port_in and connexions (zmq port)  for all stages (one per next step)
        for stage in self.stager_steps:
            stage.port_in = stage.name+'_out'
            for next_step_name in stage.next_steps_name:
                stage.connexions[next_step_name]=next_step_name+'_in'
            stage.main_connexion_name = stage.next_steps_name[0]

        #configure port-in  (zmq port) for consumer
        self.consumer_step.port_in = self.consumer_step.name+'_out'
        return True

    def get_step_by_name(self,name):
        """
        Returns a step is a step.name correspond
        """
        for step in (self.stager_steps
        + [self.consumer_step,self.producer_step]):
            if step.name == name:
                return step
        return None

    def instantiation(
            self, name, stage_type, thread_name=None,
            port_in=None, connexions=None, main_connexion_name=None, config=None):
        '''
        Instantiate on Pytohn object from name found in configuration
        Parameters
        ----------
        name : str
                stage name
        stage_type	: str
        port_in : str
                step port in
        connexions : dict
                key StepName, value connexion ports
        '''
        stage = self.get_step_conf(name)
        module = stage['module']
        class_name = stage['class']
        obj = dynamic_class_from_module(class_name, module, self)

        if obj is None:
            raise PipelineError('Cannot create instance of ' + name)
        obj.name = name

        if stage_type == self.STAGER:
            thread = StagerZmq(
                obj, port_in, thread_name,
                connexions=connexions,
                main_connexion_name = main_connexion_name,
                gui_address=self.gui_address)

        elif stage_type == self.PRODUCER:
            thread = ProducerZmq(
                obj, name, connexions=connexions,
                main_connexion_name = main_connexion_name,
                gui_address=self.gui_address)

        elif stage_type == self.CONSUMER:
            thread = ConsumerZMQ(
                obj,port_in,
                name, parent=self,
                gui_address=self.gui_address)

        else:
            raise PipelineError(
                'Cannot create instance of', name, '. Type',
                 stage_type, 'does not exist.')
        # set coroutine socket to it's stager or producer socket .
        return thread

    def get_pipe_steps(self, role):
        '''
        Create a list of pipeline steps from configuration and filter by role
        Parameters
        ----------
        role: str
                filter with role for step to be add in result list
                Accepted values: self.PRODUCER - self.STAGER  - self.CONSUMER
        Returns:
        --------
        PRODUCER,CONSUMER: a step name filter by specific role (PRODUCER,CONSUMER)
        STAGER: List of steps name filter by specific role
        '''
        # Create producer step
        try:
            if role == self.PRODUCER:
                prod_step = PipeStep(self.producer_conf['name'])
                prod_step.type = self.PRODUCER
                prod_step.next_steps_name = self.producer_conf['next_steps'].split(',')
                return prod_step
            elif role == self.STAGER:
                # Create stagers steps
                result = list()
                for stage_conf in self.stagers_conf:
                    try: nb_thread = int(stage_conf['nb_thread'])
                    except Exception : nb_thread = 1
                    next_steps_name = stage_conf['next_steps'].split(',')
                    try: queue_limit = stage_conf['queue_limit']
                    except Exception: queue_limit = -1
                    stage_step = PipeStep(  stage_conf['name'],
                        next_steps_name=next_steps_name,nb_thread=nb_thread,
                        queue_limit = queue_limit)
                    stage_step.type = self.STAGER
                    result.append(stage_step)
                return result
            elif role == self.CONSUMER:
                # Create consumer step
                try:  queue_limit = self.consumer_conf['queue_limit']
                except: queue_limit = -1
                cons_step = PipeStep(self.consumer_conf['name'],queue_limit = queue_limit)
                cons_step.type = self.CONSUMER
                return  cons_step
            return result
        except KeyError as e:
            return None

    def def_thread_order(self):
        ''' Define order in which steps have to be start/stop.
            Fill self.step_threads
            Warning Producer and consumer thread  are not concerned
        '''
        # Define step level witihin pipeline. Use next step to define level
        for step in self.stager_steps:
            for t in step.threads:
                self.step_threads.append(t)


    def def_step_for_gui(self):
        ''' Create a list (levels_for_gui) containing all steps
        Returns: the created list and actual time
        '''
        levels_for_gui = list()
        levels_for_gui.append(StagerRep(self.producer_step.name,
                            self.producer_step.next_steps_name,
                            nb_job_done=self.producer.nb_job_done))
        for step in self.stager_steps:
            nb_job_done = 0
            for thread in step.threads:
                nb_job_done+=thread.nb_job_done
            levels_for_gui.append(StagerRep(step.name,step.next_steps_name,
                                  nb_job_done=nb_job_done,
                                  nb_threads = len(step.threads)))

        levels_for_gui.append(StagerRep(self.consumer_step.name,
                                nb_job_done=self.consumer.nb_job_done))
        return (levels_for_gui,time())


    def display_conf(self):
        ''' Print steps and their next_steps
        '''
        self.log.info('')
        self.log.info('------------------ Pipeline configuration ------------------')
        for step in  ([self.producer_step ] + self.stager_steps
            + [self.consumer_step]):
            self.log.info('step {} '.format(step.name))
            for next_step_name in step.next_steps_name:
                self.log.info('--> next {} '.format(next_step_name))
        self.log.info('------------------ End Pipeline configuration ------------------')
        self.log.info('')


    def get_step_by_name(self, name):
        ''' Find a PipeStep in self.producer_step or  self.stager_steps or
        self.consumer_step
        Return: PipeStep if found, otherwise None
        '''
        for step in (self.stager_steps+[self.producer_step,self.consumer_step]):
            if step.name == name:
                return step
        return None

    def start(self):
        ''' run the pipeline steps
        '''
        if self.mode == 'multithread':
            self.start_multithread()
        elif self.mode == 'sequential':
            self.start_sequential()

    def start_sequential(self):
        self.log.info(self.sequential_instances)
        prod_instance = self.sequential_instances[self.producer_step.name]
        prod_gen = prod_instance.run()
        for prod_result in prod_gen:
            #TO DO: Add code to take in account producer shunt
            self.log.info('Producer result {}'.format(prod_result))

            msg,destination = prod_result

            while msg != None:
                print('DEBUG msg {} destination {}'.format(msg,destination))

                stage = self.sequential_instances[destination]
                result = stage.run(msg)

                if result:
                    msg,destination = result
                else:
                    msg = destination = None

        for step in self.sequential_instances.values():
            step.finish()



    def start_multithread(self):
        ''' Start all pipeline threads.
        Regularly inform GUI of pipeline configuration in case of a new GUI
        instance was lunch
        Stop all threads without loosing data
        '''
        # send pipeline cofiguration to an optinal GUI instance
        levels_gui,conf_time = self.def_step_for_gui()
        self.socket_pub.send_multipart(
            [b'GUI_GRAPH', dumps([conf_time,levels_gui])])
        # Start all Threads
        self.consumer.start()
        self.router.start()
        for stage in self.stagers:
            stage.start()
        self.producer.start()
        # Wait producer end of run method
        self.wait_and_send_levels(self.producer)

        # Ensure that all queues are empty and all threads are waiting for
        # new data since more that a specific tine
        while not self.wait_all_stagers(5000): # 5000 ms
            levels_gui,conf_time = self.def_step_for_gui()
            self.socket_pub.send_multipart(
                [b'GUI_GRAPH', dumps([conf_time,
                 levels_gui])])
            sleep(1)

        # Now send stop to stage threads and wait they join
        for worker in self.step_threads:
            self.wait_and_send_levels(worker)
        # Stop consumer and router thread
        self.wait_and_send_levels(self.consumer)
        self.wait_and_send_levels(self.router)
        levels_gui,conf_time = self.def_step_for_gui()
        self.socket_pub.send_multipart(
            [b'GUI_GRAPH', dumps([conf_time,
             levels_gui])])
        # Wait 1 s to be sure this message will be display
        sleep(1)
        self.socket_pub.send_multipart(
            [b'FINISH', dumps('finish')])
        self.socket_pub.close()
        self.context.destroy()
        self.context.term()


    def wait_all_stagers(self,mintime):
        if self.router.isQueueEmpty():
            for worker in self.step_threads:
                if worker.waiting_since < mintime: # 5000ms
                    return False
            return True
        return False


    def finish(self):
        self.log.info('===== Pipeline END ======')


    def wait_and_send_levels(self, thread_to_wait):
        '''
        Wait for a thread to join and regularly send pipeline state to GUI
        in case of a GUI will connect later
        Parameters:
        -----------
        thread_to_wait : thread
                thread to join
        conf_time : str
                represents time at which configuration has been built
        '''
        while not thread_to_wait.finish():
            while True:
                levels_gui,conf_time = self.def_step_for_gui()
                thread_to_wait.join(timeout=.1)
                self.socket_pub.send_multipart(
                    [b'GUI_GRAPH', dumps([conf_time, levels_gui])])
                if not thread_to_wait.is_alive():
                    return


    def get_step_conf(self, name):
        '''
        Search step by its name in self.stage_conf list,
        self.producer_conf and self.consumer_conf
        Parameters:
        -----------
        name : str
                stage name
        Returns:
        --------
        Step name matching instance, or None is not found
        '''
        if self.producer_conf['name'] == name:
            return self.producer_conf
        if self.consumer_conf['name'] == name:
            return self.consumer_conf
        for step in self.stagers_conf:
            if step['name'] == name:
                return step
        return None

    def get_stager_indice(self, name):
        '''
        Search step by its name in self.stage_conf list
        Parameters:
        -----------
        name : str
                stage name
        Returns:
        --------
        indice in list, -1 if not found
        '''
        for index, step in enumerate(self.stagers_conf):
            if step['name'] == name:
                return index
        return -1


def main():
    tool = Pipeline()
    tool.run()

if __name__ == '__main__':
    main()
