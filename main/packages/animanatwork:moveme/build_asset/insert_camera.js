MM.insertCamera = function( editor ){	
    var signals = editor.signals;
    var pcam = new THREE.PerspectiveCamera( 50, 100, 0.1, 1000 );
    pcam.name = 'camera'
    pcam.tag = 'control'
    pcam.position.set( 50, 25, 50 );
    pcam.lookAt( new THREE.Vector3(0,0,0) );   

    editor.addObject( pcam )          
    editor.cameras.push(pcam)
    signals.cameraAdded.dispatch();

    pcam.setChannelsTranslateAndRotate();

    // NOTE: the aspect ratio get determinend by the dimensions of the panel
    pcam.custom = {   'focusLength': 35
                    , 'frameHeight':24                    
                    // , 'aspect':1
                    , 'near':0.1
                    , 'far':2000}
    pcam.addChannel('custom', 'focusLength')
    pcam.addChannel('custom', 'frameHeight')
    pcam.addChannel('custom', 'near')
    pcam.addChannel('custom', 'far')
    // pcam.addChannel('custom', 'aspect')
    pcam.setLens( 35, 24 )

    var namespace = editor.scene.getUniqueNamespace('camera')
    var assetGroup = editor.addGroup( namespace+'group' , 'camera');
    editor.addGroupContent( assetGroup, [pcam] );
}