MM.Menubar.Inserts = function( editor ){
	var signals = editor.signals;

	var menuGrp = new MMUI.MenuGrp('Insert');

//	Camera
	var cameraSubMenu = new MMUI.SubMenuGrp('Camera')
	menuGrp.add( cameraSubMenu )

	var perspCamera = new MMUI.MenuItem('Perspective');
	perspCamera.onClick( function(){		
		MM.insertCamera( editor );
	})
	cameraSubMenu.add( perspCamera )	

//	Separator
	var sepItem1 = new MMUI.MenuDivider();
	menuGrp.add( sepItem1 )	

//	primitive
	var primitiveSubMenu = new MMUI.SubMenuGrp('Primitive')
	menuGrp.add( primitiveSubMenu )

	var primitiveGround = new MMUI.MenuItem('Ground').onClick( function(){
		MM.insertGround( editor );
	})
	primitiveSubMenu.add( primitiveGround )	

	var primitivePlane = new MMUI.MenuItem('Plane').onClick( function(){
		MM.insertPlane( editor);
	})
	primitiveSubMenu.add( primitivePlane )	

	var primitiveRamp = new MMUI.MenuItem('Ramp').onClick( function(){
		MM.insertRamp( editor );
	});
	primitiveSubMenu.add( primitiveRamp )

	var primitiveCube = new MMUI.MenuItem('Cube').onClick( function(){
		MM.insertCube( editor );
	});
	primitiveSubMenu.add( primitiveCube )

	var primitiveSphere = new MMUI.MenuItem('Sphere').onClick( function(){
		MM.insertSphere(editor)
	});
	primitiveSubMenu.add( primitiveSphere );
	
//	prop
	// var propSubMenu = new MMUI.SubMenuGrp('Prop')
	// menuGrp.add( propSubMenu )

	// var propChair = new MMUI.MenuItem('Chair');
	// // propChair.onClick( insertChair )
	// propSubMenu.add( propChair )

//	character
	var characterSubMenu = new MMUI.SubMenuGrp('Character')
	menuGrp.add( characterSubMenu )

	var characterTail = new MMUI.MenuItem('Ball');
	characterTail.onClick( function(){
		console.log('Insert Ball')
		MM.insertBall( editor )
	})
	characterSubMenu.add( characterTail )	

	//	Separator
	sepItem1 = new MMUI.MenuDivider();
	characterSubMenu.add( sepItem1 )

	characterTail = new MMUI.MenuItem('Tail');
	characterTail.onClick( function(){
		console.log('Insert Tail')
		MM.insertTail( editor )
	})
	characterSubMenu.add( characterTail )	

	//	Separator
	sepItem1 = new MMUI.MenuDivider();
	characterSubMenu.add( sepItem1 )

	var characterDrone = new MMUI.MenuItem('Legs');
	characterDrone.onClick( function(){
		console.log('Insert Legs')
		MM.insertLegs( editor )
	})
	characterSubMenu.add( characterDrone )	

	//	Separator
	sepItem1 = new MMUI.MenuDivider();
	characterSubMenu.add( sepItem1 )	

	var characterBaby = new MMUI.MenuItem('Mini');
	characterSubMenu.add( characterBaby )	
	characterBaby.onClick( function(){
		console.log('Insert Mini')
		MM.insertMini( editor )
	})

	var characterTiny = new MMUI.MenuItem('Midi');
	characterSubMenu.add( characterTiny )	
	characterTiny.onClick( function(){
		console.log('Insert Midi')
		MM.insertMidi( editor )
	})	

	var characterMaxi = new MMUI.MenuItem('Maxi');
	characterSubMenu.add( characterMaxi )	
	characterMaxi.onClick( function(){
		console.log('Insert Maxi')
		MM.insertMaxi( editor )
	})

	// var characterDino = new UI.MenuItem('Dino');
	// characterMenu.add( characterDino )	
	// characterDino.onClick( function(){
	// 	insertDino( editor )
	// })

	// var characterTunny = new UI.MenuItem('Tunny');
	// characterMenu.add( characterTunny )	
	// characterTunny.onClick( function(){		
	// 	insertTunny( editor );
	// })
	
	// var characterManSimple = new UI.MenuItem('Man Simple');
	// characterMenu.add( characterManSimple )	

	// var characterManAdvanced = new UI.MenuItem('Man Advanced');
	// characterManAdvanced.onClick( insertMan )
	// characterMenu.add( characterManAdvanced )	

	return menuGrp;
}