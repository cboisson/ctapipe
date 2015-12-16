import pyhessio as h
import imp
import os
from astropy.io import fits
import textwrap

__all__ = ['get_file_type','load_hessio','nextevent_hessio','close_hessio',
           'load_fits','close_fits','get_var_from_file','load_ascii',
           'close_ascii']
           

def get_file_type(filename):
    """
    Returns a string with the type of the given file (guessed from the
    extension). The '.gz' or '.bz2' compression extensions are
    ignored.

    >>> get_file_type('myfile.fits.gz')
    'fits'

    """
    if  ('fit' or 'FITS' or 'FIT') in filename:
        return 'fits'
    elif 'cfg' in filename:
        return 'ascii'
    else:
        return 'hessio'        
         
    
def load_hessio(filename):
    """
    Function to open and load a hessio file
    
    Parameters
    ----------
    filename: string
        name of the file
    """
    event = h.file_open(filename)
    nextevent_hessio()
    print("Hessio file %s has been opened" % filename)
    return event
    
def nextevent_hessio():
    """
    Function to switch to the next event within the open hessio file
    """
    next(h.move_to_next_event())
    
def close_hessio(item):
    """Function to close a hessio file"""
    h.close_file()
    print("Hessio file has been closed.")

def load_fits(filename):
    """
    Function to open and load a fits file
    
    Parameters
    ----------
    filename: string
        name of the file
    """
    hdulist = fits.open(filename)
    print("Fits file %s has been opened" % filename)
    return hdulist

def close_fits(hdulist):
    """
    Function to close a fits file
    
    Parameter
    ---------
    hdulist: HDUList
        HDUList object of the fits file
    """    
    a = hdulist.close()
    print("Fits file has been closed.")
    print(a)

def get_var_from_file(filename):
    """
    Function to load and initialize a module implemented as a Python source
    file called `filename` and to return its module objects.
    
    Parameter
    ---------
    filename: ASCII file
        file in which the module objects are defined
    """
    f = open(filename)
    global data
    data = imp.load_source('data', '', f)
    f.close()
    
def load_ascii(filename):
    """Function to open and load an ASCII file"""
    file = open(filename,'r')
    print("ASCI file %s has been opened." % filename)
    temp_filename = '%s_temp.txt' % os.path.splitext(os.path.basename(filename))[0]
    print("Temporary file ",temp_filename," created.")
    temp_file = open(temp_filename, 'w')    
    for line in file:
        if 'echo' in line:
            line = line.replace('echo','#')
        if "%" in line:
            line = line.replace('%','#')
        if line.startswith('#'):
            pass
        else:
            if '=' in line:
                index1 = line.index('=')
                if '#' in line:
                    index2 = line.index('#')-1
                else:
                    index2 = len(line)-1
                line = line[:index1+1]+'['+line[index1+1:index2]+']'+'\n'
                for i in range(4):
                    try: float(line[index1+2+i])
                    except: x = False
                    else:
                        x = True
                        break
                if x==False: line = line[:index1+2]+'"'+line[index1+2:index2+1]+'"'+']'+'\n'
            else:
                line = '\n'
        line = textwrap.dedent(line)
        temp_file.write(line) 
    file.close()
    print("ASCII file has been closed.")
    temp_file.close()
    print("Temporaryly created file has been closed.")
    get_var_from_file(temp_filename)
    os.remove(temp_filename)
    print("Temporaryly created file has been removed.")
    return data
    
    
def close_ascii(filename):
    """Function to close an ASCII file"""
    print("ASCII file has been closed.")
