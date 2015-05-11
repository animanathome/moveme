MM.insertMini = function( editor ){
	console.log('insertMini')

	var config = {
		  namespace: 'mini:'
		, name : 'mini'
		, control_scale : 0.5
		, control_distance : 0.5
		//	root data directory
		,  root_path : '/data/baby/'		
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
	var u = MM.insertBiped(editor, config);
	u.addPost(function(){
		var jaw_ctl = u.getControl('cJawCtl')
		jaw_ctl.controlOffset.y = -1.25
		jaw_ctl.controlOffset.z = 1.5
		jaw_ctl.controlScale.y = 0.15

		u.getRigComponent('head').controls['cHeadCtl'].controlScale.y = 0.5	
		u.getRigComponent('head').controls['cHeadCtl'].controlScale.z = 0.6	
		u.getRigComponent('head').controls['cHeadCtl'].controlOffset.y = 5.0

		u.getRigComponent('head').controls['cTChestCtl'].controlScale.x = 0.1
		u.getRigComponent('head').controls['cTChestCtl'].controlScale.y = 0.1
		u.getRigComponent('head').controls['cTChestCtl'].controlScale.z = 0.1
		u.getRigComponent('head').controls['cTChestCtl'].controlOffset.z = 1.5

		u.getRigComponent('back').controls['cBChestCtl'].controlScale.x = 0.25
		u.getRigComponent('back').controls['cBChestCtl'].controlScale.y = 0.125
		u.getRigComponent('back').controls['cBChestCtl'].controlScale.z = 0.25

		u.getRigComponent('back').controls['cHipCtl'].controlScale.x = 0.25
		u.getRigComponent('back').controls['cHipCtl'].controlScale.y = 0.125
		u.getRigComponent('back').controls['cHipCtl'].controlScale.z = 0.25

		// u.getRigComponent('back').controls['cBodyCtl'].controlOffset.y = -2.5
		u.getRigComponent('back').controls['cBodyCtl'].controlScale.x = 0.5
		u.getRigComponent('back').controls['cBodyCtl'].controlScale.y = 0.5
		u.getRigComponent('back').controls['cBodyCtl'].controlScale.z = 0.5

		u.getRigComponent('global').controls['GlobalCtl'].controlScale.x = 1.5
		u.getRigComponent('global').controls['GlobalCtl'].controlScale.z = 1.5
		u.getRigComponent('global').controls['GlobalCtl'].controlOffset.z = 0.75

		var sides = ['l', 'r'];
		var i;
		for( i = 0; i < 2; i++){
			var shoulder = u.getRigComponent(sides[i]+'Shoulder').controls['ShoulderCtl']
			shoulder.controlOffset.y = 1;
			shoulder.controlScale.x = 0.2;
			shoulder.controlScale.z = 0.1

			var foot = u.getRigComponent(sides[i]+'Leg').controls['FootIkCtl']
			foot.controlScale.x = 2;
			foot.controlScale.z = 4.2;
			foot.controlOffset.z = 2.0;

			u.getRigComponent(sides[i]+'Arm').controls['HandCtl'].controlShape = 'planeX'
			u.getRigComponent(sides[i]+'Arm').controls['ArmSwitch'].controlOffset.z = -5;
		}
	})
	u.build()

	return u;
}

MM.miniSelect = function( namespace, container , editor){
	console.log('miniSelect', namespace, container, editor)

    var space = MM.bipedSelect( namespace, container, editor )
    return space;
}  

MM.miniKeyAll = function( namespace, container , editor){
	console.log('miniKeyAll', namespace, container, editor)
 
	var key_container = MM.bipedKeyAll( namespace, container, editor );
    return key_container;
}