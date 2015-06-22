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
MMHWR.renderScene = function(options){
	console.log('MMHWR.renderScene', options)
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

	//	depending on the environment this will change
	var posPath = [  '/Users/manu/GitHub/moveme/render'
					,'/Users/animanatwork/GitHub/moveme/render']
	var rootPath;
	for( var i = 0; i < posPath.length; i++){
		if(fs.existsSync(posPath[i])){
			rootPath=posPath[i];
		}
	}
	// console.log('\trootPath:', rootPath)
	options['rootPath']=rootPath;
	console.log('\t!->options', options)
	
	MMHWR.renderSequence( options, Meteor.bindEnvironment(function(){		
		MMHWR.createMovie( options, Meteor.bindEnvironment(function(data){			
			// MMHWR.cleanupSequence( options );
			
			MMHWR.uploadToYouTube( options, data, Meteor.bindEnvironment(function(error, options, ydata){
				MMHWR.updateVersion(error,options, ydata)
				
				MMHWR.onDone(error, ydata)

				return ydata;
			}));
		}))
	}));
}

MMHWR.renderSequence = function( options, callback ){
	console.log('MMHWR.renderSequence', options)

	//	https://gist.github.com/rdpanek/867fc40e68c3160739e1
	//	sudo npm install -g slimerjs
	var rootPath = options['rootPath']
	var binPath = 'casperjs'//'/usr/local/lib/node_modules/casperjs'
    var scriptPath = path.join(rootPath, 'createMovie.js');

//	create frames directory
    var framePath = path.join(rootPath, 'frames');
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

	var rootPath = options['rootPath'];
	var imagePath = path.join(rootPath, 'frames', options.versionId+'%d.png')
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

MMHWR.cleanupSequence = function( options ){
	console.log('MMHWR.cleanup', options)

	var rootPath = options['rootPath'];
	var framePath = path.join(rootPath, 'frames');
	
	fs.readdir(framePath, function(err, files){
		for( var i = 0; i < files.length; i++){
			//	make sure we only delete the files of the current sequence
			if( files[i].indexOf(options.versionId) !== -1){
				console.log('\tremoving', files[i])
				
				var thisFile = path.join(rootPath, 'frames', files[i]);			
				fs.unlink(thisFile, function (err) {		  	
			  		if (err) throw err;		  		
				});
			}
		}
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
			privacyStatus: 'private' //if you want the video to be private
		}
	},
		media: {
			body: fs.createReadStream(data)
		}
	}, function(error, data){
		if(error){
			callback(error, null, null);
		} else {
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
        { $set: {
            youTubeId: data.id 
        }}        
    )
    console.log('done updating version')

    console.log('updating shot', options.shotId)
    ShotList.update(
        {_id: options.shotId },
        { $set: {
            latestVersionYoutubeId: data.id 
        }}        
    )
    console.log('done updating shot')
}