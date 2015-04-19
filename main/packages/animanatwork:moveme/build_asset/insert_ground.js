MM.insertGround = function( editor ){
	var asset = 'ground'
	var namespace = editor.scene.getUniqueNamespace(asset)

	console.log('namespace', namespace)

	var geometry = new THREE.PlaneGeometry( 250, 250, 1, 1);
	var material = new THREE.MeshBasicMaterial( { color: 0xb3b3b3 })
	material.shading = THREE.FlatShading;
	material.opacity = 0.05;
    material.transparent = true;
	var mesh = new THREE.Mesh( geometry, material );
	
	mesh.name = namespace+'main';
	mesh.tag = 'control'
	mesh.asset = asset
	mesh.rotateX( -90)
	mesh.castShadow = false;
	mesh.receiveShadow = true;			

	editor.addObject( mesh );


	var addedGroup = editor.addGroup( namespace+'group' )
	editor.addGroupContent( addedGroup, [mesh] )	

	//	create assetObject
	var assetObject = new MM.Asset();
	assetObject.name = asset
	assetObject.namespace = namespace;
	assetObject.models.push( mesh )	
	//	what about the material group???

	editor.addAssetObject( assetObject )
	editor.addSelectables([mesh])

	//	undo
	editor.getUndoDataForAddAsset( namespace, 'undo')
}