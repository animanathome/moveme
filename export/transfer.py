from ftplib import FTP
import os
import shutil
import json

# run using the following:
# python -u "/Volumes/Dropbox/Dropbox/Public/export/transfer.py"

# http://effbot.org/librarybook/ftplib.htm
def uploadToFtp(ftp, ftpPath, file):
	print 'uploadToFtp '+file
	if not os.path.isfile(file):
		print 'File '+file+' does not exist.'
		return

	ext = os.path.splitext(file)[-1]
	if ext in (".txt", ".htm", ".html", ".js"):
		ftp.storlines("STOR " + ftpPath, open(file))
	else:
		ftp.storbinary("STOR " + ftpPath, open(file, "rb"), 1024)

class Release( object ):
	def __init__(self):
		self.homePath = '/Volumes/Dropbox/Dropbox/Public/'

	def sourceFile(self):
		#	get the number of extensions being used in our app and put them into
		#	a source json file so they can get minified 
		appFile = self.homePath+'appOrig.html'

		startString = '<script src="./three/extensions/'
		endString = '"></script>'
		addString = 'extensions/'

		sourceList = []
		with open(appFile) as f:
			content = f.readlines()
			for line in content:
				nwline = line.strip()				
				if( nwline.count(startString)):
					item = ''					
					item += addString 
					item += nwline.replace(startString, '').replace(endString, '')
					sourceList.append( item )

		minifyIncludePath = 'three/utils/build/includes/'

		with open(self.homePath+minifyIncludePath+'moveme.json', 'w') as outfile:
		  json.dump(sourceList, outfile)

		print 'Done updating moveme minify source file'

	def minify(self): 	
		#	make sure three.js exists in the build directory otherwise the minify 
		#	process will fail
		if not os.path.isfile(self.homePath+'three/build/three.js'):
			shutil.copyfile(self.homePath+'three/build/backup/three.js', self.homePath+'three/build/three.js')
			

		command = 'cd '+self.homePath+'three/utils/build/;'
		command += 'python -u "'+'build.py'
		command += '" --include moveme --minify'
		os.system( command )

		# once we are done minifying, rename the file three.js to moveme.min.js
		# and place it into the parent directory
		shutil.copyfile(self.homePath+'three/build/three.js', self.homePath+'three/three.js')
		os.rename(self.homePath+'three/three.js', self.homePath+'three/moveme.min.js')

		print 'Done copying over moveme.min.js'

	def appFile(self):
		#	get the number of extensions being used in our app and put them into
		#	a source json file so they can get minified 
		appFile = self.homePath+'appOrig.html'

		startString = '<script src="./three/extensions/'
		endString = '"></script>'

		addLine = '\t\t<script src="./three/moveme.min.js"></script>\n'

		#	remove all extensions from file
		noExtensions = []
		extensionsCount = 0
		with open(appFile) as f:
			content = f.readlines()
			for line in content:

				nwline = line.strip()				
				if not nwline.count(startString):
					noExtensions.append( line )
				else:
					# Inject the link to the new minified library just before 
					# where the 'old' extensions where declared. This should but
					# our library at the right place
					if extensionsCount == 0:
						noExtensions.append( addLine )
					extensionsCount += 1;

		#	write out new file
		with open(self.homePath+'app.html', 'w') as outfile:
		  for line in noExtensions:
		  	outfile.write(line)

		print 'Done updating app.html'

	def moveToServer(self):
		#	move our new files to the server
		ftp = FTP('moveme.io', 'movemeio', 'BztkZLQySW9qp')		
				
		# things to sync
		# app.html, default.css and index.html in home folder		
		for homeItem in ['app.html', 'default.css', 'index.html']:
			uploadToFtp( ftp, '/www/'+homeItem, self.homePath+homeItem)

		# all files in folder ui
		for thisFile in os.listdir(self.homePath+'ui/'):
			uploadToFtp( ftp, '/www/ui/'+thisFile, self.homePath+'ui/'+thisFile)

		# three.min, stats.min, signals.min and moveme.min from three folder
		for thisFile in [
							# 'three.min.js', 
							# 'stats.min.js', 
							# 'signals.min.js', 
							'moveme.min.js'
						]:
			uploadToFtp( ftp, '/www/three/'+thisFile, self.homePath+'three/'+thisFile)

		ftp.quit()

		print 'Done syncing files'
										

	def run(self):
		self.sourceFile();
		self.minify();
		self.appFile();
		self.moveToServer();

n = Release();
n.run()