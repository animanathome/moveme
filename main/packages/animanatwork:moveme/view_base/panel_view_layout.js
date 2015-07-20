//	http://threejs.org/examples/webgl_multiple_views.html

MM.PanelViewLayout = function( editor, mdom ){
	// console.log('MM PanelViewLayout')

	var scope = this;

	MMUI.PanelLayout.call( this, editor, mdom);

	this.canvas = undefined;
	this.renderer = undefined;
	this.applyRandomColor = true;
	this.activeLayout = false;
	this.activePanel = undefined;
	this.hasKeyView = false;
	this.editor = editor;

	var onMouseDown = function( event ){
		//var focus = document.activeElement;

		//	Set focus back to the body
		//	This is to ensure we don't keep focus on the last selected input. Otherwise we can't use the hotkeys since they will be seen as values to the selected input field. Removing the focus solves this issue here.		
		document.activeElement.blur();

	}

	var onMouseMove = function( event ){
		scope.activeLayout = false;

		// event.preventDefault();
		var panelName;
		for(panelName in scope.layoutObject['panels']){
			if( event.target.id !== null ){
				if( event.target.id.indexOf( panelName ) !== -1 ){
					// console.log('\tPanelViewLayout', scope.prefix, 'is enabled')
					// console.log('\tActivating', panelName, 'from', event.target.id)
					// console.log('\tActive panel', scope.activePanel)				
					scope.setActivePanel('panelview-'+panelName);	
					scope.activeLayout = true;
				}
			}
		}
		if(! scope.activeLayout ){
			// console.log('\tPanelViewLayout', scope.prefix, 'is disabled')
			scope.resetActivePanel();
		}
	}

	//	NOTE: here we need to attach the event on the global document to ensure we can activate/de-actived the necessary panels. 
	this.mdom.addEventListener( 'mousedown', onMouseDown, false );	
	this.mdom.addEventListener( 'mousemove', onMouseMove, false );	
}

MM.PanelViewLayout.prototype = Object.create( MMUI.PanelLayout.prototype );

MM.PanelViewLayout.prototype.createPanel = function( panel, dir ){
	MMUI.PanelLayout.prototype.createPanel.call(this, panel, dir);

	console.log('PanelViewLayout.createPanel')	

	//	by default we're going to add a scene view
	var container = this.layoutElements['container'][this.newPanelName]

	//	create viewport panel
	var viewportPanel = new MM.PanelView( this.editor, this.newPanelName);
	viewportPanel.setParentPanel( container )	
	viewportPanel.setParentLayout( this )		
	container.add( viewportPanel )

	//	create panel content
	var sceneView = new MM.SceneView( this.editor, this.newPanelName, viewportPanel, this.canvas, this.renderer)			
	viewportPanel.setChildPanel( sceneView )
	viewportPanel.contentType = 'SceneView'

	this.layoutElements['view'][this.newPanelName] = viewportPanel;

	//	default to persp 
	viewportPanel.setCamera( this.editor.cameras[0])()

	//	send a refresh signal
	this.update(true)
}

MM.PanelViewLayout.prototype.deletePanel = function( panel , direction){	
	//	delete attached panelView
	delete this.layoutElements['view'][panel];	
	
	//	run parent method
	MMUI.PanelLayout.prototype.deletePanel.call(this, panel, direction);
	
	// console.log('PanelViewLayout.deletePanel')	
	// console.log('\tlayoutElements', this.layoutElements['view'])
}

MM.PanelViewLayout.prototype.resetActivePanel = function(){
	this.activePanel = undefined;
	this.deactivatePanels();
}

MM.PanelViewLayout.prototype.setActivePanel = function( panelId ){
	// console.log('setActivePanel', panelId)

	var isPanel = String(panelId).split('-')
	if( isPanel.length === 2 ){
		var panelName = isPanel[1]
		
		//	active panel
		if( this.activePanel !== panelName ){			
			// console.log('\tactivating panel', panelName)		
			this.deactivatePanels();
			
			this.activePanel = panelName;
		
		//	re-evaluate the current panel options
			this.activatePanel( panelName )
		}
	}else{		
		if( this.activePanel !== undefined ){
			// console.log('Not a valid view panel', event.target.id, 'deactivating all view panels')
			this.deactivatePanels();
			this.activePanel = undefined;
		}else{
			console.log('Look into this if one of the is still moving...')
			// console.log(this.activePanel)
		}
	}
}

MM.PanelViewLayout.prototype.init = function(){
	// console.log('MM.PanelViewLayout.init')	

//	CANVAS
	if( this.canvas === undefined ){
		this.canvas = document.createElement( 'canvas' );
		this.canvas.style.position = 'absolute'
		this.canvas.style.left = '0px'
		this.canvas.style.top = '0px'

		this.applyRandomColor = false;
		// this.canvas.style.display = 'none'
		
		this.dom.appendChild( this.canvas )
		// console.log('\tcanvas', this.canvas)

	//	RENDERER
		this.renderer = new THREE.WebGLRenderer( { "canvas" : this.canvas, "devicePixelRatio" : 1, antialias: true })

		// allows us to render multiple times on the same canvas
		this.renderer.autoClear = false; 
	    this.renderer.autoUpdateScene = false;    
	}

//	build containers
	// console.log('\tCreating layout elements')

	this.buildContainers();
	this.buildHSliders();
	this.buildVSliders();

	// console.log('\tNumber of panels', this.panelCount());

//	PANEL VIEWS
	//	now for each container, add a viewpanel
	var viewportPanel, container, space;
	this.layoutElements['view'] = {}
	for( space in this.layoutObject['panels'] ){
		// console.log('\tcreating panel view for', space)

		container = this.layoutElements['container'][space]

	//	create panel view
		viewportPanel = new MM.PanelView( this.editor, space);
		viewportPanel.setParentPanel( container )	
		viewportPanel.setParentLayout( this )		
		container.add( viewportPanel )				

	//	scene view
	//	HARDCODED default panel setup
		if( space === 'view0'){
			var sceneView = new MM.SceneView( this.editor, space, viewportPanel, this.canvas, this.renderer)			
			viewportPanel.setChildPanel( sceneView )
			viewportPanel.contentType = 'SceneView'
			
			//	default to persp view
			viewportPanel.setCamera( this.editor.cameras[0])()
		}
		if( space === 'view1'){
			//	since new elements get created during it's initialization we need to be sure we pass on the prefix during the object init
			var keyView = new MM.KeyView( this.editor, space, viewportPanel, this.canvas, this.renderer)
			viewportPanel.dom.appendChild( keyView.dom )


			viewportPanel.setChildPanel( keyView )
			viewportPanel.hideCameraDD();

			this.hasKeyView = true;
			viewportPanel.contentType = 'KeyView'
		}

		this.layoutElements['view'][space] = viewportPanel;
	}
}

MM.PanelViewLayout.prototype.rebuild = function( newLayout ){
	console.log('PanelViewLayout.rebuild')

	this.resetLayout();
	this.setLayout(newLayout)
	this.init();
	this.resize();

	this.editor.signals.objectChanged.dispatch();
}

MM.PanelViewLayout.prototype.deactivatePanels = function(){
	var space;
	for( space in this.layoutElements['view'] ){
		this.layoutElements['view'][space].deactivate();		
	}	
}

MM.PanelViewLayout.prototype.activatePanel = function( panelName ){	
	if( ! this.layoutElements['view'].hasOwnProperty( panelName )){
		// console.log('Unable to find panel', panelName)
		// console.log('Only know', this.layoutElements['view'])
		return;
	}

	this.layoutElements['view'][panelName].activate();		
}

MM.PanelViewLayout.prototype.getViewPanels = function(){
	return this.layoutElements['view']
}

MM.PanelViewLayout.prototype.getViewPanel = function(name){
	return this.layoutElements['view'][name]
}

MM.PanelViewLayout.prototype.focus = function(){
	console.log('PanelViewLayout.focus')
	console.log('\tactive', this.activePanel)
	
	this.layoutElements['view'][this.activePanel].focus();
}

MM.PanelViewLayout.prototype.update = function(){
	console.log('MM.PanelViewLayout.update')

	MMUI.PanelLayout.prototype.update.call(this);

	this.canvas.width = this.dom.offsetWidth;
	this.canvas.height = this.dom.offsetHeight;
	this.renderer.setSize( this.dom.offsetWidth , this.dom.offsetHeight)

	var space;
	for( space in this.layoutElements['view'] ){
		this.layoutElements['view'][space].resize();		
	}		
}

MM.PanelViewLayout.prototype.reinit = function(){
	console.log('PanelViewLayout.reinit')

	var space;
	for( space in this.layoutElements['view'] ){
		this.layoutElements['view'][space].reinit();		
	}
}

MM.PanelViewLayout.prototype.resize = function(){
	/*
	Adjusts all the necessary elements to match with the new dom size
	*/
	MMUI.PanelLayout.prototype.resize.call(this);

	// console.log('PanelViewLayout.resize')
	// console.log('\t', this.layoutObject)

	this.canvas.width = this.dom.offsetWidth;
	this.canvas.height = this.dom.offsetHeight;
	this.renderer.setSize( this.dom.offsetWidth , this.dom.offsetHeight)

	var space;
	for( space in this.layoutElements['view'] ){
		this.layoutElements['view'][space].resize();		
	}	

	return this;
}

//	http://stackoverflow.com/questions/1959040/is-it-possible-to-send-a-variable-number-of-arguments-to-a-javascript-function
MM.PanelViewLayout.prototype.render = function(){
	// console.log('MM.PanelViewLayout.render')	
	var space;
	for( space in this.layoutElements['view'] ){
		// console.log('\trendering', space)
		this.layoutElements['view'][space].render();
	}
}