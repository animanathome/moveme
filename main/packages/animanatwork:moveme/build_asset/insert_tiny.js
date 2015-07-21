MM.insertMidi = function( editor ){
	console.log('insertMidi')

	var config = {
		  namespace: 'midi:'
		, name : 'midi'
		, control_scale : 1.0
        , control_distance : 1.0
		//	root data directory
		,  root_path : '/data/midi/'		
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

	//	Add a asset specific post function. This will just scale the control shapes to match the dimensions of the asset.
	u.addPost(function(){
		var jaw_ctl = u.getControl('cJawCtl')
		jaw_ctl.controlOffset.y = -2.5
		jaw_ctl.controlOffset.z = 1.5
		jaw_ctl.controlScale.y = 0.2

		u.getRigComponent('spine').controls['HeadCtl'].controlScale.y = 1.5
        u.getRigComponent('spine').controls['HeadCtl'].controlScale.x = 1.8
        u.getRigComponent('spine').controls['HeadCtl'].controlScale.z = 1.8	
		u.getRigComponent('spine').controls['HeadCtl'].controlOffset.y = 4.0

		u.getRigComponent('spine').controls['TChestCtl'].controlScale.x = 1.15
		u.getRigComponent('spine').controls['TChestCtl'].controlScale.y = 0.3
		u.getRigComponent('spine').controls['TChestCtl'].controlScale.z = 1.2

		u.getRigComponent('spine').controls['BChestCtl'].controlScale.x = 1.25
		u.getRigComponent('spine').controls['BChestCtl'].controlScale.y = 0.375
		u.getRigComponent('spine').controls['BChestCtl'].controlScale.z = 1.2

		u.getRigComponent('spine').controls['HipCtl'].controlScale.x = 1.2
		u.getRigComponent('spine').controls['HipCtl'].controlScale.y = 0.375
		u.getRigComponent('spine').controls['HipCtl'].controlScale.z = 1.2

		u.getRigComponent('spine').controls['BodyCtl'].controlScale.x = 2.1
		u.getRigComponent('spine').controls['BodyCtl'].controlScale.y = 2.1
		u.getRigComponent('spine').controls['BodyCtl'].controlScale.z = 2.1

		u.getRigComponent('spine').controls['BodySubCtl'].controlScale.x = 1.6
		u.getRigComponent('spine').controls['BodySubCtl'].controlScale.y = 1.6
		u.getRigComponent('spine').controls['BodySubCtl'].controlScale.z = 1.6

		var sides = ['l', 'r']
		var i;
		for( i = 0; i < 2; i++){
			var shoulder = u.getRigComponent(sides[i]+'Shoulder').controls['ShoulderCtl']
			if(sides[i] === 'l'){
				shoulder.controlOffset.x = 0.5;
			}else{
				shoulder.controlOffset.x = -0.5;
			}
			shoulder.controlOffset.y = 1.5;
			shoulder.controlScale.x = 0.35;
			shoulder.controlScale.z = 0.3;

			var foot = u.getRigComponent(sides[i]+'Leg').controls['FootIkCtl']
			foot.controlScale.x = 1.5;
			foot.controlScale.z = 3.0;
			foot.controlOffset.z = 2.0;

			u.getRigComponent(sides[i]+'Arm').controls['HandCtl'].controlShape = 'planeX'
			u.getRigComponent(sides[i]+'Arm').controls['ArmSwitch'].controlOffset.z = -10;

			var finger = u.getControl(sides[i]+'FingerCtl')
			finger.controlSize = 1.0;

			var thumb = u.getControl(sides[i]+'ThumbCtl')
			thumb.controlSize = 1.0;
		}		
	})
	u.build()

	//	return used asset build
	return u;	
}

MM.midiSelect = function( namespace, container , editor){
	console.log('midiSelect', namespace, container, editor)

    var space = MM.bipedSelect( namespace, container, editor )
    return space;
}  

MM.midiKeyAll = function( namespace, container , editor){
	console.log('midiKeyAll', namespace, container, editor)
 
	var key_container = MM.bipedKeyAll( namespace, container, editor );
    return key_container;
}

