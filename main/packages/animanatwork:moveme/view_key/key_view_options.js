MM.KeyframeEditorOptions = function ( editor ){
	var signals = editor.signals;

	var options = new MMUI.Panel();
	options.setPosition('absolute').setLeft('2px').setTop('0px').setHeight('25px').setWidth('100%')
	// options.dom.id = "KeyframeOptions"	
	options.setClass( "keframeEditorOptions")

//	TIME
	var timeText = new MMUI.Text("Time").setPosition('absolute').setWidth('30px').setTop('6px').setLeft('4px');	
	options.add(timeText)

	var timeNumber = new MMUI.Number().setPosition('absolute').setWidth('50px');
	timeNumber.dom.id = 'timeNumber'
	timeNumber.setTop('2px').setLeft('40px').onChange( timeOrValueChange ).onStart( 
		function(){
			editor.getUndoTransformDataFromSelectedKeys() 
		})
	options.add(timeNumber)

//	VALUE
	var valueText = new MMUI.Text("Value").setPosition('absolute').setWidth('30px')
	valueText.setLeft('105px').setTop('6px');
	options.add(valueText)

	var valueNumber = new MMUI.Number().setPosition('absolute').setWidth('50px')
	valueNumber.dom.id = 'valueNumber'
	valueNumber.setTop('2px').setLeft('150px').onChange( valueChange ).onStart( 
		function(){
			editor.getUndoTransformDataFromSelectedKeys() 
		})
	options.add(valueNumber)

//	separator
	// var sep0 = new MMUI.VerticalRule().setPosition('absolute').setWidth('1px')
	// sep0.setTop('0px').setBottom('0px').setBackgroundColor("#D9D9D9")
	// sep0.setLeft('210px')
	// options.add(sep0)

//	SNAP
	var timeSnapUI = new MMUI.Button( '').setPosition('absolute').setWidth('36px')
	timeSnapUI.dom.id = 'timeSnapUI'
	timeSnapUI.setTop('0px').setLeft('215px').onClick( setTimeSnap ).setBottom('0px')
	timeSnapUI.dom.style.backgroundImage="url('ui/keySnapTime.gif')";
	timeSnapUI.dom.style.backgroundPosition= "center center";
	timeSnapUI.dom.style.backgroundRepeat= "no-repeat";	
	options.add(timeSnapUI)

	var valueSnapUI = new MMUI.Button( '').setPosition('absolute').setWidth('36px')
	valueSnapUI.dom.id = 'valueSnapUI'
	valueSnapUI.setTop('0px').setLeft('255px').onClick( setValueSnap ).setBottom('0px')
	valueSnapUI.dom.style.backgroundImage="url('ui/keySnapValue.gif')";
	valueSnapUI.dom.style.backgroundPosition= "center center";
	valueSnapUI.dom.style.backgroundRepeat= "no-repeat";	
	options.add(valueSnapUI)

// add separator
	// var sep1 = new MMUI.VerticalRule().setPosition('absolute').setWidth('1px')
	// sep1.setTop('0px').setBottom('0px').setBackgroundColor("#D9D9D9")
	// sep1.setLeft('295px')
	// options.add(sep1)

//	KEY
	var addKeyUI = new MMUI.Button( '').setPosition('absolute').setWidth('36px')
	addKeyUI.dom.id = 'addKeyUI'
	addKeyUI.setTop('0px').setLeft('300px').onClick( function(){
		editor.addKey()
	}).setBottom('0px')
	addKeyUI.dom.style.backgroundImage="url('ui/keyAdd.gif')";
	addKeyUI.dom.style.backgroundPosition= "center center";
	addKeyUI.dom.style.backgroundRepeat= "no-repeat";	
	options.add(addKeyUI)

	var removeKeyUI = new MMUI.Button( '').setPosition('absolute').setWidth('36px')
	removeKeyUI.dom.id = 'removeKeyUI'
	removeKeyUI.setTop('0px').setLeft('340px').onClick( function(){
		editor.removeKey()
	}).setBottom('0px')
	removeKeyUI.dom.style.backgroundImage="url('ui/keyRemove.gif')";
	removeKeyUI.dom.style.backgroundPosition= "center center";
	removeKeyUI.dom.style.backgroundRepeat= "no-repeat";		
	options.add(removeKeyUI)	

// add separator	
	// var sep2 = new MMUI.VerticalRule().setPosition('absolute').setWidth('1px')
	// sep2.setTop('0px').setBottom('0px').setBackgroundColor("#D9D9D9")
	// sep2.setLeft('380px')
	// options.add(sep2)

	var focusUI = new MMUI.Button( '').setPosition('absolute').setWidth('36px')
	focusUI.dom.id = 'focusUI'
	focusUI.setTop('0px').setLeft('385px').onClick( focus )
	focusUI.dom.style.backgroundImage="url('ui/frameCurve.gif')";
	focusUI.dom.style.backgroundPosition= "center center";
	focusUI.dom.style.backgroundRepeat= "no-repeat";	
	focusUI.setTop('0px').setBottom('0px')	
	options.add(focusUI)

// add separator	
	// var sep3 = new MMUI.VerticalRule().setPosition('absolute').setWidth('1px')
	// sep3.setTop('0px').setBottom('0px').setBackgroundColor("#D9D9D9")
	// sep3.setLeft('425px')
	// options.add(sep3)

//	tangents
	var steppedUI = new MMUI.Button( '').setPosition('absolute').setWidth('36px')
	steppedUI.dom.id = 'steppedUI'
	steppedUI.dom.style.backgroundImage="url('ui/stepTan.gif')";
	steppedUI.dom.style.backgroundPosition= "center center";
	steppedUI.dom.style.backgroundRepeat= "no-repeat";	
	steppedUI.setTop('0px').setLeft('430px').setBottom('0px')
	steppedUI.onClick( function(){editor.steppedTangents()} )
	options.add(steppedUI)

	var linearUI = new MMUI.Button( '').setPosition('absolute').setWidth('36px')
	linearUI.dom.id = 'linearUI'
	linearUI.onClick( function(){editor.linearTangents()} )
	linearUI.dom.style.backgroundImage="url('ui/linTan.gif')";
	linearUI.dom.style.backgroundPosition= "center center";
	linearUI.dom.style.backgroundRepeat= "no-repeat";		
	linearUI.setTop('0px').setLeft('470px').setBottom('0px')
	options.add(linearUI)

	var flatUI = new MMUI.Button('').setPosition('absolute').setWidth('36px')
	flatUI.dom.id = 'bezierUI'	
	flatUI.onClick( function(){editor.bezierTangents()} )
	flatUI.dom.style.backgroundImage="url('ui/bezierTan.gif')";
	flatUI.dom.style.backgroundPosition= "center center";
	flatUI.dom.style.backgroundRepeat= "no-repeat";		
	flatUI.setTop('0px').setLeft('510px').setBottom('0px')
	options.add(flatUI)	

// add separator	
	// var sep4= new MMUI.VerticalRule().setPosition('absolute').setWidth('1px').setTop('0px').setBottom('0px').setBackgroundColor("#D9D9D9")
	// sep4.setLeft('555px')
	// options.add(sep4)	

	var breakUI = new MMUI.Button( '').setPosition('absolute').setWidth('36px')
	breakUI.dom.id = 'breakTangentsUI'	
	breakUI.setTop('0px').setLeft('560px').setBottom('0px')
	breakUI.dom.style.backgroundImage="url('ui/breakTan.gif')";
	breakUI.dom.style.backgroundPosition= "center center";
	breakUI.dom.style.backgroundRepeat= "no-repeat";		
	breakUI.onClick( function(){editor.breakTangents()} )
	options.add(breakUI)

	var unifyUI = new MMUI.Button( '').setPosition('absolute').setWidth('36px')
	unifyUI.dom.id = 'unifyTangentsUI'	
	unifyUI.onClick( function(){editor.unifyTangents()} )
	unifyUI.dom.style.backgroundImage="url('ui/unifyTan.gif')";
	unifyUI.dom.style.backgroundPosition= "center center";
	unifyUI.dom.style.backgroundRepeat= "no-repeat";		
	unifyUI.setTop('0px').setLeft('600px').setBottom('0px')
	options.add(unifyUI)	

	var freeUI = new MMUI.Button( '').setPosition('absolute').setWidth('36px')
	freeUI.dom.id = 'freeTangentsUI'	
	freeUI.onClick( function(){editor.unlockTangents()} )
	freeUI.dom.style.backgroundImage="url('ui/freeTan.gif')";
	freeUI.dom.style.backgroundPosition= "center center";
	freeUI.dom.style.backgroundRepeat= "no-repeat";			
	freeUI.setTop('0px').setLeft('640px').setBottom('0px')
	options.add(freeUI)

	var lockUI = new MMUI.Button( '').setPosition('absolute').setWidth('36px')
	lockUI.dom.id = 'lockTangentsUI'	
	lockUI.onClick( function(){editor.lockTangents()} )
	lockUI.dom.style.backgroundImage="url('ui/lockTan.gif')";
	lockUI.dom.style.backgroundPosition= "center center";
	lockUI.dom.style.backgroundRepeat= "no-repeat";		
	lockUI.setTop('0px').setLeft('680px').setBottom('0px')
	options.add(lockUI)

	var flattenUI = new MMUI.Button( '').setPosition('absolute').setWidth('36px')
	flattenUI.dom.id = 'flattenTangentsUI'	
	flattenUI.onClick( function(){editor.flattenTangents()} )
	flattenUI.dom.style.backgroundImage="url('ui/flatTan.gif')";
	flattenUI.dom.style.backgroundPosition= "center center";
	flattenUI.dom.style.backgroundRepeat= "no-repeat";		
	flattenUI.setTop('0px').setLeft('720px').setBottom('0px')
	options.add(flattenUI)	

// add separator	
	// var sep5 = new MMUI.VerticalRule().setPosition('absolute').setWidth('1px').setTop('0px').setBottom('0px').setBackgroundColor("#D9D9D9")
	// sep5.setLeft('760px')
	// options.add(sep5)	

	var copyUI = new MMUI.Button( '').setPosition('absolute').setWidth('36px')
	copyUI.dom.id = 'copyKeyUI'
	copyUI.onClick( function(){editor.copyKeys()})
	copyUI.setTop('0px').setLeft('765px').setBottom('0px')
	copyUI.dom.style.backgroundImage="url('ui/copyKey.gif')";
	copyUI.dom.style.backgroundPosition= "center center";
	copyUI.dom.style.backgroundRepeat= "no-repeat";					
	options.add(copyUI)

	var pasteUI = new MMUI.Button( '').setPosition('absolute').setWidth('36px')
	pasteUI.dom.id = 'pasteKeyUI'	
	pasteUI.onClick( function(){editor.pasteKeys()} )
	pasteUI.setTop('0px').setLeft('805px').setBottom('0px')
	pasteUI.dom.style.backgroundImage="url('ui/pasteKey.gif')";
	pasteUI.dom.style.backgroundPosition= "center center";
	pasteUI.dom.style.backgroundRepeat= "no-repeat";		
	options.add(pasteUI)

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

		editor.selectedAnimCurves[0].setValueForSelected( 
			parseFloat(valueNumber.dom.value))

   		signals.keyframeEditorKeysUpdated.dispatch();   		
	}

	function timeOrValueChange(){
		// console.log('KeyframeEditorOptions: timeOrValueChange')

		if(editor.selectedAnimCurves.length === 0)
   			return

   		editor.selectedAnimCurves[0].setTimeAndValueForFirstSelected( 
   			parseFloat(timeNumber.dom.value), parseFloat(valueNumber.dom.value))

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

   		timeNumber.dom.value = timeAndValue[0][0]
   		valueNumber.dom.value = timeAndValue[0][1]
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