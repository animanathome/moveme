MM.ParentConstraint = function( editor ){
    var spineControl = new MM.Control();
    spineControl.name = 'driven'
    spineControl.tag = 'control'
    spineControl.position.set(0, 5, 0)	        	        	        
    spineControl.controlShape = 'plane'	        
    editor.addObject( spineControl )
    spineControl.setChannelsEmpty()	        

    var ballControl = new MM.Constraint();
    ballControl.name = "driver"
    ballControl.tag = 'control'
    ballControl.controlShape = 'plane'        	        
    ballControl.position.set(0, -5, 0);
    editor.addObject(ballControl) 

   	ballControl.setObjectToSolve(spineControl);
    ballControl.constraintMode = 3;  

    editor.controlsVisibility()
    var thisGroup = editor.addGroup('setup')
    editor.addGroupContent( thisGroup, [ spineControl, 
    	ballControl ] )
}

MM.ParentAndScaleConstraint = function( editor ){
    var spineControl = new MM.Control();
    spineControl.name = 'driven'
    spineControl.tag = 'control'
    spineControl.position.set(0, 5, 0)	        	        	        
    spineControl.controlShape = 'plane'	        
    editor.addObject( spineControl )
    spineControl.setChannelsEmpty()	        

    var ballControl = new MM.Constraint();
    ballControl.name = "driver"
    ballControl.tag = 'control'
    ballControl.controlShape = 'plane'        	        
    ballControl.position.set(0, -5, 0);
    editor.addObject(ballControl) 

   	ballControl.setObjectToSolve(spineControl);
    ballControl.constraintMode = 5;  

    editor.controlsVisibility()
    var thisGroup = editor.addGroup('setup')
    editor.addGroupContent( thisGroup, [ spineControl, 
    	ballControl ] )	
}

MM.ParentHierarchyConstraint = function( editor ){
	//	parent of driven
	var parentControl = new MM.Control();
	parentControl.name = 'drivenParent'
	parentControl.setControlShape('c', 'plane', 10)
	parentControl.position.set(0, 1, 0)
	editor.addObject( parentControl )			

	//	driven
    var spineControl = new MM.Control();
    spineControl.name = 'driven'
    spineControl.setControlShape('c', 'plane', 10)
    parentControl.setParent( spineControl )
   	spineControl.position.set(0, 5, 0)
    spineControl.setChannelsEmpty()       

    //	parent of driver
    var parentDriver = new MM.Constraint();
    parentDriver.name = "driverParent"
    parentDriver.setControlShape('c', 'plane', 10)	        
    parentDriver.position.set(0, -10, 0);
    editor.addObject(parentDriver) 

    //	driver
    var ballControl = new MM.Constraint();
    ballControl.name = "driver"
    ballControl.setControlShape('c', 'plane', 10)      
    ballControl.controlColor = new THREE.Color('red')
    ballControl.position.set(0, -5, 0);
    // NOTE:	we need to add the object to the scene before we can use setParent
    editor.addObject(ballControl) 
    parentDriver.setParent( ballControl )

   	ballControl.setObjectToSolve(spineControl);
    ballControl.constraintMode = 3;  

    editor.controlsVisibility()

    var thisGroup = editor.addGroup('setup')
    editor.addGroupContent( thisGroup, [ parentControl, spineControl, 
    	parentDriver, ballControl ] )	
}

MM.AimAndOffsetConstraint = function( editor ){
	var rootControl = new MM.Control();
	rootControl.name = 'rootCtl'
	rootControl.setControlShape('l')
	editor.addObject( rootControl )

//	1
	var rootAim = new MM.Control();
	// rootAim.displayRotationAxis = true;
	rootAim.setControlShape('l')
	rootAim.name = 'rootAimWithOffset'
	rootControl.add( rootAim )		
	rootAim.rotation.order = 'YZX';
	rootAim.position.y = 10;	

	var lookAt = new MM.Constraint();
	lookAt.name = 'lookAtMe'
	lookAt.useOffset = true
	lookAt.side = new THREE.Vector3( 1, 0, 0 )
	lookAt.up = new THREE.Vector3( 0, 1, 0 )
	lookAt.setControlShape('l', 'triangle')
	editor.addObject( lookAt )
	lookAt.position.z = 10;

	//	the object we want to have looking at our contraint
	lookAt.setObjectToSolve( rootAim );
	lookAt.constraintMode = 4;  				

	editor.controlsVisibility( true );	

	var thisGroup = editor.addGroup('setup')
    editor.addGroupContent( thisGroup, [ rootControl, rootAim, 
    	lookAt ] )			
}

MM.SpaceswitchDemo1 = function( editor ){
    var c = new MM.Control();
    c.name = 'driver'
    c.tag = 'control'   
    c.controlSize = 10          
    c.controlShape = 'plane'
    c.setChannelsTranslateAndRotate()
    editor.addObject( c )

    var s = new MM.Spaceswitch();
    s.name = 'driven'
    s.tag = 'control'
    s.controlShape = ''
    s.controlSize = 10      
    s.displayRotationAxis = true    
    s.setChannelsTranslateAndRotate()
    //  This needs to come before we add it to the scene!!! Otherwise we won't be
    //  able to register the offset.
    s.translateY(10)
    editor.addObject( s )   
    s.addSpace( c )


    var addedGroup = editor.addGroup( 'multiChannel' , 'asset')
    editor.addGroupContent( addedGroup, [c, s] )    

    editor.controlsVisibility() 
}

MM.SpaceswitchDemo2 = function( editor ){
    var a = new MM.Control();
    a.name = 'a'
    a.tag = 'control'   
    a.controlSize = 10          
    a.controlShape = 'plane'
    a.setChannelsTranslateAndRotate()
    a.translateY(10)
    editor.addObject( a )

    var b = new MM.Control();
    b.name = 'b'
    b.tag = 'control'   
    b.controlSize = 10          
    b.controlShape = 'plane'
    b.setChannelsTranslateAndRotate()
    b.translateY(-10)
    editor.addObject( b )

    var s = new MM.Spaceswitch();
    s.name = 'driven'
    s.tag = 'control'
    s.controlShape = ''
    s.controlSize = 10      
    s.displayRotationAxis = true    
    s.setChannelsTranslateAndRotate()
    //  This needs to come before we add it to the scene!!! Otherwise we won't be
    //  able to register the offset.
    s.translateX(10)
    editor.addObject( s )   
    s.addSpace( a ) 
    s.addSpace( b ) 

    var addedGroup = editor.addGroup( 'multiChannel' , 'asset')
    editor.addGroupContent( addedGroup, [a, b, s] ) 

    editor.controlsVisibility()     
}

MM.ParentMasterDemo1 = function( editor ){
    console.log('ParentMasterDemo1')

    var a = new MM.Control();
    a.name = 'a'
    a.tag = 'control'   
    a.controlSize = 10          
    a.controlShape = 'plane'
    a.setChannelsTranslateAndRotate()
    a.translateY(10)
    editor.addObject( a )

    var b = new MM.Control();
    b.name = 'b'
    b.tag = 'control'   
    b.controlSize = 10          
    b.controlShape = 'plane'
    b.setChannelsTranslateAndRotate()
    b.translateY(-10)
    editor.addObject( b )

    var parentMaster = a.addInbetween(a.name+'PM', 'ParentMaster')
    parentMaster.addSpace( b )
    parentMaster.addSpaceswitchChannel( a )

    var addedGroup = editor.addGroup( 'multiChannel' , 'asset')
    editor.addGroupContent( addedGroup, [a, b, parentMaster] )  

    editor.controlsVisibility()
}

MM.ParentMasterDemo2 = function( editor ){
    console.log('ParentMasterDemo2')

    var a = new MM.Control();
    a.name = 'a'
    a.tag = 'control'   
    a.controlSize = 10          
    a.controlShape = 'plane'
    a.setChannelsTranslateAndRotate()
    a.translateY(10)
    editor.addObject( a )

    var b = new MM.Control();
    b.name = 'b'
    b.tag = 'control'   
    b.controlSize = 10          
    b.controlShape = 'plane'
    b.setChannelsTranslateAndRotate()
    b.translateY(-10)
    editor.addObject( b )

    var c = new MM.Control();
    c.name = 'c'
    c.tag = 'control'   
    c.controlSize = 10          
    c.controlShape = 'plane'
    c.setChannelsTranslateAndRotate()   
    editor.addObject( c )   

    var parentMaster = c.addInbetween(c.name+'PM', 'ParentMaster')
    parentMaster.addSpace( a )
    parentMaster.addSpace( b )
    parentMaster.addSpaceswitchChannel( c )

    var addedGroup = editor.addGroup( 'multiChannel' , 'asset')
    editor.addGroupContent( addedGroup, [a, b, c, parentMaster] )   

    editor.controlsVisibility()
}