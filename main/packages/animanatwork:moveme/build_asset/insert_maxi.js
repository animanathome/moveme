MM.insertMaxi = function( editor ){
	console.log('insertMaxi')

	config = {
		  namespace: 'maxi:'
		, name : 'maxi'
		, control_scale : 2.0
        , control_distance : 1.0		
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

		u.getRigComponent('head').controls['cHeadCtl'].controlScale.y = 0.6
		u.getRigComponent('head').controls['cHeadCtl'].controlScale.x = 0.6
		u.getRigComponent('head').controls['cHeadCtl'].controlScale.z = 0.6
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
		
		u.getRigComponent('global').controls['GlobalCtl'].controlScale.x = 1.0;
		u.getRigComponent('global').controls['GlobalCtl'].controlScale.z = 1.0;

		var sides = ['l', 'r']
		for( i = 0; i < 2; i++){
			var shoulder = u.getRigComponent(sides[i]+'Shoulder').controls['ShoulderCtl']
			shoulder.controlOffset.y = 8
			shoulder.controlScale.x = 0.4
			shoulder.controlScale.z = 0.8;

			var foot = u.getRigComponent(sides[i]+'Leg').controls['FootIkCtl']
			foot.controlScale.x = 1.4;
			foot.controlScale.z = 2.6;
			foot.controlOffset.z = 2.2;

			var hand = u.getRigComponent(sides[i]+'Arm').controls['HandCtl']
			hand.controlShape = 'planeX'
			hand.controlScale.x = 1.5;
			hand.controlScale.z = 1.5;

			u.getRigComponent(sides[i]+'Arm').controls['ArmSwitch'].controlOffset.z = -10;
		}
	})
	u.build()

	return u;	
}	

MM.maxiSelect = function( namespace, container , editor){
	console.log('maxiSelect', namespace, container, editor)

    var space = MM.bipedSelect( namespace, container, editor )
    return space;
}  

MM.maxiKeyAll = function( namespace, container , editor){
	console.log('maxiKeyAll', namespace, container, editor)
 
	var container = MM.bipedKeyAll( namespace, container, editor )

    return container;
}