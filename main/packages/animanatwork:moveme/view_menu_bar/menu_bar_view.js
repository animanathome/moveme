MM.Menubar.Views = function( layout, editor ){
	var menuGrp = new MMUI.MenuGrp('View');
	
//	toggle helpers
	//	grid
	var gridSubMenu = new MMUI.SubMenuGrp('Grid')
	menuGrp.add( gridSubMenu )

	var gridOnItem = new MMUI.MenuItem('Show');
	gridOnItem.onClick( function(){ 
		editor.gridVisibility( true );
	});
	gridSubMenu.add( gridOnItem )

	var gridOffItem = new MMUI.MenuItem('Hide');
	gridOffItem.onClick( function(){ 		
		editor.gridVisibility( false );
	});
	gridSubMenu.add( gridOffItem )

	//	controls
	var controlSubMenu = new MMUI.SubMenuGrp('Controls')
	menuGrp.add( controlSubMenu )

	var controlsOnItem = new MMUI.MenuItem('Show All');
	controlsOnItem.onClick( function(){ 
		editor.controlsVisibility( true );
	});
	controlSubMenu.add( controlsOnItem )

	var controlsOffItem = new MMUI.MenuItem('Hide All');
	controlsOffItem.onClick( function(){ 		
		editor.controlsVisibility( false );
	});
	controlSubMenu.add( controlsOffItem )	

	//	joints
	var jointSubMenu = new MMUI.SubMenuGrp('Joints')
	menuGrp.add( jointSubMenu )

	var jointsOnItem = new MMUI.MenuItem('Show All');
	jointsOnItem.onClick( function(){ 
		editor.jointsVisibility( true );
	});
	jointSubMenu.add( jointsOnItem )

	var jointsOffItem = new MMUI.MenuItem('Hide All');
	jointsOffItem.onClick( function(){ 		
		editor.jointsVisibility( false );
	});
	jointSubMenu.add( jointsOffItem )	

	var sepItem3 = new MMUI.MenuDivider()
	jointSubMenu.add( sepItem3 )

	var jointRotationAxisOn = new MMUI.MenuItem('Show Rotation Axis');
	jointRotationAxisOn.onClick(function(){
		editor.rotationAxisVisibility(true)
	})
	jointSubMenu.add(jointRotationAxisOn)

	var jointRotationAxisOff = new MMUI.MenuItem('Hide Rotation Axis');
	jointRotationAxisOff.onClick(function(){
		editor.rotationAxisVisibility(false)
	})
	jointSubMenu.add(jointRotationAxisOff)

	//	geometry
	var geometrySubMenu = new MMUI.SubMenuGrp('Geometry');
	menuGrp.add( geometrySubMenu )

	var geometryOnItem = new MMUI.MenuItem('Show All');
	geometryOnItem.onClick( function(){ 
		editor.geometryVisibility( true );
	});
	geometrySubMenu.add( geometryOnItem )

	var geometryOffItem = new MMUI.MenuItem('Hide All');
	geometryOffItem.onClick( function(){ 		
		editor.geometryVisibility( false );
	});
	geometrySubMenu.add( geometryOffItem )		


//	panels
	sepItem3 = new MMUI.MenuDivider()
	menuGrp.add( sepItem3 )

	var panelSubMenu = new MMUI.SubMenuGrp('Panels');
	menuGrp.add( panelSubMenu )

	var hideAllItem = new MMUI.MenuItem('Hide All').onClick( function(){
		layout.signals.sidebarVisibility.dispatch( 0 );
		layout.signals.infoLineVisibility.dispatch( 0 );
		layout.signals.timeLineVisibility.dispatch( 0 );
		layout.signals.rangeSliderVisibility.dispatch( 0 );
	});
	panelSubMenu.add( hideAllItem )

	var showAllItem = new MMUI.MenuItem('Show All').onClick( function(){
		layout.signals.sidebarVisibility.dispatch( 1 );
		layout.signals.infoLineVisibility.dispatch( 1 );
		layout.signals.timeLineVisibility.dispatch( 1 );
		layout.signals.rangeSliderVisibility.dispatch( 1 );

	});
	panelSubMenu.add( showAllItem )

	//	side bar 
	var sideSubMenu = new MMUI.SubMenuGrp('Sidebar');
	menuGrp.add( sideSubMenu )

	var hideSideItem = new MMUI.MenuItem('Hide').onClick( function(){
		layout.signals.sidebarVisibility.dispatch( 0 );
	})
	sideSubMenu.add( hideSideItem )

	var showSideItem = new MMUI.MenuItem('Show').onClick( function(){
		layout.signals.sidebarVisibility.dispatch( 1 );
	})
	sideSubMenu.add( showSideItem )
	
	//	time slider
	var timeSubMenu = new MMUI.SubMenuGrp('Timeline');
	menuGrp.add( timeSubMenu )

	var hideTimeItem = new MMUI.MenuItem('Hide').onClick( function(){
		layout.signals.timeLineVisibility.dispatch( 0 );
	})
	timeSubMenu.add( hideTimeItem )

	var showTimeItem = new MMUI.MenuItem('Show').onClick( function(){
		layout.signals.timeLineVisibility.dispatch( 1 );
	})
	timeSubMenu.add( showTimeItem )

	//	range slider
	var rangeSubMenu = new MMUI.SubMenuGrp('Range Slider');
	menuGrp.add( rangeSubMenu )

	var hideRangeItem = new MMUI.MenuItem('Hide').onClick( function(){
		layout.signals.rangeSliderVisibility.dispatch( 0 );
	});
	rangeSubMenu.add( hideRangeItem )

	var showRangeItem = new MMUI.MenuItem('Show').onClick( function(){
		layout.signals.rangeSliderVisibility.dispatch( 1 );
	});
	rangeSubMenu.add( showRangeItem )	

	//	info line
	var infoSubMenu = new MMUI.SubMenuGrp('Infoline')
	menuGrp.add( infoSubMenu )

	var hideInfoItem = new MMUI.MenuItem('Hide').onClick( function(){
		layout.signals.infoLineVisibility.dispatch( 0 );
	})
	infoSubMenu.add( hideInfoItem )

	var showInfoItem = new MMUI.MenuItem('Show').onClick( function(){
		layout.signals.infoLineVisibility.dispatch( 1 );
	})
	infoSubMenu.add( showInfoItem )

//	layout
	// var sepItem4 = new MMUI.MenuDivider()
	// menuGrp.add( sepItem4 )

	// var layoutSubMenu = new MMUI.SubMenuGrp('Workspace Layout');
	// menuGrp.add( layoutSubMenu )

	// var layoutHorizontal = new MMUI.MenuItem('Horizontal Mode');
	// layoutHorizontal.onClick( function (){
	// 	console.log('menuBar: layoutHorizontal')		
	// 	editor.setLayout('h')
	// })
	// layoutSubMenu.add( layoutHorizontal )

	// var layoutVertical = new MMUI.MenuItem('Vertical Mode');
	// layoutVertical.onClick( function (){
	// 	console.log('menuBar: layoutVertical')		
	// 	editor.setLayout('v')
	// })
	// layoutSubMenu.add( layoutVertical )
	
//	reset
	var settingsSubMenu = new MMUI.SubMenuGrp('Settings');
	menuGrp.add( settingsSubMenu )

	var saveItem = new MMUI.MenuItem('Save').onClick( 
		function(){
			editor.saveSceneSettings();
	})
	settingsSubMenu.add( saveItem )

	var loadItem = new MMUI.MenuItem('Load').onClick( 
		function(){
			editor.loadSceneSettings();
	})
	settingsSubMenu.add( loadItem )

	var resetItem = new MMUI.MenuItem('Reset').onClick( 
		function(){
			editor.loadResetSceneSettings();
			editor.saveSceneSettings();
	})
	settingsSubMenu.add( resetItem )

	return menuGrp
}
