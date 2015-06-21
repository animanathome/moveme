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

		var googleErrorMessage = "Only google accounts can publish on youtube. Please login using your google account."
		if(! user.hasOwnProperty('services')){
			throw new Meteor.Error('Wrong account', googleErrorMessage);
		}

		if(! user.services.hasOwnProperty('google')){
			throw new Meteor.Error('Wrong account', googleErrorMessage)	
		}
		console.log('\t!-> received google account')
		
		var version = VersionList.findOne(versionAttributes.versionId)
		var renderJob = _.extend(versionAttributes, {
			  versionDescription:version.description
			, accessToken: Meteor.user().services.google.accessToken
			, startFrame: 0
			, endFrame: version.duration
			, screenResolutionX: 1600
			, screenResolutionY: 900
		});

		console.log('\t!-> render job:', renderJob)

		if(!BatchServer){
			throw new Meteor.Error('Empty', "No renderfarm has been defined.");
		}

		var status = BatchServer.status();
		console.log('\t!-> batch server status:', status)
		if( status.connected === true){
			BatchServer.call('hardwareRenderScene', renderJob, function(error, data){
				console.log('result', error, data)
			})
		}else{		
			throw new Meteor.Error('Offline', "Unable to render version since the renderfarm is down. Please try again later.");
		}
	}
})
