MM.insertRamp = function( editor ){
	console.log('insertRamp')

	var assetName = 'ramp'
	var u = new MM.AssetBuild( editor );
	u.setNamespace( assetName )
	u.assetName = assetName
	u.addModel('/data/ramp/model/ramp.obj')
	u.addLast( cleanup )
	u.build();

	var scope = u;
	function cleanup(){
		var control = new MM.Control()	
		control.name = u.namespace+'main'	
		control.asset = assetName	
		control.setControlShape()
		editor.addObject( control )
		editor.addSelectables([control])	
		control.add( scope.models[0] )

		//	rename model
		scope.models[0].name = u.namespace+'mesh'
			
		//	create a group for selection
		editor.addGroupContent( u.assetGroup, [control] )
		editor.addGroupContent( u.materialGroup, [scope.models[0]] )
		editor.controlsVisibility()

		//	undo
		editor.getUndoDataForAddAsset( u.namespace, 'undo')
	}

}