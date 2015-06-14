MM.insertMaxi = function( editor ){
	console.log('insertMaxi')

	var config = {
		  namespace: 'maxi:'
		, name : 'maxi'
		, control_scale : 3.0
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
	var u = MM.insertBiped(editor, config);


	//	Add a asset specific post function. This will just scale the control shapes to match the dimensions of the asset.
	u.addPost(function(){
		var jaw_ctl = u.getControl('cJawCtl')
		jaw_ctl.controlOffset.y = -2.0
		jaw_ctl.controlOffset.z = 5.0
		jaw_ctl.controlScale.y = 0.25

		u.getRigComponent('spine').controls['HeadCtl'].controlScale.set( 1.8, 1.8, 1.8)		
		u.getRigComponent('spine').controls['HeadCtl'].controlOffset.y = 4.0

		u.getRigComponent('spine').controls['TChestCtl'].controlScale.set( 2.7, 0.75, 3.3)
		u.getRigComponent('spine').controls['TChestCtl'].controlOffset.y = 1.0

		u.getRigComponent('spine').controls['BChestCtl'].controlScale.set( 2.4, 0.75, 2.4)				
		u.getRigComponent('spine').controls['BChestCtl'].controlOffset.z = 1.6

		u.getRigComponent('spine').controls['HipCtl'].controlScale.set(2.4, 0.75, 2.4)		
		u.getRigComponent('spine').controls['HipCtl'].controlOffset.z = 1.6

		u.getRigComponent('spine').controls['BodySubCtl'].controlScale.set(2.5, 2.5, 2.5)
		u.getRigComponent('spine').controls['BodyCtl'].controlScale.set(3.0, 3.0, 3.0)
		
		u.getRigComponent('global').controls['GlobalCtl'].controlScale.x = 1.0;
		u.getRigComponent('global').controls['GlobalCtl'].controlScale.z = 1.0;

		var sides = ['l', 'r']; 
		var i;
		for( i = 0; i < 2; i++){
			var shoulder = u.getRigComponent(sides[i]+'Shoulder').controls['ShoulderCtl']
			shoulder.controlOffset.y = 8
			shoulder.controlScale.x = 0.4
			shoulder.controlScale.z = 0.8;

			var knee = u.getRigComponent(sides[i]+'Leg').controls['KneeIkCtl']
			knee.controlScale.x = 0.5;
			knee.controlScale.z = 0.5;

			var foot = u.getRigComponent(sides[i]+'Leg').controls['FootIkCtl']
			foot.controlScale.x = 1.0;
			foot.controlScale.z = 1.6;
			foot.controlOffset.z = 3.2;

			var hand = u.getRigComponent(sides[i]+'Arm').controls['HandCtl']
			hand.controlShape = 'planeX'
			
			var elbow = u.getRigComponent(sides[i]+'Arm').controls['ElbowCtl']
			elbow.controlScale.x = 0.5;
			elbow.controlScale.z = 0.5;

			u.getRigComponent(sides[i]+'Arm').controls['ArmSwitch'].controlOffset.z = -10;

			var finger = u.getControl(sides[i]+'FingerCtl')
			finger.controlSize = 3.0;

			var thumb = u.getControl(sides[i]+'ThumbCtl')
			thumb.controlSize = 3.0;
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
 
	var key_container = MM.bipedKeyAll( namespace, container, editor );
    return key_container;
}