MM.SimpleControl = function( editor ){
	console.log('SimpleControl')

	var spineControl = new MM.Control();
    spineControl.name = 'driven'
    spineControl.tag = 'control'
    spineControl.position.set(0, 5, 0)	        	        	        
    spineControl.controlShape = 'plane'	        
    editor.addObject( spineControl )

    editor.controlsVisibility()	
}

MM.FacingControl = function( editor ){
	console.log('FacingControl')

	var ctl0 = new MM.Control();
    ctl0.name = 'lineControl'
    ctl0.tag = 'control'
    ctl0.position.set(0, 5, 0)
    ctl0.controlShape = 'planeZ'	        
    ctl0.controlSize = 0.5;
    ctl0.setFacingCamera( editor.cameras[0])    
    editor.addObject( ctl0 )
    
	var ctl1 = new MM.Control();
    ctl1.name = 'fullControl'
    ctl1.tag = 'control'
    ctl1.position.set(0, 0, 0)
    ctl1.controlShape = 'circle'
    ctl1.controlSize = 0.5;
    ctl1.isFull = true;
    ctl1.setFacingCamera( editor.cameras[0])    
    editor.addObject( ctl1 )

     // var geometry = new THREE.CubeGeometry( 10, 20, 10);
     // var material = new THREE.MeshPhongMaterial( { ambient: 0x050505, color: 0x0033ff, specular: 0x555555, shininess: 30 } );
     // mesh = new THREE.Mesh(geometry, material );
     // mesh.name = 'cube1'
     // mesh.tag = 'control'
     // editor.addObject( mesh ); 

    editor.controlsVisibility()	

    var thisGroup = editor.addGroup('setup')
    editor.addGroupContent( thisGroup, [ ctl0, 
    	ctl1 ])//, mesh] )    
}