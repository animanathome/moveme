/*
	WARNING!!!
	If the selection box does not appear on the right position the page is probably 
	scaled (command + + or -)
*/

MM.KeyView = function ( editor, prefix, parentPanel){
	// console.log('MM.KeyView')
	// console.log('\teditor', editor)
	// console.log('\tprefix', prefix)
	// console.log('\tparentPanel', parentPanel)

	var scope = this;

	if( prefix === undefined ) prefix = 'view0'

	this.prefix = prefix;
	this.parentPanel = parentPanel // dom        

    this.width = 0;
    this.height = 0;
    this.top = 0;
    this.left = 0;

    this.outlinerWidth = 150;

	//	both objects get managed on the PanelViewLayout level
    this.canvas = parentPanel.parentLayout.canvas;
    this.renderer = parentPanel.parentLayout.renderer;

	var signals = editor.signals;	
	
	var keyDisplaySize = 6;	
	
	var startTime = - 200;			// the time we start showing the frame numbers
	var maxNumberOfTimeText = 50; 	// the amount of time characters we have
	var timeTextArray = []

	var maxNumberOfValue = 50;
	var valueTextArray = []


//	LAYOUT
	var container = new MMUI.Panel();
	container.setPosition( 'absolute')	
	container.setWidth('100%')	
	container.setHeight('100%')
	container.setClass( 'keyviewcontainer-'+this.prefix)
	parentPanel.dom.appendChild( container.dom )
  
	//	OUTLINER
	var list = new MMUI.Panel();
	list.setPosition('absolute').setLeft('0px').setTop('0px').setBottom('0px').setWidth(this.outlinerWidth+'px')
	list.dom.id = 'keyframeList'
	container.add(list)

	var outliner = new MM.KeyframeEditorOutliner(editor).addMenuItem('Delete')
	outliner.onCommand( runCommandFromOptionsList );	
	list.add( outliner )

	function runCommandFromOptionsList(){
    	if(outliner.selectedMenuItem === 'Delete'){
    		// console.log('\t', 'Removing selected animCurve(s)')

    		var curvesToDelete = outliner.getSelectedObjects()
    		for(var i = 0; i < curvesToDelete.length; i++){
    			console.log('\t\t', 'removing', curvesToDelete[i].name)
    			editor.removeDisplayAnimCurves([curvesToDelete[i]])
    			editor.removeAnimCurve( curvesToDelete[i] )		
    		}
			signals.objectSelected.dispatch();    		
    		editor.displaySelectedObjectsAnimCurves();
    	}
    }

	//	GRAPH
	var graph = new MMUI.Panel();
	graph.setPosition('absolute').setRight('0px').setTop('0px').setBottom('0px').setLeft('150px')
	graph.dom.id = 'keyvieweditor-'+this.prefix
	container.add(graph)

//	LOGIC
	//	the following variables get defined during Editor.setupDefaultKeyScene
    var scene = editor.sceneAnimCurves;  
    var camera = editor.keyCamera;  
    var selectionBox = editor.keySelectionBox;
    var projector = editor.keyProjector;
    var grid = editor.keyGrid;
    var currentTimeline = editor.keyTimeline;
    // var keyframeEditorCameraControl = editor.keyframeEditorCameraControl;

//	camera control
	var keyframeEditorCameraControl = new MM.KeyframeEditorControls( camera, graph.dom);
	keyframeEditorCameraControl.addEventListener('keyframeEditorChange', 
		function(){
            // console.log('cameraControl.onKeyframeEditorChange')            
            //  re-draw the scene as we're moving the camera around        
            signals.keyframeEditorChanged.dispatch();
    });
    editor.keyframeEditorCameraControl = keyframeEditorCameraControl   

    var gotKeySelected = false
    var gotTangentSelected = false
    var selectionChanged = false
    var activeKeys = null					//	contains the object we've build animCurve representations for
    
//	EVENTS    
	var onMouseDownPosition	= new THREE.Vector2();
	var onMouseUpPosition = new THREE.Vector2();

	var globalDistanceInX = 0.0;
	var globalDistanceInY = 0.0;

	var selectionBoxStartPosition = new THREE.Vector3();
	var selectionBoxEndPosition = new THREE.Vector3();
	var selectionBoxPrevPosition = new THREE.Vector3();

	var isMovingKeys = false;
	var isMovingTangents = false;
    
    var onMouseDown = function ( event ){
        // console.log('keyframe editor onMouseDown')
        event.preventDefault();

        onMouseDownPosition.set( event.layerX, event.layerY ); 
		// editor.viewportCameraControl.enabled = false;
  //       editor.keyframeEditorCameraControl.enabled = true;

        globalDistanceInX = 0.0;
        globalDistanceInY = 0.0;

        if(event.button === 0)	// left mouse button
        {     
        //	selection logic
			selectionBoxStartPosition.x = ( event.layerX / graph.dom.offsetWidth ) * 2 - 1;
			selectionBoxStartPosition.y = - ( event.layerY / graph.dom.offsetHeight ) * 2 + 1;
			selectionBoxStartPosition.z = 0.5;
	 
			projector.unprojectVector( selectionBoxStartPosition, camera );

			// console.log('world space:', selectionBoxStartPosition.x, selectionBoxStartPosition.y, selectionBoxStartPosition.z)

			selectionBoxPrevPosition.copy(selectionBoxStartPosition);

			if(selectedActiveKeys(event) === true 
			&& gotKeySelected === true){
				gotKeySelected = true;
				// console.log('\tmoving active keys')
			}else{
				// console.log('\tdefining new selection')
				gotKeySelected = false;
			}

			if(selectedActiveTangents( event ) === true 
			&& gotTangentSelected === true ){
				// console.log('\tmoving active tangents')
				gotTangentSelected = true;
			}else{
				// console.log('\tdefining new selection')
				gotTangentSelected = false;
			}

			if( gotKeySelected === false 
			&& gotTangentSelected === false ){
				var nUndos = editor.getUndoSelectionDataFromKeysForSelection();
			}
		}

        graph.dom.addEventListener( 'mouseup', onMouseUp, false );
        graph.dom.addEventListener( 'mousemove', onMouseMove, false );
    }

    var onMouseMove = function ( event ){
    	// console.log('move', gotKeySelected)
    	event.preventDefault();

    	onMouseUpPosition.set( event.layerX, event.layerY ); 
    	
    	if(event.button == 0) // left mouse button
    	{
	    	if ( onMouseDownPosition.distanceTo( onMouseUpPosition ) > 1 )
	    	{	    		    	
	    		//	get the position in world space
				selectionBoxEndPosition.x = ( event.layerX / graph.dom.offsetWidth ) * 2 - 1;
				selectionBoxEndPosition.y = - ( event.layerY / graph.dom.offsetHeight ) * 2 + 1;
				selectionBoxEndPosition.z = 0.5;    		

				projector.unprojectVector( selectionBoxEndPosition, camera );

				// console.log('making selection box visible')
				if(gotKeySelected === true)
				{
					// console.log('\tmoving keys')
					selectionBox.visible = false;
					
					//	move the keys by the distance traveled
					//	if we want to run this during move we have to implement
					moveActiveKeys( event );			
				}else if( gotTangentSelected === true ){
					// console.log('\tmoving tangents')
					selectionBox.visible = false;
					
					//	move the keys by the distance traveled
					//	if we want to run this during move we have to implement
					moveActiveTangent( event );
				}else{
					// console.log('defining selecion box')			
		    		selectionBox.visible = true;

					//	determine the scale of the selection box
		    		selectionBox.scale.x = selectionBoxEndPosition.x - selectionBoxStartPosition.x ;
		    		selectionBox.scale.y = selectionBoxEndPosition.y - selectionBoxStartPosition.y;
		    		selectionBox.position = selectionBoxStartPosition;		    		
	    		}

	    		selectionBoxPrevPosition.copy(selectionBoxEndPosition);
	    	}
    	}
    	signals.keyframeEditorKeysUpdated.dispatch();
    }

    var onMouseUp = function ( event ){
    	// console.log('keyframeEditor: onMouseUp')

    	event.preventDefault();

    	onMouseUpPosition.set( event.layerX, event.layerY ); 
    	
		// console.log('distance traveled', onMouseDownPosition.distanceTo( onMouseUpPosition ))

		// left mouse button
    	if(event.button === 0){
    		// var hadSomething = editor.hasKeysOrTangentsSelected();
    		// var nUndos = editor.getUndoSelectionDataFromKeysForSelection();
    		// console.log('hadSomething', hadSomething)
			
			if ( onMouseDownPosition.distanceTo( onMouseUpPosition ) < 1 ){
				//	selecting keys takes priority of selecting tangents  				
				if( getKeysWithinRange( event ) ){
					// console.log('\tclick select key')
					editor.clearSelectionTangents();				
					editor.displayKeyTangents();

				}else if( getTangentsWithinRange( event )){
					// console.log('\tselect tangent');
				}
			}else{
				//	get the keys of the active animCurves within the selection plane				
				if(selectionBox.visible === true)
				{
					if( getKeysWithinBoundingBox( event ) )
					{
						// console.log('\tbox select key')
						editor.clearSelectionTangents();
						editor.displayKeyTangents();

					}else if ( getTangentsWithinBoundingBox( event ) ){
						gotTangentSelected = true;
					}

					selectionBox.visible = false;					
				}else{
				//	move the keys by the distance traveled
					if( gotTangentSelected ){						
						moveActiveTangent( event );

						isMovingTangents = false;
						// console.log('stopped moving tangents')
					}else if ( gotKeySelected ){
						moveActiveKeys( event );

						//	undo
						isMovingKeys = false;
						// console.log('stopped moving keys')
					}
				}
			}

			// // //	only keep track of the state when something is different
			// // //	if nothing was and is selected then nothing is changed.			
			// var hasSomething = editor.hasKeysOrTangentsSelected();
			// console.log('hasSomething', hasSomething)
			// if( hasSomething === false && hadSomething === false ){
			// 	editor.removeLastEntriesFromUndoStack( nUndos )
			// }

			signals.keyframeEditorKeysUpdated.dispatch();
		}
    	
		// editor.viewportCameraControl.enabled = false;
		graph.dom.removeEventListener( 'mouseup', onMouseUp );  
		graph.dom.removeEventListener( 'mousemove', onMouseMove );   		
    }

	graph.dom.addEventListener( 'mousedown', onMouseDown, false );


	var selectedActiveKeys = function ( event ) {
		// Determines whether or not we selected any active keys. 		
		// We do this so we can determine if we have a new selection
		// of if we want to manipulate an existing selection
		// Return true is yes, returns false is no
		
		// console.log('selectedActiveKeys')

		//	how close to we have to be to the object before we consider it selected
    	var distanceToMouseX = 15 * camera.scale.x;
    	var distanceToMouseY = 15 * camera.scale.y;

		//	get the position in world space
		var worldPosition = new THREE.Vector3();
		worldPosition.x = ( event.layerX / graph.dom.offsetWidth ) * 2 - 1;
		worldPosition.y = - ( event.layerY / graph.dom.offsetHeight ) * 2 + 1;
		worldPosition.z = 0.5;    		

		projector.unprojectVector( worldPosition, camera );	
			
		var thisCurve;	
    	for(var i = 0; i < editor.selectedAnimCurves.length; i++)
	    {
	    	thisCurve = editor.selectedAnimCurves[i];
	    	for(var j = 0; j < thisCurve.getNumberOfKeys(); j++)
	    	{	 
	    		if(thisCurve.s[j] === true)
	    		{
	    			if(Math.abs(worldPosition.x - thisCurve.t[j]) < distanceToMouseX 
	    				&& Math.abs(worldPosition.y - thisCurve.v[j]) < distanceToMouseY)
	    			{	    			
	    				return true;
	    			}
	    		}
	    	}
	    }    
	    return false;	
	}

	var selectedActiveTangents = function ( event ){
		// console.log('selectedActiveTangents')
		// get used during mouse down

   	//	how close to we have to be to the object before we consider it selected
    	var distanceToMouseX = 15 * camera.scale.x;
    	var distanceToMouseY = 15 * camera.scale.y;

		//	get the position in world space
		var worldPosition = new THREE.Vector3();
		worldPosition.x = ( event.layerX / graph.dom.offsetWidth ) * 2 - 1;
		worldPosition.y = - ( event.layerY / graph.dom.offsetHeight ) * 2 + 1;
		worldPosition.z = 0.5;    		

		projector.unprojectVector( worldPosition, camera );

		var curve;		
		for(var i = 0; i < editor.selectedAnimCurves.length; i++)
	    {
	    	curve = editor.selectedAnimCurves[i];

	    	//	since we only have tangents on selected keys, there's no point at going through all keys
	    	if( curve.hasTangentDisplay() === true )
	    	{
	    		var indices = curve.tdp.keys // for which keys are we currenlty have tangents drawn?
	    		for( var j = 0; j < indices.length; j++)
	    		{
					var inX = curve.t[indices[j]] + curve.itv[indices[j]].x
                	var inY = curve.v[indices[j]] + curve.itv[indices[j]].y
                	var outX = curve.t[indices[j]] + curve.otv[indices[j]].x
                	var outY = curve.v[indices[j]] + curve.otv[indices[j]].y

                	//	in tangent
		    		if(Math.abs(worldPosition.x - inX) < distanceToMouseX 
		    			&& Math.abs(worldPosition.y - inY) < distanceToMouseY)
		    		{
		    			// console.log('\ttrue')
		    			return true	    		
		    		}

		    		//	out tangent
		    		if(Math.abs(worldPosition.x - outX) < distanceToMouseX 
		    			&& Math.abs(worldPosition.y - outY) < distanceToMouseY)
		    		{
		    			// console.log('\ttrue')
		    			return true
		    		} 
	    		}
	    	}
	    }
	    // console.log('\tfalse')
	    return false	
	}

	var getTangentsWithinRange = function ( event ){
		//	get the tangents within the current range
		//	get used during mouse up
		console.log('getTangentsWithinRange')

    //	actual logic
    	//	how close to we have to be to the object before we consider it selected
    	var distanceToMouseX = camera.scale.x * 15;
    	var distanceToMouseY = camera.scale.y * 15;

		//	get the position in world space
		var worldPosition = new THREE.Vector3();
		worldPosition.x = ( event.layerX / graph.dom.offsetWidth ) * 2 - 1;
		worldPosition.y = - ( event.layerY / graph.dom.offsetHeight ) * 2 + 1;
		worldPosition.z = 0.5;    		

		projector.unprojectVector( worldPosition, camera );

		gotTangentSelected = false;

		var curve, inX, inY, outX, outY;
		var indices;
		for(var i = 0; i < editor.selectedAnimCurves.length; i++){
	    	curve = editor.selectedAnimCurves[i];

	    	if( event.shiftKey === true 
	    	|| event.ctrlKey === true){
	    		// do not deselect the previously selected tangeds when the user has the shift or control key pressed
	    	}else{
	    		curve.tsi = [] // tangent selection in
	    		curve.tso = [] // tangent selection out
	    	}

	    	//	since we only have tangents on selected keys, there's no point at going through all keys
	    	if( curve.hasTangentDisplay() === true ){
	    		indices = curve.tdp.keys // for which keys are we currenlty have tangents drawn?
	    		for( var j = 0; j < indices.length; j++){
					inX = curve.t[indices[j]] + curve.itv[indices[j]].x
                	inY = curve.v[indices[j]] + curve.itv[indices[j]].y
                	outX = curve.t[indices[j]] + curve.otv[indices[j]].x
                	outY = curve.v[indices[j]] + curve.otv[indices[j]].y

                	//	in tangent
		    		if(Math.abs(worldPosition.x - inX) < distanceToMouseX 
		    			&& Math.abs(worldPosition.y - inY) < distanceToMouseY){
		    			// console.log(i, j, '\tIn tangent ', indices[j], 'selected')
		    			curve.tsi.push(indices[j])
		    			gotTangentSelected = true;		    		
		    		}

		    		//	out tangent
		    		if(Math.abs(worldPosition.x - outX) < distanceToMouseX 
		    			&& Math.abs(worldPosition.y - outY) < distanceToMouseY){
		    			// console.log(i, j, '\tOut tangent ', indices[j], 'selected')
		    			curve.tso.push(indices[j])
		    			gotTangentSelected = true;		    		
		    		} 
	    		}
	    	}
	    }

	    // console.log('\t', gotTangentSelected)
	    return gotTangentSelected;	
	}

	var getTangentsWithinBoundingBox = function ( event ){
		//	This is used when we drag select
		//	get used during mouse up
		console.log('getTangentsWithinBoundingBox')

    //	actuall logic
    	var minX, maxX, minY, maxY;
 
    //	X range
    	if(selectionBoxStartPosition.x < selectionBoxEndPosition.x){
    		minX = selectionBoxStartPosition.x
    		maxX = selectionBoxEndPosition.x
    	}else{
    		minX = selectionBoxEndPosition.x
    		maxX = selectionBoxStartPosition.x
    	}

    //	Y range
		if(selectionBoxStartPosition.y < selectionBoxEndPosition.y){
    		minY = selectionBoxStartPosition.y
    		maxY = selectionBoxEndPosition.y
    	}else{
    		minY = selectionBoxEndPosition.y
    		maxY = selectionBoxStartPosition.y
    	}
    	
		var curve, indices;
		var gotTangentSelected = false;
		var inX, inY, outX, outY;
		for(var i = 0; i < editor.selectedAnimCurves.length; i++){
	    	curve = editor.selectedAnimCurves[i];

	    	if(event.shiftKey === true 
	    	|| event.ctrlKey === true){
	    		//	keep the existing selection when the user has the shift or control key selected
	    	}else{
	    		curve.tsi = [] // tangent selection in
	    		curve.tso = [] // tangent selection out
	    	}

	    	//	since we only have tangents on selected keys, there's no point 
	    	//	at going through all keys
	    	if( curve.hasTangentDisplay() === true ){
	    		// for which keys are we currenlty have tangents drawn?
	    		indices = curve.tdp.keys 
	    		for( var j = 0; j < indices.length; j++)
	    		{
					inX = curve.t[indices[j]] + curve.itv[indices[j]].x
                	inY = curve.v[indices[j]] + curve.itv[indices[j]].y
                	outX = curve.t[indices[j]] + curve.otv[indices[j]].x
                	outY = curve.v[indices[j]] + curve.otv[indices[j]].y

                	//	in tangent
		    		if(inX < maxX && inX > minX && inY < maxY && inY > minY)
		    		{
		    			// console.log(i, j, '\tIn tangent ', indices[j], 'selected')
		    			curve.tsi.push(indices[j])
		    			gotTangentSelected = true;		    		
		    		}

		    		//	out tangent
		    		if(outX < maxX && outX > minX && outY < maxY && outY > minY)
		    		{
		    			// console.log(i, j, '\tOut tangent ', indices[j], 'selected')
		    			curve.tso.push(indices[j])
		    			gotTangentSelected = true;		    		
		    		} 
	    		}
	    	}
	    }

	    // console.log('\t', gotTangentSelected)
	    return gotTangentSelected;
	}

    var moveActiveTangent = function ( event ){
    	console.log('keyframeEditor.moveActiveTangent')

    	//	undo
    	if( isMovingTangents === false ){
    		console.log('\tstarted moving tangents, recording state')
    		isMovingTangents = true;
    		editor.getUndoTransformDataFromSelectedKeys();
    	}

    	//	actual process
   		var distanceInX = selectionBoxEndPosition.x - selectionBoxPrevPosition.x;
    	var distanceInY = selectionBoxEndPosition.y - selectionBoxPrevPosition.y;
		// console.log('moveActiveTangent', distanceInX, distanceInY)

    	globalDistanceInX += distanceInX;
    	globalDistanceInY += distanceInY;

    	var tsiChanged = false;
    	var tsoChanged = false;
    	var curve, index, indices;
    	for(var i = 0; i < editor.selectedAnimCurves.length; i++){
	    	curve = editor.selectedAnimCurves[i];

	    	if( curve.hasTangentDisplay() === true ){
	    		indices = curve.tdp.keys // for which keys are we currenlty have tangents drawn?
	    		for( var j = 0; j < indices.length; j++){
	    			index = indices[j]
					if( curve.tsi.indexOf(index) !== -1){
		    			tsiChanged = true
		    			curve.itv[index].x += distanceInX;
		    			curve.itv[index].y += distanceInY;  		    			

		    			if(curve.bt[index] === false){
		    				tsoChanged = true;
							curve.otv[index].x -= distanceInX;
		    				curve.otv[index].y -= distanceInY;		    				
		    			}
            		}	

            		if( curve.tso.indexOf(index) !== -1){
            			tsoChanged = true
		    			curve.otv[index].x += distanceInX;
		    			curve.otv[index].y += distanceInY;  

		    			if(curve.bt[index] === false){
		    				tsiChanged = true
							curve.itv[index].x -= distanceInX;
		    				curve.itv[index].y -= distanceInY;		    				
		    			}
            		}

            		//	this currenlty does not behave as expected
            		//	since we are moving around in space which can be 
            		//	scaled non unformely we might get a strange "warping"
            		//	type of a effect. If we want to change this we'll have
            		//	to map it back to sceen space... 
            		if(curve.wt[index] === false){	    					    				
	    				// var yx = camera.scale.y / camera.scale.x
	    				// console.log('\t', yx)
	    				// var fakeCamMatrix = new THREE.Matrix4().scale( new THREE.Vector3(1.0, yx, 1.0));
	    			    				// console.log('\tfakeCamMatrix', fakeCamMatrix)
	    				if( tsiChanged ){
	    					curve.itv[index].normalize().multiplyScalar( curve.twv )

							//	mapping into camera space... doesn't behave as expected...	    					
	    					// console.log('\tcurrent', curve.itv[index].x, curve.itv[index].y)
	    					// npos = new THREE.Vector3( curve.itv[index].x, curve.itv[index].y, 0 ).applyMatrix4( fakeCamMatrix )
	    					// console.log('\tnew', npos.x, npos.y)

	    					// curve.itv[index].x = npos.x
	    					// curve.itv[index].y = npos.y	    					
	    				}
	    				
	    				if( tsoChanged ){
	    					curve.otv[index].normalize().multiplyScalar( curve.twv );	    						    					
	    				}
	    			}	
	    		}
	    	}
	    }
    }	

    var getKeysWithinRange = function ( event ){
    	console.log('getKeysWithinRange')
    	console.log('\tevent', event)
    	console.log('\tshift', event.shiftKey)
    	// This is used when we click, select
    	// Sets the keys within range of the given mouse position to active
    	// If any keys where set to active we return true, if not, false
    	// console.log('keyframeEditor: getKeysWithinRange')

    //	actual logic
    	//	how close to we have to be to the object before we consider it selected
    	var distanceToMouseX = camera.scale.x * 15;
    	var distanceToMouseY = camera.scale.y * 15;
    	// console.log('\tdistance:', distanceToMouse)
    	// console.log('\tcamera scale:', camera.scale)

		//	get the position in world space
		var worldPosition = new THREE.Vector3();
		worldPosition.x = ( event.layerX / graph.dom.offsetWidth ) * 2 - 1;
		worldPosition.y = - ( event.layerY / graph.dom.offsetHeight ) * 2 + 1;
		worldPosition.z = 0.5;    		

		projector.unprojectVector( worldPosition, camera );

		//	determines whether or not we selected something during the process
		gotKeySelected = false;
		var thisCurve;
    	for(var i = 0; i < editor.selectedAnimCurves.length; i++)
	    {
	    	thisCurve = editor.selectedAnimCurves[i];
	    	for(var j = 0; j < thisCurve.getNumberOfKeys(); j++)
	    	{	 
	    		if(Math.abs(worldPosition.x - thisCurve.t[j]) < distanceToMouseX 
	    			&& Math.abs(worldPosition.y - thisCurve.v[j]) < distanceToMouseY)
	    		{
	    			// console.log(i, j, 'selected')
	    			thisCurve.s[j] = true;
	    			// selectedSomething = true;
	    			gotKeySelected = true;
	    		}else{
	    			if(event.shiftKey === true 
	    			|| event.ctrlKey === true){
	    				// do not deselect keys when user has shift or control pressed
	    			}else{
	    				thisCurve.s[j] = false;
	    			}

	    			// console.log('distance to index', j, 'x', Math.abs(worldPosition.x - thisCurve.t[j]), distanceToMouse)
	    			// console.log('distance to index', j, 'y', Math.abs(worldPosition.y - thisCurve.v[j]), distanceToMouse)
	    		}
	    	}
	    }    

	    // console.log('\t',gotKeySelected)
	    return gotKeySelected;	
    }

    var getKeysWithinBoundingBox = function( event ){
    	//	This is used when we drag select
    	// console.log('getKeysWithinBoundingBox')

    //	actual logic
    	var minX, maxX, minY, maxY;
 
    //	X range
    	if(selectionBoxStartPosition.x < selectionBoxEndPosition.x){
    		minX = selectionBoxStartPosition.x
    		maxX = selectionBoxEndPosition.x
    	}else{
    		minX = selectionBoxEndPosition.x
    		maxX = selectionBoxStartPosition.x
    	}

    //	Y range
		if(selectionBoxStartPosition.y < selectionBoxEndPosition.y){
    		minY = selectionBoxStartPosition.y
    		maxY = selectionBoxEndPosition.y
    	}else{
    		minY = selectionBoxEndPosition.y
    		maxY = selectionBoxStartPosition.y
    	}
    	
    	var thisCurve;
    	gotKeySelected = false;
	    for(var i = 0; i < editor.selectedAnimCurves.length; i++){	 
	    //	this anim curve  	    	
	    	//	create keys	
	    	thisCurve = editor.selectedAnimCurves[i];
	    	for(var j = 0; j < thisCurve.getNumberOfKeys(); j++)
	    	{
	    		if(thisCurve.t[j] < maxX && thisCurve.t[j] > minX && thisCurve.v[j] < maxY && thisCurve.v[j] > minY){
	    			// console.log(i, j, 'is selected')
	    			thisCurve.s[j] = true;	    			
	    			gotKeySelected = true;	    			
	    		}else{
	    			if(event.shiftKey === true 
	    			|| event.ctrlKey === true){
	    				// do not deselect keys when the user has the shift or control key pressed
	    			}else{
	    				thisCurve.s[j] = false;
	    			}
	    		}
	    	}    	
	    }  

	    return gotKeySelected
    }

    var moveActiveKeys = function ( event ){    	
    	console.log('keyframeEditor.moveActiveKeys')

    	//	undo
    	//	record the original position of the selected keys
    	if( isMovingKeys === false ){
    		console.log('\tstarted moving keys, recording state')
    		isMovingKeys = true;
    		editor.getUndoTransformDataFromSelectedKeys();
    	}

    	//	actual process
    	var distanceInX, distanceInY;
    	if(editor.useTimeSnap === true){
    		distanceInX = Math.round(selectionBoxEndPosition.x) - Math.round(selectionBoxPrevPosition.x);
    	}else{
    		distanceInX = selectionBoxEndPosition.x - selectionBoxPrevPosition.x;
    	}
    	if(editor.useValueSnap === true){
    		distanceInY = Math.round(selectionBoxEndPosition.y) - Math.round(selectionBoxPrevPosition.y);
    	}else{
    		distanceInY = selectionBoxEndPosition.y - selectionBoxPrevPosition.y;
	    }

    	globalDistanceInX += distanceInX;
    	globalDistanceInY += distanceInY;

		var thisCurve;
    	for(var i = 0; i < editor.selectedAnimCurves.length; i++){
	    	thisCurve = editor.selectedAnimCurves[i];
	    	for(var j = 0; j < thisCurve.getNumberOfKeys(); j++){
	    		if(thisCurve.s[j] === true){	    	    
					thisCurve.t[j] += distanceInX;
					thisCurve.v[j] += distanceInY;					
	    		}
	    	}
	    }

	    if( editor.useTimeSnap === true ){
			globalDistanceInX = 0.0;
	    }
	    if( editor.useValueSnap === true ){
			globalDistanceInY = 0.0;
	    }
    }

//	FUNCTION
	var _addText = function ( dom )
	{
		var text = document.createElement( 'span' );
		text.style.position = 'absolute';
		text.style.cursor = 'default';
		text.style.pointerEvents='none';
		text.style.fontSize = "1.35vmin";
		// text.style.fontWeight = 'bold';
		// text.id = 'TextFrame'	
		dom.appendChild( text );
		return text	
	}

	var prepareValueUnits = function()
	{		
		valueTextArray = []
		var text;
		for(var i = 0; i < maxNumberOfValue; i++){			
			text = _addText( graph.dom)
			text.id = 'TextValue'			
			valueTextArray.push( text )
		}
	}

	prepareValueUnits();

	var _drawValueText = function ( worldPosition , index, text )
	{		
		var screenPosition = MM.toScreenXY( worldPosition , camera, graph.dom )
		valueTextArray[index].style.left = screenPosition.x+2+'px'
		valueTextArray[index].style.bottom = screenPosition.y+'px'
		valueTextArray[index].textContent = text;
	}

	var updateValueUnitPosition = function()
	{
		// console.log('KeyframeEditor: updateValueUnitPosition')

		//	get the visible range in X and Y
	 	var upleft = new THREE.Vector3( -1, -1, .5)
		projector.unprojectVector( upleft, camera );        
		
		var downRight = new THREE.Vector3( 1, 1, .5)
		projector.unprojectVector( downRight, camera );   

		var rangeInY = Math.abs(upleft.y) + Math.abs(downRight.y)	
		// console.log('\trangeInY:', rangeInY)

		//	ranges:
		//	each range has the following values:
		//	- current value is smaller then 
		//	- current value is bigger then
		//	- offset value 
		var ranges = [
						[10000,1000,100],
						[1000,500,50],
						[500,100,20],
						// [200,100,10],
						[100,50,10],
						[50,25,5],
						[25,1,1]
					  ]

		var rangeOffset;
		for( var i = 0; i < ranges.length; i++){
			if( rangeInY < ranges[i][0] && rangeInY > ranges[i][1])
			{
				rangeOffset = ranges[i][2];
				break;
			}
		}

		// console.log('\tmin', upleft.y)
		// console.log('\tmax', downRight.y)

		var absNumber, negNumber, posNumber;
		negNumber = Math.abs(Math.ceil(upleft.y / rangeOffset))
		posNumber = Math.floor(downRight.y / rangeOffset)		
		absNumber = 1 + negNumber + posNumber;
		var offsetValue = rangeOffset;			

		//	make sure we have enough elements to write in
		if(absNumber > maxNumberOfValue){
			// console.error('We don not have enough text elements')
			// console.error('We need', absNumber, 'but only have', maxNumberOfValue)
			return
		}
	
		var worldPosition = new THREE.Vector3();	

		//	draw 0
		var drawn = 0
		var valueToDraw = 0
		worldPosition.setX( upleft.x )
		_drawValueText( worldPosition, drawn, valueToDraw)
		drawn += 1	

		//	draw all negative values
		for( var i = 1; i < negNumber; i++ )
		{			
			valueToDraw = -(i * offsetValue)
			worldPosition.setY( valueToDraw )
			_drawValueText( worldPosition, drawn, valueToDraw)
			drawn += 1
		}		

		//	draw all positve values
		for( var i = 1; i < posNumber; i++ )
		{			
			valueToDraw = (i * offsetValue)
			worldPosition.setY( valueToDraw )
			_drawValueText( worldPosition, drawn, valueToDraw)
			drawn += 1
		}

		//	reset the remaining ones
		for( var i = drawn; i < maxNumberOfTimeText; i++)
		{
			// console.log('resetting text', i)
			valueTextArray[i].textContent = "";
		}
	}

	var prepareFrameUnits = function()
	{
		timeTextArray = []
		var text;
		for(var i = 0; i < maxNumberOfTimeText; i++){
			text = _addText( graph.dom)
			text.id = 'TextFrame'
			timeTextArray.push( text )
		}
	}

	prepareFrameUnits();

	var _drawTimeText = function ( worldPosition , index, text )
	{		
		var screenPosition = MM.toScreenXY( worldPosition , camera, graph.dom )
		timeTextArray[index].style.left = screenPosition.x+'px'
		timeTextArray[index].style.bottom = screenPosition.y + 2 +'px'
		timeTextArray[index].textContent = text;
	}

	var updateFrameUnitPosition = function()
	{
		// console.log('KeyframeEditor: updateFrameUnitPosition')

		//	get the visible range in X and Y
	 	var upleft = new THREE.Vector3( -1, -1, .5)
		projector.unprojectVector( upleft, camera );        
		
		var downRight = new THREE.Vector3( 1, 1, .5)
		projector.unprojectVector( downRight, camera );   

		var rangeInX = Math.abs(upleft.x) + Math.abs(downRight.x)

		// console.log('\trangeInX:', rangeInX)
		
		//	ranges:
		//	each range has the following values:
		//	- current value is smaller then 
		//	- current value is bigger then
		//	- offset value 
		var ranges = [
						[10000,1000,100],
						[1000,500,50],
						[500,200,20],
						[200,100,10],
						[100,50,5],
						[50,1,1]
					  ]

		var rangeOffset;
		for( var i = 0; i < ranges.length; i++){
			if( rangeInX < ranges[i][0] && rangeInX > ranges[i][1])
			{
				rangeOffset = ranges[i][2];
				break;
			}
		}
		
		var negNumber = Math.abs(Math.ceil(upleft.x / rangeOffset))
		var posNumber = Math.floor(downRight.x / rangeOffset)		
		var absNumber = 1 + negNumber + posNumber;
		var offsetValue = rangeOffset;		
			
		//	make sure we have enough elements to write in
		if(absNumber > maxNumberOfTimeText){
			// console.error('We don not have enough text elements')
			// console.error('We need', absNumber, 'but only have', maxNumberOfTimeText)
			return
		}
	
		var worldPosition = new THREE.Vector3();

		//	draw 0
		var drawn = 0
		var valueToDraw = 0
		worldPosition.setY( upleft.y )
		_drawTimeText( worldPosition, drawn, valueToDraw)
		drawn += 1
		
		//	draw all negative values
		for( var i = 1; i < negNumber+1 ; i++ )
		{			
			valueToDraw = -(i * offsetValue)
			worldPosition.setX( valueToDraw )
			_drawTimeText( worldPosition, drawn, valueToDraw)
			drawn += 1
		}

		//	draw all positve values
		for( var i = 1; i < posNumber+1 ; i++ )
		{			
			valueToDraw = (i * offsetValue)
			worldPosition.setX( valueToDraw )
			_drawTimeText( worldPosition, drawn, valueToDraw)
			drawn += 1
		}

		//	reset the remaining ones
		for( var i = drawn; i < maxNumberOfTimeText; i++)
		{
			// console.log('resetting text', i)
			timeTextArray[i].textContent = "";
		}
	}

    var updateTimeline = function ( value )
    {
    	if( value === undefined ){
    		value = 0;
    	}

    	// console.log('updateTimeline', value )
        currentTimeline.geometry.verticesNeedUpdate = true;  
        currentTimeline.geometry.vertices = []
        
        currentTimeline.geometry.vertices.push(new THREE.Vector3( value , 750 , 4));
        currentTimeline.geometry.vertices.push(new THREE.Vector3( value ,-750,4));      	
    }

    var frameAnimCurves = function (){
    	// console.log('frameAnimCurves')

    	var timeRangeMin = 1000;
    	var timeRangeMax = -1000;
    	var valueRangeMin = 1000;
    	var valueRangeMax = -1000;
    	if(editor.selectedAnimCurves.length === 0){
    		// console.log('\tNo curves selected')

    		timeRangeMin = -1;
	    	timeRangeMax = 48;
	    	valueRangeMin = -1;
	    	valueRangeMax = 10;
    	}

    	//	get selected key value and time range
    	for(var i = 0; i < editor.selectedAnimCurves.length; i++){
    		var thisTimeRange = editor.selectedAnimCurves[i].getSelectedTimeRange();
    		// console.log('\t', i, 'timeRange', thisTimeRange)
    		if(thisTimeRange[0] < timeRangeMin){
    			timeRangeMin = thisTimeRange[0]
    		}
    		if(thisTimeRange[1] > timeRangeMax){
    			timeRangeMax = thisTimeRange[1]
    		}

    		var thisValueRange = editor.selectedAnimCurves[i].getSelectedValueRange();
    		// console.log('\t', i, 'valueRange', thisValueRange)
    		if(thisValueRange[0] < valueRangeMin){
    			valueRangeMin = thisValueRange[0]
    		}
    		if(thisValueRange[1] > valueRangeMax){
    			valueRangeMax = thisValueRange[1]
    		}
    	}
    	
    	//	if no keys are selected, go for the full range
    	if( timeRangeMin === 1000 && timeRangeMax === -1000 
    	&& valueRangeMin === 1000 && valueRangeMax === -1000){
    		for(var i = 0; i < editor.selectedAnimCurves.length; i++){
	    		var thisTimeRange = editor.selectedAnimCurves[i].getTimeRange();
	    		// console.log('\t', i, 'timeRange', thisTimeRange)
	    		if(thisTimeRange[0] < timeRangeMin){
	    			timeRangeMin = thisTimeRange[0]
	    		}
	    		if(thisTimeRange[1] > timeRangeMax){
	    			timeRangeMax = thisTimeRange[1]
	    		}

	    		var thisValueRange = editor.selectedAnimCurves[i].getValueRange();
	    		// console.log('\t', i, 'valueRange', thisValueRange)
	    		if(thisValueRange[0] < valueRangeMin){
	    			valueRangeMin = thisValueRange[0]
	    		}
	    		if(thisValueRange[1] > valueRangeMax){
	    			valueRangeMax = thisValueRange[1]
	    		}
	    	}
    	}
    	// console.log('\ttime range:', timeRangeMin, timeRangeMax)
    	// console.log('\tvalue range:', valueRangeMin, valueRangeMax)

    	if(timeRangeMin == timeRangeMax){
    		timeRangeMin = timeRangeMin - 10
    		timeRangeMax = timeRangeMax + 10
    	}
    	if(valueRangeMin == valueRangeMax){
    		valueRangeMin = valueRangeMin - 10
    		valueRangeMax = valueRangeMax + 10
    	}

    	var curveWidth = Math.abs(timeRangeMin) + timeRangeMax
    	var curveHeight = Math.abs(valueRangeMin) + valueRangeMax    	

    	//	world
    	var buttonLeft = new THREE.Vector3(-1,-1,0);	
		projector.unprojectVector( buttonLeft, camera );

		var upperRight = new THREE.Vector3(1,1,0)	
		projector.unprojectVector( upperRight, camera );

		//	make the space a smaller then it really is
		//	this will make it easier to see the actuall curves
		buttonLeft.x *= 0.8
		upperRight.x *= 0.8
		buttonLeft.y *= 0.5
		upperRight.y *= 0.5

		// console.log('world bl', buttonLeft.x, buttonLeft.y, buttonLeft.z)
		// console.log('world ur', upperRight.x, upperRight.y, upperRight.z)

		var worldWidth = Math.abs(buttonLeft.x) + upperRight.x
		var worldHeight = Math.abs(buttonLeft.y) + upperRight.y

		// console.log('\twidth:', worldWidth, curveWidth)
		// console.log('\theight:', worldHeight, curveHeight)

		var scaleX = 1.0 / (worldWidth / curveWidth)
		var scaleY = 1.0 / (worldHeight / curveHeight)

		if( isNaN(scaleX) || isNaN(scaleY) ){
			// console.warn('ScaleX or Y is Not a number. Make sure no Strings have creeped instead of Numbers.')
			// console.warn('We already had a previous issue with that where the valueRange returned contained a string resulting into a NaN.')
			return 
		}

		// console.log('scaleX', scaleX, 'scaleY', scaleY)

		var translateX = (curveWidth / 2.0) + timeRangeMin;		
		var translateY = (curveHeight / 2.0) + valueRangeMin;

		// console.log('translateX', translateX, 'translateY', translateY)

		// camera.scale.x = scaleX * camera.scale.x;
		// camera.scale.y = scaleY * camera.scale.y;	

		// console.log('camera scale x', scaleX, camera.scale.x)
		// console.log('camera scale y', scaleY, camera.scale.y)		

		var scaleMatrix = new THREE.Matrix4().makeScale(scaleX * camera.scale.x, scaleY * camera.scale.y, 1)
		// console.log('\tscaleMatrix', scaleMatrix)

		var posMatrix = new THREE.Matrix4().setPosition( new THREE.Vector3( translateX, translateY, 10))
		// console.log('\tposMatrix', posMatrix)
		
		var myMatrix = new THREE.Matrix4().multiplyMatrices(posMatrix, scaleMatrix)
		// console.log('\tmyMatrix', myMatrix)

		camera.matrix = myMatrix;
		camera.position.getPositionFromMatrix( camera.matrix );

		camera.scale.getScaleFromMatrix( camera.matrix );
		var m1 = new THREE.Matrix4();
		m1.extractRotation( camera.matrix );

		camera.quaternion.setFromRotationMatrix( m1 );		

		render()
		editor.signals.showInfo.dispatch('Frame keys')
    }

    function animate(){    	
        requestAnimationFrame( animate );        
    }

    function render(){
    	// console.log('MM.KeyView.render')

    	scope.renderer.setViewport( scope.left, scope.top, scope.width, scope.height);
	    scope.renderer.setScissor( scope.left, scope.top, scope.width, scope.height);
	    scope.renderer.enableScissorTest( true )
	    scope.renderer.setClearColor( editor.keyBackgroundColor )
	    scope.renderer.clear();
	            
	    camera.aspect = scope.width / scope.height;
	    camera.updateProjectionMatrix();

		scope.renderer.render( scene, camera );
    }

    // function render(){
    // 	// console.log('keyframeEditor: render')
    	
    //     scene.updateMatrixWorld();
    //     // updateFrameUnitPosition();
    //     renderer.clear();     
        
    //     renderer.render( scene, camera );
    // }

    container.focus = function(){
    	// console.log('MM.KeyView.focus')
    	frameAnimCurves();
    }

    container.activate = function(){
    	// console.log('MM.KeyView.activate')
    	// console.log('\tcontrol', keyframeEditorCameraControl)
    	keyframeEditorCameraControl.enabled = true;
    }

    container.deactivate = function(){
    	// console.log('MM.KeyView.deactivate')
    	// console.log('\tcontrol', keyframeEditorCameraControl)
    	keyframeEditorCameraControl.enabled = false;
    }

    container.render = function(){
    	// console.log('MM.KeyframeEditor.render')
    	/*
    	NOTE: here we should only run this method when something has changed!
    	*/
    	render();
    }

    container.clear = function(){
    	// console.log('MM.KeyView.clear')
    	//	remove the extra ui elements
    	parentPanel.dom.removeChild( container.dom )
    }

//	SIGNALS
	function resize(){
		// console.log('MM.KeyView.resize')		
		// console.log('\tparentPanel', scope.parentPanel)

		var panel = scope.parentPanel.parentPanel.dom
		scope.width = panel.offsetWidth - scope.outlinerWidth
		scope.height = panel.offsetHeight
		scope.left = parseInt(panel.style.left) + scope.outlinerWidth;
		scope.top = parseInt(panel.style.bottom)

		// console.log('\twidth', scope.width)
		// console.log('\theight', scope.height)
		// console.log('\tleft', scope.left)
		// console.log('\ttop', scope.top)

		camera.left = scope.width / -2;
		camera.right = scope.width / 2;
		camera.top = scope.height / 2;
		camera.bottom = scope.height / -2;
		camera.updateProjectionMatrix();
	}

	// function resize(){
 //        camera.aspect = graph.dom.offsetWidth / graph.dom.offsetHeight;
 //        camera.updateProjectionMatrix();
 //        renderer.setSize( graph.dom.offsetWidth, graph.dom.offsetHeight);
 //        // frameAnimCurves()
 //        // grid.update();
 //        // updateValueUnitPosition();
 //        // updateFrameUnitPosition();
        
 //        fullRebuild();

 //        render(); 		
	// }

	container.resize = function(){
		// console.log('MM.KeyframeEditor.resize')

		resize();
	}

   	signals.windowResize.add( function () {        
        // console.log('keyframe editor window resize', graph.dom.offsetWidth, 'by', graph.dom.offsetHeight)

        resize();
    } );

   	signals.keyFramed.add(function (){
   		frameAnimCurves();
   	});

	function fullRebuild(){
		// console.log('keyframeEditor: fullRebuild')
       	
       	editor.displayAnimCurves();  
        editor.displayKeyTangents();   
        
        //	don't know why the following has to be added here???
        //	if we don't then the tangent won't get drawn
        editor.updateDisplayKeyTangents();

        // console.log('render scene:', editor.sceneAnimCurves)

		updateValueUnitPosition();
        updateFrameUnitPosition();
        grid.update();
        updateTimeline( editor.time );    
	   	render();
	}

	signals.keyframeEditorReset.add( function() {
		// console.log('keyframeEditor: keyframeEditorReset')

		camera.scale.x = 1.0;
		camera.scale.y = 1.0;
		camera.scale.z = 1.0;

		//	add check here to see whether or not we have a proper matrix!!!!

		camera.matrix = new THREE.Matrix4().identity();
		camera.matrixWorld = new THREE.Matrix4().identity();
		// camera.matrixWorldInverse = new THREE.Matrix4();
		// camera.projectionMatrix = new THREE.Matrix4();
		// camera.projectionMatrixInverse = new THREE.Matrix4();

		// console.log('camera', camera)

		fullRebuild();
	})

	signals.keyframeEditorChanged.add( function() {
	/*
		The size of the content/data displayed in the graph editor has changed. 
		This means that we have to rebuild all content. Examples of when this 
		would happen are:
			1. new object selected
			2. key added or removed to an existing animation curves selected
			3. animation curve added or removed
			4. camera change ( zoom in/out )
	*/	
		// console.log('keyframeEditor: keyframeEditorChanged')
		fullRebuild();
	})

	signals.keyframeEditorKeysUpdated.add( function() {
	/*
		The size of the content/data displayed in the graph has remained the same.
		This means that we just have to update the existing content. Examples of 
		this are:
			1. key being moved 
			2. key selection changed
	*/
		// console.log('keyframeEditor: keyframeEditorKeysUpdated')		
		editor.updateDisplayAnimCurves();           
        editor.updateDisplayKeyTangents();
        render();
	})

	signals.keyframeEditorTangentUpdated.add( function() {
	/*
	We are currently displaying a number of tangents we are editing and need to 
	update their display.
	*/	
		editor.updateDisplayAnimCurves();           
        editor.updateDisplayKeyTangents();
        render();
	})

    signals.timeChanged.add(function (){
    	// console.log('MM.KeyView.timeChanged')
    	updateTimeline( editor.time )
    	render()
    });

    signals.objectSelected.add( function() {
    	// console.log('KeyframeEditor: objectSelected')
    	fullRebuild();
    });

    signals.objectChanged.add( function() {
    	// console.log('KeyframeEditor: objectChanged')

		//	only check if we have to add a new key when the object has changed			
    	fullRebuild();	
    });

	return container
}