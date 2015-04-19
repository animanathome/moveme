MM.insertLegs = function( editor ){
	console.log('insertLegs')

	var assetName = 'legs'
	var controlSize = 10.0;
	var controlScale = 0.1;

	var u = new MM.AssetBuild( editor );
	u.assetName = assetName
	u.setNamespace(assetName+':')
	
    // var rootPath = '/data/drone';
    var rootPath = '/data/drone1';

	//	load geometry
	u.addModel(rootPath+'/model/cBody.obj')
	u.addModel(rootPath+'/model/cJoints.obj')

	//	load skeleton
	u.addSkeleton(rootPath+'/skeleton/cRoot_skeleton.json')
	
	//	load skin
	u.addSkin(rootPath+'/weights/cBody_skin.json')
	u.addSkin(rootPath+'/weights/cJoints_skin.json')

	//	create global control
	u.addRigComponent( new MM.GlobalComponent({
		'controlShape' : 'plane',
		'controlSize' : 12, 
		'asset' : assetName, 
		'side' : 'c',
		'names' : ['GlobalCtl'], 
		'joints' : ['Root']
	}))

	//	create body control
	u.addRigComponent( new MM.GlobalComponent({
		'controlShape' : 'plane',
		'controlSize' : 10, 
		'asset' : assetName, 
		'side' : 'c',
		'names' : ['BodyCtl', 'HipCtl'], 
		'joints' : ['Spine0', 'Spine0']
	}))
	
	//	create leg controls (l and r)
	var legNames = ['HipFkCtl', 'KneeFkCtl','AnkleFkCtl', 
					'BallFkCtl', 'LegSwitch','KneeIkCtl', 
					'FootIkCtl']
	var legJoints = ['Hip', 'Knee', 'Ankle', 'Heel', 'Ball', 'Toe']
	
	var sides = ['l', 'r']
	for( var i = 0; i < sides.length; i++){
		u.addRigComponent( new MM.LegBlendComponent( {
				'controlSize' : 0.5, 
				'side' : sides[i],
				'asset' : assetName, 
				'names' : legNames, 
				'joints' :  legJoints
		}));        
	}	
	
	var cleanup = function(){
    //  setup stretch behavior, we do this by directly driving the position of the stretch joints
        var sides = ['l', 'r'];
        var names = ['Ankle', 'Knee']
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

	//	leg
		u.rigComponents[2].controls['FootIkCtl'].controlScale.x = 0.6;
		u.rigComponents[2].controls['FootIkCtl'].controlScale.z = 1.2;
		u.rigComponents[2].controls['FootIkCtl'].controlOffset.z = 2.0;
		u.rigComponents[3].controls['FootIkCtl'].controlScale.x = 0.6;
		u.rigComponents[3].controls['FootIkCtl'].controlScale.z = 1.2;
		u.rigComponents[3].controls['FootIkCtl'].controlOffset.z = 2.0;

        u.rigComponents[1].controls['BodyCtl'].controlOffset.y = -1.0;
        u.rigComponents[1].controls['HipCtl'].controlOffset.y = 1.0;

    //	parent
    	u.rigComponents[0].controls['GlobalCtl'].setParent(
			u.rigComponents[1].controls['BodyCtl'].parent)

		u.rigComponents[0].controls['GlobalCtl'].setParent(
			u.rigComponents[2].controls['FootIkCtl'].parent)
		u.rigComponents[0].controls['GlobalCtl'].setParent(
			u.rigComponents[3].controls['FootIkCtl'].parent)

		u.rigComponents[0].controls['GlobalCtl'].setParent(
			u.rigComponents[2].controls['KneeIkCtl'].parent)
		u.rigComponents[0].controls['GlobalCtl'].setParent(
			u.rigComponents[3].controls['KneeIkCtl'].parent)
		
		// editor.jointsVisibility()
		editor.controlsVisibility()	
	//	color geometry		
		var i, j;
		for( i = 0, j = u.models.length; i < j; i++){
            u.models[i].addChannel( 'custom', 'color' )
            u.models[i].custom={'visibility' : u.models[i].visible, 
                                'color' : u.models[i].material.color};
                                
			switch(u.models[i].name){
				case u.namespace+'cBody':
					u.models[i].material.color.setRGB(85/255,72/255,68/255)						
				break;

				case u.namespace+'cJoints':
					u.models[i].material.color.setRGB(114/255,63/255,55/255)
				break;
			}	
		}	
	//	undo
		editor.getUndoDataForAddAsset( u.namespace, 'undo')	        
	}
	u.addLast( cleanup )
	u.showProgress();	
	u.build()			
}

MM.legsSelect = function( namespace, container , editor){
	console.log('legsSelect', namespace, container, editor)

	container.setHeight('128px')

	var space = new MMUI.Panel();
    space.setPosition('absolute');
    container.add( space )

    var img = document.createElement("img");    
    img.src = "/ui/legsSelect1.gif";    
    img.width = 205;
    img.height = 128;
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
        editor.selectObjectByName( namespace+':cBodyCtl') } )  
    space.add( bodyButton )

	var hipButton = new MMUI.Button('')
    hipButton.setClass('cCtrlButtonIk')
    hipButton.setPosition('absolute')    
    hipButton.setLeft(cValue+'px')
    hipButton.setBottom('110px')
    hipButton.onClick( function (){ 
        editor.selectObjectByName( namespace+':cHipCtl') } )  
    space.add( hipButton )  

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
        editor.selectObjectByName( namespace+':rKneeIkCtl') } )  
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

MM.legsKeyAll = function( namespace, container, editor){
    console.log('legsKeyAll', namespace, container, editor)

    var backgroundColor = "#D8D8D8" // should be E instead of D

//  all
    var allControls = [
          namespace+':cGlobalCtl'
        , namespace+':cBodyCtl'
        , namespace+':cHipCtl'
        
        , namespace+':lLegSwitch'
        , namespace+':rLegSwitch'

        , namespace+':lKneeIkCtl'
        , namespace+':lFootIkCtl'
        
        , namespace+':rKneeIkCtl'
        , namespace+':rFootIkCtl'
        
        , namespace+':lHipFkCtl'
        , namespace+':lKneeFkCtl'
        , namespace+':lAnkleFkCtl'
        , namespace+':lBallFkCtl'

        , namespace+':rHipFkCtl'
        , namespace+':rKneeFkCtl'
        , namespace+':rAnkleFkCtl'
        , namespace+':rBallFkCtl'
    ]
    var all = new MM.AssetKeySelectControls( editor )
    all.setTitle('All').setControls(allControls)
    all.setBackgroundColor(backgroundColor)
    container.add( all.panel )    

//  global
    var global = new MM.AssetKeySelectControls( editor )
    global.setTitle('Global').setControls([namespace+':cGlobalCtl'])
    container.add( global.panel )    

//  body
    var body = new MM.AssetKeySelectControls( editor )
    body.setTitle('Body').setControls([namespace+':cBodyCtl'])
    body.setBackgroundColor(backgroundColor)
    container.add( body.panel )        

//  leg IK
    var llegIk = new MM.AssetKeySelectControls( editor )
    llegIk.setTitle('Left Leg IK').setControls([namespace+':lKneeIkCtl',
                                                namespace+':lFootIkCtl'])
    container.add( llegIk.panel )

    var rlegIk = new MM.AssetKeySelectControls( editor )
    rlegIk.setTitle('Right Leg IK').setControls([namespace+':rKneeIkCtl',
                                                namespace+':rFootIkCtl'])
    container.add( rlegIk.panel )

//  leg FK
    var llegFk = new MM.AssetKeySelectControls( editor )
    llegFk.setTitle('Left Leg FK').setControls([namespace+':lHipFkCtl',
                                                namespace+':lKneeFkCtl',
                                                namespace+':lAnkleFkCtl',
                                                namespace+':lBallFkCtl'])
    llegFk.setBackgroundColor(backgroundColor)
    container.add( llegFk.panel )

    var rlegFk = new MM.AssetKeySelectControls( editor )
    rlegFk.setTitle('Right Leg FK').setControls([namespace+':rHipFkCtl',
                                                namespace+':rKneeFkCtl',
                                                namespace+':rAnkleFkCtl',
                                                namespace+':rBallFkCtl'])
    rlegFk.setBackgroundColor(backgroundColor)
    container.add( rlegFk.panel )    

    return container
}