// moveme = {};

Template.anim.rendered = function(){ 
	// console.log('anim', this)
	// console.log('data', this.data)	
	// console.log('panel', this.dom)

	//	Enable full screen mode ( this disables document scroll)
	//	NOTE: since this attribute is persistent during template changes (not sure why - I guess it has something to do with trying to change the least) we have to remove this attribute on ANY other template. This currently happens during header.rendered()
	$('body').attr('class', 'body-anim')

	//	get the divider document element (so we have something we can parent our animation app under)
	//	WARNING: not sure it this save but to ensure we can run this method outside of the scope of this template we added the ability to use another dom element as it's main parent
	var movemeBase = this.dom ? this.dom : this.find("#movemeanim")
	console.log('base', movemeBase)

	//	collect any of the ui settings
	var uiOptions = {}
	if( this.data.hasOwnProperty('ui')){
		uiOptions = this.data['ui']
	}
	console.log('\tui options', uiOptions)

	//	launch in instance of our animation app
	//	NOTE: moveme is defined as a global variable
	//	we can find it in the render template.js
	moveme = new MM.App(movemeBase, uiOptions);
	// console.log('moveme', moveme)

	
//	CONNECT PLUGS
//	animation to projects signals
	//  stubs to allow communication from moveme to meteor
	moveme.onSaveScene = function(message){
		// console.log('Meteor: anim save scene:', message)
		// console.log('\tdata', localStorage.threejsEditor)

		//	get the animation scene data
		//	NOTE: we don't really have to go through the local storage here
		
		var animData = moveme.editor.loader.saveAsJSON()

		console.log('data', animData)

		//	get shot info
		var projectData = moveme.editor.exportPTASettings()
		projectData['description'] = message;

		//	create a new version
		Meteor.call("createSceneVersion", projectData, animData, function(error, data){
				
				if(error){
					throw new Meteor.Error('Unknown', "Unknown error duing new version.");
				}

				//	data returns version id as _id and file id as _fileId
				console.log('\tcreateSceneVersion result data:', data)

				console.log('\tpreparing to run hardwareRenderScene with projectId', projectData.projectId, 'shotId', projectData.shotId, 'versionId', data._id)

			    Meteor.call('hardwareRenderScene', {
			        projectId: projectData.projectId
			      , shotId: projectData.shotId
			      , versionId: data._id
			    }, function(error, data){
			        throwError(error)
			    }) 

				//	go the shot once we've published a new version
				Router.go('shotPage', {
					  projectId: projectData.projectId
					, _id: projectData.shotId
				})			
			}
		);
	}	

//	LOAD SCENE	
	//	OPEN VERSION
	if( this.data.hasOwnProperty('versions')){
		loadedScene = true

		console.log('versions', this.data)

		var versionId;
		//	no version has been saved for the shot
		if( this.data.versions[0] === undefined ){
			versionId = '-1'
			if( moveme.editor.localPTASettingsMatches(
					this.data.projects[0]._id, 
					this.data.shots[0]._id, 
					versionId))
			{
				console.log('Loading local cache.')
				moveme.editor.loadSceneLocal()
			}
		}else{
			//	see if we have the scene already in our local cache
			if( moveme.editor.localPTASettingsMatches(
					this.data.projects[0]._id, 
					this.data.shots[0]._id, 
					this.data.versions[0]._id))
			{
				console.log('Loading local cache.')
				moveme.editor.loadSceneLocal()
			}else{
				console.log('Loading file from server.')

			//	get the associated file version
				var file = FileList.findOne(this.data.versions[0].fileId)
			    if( file === undefined ){
			      console.log('No file found. Nothing to load...')
			    }else{
				    // console.log('\tfile url', file.url())
				    
				    //	the absolute url doesn't seem to work on the server
				    //	local url however does
				    //var absUrl = Meteor.absoluteUrl(file.url());
				    //console.log('\tabsolute file url', file.url())
				    var absUrl = file.url();

					// create a progress bar so we can keep track of how fast the data is loading
				    var progressBar = new MMUI.ProgressBar('Loading scene...')

					// load the data once loaded
					var xhr;
					if(window.XMLHttpRequest){
					    xhr = new XMLHttpRequest()
					}else if(window.ActiveXObject){
					    xhr = new ActiveXObject("Microsoft.XMLHTTP")
					}
					// update the progress bar as we're getting data from the server
					// loading data will count for 50% of the progress bar
					xhr.onprogress = function(evt){						
						if (evt.lengthComputable){  
     						var percentComplete = (evt.loaded/evt.total)*50;
     						console.log('#\tscene loaded:', percentComplete)
     						progressBar.setPercentage(percentComplete)
     					}
					}
					//	update the progress bar as we're building the scene
					//	building the scene will count for 50% of the progress bar
					moveme.editor.loader.onprogress = function( value ){
						var percentComplete = 50+(value*0.5)
						console.log('#\tscene loaded:', percentComplete)
						progressBar.setPercentage(percentComplete)
					}

					// pass the data on to moveme once we have the entire scene file loaded
					xhr.onload = function(){
						// console.log('\tcontent',xhr.responseText)
						// NOTE: to ensure we properly communicate our loading process to 
						// the user we wrapped the building process in a timeout method. 
						// If we don't do this then we don't see the progress bar to update.
						// 
						// load scene file
						setTimeout(function(){
							var data = JSON.parse(xhr.responseText)
							moveme.editor.loader.loadAsJSON(data)
						}, 1000)
					}					

					xhr.open("GET", absUrl);
					xhr.send();
				}
			}
			versionId=this.data.versions[0]._id;
		}

		//	add project data
		moveme.editor.importPTASettings({
			projectId:this.data.projects[0]._id,
			shotId:this.data.shots[0]._id,
			versionId:versionId
		});

		//	set scene title data
		var sceneTitleData = {
			  projectsUrl: Router.routes['prod'].url()
			, projectUrl: Router.routes['projectPage'].url({
			  	_id:this.data.projects[0]._id})
			, projectTitle: this.data.projects[0].title
			, shotUrl: Router.routes['shotPage'].url({
				  projectId: this.data.projects[0]._id
				, _id:this.data.shots[0]._id})
			, shotTitle: this.data.shots[0].title
		}
		moveme.layout.projectbar.setSceneData(sceneTitleData);
	}

	//	OPEN ASSET
	else if( this.data.hasOwnProperty('asset')){
		console.log('Loading asset', this.data.asset.title)
		moveme.importAsset(this.data.asset.title)

		//	load in the animation sample scene, if specified
		//	'/data/sphere/animation/jump.json'
		if( this.data.asset.hasOwnProperty('animation')){
			moveme.importAnimation(this.data.asset.animation)
		}

		var assetTitleData = {
			assetTitle: this.data.asset.title,
			assetUrl: Router.routes['assets'].url()
		}
		moveme.layout.projectbar.setAssetData(assetTitleData)
	}

	//	TRY
	else if( this.data.hasOwnProperty('try') ){
		moveme.layout.projectbar.setTryData()

		// load asset browser
		if(process.env.NODE_ENV !== "development"){
			var i,j;
			var assets = AssetList.find({}).fetch()
			var parent = document.getElementById("movemeanim")
			var dialog = new MMUI.ItemDialog('Insert Asset')
			dialog.body.style.height = '350px'
			for( i = 0, j = assets.length; i < j; i++){
				dialog.addItem(assets[i].thumbnail, assets[i].title)
			}
			dialog.onItemselected(function(){
				var selectedAsset = dialog.getSelected()
				dialog.hide()
				moveme.importAsset(selectedAsset)
			})
			parent.appendChild(dialog.dom)
		}

		//	load local cache
		console.log('Loading local cache.')
		moveme.editor.loadSceneLocal();
	}

	//	LOAD SAVED SCENE SETTINGS
	else{
		console.log('Nothing loaded.')
		moveme.editor.loadSceneSettings();
	}

//	UPDATE LAYOUT
//	this needs to be done since our scene settings are changed. For example start and end range. This means that the layout is not yet showing the proper range.	
	moveme.layout.update();

//	ACTIVATE TOOLTIPS
	//  activate all tooltips for this page
  	$(function (){
    	$('[data-toggle="tooltip"]').tooltip()
  	})

  	$(window).bind('keydown', moveme.shortcutEvents)

}