MM.insertTiny = function( editor ){
	console.log('insertTiny')

	config = {
		  namespace: 'tiny:'
		, name : 'tiny'
		//	root data directory
		,  root_path : '/data/tiny2/'		
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

	//	NOTE: since this is a asynchronous process we can do anything to our rig after build :/
	u = MM.insertBiped(editor, config);
	u.build()

	return u
//	this is also why the following will not work (since the components and controls do not exist yet)
// //	shape edits
// jawControl.controlOffset.y = -2.5
// jawControl.controlOffset.z = 1.5
// jawControl.controlScale.y = 0.3
// u.getRigComponent('head').controls['cHeadCtl'].controlScale.y = 0.5		
// u.getRigComponent('head').controls['cHeadCtl'].controlOffset.y = 4.0

// u.getRigComponent('head').controls['cTChestCtl'].controlScale.x = 0.1
// u.getRigComponent('head').controls['cTChestCtl'].controlScale.y = 0.1
// u.getRigComponent('head').controls['cTChestCtl'].controlScale.z = 0.1
// u.getRigComponent('head').controls['cTChestCtl'].controlOffset.z = 2.5

// u.getRigComponent('back').controls['cBChestCtl'].controlScale.x = 0.4
// u.getRigComponent('back').controls['cBChestCtl'].controlScale.y = 0.125
// u.getRigComponent('back').controls['cBChestCtl'].controlScale.z = 0.4

// u.getRigComponent('back').controls['cHipCtl'].controlScale.x = 0.4
// u.getRigComponent('back').controls['cHipCtl'].controlScale.y = 0.125
// u.getRigComponent('back').controls['cHipCtl'].controlScale.z = 0.4

// // u.getRigComponent('back').controls['cBodyCtl'].controlOffset.y = -2.5

// //	shoulder
// u.getRigComponent('lShoulder').controls['ShoulderCtl'].controlOffset.y = 1.25;
// u.getRigComponent('rShoulder').controls['ShoulderCtl'].controlOffset.y = 1.25;
// u.getRigComponent('lShoulder').controls['ShoulderCtl'].controlScale.z = 0.4
// u.getRigComponent('rShoulder').controls['ShoulderCtl'].controlScale.z = 0.4
// u.getRigComponent('lShoulder').controls['ShoulderCtl'].controlScale.x = 0.2
// u.getRigComponent('rShoulder').controls['ShoulderCtl'].controlScale.x = 0.2

// //	leg
// u.getRigComponent('lLeg').controls['FootIkCtl'].controlScale.x = 1.2;
// u.getRigComponent('lLeg').controls['FootIkCtl'].controlScale.z = 2.5;
// u.getRigComponent('lLeg').controls['FootIkCtl'].controlOffset.z = 2.0;

// u.getRigComponent('rLeg').controls['FootIkCtl'].controlScale.x = 1.2;
// u.getRigComponent('rLeg').controls['FootIkCtl'].controlScale.z = 2.5;
// u.getRigComponent('rLeg').controls['FootIkCtl'].controlOffset.z = 2.0;

// //	arm
// u.getRigComponent('lArm').controls['HandCtl'].controlShape = 'planeX'
// u.getRigComponent('rArm').controls['HandCtl'].controlShape = 'planeX'
// u.getRigComponent('lArm').controls['ArmSwitch'].controlOffset.z = -10;
// u.getRigComponent('rArm').controls['ArmSwitch'].controlOffset.z = -10;	
}

MM.tinySelect = function( namespace, container , editor){
	console.log('legsSelect', namespace, container, editor)

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

MM.tinyKeyAll = function( namespace, container , editor){
	console.log('tinyKeyAll', namespace, container, editor)
 
	var backgroundColor = "#D8D8D8" // should be E instead of D

	var controls = [
		 namespace+':cGlobalCtl'
		
		,namespace+':CcBodyCtl'
		,namespace+':cHipCtl'
		,namespace+':cBChestCtl'
		,namespace+':cTChestCtl'
		,namespace+':cHeadCtl'
		
		,namespace+':lShoulderFkCtl'
		,namespace+':lElbowFkCtl'
    	,namespace+':lWristFkCtl'
    	
    	,namespace+':rShoulderFkCtl'
   	    ,namespace+':rElbowFkCtl'
   		,namespace+':rWristFkCtl'

   		,namespace+':rHipFkCtl'
   		,namespace+':rKneeFkCtl'
   		,namespace+':rAnkleFkCtl'
   		,namespace+':rBallFkCtl'

   		,namespace+':lKneeIkCtl'
		,namespace+':lFootIkCtl'

		,namespace+':rKneeIkCtl'
		,namespace+':rFootIkCtl'

		,namespace+':lFingerCtl'
		,namespace+':lThumbCtl'

		,namespace+':rFingerCtl'
		,namespace+':rThumbCtl'
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
	back.setTitle('Back').setControls([ namespace+':CcBodyCtl',
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

