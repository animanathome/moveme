MM.Menubar.Demos = function( editor ){
	var signals = editor.signals;

	var menuGrp = new MMUI.MenuGrp('Demos');	

//	CONTROL
	var controlSubMenu = new MMUI.SubMenuGrp('Controls')
	menuGrp.add( controlSubMenu )

	var control1Item = new MMUI.MenuItem('Simple Control').onClick( function(){
		MM.SimpleControl( editor );
	})
	controlSubMenu.add( control1Item )

	var control2Item = new MMUI.MenuItem('Camera Facing Control').onClick( function(){
		MM.FacingControl( editor );
	})
	controlSubMenu.add( control2Item )

	var deformSubMenu = new MMUI.SubMenuGrp('Deform')
	menuGrp.add( deformSubMenu )

	var deform1Item = new MMUI.MenuItem('FFD').onClick( function(){
		MM.FFDDemo( editor );
	})
	deformSubMenu.add( deform1Item )
	
//	MULTI CHANNEL
	var mulitChannelSubMenu = new MMUI.SubMenuGrp('Multi Channel')
	menuGrp.add( mulitChannelSubMenu )

	var demo1Item = new MMUI.MenuItem('Tx drives Ty and Ry').onClick( function(){
		MM.DemoMultiChannelPass( editor );
	})
	mulitChannelSubMenu.add( demo1Item )

	var demo2Item = new MMUI.MenuItem('Control drives Joints').onClick( function(){
		MM.DemoMultiChannelShapesPass( editor );
	})
	mulitChannelSubMenu.add( demo2Item )

	var demo3Item = new MMUI.MenuItem('Clamped channels').onClick( function(){
		MM.DemoMultiChannelMouthPass( editor );
	})
	mulitChannelSubMenu.add( demo3Item )

	var demo4Item = new MMUI.MenuItem('Custom channels').onClick( function(){
		MM.DemoAnimatableChannels( editor );
	})
	mulitChannelSubMenu.add( demo4Item )

//	SKELETON
	var dataInputSubMenu = new MMUI.SubMenuGrp('Data Input')
	menuGrp.add( dataInputSubMenu )

	var demo5Item = new MMUI.MenuItem('Skeleton IO').onClick( function(){
		MM.SkeletonIO( editor ) 
	})
	dataInputSubMenu.add( demo5Item )

	var demo6aItem = new MMUI.MenuItem('Model IO').onClick( function(){
		MM.ModelIO( editor ) 
	})
	dataInputSubMenu.add( demo6aItem )

	var demo6Item = new MMUI.MenuItem('Skinned Model IO').onClick( function(){
		MM.SkinnedModelIO( editor )
	})
	dataInputSubMenu.add( demo6Item )

//	CONSTRAINTS
	var constraintSubMenu = new MMUI.SubMenuGrp('Constraint')
	menuGrp.add( constraintSubMenu )	

	var demo7Item = new MMUI.MenuItem('Parent').onClick( function(){
		MM.ParentConstraint( editor ) 
	})
	constraintSubMenu.add( demo7Item )

	var demo7cItem = new MMUI.MenuItem('Parent and Scale').onClick( function(){
		MM.ParentAndScaleConstraint( editor )
	})
	constraintSubMenu.add( demo7cItem )	

	var demo7bItem = new MMUI.MenuItem('Parent Hierarchy').onClick( function(){
		MM.ParentHierarchyConstraint( editor ) 
	})
	constraintSubMenu.add( demo7bItem )	

	var demo7aItem = new MMUI.MenuItem('Aim with offset').onClick( function(){
		MM.AimAndOffsetConstraint( editor ) 
	})
	constraintSubMenu.add( demo7aItem )

	var demo8aItem = new MMUI.MenuItem('Spaceswitch One').onClick( function(){
		MM.SpaceswitchDemo1( editor );
	})
	constraintSubMenu.add( demo8aItem )

	var demo8bItem = new MMUI.MenuItem('Spaceswitch Multi').onClick( function(){
		MM.SpaceswitchDemo2( editor );
	})
	constraintSubMenu.add( demo8bItem )

	var demo8cItem = new MMUI.MenuItem('SpaceswitchSplit').onClick( function(){
		MM.SpaceSwitchSplitDemo( editor );
	})
	constraintSubMenu.add( demo8cItem )

	var demo9Item = new MMUI.MenuItem('ParentMaster 1').onClick( function() {
		MM.ParentMasterDemo1( editor );
	})
	constraintSubMenu.add( demo9Item )

	var demo10Item = new MMUI.MenuItem('ParentMaster 2').onClick( function() {
		MM.ParentMasterDemo2( editor );
	})
	constraintSubMenu.add( demo10Item )	

//	INVERSE KINEMATICS
	var ikSubMenu = new MMUI.SubMenuGrp('Inverse Kinematics')
	menuGrp.add( ikSubMenu )	

	var demo8Item = new MMUI.MenuItem('Simple Leg Ik').onClick( function(){ 
		MM.simpleIkLeg( editor );
	});
	ikSubMenu.add( demo8Item )

	demo9Item = new MMUI.MenuItem('Custom Leg Ik').onClick( function(){
		MM.simpleIkLeg( editor, true , undefined);
	});
	ikSubMenu.add( demo9Item )

	var demo9aItem = new MMUI.MenuItem('Zero Leg Ik').onClick( function(){ 
		MM.simpleIkLeg( editor, true , true);
	});
	ikSubMenu.add( demo9aItem )

	var sepItem1 = new MMUI.MenuDivider();
	ikSubMenu.add( sepItem1 );

//	blend limb ik
//	simple limb build showing the functionality of the limb component
	var demo9bItem = new MMUI.MenuItem('Blend Limb Ik').onClick( function(){ 
		MM.simpleLimbIk( editor );
	});
	ikSubMenu.add( demo9bItem )

	sepItem1 = new MMUI.MenuDivider();
	ikSubMenu.add( sepItem1 );	

//	blend leg ik
	var demo9cItem = new MMUI.MenuItem('Blend Leg Ik').onClick( function(){
		MM.simpleBlendLeg( editor );
	});
	ikSubMenu.add( demo9cItem )

	// var demo10bItem = new MMUI.MenuItem('2 Step Blend Leg Ik').onClick( function(){
	// 	MM.twoStepBlendIk( editor )
	// })
	// ikSubMenu.add( demo10bItem )

	// var demo10aItem = new MMUI.MenuItem('2 Simple Legs').onClick( function(){
	// 	MM.legIkPlus( editor )
	// })
	// ikSubMenu.add( demo10aItem )

	var sepItem2 = new MMUI.MenuDivider();
	ikSubMenu.add(sepItem2);

	var demo11Item = new MMUI.MenuItem('Tentacle Ik').onClick(function(){
		MM.tentacleIk(editor);
	})
	ikSubMenu.add( demo11Item )

	var demo11Item = new MMUI.MenuItem('Back Ik').onClick(function(){
		MM.backIk(editor);
	})
	ikSubMenu.add( demo11Item )

	var demo12Item = new MMUI.MenuItem('Spine Ik').onClick(function(){
		MM.spineIk(editor);
	})
	ikSubMenu.add( demo12Item )


	var demo13Item = new MMUI.MenuItem('Arm Ik').onClick( function(){
		MM.armIk( editor );
	})
	ikSubMenu.add( demo13Item )	

	return menuGrp;
}