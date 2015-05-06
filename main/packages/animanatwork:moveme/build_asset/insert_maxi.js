MM.insertMaxi = function( editor ){
	console.log('insertMaxi')

	config = {
		  namespace: 'maxi:'
		, name : 'maxi'
		, control_scale : 2.0
		//	root data directory
		,  root_path : '/data/maxi/'		
		// model files
		, models : {
			  cBody: 'model/cBody.obj'
			, cEyes: 'model/cEyes.obj'
			, cJoints: 'model/cJoints.obj'
		}
		//	joint files
		, joints : {
			  cBody: 'skeleton/cRoot_skeleton.json'
		}
		// skin weights
		, skins : {
			  cBody: 'weights/cBody_skin.json'
			, cEyes: 'weights/cEyes_skin.json'
			, cJoints: 'weights/cJoints_skin.json'
		}
		//	material colors
		, materials : {
			  cBody: new THREE.Color().setRGB(85/255,72/255,68/255)
			, cEyes: new THREE.Color().setRGB(10/255,10/255,10/255)
			, cJoints: new THREE.Color().setRGB(114/255,63/255,55/255)
		}
	}
	//	Pass on the configuration to the pre-defined asset build
	u = MM.insertBiped(editor, config);


	//	Add a asset specific post function. This will just scale the control shapes to match the dimensions of the asset.
	u.addPost(function(){
		jaw_ctl = u.getControl('cJawCtl')
		jaw_ctl.controlOffset.y = -2.0
		jaw_ctl.controlOffset.z = 5.0
		jaw_ctl.controlScale.y = 0.25

		u.getRigComponent('head').controls['cHeadCtl'].controlScale.y = 0.7
		u.getRigComponent('head').controls['cHeadCtl'].controlOffset.y = 4.0

		u.getRigComponent('head').controls['cTChestCtl'].controlScale.x = 0.3
		u.getRigComponent('head').controls['cTChestCtl'].controlScale.y = 0.3
		u.getRigComponent('head').controls['cTChestCtl'].controlScale.z = 0.3
		u.getRigComponent('head').controls['cTChestCtl'].controlOffset.y = 1.0
		u.getRigComponent('head').controls['cTChestCtl'].controlOffset.z = 9

		u.getRigComponent('back').controls['cBChestCtl'].controlScale.x = 0.8
		u.getRigComponent('back').controls['cBChestCtl'].controlScale.y = 0.25
		u.getRigComponent('back').controls['cBChestCtl'].controlScale.z = 0.8
		u.getRigComponent('back').controls['cBChestCtl'].controlOffset.z = 1.6

		u.getRigComponent('back').controls['cHipCtl'].controlScale.x = 0.8
		u.getRigComponent('back').controls['cHipCtl'].controlScale.y = 0.25
		u.getRigComponent('back').controls['cHipCtl'].controlScale.z = 0.8
		u.getRigComponent('back').controls['cHipCtl'].controlOffset.z = 1.6

		// u.getRigComponent('back').controls['cBodyCtl'].controlOffset.y = -2.5
		u.getRigComponent('back').controls['cBodyCtl'].controlScale.x = 1.25
		u.getRigComponent('back').controls['cBodyCtl'].controlScale.y = 1.25
		u.getRigComponent('back').controls['cBodyCtl'].controlScale.z = 1.25
		
		u.getRigComponent('global').controls['GlobalCtl'].controlScale.x = 2.0;
		u.getRigComponent('global').controls['GlobalCtl'].controlScale.z = 2.0;

		var sides = ['l', 'r']
		for( i = 0; i < 2; i++){
			var shoulder = u.getRigComponent(sides[i]+'Shoulder').controls['ShoulderCtl']
			shoulder.controlOffset.y = 8
			shoulder.controlScale.x = 0.4
			shoulder.controlScale.z = 0.8;

			var foot = u.getRigComponent(sides[i]+'Leg').controls['FootIkCtl']
			foot.controlScale.x = 1.75;
			foot.controlScale.z = 3.8;
			foot.controlOffset.z = 3.4;

			var hand = u.getRigComponent(sides[i]+'Arm').controls['HandCtl']
			hand.controlShape = 'planeX'
			hand.controlScale.x = 2.0;
			hand.controlScale.z = 2.0;

			u.getRigComponent(sides[i]+'Arm').controls['ArmSwitch'].controlOffset.z = -10;
		}
	})
	u.build()

	return u;	
}	

/*
MM.insertMaxi = function( editor ){
	//	set the name of the asset
	var assetName = 'maxi'
	var namespace = 'maxi:'
	
	var u = new MM.AssetBuild( editor );
	u.setNamespace( namespace );
	u.assetName = assetName;
	
	rootPath = '/data/maxi/'

	//	geometry
	u.addModel(rootPath+'model/cBody.obj')
	u.addModel(rootPath+'model/cEyes.obj')
	u.addModel(rootPath+'model/cJoints.obj')
	
	//	skeleton
	u.addSkeleton(rootPath+'skeleton/cRoot_skeleton.json')
	
	//	skin
	u.addSkin(rootPath+'weights/cBody_skin.json')
	u.addSkin(rootPath+'weights/cEyes_skin.json')
	u.addSkin(rootPath+'weights/cJoints_skin.json')

	//	rigging components
	u.addRigComponent( new MM.GlobalComponent({
		controlSize: 15, controlShape: 'plane', asset: assetName, side: 'c',
		names: ['GlobalCtl'], joints: ['Root']
	} ), 'global' )
	
	//	Back
	u.addRigComponent( new MM.SpineComponent( 
		{controlSize: 0.8, asset: assetName, names: ['cBodyCtl', 'cHipCtl', 'cBChestCtl'], joints: ['cSpine0', 'cSpine1', 'cSpine2', 'cSpine3']}), 'back' )
	
	//	Neck
	u.addRigComponent( new MM.SpineComponent( 
		{'controlSize' : 0.6, 
		'globalControl' : false, 
		'asset' : assetName,
		'names' : ['', 'cTChestCtl', 'cHeadCtl'],
		'joints' : ['cSpine4', 'cNeck0', 'cNeck1', 'cNeck2']} ), 'head' )

	//	Limbs
	var legNames = ['HipFkCtl', 'KneeFkCtl', 'AnkleFkCtl', 'BallFkCtl', 'LegSwitch',
				'KneeIkCtl', 'FootIkCtl']
	var legJoints = ['Hip', 'Knee', 'Ankle', 'Heel', 'Ball', 'Toe']
	
	var shoulderJoints = ['Collar', 'Shoulder']
	var armNames = ['ShoulderFkCtl', 'ElbowFkCtl', 'WristFkCtl','ArmSwitch', 
				'ElbowCtl', 'HandCtl']
	var armJoints = ['Shoulder', 'Elbow', 'Wrist']

	var sides = ['l', 'r']
	for( var i = 0; i < sides.length; i++){
		//	Leg
		u.addRigComponent( new MM.LegBlendComponent( {
				controlSize : 5.0, side : sides[i], stretchAxis: 'y', asset : assetName, names: legNames, joints: legJoints, poleVectorOffset: 30
			} ), sides[i]+'Leg' )			
		//	Shoulder
		u.addRigComponent( new MM.ShoulderComponent( 
			{controlSize: 5.0, side: sides[i], parentJoint: 'cSpine4', asset: assetName, names: ['ShoulderCtl'], joints: shoulderJoints}), sides[i]+'Shoulder')
		//	Arm
		u.addRigComponent( new MM.LimbComponent({
			controlSize: 5.0, asset:assetName, side:sides[i], fkControlShape: 'circleX', ikControlShape: 'plane', stretchAxis: 'x', buildIkControlOnFloor:false, names:armNames, joints: armJoints, poleVectorOffset: -30
		}), sides[i]+'Arm')		
	}		

	var lastFunction = function(){
		var sides = ['l', 'r']
        
		// add stretch
        var names = ['Ankle', 'Knee', 'Elbow', 'Wrist']
        var driver, driven, driverName, drivenName;
        for( var i = 0; i < sides.length; i++){
            for( var j = 0; j < names.length; j++){
                driverName=assetName+':'+sides[i]+names[j]
                drivenName=assetName+':'+sides[i]+names[j]+'Stretch';
                driver=editor.scene.getObjectByName(driverName, true);
                driven=editor.scene.getObjectByName(drivenName, true);        
                driver.connectChannelTo(driven, 'position')
            }
        }

        console.log('\tadding finger and thumb control')

	//	add finger and thumb control to each control
		for( var i = 0; i < sides.length; i++){
		//	Eye
			var eyeJoint = editor.scene.getObjectByName(
				u.namespace+sides[i]+'Eye', true)
			var eyeControl = MM.createConstraintGroup( sides[i], 
				u.namespace+sides[i]+'EyeCtl', 'planeZ', 1)
			eyeControl['constraint'].controlOffset.z = 1			
			u.rigComponents[2].controls['cHeadCtl'].setParent(
					eyeControl['zero'])

			//	NOTE: here we need to run updateMatrixWorld since we need
			//	the new position (which has not been pushed down yet) for
			//	the object that we're going to drive so we can calculate the
			//	proper offset
			eyeControl['zero'].applyMatrix( eyeJoint.matrix)
			eyeControl['zero'].updateMatrixWorld();	
			eyeControl['constraint'].constraintMode = 5;
			eyeControl['constraint'].setObjectToSolve(eyeJoint)			
			editor.addGroupContent( u.assetGroup, [eyeControl['constraint']]) 
			editor.addSelectables([eyeControl['constraint']])

		//	Finger
			var fingerJoint = editor.scene.getObjectByName(
				u.namespace+sides[i]+'Finger', true)			
			
			var fingerControl = MM.createConstraintGroup( sides[i], 
				u.namespace+sides[i]+'FingerCtl', 'circleZ', 2.5)

			var wristJoint = editor.scene.getObjectByName(
				u.namespace+sides[i]+'Wrist', true)
			if( wristJoint === undefined ){
				console.error('Unable to find', u.namespace+sides[i]+'Wrist')
			}
			wristJoint.setParent(fingerControl['zero'])
						
			if( i === 0 ){ //	left
				fingerControl['constraint'].setDisplayColor(
					new THREE.Color(0x000066))			
			}else{ //	right
				fingerControl['constraint'].setDisplayColor(
					new THREE.Color(0x660000))
			}
			// fingerControl['constraint'].setControlShape( sides[i], 'circleZ', 2.5)
			fingerControl['constraint'].animChannels = [["rotation", ["z"]]]		
			fingerControl['constraint'].constraintMode = 1;
			fingerControl['constraint'].setObjectToSolve(fingerJoint)
			fingerControl['constraint'].asset = u.assetName
			
			fingerControl['zero'].applyMatrix( fingerJoint.matrix)
			editor.addGroupContent( u.assetGroup, [fingerControl['constraint']])
			editor.addSelectables([fingerControl['constraint']])

		//	Thumb
			var thumbJoint = editor.scene.getObjectByName(
				u.namespace+sides[i]+'Thumb', true)
			var thumbControl = MM.createConstraintGroup( sides[i], 
				u.namespace+sides[i]+'ThumbCtl', 'circle', 2.5)

			wristJoint.setParent(thumbControl['zero'])
			if( i === 0 ){				
				thumbControl['constraint'].setDisplayColor(
					new THREE.Color(0x000066))
			}else{			
				thumbControl['constraint'].setDisplayColor(
					new THREE.Color(0x660000))
			}			
			// thumbControl['constraint'].setControlShape( sides[i], 'circleZ', 2.5)
			thumbControl['constraint'].setChannelsRotate()			
			thumbControl['constraint'].constraintMode = 1;
			thumbControl['constraint'].setObjectToSolve(thumbJoint)	
			thumbControl['constraint'].asset = u.assetName		
			
			thumbControl['zero'].applyMatrix( thumbJoint.matrix)
			editor.addGroupContent( u.assetGroup, [thumbControl['constraint']])
			editor.addSelectables([thumbControl['constraint']])
		}

	//	add jaw control
		var jawJoint = editor.scene.getObjectByName( u.namespace+'cJaw', true )

		var jawControl = new MM.Constraint();
		jawControl.name = u.namespace+'cJawCtl'
		jawControl.asset = u.assetName
		jawControl.setControlShape('c', 'cube', 5.0)		
		u.rigComponents[2].controls['cHeadCtl'].add( jawControl )
		jawControl.constraintMode = 1
		jawControl.setObjectToSolve( jawJoint )
		editor.addGroupContent( u.assetGroup, [ jawControl ] ) 
		jawControl.setChannelsRotate()
		editor.addSelectables([jawControl])

	//	shape edits
		jawControl.controlOffset.y = -2.0
		jawControl.controlOffset.z = 5.0
		jawControl.controlScale.y = 0.25

		u.getRigComponent('head').controls['cHeadCtl'].controlScale.y = 0.7
		u.getRigComponent('head').controls['cHeadCtl'].controlOffset.y = 4.0

		u.getRigComponent('head').controls['cTChestCtl'].controlScale.x = 0.3
		u.getRigComponent('head').controls['cTChestCtl'].controlScale.y = 0.3
		u.getRigComponent('head').controls['cTChestCtl'].controlScale.z = 0.3
		u.getRigComponent('head').controls['cTChestCtl'].controlOffset.y = 1.0
		u.getRigComponent('head').controls['cTChestCtl'].controlOffset.z = 9

		// u.getRigComponent('back').controls['cBChestCtl'].controlScale.x = 0.25
		// // u.getRigComponent('back').controls['cBChestCtl'].controlScale.y = 0.125
		u.getRigComponent('back').controls['cBChestCtl'].controlScale.z = 0.8

		// u.getRigComponent('back').controls['cHipCtl'].controlScale.x = 0.25
		// // u.getRigComponent('back').controls['cHipCtl'].controlScale.y = 0.125
		u.getRigComponent('back').controls['cHipCtl'].controlScale.z = 0.8

		// u.getRigComponent('back').controls['cBodyCtl'].controlOffset.y = -2.5
		u.getRigComponent('back').controls['cBodyCtl'].controlScale.x = 1.25
		u.getRigComponent('back').controls['cBodyCtl'].controlScale.y = 1.25
		u.getRigComponent('back').controls['cBodyCtl'].controlScale.z = 1.25

		// //	shoulder
		u.getRigComponent('lShoulder').controls['ShoulderCtl'].controlOffset.y = 8;
		u.getRigComponent('rShoulder').controls['ShoulderCtl'].controlOffset.y = 8;
		u.getRigComponent('lShoulder').controls['ShoulderCtl'].controlScale.x = 0.4
		u.getRigComponent('lShoulder').controls['ShoulderCtl'].controlScale.z = 0.8;
		u.getRigComponent('rShoulder').controls['ShoulderCtl'].controlScale.z = 0.8;
		u.getRigComponent('rShoulder').controls['ShoulderCtl'].controlScale.x = 0.4;

		// //	leg
		// u.getRigComponent('lLeg').controls['FootIkCtl'].controlScale.x = 0.6;
		// u.getRigComponent('lLeg').controls['FootIkCtl'].controlScale.z = 1.2;
		// u.getRigComponent('lLeg').controls['FootIkCtl'].controlOffset.z = 2.0;
		// u.getRigComponent('rLeg').controls['FootIkCtl'].controlScale.x = 0.6;
		// u.getRigComponent('rLeg').controls['FootIkCtl'].controlScale.z = 1.2;
		// u.getRigComponent('rLeg').controls['FootIkCtl'].controlOffset.z = 2.0;

		// //	arm
		u.getRigComponent('lArm').controls['HandCtl'].controlShape = 'planeX'
		u.getRigComponent('rArm').controls['HandCtl'].controlShape = 'planeX'
		u.getRigComponent('lArm').controls['ArmSwitch'].controlOffset.z = -10;
		u.getRigComponent('rArm').controls['ArmSwitch'].controlOffset.z = -10;

		// u.getRigComponent('global').controls['GlobalCtl'].controlOffset.y = -1;

	//	inter component connections by using spaceswitches
	//	each control created through createControlGroup has a spaceswitch node
		
		// //	head to chest
		u.getRigComponent('back').controls['cBChestCtl'].setParent( 
			u.getRigComponent('head').controls['cTChestCtl'].parent)
		// 	
		// console.log('\thead chest control:', u.rigComponents[2].controls['cTChestCtl'])

		// //	head to cBodyCtl		
		u.getRigComponent('head').controls['cHeadCtl'].parent.addSpace(
			u.getRigComponent('global').controls['GlobalCtl'])
		u.getRigComponent('head').controls['cHeadCtl'].parent.addSpace(
			u.getRigComponent('back').controls['cBodyCtl'])
		u.getRigComponent('head').controls['cHeadCtl'].parent.addSpace( 
				u.getRigComponent('head').controls['cTChestCtl'])
		u.getRigComponent('head').controls['cHeadCtl'].parent.addSpaceswitchChannel(
				u.getRigComponent('head').controls['cHeadCtl'])

		//	shoulder to chest
		u.getRigComponent('head').controls['cTChestCtl'].setParent( 
			u.getRigComponent('lShoulder').controls['ShoulderCtl'].parent)

		u.getRigComponent('head').controls['cTChestCtl'].setParent( 
			u.getRigComponent('rShoulder').controls['ShoulderCtl'].parent)

		//	rest to global
		//	spine		
		u.getRigComponent('global').controls['GlobalCtl'].setParent(
			u.getRigComponent('back').controls['cBodyCtl'].getParent())
		
		for( var i = 0; i < sides.length; i++){
			//	arms
			//	space switch to global, tchest and shoulder
			u.getRigComponent(sides[i]+'Arm').controls['HandCtl'].parent.addSpace( 
				u.getRigComponent('global').controls['GlobalCtl'])
			u.getRigComponent(sides[i]+'Arm').controls['HandCtl'].parent.addSpace( 
				u.getRigComponent('head').controls['cTChestCtl'])
			u.getRigComponent(sides[i]+'Arm').controls['HandCtl'].parent.addSpace( 
				u.getRigComponent(sides[i]+'Shoulder').controls['ShoulderCtl'])

			u.getRigComponent(sides[i]+'Arm').controls['HandCtl'].parent.addSpaceswitchChannel(
				u.getRigComponent(sides[i]+'Arm').controls['HandCtl'])

			u.getRigComponent(sides[i]+'Arm').controls['ElbowCtl'].parent.addSpace(u.getRigComponent('global').controls['GlobalCtl'])
			u.getRigComponent(sides[i]+'Arm').controls['ElbowCtl'].parent.addSpace(u.getRigComponent('head').controls['cTChestCtl'])
			u.getRigComponent(sides[i]+'Arm').controls['ElbowCtl'].parent.addSpace(u.getRigComponent(sides[i]+'Shoulder').controls['ShoulderCtl'])
			u.getRigComponent(sides[i]+'Arm').controls['ElbowCtl'].parent.addSpaceswitchChannel(u.getRigComponent(sides[i]+'Arm').controls['ElbowCtl'])
		
			//	legs
			u.getRigComponent('global').controls['GlobalCtl'].setParent(
				u.getRigComponent(sides[i]+'Leg').controls['FootIkCtl'].parent)		
			u.getRigComponent('global').controls['GlobalCtl'].setParent(
				u.getRigComponent(sides[i]+'Leg').controls['KneeIkCtl'].parent)

			u.getRigComponent(sides[i]+'Leg').controls['KneeIkCtl'].parent.addSpace(u.getRigComponent('global').controls['GlobalCtl'])
			u.getRigComponent(sides[i]+'Leg').controls['KneeIkCtl'].parent.addSpace(u.getRigComponent('back').controls['cBodyCtl'])			
		}						
		

	//	visualize controls
		editor.controlsVisibility()	
		// editor.jointsVisibility()

	//	color geometry		
		var i, j;
		for( i = 0, j = u.models.length; i < j; i++){
			u.models[i].addChannel( 'custom', 'color' )
			u.models[i].custom={'visibility' : u.models[i].visible, 
								'color' : u.models[i].material.color};

			// console.log('\t', i, 'model:', u.models[i])
			switch(u.models[i].name){
				case u.namespace+'cBody':	
					u.models[i].material.color.setRGB(85/255,72/255,68/255);
				break;

				case u.namespace+'cEyes':
					u.models[i].material.color.setRGB(10/255,10/255,10/255);
				break;

				case u.namespace+'cJoints':
					u.models[i].material.color.setRGB(114/255,63/255,55/255); 
				break;
			}	
		}
	//	undo
		editor.getUndoDataForAddAsset( u.namespace, 'undo')	
	}
	u.addLast(lastFunction)
	u.showProgress();
	u.build();
}*/