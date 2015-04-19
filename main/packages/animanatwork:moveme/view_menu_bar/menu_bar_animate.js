MM.Menubar.Animates = function( editor ){
	var signals = editor.signals;

	var menuGrp = new MMUI.MenuGrp('Animate');

//	key all
	var setKeySubMenu = new MMUI.SubMenuGrp('Set Key')
	menuGrp.add( setKeySubMenu )

	var keyAllItem = new MMUI.MenuItem('All');
	keyAllItem.onClick( function(){ 
		editor.keySelectedObjects() 
	}).addShortcut('s');
	setKeySubMenu.add( keyAllItem )	

	var keyTranslationItem = new MMUI.MenuItem('Translation');
	keyTranslationItem.onClick( function(){ 
		editor.keySelectedObjects(['rotation', 'scale'])
	}).addShortcut('Shift+w')
	setKeySubMenu.add( keyTranslationItem )	

	var keyRotationItem = new MMUI.MenuItem('Rotation');
	keyRotationItem.onClick( function(){
		editor.keySelectedObjects( ['position', 'scale'])
	}).addShortcut('Shift+e')
	setKeySubMenu.add( keyRotationItem )	

	var keyScaleItem = new MMUI.MenuItem('Scale');
	keyScaleItem.onClick( function(){
		editor.keySelectedObjects( ['position', 'rotation'])	
	}).addShortcut('Shift+r')
	setKeySubMenu.add( keyScaleItem )	

	var keyOtherItem = new MMUI.MenuItem('Other');
	setKeySubMenu.add( keyOtherItem )		


	var addKeyItem = new MMUI.MenuItem('Add Key').onClick( function(){
		editor.addKey()
	})
	menuGrp.add( addKeyItem )

	var removeKeyItem = new MMUI.MenuItem('Remove Key').onClick( function(){
		editor.removeKey()
	})
	menuGrp.add( removeKeyItem )

	//	remove key
	var removeAllKeyItem = new MMUI.MenuItem('Remove All Keys');
	removeAllKeyItem.onClick( function(){ editor.removeAllAnimCurves() })
	menuGrp.add( removeAllKeyItem )

	var sepItem = new MMUI.MenuDivider()
	menuGrp.add( sepItem )

	var copyKeyItem = new MMUI.MenuItem('Copy Keys').onClick( function(){
		editor.copyKeys()
	});
	menuGrp.add( copyKeyItem )

	var pasetKeyItem = new MMUI.MenuItem('Paste Keys').onClick( function(){
		editor.pasteKeys()
	})
	menuGrp.add( pasetKeyItem )

	var sepItem0 = new MMUI.MenuDivider()
	menuGrp.add( sepItem0 )

	var frameKeyItem = new MMUI.MenuItem('Frame Selected Keys').onClick( function(){
		editor.signals.keyFramed.dispatch();	
	}).addShortcut('f')
	menuGrp.add( frameKeyItem )		

//	TANGENTS
	var sepItem1 = new MMUI.MenuDivider();
	menuGrp.add( sepItem1 )

	var steppedKeyItem = new MMUI.MenuItem('Set Tangents Stepped');
	steppedKeyItem.onClick( function(){editor.steppedTangents()} )
	menuGrp.add( steppedKeyItem )

	var linearKeyItem = new MMUI.MenuItem('Set Tangents Linear');
	linearKeyItem.onClick( function(){editor.linearTangents()} )
	menuGrp.add( linearKeyItem )

	var bezierKeyItem = new MMUI.MenuItem('Set Tangents Bezier');
	bezierKeyItem.onClick( function(){editor.bezierTangents()} )
	menuGrp.add( bezierKeyItem )

	var sepItem2 = new MMUI.MenuDivider();
	menuGrp.add( sepItem2 )

	var breakKeyItem = new MMUI.MenuItem('Break Tangents');
	breakKeyItem.onClick( function(){editor.breakTangents()} )
	menuGrp.add( breakKeyItem )

	var unifyKeyItem = new MMUI.MenuItem('Unify Tangents');
	unifyKeyItem.onClick( function(){editor.unifyTangents()} )
	menuGrp.add( unifyKeyItem )

	var sepItem3 = new MMUI.MenuDivider();
	menuGrp.add( sepItem3 )

	var freeKeyItem = new MMUI.MenuItem('Free Tangent Weight');
	freeKeyItem.onClick( function(){editor.unlockTangents()} )
	menuGrp.add( freeKeyItem )

	var lockKeyItem = new MMUI.MenuItem('Lock Tangent Weight');
	lockKeyItem.onClick( function(){editor.lockTangents()} )
	menuGrp.add( lockKeyItem )

	var sepItem4 = new MMUI.MenuDivider();
	menuGrp.add( sepItem4 )

	var flattenKeyItem = new MMUI.MenuItem('Flatten Tangent Weight');
	flattenKeyItem.onClick( function(){editor.flattenTangents()} )
	menuGrp.add( flattenKeyItem )	

//	auto key
	var sepItem5 = new MMUI.MenuDivider();
	menuGrp.add( sepItem5 )

	var toggleAutoKey = new MMUI.MenuItem('Toggle Auto Key');
	toggleAutoKey.onClick( function(){
		editor.toggleAutoKey()
	})
	menuGrp.add( toggleAutoKey )

	var sepItem6 = new MMUI.MenuDivider();
	menuGrp.add( sepItem6 )	

//	DEFAULT SETTINGS
//	tangents
	var tangentSubMenu = new MMUI.SubMenuGrp('Set Default Tangent')
	menuGrp.add( tangentSubMenu )

	var tangentStepped = new MMUI.MenuItem('Stepped');
	tangentStepped.onClick( function(){
		editor.defaultTangentType = 0;
	})
	tangentSubMenu.add( tangentStepped )

	var tangentLinear = new MMUI.MenuItem('Linear');
	tangentLinear.onClick( function(){
		editor.defaultTangentType = 1;
	})
	tangentSubMenu.add( tangentLinear )

	var tangentBezier = new MMUI.MenuItem('Bezier');
	tangentBezier.onClick( function(){
		editor.defaultTangentType = 2;
	})
	tangentSubMenu.add( tangentBezier )

	var sepItem7 = new MMUI.MenuDivider()
	menuGrp.add( sepItem7 )

//	playback speed
	var playbackSubMenu = new MMUI.SubMenuGrp('Playback Speed')
	menuGrp.add( playbackSubMenu )

	var playbackEveryFrame = new MMUI.MenuItem('Every Frame');
	playbackEveryFrame.onClick( function(){
		editor.playbackMode = 'free';
	})
	playbackSubMenu.add( playbackEveryFrame )

	var playback12fps = new MMUI.MenuItem('12fps');
	playback12fps.onClick( function(){
		editor.playbackMode = 'fixed';
		editor.playbackSpeed = 12;
	})
	playbackSubMenu.add( playback12fps )

	var playback24fps = new MMUI.MenuItem('24fps');
	playback24fps.onClick( function(){
		editor.playbackMode = 'fixed';
		editor.playbackSpeed = 24;
	})
	playbackSubMenu.add( playback24fps )

	var playback25fps = new MMUI.MenuItem('25fps');
	playback25fps.onClick( function(){
		editor.playbackMode = 'fixed';
		editor.playbackSpeed = 25;
	})
	playbackSubMenu.add( playback25fps )	

	var playback30fps = new MMUI.MenuItem('30fps');
	playback30fps.onClick( function(){
		editor.playbackMode = 'fixed';
		editor.playbackSpeed = 30;
	})
	playbackSubMenu.add( playback30fps )	

	return menuGrp;
}