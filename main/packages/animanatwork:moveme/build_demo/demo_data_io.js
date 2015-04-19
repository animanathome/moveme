MM.SkeletonIO = function( editor ){
	var u = new MM.AssetBuild( editor );
	u.namespace = 'skeleton:'
	u.asset = 'skeleton'
	u.addSkeleton('/data/tiny1/skeleton/cRoot_skeleton.json')		
	var lastFunction = function(){			
		var addedGroup = editor.addGroup( 'skeleton' , 'asset')
		for( var i = 0; i < u.joints.length; i++){
			console.log('\t', u.joints[i].name )
			editor.addGroupContent( addedGroup, [u.joints[i]] )
		}

		editor.jointsVisibility()
	}
	u.addLast( lastFunction )
	u.build()	
}

MM.ModelIO = function( editor ){
	var asset = 'smurf'

	var u = new MM.AssetBuild( editor );
	u.setNamespace( asset );
	u.assetName = asset
	u.addModel('/data/smurf/model/body.obj')
	u.addModel('/data/smurf/model/pants.obj')
	u.addModel('/data/smurf/model/eyes.obj')
	u.addModel('/data/smurf/model/hat.obj')
	u.addModel('/data/smurf/model/pupil.obj')
	u.addModel('/data/smurf/model/tail.obj')

	var lastFunction = function(){	
		var modelGrp = new THREE.Object3D();
		modelGrp.name = u.namespace+'group'
		modelGrp.asset = u.assetName
		editor.addObject( modelGrp )

		for( var i = 0; i < u.models.length; i++){
			//	parent model under top group
			modelGrp.add( u.models[i] )
			editor.addGroupContent( u.materialGroup, [u.models[i]] )

			//	color model
			switch(u.models[i].name){
				case u.namespace+'pants':
				case u.namespace+'hat':					
				case u.namespace+'eyes':
					u.models[i].material.color.r = 1
					u.models[i].material.color.g = 1
					u.models[i].material.color.b = 1
				break;	

				case u.namespace+'pupil':
					u.models[i].material.color.r = 0
					u.models[i].material.color.g = 0
					u.models[i].material.color.b = 0
				break;

				case u.namespace+'tail':
				case u.namespace+'body':
					u.models[i].material.color.r = 47 / 255
					u.models[i].material.color.g = 186 / 255
					u.models[i].material.color.b = 239 / 255
				break;
			}
		}

		editor.addGroupContent( u.assetGroup, [modelGrp] )

		modelGrp.keyChannel( 0, 1, 1, "rotation", "y")

		modelGrp.rotation.y = 360;

		modelGrp.keyChannel( 48, 1, 1, "rotation", "y")

		editor.play()
	}

	u.addLast(lastFunction)
	u.build()
}

MM.SkinnedModelIO = function( editor ){
	var namespace = 'legs:'
	var u = new MM.AssetBuild( editor );
	u.namespace = namespace
	u.addModel('/data/drone/model/body.obj')
	u.addSkeleton('/data/drone/skeleton/ground_skeleton.json')
	u.addSkin('/data/drone/weights/body_skin.json')		
	
	var cleanup = function(){
		var addedGroup = editor.addGroup( 'legs' , 'asset')
		var jointsToSelect = ['ground', 'root', 'lHip', 'lKnee', 'lAnkle', 'lBall', 
		'rHip', 'rKnee', 'rAnkle', 'lToe', 'rToe', 'rBall', 'rHeel',
		'lHeel']
		var thisJoint;
		for( var i = 0, l = jointsToSelect.length; i < l; i++){
			thisJoint = editor.scene.getObjectByName( namespace + jointsToSelect[i], true )
			if(thisJoint !== undefined ){
				editor.addGroupContent( addedGroup, [thisJoint] )
			}else{
				console.log('Unable to find', jointsToSelect[i])
			}
		}
	}

	u.addLast( cleanup )
	u.build()
}