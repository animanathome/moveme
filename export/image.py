'''
Python module designed to create different resolutions of images. Here we iterate over each image within a given directory and create 4 resolutions of each image. 

Limitations:
Currently both the directories as the file file extensions are hardcoded
'''

import os
from skimage import novice
from skimage.transform import resize

# data_dir = '/Users/manu/GitHub/moveme/main/public/assets/'
data_dir = '/Users/manu/GitHub/moveme/main/public/tutorials/'

def resizeImage(file_path, new_width=640, suffix='_med'):
	print '# resizeImage '+str(file_path)+' '+str(new_width)
	path = os.path.dirname(file_path);
	full_file_name = os.path.basename(file_path)
	file_name, file_extension = os.path.splitext(full_file_name)

	picture = novice.open(file_path)
	current_width =  picture.size[0]
	current_height = picture.size[1]
	
	factor = float(current_width)/ float(new_width);
	new_height = int(round(current_height / factor));
	
	print "#\tshape "+str(new_height)+' '+str(new_width)
	
	new_array = resize(picture.array, (new_height, new_width))	
	picture.array = new_array

	picture.save(os.path.join(path, file_name+suffix+'.png'))


for fl in os.listdir(data_dir):
	if fl.endswith('.png'):
		full_path = os.path.join(data_dir, fl)
		
		resizeImage(full_path, 640, '_r75')
		resizeImage(full_path, 320, '_r50')
		resizeImage(full_path, 160, '_r25')
		resizeImage(full_path, 80, '_r125')
		


