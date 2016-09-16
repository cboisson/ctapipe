Search.setIndex({envversion:48,filenames:["analysis/index","api/ctapipe.configuration.Configuration","api/ctapipe.configuration.ConfigurationException","api/ctapipe.configuration.core.Configuration","api/ctapipe.configuration.core.ConfigurationException","api/ctapipe.coordinates.CameraFrame","api/ctapipe.coordinates.GroundFrame","api/ctapipe.coordinates.NominalFrame","api/ctapipe.coordinates.TelescopeFrame","api/ctapipe.coordinates.TiltedGroundFrame","api/ctapipe.coordinates.TiltedTelescopeFrame","api/ctapipe.coordinates.project_to_ground","api/ctapipe.core.Container","api/ctapipe.core.Tool","api/ctapipe.core.component","api/ctapipe.instrument.obsconfig.ArrayConfig","api/ctapipe.instrument.obsconfig.ArrayTriggerConfig","api/ctapipe.instrument.obsconfig.BaseConfig","api/ctapipe.instrument.obsconfig.CameraConfig","api/ctapipe.instrument.obsconfig.ObsConfig","api/ctapipe.instrument.obsconfig.OpticsConfig","api/ctapipe.instrument.obsconfig.SimObsConfig","api/ctapipe.instrument.obsconfig.SubarrayConfig","api/ctapipe.instrument.obsconfig.TelescopeConfig","api/ctapipe.instrument.obsconfig.TelescopeTriggerConfig","api/ctapipe.instrument.obsconfig.get_site_id_for_run","api/ctapipe.instrument.obsconfig.get_site_id_for_time","api/ctapipe.io.camera.CameraGeometry","api/ctapipe.io.camera.make_rectangular_camera_geometry","api/ctapipe.io.containers.CalibratedCameraData","api/ctapipe.io.containers.MCCamera","api/ctapipe.io.containers.MCEvent","api/ctapipe.io.containers.MCShowerData","api/ctapipe.io.containers.RawCameraData","api/ctapipe.io.containers.RawData","api/ctapipe.io.hessio.hessio_event_source","api/ctapipe.reco.HighOrderMomentParameters","api/ctapipe.reco.HillasParameterizationError","api/ctapipe.reco.MomentParameters","api/ctapipe.reco.generate_2d_shower_model","api/ctapipe.reco.hillas_parameters","api/ctapipe.reco.make_mock_shower_image","api/ctapipe.reco.mock.generate_2d_shower_model","api/ctapipe.reco.mock.make_mock_shower_image","api/ctapipe.tools.info","api/ctapipe.visualization.ArrayDisplay","api/ctapipe.visualization.CameraDisplay","calib/index","calib/index_array","calib/index_atmo","calib/index_camera","calib/index_pointing","coordinates/index","core/index","datasets/index","development/code-guidelines","development/futureplans","development/index","development/maintainer-info","development/style-guide","development/support-libraries","flow/index","getting_started/index","index","instrument/index","io/index","reco/index","tools/index","visualization/index"],objects:{"ctapipe.calib":{array:[48,8,0,"-"],atmo:[49,8,0,"-"],camera:[50,8,0,"-"]},"ctapipe.coordinates":{CameraFrame:[5,9,1,""],GroundFrame:[6,9,1,""],NominalFrame:[7,9,1,""],TelescopeFrame:[8,9,1,""],TiltedGroundFrame:[9,9,1,""],project_to_ground:[11,11,1,""]},"ctapipe.coordinates.CameraFrame":{default_representation:[5,10,1,""],frame_specific_representation_info:[5,10,1,""],name:[5,10,1,""]},"ctapipe.coordinates.GroundFrame":{default_representation:[6,10,1,""],frame_attributes:[6,10,1,""],frame_specific_representation_info:[6,10,1,""],name:[6,10,1,""]},"ctapipe.coordinates.NominalFrame":{array_direction:[7,10,1,""],default_representation:[7,10,1,""],focal_length:[7,10,1,""],frame_attributes:[7,10,1,""],frame_specific_representation_info:[7,10,1,""],name:[7,10,1,""],pointing_direction:[7,10,1,""],rotation:[7,10,1,""]},"ctapipe.coordinates.TelescopeFrame":{default_representation:[8,10,1,""],focal_length:[8,10,1,""],frame_attributes:[8,10,1,""],frame_specific_representation_info:[8,10,1,""],name:[8,10,1,""]},"ctapipe.coordinates.TiltedGroundFrame":{default_representation:[9,10,1,""],frame_attributes:[9,10,1,""],frame_specific_representation_info:[9,10,1,""],name:[9,10,1,""],pointing_direction:[9,10,1,""]},"ctapipe.core":{Container:[12,9,1,""],Tool:[13,9,1,""],component:[14,11,1,""]},"ctapipe.core.Container":{add_item:[12,12,1,""],meta:[12,10,1,""]},"ctapipe.core.Tool":{config_file:[13,10,1,""],finish:[13,12,1,""],initialize:[13,12,1,""],run:[13,12,1,""],setup:[13,12,1,""],start:[13,12,1,""],version_string:[13,10,1,""]},"ctapipe.instrument":{obsconfig:[64,8,0,"-"]},"ctapipe.instrument.obsconfig":{ArrayConfig:[15,9,1,""],ArrayTriggerConfig:[16,9,1,""],BaseConfig:[17,9,1,""],CameraConfig:[18,9,1,""],ObsConfig:[19,9,1,""],OpticsConfig:[20,9,1,""],SimObsConfig:[21,9,1,""],SubarrayConfig:[22,9,1,""],TelescopeConfig:[23,9,1,""],TelescopeTriggerConfig:[24,9,1,""],get_site_id_for_run:[25,11,1,""],get_site_id_for_time:[26,11,1,""]},"ctapipe.instrument.obsconfig.ArrayConfig":{num_tels:[15,10,1,""],tel:[15,12,1,""]},"ctapipe.instrument.obsconfig.CameraConfig":{load_from_file:[18,13,1,""]},"ctapipe.io":{camera:[65,8,0,"-"],containers:[65,8,0,"-"],hessio:[65,8,0,"-"]},"ctapipe.io.camera":{CameraGeometry:[27,9,1,""],make_rectangular_camera_geometry:[28,11,1,""]},"ctapipe.io.camera.CameraGeometry":{from_file:[27,14,1,""],from_name:[27,14,1,""],guess:[27,14,1,""],rotate:[27,12,1,""],to_table:[27,12,1,""]},"ctapipe.io.containers":{CalibratedCameraData:[29,9,1,""],MCCamera:[30,9,1,""],MCEvent:[31,9,1,""],MCShowerData:[32,9,1,""],RawCameraData:[33,9,1,""],RawData:[34,9,1,""]},"ctapipe.io.hessio":{hessio_event_source:[35,11,1,""]},"ctapipe.reco":{HighOrderMomentParameters:[36,9,1,""],HillasParameterizationError:[37,15,1,""],MomentParameters:[38,9,1,""],generate_2d_shower_model:[39,11,1,""],hillas_parameters:[40,11,1,""],make_mock_shower_image:[41,11,1,""],mock:[66,8,0,"-"]},"ctapipe.reco.mock":{generate_2d_shower_model:[42,11,1,""],make_mock_shower_image:[43,11,1,""]},"ctapipe.tools":{info:[44,11,1,""]},ctapipe:{analysis:[0,8,0,"-"],calib:[47,8,0,"-"],coordinates:[52,8,0,"-"],core:[53,8,0,"-"],reco:[66,8,0,"-"],tools:[67,8,0,"-"],visualization:[68,8,0,"-"]}},objnames:{"0":["np","module","Python module"],"1":["np","class","Python class"],"10":["py","attribute","Python attribute"],"11":["py","function","Python function"],"12":["py","method","Python method"],"13":["py","staticmethod","Python static method"],"14":["py","classmethod","Python class method"],"15":["py","exception","Python exception"],"2":["np","attribute","Python attribute"],"3":["np","function","Python function"],"4":["np","method","Python method"],"5":["np","staticmethod","Python static method"],"6":["np","classmethod","Python class method"],"7":["np","exception","Python exception"],"8":["py","module","Python module"],"9":["py","class","Python class"]},objtypes:{"0":"np:module","1":"np:class","10":"py:attribute","11":"py:function","12":"py:method","13":"py:staticmethod","14":"py:classmethod","15":"py:exception","2":"np:attribute","3":"np:function","4":"np:method","5":"np:staticmethod","6":"np:classmethod","7":"np:exception","8":"py:module","9":"py:class"},terms:{"0x10c63aef0":[],"0x10c643080":[],"0x10c643668":[],"0x10d2ea0b8":[],"0x10d2ea0f0":[],"0x10d2ea128":[],"0x10d2ea160":[],"0x10d9486a0":[],"0x10d9486d8":[],"0x10d948710":[],"0x10d948748":[],"0x10d948780":[],"0x10d9487b8":[],"0x10d948828":[],"0x10d948a90":[],"0x10da9ce10":[],"0x10dab4eb8":[],"0x10dace438":[],"0x10ddd0048":[],"0x10e7295c0":[],"0x10e729668":[],"0x10e7296a0":[],"0x10e7296d8":[],"0x10ef62ac8":8,"0x10ef62b00":8,"0x10ef62b70":8,"0x10ef62ba8":7,"0x10ef62be0":7,"0x10ef62c18":7,"0x10ef62d30":7,"0x1115bf6a0":9,"0x1115bf908":6,"0x111600ba8":[],"0x111600e10":[],"0x112385be0":[],"0x112385e48":[],"0x112a4f898":[],"0x112a4f978":[],"0x112a4f9b0":[],"0x112a4fa58":[],"0x112a4fa90":[],"0x112a4fac8":[],"0x112a4fb00":[],"0x112a4fc18":[],"0x112a4fef0":[],"0x11375a8d0":[],"0x11375a9b0":[],"0x11375a9e8":[],"0x11375aac8":[],"0x11375ab00":[],"0x11375ab38":[],"0x11375ab70":[],"0x11375ac88":[],"0x11375af60":[],"12d":27,"1989apj":40,"35d":[],"379w":40,"3rd":[],"40d":66,"__dict__":[],"__init__":[12,61],"__main__":[],"__name__":13,"_actionscontain":[],"_attributehold":[],"_build":58,"_entri":[],"_io":[],"_newbas":53,"case":[7,8,11,60,61],"class":[],"default":[12,55,60,61,67,68],"final":35,"float":[13,27,28,39,42],"function":[],"import":[13,52,58,61,66],"int":[27,28,29,33,34,35,41,43],"long":60,"new":[],"return":[11,28,39,40,41,42,43,50,61],"static":18,"super":[],"switch":[50,62],"true":[13,30,61],"try":[60,61],"while":61,abil:[],about:[27,39,42,53,67],abov:[49,61,62],accept:[52,60],access:[],accord:61,account:61,accumul:12,achiev:56,across:[50,61],action:[],activ:[61,62],actual:50,adc:33,adc_sampl:33,adc_sum:33,add:[0,12,13,47,54,61,62,67],add_argu:[],add_colorbar:[],add_ellips:[],add_item:12,addit:[50,62],addition:[13,64],address:61,adjac:27,adsab:40,advanc:[13,60,67],advancedcompon:13,after:[13,27,61],again:61,aid:26,air:48,algebra:60,algorhtm:60,algorithm:[27,29,53,60,61,66],alias:[13,67],all:[12,13,15,19,29,33,35,47,50,52,53,59,60,61,67],allow:[7,50,61,62],allow_non:[13,61],allow_pick:[],allowed_tel:35,along:[50,53],alreadi:[],also:[12,50,53,54,55,59,61,62,64],alt:[7,8,9],altern:[],anaconda:[60,62],angl:[7,8,27,39,42],angular:[7,8],ani:[13,27,50,55,60,61,62,67],anoth:[52,61,62],antialias:[],anyth:61,anywai:61,appendix:40,appli:8,applic:[13,53,61],appropri:[27,52,59],arbitrarili:12,archiv:48,archival_data_calib:48,area:27,aren:[],arg:[5,6,7,8,9],argpars:[],argument:61,argumentpars:[],argv:13,arrai:[],array_direct:7,array_lik:40,arrayfil:[],arrow:[61,64],arxiv:55,ascii:60,assign:[],associ:[12,52,64],assum:62,astri:50,astricam:50,astronom:[],astropi:[5,6,7,8,9,11,26,27,39,42,52,55,60,62,63],asymmetri:36,atlassian:63,atmospher:[],attribut:[5,6,7,8,9,12,13,15,67],attributeerror:12,author:61,auto:[],automat:[12,13,59,60,62,67],automati:13,autopep8:[59,62],autoscal:[],autoupd:[],avail:[8,61],aver:26,avoid:[50,60,61],awai:61,axi:[39,42],base:[],baseconfig:[],basecoordinatefram:[5,6,7,8,9],basefram:[6,7,8,9],basic:55,becaus:[54,55,58,61],becom:[8,13,67],been:12,below:13,best:[50,55],better:50,between:[8,12,27,61,64],bin:67,bind:61,bit:12,black:61,blank:12,blue:64,bodi:13,bool:29,both:60,box:61,brainstorm:[],browser:62,bsd:63,buffer:59,bug:63,build:[58,62],build_doc:58,built:[15,52,60],button:62,calbrat:29,calcul:[],calibr:[],calibrated_sourc:50,calibration_paramet:29,call:[12,13,27,60,62,67],cam_id:27,cam_rot:27,camera:[],camera_calibr:50,camera_coord:52,can:[12,13,27,35,39,42,52,55,56,58,59,60,61,62,67],cannot:12,care:55,carlo:[22,35,64,65],carri:7,cartesian:[5,6,7,8,9],caus:13,celeri:56,cen_i:38,cen_x:38,center:27,centr:6,centroid:[39,42,66],challeng:61,chang:[61,62,63,64,67],channel:[29,30,33],characterist:[18,20],charg:[29,50],check:[60,61,62],checkout:62,cherenkov:[27,48,49,52,68],choic:63,choos:[61,62],choosen:61,chosen:60,classif:60,classmethod:27,clean:58,clear:54,click:62,climatolog:49,clockwis:[],close:61,cluster:60,cmap:[],code:[],coeffici:[48,49],collect:58,colobar:[],color:[],colorbar:[],colormap:[],column:[55,60,66],com:[54,62,63],comma:61,command:[],commandlin:67,comment:[],comment_index:[],commit:62,common:[],commonli:67,commun:60,comp2:13,comp:13,compar:6,compat:50,complet:[53,61,67],complex:[55,56,60],compon:[],comput:[40,61,62],concurr:61,conda:[61,62],conf:[],config:[13,53,61,64,67],config_fil:[13,67],configpars:[],configu:[],conform:59,connect:61,consist:[47,66],consol:44,console_script:67,construct:[13,27],constructor:[],consumer_conf:61,consumpt:61,contain:[],content:[],contin:12,continu:60,control:[61,62],conveni:[65,67],convert:[27,39,42],convolut:60,coordiant:52,coordin:[],coorin:11,copi:62,core:[],correct:[8,40,49,50,52,54],correspond:[40,41,43,48,49,54],could:61,count:30,counter:61,coupl:54,cours:62,crab:40,creat:[13,39,42,53,62,67],critic:[61,67],cross:[48,60],cta:[],ctasoft:62,ctc:49,ctc_tel:48,current:[35,60,65],current_nam:[],cyan:[],cython:62,dask:55,data:[],data_correct:49,data_select:49,databas:27,dataimpl:[],debug:67,decid:54,decis:60,decor:[],def:[13,61],default_represent:[5,6,7,8,9],defin:[12,13,48,49,52,53,55,61,64,66,67],defini:61,definit:[18,20,52,64],deg:[7,8,27],depend:[29,44,62,67],deprec:34,deriv:[53,61],describ:[5,6,7,8,9,52,64],descript:[0,13,15,22,27,50],deseri:61,design:63,desktop:62,dest:[],detail:[50,53,54],detector:48,determin:29,dev607:[],dev793:[],dev907:[],dev913:[],dev914:[],dev915:63,devel:62,develop:[],development_workflow:63,dict:[12,13,29,30,31,33,34,50,55,61,66],dictionari:[31,34,55],differ:[7,48,49,50,52,61,64,66],difffer:[48,49],digicam:50,dimens:28,dimension:[5,6,9,60],dimensionless:52,dir:62,direct:[7,8,9],direction:[],directli:[],directori:[47,50,54,62,67],discret:60,disk:61,disp:[],displai:[27,61,68],distribut:[56,60,62,63],diverg:7,divid:[48,49,50],dl0:[50,61],dl1:50,do_th:13,doc:[],docstr:59,document:[],doe:[50,61],doesn:58,don:[55,58],done:[61,62],down:13,download:54,draw:[],draw_neighbor:[],dtype:55,duplic:50,dure:22,dynam:64,dynamic_class_from_modul:[],each:[12,27,29,30,31,34,47,50,55,61,64,66],easi:[54,58,60],easier:[50,62],easili:62,edit:53,edu:40,effici:[52,60],either:[27,62,67],elaps:52,electron:[41,43,48],element:[],elif:61,ellips:[],elpi:59,emac:59,empti:61,emul:35,enabl:59,enable_pixel_pick:[],encod:[],end:[],ensur:[50,60,61],entri:[],entry_point:[13,67],env:[],equip:6,equival:58,erfa:52,error:[61,67],etc:[13,27,53,60,68],evalu:61,even:[54,61,62],event:[7,29,31,34,35,50,52,61,66,68],event_id:[34,61],event_read:[],eventio:35,everi:[50,64],everyth:[62,67],exactli:[],exagger:[],exampl:[],except:[37,61],exchang:61,execnet:56,execut:[],exist:[],exit:[],expect:63,experi:67,explain:44,explan:54,explic:[],explor:[55,56,63],extend:64,extens:60,extra:[54,64],extract:50,factor:[41,43,66],fake:66,fake_process2:[],fake_process:[],fake_produc:[],fakeprocess2:[],fakeprocess:[],fakeproduc:[],fals:[13,44,61],far:67,fascet:20,fast:[56,60],featur:[63,67],fetch:[54,62],figsiz:[],figur:[],figure_api:[],file:[13,27,35,47,50,53,54,55,56,60,61,62,65,67],filenam:[27,61,67],fill:61,filter:60,find:[29,67],finish:[13,61,67],firewal:61,first:[58,62,64],fit:[],fitsio:60,fix:55,flag:[],flashcam:50,flexibl:[12,55],flow:[],flow_pi:61,flush:[],focal:[5,7,8],focal_length:[7,8,52],folder:54,follow:[7,55,58,59,60,61,62,67],fontsiz:[],forc:[],forg:62,fork:[],form:[52,55,61],format:[13,35,41,43,50,55,59,60,61,67],formerli:60,forrest:60,forseen:15,found:[27,60,62],four:47,fourth:36,frame:[5,6,7,8,9,11,52,60],frame_attribut:[6,7,8,9],frame_specific_representation_info:[5,6,7,8,9],frameattribut:[6,7,8,9],friendli:60,from:[7,12,13,21,27,29,33,35,41,43,52,53,55,58,61,62,63,65,66,67],from_fil:27,from_nam:27,full:61,func:[41,43],functinatl:67,furthermor:55,gain:[29,33],gamma:61,gamma_test:61,gap:27,gaussian:[39,42],gct:50,gctcam:50,gda:49,gdas_wrf_sen:49,gener:[],generalis:52,geom:[41,43,66],geometri:[18,27,28,41,43,50,65],get_com:[],get_devel_vers:62,get_list:[],get_path:61,get_section_list:[],ggplot:[],ghp:58,git:[13,54,62,63],github:[54,55,58,62,63],give:[],given:[7,8,16,24,25,26,40,41,43,54],got:61,graphic:[],green:64,ground:[6,9,11],groundsystem:11,group:55,guess:27,gui:[],gui_address:61,guid:[],guiflow:61,guipip:[],gwc:52,hand:[],handl:[13,50,53,62,67],harvard:40,has_kei:[],hasdescriptor:53,hash:[13,54],hastrait:53,have:[12,13,27,47,50,54,58,60,61,67],hdf5:55,hdf:60,hdfs3:56,hdu:[],headerimpl:[],help:[],helper:[],here:[13,54,55,62],hess:[],hessio:[],hessio_read:[],hessioread:[],hessread:[],hexagon:27,hierarchi:64,high:[0,13,59,60,67],hilla:[40,66],hillas_paramet:[],hillas_parameters_2:[],hillla:[],hire:[],hold:12,home:54,hot:[],how:[],howev:[7,12,60],html:[55,58,60,62,63],http:[40,54,55,60,61,62,63],iau:52,identif:27,ignor:[],imag:[27,39,40,41,42,43,65,66,68],impl:[],implement:[],imshow:[],in_fil:61,inact:61,includ:[15,18,20,23,27,47,50,52,54,55,60,64,66],inde:61,independ:62,index:[55,60,61],indic:29,infil:13,info:[],inform:[19,20,27,47,50,62,64,68],ini:[],init:[54,61,62],initi:[12,13],input:[],input_fil:61,insid:[47,64],inspir:54,instal:[],instanc:[12,61],instanti:61,instead:60,instruct:[58,62,65],instrument:[],instrumentdescript:61,integ:13,integr:[],integration_window:29,intend:[27,60],intens:[41,43],inter:48,interfac:[53,60,67],interleav:35,intern:52,internalyl:52,interpol:60,invalid:[],investig:50,ipython:[54,62],irregardless:50,issu:[],item:[12,61,64],iter:[12,13],job:61,joblib:56,just:[58,62],keep:[54,61,66],kei:12,keyword:61,known:[],kurtosi:36,kwarg:[5,6,7,8,9,12,13],label:[],languag:[],larg:[52,60,63],last:61,later:[62,63,64],latest:[62,63],launch:61,layout:[64,65],lazi:61,learn:[],least:61,length:[7,8,38,39,42,66],let:53,level:[0,6,13,41,43,59,60,64,66,67],libcfitsio:60,librari:[],licens:[52,63],lidar:49,like:[12,55,56,60,61,62,65,68],limit:61,lin:[],linalg:60,line:[],linear:60,linewidth:[],link:[61,62],list:[13,27,34,35,52,55,60,61,67],list_tel:[],list_teldata:[],listdir:61,listtelda:[],load:[13,60,64],load_from_fil:18,loadabl:64,local:[13,58,62],localhost:61,locat:54,log:[13,53,61,67],log_level:67,logarithm:[],loggingconfigur:53,logic:55,look:[47,64],lookup:[25,26],loop:50,loos:61,lot:50,low:[13,60,67],lower:13,lru:61,lst:[50,61],lst_calibr:61,lst_dump:61,lst_list:61,lstcam:50,lstdump:61,mac:62,machin:[],made:[50,67],mai:[11,13,55,56,64,68],main:[13,47,58,61,62,67,68],maintain:[],major:[39,42],make:[],make_mock_shower_imag:[],maker:53,manag:[],mani:[50,59,61],map:[56,66],mark:60,mask:[30,33],master:62,math:[],mathemat:60,matplotlib:[62,68],matur:60,max:28,max_ev:35,maximum:[35,61],mayb:52,mc_run_id:21,mcshowerdata:[],mean:[],mechan:61,member:[12,55],memeri:61,merg:[34,62],messag:[],met:52,meta:[12,13],metadata:[12,53],meter:[8,28],method:[],microsoft:[],min:28,miniconda:62,minim:60,minor:[39,42],mirror:20,mirrorarea:[],miss:38,mission:52,mjd_offset:52,mkdir:62,mock:[],mode:[59,61,67],model:[39,41,42,43,52,60],modifi:27,modul:[],moment:[36,38],momentparamet:[],momparam:[],mont:[22,35,64,65],more:[],most:[5,7,8,52,62],move:65,msg:[],mst:50,mst_calibr:61,mst_list:61,multi:60,multipli:[41,43],multiprocessu:61,multithread:[],multivari:[],muon:48,must:[12,60,61,62],mutex:61,mva:60,mycompon:13,mypipeconfig:61,mytool:[13,67],n_pixel:[30,33],n_sampl:33,name:[5,6,7,8,9,12,13,27,31,32,34,55,61,62,66,67],namedtipl:66,namespac:[],nb_process:61,nb_thread:[],ndarrai:[29,34,55,60],nearest:60,nearli:[55,60],necessari:[],nectarcam:50,need:[11,47,50,55,58,62,64],neigh:[],neighbor:[27,60],network:61,newli:62,next:[],next_step:61,next_step_nam:61,nice:[],nois:66,nomial:6,nomin:7,non:[33,48,59,67],none:[5,6,7,8,9,12,13,35,61],norm:[],normal:[],note:[52,54,58],notebook:[54,62],noth:[],now:[50,58,62],npix:29,npix_i:28,npix_x:28,nsampl:29,nsb:[41,43],nsb_level_p:[41,43],num_channel:[29,33],num_pixel:[29,33],num_sampl:33,num_tel:15,numba:62,number:[13,27,28,29,33,34,35,61],numer:60,numpi:[55,59,60],object:[5,6,7,8,9,12,17,27,28,39,41,42,43,52,55,61,64],obsconfig:[],observ:[19,22,64],observatori:[54,62,63,65],obstim:26,obtain:29,obviou:40,offset:[7,8],on_pixel_click:[],onc:[13,52],ones_lik:[],onli:[35,50,55,58,61,67],onlin:[],onto:11,open:[13,35,52,61,62],oper:[48,50,60],optic:[20,23],optical_foclen:27,optim:60,option:[],order:[36,38,53,62,67],ordereddict:[6,7,8,9],org:[55,60,61,62,63],organ:62,origin:[50,62],other:[13,18,55,61,62],other_dump:61,otherdump:61,otherwis:12,our:54,out:[54,62,67],output:[],oval:[],over:[7,12],overal:[15,20,27],overid:[],overlai:[],overlay_mo:[],overload:67,overrid:13,own:[62,64],page:[58,60,62],pair:61,panda:55,paper:40,paradigm:61,paramet:[11,12,13,27,28,29,30,31,33,34,35,36,38,39,40,41,42,43,49,53,61,67],parameter:[66,68],pars:[],parse_arg:[],parser:[],particular:[22,53],particularli:52,pass:[12,39,42,52,61],pass_configur:[],patch:[],patchcollect:[],path:35,pattern:61,paus:61,pdf:[39,41,42,43,60,66],pe_charg:[29,50],pe_count:30,peak:29,peakpo:29,pedest:[41,43,50],pedestal_subtracted_adc:29,pep8:59,per:[],percent:[],perceptron:60,perform:[7,13,50],permiss:58,phi:38,photo:[41,43],physic:5,pickl:61,pip:[58,60],pipegui:61,pipelin:[],pipeline_pi:[],pix:27,pix_area:27,pix_i:[27,40],pix_id:27,pix_rot:27,pix_typ:27,pix_x:[27,40],pixel:[5,18,27,28,29,30,33,40],pixel_index:[],pixel_po:34,place:27,plane:[5,9],pleas:47,plevel:13,plot:[],plt:[],png:[],point:[],pointing_direct:[6,7,8,9],polygon:[],popul:[],port:61,posit:[5,6,7,8,9,11,27,29,39,42],possibl:[54,55,64],potenti:[],powernorm:[],pre:66,precis:52,predefin:61,present:34,prevent:12,previou:61,print:[44,52,66],priori:12,procedur:67,process:[13,50,53,56,60,61,63],processu:61,procss:66,prod2_telconfig:[],prod:[],producer_conf:61,product:[22,65],program:61,project:[9,11,60,62],promot:67,prompt:61,propeg:[13,60],prototyp:50,proven:[13,53,67],provid:[12,53,55,60,62,65,67,68],psi:[38,39,42,66],publish:58,pull:[62,63],purpos:[12,66],put:[54,62],pyfit:60,pyflak:62,pyhessio:[62,65],pylab:[],pyplot:[],pyqt:61,python3:[],python:[12,48,49,50,55,58,59,61,62,63,65,67],pyzmq:61,qtconsol:62,quantiti:[7,8,27,60],queue:61,queue_limit:61,quick:60,radian:[],random:60,rang:[13,61],range_i:28,range_x:28,rapid:63,rather:[],raw:[],rawcameradata:[],rawdata:[],read:[35,55,60,61,62,65],readed_conf:[],readm:[47,50],readthedoc:[58,62,63],real:50,realli:[],reason:[54,60],recalcul:50,receiv:[50,61],recent:61,reco:[],recommend:[60,62],reconnect:61,reconstruct:[],rectangular:[27,28],red:[],redraw:[],reduc:56,reduct:60,reformat:59,regist:[12,13,67],regress:60,rel:[],relat:[6,19,64,65,68],relationship:64,releas:[],rememb:58,remot:[56,62],remov:55,render:68,repo:[54,58,62],report:63,repositori:62,reprent:52,repres:[52,61],request:[62,63],requir:[],rerun:61,res1:61,res2:61,rescal:[],resolv:66,restructuredtext:59,result:[41,43,52,61,66],right:54,risk:61,robust:60,rotat:[7,8,27,39,42],router:61,routin:52,row:60,rst:[47,50],run:[],run_id:[19,22,25,34],run_typ:[16,24],runtim:55,runtimeerror:[],safe:61,same:[7,41,43,50,59,61],sampl:[29,33,60],satellit:49,satellite_atmo:49,save:13,savefig:[],saver:[],scale:26,scikit:[60,62],scipi:[39,42,60,62],script:62,sct:50,sctcam:50,seagreen:[],search:[],second:[38,61],secondarymycompon:13,section:[61,67],section_nam:[],see:[13,47,50,53,54,55,58,62,65,67],seen:67,select:[35,49,50],self:[13,27,61,67],semaphor:61,send:[],sene:49,sent:61,separ:[54,55,61],sequanti:61,sequenti:61,serial:[12,61],servic:[],set:[],set_limits_:[],set_limits_minmax:[],set_limits_perc:[],set_xlim:[],set_ylim:[],setup:[],setup_advanc:13,setup_comp:13,sever:[],shape:[27,29,66],share:[],sherpa:54,should:[7,8,12,13,47,50,53,55,58,59,60,61,62,64,66],show:[62,64,67],shower:[9,36,38,39,40,41,42,43,48,66],shower_model:[41,43],showermodel:66,showerpdf:[41,43],shown:67,shunt:61,shunt_telescop:61,shunttelescop:61,shut:13,side:[],sig:[],signal:[60,66],silent:[],similar:50,simpl:[5,6,28,56,60,62,66],simtel:61,simtelarrai:[61,65],simtelarray_read:61,simtelarrayread:61,simtelarrrai:62,simul:21,sinc:61,singl:[23,29,30,33],singletonconfigur:53,site:[49,54,64],site_id:[15,18,20,23],size:38,skew:36,skycoord:[11,52],sleep:13,slideshow:55,slow:[],small:[54,60],sofa:52,sohuld:52,solidifi:60,solut:[54,61],some:[13,40,50,52,55,58,62,65],somehow:66,someth:[],soon:65,sound:54,sourc:[5,6,7,8,9,11,12,13,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,39,41,42,43,44,50,52,61,62,67],source_dir:61,space:48,space_detectors_calib:48,spatial:60,special:60,specif:[50,52,60,67],specifi:[12,27,50,67],speed:[50,60],sphinx:59,spyder:62,squar:27,sst:50,stabl:[54,60,63],stage:61,stagers_conf:61,stai:61,standard:[11,27,35,52,59],stat:[],state:61,statist:[39,41,42,43,60],statistc:60,statu:60,stdout:[],step:[],still:67,stop:61,storag:[29,30,31,33,34],store:[27,50,61,62],str:[12,35,61],stream:[35,56],string:[13,27,61],string_writ:61,string_writt:61,stringwrit:61,struct:12,structur:[],stuctur:[],stuff:13,stupid:[],style:[],sub:[12,13,47,55,62,64,67],subarrai:[15,22],subclass:[13,55,67],subdirectori:13,subpackag:60,subplot:[],subset:35,subtract:[41,43,50],successfulli:61,suitabl:55,summari:[5,6,7,8,9,12,13,15,18,27],superflu:55,support:[],sure:[62,67],surfac:27,swcarpentri:55,symbol:[],symlink:62,sync:[62,63],syntax:[12,67],system:[7,8,9,11,52,56,61],tabl:[],tag:[13,54,61],take:61,taken:[],target:[58,62],task:[48,49],tcp:61,techniqu:[50,60],tel:[15,31,34,61],tel_id:[15,18,20,23,27,29,30,31,33,34],telescop:[5,6,7,8,15,20,23,27,29,30,31,33,34,35,48,50,51,52,61,64],telescope_coord:52,telescope_id:61,telescope_level0:[],telescope_typ:61,teli:[],telid:[],tell:62,tels_with_data:[34,61],telx:[],term:60,terrestri:52,test:[28,54,60,61,62,66],text:[],textiowrapp:[],than:61,thank:61,thei:[7,8,35,50,60,67],them:[52,58,61,62],therefor:55,thi:[5,6,7,8,9,11,12,13,15,27,35,47,48,49,50,51,53,54,58,61,62,63,64,65,66,67,68],thing:[13,66],third:36,those:[27,55,65],thread:61,threshold:[],through:50,thrown:12,tid:[],tight_layout:[],tilt:[9,11],tilt_system:11,time:[13,26,52,58,60,61,67],titl:[],tmp:61,to_tabl:27,todo:[],tom:[],tool:[],top:67,town:[],train:60,trait:13,traitlet:[13,53,61,62,67],transform:[7,8,11,52,60],transform_to:52,transmit:61,transpar:[48,49],tree:60,tricki:54,trigger:[16,24],triggered_telescop:61,tupl:[36,38,55,61],turn:56,tutori:63,twice:61,two:[54,66],txt:61,type:[27,41,43,54,55,61,62,64],typic:[5,6,9],typo:40,under:[13,60,67],unicod:[13,61],unifi:66,unit:[8,27,52,55,60],until:60,untim:11,updat:[],upload:58,upon:60,upstream:62,url:35,usag:13,user:[],usernam:62,userspac:62,usr:[],usual:8,utc:26,utf:[],util:[54,59,61,65,66],valu:[12,27,40,61,67],value_index:[],variabl:12,variat:60,varieti:60,variou:[44,63,68],vector:60,veri:[55,56,60],version:[13,15,18,20,23,25,26,44,50,54,61,62,63,64,67],version_str:13,via:[55,56,60,67],view:62,virtual:[13,62],virtualenv:62,visual:[],vmax:[],vmin:[],wai:62,wait:61,want:[52,60,61,62],warn:[13,58,67],watch:61,waveform:50,web:62,week:40,well:[27,54,60],what:[],when:[8,13,50,55,59,60,61,62,64,67],where:[35,47,50,62,67],wherea:35,whether:[],which:[13,25,26,34,50,52,54,55,56,58,60,61,62,64,67],whippl:40,white:64,wide:60,width:[38,39,42,66],window:50,wise:60,wish:50,within:[13,59],without:61,work:[],worker:53,workflow:[62,63],world:52,would:[35,62],wrapper:[60,65,66],wrf:49,write:[55,58,61],writer:[],written:59,wrt:[],www:63,xxx_exampl:62,yeld:61,yet:[60,63],yiekld:61,yield:61,you:[12,47,50,58,61,62,67],your:[],yourusernam:62,zeromq:61,zmax:[],zmin:[],zmq_port:61},titles:["Analysis","Configuration","ConfigurationException","Configuration","ConfigurationException","CameraFrame","GroundFrame","NominalFrame","TelescopeFrame","TiltedGroundFrame","TiltedTelescopeFrame","project_to_ground","Container","Tool","component","ArrayConfig","ArrayTriggerConfig","BaseConfig","CameraConfig","ObsConfig","OpticsConfig","SimObsConfig","SubarrayConfig","TelescopeConfig","TelescopeTriggerConfig","get_site_id_for_run","get_site_id_for_time","CameraGeometry","make_rectangular_camera_geometry","CalibratedCameraData","MCCamera","MCEvent","MCShowerData","RawCameraData","RawData","hessio_event_source","HighOrderMomentParameters","HillasParameterizationError","MomentParameters","generate_2d_shower_model","hillas_parameters","make_mock_shower_image","generate_2d_shower_model","make_mock_shower_image","info","ArrayDisplay","CameraDisplay","Calibration","Array calibration","Atmosphere calibration","Camera calibration","Pointing calibration","Coordinates","Core Data Structures and Base Classes","Datasets","Code Guidelines","Future Plans","Development Resources","Maintainer info","Style Guide","Support Libraries","Flow-based framework","Getting Started For Developers","CTA Experimental Pipeline Framework (<code class=\"docutils literal\"><span class=\"pre\">ctapipe</span></code>)","Instrument","Input/Output","Reconstruction","Command line tools","Visualization"],titleterms:{"class":[52,53,64,65,66],"function":[52,64,65,66,67],"new":67,acc:65,access:60,analysi:[0,60],api:[0,47,48,49,50,52,53,54,59,64,65,66,67,68],arrai:48,arrayconfig:15,arraydisplai:45,arraytriggerconfig:16,astronom:60,atmo:49,atmospher:49,base:[53,61],baseconfig:17,calcul:60,calib:[47,48,49,50],calibr:[47,48,49,50,51],calibratedcameradata:29,camera:[50,65],cameraconfig:18,cameradisplai:46,camerafram:5,camerageometri:27,clone:62,code:[55,59],command:67,common:67,compon:14,configur:[1,3,61],configurationexcept:[2,4],consum:61,contain:[12,65],content:60,coordin:52,core:53,cta:63,ctapip:[0,47,48,49,50,52,53,61,62,63,64,65,66,67,68],data:[53,55,61,65],dataset:54,demand:61,develop:[57,62,63,67],diagram:[53,64],doc:58,document:[59,63],end:61,entri:61,environ:62,exampl:[52,61],execut:61,experiment:63,fit:60,flow:61,foreseen:61,foressen:[],fork:62,framework:[61,63],futur:56,gener:63,generate_2d_shower_model:[39,42],get:[0,47,52,54,61,62,64,66,67,68],get_site_id_for_run:25,get_site_id_for_tim:26,good:55,graphic:61,graphviz:61,groundfram:6,gui:61,guid:59,guidelin:55,help:[62,63],hessio:65,hessio_event_sourc:35,highordermomentparamet:36,hillas_paramet:40,hillasparameterizationerror:37,how:58,implement:61,improv:61,info:[44,58],inherit:[53,64],input:65,instal:61,instrument:64,integr:50,introduct:[0,47,52,53,54,61,64,65,66,67,68],issu:61,json:61,learn:60,librari:[60,61],line:67,machin:60,maintain:58,make:58,make_mock_shower_imag:[41,43],make_rectangular_camera_geometri:28,manag:61,mandatori:61,math:60,mccamera:30,mcevent:31,mcshowerdata:32,memmap:61,memori:61,messag:61,method:61,mock:66,modul:[64,65,66],momentparamet:38,more:62,mulipl:61,multivari:60,next:61,nominalfram:7,obsconfig:[19,64],onlin:58,opticsconfig:20,option:61,output:65,packag:[0,47,48,49,50,52,53,61,66,67,68],parallel:56,per:61,pipelin:63,plan:56,point:51,practic:55,produc:61,project_to_ground:11,pyqt4:61,pysid:[],raw:65,rawcameradata:33,rawdata:34,reco:66,recomput:61,reconstruct:66,refer:[0,47,48,49,50,52,53,54,55,64,65,66,67,68],releas:58,represent:61,requir:[],resourc:57,run:61,send:61,set:62,setup:62,sever:61,share:61,simobsconfig:21,softwar:62,stager:61,start:[0,47,52,54,61,62,64,66,67,68],stat:60,step:[61,62],structur:[53,55],style:59,subarrayconfig:22,submodul:47,support:60,tabl:60,telescopeconfig:23,telescopefram:8,telescopetriggerconfig:24,tiltedgroundfram:9,tiltedtelescopefram:10,todo:52,tool:[13,67],updat:58,user:61,visual:68,what:63,work:61,your:62,zmq:61}})