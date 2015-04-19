MM.SceneView = function( editor, prefix, parentPanel ){
	// console.log('MM.SceneView', editor, prefix, parentPanel)
    var scope = this;
    
    this.editor = editor
    this.parentPanel = parentPanel // dom
    this.camera = editor.cameras[0]
    // this.backgroundColor = new THREE.Color().setRGB( 0.5, 0.7, 0.7 );
    this.width = 0;
    this.height = 0;
    this.top = 0;
    this.left = 0;
    this.prefix = prefix;
    this.isActive = true;

    //	both objects get managed on the PanelViewLayout level
    // this.canvas = canvas;
    // this.renderer = renderer;
    
    this.canvas = parentPanel.parentLayout.canvas;
    this.renderer = parentPanel.parentLayout.renderer;    

    var signals = this.editor.signals
	var ray = new THREE.Raycaster();
    var projector = new THREE.Projector();

    //  only allow objects with the given tag to be selected
    //  if no tag is specified, then all objects can be selected
    // var selectionTag = undefined;
    var selectionTag = 'control';    

//	MANIPULATOR
    // console.log('manipulator', this.camera, this.canvas)
	var manipulator = new THREE.TransformControls( this.camera, this.parentPanel.dom );
    manipulator.scale = 1;
    manipulator.space = this.editor.activeSpace;
    manipulator.mode = this.editor.activeTool; 
    manipulator.gizmo.name='manipulator'+this.prefix;
    manipulator.hide();
    
    this.editor.addHelper( manipulator.gizmo ); 
    this.manipulator = manipulator

    manipulator.addEventListener( 'start', function(){
        // console.log('SceneView.onStart manipulator')

        editor.getUndoDataForTransformingObjects()
    });

    manipulator.addEventListener( 'change', function(){
    	console.log('SceneView.onChange manipulator')
    //  pass on the tool settings to the editor
        scope.editor.activeTool = manipulator.mode;
        scope.editor.activeSpace = manipulator.space;

        // console.log('\ttool', scope.editor.activeTool)

        signals.objectChanged.dispatch();        
    });   

    //  NOTE: since we can only see the change when we have something selected (since on then the manipulator is displayed) we can't put this here. We have a to place it on a lower (more general) level.

    // manipulator.addEventListener( 'toolchange', function(){
    //     console.log('SceneView.onToolChange')

    //     scope.editor.activeTool = manipulator.mode;
    //     scope.editor.activeSpace = manipulator.space;

    //     signals.manipChange.dispatch();
    // })

    var viewportCameraControl = new THREE.EditorControls(this.camera, this.parentPanel.dom, this.prefix);
    viewportCameraControl.addEventListener('change', function(value)
    {
        // console.log('---------------------------')
        // console.log('camera change', scope.prefix)
        // console.log('active', scope.isActive)
        // // console.log('camera', scope.camera.name)
        // console.log('control', viewportCameraControl.enabled)
        // console.log('control', scope.viewportCameraControl.enabled)
        // console.log('value', value)
        // console.log('camera.enabled', editor.viewportCameraControl.enabled)
        //  re-draw the scene as we're moving the camera around 
        // if(editor.viewportCameraControl.enabled === true){
        // signals.objectChanged.dispatch();

        //  NOTE: changed this from object to scene graph change. This is to ensure we don't create a key by accident since it is triggered during object changed.        
        signals.sceneGraphChanged.dispatch();        
        // }
    });    
    viewportCameraControl.enabled = false;   
    this.viewportCameraControl = viewportCameraControl; 

//	MOUSE EVENTS
    var onMouseDownPosition = new THREE.Vector2();
    var onMouseUpPosition = new THREE.Vector2();
    
    // this.addedEvent = false;
    this.onMouseDown = function ( event ){
        // console.log('SceneView.onMouseDown')
        // console.log('\tmanipulator', manipulator)

        // event.preventDefault();

        onMouseDownPosition.set( event.layerX, event.layerY );
        // viewportCameraControl.enabled = true;
        // editor.keyframeEditorCameraControl.enabled = false

        // console.log('camera.enabled', viewportCameraControl.enabled)

        
        if ( manipulator.hovered === false ){
            // console.log('Cursor is NOT over manipulator')
            manipulator.enabled = false;
            viewportCameraControl.enabled = true; 
        }else{
            // console.log('Cursor is over manipulator')
            manipulator.enabled = true;
            viewportCameraControl.enabled = false; 
        }


        // scope.parentPanel.dom.addEventListener( 'mousemove', onMouseMove, false );
        scope.parentPanel.dom.addEventListener( 'mouseup', onMouseUp, false );
        // scope.addedEvent = true;        
    }
    this.parentPanel.dom.addEventListener( 'mousedown', this.onMouseDown, false );

    // this.resetEvents = function(){
    //     if( scope.addedEvent === true){
    //         scope.parentPanel.dom.removeEventListener( 'mouseup', onMouseUp, false );
    //         scope.addedEvent = false;
    //     }
    // }

    // var onMouseMove = function ( event ){
    //     // console.log('SceneView.onMouseMove')
    //     event.preventDefault();
    // }

    var onMouseUp = function ( event ){
        // console.log('SceneView.onMouseUp')
        

        // event.preventDefault();

        //  determine the selection mode
        //  are we resetting, adding our removing objects from the selection list
        var mode = 'reset'
        if( event.shiftKey === true ){
            mode = 'add'
        }else if(event.altKey === true ){
            mode = 'remove'
        }

        // console.log('\tselection mode:', mode)

        onMouseUpPosition.set( event.layerX, event.layerY );

        // editor.viewportCameraControl.enabled = true; 
        // editor.keyframeEditorCameraControl.enabled = false;
        // console.log('camera.enabled', editor.viewportCameraControl.enabled)  

        if ( onMouseDownPosition.distanceTo( onMouseUpPosition ) < 1 ) {
            var intersects = getIntersects( event, scope.editor.selectableObjects );
            // console.log('Selecting one of', scope.editor.selectableObjects)

            if ( intersects.length > 0 ){
                var object = intersects[ 0 ].object;

                //  check if a selection tag is specified 
                if( selectionTag !== undefined ){
                    //  if so, only allow the objects with the given tag to be
                    //  selected
                    if(object.tag === selectionTag ){
                        scope.editor.select( object, false, mode );    
                    }else{
                        console.log('\t', object.name, 'does not have the proper tag. Skipping selection...')
                    }
                }else{
                    scope.editor.select( object, false, mode );
                }
            }else{
                scope.editor.deselect();
            }
            //	refresh
            // render();
        }
        
        scope.parentPanel.dom.removeEventListener( 'mouseup', onMouseUp ); 
        // scope.parentPanel.dom.removeEventListener( 'mousemove', onMouseMove );    
    }

    var getIntersects = function ( event, object ) {
        // console.log('getIntersects', object)
        
        // console.log('\tmouseX', event.layerX)
        // console.log('\tmouseY', event.layerY)
        // console.log('\twidth', scope.width)
        // console.log('\theigth', scope.height)
        // console.log('\tobjects', object)
        // this.camera = scope.editor.cameras[0]
        // console.log('\tcamera', this.camera)

        if( scope.camera instanceof THREE.OrthographicCamera ){
            var vector = new THREE.Vector3(
                                ( event.layerX / scope.width ) * 2 - 1,
                                - ( event.layerY / scope.height ) * 2 + 1,
                                -1
                    );
            projector.unprojectVector( vector, scope.camera )

            var direction = new THREE.Vector3( 0,0,-1).transformDirection( scope.camera.matrixWorld)

            ray.set( vector, direction )

        } else if ( scope.camera instanceof THREE.PerspectiveCamera ) {
            var vector = new THREE.Vector3(
                                ( event.layerX / scope.width ) * 2 - 1,
                                - ( event.layerY / scope.height ) * 2 + 1,
                                0.5
                    );
            projector.unprojectVector( vector, scope.camera );
            ray.set( scope.camera.position, vector.sub( scope.camera.position ).normalize() );
        }else{
            console.log('Unsupported camera type')
        }
       

        //	NOTE: object should always be a flat array here since we always
        //	pass on the above editor.objects
        if ( object instanceof Array ) {
            return ray.intersectObjects( object , false);
        }
        return ray.intersectObject( object , false);
    };

    signals.manipSpaceChange.add( function ( space )
    {
        // console.log('Viewport: manipSpaceChange', space)

        manipulator.space = space
        signals.objectChanged.dispatch();
    });

    signals.manipModeChange.add( function ( mode ){
        // console.log('Viewport: manipModeChange', mode)

        // if( mode === "select")
        // {
        //     manipulator.hide();
        // }else{                    
            manipulator.setMode( mode )
        // }
        
        signals.objectChanged.dispatch();
    });    

    signals.objectSelected.add( function (){
        console.log('Viewport: objectSelected')

        manipulator.detach();

        //  make sure we have an object selected
        if(editor.selectedObjects.length !== 0 ){
            //  make sure the object isn't a camera
            if ( ! MM.containsInstanceWithinArray( THREE.PerspectiveCamera, 
                editor.selectedObjects)){

                manipulator.multiAttach( editor.selectedObjects );
            }
        }

        //  change the color of the selected control
        //  run the new setSelected and setDeslected methods on control
    });

    signals.objectSelected.add( function( object ){
        manipulator.update()
    });

    signals.objectChanged.add( function ( object ) {
        // console.log('Viewport: objectChanged')
        manipulator.update()
    });

    signals.sceneGraphChanged.add( function(){
        manipulator.update()
    });

    signals.timeChanged.add( function(){
        manipulator.update();
    })

    signals.windowResize.add( function () {
        // console.log('viewport resize window')
        // console.log(editor.activeCamera)        
        // resize();
    });      


    return this;
}   

MM.SceneView.prototype = Object.create( MM.SceneView.prototype );

MM.SceneView.prototype.resize = function(){
	// console.log('MM.SceneView.resize', this.prefix)
	// console.log('\t', this.parentPanel)
	// console.log('\tparentPanel', this.parentPanel)

    // var layout = this.parentPanel.parentLayout;
    // var totalHeight = layout.dom.offsetHeight
    // console.log('\tlheight', totalHeight)

	var panel = this.parentPanel.parentPanel.dom
	this.width = panel.offsetWidth
	this.height = panel.offsetHeight
	this.left = parseInt(panel.style.left)
	this.top = parseInt(panel.style.bottom);
	
	// console.log('\twidth', this.width)
	// console.log('\theight', this.height)
	// console.log('\tleft', this.left)
	// console.log('\ttop', this.top)

    if(this.camera instanceof THREE.OrthographicCamera){
        this.camera.left = this.width/-2;
        this.camera.right = this.width/2;
        this.camera.top = this.height/2;
        this.camera.bottom = this.height/-2;
        this.camera.near = -100;
        this.camera.far = 100;
    }else{
        this.camera.aspect = this.width / this.height; 
    }    
    this.camera.updateProjectionMatrix();
}

MM.SceneView.prototype.activate = function(){
    // console.log('MM.SceneView.activate', this.prefix)
    // console.log('\tcurrent active tool', this.editor.activeTool)

    this.isActive = true;
    if ( this.manipulator.hovered === false ){        
        this.manipulator.enabled = false;
        this.manipulator.setMode( this.editor.activeTool );

        //  make sure don't have any dangling events from the previous session
        this.viewportCameraControl.enabled = true; 
        this.viewportCameraControl.resetEvents();
    }else{
        this.viewportCameraControl.enabled = false; 
    }

}

MM.SceneView.prototype.deactivate = function(){
    // console.log('MM.SceneView.deactivate', this.prefix)

    this.isActive = false;
    this.viewportCameraControl.enabled = false;
    // this.resetEvents();
    // this.manipulator.hide();

    // console.log('\tcontrol', this.viewportCameraControl.enabled)
}

MM.SceneView.prototype.setCamera = function( camera ){
    // console.log('MM.SceneView.setCamera', camera.name)
	this.camera = camera;
    this.viewportCameraControl.setObject(camera);
    this.manipulator.camera = camera;

    // WARNING: we will have to convert this into a list when have multiple panel which all display a scene view
    this.editor.activeCamera = camera;

    if(this.camera instanceof THREE.OrthographicCamera){
        this.camera.left = this.width/-2;
        this.camera.right = this.width/2;
        this.camera.top = this.height/2;
        this.camera.bottom = this.height/-2;
        this.camera.near = -100;
        this.camera.far = 100;
    }else{
        this.camera.aspect = this.width / this.height;   
    }
    this.camera.updateProjectionMatrix();
}

MM.SceneView.prototype.focus = function(){
    console.log('SceneView.focus')
    //  http://answers.unity3d.com/questions/13267/how-can-i-mimic-the-frame-selected-f-camera-move-z.html

    var no = this.editor.selectedObjects.length;

    if(no === 0 ){
        console.log('\tNeed to have something selected to focus on.')
        return;
    }

    var i,j;
    var min = new THREE.Vector3(1000, 1000, 1000);
    var max = new THREE.Vector3(-1000, -1000, -1000);
    for( i = 0, j = no; i<j; i++){
        min.min(this.editor.selectedObjects[i].boundingBox.min)
        max.max(this.editor.selectedObjects[i].boundingBox.max)
    }
    var bb = new THREE.Box3(min,max);
    var size = bb.size();
    var center = bb.center()        
    var radius = size.length()/2.0;
    
    if(this.camera instanceof THREE.OrthographicCamera){
        var width = (this.camera.right-this.camera.left)/2
        var height = (this.camera.top-this.camera.bottom)/2

        var camRadius = 0.5 * Math.sqrt(width * width + height * height);
        var zoomFactor = camRadius / radius;

        if(this.camera.name === 'front'){
            this.camera.position.setX(center.x)
            this.camera.position.setY(center.y)                
        }
        if(this.camera.name === 'side'){                
            this.camera.position.setY(center.y)
            this.camera.position.setZ(center.z)
        }
        if(this.camera.name === 'top'){
            this.camera.position.setX(center.x)
            this.camera.position.setZ(center.z)
        }
        this.camera.zoom = zoomFactor;
    }else{            
        var horizontalFOV = 2.0 * Math.atan(Math.tan(this.camera.fov / 2.0) * this.camera.aspect);

        var fov = Math.min(this.camera.fov, horizontalFOV);
        var dist = Math.abs(radius /  (Math.sin(fov)));
        this.camera.lookAt(center) 

        //  cameras world position
        var wpos = new THREE.Vector3().getPositionFromMatrix(this.camera.matrixWorld)
        var dto = center.distanceTo(wpos)
        var dtt = -1 * (dto - dist);
        this.camera.translateZ(dtt)
    }        
    // console.log('\tsetting center to', center)

    //  update camera controls
    this.viewportCameraControl.focusOnPoint( center)
}

MM.SceneView.prototype.render = function(){
    // console.log('MM.SceneView.render')
	// console.log('MM.SceneView.render', this.prefix, this.camera.name)
	// console.log('\tdimensions', this.width, this.height)

	/*
	NOTE: the actuall renderer get defined in the panelViewLayout ( 2 levels up) as it there where the canvas gets created. Here we just specify which area within the canvas we want to render.
	*/
	
    this.renderer.setViewport( this.left, this.top, this.width, this.height);
    this.renderer.setScissor( this.left, this.top, this.width, this.height);
    this.renderer.enableScissorTest( true )
    this.renderer.setClearColor(this.editor.sceneBackgroundColor)
    this.renderer.clear();
            
    this.camera.aspect = this.width / this.height;
    this.camera.updateProjectionMatrix();

	this.renderer.render( this.editor.scene, this.camera );
}

MM.SceneView.prototype.clear = function(){
    // console.log('MM.SceneView.clear')
    
    //  remove manipulator from scene 
    this.editor.removeHelper(this.manipulator.gizmo);
    
    //  remove any lingering events
    this.viewportCameraControl.clear();
    this.parentPanel.dom.removeEventListener( 'mousemove', this.onMouseDown );
    // console.log('\tdom', this.parentPanel.dom)    
    // console.log('\tremoving', this.viewportCameraControl.prefix)

    delete this.viewportCameraControl;

    //  reset objects
    this.viewportCameraControl = {};    
    this.manipulator = {};
}