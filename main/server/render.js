var Future = Npm.require('fibers/future');

Meteor.methods({
	hardwareRenderScene: function( versionAttributes ){
		console.log('hardwareRenderScene')
		console.log('\t!-> module', MMHWR)
		console.log('\t!-> version', versionAttributes)

		var user = Meteor.user();
		if( user === undefined || user === null){
			console.log('No user logged in.')
			return
		}
		
		var version = VersionList.findOne(versionAttributes.versionId)
		var renderJob = _.extend(versionAttributes, {
			  versionDescription:version.description
			, startFrame: 0
			, endFrame: version.duration
			, screenResolutionX: 1600
			, screenResolutionY: 900
		});

		//	assign access token if one is available
		if(user.hasOwnProperty('services')){
			if(user.services.hasOwnProperty('google')){
				renderJob['accessToken'] = Meteor.user().services.google.accessToken
			}	
		}

		console.log('\t!-> render job:', renderJob)

		if(!BatchServer){
			throw new Meteor.Error('Empty', "No renderfarm has been defined.");
		}

		var status = BatchServer.status();
		console.log('\t!-> batch server status:', status)
		if( status.connected === true){
			BatchServer.call('hardwareRenderScene', renderJob, function(error, data){
				if(error){
					throw new Meteor.Error(error)
				}

				console.log('render test is returning ', data)

				//	currently we directly link the url to the shot and version id
				//	be sure we also link the version id to both the gif and image file.

				//	only upload image when we've been given a valid url
				if(data.image_url !== null){
					console.log('downloading image', data.image_url)
					var storedImage = ThumbnailList.insert(data.image_url)
					console.log('image_id', storedImage._id)

					//	link the created image to the shot version
					ThumbnailList.update({
					_id: storedImage._id
					}, { versionId:renderJob.versionId})
					
					storedImage.on('stored', Meteor.bindEnvironment(
						function(data){
							var url = storedImage.url()
							console.log('\timage url:', url)
							if(url !== null){
								//	update version
								VersionList.update(
							        {_id: renderJob.versionId },
							        { $set: {imageUrl: url}}        
							    )

							    console.log('\timage: done updating version with id ', renderJob.versionId)

							    //	update shot
								ShotList.update(
							        {_id: renderJob.shotId },
							        { $set: {latestImageUrl: url}}
							    )

							    console.log('\timage: done updating shot with id ', renderJob.shotId)
							}
						})
					)					
				}

				//	only upload gif when we've been given a valid url
				if(data.gif_url !== null){
					console.log('downloading gif', data.gif_url)
					
					var storedGif = GifList.insert(data.gif_url)
					console.log('gif_id', storedGif._id)

					//	link the created gif to the shot version
					GifList.update({
					_id: storedGif._id
					}, { versionId:renderJob.versionId})

					storedGif.on('stored', Meteor.bindEnvironment(
						function(data, other){
							var url = storedGif.url()
							console.log('\tgif url:', url)
							if(url !== null){
								//	update version
								VersionList.update(
							        {_id: renderJob.versionId },
							        { $set: {gifUrl: url}}        
							    )

							    console.log('\tgif: done updating version with id ', renderJob.versionId)

							    //	update shot
								ShotList.update(
							        {_id: renderJob.shotId },
							        { $set: {latestGifUrl: url}}        
							    )

							    console.log('\tgif: done updating shot with id ', renderJob.shotId)
							}
						})
					)
				}
			})
		}else{		
			throw new Meteor.Error('Offline', "Unable to render version since the renderfarm is down. Please try again later.");
		}
	}
})
