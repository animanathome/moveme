MM.KeyViewToolBar = function ( editor, parent){
	var signals = editor.signals;

	var options = new MMUI.Panel();
	options.setClass( "keyview-toolbar");
	parent.add( options )

	var intro = new MMUI.Text().setValue('Key').setClass('toolbar-intro')
	options.add( intro )	

	var timeNumber = new MMUI.FloatGrp('Time').addClass('keyview-floatgrp')
	timeNumber.onChange( timeOrValueChange ).onStart( 
		function(){
			editor.getUndoTransformDataFromSelectedKeys() 
		})
	options.add( timeNumber )

	var valueNumber = new MMUI.FloatGrp('Value').addClass('keyview-floatgrp')
	valueNumber.dom.style.float='left';
	valueNumber.onChange( valueChange ).onStart( 
		function(){
			editor.getUndoTransformDataFromSelectedKeys() 
		})
	options.add( valueNumber )

	var toolbar = new MMUI.ButtonToolBar;
	options.add( toolbar )

//	SNAP
	var snapGroup = new MMUI.ButtonGroup;
	toolbar.add( snapGroup )

	var timeSnapUI = new MMUI.Button().setImage('/ui/keySnapTime.gif').addToolTip('Snap Key to Time')
	timeSnapUI.onClick( setTimeSnap )
	snapGroup.add(timeSnapUI)

	var valueSnapUI = new MMUI.Button().setImage('/ui/keySnapValue.gif').addToolTip('Snap Key to Value')
	valueSnapUI.onClick( setValueSnap );	
	snapGroup.add(valueSnapUI)

//	KEY
	var keyGroup = new MMUI.ButtonGroup;
	toolbar.add( keyGroup )

	var addKeyUI = new MMUI.Button().setImage('/ui/keyAdd.gif').addToolTip('Add Key')
	addKeyUI.onClick( function(){ editor.addKey() })
	keyGroup.add(addKeyUI)

	var removeKeyUI = new MMUI.Button( '').setImage('/ui/keyRemove.gif').addToolTip('Remove Key')
	removeKeyUI.onClick( function(){ editor.removeKey() })		
	keyGroup.add(removeKeyUI)	

//	FOCUS
	var focusGroup = new MMUI.ButtonGroup;
	toolbar.add( focusGroup )

	var focusUI = new MMUI.Button().setImage('/ui/frameCurve.gif')
	focusUI.onClick( focus ).addToolTip('Frame Selected Curves')
	focusGroup.add(focusUI)

//	TANGENTS
	var tangentsGroup = new MMUI.ButtonGroup;
	toolbar.add( tangentsGroup )

	var steppedUI = new MMUI.Button().setImage('/ui/stepTan.gif').addToolTip('Set Key as Stepped')
	steppedUI.onClick( function(){editor.steppedTangents()} )
	tangentsGroup.add(steppedUI)

	var linearUI = new MMUI.Button().setImage('/ui/linTan.gif')	
	linearUI.onClick( function(){editor.linearTangents()} ).addToolTip('Set Key as Linear')
	tangentsGroup.add(linearUI)

	var flatUI = new MMUI.Button().setImage('/ui/bezierTan.gif')	
	flatUI.onClick( function(){editor.bezierTangents()} ).addToolTip('Set Key as Smooth')
	tangentsGroup.add(flatUI)	

	var changeGroup = new MMUI.ButtonGroup;
	toolbar.add( changeGroup )	

	var breakUI = new MMUI.Button().setImage('/ui/breakTan.gif')	
	breakUI.onClick( function(){editor.breakTangents()} ).addToolTip('Break Tangents')
	changeGroup.add(breakUI)

	var unifyUI = new MMUI.Button().setImage('/ui/unifyTan.gif')
	unifyUI.onClick( function(){editor.unifyTangents()} ).addToolTip('Unify Tangents')
	changeGroup.add(unifyUI)	

	var freeUI = new MMUI.Button().setImage('/ui/freeTan.gif').addToolTip('Free Tangents')
	freeUI.onClick( function(){editor.unlockTangents()} )
	changeGroup.add(freeUI)

	var lockUI = new MMUI.Button().setImage('/ui/lockTan.gif')
	lockUI.onClick( function(){editor.lockTangents()} ).addToolTip('Lock Tangents')
	changeGroup.add(lockUI)

	var flattenUI = new MMUI.Button().setImage('/ui/flatTan.gif')
	flattenUI.onClick( function(){editor.flattenTangents()} ).addToolTip('Flat Tangents')
	changeGroup.add(flattenUI)	

//	COPY
	var copyGroup = new MMUI.ButtonGroup;
	toolbar.add( copyGroup )	

	var copyUI = new MMUI.Button().setImage('/ui/copyKey.gif').addToolTip('Copy Keys')
	copyUI.onClick( function(){editor.copyKey()})
	copyGroup.add(copyUI)

	var pasteUI = new MMUI.Button().setImage('/ui/pasteKey.gif')
	pasteUI.onClick( function(){editor.pasteKey()} ).addToolTip('Past Keys')
	copyGroup.add(pasteUI)

// add separator	
	// var sep6 = new MMUI.VerticalRule().setPosition('absolute').setWidth('1px').setTop('0px').setBottom('0px').setBackgroundColor("#D9D9D9")
	// sep6.setLeft('845px')
	// options.add(sep6)	

//	EXTERNAL FUNCTIONS
	options.setWidth = function( width ){
		//	since this widget can have a variable width we have to make sure
		//	we only show the buttons visible within the active width ( and hide
		//	all other)
		// console.log('options.setWidth', width)
		if( width < 255 ){
			timeSnapUI.setDisplay( "none")
		}else{
			timeSnapUI.setDisplay( "block")
		}
		if( width < 280 ){
			valueSnapUI.setDisplay( "none")
		}else{
			valueSnapUI.setDisplay( "block")
		}

		if( width < 300 ){
			sep1.setDisplay("none")
		}else{
			sep1.setDisplay("block")
		}
		if( width < 340 ){
			addKeyUI.setDisplay("none")
		}else{
			addKeyUI.setDisplay("block")
		}
		if( width < 380 ){
			removeKeyUI.setDisplay("none")
		}else{
			removeKeyUI.setDisplay("block")
		}
		if( width < 385 ){
			sep2.setDisplay("none")
		}else{
			sep2.setDisplay("block")
		}
		if( width < 425 ){
			focusUI.setDisplay("none")
		}else{
			focusUI.setDisplay("block")
		}
		if( width < 430 ){
			sep3.setDisplay("none")
		}else{
			sep3.setDisplay("block")
		}
		if( width < 470 ){
			steppedUI.setDisplay("none")
		}else{
			steppedUI.setDisplay("block")
		}
		if( width < 510 ){
			linearUI.setDisplay("none")
		}else{
			linearUI.setDisplay("block")
		}
		if( width < 555 ){
			flatUI.setDisplay("none")
		}else{
			flatUI.setDisplay("block")
		}
		if( width < 560 ){
			sep4.setDisplay("none")
		}else{
			sep4.setDisplay("block")
		}
		if( width < 600 ){
			breakUI.setDisplay("none")
		}else{
			breakUI.setDisplay("block")
		}
		if( width < 640 ){
			unifyUI.setDisplay("none")
		}else{
			unifyUI.setDisplay("block")
		}
		if( width < 680 ){
			freeUI.setDisplay("none")
		}else{
			freeUI.setDisplay("block")
		}
		if( width < 720 ){
			lockUI.setDisplay("none")
		}else{
			lockUI.setDisplay("block")
		}
		if( width < 760 ){
			flattenUI.setDisplay("none")
		}else{
			flattenUI.setDisplay("block")
		}
		if( width < 765 ){
			sep5.setDisplay("none")
		}else{
			sep5.setDisplay("block")
		}
		if( width < 805 ){
			copyUI.setDisplay("none")
		}else{
			copyUI.setDisplay("block")
		}
		if( width < 840 ){
			pasteUI.setDisplay("none")
		}else{
			pasteUI.setDisplay("block")
		}
		if( width < 850 ){
			sep6.setDisplay("none")
		}else{
			sep6.setDisplay("block")
		}
	}

//	FUNCTIONS
	function setTimeSnap()
	{		
		if(editor.useTimeSnap === false){
			// console.log('setTimeSnap', true)
			editor.useTimeSnap = true;
			timeSnapUI.setBackgroundColor('#B3B3B3')
		}else{
			// console.log('setTimeSnap', false)
			editor.useTimeSnap = false;
			timeSnapUI.setBackgroundColor('#EBEBEA')
		}
	}
	//	turn time snap on by default
	setTimeSnap()

	function setValueSnap(){		
		if(editor.useValueSnap === false){
			// console.log('setValueSnap', true)
			editor.useValueSnap = true;
			valueSnapUI.setBackgroundColor('#B3B3B3')
		}else{
			// console.log('setValueSnap', false)
			editor.useValueSnap = false;
			valueSnapUI.setBackgroundColor('#EBEBEA')
		}
	}

	function focus(){
		// console.log('KeyframeEditorOptions: focus')	
		signals.keyFramed.dispatch();	
	}

	function valueChange(){
		// console.log('KeyframeEditorOptions: valueChange')
		
		if(editor.selectedAnimCurves.length === 0)
   			return

   		var i, j;
   		for( i = 0, j = editor.selectedAnimCurves.length; i < j; i++){
			editor.selectedAnimCurves[i].setValueForSelected( 
				parseFloat(valueNumber.input.value))
		}	

   		signals.keyframeEditorKeysUpdated.dispatch();   		
	}

	function timeOrValueChange(){
		// console.log('KeyframeEditorOptions: timeOrValueChange')

		if(editor.selectedAnimCurves.length === 0)
   			return

   		var i, j;
   		for( i = 0, j = editor.selectedAnimCurves.length; i < j; i++){
   			editor.selectedAnimCurves[i].setTimeAndValueForFirstSelected( 
   			parseFloat(timeNumber.input.value), parseFloat(valueNumber.input.value))
   		}

   		signals.keyframeEditorKeysUpdated.dispatch();
	}

	function updateTimeAndValueUI(){
		//	get the time and value of the first selected key
   		//	doesn't matter if we have more then 1 selected
   		//	we are only going to show the first one
   		if(editor.selectedAnimCurves.length === 0)
   			return 

   		var timeAndValue = editor.selectedAnimCurves[0].getTimeAndValueFromSelected( true )
   		
   		if(timeAndValue.length == 0)
   			return 

   		timeNumber.input.value = timeAndValue[0][0]
   		valueNumber.input.value = timeAndValue[0][1]
	}

//	SIGNALS
	signals.keyframeEditorKeysUpdated.add( function() {
		updateTimeAndValueUI()
	})

   	signals.keyframeEditorChanged.add( function (){
   		// console.log('KeyframeEditorOptions: keyframeEditorChanged')
   		updateTimeAndValueUI()
   	});

	return options
}