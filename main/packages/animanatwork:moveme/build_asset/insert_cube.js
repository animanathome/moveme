MM.insertCube = function( editor ){
	console.log('insertCube', editor)

	var asset = 'cube'
	var namespace = editor.scene.getUniqueNamespace(asset)

	var geometry = new THREE.CubeGeometry( 10, 10, 10, 1, 1, 1 );
	var mesh = new THREE.Mesh( geometry, new THREE.MeshLambertMaterial() );

	mesh.name = namespace+'mesh';
	mesh.asset = asset;
	mesh.castShadow = true;
	mesh.receiveShadow = false;

	editor.addObject( mesh );

	var parentControl = new MM.Control();
	parentControl.asset = asset;
	parentControl.name = namespace+'parent';
	parentControl.setControlShape( 'c', 'plane', 10);
	// parentControl.setChannelsTranslateAndRotate();
	editor.addObject( parentControl );
	editor.addSelectables([parentControl]);

	var control = new MM.Control();	
	control.asset = asset;
	control.name = namespace+'main';
	control.setControlShape('c', 'plane', 6);
	parentControl.add( control );
	control.setChannelsTranslateAndRotate();

	control.add( mesh );
	editor.addSelectables([control]);

	var assetGroup = editor.addGroup( namespace+'group' , 'asset');
	var materialGroup = editor.addGroup( namespace+'group' , 'material');
	editor.addGroupContent( assetGroup, [parentControl, control] );
	editor.addGroupContent( materialGroup, [mesh] );

	//	add the animatable channels ( which will contain the animated values )
	mesh.addChannel( 'custom' , 'visibility' );
	mesh.addChannel( 'custom', 'color' )

	mesh.custom={'visibility' : mesh.visible, 'color' : mesh.material.color};
	editor.controlsVisibility();

	// create assetObject
	var assetObject = new MM.Asset();
	assetObject.name = asset
	assetObject.namespace = namespace;
	assetObject.models.push( mesh )
	assetObject.controls.push( parentControl )
	assetObject.controls.push( control )
	assetObject.assetGroup = assetGroup;
	// what about the material group???

	editor.addAssetObject( assetObject )

	//	undo
	editor.getUndoDataForAddAsset( namespace, 'undo')	
}