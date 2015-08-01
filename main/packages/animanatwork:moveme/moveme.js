MM = {};

/*
    Static Animation Viewer
 */
MM.View = function( container, url){    
    if( container === undefined ){
        console.log('No parent dom element defined. Unable to continue.')
        return
    }
    
    this.parent = container
    this.file_to_load = url

    //  create an application instance
    this.moveme = new MM.App(container, {
        isView: true
    });

    //  add logo
    var srci = '/ui/brand_mini.png'
    var image = new MMUI.A().setImage(srci).setClass('btn btn-image')
    image.dom.style.backgroundSize='cover';
    image.dom.style.margin = '5px'
    image.dom.style.zIndex = '10'
    image.dom.style.float = 'right'
    image.dom.style.width = '24px';
    image.dom.style.height = '24px';    
    container.appendChild( image.dom )

    container.style.cursor = 'pointer';
    container.style.backgroundColor = '#BFBFBF';
    //  create controls

    return this
}

MM.View.prototype = {
    load: function(){
        console.log('loading ', this.file_to_load)

        var scope = this

        // create a progress bar so we can keep track of how fast the data is loading
        var progressBar = new MMUI.ProgressBar('Loading ...', this.parent, '-mini')

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
        //  update the progress bar as we're building the scene
        //  building the scene will count for 50% of the progress bar
        this.moveme.editor.loader.onprogress = function( value ){
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
                scope.moveme.editor.loader.loadAsJSON(data, function(){
                    scope.moveme.editor.controlsVisibility(false)
                    scope.moveme.editor.jointsVisibility(false)
                    scope.moveme.editor.gridVisibility(false)
                    scope.moveme.editor.stop()
                    scope.moveme.editor.play()
                })
            }, 1000)
        }                   

        xhr.open("GET", this.file_to_load);
        xhr.send();        
    },
    play: function(){
        this.moveme.editor.play()
    }
}

/*
	Interactive Animation Application
*/
MM.App = function( container, options){
	// console.log('MM.App', container, options)

	if( container === undefined ){
		console.log('No parent dom element defined. Unable to continue.')
		return
	}
	if( options === undefined ){
		options = {}
	}

	var scope = this;
    this.dom = container;

    // create editor 
	this.editor = new MM.Editor();
	this.editor.setupDefaultScene();
	this.editor.setupDefaultKeyScene();
	
    // connect layout to editor
    if(options.hasOwnProperty('isRenderer')){
        this.layout = new MM.NoLayout(container, this.editor)
    }else if(options.hasOwnProperty('isView')){
        this.layout = new MM.ViewLayout(container, this.editor)
    }else{
	   this.layout = new MM.Layout(container, this.editor, options);
    }

	var animate = function() {  		
  		//	evaluate the entire scene
	  	requestAnimationFrame( animate );
	  	scope.editor.animate();

	  	if( scope.layout.viewportLayout )
	  		scope.layout.viewportLayout.render();
	};	

	animate();

    //  dispatch a global update/refresh
    scope.editor.signals.objectSelected.dispatch() 

//  HOTKEYS
    //  NOTE: only evaluate
    this.hotkeys = {
          select: [{'keyCode':81}] 		// Q
        , translate: [{'keyCode':87}] 	// W
        , rotate: [{'keyCode':69}]		// E
        , scale: [{'keyCode':82}]		// R
        , bigger: [{'keyCode':187},		// +
        		   {'keyCode': 107}]	// + (numeric keypad)
        , smaller: [{'keyCode':189}, 	// -
        			{'keyCode':109}]	// - (numeric keypad)
        , deleteSelected: [{'keyCode':8}, 	// delete ( backspace)
        				   {'keyCode':46}]		// delete ( > )
        , frame: [{'keyCode':70}]         			// f
        
        , undo: [{'shiftKey':true,'altKey':false,'ctrlKey':false,
                    'keyCode':90}]     // shift + z
        , redo: [{'shiftKey':false,'altKey':true,'ctrlKey':false,
                    'keyCode':90}]        // alt + z
        
        , play: [{'shiftKey':false,'altKey':true,'ctrlKey':false,
                  'keyCode': 86}]   // alt + v
        , previousFrame: [{'shiftKey':false,'altKey':true,'ctrlKey':false,
                           'keyCode':188}]  // alt + <
        , startFrame: [{'shiftKey':true,'altKey':true,'ctrlKey':false,
                        'keyCode':188}] // shift + alt + <
        , nextFrame: [{'shiftKey':false,'altKey':true,'ctrlKey':false,
                        'keyCode':190}] // alt + >
        , endFrame: [{'shiftKey':true,'altKey':true,'ctrlKey':false,
                      'keyCode':190}]   // shift + alt + >
        
        , keyAll: [{'keyCode':83}]					// s
        , keyTranslation:[{'shiftKey':true,'altKey':false,'ctrlKey':false,
                           'keyCode':87}]   // shift + w
        , keyRotation:[{'shiftKey':true,'altKey':false,'ctrlKey':false,
                           'keyCode':69}]   // shift + e
        , keyScale:[{'shiftKey':true,'altKey':false,'ctrlKey':false,
                           'keyCode':82}]   // shift + r
        
        , fileNew: [{'shiftKey':false,'altKey':false,'ctrlKey':true,
                           'keyCode':78}]
        , fileOpen: [{'shiftKey':false,'altKey':false,'ctrlKey':true,
                           'keyCode':79}]
        , fileSave: [{'shiftKey':false,'altKey':false,'ctrlKey':true,
                           'keyCode':83}]                           
    }

    function eventMatchesHotkey( event, hotkey ){
    	// console.log('eventMatchesHotkey')
     //    console.log('\tevent', event)
    	// console.log('\thotkey', hotkey)
    	/*
    		event = hmtl5 javascript event
    		hotkey = {
				action: [{
					'keyCode':145, 'shiftKey':true
				},{
					'keyCode': 123, 'altKey':true
				}]
    		}
    	*/
    	//	check if all of the property values of the hotkey matches with the current event.
    	var i,j, property, matches, toMatch;
    	for( i = 0, j = hotkey.length; i < j; i++){
    		// console.log('\thotkey', hotkey[i])
    		matches=0; toMatch=0;
    		for(property in hotkey[i]){
    			// console.log('\thotkey', property, hotkey[i][property])
    			// console.log('\tevent', property, event[property])
    			if(event[property] === hotkey[i][property]){    		
    				matches+=1;
    			}
    			toMatch+=1;
    		}
    		//	if all of the property values for the current hotkey index match, return true
    		if(matches === toMatch){
		    	// console.log('\tresult', 'true')
		    	return true;
    		}
    	}
    	//	if nothing matches, return false
    	// console.log('\tresult', 'false')
    	return false;
    }

    this.shortcutEvents = function( event ){
        if( scope.editor.useHotKeys !== true){
            console.log('Hotkeys are disabled')
            return
        }

        // console.log('Editor.onKeyDown', event)
        // console.log('\taltKey', event.altKey)
        // console.log('\tctrlKey', event.ctrlKey)
        // console.log('\tshiftKey', event.shiftKey)
        console.log('\tkeycode', event.keyCode)

        if( eventMatchesHotkey( event, scope.hotkeys['select'])){
        	scope.editor.signals.manipModeChange.dispatch('select')
        }
        
		if( eventMatchesHotkey( event, scope.hotkeys['undo'])){
			console.log('\tundo')      
			scope.editor.undo();
        }

        if( eventMatchesHotkey( event, scope.hotkeys['redo'])){
        	console.log('\tredo')
        	scope.editor.redo();
        }        

		if( eventMatchesHotkey( event, scope.hotkeys['deleteSelected'])){
        	console.log('\tdeleteSelected')
        	scope.editor.deleteSelected();
        }

		if( eventMatchesHotkey( event, scope.hotkeys['play'])){
        	console.log('\tplay')
        	scope.editor.play();
        }

		if( eventMatchesHotkey( event, scope.hotkeys['nextFrame'])){
        	console.log('\tnextFrame')
        	scope.editor.nextFrame();
        }

        if( eventMatchesHotkey( event, scope.hotkeys['previousFrame'])){
        	console.log('\tpreviousFrame')
        	scope.editor.previousFrame();
        }

        if( eventMatchesHotkey( event, scope.hotkeys['startFrame'])){
        	console.log('\tstartFrame')
        	scope.editor.startFrame();
        }

        if( eventMatchesHotkey( event, scope.hotkeys['endFrame'])){
        	console.log('\tendFrame')
        	scope.editor.endFrame();
        }

        if( eventMatchesHotkey( event, scope.hotkeys['keyAll'])){
        	console.log('\tkeyAll')
        	scope.editor.keySelectedObjects() 
        }

        if( eventMatchesHotkey( event, scope.hotkeys['translate'])){
            scope.editor.signals.manipModeChange.dispatch('translate')
        }

        if( eventMatchesHotkey( event, scope.hotkeys['rotate'])){
            scope.editor.signals.manipModeChange.dispatch('rotate')
        }

        if( eventMatchesHotkey( event, scope.hotkeys['scale'])){
            scope.editor.signals.manipModeChange.dispatch('scale')
        }

        if( eventMatchesHotkey( event, scope.hotkeys['bigger'])){
            console.log('\tbigger')
            scope.editor.signals.manipScaleChange.dispatch(0.1)
        }

        if( eventMatchesHotkey( event, scope.hotkeys['smaller'])){
            console.log('\tsmaller')
            scope.editor.signals.manipScaleChange.dispatch(-0.1)
        }

        if( eventMatchesHotkey( event, scope.hotkeys['keyTranslation'])){
            scope.editor.keySelectedObjects(['rotation', 'scale'])
        }

        if( eventMatchesHotkey( event, scope.hotkeys['keyRotation'])){
            scope.editor.keySelectedObjects(['position', 'scale'])
        }

        if( eventMatchesHotkey( event, scope.hotkeys['keyScale'])){
            scope.editor.keySelectedObjects(['position', 'rotation'])
        }

        if( eventMatchesHotkey( event, scope.hotkeys['fileNew'])){
            scope.editor.newScene();
        }

        if( eventMatchesHotkey( event, scope.hotkeys['fileOpen'])){
            console.log('pass')
        }   

        if( eventMatchesHotkey( event, scope.hotkeys['fileSave'])){            
            scope.editor.saveSceneLocal();
        }      

        if( eventMatchesHotkey( event, scope.hotkeys['frame'])){
            if( scope.layout.viewportLayout.activePanel !== undefined ){
                scope.layout.viewportLayout.focus();
        	}
        }
    };

    // document.addEventListener( 'keydown', this.shortcutEvents)

    // $(window).on('unload', function(){
    //     document.removeEventListener('keydown', shortcutEvents)
    // })
    // $(window).bind("beforeunload", function(){
    //     document.removeEventListener('keydown', shortcutEvents)
    // })

    //  hide context menu ( when using right mouse button )
    //  this ensures that we can draw our own menu
    if(this.dom.hasOwnProperty('addEventListener')){
        this.dom.addEventListener( 'contextmenu', function ( event ) { 
            event.preventDefault(); }, false );
    }

	// this.editor.loader.loadLocalStorage();

//	APP to METEOR signal connections
	//	in this case we will run the onSaveScene method on the METEOR level when we run the file save method from inside anim. This way we can communicate from anim to METEOR.
	this.editor.signals.sceneSave.add( function(message){
        // console.log('MM.App.editor.sceneSave callback') 
        console.log('\tMM.App.message:', message)

        scope.onSaveScene(message); 
    })

	return this;
};

MM.App.prototype = {
//	SCENE	
	loadScene: function(scene){
		console.log('MM.loadScene', scene)
		this.editor.loadScene( scene )
		return this;
	},

//  BEFORE
	// saveScene: function(){
	// 	return this;
	// },

//  AFTER
    saveScene: function(){
        console.log('MM.App.saveScene')
        // Here we save the entire content of the currenlty loaded scene. This
        // includes both the editor and layout elements.
        
        var sceneData = this.editor.loader.saveAsObject()
        var layoutData = this.layout.saveAsObject()

        console.log('layoutData', layoutData)
        
        return this;
    },
	importAsset: function( asset ){
		console.log('Importing asset', asset)
        try {        
            var importFunction = 'MM.insert'+asset+'(this.editor)'
            eval(importFunction)
        }
        catch(err) {
            console.log('Unable to import asset', asset)
        }
		return this;
	},
	exportAsset: function(){
		return this;
	},
	importAnimation: function( animation ){
		console.log('Import animation', animation)

		this.editor.importAnimation(animation)
	},
	setCurrentTime: function(){
		return this;
	},
	setStartTime: function(){
		return this;
	},
	setEndTime: function(){
		return this;
	},
//	LAYOUT
	hideAllWindows: function(){
		this.layout.maximizeWorkspace();
		return this;
	},
	showAllWindows: function(){
		return this;
	},

//	STUBS	
	onSaveScene: function(message){
		console.log('MM.App.onSaveScene', message)
	}
}