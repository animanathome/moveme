MM.insertPlane = function( editor ){
	console.log('insertPlane')

	var asset = 'plane'
	var namespace = editor.scene.getUniqueNamespace(asset)

	var geometry = new THREE.PlaneGeometry( 250, 250, 1, 1);		
	var mesh = new THREE.Mesh( geometry, new THREE.MeshLambertMaterial() );
	
	mesh.name = namespace+'main';
	mesh.tag = 'control'
	mesh.asset = asset
	mesh.rotateX( -90 )
	mesh.castShadow = false;
	mesh.receiveShadow = true;			
	editor.addObject( mesh );		
	editor.addSelectables([mesh])	

	var assetGroup = editor.addGroup( namespace+'group', 'asset' )
	editor.addGroupContent( assetGroup, [mesh] )

		//	create assetObject
	var assetObject = new MM.Asset();
	assetObject.name = asset
	assetObject.namespace = namespace;
	assetObject.models.push( mesh )
	assetObject.assetGroup = assetGroup;
	//	what about the material group???

	editor.addAssetObject( assetObject )

	//	undo
	editor.getUndoDataForAddAsset( namespace, 'undo')	
}