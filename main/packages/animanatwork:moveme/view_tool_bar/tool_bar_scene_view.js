MM.SceneViewToolBar = function( editor, parent ){
	// console.log('MM.SceneViewToolBar', editor, parent)

	var signals = editor.signals;

	var options = new MMUI.Panel();
	options.setClass( 'viewport-toolbar')
	parent.add( options );

	var intro = new MMUI.Text().setValue('Scene').setClass('toolbar-intro')
	options.add( intro )	

	var toolbar = new MMUI.ButtonToolBar;
	options.add( toolbar )

//	TRANSFORM MODE
	var modeGroup = new MMUI.ButtonGroup;
	toolbar.add( modeGroup )

//	SELECT
	var selectUI = new MMUI.Button().setImage('/ui/manipSelect.gif')
	selectUI.onClick( function(){
		console.log('ViewportOptions: select')

		options.setUIToolMode('select')
		signals.manipModeChange.dispatch('select')
	}).addToolTip('Select Tool')
	modeGroup.add(selectUI)

	if( editor.activeTool === 'select'){
		selectUI.setBackgroundColor('#B3B3B3')
	}

//	MOVE
	var moveUI = new MMUI.Button().setImage('/ui/manipTranslate.gif')
	moveUI.onClick( function(){
		console.log('ViewportOptions: move')
	
		options.setUIToolMode('translate')
		signals.manipModeChange.dispatch( 'translate' )
	}).addToolTip('Move Tool')
	modeGroup.add(moveUI)

	if( editor.activeTool === 'translate'){
		moveUI.setBackgroundColor('#B3B3B3')
	}	

//	ROTATION
	var rotateUI = new MMUI.Button().setImage('/ui/manipRotate.gif')
	rotateUI.onClick( function(){
		console.log('ViewportOptions: rotate')
		options.setUIToolMode('rotate')
		signals.manipModeChange.dispatch( 'rotate' )
	}).addToolTip('Rotate Tool')
	modeGroup.add(rotateUI)

//	SCALE
	var scaleUI = new MMUI.Button().setImage('/ui/manipScale.gif')
	scaleUI.onClick( function(){
		console.log('ViewportOptions: scale')
		options.setUIToolMode('scale')
		signals.manipModeChange.dispatch( 'scale' )
	}).addToolTip('Scale Tool')
	modeGroup.add(scaleUI)

//	TRANSFORM SPACE
	var spaceGroup = new MMUI.ButtonGroup;
	toolbar.add( spaceGroup )

	var localUI = new MMUI.Button().setImage('/ui/manipLocal.gif')
	localUI.onClick( function(){
		console.log('ViewportOptions: localSpace')
		options.setUIToolSpace('local')
		signals.manipSpaceChange.dispatch('local')	
	}).addToolTip('Local Mode')
	spaceGroup.add(localUI)
	
	if( editor.activeSpace === 'local'){
		localUI.setBackgroundColor('#B3B3B3')
	}

	var worldUI = new MMUI.Button().setImage('/ui/manipWorld.gif')
	worldUI.onClick( function(){
		console.log('ViewportOptions: worldSpace')		
		
		options.setUIToolSpace('world')
		signals.manipSpaceChange.dispatch('world')
	}).addToolTip('World Mode')
	spaceGroup.add(worldUI)

	if( editor.activeSpace === 'world'){
		worldUI.setBackgroundColor('#B3B3B3')
	}	

//	FUNCTIONS
	function frame(){
		console.log('ViewportOptions: frame')
	}

	// function localSpace()
	// {
	// 	console.log('ViewportOptions: localSpace')
	// 	options.setUIToolSpace('local')
	// 	signals.manipSpaceChange.dispatch('local')	
	// }

	// function worldSpace()
	// {
	// 	console.log('ViewportOptions: worldSpace')		
	// 	options.setUIToolSpace('world')
	// 	signals.manipSpaceChange.dispatch('world')
	// }

	// function select(){
	// 	console.log('ViewportOptions: select')

	// 	options.setUIToolMode('select')
	// 	signals.manipModeChange.dispatch('select')
	// }

	// function move(){
	// 	console.log('ViewportOptions: move')
	// 	options.setUIToolMode('translate')
	// 	signals.manipModeChange.dispatch( 'translate' )
	// }

	// function rotate(){
	// 	console.log('ViewportOptions: rotate')
	// 	options.setUIToolMode('rotate')
	// 	signals.manipModeChange.dispatch( 'rotate' )
	// }

	// function scale(){
	// 	console.log('ViewportOptions: scale')
	// 	options.setUIToolMode('scalex')
	// 	signals.manipModeChange.dispatch( 'scale' )
	// }

	options.setUIToolSpace = function( space ){		
		// console.log('setUIToolSpace', space)
		switch( space ){
			case "local":
				localUI.setBackgroundColor('#B3B3B3') // dark
				worldUI.setBackgroundColor('#EBEBEA') // light
			break;

			case "world":
				worldUI.setBackgroundColor('#B3B3B3') // light
				localUI.setBackgroundColor('#EBEBEA') // dark
			break;
		}
	}

	options.setUIToolMode = function( mode ){
		// console.log('setUIToolMode', mode)
		switch(mode){
			case "select":
				selectUI.setBackgroundColor('#B3B3B3')
				moveUI.setBackgroundColor('#EBEBEA')
				rotateUI.setBackgroundColor('#EBEBEA')
				scaleUI.setBackgroundColor('#EBEBEA')
			break;

			case "translate":
				selectUI.setBackgroundColor('#EBEBEA')
				moveUI.setBackgroundColor('#B3B3B3')
				rotateUI.setBackgroundColor('#EBEBEA')
				scaleUI.setBackgroundColor('#EBEBEA')
			break;

			case "rotate":
				selectUI.setBackgroundColor('#EBEBEA')
				moveUI.setBackgroundColor('#EBEBEA')
				rotateUI.setBackgroundColor('#B3B3B3')
				scaleUI.setBackgroundColor('#EBEBEA')
			break;

			case "scale":
				selectUI.setBackgroundColor('#EBEBEA')
				moveUI.setBackgroundColor('#EBEBEA')
				rotateUI.setBackgroundColor('#EBEBEA')
				scaleUI.setBackgroundColor('#B3B3B3')
			break;
		}
	}		

	editor.signals.manipModeChange.add( function( mode ) {
		console.log('SceneViewToolBar.manipModeChange', mode)
		options.setUIToolMode( mode )		
	})


	return options;
}