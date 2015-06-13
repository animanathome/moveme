MM.simpleIkLeg = function( editor, useCustomChannels, zeroGroup){

	var assetName = 'legs';
	var namespace = 'legs:';
	var legControls = ['KneeCtl', 'BallCtl', 'ToeCtl', 'HeelCtl', 'FootCtl'];
	var legJoints = ['Hip', 'Knee', 'Ankle', 'Ball', 'Toe', 'Heel'];

	var u = new MM.AssetBuild( editor );
	u.setNamespace(namespace)
	u.addSkeleton('/data/tiny1/skeleton/cRoot_skeleton.json')	

	var sides = ['l']//, 'r']

	if( useCustomChannels === undefined ){
		useCustomChannels = false;
	}

	_.each(sides, function(side){			
		u.addRigComponent( new MM.LegComponent({'controlSize':10.0, 'controlScale':1.0, 'side':side, 'asset':assetName, 'names':legControls, 'joints':legJoints, 'useCustomAttributes' : useCustomChannels}))
	})	

	var cleanup = function(){
		var addedGroup = editor.addGroup( u.namespace , 'asset')
		var jointsToSelect = []

		var sideJointsToSelect=['KneeCtl', 'BallCtl', 'ToeCtl', 'HeelCtl', 'FootCtl', 'LegIkSolver']

		_.each(sideJointsToSelect, function(item){
			jointsToSelect.push('l'+item)
			jointsToSelect.push('r'+item)
		})

		var thisJoint;
		for( var i = 0, l = jointsToSelect.length; i < l; i++){
			thisJoint = editor.scene.getObjectByName( u.namespace + jointsToSelect[i], true )
			if(thisJoint !== undefined ){
				editor.addGroupContent( addedGroup, [thisJoint] )
			}else{
				console.log('Unable to find', u.namespace + jointsToSelect[i])
			}
		}

		// //	add the solver to the selection and group list 
		// //	this is just for testing - this should not be used in production
		// ikSolver = editor.scene.getObjectByName( u.namespace +'lLegIkSolver', true)
		// if( ikSolver === undefined ){
		// 	console.warn('Unable to find '+u.namespace+'lLegIkSolver')
		// }
		// ikSolver.tag = 'control'
		// editor.addGroupContent( addedGroup, [ikSolver] )

		console.log('zeroGroup', zeroGroup)
		if( zeroGroup !== undefined ){
			var lFootCtl = editor.scene.getObjectByName(u.namespace+'lFootCtl', true);			
			var lKneeCtl = editor.scene.getObjectByName(u.namespace+'lKneeCtl', true);
			var lFootZero = editor.insertObjectInbetween( lFootCtl )			
			var lKneeZero = editor.insertObjectInbetween( lKneeCtl )

			editor.addGroupContent( addedGroup, [lFootZero] )
			editor.addGroupContent( addedGroup, [lKneeZero] )
		}

		editor.jointsVisibility()
		editor.controlsVisibility()	
	}

	u.addLast( cleanup )
	u.build()			
}

MM.simpleLimbIk = function( editor ){
	var assetName = 'blend'
	var namespace = 'blend:'
	var u = new MM.AssetBuild( editor );
	u.setNamespace(namespace)
	// u.addSkeleton('data/drone/skeleton/ground_skeleton.json')
	u.addSkeleton('/data/tiny1/skeleton/cRoot_skeleton.json')
	u.addRigComponent( new MM.LimbComponent( 
		{'side' : 'l',
		 'controlSize' : 0.5, 
		 'asset' : assetName} ) )

	var cleanup = function(){
		var hipJoint=editor.scene.getObjectByName(namespace+'lHip', true);
		var kneeJoint=editor.scene.getObjectByName(namespace+'lKnee', true);
		var ankleJoint=editor.scene.getObjectByName(namespace+'lAnkle', true);
		var ik=editor.scene.getObjectByName(namespace+'lIkSolver', true);
		editor.addGroupContent( u.assetGroup, 
			[hipJoint, kneeJoint, ankleJoint, ik]);
		editor.jointsVisibility()
		editor.controlsVisibility()	
	}

	u.addLast( cleanup )
	u.build()
}

MM.simpleBlendLeg = function( editor ){
	var assetName = 'blend'
	var namespace = 'blend:'

	var postSkeleton = function(){
		var objectToSolve = editor.scene.getObjectByName( namespace + 'cRoot', true);
		if( objectToSolve === undefined ){
			console.error('Unable to find', namespace+'cRoot')
		}

		console.log('Post skeleton')
		var rootControl = new THREE.Constraint();
		rootControl.name = 'rootCtl'
		rootControl.setControlShape('c')
		rootControl.position.y = 17
		rootControl.constraintMode = 3			
		editor.addObject( rootControl )
		rootControl.setObjectToSolve(objectToSolve);
	}

	var cleanup = function(){
		//	example of how we can access the created controls within the components
		//	once they have been created
		// console.log('build component:')
		// console.log( u.rigComponents[0])		
		// 
		var thisIk = editor.scene.getObjectByName('blend:lIkSolver', true)
		editor.addGroupContent( u.assetGroup, [thisIk]);

		editor.jointsVisibility()
		editor.controlsVisibility()	
	}

	var u = new MM.AssetBuild( editor );
	u.setNamespace(namespace)
	
	// u.addModel('data/drone/model/body.obj')
	// u.addSkeleton('data/drone/skeleton/ground_skeleton.json')
	// u.addSkin('data/drone/weights/body_skin.json')

	u.addModel('/data/tiny1/model/cBody.obj')	
	u.addSkeleton('/data/tiny1/skeleton/cRoot_skeleton.json')
	u.addSkin('/data/tiny1/weights/cBody_skin.json')

	// u.addSkeletonPostFunction( postSkeleton )			
	u.addRigComponent( new MM.LegBlendComponent( 
		{'side' : 'l',
		 'controlSize' : 0.5, 
		 'asset' : assetName} ) )

	u.addLast( cleanup )
	u.build()		
}

MM.twoStepBlendIk = function( editor ){
	var assetName = 'twoStep'
	var u = new MM.AssetBuild( editor );
	u.setNamespace(assetName)
	u.addSkeleton('/data/spaceTunny/skeleton/cRoot_skeleton.json')

	u.addRigComponent( new MM.TwoStepLegBlendComponent({
		'asset' : assetName, 'side' : 'l'
	}))

	var cleanup = function(){
		editor.jointsVisibility()
		editor.controlsVisibility()

		console.log(u)

		for( var i = 0; i < u.joints.length; i++){

			editor.addGroupContent( u.assetGroup, [u.joints[i]] );
		}
	}
	u.addLast( cleanup )
	u.build()
}

MM.legIkPlus = function( editor ){
	var assetName = 'legs'
	var namespace = 'legs:'
	var legControls = ['KneeCtl', 'BallCtl', 'ToeCtl', 'HeelCtl', 'FootCtl']
	var legJoints = ['Hip', 'Knee', 'Ankle', 'Ball', 'Toe', 'Heel']

	var u = new MM.AssetBuild(editor);
	u.setNamespace(namespace)
	u.addSkeleton('/data/drone/skeleton/ground_skeleton.json')
	
	u.addRigComponent( new MM.LegComponent( 
			{'controlSize' : 10.0, 'controlScale' : 1.0, 'side' : 'l', 
			'asset' : assetName, 'names' : legControls, 'joints' :  legJoints,
			'useCustomAttributes' : true } ) )	

	u.addRigComponent( new MM.LegComponent( 
			{'controlSize' : 10.0, 'controlScale' : 1.0, 'side' : 'r', 
			'asset' : assetName, 'names' : legControls, 'joints' :  legJoints,
			'useCustomAttributes' : true } ) )			

	var cleanup = function(){
		var addedGroup = editor.addGroup( u.namespace , 'asset')
		var jointsToSelect = [
		'lKneeCtl', 'lBallCtl', 'lToeCtl', 'lHeelCtl', 'lFootCtl'
		,'rKneeCtl', 'rBallCtl', 'rToeCtl', 'rHeelCtl', 'rFootCtl']
		var thisJoint;
		for( var i = 0, l = jointsToSelect.length; i < l; i++){
			thisJoint = editor.scene.getObjectByName( u.namespace + jointsToSelect[i], true )
			if(thisJoint !== undefined ){
				editor.addGroupContent( addedGroup, [thisJoint] )
			}else{
				console.log('Unable to find', u.namespace + jointsToSelect[i])
			}
		}
		
		editor.jointsVisibility()
		editor.controlsVisibility()
	}

	u.addLast( cleanup )
	u.build()		
}

MM.tentacleIk = function(editor){
	console.log('tentacleIk')

	var assetName = 'spline'
	var namespace = 'spline:'
	var u = new MM.AssetBuild( editor );
	u.setNamespace( namespace )
	u.addSkeleton('/data/manWithFace/skeleton/cRoot_skeleton.json')

	u.addRigComponent( new MM.TentacleComponent( 
	{'controlSize':0.5, 'asset':assetName, 'side':'c',
	'names' : ['root', 'tip'],
	'joints' : ['Spine0', 'Spine1', 'Spine2', 'Spine3']}))

	var cleanup = function(){
		var joints = ['cSpine0', 'cSpine1', 'cSpine2', 'cSpine3']
		for( var i = 0; i < joints.length; i++){
			var thisJoint = editor.scene.getObjectByName( namespace+joints[i], true )
			if( thisJoint !== undefined ){
				thisJoint.showHierarchy = false
				thisJoint.showRotationAxis = true
				thisJoint.radius = 5
				editor.addGroupContent( u.assetGroup, [thisJoint] )
			// }else{
			// 	console.log('Unable to find', namespace+joints[i])
			}
		}
		editor.jointsVisibility()
		editor.controlsVisibility()		
	}
	u.addLast(cleanup)
	u.build()
}

MM.backIk = function(editor){
	console.log('backIk')

	var assetName = 'back'
	var namespace = 'back:'
	var u = new MM.AssetBuild( editor );
	u.setNamespace( namespace )
	u.addSkeleton('/data/manWithFace/skeleton/cRoot_skeleton.json')

	u.addRigComponent( new MM.BackComponent( 
	{'controlSize':0.5, 'asset':assetName, 'side':'c',
	'names' : ['global', 'globalSub', 'root', 'tip'],
	'sizes': [5.0, 4.0, 3.0, 3.0],
	'joints' : ['Spine0', 'Spine1', 'Spine2', 'Spine3']}))

	var cleanup = function(){
		var joints = ['cSpine0', 'cSpine1', 'cSpine2', 'cSpine3']
		for( var i = 0; i < joints.length; i++){
			var thisJoint = editor.scene.getObjectByName( namespace+joints[i], true )
			if( thisJoint !== undefined ){
				thisJoint.showHierarchy = false
				thisJoint.showRotationAxis = true
				thisJoint.radius = 5
				editor.addGroupContent( u.assetGroup, [thisJoint] )
			// }else{
			// 	console.log('Unable to find', namespace+joints[i])
			}
		}
		editor.jointsVisibility()
		editor.controlsVisibility()		
	}
	u.addLast(cleanup)
	u.build()
}

MM.splineIk = function( editor ){
	console.log('Building spline IK')

	var assetName = 'spline'
	var namespace = 'spline:'
	var u = new MM.AssetBuild( editor );
	u.setNamespace( namespace )
	u.addSkeleton('/data/manWithFace/skeleton/cRoot_skeleton.json')

	u.addRigComponent( new MM.SpineComponent({
		'controlSize' : 0.5, 'asset' : assetName, 
		'names' : ['cBodyCtl', 'cHipCtl', 'cBChestCtl'],
		'joints' : ['cSpine0', 'cSpine1', 'cSpine2', 'cSpine3']
	}))

	var cleanup = function(){
		var joints = ['cSpine0', 'cSpine1', 'cSpine2', 'cSpine3']
		for( var i = 0; i < joints.length; i++){
			var thisJoint = editor.scene.getObjectByName( namespace+joints[i], true )
			if( thisJoint !== undefined ){
				thisJoint.showHierarchy = false
				thisJoint.showRotationAxis = true
				thisJoint.radius = 5
				editor.addGroupContent( u.assetGroup, [thisJoint] )
			}
		}
		editor.jointsVisibility()
		editor.controlsVisibility()		
	}
	u.addLast( cleanup )
	u.build()
}

MM.splineIkPlus = function( editor ){
	// console.log('Building spline IK plus')
	var assetName = 'spline'
	var namespace = 'spline:'
	var u = new MM.Asset( editor );
	u.setNamespace( namespace )
	u.addSkeleton('/data/tiny/skeleton/cRoot_skeleton.json')

	u.addRigComponent( new MM.SpineComponent( 
	{'controlSize' : 0.5, 'asset' : assetName, 
	'names' : ['cBodyCtl', 'cHipCtl', 'cBChestCtl'],
	'joints' : ['cSpine0', 'cSpine1', 'cSpine2', 'cSpine3']} ) )

	var sides = ['l']//, 'r']
	var shoulderJoints = ['Collar', 'Shoulder']
	var armNames = ['ElbowCtl', 'HandCtl']
	var armJoints = ['Shoulder', 'Elbow', 'Wrist']		
	for( var i = 0; i < sides.length; i++){
	//	Shoulder
		u.addRigComponent( new MM.ShoulderComponent( 
			{'controlSize' : 0.5, 'side' : sides[i], 'parentJoint' : 'cSpine4', 
			'asset' : assetName, 'names' : ['ShoulderCtl'], 
			'joints' : shoulderJoints}))
	//	Arm
		u.addRigComponent( new MM.ArmComponent( {'controlSize' : 0.5, 
			'asset' : assetName, 'side' : sides[i],
			'names' : armNames, 'joints' : armJoints }))			
	}				

	var cleanup = function(){
		var addedGroup = editor.addGroup( 'spline' , 'asset')
		var objectsToSelect=['cBodyCtl', 'cHipCtl', 'cBChestCtl', 'lShoulderCtl',
		'rShoulderCtl', 'lElbowCtl', 'lHandCtl', 'rElbowCtl', 'rHandCtl']
		var thisJoint;
		for( var i = 0, l = objectsToSelect.length; i < l; i++){
			thisJoint = editor.scene.getObjectByName( u.namespace+objectsToSelect[i], true )
			if(thisJoint !== undefined ){
				editor.addGroupContent( addedGroup, [thisJoint] )
			// }else{
			// 	console.log('Unable to find', objectsToSelect[i])
			}
		}			

		var lShoulder = editor.scene.getObjectByName(u.namespace+'lShoulderCtl', true);			
		var cBotChest = editor.scene.getObjectByName(u.namespace+'cBChestCtl', true);
		cBotChest.setParent( lShoulder )

		editor.jointsVisibility()
		editor.controlsVisibility()
	}

	u.addLast( cleanup )
	u.build()
}

MM.armIk = function( editor ){	
// console.log('Building arm Ik')

	var assetName = 'arm'
	var namespace = 'arm:'
	var u = new MM.AssetBuild( editor );
	u.setNamespace( namespace )
	u.addSkeleton('/data/tiny2/skeleton/cRoot_skeleton.json')	

	var sides = ['l']
	var shoulderJoints = ['Collar', 'Shoulder']
	var armNames = ['ElbowCtl', 'HandCtl']
	var armJoints = ['Shoulder', 'Elbow', 'Wrist']		
	for( var i = 0; i < sides.length; i++){
	//	Shoulder
		u.addRigComponent( new MM.ShoulderComponent( 
			{'controlSize' : 0.5, 'side' : sides[i], 'parentJoint' : 'cSpine4', 
			'asset' : assetName, 'names' : ['ShoulderCtl'], 
			'joints' : shoulderJoints}))
	//	Arm
		u.addRigComponent( new MM.LimbComponent( {'controlSize' : 0.5, 
			'asset' : assetName, 'side' : sides[i],
			'names' : armNames, 'joints' : armJoints }))			
	}	

	var cleanup = function(){
		var addedGroup = editor.addGroup( 'spline' , 'asset')
		var objectsToSelect=['lShoulderCtl', 'lElbowCtl', 'lHandCtl']
		var thisJoint;
		for( var i = 0, l = objectsToSelect.length; i < l; i++){
			thisJoint = editor.scene.getObjectByName( u.namespace+objectsToSelect[i], true )
			if(thisJoint !== undefined ){
				editor.addGroupContent( addedGroup, [thisJoint] )
			// }else{
			// 	console.log('Unable to find', objectsToSelect[i])
			}
		}			

		editor.jointsVisibility()
		editor.controlsVisibility()
	}

	u.addLast( cleanup )
	u.build()		
}

MM.stackedSplines = function( editor ){
	// console.log('Building stacked splines')
	var assetName = 'sSpline'
	var namespace = 'sSpline'

	var u = new MM.Asset( editor );
	u.setNamespace( namespace );		
	u.addSkeleton('/data/tiny/skeleton/cRoot_skeleton.json')

	//	Back
	u.addRigComponent( new MM.SpineComponent( 
		{'controlSize' : 0.5, 'asset' : assetName, 
		'names' : ['cBodyCtl', 'cHipCtl', 'cBChestCtl'],
		'joints' : ['cSpine0', 'cSpine1', 'cSpine2', 'cSpine3']} ) )
	
	//	Neck
	u.addRigComponent( new MM.SpineComponent( 
		{'controlSize' : 0.5, 'globalControl' : false, 'asset' : assetName,
		'names' : ['', 'cTChestCtl', 'cHeadCtl'],
		'joints' : ['cSpine4', 'cNeck0', 'cNeck1', 'cNeck2']} ) )

	var lastFunction = function(){	
		var controlsToLookFor = [ 'cTChestCtl', 'cBChestCtl', 'cHeadCtl']
		var controls = {}
		//	create asset group
		var assetGroup = editor.addGroup( u.namespace , 'asset')
		for( var i = 0; i < controlsToLookFor.length; i++){
			var foundControl = editor.scene.getObjectByName(u.namespace+
				controlsToLookFor[i], true);		
			if( foundControl === undefined ){
				console.error('Unable to find', u.namespace+controlsToLookFor[i])
			}
			controls[controlsToLookFor[i]] = foundControl

		//	add control to selection group			
			editor.addGroupContent( assetGroup, [foundControl])
		}
		// console.log('result', controls)

	//	inter component connections
		controls['cBChestCtl'].setParent( controls['cTChestCtl'] )
		controls['cTChestCtl'].setParent( controls['cHeadCtl'] )

		var test = new THREE.Object3D()
		test.name = 'test'
		test.tag = 'control'
		editor.addObject( test )
		editor.addGroupContent( assetGroup, [test])
		controls['cBChestCtl'].setParent( test )

		editor.jointsVisibility()
		editor.controlsVisibility()
	}

	u.addLast(lastFunction)
	u.build();
}