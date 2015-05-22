MM.insertBiped = function( editor, config ){
	// Generalized simple biped build	
	console.log('insertBiped ', editor, config)

	if(config == undefined ){
		console.log('\tNo config file defined.')
		return;
	}

//	INIT	
	//	Init asset build
	var u = new MM.AssetBuild( editor );
	u.setNamespace( config['namespace'] );
	u.assetName = config['name'];

	if(!config.hasOwnProperty('root_path')){
		console.log('\tNo root data path has been defined.')
		return;
	}

// DATA
	//	Add model paths
	// console.log('Defining models')
	var model;
	if(config.hasOwnProperty('models')){
		for(model in config.models){
			console.log('\tmodel ', config.models[model])
			u.addModel(config['root_path']+config.models[model])
		}
	}

	//	Add joint paths
	// console.log('Defining joints')
	var joint;
	if(config.hasOwnProperty('joints')){
		for(joint in config.joints){
			console.log('\tjoint ', config.joints[joint])
			u.addSkeleton(config['root_path']+config.joints[joint])
		}
	}

	//	Add skin paths
	// console.log('Defining skins')
	var skin;
	if(config.hasOwnProperty('skins')){
		for(skin in config.skins){
			console.log('\tskin ', config.skins[skin])
			u.addSkin(config['root_path']+config.skins[skin])
		}
	}

// COMPONENTS
	//	Rigging components
	u.addRigComponent( new MM.GlobalComponent({
		controlSize: config['control_scale']*10, 
		controlShape: 'plane', 
		asset: config['name'], 
		side: 'c',
		names: ['GlobalCtl'], 
		joints: ['Root']
	} ), 'global' )
	
	//	Back
	u.addRigComponent( new MM.SpineComponent({
		controlSize: config['control_scale']*1, 
		'globalControl' : true,
		asset: config['name'], 
		names: ['cBodyCtl', 'cHipCtl', 'cBChestCtl'], 
		joints: ['cSpine0', 'cSpine1', 'cSpine2', 'cSpine3']}
	), 'back' )
	
	//	Neck
	u.addRigComponent( new MM.SpineComponent({
		'controlSize' : config['control_scale']*1, 
		'globalControl' : false,
		'asset' : config['name'],
		'names' : ['', 'cTChestCtl', 'cHeadCtl'],
		'joints' : ['cSpine4', 'cNeck0', 'cNeck1', 'cNeck2']
		}
	), 'head' )

	//	Limbs
	var legNames = ['HipFkCtl', 'KneeFkCtl', 'AnkleFkCtl', 'BallFkCtl', 'LegSwitch', 'KneeIkCtl', 'FootIkCtl']
	var legJoints = ['Hip', 'Knee', 'Ankle', 'Heel', 'Ball', 'Toe']
	
	var shoulderJoints = ['Collar', 'Shoulder']

	var armNames = ['ShoulderFkCtl', 'ElbowFkCtl', 'WristFkCtl','ArmSwitch', 'ElbowCtl', 'HandCtl']
	var armJoints = ['Shoulder', 'Elbow', 'Wrist']

	var sides = ['l', 'r']
	for( var i = 0; i < sides.length; i++){
		
		//	Leg
		u.addRigComponent( new MM.LegBlendComponent( {
			controlSize : config['control_scale']*2, 
			side : sides[i], 
			stretchAxis: 'y', 
			asset : config['name'], 
			names: legNames, 
			joints: legJoints,
			poleVectorOffset: config['control_distance']* 25
		} ), sides[i]+'Leg' )			
		
		//	Shoulder
		u.addRigComponent( new MM.ShoulderComponent( {
			controlSize: config['control_scale']*1, 
			side: sides[i], 
			parentJoint: 'cSpine4', 
			asset: config['name'], 
			names: ['ShoulderCtl'], 
			joints: shoulderJoints
		}), sides[i]+'Shoulder')
		
		//	Arm
		u.addRigComponent( new MM.LimbComponent({
			controlSize: config['control_scale']*2, 
			asset:config['name'], 
			side:sides[i], 
			fkControlShape: 'circleX', 
			ikControlShape: 'plane', 
			stretchAxis: 'x', 
			buildIkControlOnFloor:false, 
			names:armNames, 
			joints: armJoints, 
			poleVectorOffset: config['control_distance']* -25
		}), sides[i]+'Arm')		
	}

//	POST
	var lastFunction = function(){
		var sides = ['l', 'r']
        
	//	add stretch
        var names = ['Ankle', 'Knee', 'Elbow', 'Wrist']
        var driver, driven, driverName, drivenName;
        for( var i = 0; i < sides.length; i++){
            for( var j = 0; j < names.length; j++){
                driverName=u.namespace+sides[i]+names[j]
                drivenName=u.namespace+sides[i]+names[j]+'Stretch';
                driver=editor.scene.getObjectByName(driverName, true);
                driven=editor.scene.getObjectByName(drivenName, true);        
                driver.connectChannelTo(driven, 'position')
            }
        }

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

			u.addControls([eyeControl])

		//	Finger
			var fingerJoint = editor.scene.getObjectByName(
				u.namespace+sides[i]+'Finger', true)			
			
			var fingerControl = MM.createConstraintGroup( sides[i], 
				u.namespace+sides[i]+'FingerCtl', 'circleZ', 1.25)

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

			u.addControls([fingerControl])

		//	Thumb
			var thumbJoint = editor.scene.getObjectByName(
				u.namespace+sides[i]+'Thumb', true)
			var thumbControl = MM.createConstraintGroup( sides[i], 
				u.namespace+sides[i]+'ThumbCtl', 'circle', 1.25)

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

			u.addControls([thumbControl])
		}

	//	add jaw control
		var jawJoint = editor.scene.getObjectByName( u.namespace+'cJaw', true )

		var jawControl = new MM.Constraint();
		jawControl.name = u.namespace+'cJawCtl'
		jawControl.asset = u.assetName
		jawControl.setControlShape('c', 'cube', 5)		
		u.rigComponents[2].controls['cHeadCtl'].add( jawControl )
		jawControl.constraintMode = 1
		jawControl.setObjectToSolve( jawJoint )
		editor.addGroupContent( u.assetGroup, [ jawControl ] ) 
		jawControl.setChannelsRotate()
		editor.addSelectables([jawControl])

		u.addControls([jawControl])
	
	//	inter component connections by using spaceswitches
	//	each control created through createControlGroup has a spaceswitch node
		
		// //	chest to head
		u.getRigComponent('back').controls['cBChestCtl'].setParent( 
			u.getRigComponent('head').controls['cTChestCtl'].parent)
	
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
		
		//	arms and legs
		for( var i = 0; i < sides.length; i++){
			//	arms
			//	space switch to global, tchest and shoulder
			u.getRigComponent(sides[i]+'Arm').controls['HandCtl'].parent.addSpace( u.getRigComponent('global').controls['GlobalCtl'])
			
			u.getRigComponent(sides[i]+'Arm').controls['HandCtl'].parent.addSpace( u.getRigComponent('head').controls['cTChestCtl'])
			
			u.getRigComponent(sides[i]+'Arm').controls['HandCtl'].parent.addSpace( u.getRigComponent(sides[i]+'Shoulder').controls['ShoulderCtl'])

			u.getRigComponent(sides[i]+'Arm').controls['HandCtl'].parent.addSpaceswitchChannel( u.getRigComponent(sides[i]+'Arm').controls['HandCtl'])

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
		var i, j, material;
		for( i = 0, j = u.models.length; i < j; i++){
			// expose color attribute to user
			u.models[i].addChannel( 'custom', 'color' )
			u.models[i].custom={
				'visibility' : u.models[i].visible, 
				'color' : u.models[i].material.color
			};
			for( material in config['materials']){
				if(u.models[i].name === u.namespace+material){
					u.models[i].material.color = config['materials'][material]
				}
			}
		}
	//	undo
		editor.getUndoDataForAddAsset( u.namespace, 'undo')	
	}
	u.addLast(lastFunction)
	
	u.showProgress();
	
	return u
}

MM.bipedSelect = function( namespace, container, editor){

	container.setHeight('331px')
	//	width should be 205px

    var space = new MMUI.Panel();
    space.setPosition('absolute');
    container.add( space )

    var img = document.createElement("img");    
    img.src = "/ui/tinySelect2.gif";
    img.width = 205;
    img.height = 331;
    space.dom.appendChild( img )

    var cValue = 95;

  	//  GLOBAL
    var globalButton = new MMUI.Button('')
    globalButton.setClass('gCtrlButton')
    globalButton.setPosition('absolute')    
    globalButton.setLeft(cValue+'px')
    globalButton.setBottom('6px')
    globalButton.onClick( function (){ 
        editor.selectObjectByName( namespace+':cGlobalCtl') } )  
    space.add( globalButton )

    var bodyButton = new MMUI.Button('')
    bodyButton.setClass('cCtrlButton')
    bodyButton.setPosition('absolute')    
    bodyButton.setLeft(cValue+'px')
    bodyButton.setBottom('84px')
    bodyButton.onClick( function (){ 
        editor.selectObjectByName( namespace+':CcBodyCtl') } )  
    space.add( bodyButton )

	var hipButton = new MMUI.Button('')
    hipButton.setClass('cCtrlButtonIk')
    hipButton.setPosition('absolute')    
    hipButton.setLeft(cValue+'px')
    hipButton.setBottom('110px')
    hipButton.onClick( function (){ 
        editor.selectObjectByName( namespace+':cHipCtl') } )  
    space.add( hipButton )  

	var bChestButton = new MMUI.Button('')
    bChestButton.setClass('cCtrlButtonIk')
    bChestButton.setPosition('absolute')    
    bChestButton.setLeft(cValue+'px')
    bChestButton.setBottom('158px')
    bChestButton.onClick( function (){ 
        editor.selectObjectByName( namespace+':cBChestCtl') } )  
    space.add( bChestButton )    

	var tChestButton = new MMUI.Button('')
    tChestButton.setClass('cCtrlButton')
    tChestButton.setPosition('absolute')    
    tChestButton.setLeft(cValue+'px')
    tChestButton.setBottom('184px')
    tChestButton.onClick( function (){ 
        editor.selectObjectByName( namespace+':cTChestCtl') } )  
    space.add( tChestButton )   

	var cJawButton = new MMUI.Button('')
    cJawButton.setClass('cCtrlButton')
    cJawButton.setPosition('absolute')    
    cJawButton.setLeft(cValue+'px')
    cJawButton.setBottom('245px')
    cJawButton.onClick( function (){ 
        editor.selectObjectByName( namespace+':cJawCtl') } )  
    space.add( cJawButton )       

	var cHeadButton = new MMUI.Button('')
    cHeadButton.setClass('cCtrlButtonIk')
    cHeadButton.setPosition('absolute')    
    cHeadButton.setLeft(cValue+'px')
    cHeadButton.setBottom('265px')
    cHeadButton.onClick( function (){ 
        editor.selectObjectByName( namespace+':cHeadCtl') } )  
    space.add( cHeadButton )       

    var lEyeButton = new MMUI.Button('')
    lEyeButton.setClass('lCtrlButton')
    lEyeButton.setPosition('absolute')    
    lEyeButton.setRight('72px')
    lEyeButton.setBottom('286px')
    lEyeButton.onClick( function (){ 
        editor.selectObjectByName( namespace+':lEyeCtl') } )  
    space.add( lEyeButton )   

	var rEyeButton = new MMUI.Button('')
    rEyeButton.setClass('rCtrlButton')
    rEyeButton.setPosition('absolute')    
    rEyeButton.setLeft('72px')
    rEyeButton.setBottom('286px')
    rEyeButton.onClick( function (){ 
        editor.selectObjectByName( namespace+':rEyeCtl') } )  
    space.add( rEyeButton )    

//	SHOULDERS
	//	left
    var lIkShoulderButton = new MMUI.Button('')
    lIkShoulderButton.setClass('lCtrlButtonIk')
    lIkShoulderButton.setPosition('absolute')    
    lIkShoulderButton.setRight('75px')
    lIkShoulderButton.setBottom('238px')
    lIkShoulderButton.onClick( function (){ 
        editor.selectObjectByName( namespace+':lShoulderCtl') } )  
    space.add( lIkShoulderButton )     

    var lFkShoulderButton = new MMUI.Button('')
    lFkShoulderButton.setClass('lCtrlButton')
    lFkShoulderButton.setPosition('absolute')    
    lFkShoulderButton.setRight('56px')
    lFkShoulderButton.setBottom('222px')
    lFkShoulderButton.onClick( function (){ 
        editor.selectObjectByName( namespace+':lShoulderFkCtl') } )  
    space.add( lFkShoulderButton )  

    //	right
    var rIkShoulderButton = new MMUI.Button('')
    rIkShoulderButton.setClass('rCtrlButtonIk')
    rIkShoulderButton.setPosition('absolute')    
    rIkShoulderButton.setLeft('75px')
    rIkShoulderButton.setBottom('240px')
    rIkShoulderButton.onClick( function (){ 
        editor.selectObjectByName( namespace+':rShoulderCtl') } )  
    space.add( rIkShoulderButton ) 

    var rFkShoulderButton = new MMUI.Button('')
    rFkShoulderButton.setClass('rCtrlButton')
    rFkShoulderButton.setPosition('absolute')    
    rFkShoulderButton.setLeft('56px')
    rFkShoulderButton.setBottom('222px')
    rFkShoulderButton.onClick( function (){ 
        editor.selectObjectByName( namespace+':rShoulderFkCtl') } )  
    space.add( rFkShoulderButton )      

//	ARMS
	//	left
    var lFkElbowButton = new MMUI.Button('')
    lFkElbowButton.setClass('lCtrlButton')
    lFkElbowButton.setPosition('absolute')    
    lFkElbowButton.setRight('32px')
    lFkElbowButton.setBottom('222px')
    lFkElbowButton.onClick( function (){ 
        editor.selectObjectByName( namespace+':lElbowFkCtl') } )  
    space.add( lFkElbowButton ) 	

    var lElbowPoleButton = new MMUI.Button('')
    lElbowPoleButton.setClass('lCtrlButtonIk')
    lElbowPoleButton.setPosition('absolute')    
    lElbowPoleButton.setRight('4px')
    lElbowPoleButton.setBottom('222px')
    lElbowPoleButton.onClick( function (){ 
        editor.selectObjectByName( namespace+':lElbowCtl') } )  
    space.add( lElbowPoleButton ) 	    

	var lFkHandButton = new MMUI.Button('')
    lFkHandButton.setClass('lCtrlButton')
    lFkHandButton.setPosition('absolute')    
    lFkHandButton.setRight('32px')
    lFkHandButton.setBottom('194px')
    lFkHandButton.onClick( function (){ 
        editor.selectObjectByName( namespace+':lWristFkCtl') } )  
    space.add( lFkHandButton ) 	

    var lIkHandButton = new MMUI.Button('')
    lIkHandButton.setClass('lCtrlButtonIk')
    lIkHandButton.setPosition('absolute')    
    lIkHandButton.setRight('16px')
    lIkHandButton.setBottom('194px')
    lIkHandButton.onClick( function (){ 
        editor.selectObjectByName( namespace+':lHandCtl') } )  
    space.add( lIkHandButton ) 

	var lArmSwitchButton = new MMUI.Button('')
    lArmSwitchButton.setClass('lCtrlButtonSwitch')
    lArmSwitchButton.setPosition('absolute')    
    lArmSwitchButton.setRight('0px')
    lArmSwitchButton.setBottom('194px')
    lArmSwitchButton.onClick( function (){ 
        editor.selectObjectByName( namespace+':lArmSwitch') } )  
    space.add( lArmSwitchButton )     

	var lFingerFkButton = new MMUI.Button('')
    lFingerFkButton.setClass('lCtrlButton')
    lFingerFkButton.setPosition('absolute')    
    lFingerFkButton.setRight('32px')
    lFingerFkButton.setBottom('160px')
    lFingerFkButton.onClick( function (){ 
        editor.selectObjectByName( namespace+':lFingerCtl') } )  
    space.add( lFingerFkButton )     

	var lThumbFkButton = new MMUI.Button('')
    lThumbFkButton.setClass('lCtrlButton')
    lThumbFkButton.setPosition('absolute')    
    lThumbFkButton.setRight('72px')
    lThumbFkButton.setBottom('184px')
    lThumbFkButton.onClick( function (){ 
        editor.selectObjectByName( namespace+':lThumbCtl') } )  
    space.add( lThumbFkButton ) 

    //	right     
    var rFkElbowButton = new MMUI.Button('')
    rFkElbowButton.setClass('rCtrlButton')
    rFkElbowButton.setPosition('absolute')    
    rFkElbowButton.setLeft('32px')
    rFkElbowButton.setBottom('222px')
    rFkElbowButton.onClick( function (){ 
        editor.selectObjectByName( namespace+':rElbowFkCtl') } )  
    space.add( rFkElbowButton ) 	

    var rElbowPoleButton = new MMUI.Button('')
    rElbowPoleButton.setClass('rCtrlButtonIk')
    rElbowPoleButton.setPosition('absolute')    
    rElbowPoleButton.setLeft('4px')
    rElbowPoleButton.setBottom('222px')
    rElbowPoleButton.onClick( function (){ 
        editor.selectObjectByName( namespace+':rElbowCtl') } )  
    space.add( rElbowPoleButton ) 	    

	var rFkHandButton = new MMUI.Button('')
    rFkHandButton.setClass('rCtrlButton')
    rFkHandButton.setPosition('absolute')    
    rFkHandButton.setLeft('32px')
    rFkHandButton.setBottom('194px')
    rFkHandButton.onClick( function (){ 
        editor.selectObjectByName( namespace+':rWristFkCtl') } )  
    space.add( rFkHandButton ) 	

    var rHandIkButton = new MMUI.Button('')
    rHandIkButton.setClass('rCtrlButtonIk')
    rHandIkButton.setPosition('absolute')    
    rHandIkButton.setLeft('16px')
    rHandIkButton.setBottom('194px')
    rHandIkButton.onClick( function (){ 
        editor.selectObjectByName( namespace+':rHandCtl') } )  
    space.add( rHandIkButton ) 

	var rArmSwitchButton = new MMUI.Button('')
    rArmSwitchButton.setClass('rCtrlButtonSwitch')
    rArmSwitchButton.setPosition('absolute')    
    rArmSwitchButton.setLeft('0px')
    rArmSwitchButton.setBottom('194px')
    rArmSwitchButton.onClick( function (){ 
        editor.selectObjectByName( namespace+':rArmSwitch') } )  
    space.add( rArmSwitchButton )     

	var rFingerFkButton = new MMUI.Button('')
    rFingerFkButton.setClass('rCtrlButton')
    rFingerFkButton.setPosition('absolute')    
    rFingerFkButton.setLeft('32px')
    rFingerFkButton.setBottom('160px')
    rFingerFkButton.onClick( function (){ 
        editor.selectObjectByName( namespace+':rFingerCtl') } )  
    space.add( rFingerFkButton )     

	var rThumbFkButton = new MMUI.Button('')
    rThumbFkButton.setClass('rCtrlButton')
    rThumbFkButton.setPosition('absolute')    
    rThumbFkButton.setLeft('72px')
    rThumbFkButton.setBottom('184px')
    rThumbFkButton.onClick( function (){ 
        editor.selectObjectByName( namespace+':rThumbCtl') } )  
    space.add( rThumbFkButton )     
        
//	LEGS
	// left
    var lKneePoleButton = new MMUI.Button('')
    lKneePoleButton.setClass('lCtrlButtonIk')
    lKneePoleButton.setPosition('absolute')    
    lKneePoleButton.setRight('10px')
    lKneePoleButton.setBottom('108px')
    lKneePoleButton.onClick( function (){ 
        editor.selectObjectByName( namespace+':lKneeIkCtl') } )  
    space.add( lKneePoleButton ) 

	var lKneeFkButton = new MMUI.Button('')
    lKneeFkButton.setClass('lCtrlButton')
    lKneeFkButton.setPosition('absolute')    
    lKneeFkButton.setRight('40px')
    lKneeFkButton.setBottom('108px')
    lKneeFkButton.onClick( function (){ 
        editor.selectObjectByName( namespace+':lKneeFkCtl') } )  
    space.add( lKneeFkButton ) 

	var lHipFkButton = new MMUI.Button('')
    lHipFkButton.setClass('lCtrlButton')
    lHipFkButton.setPosition('absolute')    
    lHipFkButton.setRight('66px')
    lHipFkButton.setBottom('108px')
    lHipFkButton.onClick( function (){ 
        editor.selectObjectByName( namespace+':lHipFkCtl') } )  
    space.add( lHipFkButton )    

	var lFootFkButton = new MMUI.Button('')
    lFootFkButton.setClass('lCtrlButton')
    lFootFkButton.setPosition('absolute')    
    lFootFkButton.setRight('40px')
    lFootFkButton.setBottom('84px')
    lFootFkButton.onClick( function (){ 
        editor.selectObjectByName( namespace+':lAnkleFkCtl') } )  
    space.add( lFootFkButton )   

	var lFootIkButton = new MMUI.Button('')
    lFootIkButton.setClass('lCtrlButtonIk')
    lFootIkButton.setPosition('absolute')    
    lFootIkButton.setRight('20px')
    lFootIkButton.setBottom('84px')
    lFootIkButton.onClick( function (){ 
        editor.selectObjectByName( namespace+':lFootIkCtl') } )  
    space.add( lFootIkButton )     

	var lLegSwitchButton = new MMUI.Button('')
    lLegSwitchButton.setClass('lCtrlButtonSwitch')
    lLegSwitchButton.setPosition('absolute')    
    lLegSwitchButton.setRight('0px')
    lLegSwitchButton.setBottom('84px')
    lLegSwitchButton.onClick( function (){ 
        editor.selectObjectByName( namespace+':lLegSwitch') } )  
    space.add( lLegSwitchButton )     

	var lRollFkButton = new MMUI.Button('')
    lRollFkButton.setClass('lCtrlButton')
    lRollFkButton.setPosition('absolute')    
    lRollFkButton.setRight('40px')
    lRollFkButton.setBottom('48px')
    lRollFkButton.onClick( function (){ 
        editor.selectObjectByName( namespace+':lBallFkCtl') } )  
    space.add( lRollFkButton )     

    //	right  
    var rKneePoleButton = new MMUI.Button('')
    rKneePoleButton.setClass('rCtrlButtonIk')
    rKneePoleButton.setPosition('absolute')    
    rKneePoleButton.setLeft('10px')
    rKneePoleButton.setBottom('108px')
    rKneePoleButton.onClick( function (){ 
        editor.selectObjectByName( namespace+':lKneeIkCtl') } )  
    space.add( rKneePoleButton ) 

	var rKneeFkButton = new MMUI.Button('')
    rKneeFkButton.setClass('rCtrlButton')
    rKneeFkButton.setPosition('absolute')    
    rKneeFkButton.setLeft('40px')
    rKneeFkButton.setBottom('108px')
    rKneeFkButton.onClick( function (){ 
        editor.selectObjectByName( namespace+':rKneeFkCtl') } )  
    space.add( rKneeFkButton ) 

	var rHipFkButton = new MMUI.Button('')
    rHipFkButton.setClass('rCtrlButton')
    rHipFkButton.setPosition('absolute')    
    rHipFkButton.setLeft('66px')
    rHipFkButton.setBottom('108px')
    rHipFkButton.onClick( function (){ 
        editor.selectObjectByName( namespace+':rHipFkCtl') } )  
    space.add( rHipFkButton )    

	var rFootFkButton = new MMUI.Button('')
    rFootFkButton.setClass('rCtrlButton')
    rFootFkButton.setPosition('absolute')    
    rFootFkButton.setLeft('40px')
    rFootFkButton.setBottom('84px')
    rFootFkButton.onClick( function (){ 
        editor.selectObjectByName( namespace+':rAnkleFkCtl') } )  
    space.add( rFootFkButton )   

	var rFootIkButton = new MMUI.Button('')
    rFootIkButton.setClass('rCtrlButtonIk')
    rFootIkButton.setPosition('absolute')    
    rFootIkButton.setLeft('20px')
    rFootIkButton.setBottom('84px')
    rFootIkButton.onClick( function (){ 
        editor.selectObjectByName( namespace+':rFootIkCtl') } )  
    space.add( rFootIkButton )     

	var rLegSwitchButton = new MMUI.Button('')
    rLegSwitchButton.setClass('rCtrlButtonSwitch')
    rLegSwitchButton.setPosition('absolute')    
    rLegSwitchButton.setLeft('0px')
    rLegSwitchButton.setBottom('84px')
    rLegSwitchButton.onClick( function (){ 
        editor.selectObjectByName( namespace+':rLegSwitch') } )  
    space.add( rLegSwitchButton )     

	var rRollFkButton = new MMUI.Button('')
    rRollFkButton.setClass('rCtrlButton')
    rRollFkButton.setPosition('absolute')    
    rRollFkButton.setLeft('40px')
    rRollFkButton.setBottom('48px')
    rRollFkButton.onClick( function (){ 
        editor.selectObjectByName( namespace+':rBallFkCtl') } )  
    space.add( rRollFkButton )         

    return space;
}

MM.bipedKeyAll = function( namespace, container, editor ){
	var backgroundColor = "#D8D8D8" // should be E instead of D

	var controls = [
		 namespace+':cGlobalCtl'
		
		,namespace+':cBodyCtl'
		,namespace+':cBodySubCtl'

		,namespace+':cHipCtl'
		,namespace+':cBChestCtl'
		,namespace+':cTChestCtl'
		,namespace+':cHeadCtl'
		
	// l arm
		,namespace+':lShoulderCtl'

		,namespace+':lShoulderFkCtl'
		,namespace+':lElbowFkCtl'
    	,namespace+':lWristFkCtl'

		,namespace+':lFingerCtl'
		,namespace+':lThumbCtl'

		,namespace+':lArmSwitch'
    
    //	r arm	
		,namespace+':rShoulderCtl'

    	,namespace+':rShoulderFkCtl'
   	    ,namespace+':rElbowFkCtl'
   		,namespace+':rWristFkCtl'

		,namespace+':rFingerCtl'
		,namespace+':rThumbCtl'

		,namespace+':rArmSwitch'

	//	l leg
		,namespace+':lHipFkCtl'
   		,namespace+':lKneeFkCtl'
   		,namespace+':lAnkleFkCtl'
   		,namespace+':lBallFkCtl'

		,namespace+':lKneeIkCtl'
		,namespace+':lFootIkCtl'

		,namespace+':lLegSwitch'

	//	r leg
   		,namespace+':rHipFkCtl'
   		,namespace+':rKneeFkCtl'
   		,namespace+':rAnkleFkCtl'
   		,namespace+':rBallFkCtl'

		,namespace+':rKneeIkCtl'
		,namespace+':rFootIkCtl'

		,namespace+':rLegSwitch'
	]
	var all = new MM.AssetKeySelectControls( editor )
	all.setTitle('All').setControls(controls)
	// all.setBackgroundColor(backgroundColor)
	container.add( all.panel )

	var global = new MM.AssetKeySelectControls( editor )
	global.setTitle('Global').setControls([namespace+':cGlobalCtl'])
	global.setBackgroundColor(backgroundColor)
	container.add( global.panel )

	var back = new MM.AssetKeySelectControls( editor )
	back.setTitle('Back').setControls([ namespace+':cBodyCtl',
										namespace+':cBodySubCtl',
    						  			namespace+':cHipCtl',
    						  			namespace+':cBChestCtl',
    						  			namespace+':cTChestCtl',
    						  			namespace+':cHeadCtl'])
	container.add( back.panel )

//	arm FK
	var larmFk = new MM.AssetKeySelectControls( editor )
	larmFk.setTitle('Left Arm FK').setControls([namespace+':lShoulderFkCtl',
    						  			   		namespace+':lElbowFkCtl',
    						  			   		namespace+':lWristFkCtl'])
	larmFk.setBackgroundColor(backgroundColor)
	container.add( larmFk.panel )

	var rarmFk = new MM.AssetKeySelectControls( editor )
	rarmFk.setTitle('Right Arm FK').setControls([namespace+':rShoulderFkCtl',
    						  			   	     namespace+':rElbowFkCtl',
    						  			   		 namespace+':rWristFkCtl'])
	rarmFk.setBackgroundColor(backgroundColor)
	container.add( rarmFk.panel )

//	arm IK
	var larmIk = new MM.AssetKeySelectControls( editor )
	larmIk.setTitle('Left Arm IK').setControls([namespace+':lShoulderCtl',
    						  			   namespace+':lElbowCtl',
    						  			   namespace+':lHandCtl'
    						  			   ])	
	container.add( larmIk.panel )
	
	var rarmIk = new MM.AssetKeySelectControls( editor )
	rarmIk.setTitle('Right Arm IK').setControls([namespace+':rShoulderCtl',
    						  			   		 namespace+':rElbowCtl',
    						  			   		 namespace+':rHandCtl'])
	container.add( rarmIk.panel )

//	leg FK
	var rlegFk = new MM.AssetKeySelectControls( editor )
	rlegFk.setTitle('Right Leg FK').setControls([namespace+':rHipFkCtl',
    						  			   		namespace+':rKneeFkCtl',
    						  			   		namespace+':rAnkleFkCtl',
    						  			   		namespace+':rBallFkCtl'])
	rlegFk.setBackgroundColor(backgroundColor)
	container.add( rlegFk.panel )

	var llegFk = new MM.AssetKeySelectControls( editor )
	llegFk.setTitle('Left Leg FK').setControls([namespace+':lHipFkCtl',
    						  			   		namespace+':lKneeFkCtl',
    						  			   		namespace+':lAnkleFkCtl',
    						  			   		namespace+':lBallFkCtl'])
	llegFk.setBackgroundColor(backgroundColor)
	container.add( llegFk.panel )

//	leg IK
	var llegIk = new MM.AssetKeySelectControls( editor )
	llegIk.setTitle('Left Leg IK').setControls([namespace+':lKneeIkCtl',
    						  			   		namespace+':lFootIkCtl'])
	container.add( llegIk.panel )
	
	var rlegIk = new MM.AssetKeySelectControls( editor )
	rlegIk.setTitle('Right Leg IK').setControls([namespace+':rKneeIkCtl',
    						  			   		namespace+':rFootIkCtl'])
	container.add( rlegIk.panel )

	return container
}
