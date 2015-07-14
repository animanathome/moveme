var CLIENT_ID = "384169809029-juf205k96fnvjraqaj20rhu1eptl8abr.apps.googleusercontent.com"
var CLIENT_SECRET = "3XqBXjiskWRnjOQeIIokdeK0"    
var REDIRECT_URL = "http://localhost:5000/oauth2callback"  

// Write your package code here!
// http://localhost:3000/render/project/Ed76MEMMLmSxLi3LG/shot/7aBe4Rc9MWwJeAELA/version/79mR3pkeXvGg48vmQ
// var casper = Meteor.npmRequire("casper").create({logLevel:"debug"});
// var casper = Meteor.npmRequire('casperjs');
// var path = Meteor.npmRequire('path')
// var fs = Meteor.npmRequire('fs');
// var childProcess = Meteor.npmRequire('child_process')
var path = Npm.require('path')
var fs = Npm.require('fs');
var childProcess = Npm.require('child_process')

MMHWR = {};

// 	http://stackoverflow.com/questions/28105957/meteor-and-the-private-directory
// 	http://stackoverflow.com/questions/17740790/dynamically-insert-files-into-meteor-public-folder-without-hiding-it

/**
 * reformatFrame reformats an int value like 90 to a string value of '0090'
 */
MMHWR.reformatFrame = function(i){
	console.log('reformatFrame', i)
	var fas = i.toString() // WARNING - this is a asynchronous call!
	
	var frame;
	if(fas.length === 1){
	    frame = '000'+fas
	}else if(fas.length === 2){
	    frame = '00'+fas
	}else if(fas.length === 3){
	    frame = '0'+fas
	}else if(fas.length === 4){
	    frame = fas
	}

	console.log('\treturning', frame)

	return frame
}

/**
 * renderScene is the main method which should be used when rendering a scene. 
 * It currently consists of the following steps:
 * 1. render sequence
 * 2. once 1 is finished, collect a images to represent the performance 
 * 3. once 1 is finished, create an animated gif to represent the performance
 * 4. once 1 is finished, upload video to ? (youtube for now) if requested 
 * 5. once 2 and 3 are finished we run the call which returns the urls of the 
 * created content so they can be downloaded and added to the version/shot.
 * 6. once 4 is finished, we can remove the image sequence
 * cleanScene should be run once the content from 2 and 3 has been downloaded.
 * This method will remove all of the created content from rendering this scene.
 *
 * To ensure we do not have any clashes the content of each version should be 
 * created within its own folder!
 */
MMHWR.renderScene = function(options, icallback){
	console.log('MMHWR.renderScene')
	/*
	{
		projectId:this.projectId
      , shotId:this.shotId
      , versionId:this._id
      , versionDescription:description

      , startFrame:0
      , endFrame:24
      
      , screenResolutionX:800
      , screenResolutionY:600
	}
	*/

	//	get the source path
	var user = process.env.HOME || process.env.HOMEPATH || process.env.USERPROFILE 
	console.log('user', user)

	//	get the path to the render command	
	//	NOTE that render is the name of a moveme sub package!
	rootPath = path.join(user, 'GitHub/moveme/render')
	if(! fs.existsSync(rootPath)){
		throw ("Unable to find path to render command, should be "+rootPath)
	}
	console.log('\trender path command:', rootPath)
	options['rootPath']=rootPath

	//	get the path to the publish directory.
	//	NOTE: we can not publish to public folder since meteor restarts every time
	//	the content changes
	publishPath = path.join(user, 'GitHub/moveme/output/', options.versionId)
	if(fs.existsSync(publishPath)){
    	console.log('\t', publishPath, 'already exists')
    }else{
    	console.log('\tcreating publish directory folder', publishPath)
    	fs.mkdirSync(publishPath)
    }
    console.log('\tpublish path:', publishPath)
	options['publishPath']=publishPath

	console.log('full options:')
	console.log(options)

	//	since renderSequence is run within a sub process we need to run a callback 
	//	if we want to run a process once it's rendered!
	MMHWR.renderSequence(options, Meteor.bindEnvironment(
		function(){
			// create movie
			MMHWR.createMovie(options, Meteor.bindEnvironment(
				function(data){
					//	only upload to youtube when we actually have a acces token
					if(options.hasOwnProperty('accessToken')){
						MMHWR.uploadToYouTube(options, data, Meteor.bindEnvironment(
							function(error, options, ydata){
								// update collection
								MMHWR.updateVersion(error, options, ydata)
							})
						);	
					}					
				})
			);

			//	create images
			MMHWR.image(options, Meteor.bindEnvironment(
				function(options){
					MMHWR.gif(options, Meteor.bindEnvironment(
						function(options){
							image_url = ThumbnailList.findOne({_id:options.imageId}).url()
							gif_url = GifList.findOne({_id:options.gifId}).url()

							abs_image_url = Meteor.absoluteUrl(image_url)
							abs_gif_url = Meteor.absoluteUrl(gif_url)

							icallback({
								'image_url': abs_image_url,
								'gif_url': abs_gif_url
							})

							MMHWR.cleanupSequence(options)
						})
					)
				})
			)
		})
	);
}

/**
 *  imag is a wrapper method which combines create and save image into one method
 *  this to increase readabilty
 */
MMHWR.image = function( options, callback){
	console.log('image')

	MMHWR.createImage(options, Meteor.bindEnvironment(
		function(options){
			MMHWR.saveImage(options, Meteor.bindEnvironment(
				function(options){
					if(callback !== undefined){
						callback(options)	
					}					
				})
			)
		})
	)
}

/**
 * createImage create a resized image from one of the previously rendered images
 * the current resolution is 1600x900
 */
MMHWR.createImage = function( options, callback){
	var rootPath = options['publishPath']
	var framePath = path.join(rootPath, 'frames')
	var imagePath = path.join(rootPath, 'image')

	// create gif directory
    if(fs.existsSync(imagePath)){
    	console.log('\t', imagePath, 'already exists')
    }else{
    	console.log('\tcreating folder', imagePath)
    	fs.mkdirSync(imagePath)
    }

    // avoiding the use of toString here since it is an asynchronous method
    var frame = ''
    if(options.startFrame < 10){
    	frame = '000'+options.startFrame
    }else if(options.startFrame < 100){
    	frame = '00'+options.startFrame
    }else if(options.startFrame < 1000){
    	frame = '00'+options.startFrame
    }else{
    	frame = options.startFrame
    }

    var command = 'convert -resize 800x450'
    thisFilename = path.join(framePath, options.versionId+'-'+frame+'.png')
    command += ' '+thisFilename
    targetFile = path.join(imagePath, options.versionId+'.png')
    command += ' '+targetFile

    console.log('running image command', command)

	childProcess.exec(command, function (error, stdout, stderr){
		if (error !== null) {
			console.log('exec error: ' + error);
		}

		console.log('done creating image')
		options['pathToImage'] = targetFile

		if(callback !== undefined) callback(options);
	})
}

MMHWR.saveImage = function(options, callback){
	console.log('saveImage', options['pathToImage'])

	var storedImage = ThumbnailList.insert(options['pathToImage'])
	console.log('saved image in collection', storedImage._id)

	options['imageId'] = storedImage._id

	//  Update file to link to shot version
	// only run the callback when the object is actually stored. Otherwise we'll
	// get null when asking for the url
	// From ColectionFS gitub comments: XXX Because of the way stores inherit 
	// from SA, this will emit on every store.
	storedImage.once('stored', Meteor.bindEnvironment(
		function(storeName){
			console.log('done', storeName)
			
			if(storedImage.url() !== null){
				console.log('done saving image')			
				if(callback !== undefined){
					callback(options);
				}
			}
		})
	)

	// if(callback !== undefined) callback(options);
}


/**
 *  gif is a wrapper method which combines create and save gif into one method
 *  this to increase readabilty
 */
MMHWR.gif = function(options, callback){
	console.log('gif')

	MMHWR.createGif(options, Meteor.bindEnvironment(
		function(options){
			MMHWR.saveGif(options, Meteor.bindEnvironment(
				function(options){
					if(callback !== undefined){
						callback(options)
					}
				})
			)
		})
	)
}

/**
 *	createGif creates an animated gif from the previously rendered image sequence.
 *	This following the following process: 
 *	1. get image range
 *	2. get image frames (based on the range and the number of images we want in our gif)
 *	3. construct convert command
 *	4. run convert command
 *	5. copy animated gif over to public folder for sharing
 *	The latter is actually done in a seperate method due to scope (Fiber) issues.
 */
MMHWR.createGif = function( options, callback){
	var rootPath = options['publishPath']
	var framePath = path.join(rootPath, 'frames')
	var gifPath = path.join(rootPath, 'gif')

	// create gif directory
    if(fs.existsSync(gifPath)){
    	console.log('\t', gifPath, 'already exists')
    }else{
    	console.log('\tcreating folder', gifPath)
    	fs.mkdirSync(gifPath)
    }

	var command = 'convert -resize 240x135'

	//	define the number of samples where are going to take
	var framesPerSample = 2
	var duration = parseInt(options.endFrame) - parseInt(options.startFrame)
	var samples = parseInt(duration/framesPerSample)
	
	//	here we are going to take 1 frame for every 2 frames of animation 
	//	that takes it to about 12 frames per second
	//	NOTE: to keep the file size down we're currently going to reduce the clip length to 2 seconds
	var i, thisSample, thisFilename, frame;
	for( i = 0; i < samples; i++){
		thisSample = options.startFrame + (i * framesPerSample)
		
		if(thisSample <= options.endFrame && i <= 24){
		    // avoiding the use of toString here since it is an asynchronous method
		    frame = ''
		    if(thisSample < 10){
		    	frame = '000'+thisSample
		    }else if(thisSample < 100){
		    	frame = '00'+thisSample
		    }else if(thisSample < 1000){
		    	frame = '00'+thisSample
		    }else{
		    	frame = thisSample
		    }

			thisFilename = path.join(framePath, options.versionId+'-'+frame+'.png')
			command += ' '+thisFilename
		}
	}
	command += ' -compress lzw'
	command += ' '+path.join(gifPath, options.versionId+'.gif')
	console.log(command)

	childProcess.exec(command, function (error, stdout, stderr){
		if (error !== null) {
			console.log('exec error: ' + error);
		}

		console.log('done creating gif')		
		pathToGif = path.join(gifPath, options.versionId+'.gif')
		options['pathToGif'] = pathToGif

		if(callback !== undefined) callback(options);
	})
}

MMHWR.saveGif = function(options, callback){
	console.log('saveGif', options['pathToGif'])

	var storedGif = GifList.insert(options['pathToGif'])
	console.log('saved gif in collection', storedGif._id)

	options['gifId'] = storedGif._id

	// only run the callback when the object is actually stored. Otherwise we'll
	// get null when asking for the url
	// From ColectionFS gitub comments: XXX Because of the way stores inherit 
	// from SA, this will emit on every store.
	storedGif.once('stored', Meteor.bindEnvironment(
		function(storeName){
			console.log('done', storeName)

			if(storedGif.url() !== null){
				if(callback !== undefined){
					callback(options);
				}
			}
		})
	)

	// if(callback !== undefined) callback(options);
}

MMHWR.renderSequence = function( options, callback ){
	console.log('MMHWR.renderSequence', options)

	//	https://gist.github.com/rdpanek/867fc40e68c3160739e1
	//	sudo npm install -g slimerjs
	var rootPath = options['rootPath']
	var binPath = 'casperjs'//'/usr/local/lib/node_modules/casperjs'
    var scriptPath = path.join(rootPath, 'createMovie.js');

//	create frames directory
	var publishPath = options['publishPath']
    var framePath = path.join(publishPath, 'frames');
    if(fs.existsSync(framePath)){
    	console.log('\t', framePath, 'already exists')
    }else{
    	console.log('\tcreating folder', framePath)
    	fs.mkdirSync(framePath)
    }

//	create render command
    var command = binPath;
    command += ' --engine=slimerjs';
    command += ' --startFrame='+options.startFrame;
    command += ' --endFrame='+options.endFrame;

    command += ' --framesPath='+framePath

    command += ' --projectId='+options.projectId;
    command += ' --shotId='+options.shotId;
    command += ' --versionId='+options.versionId;

    command += ' --screenResolutionX='+options.screenResolutionX;
    command += ' --screenResolutionY='+options.screenResolutionY;
    command += ' '+scriptPath

    console.log('\trender command', command)

    childProcess.exec(command, function (error, stdout, stderr) {
		console.log('stdout: ' + stdout);
		console.log('stderr: ' + stderr);
		
		if (error !== null) {
			console.log('exec error: ' + error);
		}

		if(callback !== undefined) callback();

		console.log('done rendering sequence')
	});
}

MMHWR.createMovie = function( options, callback ){
	console.log('MMHWR.createMovie', options)

	var rootPath = options['publishPath'];
	var imagePath = path.join(rootPath, 'frames', options.versionId+'-%04d.png')
	var movieFile = path.join(rootPath, 'movie', options.versionId+'.mp4')
	var mcommand = "ffmpeg -r 24 "
	mcommand += " -i "+imagePath
	mcommand += " -s "+options.screenResolutionX+"x"+options.screenResolutionY
	mcommand += " -b 1280k -vcodec libx264 "
	mcommand += movieFile
	
	console.log('\tmovie command:', mcommand)

//	make sure we have a place to store the movie file
//	create movie directory   
    var moviePath = path.join(rootPath, 'movie');
    if(fs.existsSync(moviePath)){
    	console.log('\t', moviePath, 'already exists')
    }else{
    	console.log('\tcreating folder', moviePath)
    	fs.mkdirSync(moviePath)
    }

//	make sure the file doesn't already exist ( otherwise ffmpeg will stop )
	if(fs.existsSync(movieFile)){
		console.log('\tMovie file already exists. Skipping step...')
		if(callback !== undefined) callback( movieFile );
		
		return;
	}

//	convert sequence into a single movie file
	childProcess.exec(mcommand, function (error, stdout, stderr) {
		console.log('stdout: ' + stdout);
		console.log('stderr: ' + stderr);
		if (error !== null) {
			console.log('exec error: ' + error);
		}

		if(callback !== undefined) callback( movieFile );

		console.log('done creating movie');
	});
}

// http://www.geedew.com/remove-a-directory-that-is-not-empty-in-nodejs/
MMHWR.removeDirectory = function( path ){	
	if(fs.existsSync(path))
	{
		fs.readdirSync(path).forEach(
			function(file,index){
				var curPath = path + "/" + file;
				if(fs.lstatSync(curPath).isDirectory()) { // recurse
					MMHWR.removeDirectory(curPath);
				} else { // delete file
					fs.unlinkSync(curPath);
				}
			}
		);
		fs.rmdirSync(path);
	}
}

MMHWR.cleanupSequence = function( options ){
	console.log('MMHWR.cleanupSequence', options)

	var rootPath = options['publishPath']
	var framePath = path.join(rootPath, 'frames')

	MMHWR.removeDirectory(framePath)
}

MMHWR.cleanupMovie = function( options ){
	console.log('MMHW.cleanUpMovie', options)

	var rootPath = options['publishPath'];
	var movieFile = path.join(rootPath, 'movie', options.versionId+'.mp4')
	fs.unlink(movieFile, function (err) {		  	
		if(err) throw err;
	});
}

MMHWR.uploadToYouTube = function( options, data, callback){
	console.log('uploadToYouTube', options, data)

	//	make sure the sure the user is logged in with a google account
	// if( Meteor.user() === null
	// || Meteor.user().services === undefined)
	// {
	// 	console.log('User not logged in with google account')
	// 	return;
	// }

	var oauth2Client = new googleapis.auth.OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URL);
	oauth2Client.setCredentials({
		// access_token: Meteor.user().services.google.accessToken
		access_token: options.accessToken
	});
	googleapis.options({ auth: oauth2Client });


	/*
	//	Example Youtube data snippet
	{ 
		kind: 'youtube#video',
		etag: '"k1sYjErg4tK7WaQQxvJkW5fVrfg/FQ5Y--RbW3Nb7trPwqXGkN2qm0o"',
		id: 'gqfx3XECjDw',
		snippet: { 
				publishedAt: '2015-02-13T17:20:56.000Z',
				channelId: 'UCW2CnKDtSMyj50Gp9_uqGMQ',
				title: 'Made the jump higher',
				description: 'Made the jump higher',
				thumbnails: { 
					default: [Object], 
					medium: [Object], 
					high: [Object] 
				},
		channelTitle: 'Emmanuel Seynaeve',
		categoryId: '22',
		liveBroadcastContent: 'none',
		localized: 
			{ 
				title: 'Made the jump higher',
				description: 'Made the jump higher' } 
			},
		status: 
			{ uploadStatus: 'uploaded',
			  privacyStatus: 'private',
			  license: 'youtube',
			   embeddable: true,
				publicStatsViewable: true 
			} 
	}
	*/

	// var callback = function(error, data){
	// 	if( error === null ){
	// 		console.log('Youtube callback: data', data)
	// 	}else{
	// 		console.log('error', error)
	// 	}
	// }

	var Youtube = googleapis.youtube("v3");
	
	Youtube.videos.insert({
		part: 'status,snippet',
		resource: {
		snippet: {
		title: options.versionDescription,
		description: options.versionDescription
		},
		status: { 
			privacyStatus: 'public' //if you want the video to be private
		}
	},
		media: {
			body: fs.createReadStream(data)
		}
	}, function(error, data){
		if(error){
			console.log('Someting went wrong during youtube video upload.')
			callback(error, null, null);
		} else {
			console.log('Succesfully uploaded video. Running callback.')
			callback(null, options, data);
		}
	});  
}

MMHWR.updateVersion = function( error, options, data ){
    console.log('updateVersion', error, options, data)
    console.log('youtube video id:', data.id)

    console.log('updating version', options.versionId)
    VersionList.update(
        {_id: options.versionId },
        { $set: 
        	{youTubeId: data.id}
    	}        
    )
    console.log('done updating version')

    console.log('updating shot', options.shotId)
    ShotList.update(
        {_id: options.shotId },
        { $set: 
        	{latestVersionYoutubeId: data.id}
    	}        
    )
    console.log('done updating shot')
}