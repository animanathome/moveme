MM.Editor.prototype.newScene = function ( ){
    //http://stackoverflow.com/questions/10823408/performance-drops-when-trying-to-reset-whole-scene-with-three-js
    //https://github.com/mrdoob/three.js/issues/2760
    // console.log('Editor: sceneNew')
    this.loader.saveLayout();

    //  NOTE: might be better to store the scene settings
    //  seperate from the scene.
    
    if ( localStorage.threejsEditor !== undefined ){
        delete localStorage.threejsEditor;
    }

    location.href = location.pathname;
    
    this.signals.showInfo.dispatch('New scene')
    this.signals.sceneNew.dispatch()
}

MM.Editor.prototype.setScene = function ( scene ){
    var animCurves, thisObject;
    this.scene.name = scene.name; 
    while ( scene.children.length > 0 ) {
        thisObject = scene.children[ 0 ]
        
        if( thisObject === undefined )
            continue

        //  add created object to scene
        this.addObject( thisObject );

        //  pass on the animation curves from each object            
        if( thisObject.isAnimated() ){
            animCurves = thisObject.animCurves
            for( var i = 0; i < animCurves.length; i++){
                this.addAnimCurve( animCurves[i])
            }
        }
    }
}

MM.Editor.prototype.saveScene = function(message){
    // console.log('Editor.saveScene', message)
    // var savedData = this.loader.saveLocalStorage()
    this.signals.sceneSave.dispatch( message );
}

MM.Editor.prototype.saveSceneLocal = function(){
    // console.log('Editor.saveSceneLocal')
    this.loader.saveLocalStorage();    
}

MM.Editor.prototype.loadSceneLocal = function(){
    // console.log('Editor.loadLocalStorage')
    this.loader.loadLocalStorage()
}

MM.Editor.prototype.saveSceneAs = function ()
{
    // console.log('Editor.saveSceneAs')
    return this.loader.saveAsJSON();
}

MM.Editor.prototype.loadScene = function( file )
{
    // console.log('Editor.loadScene')
    this.loader.loadJSONFile( file )
}

//  HELPERS
MM.Editor.prototype.addHelper = function ( object ){
    // console.log('Editor: addHelper', object.name)

    //  add object to the helper list
    this.helpers.push( object )
    
    //  add helper to the render scene
    this.scene.add( object )

    this.signals.helperAdded.dispatch( object );
    this.signals.sceneGraphChanged.dispatch();
}

MM.Editor.prototype.removeHelper = function ( object ){
    // console.log('Editor: removeHelper', object.name)

    if ( object === undefined ) return;

    //  remove from our flat internal list
    this.helpers.splice( this.helpers.indexOf( object ), 1 );

    //  remove all children
    var scope = this
    for(var i = 0; object.children.length; i++){
        scope.removeHelper( object.children[0])
    }

    object.parent.remove( object );

    this.signals.helperRemoved.dispatch( object );
    this.signals.sceneGraphChanged.dispatch();
}

MM.Editor.prototype.deleteSelected = function ( ){
    //  General delete method
    //  Here we start with the lowest element and work our way up
    //  THis means: keys -> animCurves -> object -> asset
    //  Here we only want to delete the lowest selected element
    //  NOTE: that in case of an asset this is not true. Here we actually
    //  want to make sure we remove everything associated to the selected
    //  asset
    // console.log('deleteSelected')

    var i, j;
    if( this.selectedObjects.length === 0 )
    {
        // console.log('\tNothing selected. ')
    }else{
        //  might be better to ask the object if it has any animCurves selected?
        if( this.selectedAnimCurves.length === 0 ){
            for( i = 0, j = this.selectedObjects.length; i < j; i++){
                // console.log('\tDeleting object with name ', this.selectedObjects[i].name)

                //  check whether or not we're dealing with an asset
                //   in case of a 'normal' object, we just have to delete the
                //   object
                if( this.selectedObjects[i].asset === undefined){
                    this.removeObject( this.selectedObjects[i])

                //  if an asset, delete all of the object associated with this
                //  instance of the asset
                }else{
                    this.removeAsset( this.selectedObjects[i])
                }
            }                
            this.deselect( true ) // use true so it doesn't show up in undo
        }else{
            for( i = 0, j = this.selectedObjects.length; i < j; i++){
                if( this.selectedObjects[i].hasKeysSelected() === false ){
                    // console.log('\t', this.selected.name, 'has no keys selected')
                    // console.log('\tdeleting curve')                    
                    this.removeSelectedAnimCurves();
                }else{
                    // console.log('\tdeleting keys')
                    this.removeKey();
                }
            }
        }
    }
}

MM.Editor.prototype.initSimpleScene = function(){ 
    // console.log('initSimpleScene')

    var grid = new THREE.GridHelper( 250, 25 );
    grid.name = 'grid'
    this.addHelper( grid );     

    var pcam = new THREE.PerspectiveCamera( 50, 1, 0.1, 1000 );
    pcam.name = 'persp'
    pcam.tag = 'control'
    pcam.position.set( 50, 25, 50 );
    pcam.lookAt( new THREE.Vector3(0,0,0) );   
    this.cameras.push(pcam)
    this.addObject( pcam )     

    var ambient = new THREE.AmbientLight( 0x383838 );
    ambient.name = 'ambient'
    this.addHelper( ambient );

    var spot = new THREE.DirectionalLight( 0xffffff );
    spot.position.set( 0, 1, 1 ).normalize();
    this.addHelper( spot )

     var geometry = new THREE.CubeGeometry( 10, 20, 10);
     var material = new THREE.MeshPhongMaterial( { ambient: 0x050505, color: 0x0033ff, specular: 0x555555, shininess: 30 } );
     var mesh = new THREE.Mesh(geometry, material );
     mesh.name = 'cube1'
     mesh.tag = 'control'
     this.addObject( mesh );        
}

MM.Editor.prototype.setupDefaultScene =function(){

    var grid = new THREE.GridHelper( 250, 25 );
    grid.name = 'grid'
    this.addHelper( grid );        

//  persp
    var pcam = new THREE.PerspectiveCamera();
    pcam.name = 'persp'
    pcam.tag = 'control'
    pcam.setChannelsTranslateAndRotate();
    pcam.custom = {'focusLength': 35, 'frameHeight':24, 'aspect':1, 'near':0.1, 'far':2000}
    pcam.addChannel('custom', 'focusLength')
    pcam.addChannel('custom', 'frameHeight')
    pcam.addChannel('custom', 'near')
    pcam.addChannel('custom', 'far')
    pcam.addChannel('custom', 'aspect')
    pcam.setLens( 35, 24 )
    pcam.position.set( 50, 25, 50 );
    pcam.lookAt( new THREE.Vector3(0,0,0) );   
    this.cameras.push(pcam)
    this.addObject( pcam )    
    this.activeCamera = pcam // set the pCam as active view by default            

//  TEMP
//  persp
    // var pcam1 = new THREE.PerspectiveCamera();
    // pcam1.name = 'persp1'
    // pcam1.tag = 'control'
    // pcam1.position.set( 50, -25, 50 );
    // pcam1.lookAt( new THREE.Vector3(0,0,0) );   
    // this.cameras.push(pcam1)
    // this.addObject( pcam1)    
//  TEMP        

//  orthographic
    var fcam = new THREE.OrthographicCamera();
    fcam.name = 'front';
    fcam.tag = 'control';
    fcam.setChannelsTranslate();
    fcam.custom = {'near':0.1, 'far':2000}
    fcam.addChannel('custom', 'near')
    fcam.addChannel('custom', 'far')
    fcam.position.set( 0.0, 0.0, 100.0)
    fcam.lookAt( new THREE.Vector3(0,0,0) ); 
    this.cameras.push(fcam)
    this.addObject( fcam )

    var scam = new THREE.OrthographicCamera();
    scam.name = 'side';
    scam.tag = 'control';
    scam.setChannelsTranslate();
    scam.custom = {'near':0.1, 'far':2000}
    scam.addChannel('custom', 'near')
    scam.addChannel('custom', 'far')
    scam.position.set( 100.0, 0.0, 0.0)
    scam.lookAt( new THREE.Vector3(0,0,0) ); 
    this.cameras.push(scam)
    this.addObject( scam )

    var tcam = new THREE.OrthographicCamera();
    tcam.name = 'top';
    tcam.tag = 'control';
    tcam.setChannelsTranslate();
    tcam.custom = {'near':0.1, 'far':2000}
    tcam.addChannel('custom', 'near')
    tcam.addChannel('custom', 'far')
    tcam.position.set( 0.0, 100.0, 0.0)
    tcam.lookAt( new THREE.Vector3(0,0,0) ); 
    this.cameras.push(tcam)
    this.addObject( tcam )

    this.addGroup('default', 'camera', false)
    // this.addGroupContent('default', [pcam, pcam1, fcam, scam, tcam], 'camera', true)
    this.addGroupContent('default', [pcam, fcam, scam, tcam], 'camera', true)

//  LIGHTING
//  default lighting
    var ambient = new THREE.AmbientLight( 0x383838 );
    ambient.name = 'ambient'
    this.addHelper( ambient );

    //  shadow light
    var light = new THREE.SpotLight( 0xffffff, 0.25, 0, Math.PI, 1 );
    light.tag = 'control'
    light.name = 'spot'
    light.target.name = 'spotTarget'
    light.target.tag = 'control'
    light.position.set( -25, 100, 50 );
    light.target.position.set( 0, 0, 0 );

    light.castShadow = true;

    light.shadowCameraNear = 5;
    light.shadowCameraFar = 150;
    light.shadowCameraFov = 75;

    // light.shadowCameraVisible = true; // show us the range of the shadow
    light.shadowDarkness = 2.0;

    light.shadowMapWidth = 1024;
    light.shadowMapHeight = 1024; 
    
    // this.addHelper( light );   
    this.addObject( light );   // this will allow the user to move the light around    

//  camera lighting    
    var plight = new THREE.DirectionalLight( 0xffffff , 0.25);
    plight.name = 'perspDirectional';
    plight.position.set( 0, 0, 1 );
    this.addHelper( plight );
    pcam.add( plight );

    var flight = new THREE.DirectionalLight( 0xffffff , 0.25);
    flight.name = 'frontDirectional';
    flight.position.set( 0, 0, 1 );
    this.addHelper( flight );
    fcam.add( flight );   

    var slight = new THREE.DirectionalLight( 0xffffff , 0.25);
    slight.name = 'sideDirectional';
    slight.position.set( 0, 0, 1 );
    this.addHelper( slight );
    scam.add( slight );        

    var tlight = new THREE.DirectionalLight( 0xffffff , 0.25);
    tlight.name = 'topDirectional';
    tlight.position.set( 0, 0, 1 );
    this.addHelper( tlight );
    scam.add( tlight );  

    //  make sure none of the default scene objects get exported when saving
    var createdElements = [grid, ambient, light, light.target, plight, flight, slight, 
        tlight, pcam, fcam, scam, tcam ]
    for( var i = 0; i < createdElements.length; i++){
        // console.log('\tAdding',createdElements[i],'exportType: DO_NOT_EXPORT')
        createdElements[i].exportType = 'DO_NOT_EXPORT'
    }

    this.addGroup('default', 'light', false)
    this.addGroupContent('default', [ambient, light, light.target, plight, 
        flight, slight, tlight], 'light', true)      

    return {'pcam':pcam, 'plight':plight, 
            'fcam':fcam, 'flight':flight, 
            'scam':scam, 'slight':slight,
            'tcam':tcam, 'tlight':tlight, 
            'ambient':ambient, 'shadow':light,
            'shadowtarget':light.target
            };
}


MM.Editor.prototype.insertObjectInbetween = function( object ){
    // console.log('editor.insertObjectInbetween', object.name)
    var inbetween = object.clone( undefined, false )
    inbetween.name = object.name + 'Zero'

    // this.addObject( inbetween )
    this.objects.push( inbetween )

    object.parent.setParent( inbetween )
    inbetween.setParent( object )

    return inbetween
}

MM.Editor.prototype.addSelectables = function( objects ){
    console.log('addSelectables', objects)

    Array.prototype.push.apply(this.selectableObjects, objects);
}

MM.Editor.prototype.addSelectable = function( object ){
    this.selectableObjects.push(object)
}

MM.Editor.prototype.removeSelectable = function( object ){
    this.selectableObjects.splice( this.objects.indexOf( object ), 1 );  
}

MM.Editor.prototype.addObject = function ( object ){
    if( object.name === "" ){
        console.warn('Object', object, 'has no name.')
    }
    // console.log('editor: addObject', object.name, object.tag, object)
            
    //  add object to the object list 
    this.objects.push( object );

    var scope = this
    function isUniqueName( name , uuid)
    {
        // console.log('isUniqueName', name)
        var objectByName = scope.scene.getObjectByName(name, true)
        if( objectByName === undefined ){
            // console.log('\tObject with name', name, 'already exists.')
            return true
        }else{
            if( objectByName.uuid === uuid ){
                // console.log('\tObject has already been added.')
                return true
            }
        }
        return false
    }

    //  ensure the object has a unique name
    //  NOTE: this will become pretty slow if we have a lot of objects
    //  WARNING: here we only rename any of the objects we've actually
    //  created. For some reason a number of "" object get added during
    //  the buildup of the scene.
    if( object.name !== ""){
        var newName = object.name;
        var i = 0;
        while( isUniqueName( newName, object.uuid) === false ){
            newName = object.name + i; i += 1;
        }

        // if( object.name !== newName ){
        //     console.warn('Object', object.name, 'already exists. Renaming to', 
        //         newName);
        // }

        object.name = newName
    }   

//  add object to render scene
    this.scene.add(object);      
    this.signals.objectAdded.dispatch( object );
    this.signals.sceneGraphChanged.dispatch();    
}

MM.Editor.prototype.removeObjects = function( objects ){
    for( var i=0; i < objects.length; i++){
        this.removeObject( objects[i] );
    }
}

MM.Editor.prototype.removeObject = function ( object ){
    // console.log('editor: removeObject', object.name, object)

    if ( object === undefined ) return; 

    //  remove object from flat list
    this.objects.splice( this.objects.indexOf( object ), 1 );  

    //  remove the object from the selectable list
    this.removeSelectable(object)      

    //  remove all children by iterating over the children until
    //  there are none

    //  make sure we can not remove the following objects
    //  - grid
    //  - persp
    if( object.name === "grid" || object.name === "persp")
    {
        // console.log("Unable to remove locked object", object.name)
    }else{
        // console.log('\tremoving ', object.name)

        var scope = this
        for(var i = 0; object.children.length; i++){
            scope.removeObject( object.children[0])
        }

        //  WARNING: currently we do not re-arrange the hierarchy            
        if( object.parent !== undefined ){
            object.parent.remove( object );
        }

        if(this.selected === object){
            this.selected = null
        }

        this.signals.objectRemoved.dispatch( object );
        this.signals.sceneGraphChanged.dispatch();        
    }
}

MM.Editor.prototype.selectObjectByName = function( objectName ){
    // console.log('selectObjectByName', objectName)

    var found = this.scene.getObjectByName( objectName , true);
    if( found !== undefined ){
        this.select( found )
    // }else{
    //     console.log('\tobject', objectName, 'does not exist.')
    }
}

MM.Editor.prototype.selectObjectsByName = function( objectNames ){
    var i, j, found; 
    var foundObjects = []
    for( i = 0, j = objectNames.length; i < j; i++){
        found = this.scene.getObjectByName( objectNames[i], true)
        if( found !== undefined ){
            foundObjects.push( found )
        }
    }
    this.select( foundObjects )
}

 MM.Editor.prototype.select = function ( object , isUndo , selectionMode) {
    // console.log('Editor: select', object, isUndo, selectionMode)

//  undo 
    if( isUndo === undefined ){
        isUndo = false
    }
    
    if( isUndo === false ){
        this.getUndoDataForSelectedObjects();
    }

//  selectionMode
    if( selectionMode === undefined ){
        selectionMode = 'reset'
    }

//  keep track of what was previously selected      
    if( this.selectedObjects.length > 0){
        this.prevSelectedObjects = this.selectedObjects.slice(0);
    }else{
        this.prevSelectedObjects = []
    }

    //  single object
    if( ! Array.isArray(object) ){
        switch(selectionMode) {
            case 'reset':
                // console.log('\treset to', object.name)
                this.selectedObjects = [];
                this.selectedObjects.push( object );
                break;

            case 'add':
                // console.log('\tadd', object.name)
                this.selectedObjects.push( object );
                break;

            case 'remove':
                // console.log('\tremove', object.name)
                var sindex = this.selectedObjects.indexOf( object );
                this.selectedObjects.splice(sindex, 1)
                break;
        }
    //  multi objects
    }else{
        switch(selectionMode) {
            case 'reset':                
                // console.log('\treset to', object)                    
                this.selectedObjects = object
                break;

            case 'add':
                var i, j;
                for( i = 0, j = object.length; i < j; i++){
                    // console.log('\tadding', object[i].name)
                    this.selectedObjects.push( object[i] );
                }
                break;

            case 'remove':
                var i, j;
                for( i = 0, j = object.length; i < j; i++){
                    // console.log('\tremoving', object[i].name)
                    var sindex = this.selectedObjects.indexOf(object[i]);
                    this.selectedObjects.splice(sindex, 1)
                }
                break;
        }
    }

    // console.log('\tpre selection', this.prevSelectedObjects)
    // console.log('\tnew selection', this.selectedObjects)

//  SELECTION COLOR LOGIC
    var i, j; 

    //  RESET
    //  reset the color of the previsously selected controls
    for( i = 0, j = this.prevSelectedObjects.length; i < j; i++ ){
        if( this.prevSelectedObjects[i] instanceof MM.Control ){
            this.prevSelectedObjects[i].updateDisplayColor( this.prevSelectedObjects[i].controlColor )
        }
    }

    //  SET
    //  set the color of the selected objects, except the last one, to green
    for( i = 0, j = this.selectedObjects.length - 1; i < j; i++){
        if( this.selectedObjects[i] instanceof MM.Control){
            this.selectedObjects[i].updateDisplayColor( new THREE.Color(0x00FF0F) )
        }
    }        

    //  set the color of the last selected object
    var lastSelected = this.selectedObjects.length - 1;
    // console.log('\tsetting color of', this.selectedObjects[lastSelected], 'to white')
    if( this.selectedObjects[lastSelected] instanceof MM.Control ){
        this.selectedObjects[lastSelected].updateDisplayColor( new THREE.Color(0xffffff) )
    }        

//  ACTION to run once the selection has been updated
    //  display all animation curves        
    var animCurves = [];
    var theseAnimCurves;
    // console.log('\twe have', this.selectedObjects.length, 'objects selected')

    for( i = 0, j = this.selectedObjects.length; i < j; i++){
        theseAnimCurves = this.selectedObjects[i].getAnimCurves()
        // console.log('\tadding', theseAnimCurves.length, 'animCurves for', this.selectedObjects[i].name)

        MM.extendArrayWithArray( animCurves, theseAnimCurves )
    }        
    this.displayAnimCurves( animCurves )        

    //  make sure we set all the new data before launching any signals
    this.signals.showInfo.dispatch('Select object(s)')
    this.signals.objectSelected.dispatch( object );                
}

MM.Editor.prototype.deselect = function ( isUndo ) {        
    // console.log('editor deselect', this.selected)
    
//  undo
    if( isUndo === undefined ){
        isUndo = false
    }

    if( isUndo === false ){
        this.getUndoDataForSelectedObjects();
    }

    //  keep track of what was previously selected      
    if( this.selectedObjects.length > 0){
        this.prevSelectedObjects = this.selectedObjects.slice(0);
    }else{
        this.prevSelectedObjects = []
    }

    //  reset color
    var i, j;
    for( i = 0, j = this.prevSelectedObjects.length; i < j; i++ ){
        if( this.prevSelectedObjects[i] instanceof MM.Control ){
            this.prevSelectedObjects[i].updateDisplayColor( this.prevSelectedObjects[i].controlColor )
        }
    }

    this.selectedObjects = []
    this.selectedAnimCurves = []
    // console.log('\treset selection', this.selectedObjects)

    // console.log('\tselected', this.selected)
    // console.log('\tprevSelected', this.prevSelected)

    this.signals.showInfo.dispatch('Deselect object(s)')
    this.signals.objectSelected.dispatch( null );
}

MM.Editor.prototype.parent = function ( object, parent ){
    // if(DEBUG) console.log('editor parent')
    if( parent === undefined){
        parent = this.scene;
    }
    parent.add(object);

    this.signals.sceneGraphChanged.dispatch();
}