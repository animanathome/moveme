MM.insertSphere = function( editor ){
	var asset = 'sphere'
	var namespace = editor.scene.getUniqueNamespace(asset)

	var geometry = new THREE.SphereGeometry( 5, 16, 16 );
	var mesh = new THREE.Mesh( geometry, new THREE.MeshLambertMaterial());
	mesh.name = namespace+'mesh';
	mesh.asset = asset
	mesh.castShadow = true;
	mesh.receiveShadow = false;
	mesh.material.color.r = 85 / 255;
	mesh.material.color.g = 72 / 255;
	mesh.material.color.b = 68 / 255;
	editor.addObject( mesh );

	console.log('building')
	var groundControl = new MM.createControlGroup('c', namespace+'ground', 'plane', 10);	
	editor.addObject( groundControl.zero )
	groundControl.control.setChannelsTranslateAndRotate()

	var mainControl = new MM.createControlGroup('c', namespace+'main', 'circle', 7.5);
	editor.addObject( groundControl.zero )	
	groundControl.control.add( mainControl.zero )
	mainControl.zero.position.set(0,5,0)

	mainControl.control.add( mesh )	

	editor.addSelectables([groundControl.control, mainControl.control])	

	var assetGroup = editor.addGroup( namespace+'group' , 'asset')
	var materialGroup = editor.addGroup( namespace+'group' , 'material')
	editor.addGroupContent( assetGroup, [groundControl.control, mainControl.control] )	
	editor.addGroupContent( materialGroup, [mesh] )
	
	mesh.addChannel( 'custom', 'color' )
	mesh.custom={'visibility' : mesh.visible, 'color' : mesh.material.color};

	//	create assetObject
	var assetObject = new MM.Asset();
	assetObject.name = asset
	assetObject.namespace = namespace;
	assetObject.models.push( mesh )
	assetObject.controls.push( groundControl.control )
	assetObject.controls.push( mainControl.control )
	assetObject.assetGroup = assetGroup;

	editor.addAssetObject( assetObject )	

	editor.controlsVisibility()
}	

MM.sphereSelect = function( namespace, container, editor ){
	console.log('MM.sphereSelect', namespace, container, editor)
	container.setHeight('180px')

    //  GLOBAL
    var space = new MMUI.Panel();
    space.setPosition( 'absolute' );
    container.add( space )
    
    var img = document.createElement("img");    
    img.src = "/ui/sphereSelect.gif";    
    img.width = 180;
    img.height = 180;
    space.dom.appendChild( img )

    var globalButton = new MMUI.Button('')
    globalButton.setClass('gCtrlButton')
    globalButton.setPosition('absolute')    
    globalButton.setLeft('85px')
    globalButton.setBottom('10px')
    globalButton.onClick( function (){ 
        editor.selectObjectByName( namespace+':ground') } )  
    space.add( globalButton )

    var spine0Button = new MMUI.Button('')
    spine0Button.setClass('gCtrlButton')
    spine0Button.setPosition('absolute')    
    spine0Button.setLeft('85px')
    spine0Button.setBottom('30px')
    spine0Button.onClick( function (){ 
        editor.selectObjectByName( namespace+':main') } )  
    space.add( spine0Button )

    return space;
}