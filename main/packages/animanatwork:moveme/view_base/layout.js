MM.NoLayout = function( dom, editor, options){
	/*
	Basic or no layout for rendering purpose. In this instance we only have a renderview. No other controls are present.
	*/
	// console.log('NoLayout')
	// console.log('\tdom', dom)

	var scope = this;
	this.editor = editor;
	this.dom = dom;

	this.canvas = document.createElement( 'canvas' );
	this.canvas.style.position = 'absolute'
	this.canvas.style.left = '0px'
	this.canvas.style.top = '0px'
	this.canvas.style.top = '0px'
	this.canvas.style.bottom = '0px'
	this.dom.appendChild( this.canvas )

	this.renderer = new THREE.WebGLRenderer({ 
		canvas : this.canvas, 
		devicePixelRatio : 1, 
		antialias: true 
	})
    this.renderer.setSize( window.innerWidth, window.innerHeight );	

	var onWindowResize = function ( event ) {
		// console.log('MM.NoLayout.onWindowResize')
		// console.log('\tdom', scope.dom)
		
		var height = window.innerHeight;
		var width = window.innerWidth;

		// console.log('\th', height, ' w', width)

		scope.editor.activeCamera.aspect = width / height;
     	scope.editor.activeCamera.updateProjectionMatrix();
     	
     	scope.renderer.setSize( width , height );

		scope.editor.signals.windowResize.dispatch();
	};
	window.addEventListener( 'resize', onWindowResize, false );

	this.viewportLayout = {};
	this.viewportLayout.render = function(){
		// console.log('render')
		// console.log('\tcamera', scope.editor.activeCamera)
		scope.renderer.render( scope.editor.scene, scope.editor.activeCamera)
	}

	this.update = function(){
		console.log('NoLayout.update')
	}

	onWindowResize();

    return this;
}

MM.Layout = function( dom, editor, options){	
	// console.log('MM.Layout init', dom, editor, options);

	if(dom === undefined){
		// console.log('A parent dom element is required.');
		return;
	}

	if(editor === undefined){
		// console.log('A parent editor is required.');
		return;
	}

	if(options === undefined){
		//	define our default options in case none have been passed
		options = {};
	}
	if(!options.hasOwnProperty('hasNavigation')){
		options['hasNavigation']=true;
	}
	if(!options.hasOwnProperty('hasProjectBar')){
		options['hasProjectBar']=true;
	}
	if(!options.hasOwnProperty('hasMenuBar')){
		options['hasMenuBar']=true;
	}
	if(!options.hasOwnProperty('hasToolBar')){
		options['hasToolBar']=true;
	}
	// console.log('\toptions', options)
	
	var scope = this;
	this.editor = editor;	
	
	this.dom = dom;	
	this.navigation = undefined;
	this.projectbar = undefined;
	this.menubar = undefined;
	this.toolbar = undefined;
	this.viewportLayout = undefined;
	this.timeline = undefined;
	this.rangeslider = undefined;
	this.infoline = undefined;
	this.sidebar = undefined;

	var SIGNAL = signals.Signal;
	this.signals = {
		  sidebarVisibility: new SIGNAL()
		, timeLineVisibility: new SIGNAL()
		, rangeSliderVisibility: new SIGNAL()
        , infoLineVisibility: new SIGNAL()
	}

//	NAVIGATION BAR
	//	In case we have the main navigation bar. This should be hidden or removed however since it takes up a lot of space.			
	if(options.hasNavigation === true ){
		this.navigation = $.find("#movemenav")[0];
	}

//	HOME BUTTON
	var home = new MMUI.A().setImage('/ui/brand.gif').setClass('btn-anim-home')
	home.dom.href='/'
	this.dom.appendChild( home.dom )


//	PROJECTBAR	
	if(options.hasProjectBar === true ){
		this.projectbar = new MM.Projectbar(this.editor, this.dom);
	}

//	MENUBAR
	if(options.hasMenuBar === true){
		var menuOptions = {}
		if( options.hasOwnProperty('menu')){
			menuOptions = options['menu']
		}

		// console.log('\tmenu bar options:', menuOptions)
		this.menubar = new MM.Menubar(this, this.editor, this.dom, menuOptions)
	}

//	SETTINGS BUTTON
	var settings = new MMUI.Button().addGlyphicon('cog').addClass('btn-anim-settings')
	this.dom.appendChild( settings.dom)

//	TOOLBAR
	if(options.hasToolBar === true){
		var toolbarOptions = {}
		if( options.hasOwnProperty('toolbar')){
			toolbarOptions = options['toolbar']
		}

		this.toolbar = new MM.Toolbar( this.editor, this.dom, toolbarOptions);	
	}

//	MAIN LAYOUT PARENT
	var layout = new MMUI.Panel();
	layout.dom.className = 'panellayout'
	layout.dom.style.position = 'relative'	
	this.dom.appendChild( layout.dom )

//	MAIN LAYOUT
	var baseLayout = {
		panels : {
			infoLine:{
	 			 h: [0,5]
				,w: [0,80]
				,td: ['rangeSlider']
				,bd: []
				,rd: ['sidebar']
				,ld: []
				,dh: 5
				,dw: 80
				,v: true
			},
			rangeSlider: {
	 			 h: [5,10]
				,w: [0,80]
				,td: ['timeLine']
				,bd: []
				,rd: ['sidebar']
				,ld: []
				,dh: 10
				,dw: 80
				,v: true
			},
			timeLine: {
	 			 h: [10,20]
				,w: [0,80]
				,td: ['workspace']
				,bd: ['rangeSlider']
				,rd: ['sidebar']
				,ld: []
				,dh: 10
				,dw: 80
				,v: true
			},
			workspace: {
				 h: [20,100]
				,w: [0,80]
				,td: []
				,bd: ['timeLine']
				,rd: ['sidebar']
				,ld: []
				,dh: 75
				,dw: 80
				,v: true
			},
			// assetbar: {
			// 	 h: [0,100]
			// 	,w: [0,20]
			// 	,td: []
			// 	,bd: []
			// 	,rd: ['infoLine','rangeSlider','timeLine','workspace']
			// 	,ld: []
			// 	,v: true
			// 	,dw: 20
			// },
			sidebar: {
				 h: [0,100]
				,w: [80,100]
				,td: []
				,bd: []
				,rd: []
				,ld: ['infoLine','rangeSlider','timeLine','workspace']
				,v: true
				,dw: 20
			}
		},
		//	list of horizontal slider and the panels they influence
		//	bottom to top
		hsliders : {
			rangeSlider: {
				 h: [0, 10] 
				,w: [0, 80]
				,td: ['timeLine']
				,bd: ['rangeSlider']
			},
			timeLine: {
				 h: [10, 20]
				,w: [0, 80]
				,td: ['workspace']
				,bd: ['timeLine']
			}
		},
		//	right to left
		vsliders : {
			  sidebar: {
				 h: [0,100]
				,w: [80, 100]
				,ld: ['workspace', 'timeLine', 'rangeSlider']
				,rd: ['sidebar']
			}
		}
	}

	//	overwrite layout if requested
	if( options.hasOwnProperty('baseLayout')){
		console.log('\toverwriting default baseLayout.');
		baseLayout=options.baseLayout;
	}

	this.layout = new MMUI.PanelLayout( this.editor, this.dom);	
	this.layout.applyRandomColor = false;
	this.layout.setPanelClass = 'layout-panel'
	this.layout.setLayout( baseLayout )
	layout.dom.appendChild( this.layout.dom )
	this.layout.init()
	
// TIMELINE	
	//	create timeline if requested
	var timelinePanel = this.layout.getPanel('timeLine')	
	if(timelinePanel){
		this.timeline = new MMUI.Timeline();
		timelinePanel.dom.appendChild( this.timeline.dom )

		//	hookup timeline related callbacks
		this.timeline.onTimechange( function(){
			// console.log('time change', scope.timeline.time )
			scope.editor.setTime( scope.timeline.time )		
		}).onPlay( function(){
			// console.log('play')
			scope.editor.play();
		}).onNextframe( function(){
			scope.editor.nextFrame()
			// scope.editor.setTime( scope.timeline.time + 1 )
		}).onPreviousframe( function(){
			// scope.editor.setTime( scope.timeline.time - 1 )
			scope.editor.previousFrame();
		}).onStartframe( function(){
			// scope.editor.setTime( scope.startRange )
			scope.editor.startFrame();
		}).onEndframe( function(){
			// scope.editor.setTime( scope.endRange )
			scope.editor.endFrame();
		}).onTimeshift( function(){
			console.log('time shift', scope.timeline.time)
			scope.editor.shiftTime(scope.timeline.time);
		}).onTimerelease( function(){
			console.log('time release')
			scope.editor.signals.objectRefresh.dispatch();
		}).onMovekeysstart(function(){
			console.log('layout.moveKeysstart')
			scope.editor.getUndoTransformDataFromMovedKeys();
		}).onMovekeys( function(){
			console.log('layout.moveKeys', scope.timeline._key_offset, 'for', scope.timeline._start, 'to', scope.timeline._end)
			scope.editor.moveKeys(scope.timeline._start, scope.timeline._end, scope.timeline._key_offset)
		}).onMovekeysend(function(){
			console.log('layout.onMovekeysend')
		})
	}

//	RANGE SLIDER	
	var rangesliderPanel = this.layout.getPanel('rangeSlider')
	if(rangesliderPanel){
		this.rangeslider = new MMUI.RangeSlider();	
		rangesliderPanel.dom.appendChild( this.rangeslider.dom )
		this.rangeslider.init();

		//	RANGE SLIDER -> OUTSIDE
		this.rangeslider.onTimerangechange(function(){
			console.log('MM.TimeRangeChange')

		    scope.editor.startTime = scope.rangeslider.startTime;
		    scope.editor.endTime = scope.rangeslider.endTime;
		    scope.editor.startRange = scope.rangeslider.startRange;
		    scope.editor.endRange = scope.rangeslider.endRange;

		    if( scope.editor.time < scope.editor.startRange){
		    	scope.editor.setTime(scope.editor.startRange);
		    }
		    if( scope.editor.time > scope.editor.endRange ){
		    	scope.editor.setTime(scope.editor.endRange);
		    }
		    if( scope.timeline ){
		    	scope.timeline.setTime( scope.editor.time )
				scope.timeline.setRange( scope.editor.startRange, scope.editor.endRange )
				scope.timeline.setActiveKeys( scope.editor.activeTimeValue )
			}
		})
		this.rangeslider.onAutokeychange(function(){
			console.log('MM.onAutokeychange', scope.rangeslider.autoKey)

			scope.editor.setAutoKey(scope.rangeslider.autoKey)
		})
	}

//	INFO LINE
	var infoLinePanel = this.layout.getPanel('infoLine')
	if(infoLinePanel){
		this.infoLine = document.createElement('a')
		this.infoLine.className='infoLine';
		this.infoLine.textContent='finished startup';
		infoLinePanel.dom.appendChild(this.infoLine)	
	}

//	WORKSPACE
	//	define the default workspace layout
	var viewLayout = {
		panels : {
			view0: {
				 h: [0,100]
				,w: [0,50]
				,td: []
				,bd: []
				,rd: ['view1']
				,ld: []
				,dh: 100
				,dw: 50
				,v: true
			},
			view1: {
	 			 h: [0,100]
				,w: [50,100]
				,td: []
				,bd: []
				,rd: []
				,ld: ['view0']
				,dh: 100
				,dw: 50
				,v: true
			}
		},
		vsliders : {
			view1: {
				 h: [0,100]
				,w: [50, 100]
				,ld: ['view0'] // left dependency
				,rd: ['view1'] // right dependency				
				,td: []
				,bd: []
			}
		}		
	}

	if( options.hasOwnProperty('viewLayout')){
		console.log('\toverwriting default viewLayout.');
		viewLayout=options.viewLayout;
	}

	var workspacePanel = this.layout.getPanel('workspace')
	if(workspacePanel){	
		this.viewportLayout = new MM.PanelViewLayout( this.editor, this.dom);
		this.viewportLayout.setPrefix('workspace')
		this.viewportLayout.setLayout( viewLayout )
		workspacePanel.dom.appendChild( this.viewportLayout.dom )
		this.viewportLayout.init();
	}

//	SIDEBAR
	var sidebarPanel = this.layout.getPanel('sidebar')
	if(sidebarPanel){
		this.sidebar = new MM.Sidebar( this.editor, this.dom )
		sidebarPanel.dom.appendChild( this.sidebar.dom)
	}

//	SETTINGS WINDOW
	var settingsWindow = new MM.SettingsWindow( this.editor );
	this.dom.appendChild( settingsWindow.dom )
	settings.onClick(function(){
		settingsWindow.show();
	})


//	INTERNAL (layout specific ) signal connections
	//	NOTE: since other methods (outside of this scope ) will also need to know whether or not the sidebar is visible we'll have to keep track of it here. Maybe in the form of a simple object property variable
	this.signals.sidebarVisibility.add( function( value ){
		if(scope.layout === undefined){
			return;
		}
		console.log('sidebarVisbility', value )

		if( value === 0){
			scope.layout.hidePanel( 'sidebar');
		}else{
			scope.layout.showPanel( 'sidebar');
		}
	})

	this.signals.timeLineVisibility.add( function( value ){
		if(scope.layout === undefined){
			return;
		}
		console.log('timeLineVisibility', value)
		
		if( value === 0 ){
			scope.layout.hidePanel( 'timeLine')
		}else{
			scope.layout.showPanel( 'timeLine')
		}
	})

	this.signals.rangeSliderVisibility.add( function( value ){
		if(scope.layout === undefined){
			return;
		}

		console.log('rangeSliderVisibility', value)
		if( value === 0 ){
			scope.layout.hidePanel( 'rangeSlider')
		}else{
			scope.layout.showPanel( 'rangeSlider')
		}
	})

	this.signals.infoLineVisibility.add( function( value ){
		if(scope.layout === undefined){
			return;
		}

		console.log('infoLineVisibility', value )
		if( value === 0 ){
			scope.layout.hidePanel( 'infoLine')
		}else{
			scope.layout.showPanel( 'infoLine')
		}
	})

	this.editor.signals.manipModeChange.add( function(tool){
		scope.editor.signals.showInfo.dispatch('Activating '+tool+' tool')
	})

	this.editor.signals.manipSpaceChange.dispatch(function(mode){
		scope.editor.signals.showInfo.dispatch('Setting tool in '+mode+' mode')
	})

//	LISTEN
	var onWindowResize = function ( event ) {
		// console.log('MM.Layout.onWindowResize')

	//	global window height
		var height = window.innerHeight - 5;
		var width = window.innerWidth;

	//	menu height
		var navHeight = 0;
		if( scope.navigation ) navHeight += scope.navigation.offsetHeight;
		if( scope.projectbar) navHeight += scope.projectbar.dom.offsetHeight;
		if( scope.menubar ) navHeight += scope.menubar.dom.offsetHeight;
		if( scope.toolbar ) navHeight += scope.toolbar.dom.offsetHeight		

	//	layout height
		var layoutHeight = height - navHeight;
		layout.dom.style.height = layoutHeight+'px';

	//	update onlaying layout
		if( scope.layout ) scope.layout.resize();
		if( scope.viewportLayout ) scope.viewportLayout.resize();
		if( scope.timeline ) scope.timeline.rebuild();

		editor.signals.windowResize.dispatch();
	};
	window.addEventListener( 'resize', onWindowResize, false );

	var onTimeRangeChanged = function(){
		//	 pass data to the different widgets
		if(scope.timeline){
			scope.timeline.setTime( scope.editor.time )
			scope.timeline.setRange( scope.editor.startRange, scope.editor.endRange )
			scope.timeline.setActiveKeys( scope.editor.activeTimeValue )
		}else{
			console.log('No timeline to update')
		}

		if(scope.rangeslider){
			scope.rangeslider.setRange( scope.editor.startRange, scope.editor.endRange )
			scope.rangeslider.setTime( scope.editor.startTime, scope.editor.endTime )
		}else{
			console.log('No rangeSlider to update')
		}
	}

	//	NOTE: try to the different types of signals contained
	//	In this case the is a keyframe editor related signal which shouldn't have any influence outside of it's scope. Something to look into as it will make debugging and updating the different modules easier.
	this.editor.signals.keyframeEditorKeysUpdated.add( function(){
		// console.log('Layout.keyframeEditorKeysUpdated')
		if(scope.timeline){
			// console.log('\tactive time value:', scope.editor.activeTimeValue )
			scope.timeline.setActiveKeys( scope.editor.activeTimeValue )
		}else{
			console.log('No timeline to update')
		}		
	});

	this.editor.signals.keyframeEditorChanged.add( function(){
		// console.log('MM.Layout.onKeyframeEditorChanged')
		/*
		Every time the key view changes we want to make sure we show the active keyframes to the user.
		*/
		if(scope.timeline){
			scope.timeline.setActiveKeys( scope.editor.activeTimeValue )
		}else{
			console.log('No timeline to update')
		}
	});

	this.editor.signals.keyAuto.add( function(){
		if( scope.rangeslider ){
			scope.rangeslider.setAutoKey(scope.editor.autoKey);
		}else{
			console.log('No rangeslider to update')
		}
	});

	this.editor.signals.layoutResized.add( function( item ){
		// console.log('layoutResized', item)
		if( item === 'main') scope.viewportLayout.resize();		

		if(scope.timeline) scope.timeline.rebuild();
	})

	this.editor.signals.timeChanged.add( function(){
		if(scope.timeline) scope.timeline.setTime( scope.editor.time );
	})	

	this.editor.signals.timeRangeChanged.add( function(){
		onTimeRangeChanged();
	})


	this.editor.signals.showInfo.add( function(info){
		// console.log('showInfo', info)
		if(scope.infoLine){
			scope.infoLine.textContent=info;
		}
	})

	this.update = function(){
		//	the scene or editor settings have changed. Time to reflect these 
		//	changes in the interface

		// console.log('Layout.update')
		onTimeRangeChanged();

		this.viewportLayout.reinit()
	}

//	INIT
	onWindowResize(); // calcuate the proper size of the different panels	
	// onTimeRangeChanged();

	// console.log('\trange', this.editor.startRange, this.editor.endRange)
	
	return this;
}