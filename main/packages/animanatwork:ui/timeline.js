// To ensure the user can't highlight the individual frames
// http://stackoverflow.com/questions/16805684/javascript-disable-text-select

MMUI.Timeline = function(){
	MMUI.Element.call( this );

	// console.log('MMUI Timeline')

	this.timeControlsWidth = 230

	var scope = this;
	var dom = document.createElement( 'div' );  
	dom.className = 'timeline';
	this.dom = dom;

	this.time = 18;
	this.startTime = 2;
	this.endTime = 24;
	this.keyframes = [1,2,6,12,18,24];
	this.uiElements = {}

	// private selection variables
	this._start = -1;
	this._end = -1;
	this._drag_selection = 0;
	this._frame_width = -1;
	this._key_indices = []
	this._key_offset = 0;
	this._drag_selection_mode = false;

	//	color variables
	this.bgFrameColor = '#999';
	this.keyFrameColor = '#900';
	this.timeFrameColor = '#666';

//	TIMELINE
	var timeLine = new MMUI.Panel()	
	timeLine.setClass('timeline-content');
	timeLine.setRight(this.timeControlsWidth+'px')
	this.timeLine = timeLine

	dom.appendChild( timeLine.dom )

//	CONTROLS
	var timeLineControls = new MMUI.Panel()
	timeLineControls.setClass('timeline-controls')
	timeLineControls.dom.style.width = this.timeControlsWidth + 'px';
	
	dom.appendChild( timeLineControls.dom );	

//	CURRENT TIME
	var currentTimePanel = new MMUI.Panel().setFloat('left');
	currentTimePanel.dom.className = 'input-group'
	timeLineControls.add( currentTimePanel )

	var currentTime = new MMUI.Integer( 0 ).setWidth('40px')
	currentTime.onChange( function(){
		console.log('MM.timeline.onCurrentTime')
		scope.time = scope.currentTime.getValue();
		scope.dom.dispatchEvent( scope.timeChangeEvent );
	})
	currentTime.dom.id = 'currentTime'
	currentTime.dom.className = "form-control"
	this.currentTime = currentTime;

	currentTimePanel.add( currentTime );

//	PLAYBACK CONTROLS	
	var controlGroup = new MMUI.ButtonGroup().setPadding('4px');
	timeLineControls.add( controlGroup )

	var startKeyButton = new MMUI.Button();
	startKeyButton.setLabel( '|' ).addToolTip('Start Frame')
	startKeyButton.onClick( function(){
		scope.dom.dispatchEvent( scope.startFrameEvent );
	})		
	controlGroup.add( startKeyButton );	

	var previousKeyButton = new MMUI.Button('|<');	
	previousKeyButton.onClick( function(){
		scope.dom.dispatchEvent( scope.previousFrameEvent );
	}).addToolTip('Previous Key')
	
	controlGroup.add( previousKeyButton );

	var playButton = new MMUI.Button('>').setWidth('36px');	
	playButton.onClick( function(){	
		if( playButton.dom.textContent === '>' ){
			playButton.dom.textContent = "||"
		}else{
			playButton.dom.textContent = ">"
		}
		scope.dom.dispatchEvent( scope.playEvent );
	}).addToolTip('Play')	

	controlGroup.add( playButton );	

	var nextKeyButton = new MMUI.Button('>|');	
	nextKeyButton.onClick( function(){
		scope.dom.dispatchEvent( scope.nextFrameEvent );
	}).addToolTip('Next Key')
	controlGroup.add( nextKeyButton );	

	var endKeyButton = new MMUI.Button();	
	endKeyButton.setLabel( '|' );
	endKeyButton.onClick( function(){
		scope.dom.dispatchEvent( scope.endFrameEvent );
	}).addToolTip('End Frame')
	controlGroup.add( endKeyButton );

//	EVENTS
	this.playEvent = document.createEvent( 'HTMLEvents' );
    this.playEvent.initEvent( 'play', true, true );

	this.startFrameEvent = document.createEvent( 'HTMLEvents' );
    this.startFrameEvent.initEvent( 'startframe', true, true );

    this.previousFrameEvent = document.createEvent( 'HTMLEvents' );
    this.previousFrameEvent.initEvent( 'previousframe', true, true );

    this.nextFrameEvent = document.createEvent( 'HTMLEvents' );
    this.nextFrameEvent.initEvent( 'nextframe', true, true );
    
    this.endFrameEvent = document.createEvent( 'HTMLEvents' );
    this.endFrameEvent.initEvent( 'endframe', true, true );

    //	Time has changed and needs to be evaluated
    this.timeChangeEvent = document.createEvent( 'HTMLEvents');
    this.timeChangeEvent.initEvent( 'timechange', true, true)

    //	Time has shifted ( but does not need to be evaluated )
    this.timeShiftEvent = document.createEvent('HTMLEvents');
    this.timeShiftEvent.initEvent('timeshift', true, true)

    //	Everything needs to be updated ( object changed - channel box update ). This is just something we want to do during mouse up.
	this.timeReleaseEvent = document.createEvent('HTMLEvents');
    this.timeReleaseEvent.initEvent('timerelease', true, true)

    //	move event
    this.moveKeysStartEvent = document.createEvent('HTMLEvents')
    this.moveKeysStartEvent.initEvent('movekeysstart', true, true)

    this.moveKeysEvent = document.createEvent('HTMLEvents')
    this.moveKeysEvent.initEvent('movekeys', true, true)

    this.moveKeysEndEvent = document.createEvent('HTMLEvents')
    this.moveKeysEndEvent.initEvent('movekeysend', true, true)

	return this;
}


MMUI.Timeline.prototype = Object.create( MMUI.Element.prototype );

MMUI.Timeline.prototype.setActiveKeys = function( activeKeys ){
	// console.log('Timeline.setActiveKeys', activeKeys)
	
	if(this._drag_selection_mode === true){
		console.log('\tdrag selection mode')
		return;
	}

	this.keyframes = activeKeys;
	
	this.rebuild();

	return this;
}

MMUI.Timeline.prototype.setTime = function( time ){	
	if( isNaN(time)){
		return
	}
	// console.log('MMUI.Timeline setTime', time)

	/*
	Sets the current time
	*/
	this.time = time;
	this.update();

	return this;
}

MMUI.Timeline.prototype.setRange = function( startTime, endTime ){
	// console.log('MMUI.Timeline setRange', startTime, endTime)

	this.startTime = startTime;
	this.endTime = endTime;
	this.rebuild();

	return this;
}

MMUI.Timeline.prototype.update = function(){
	/*
	Updates the colors for the existing time line
	NOTE: this will only work when we're within range!
	*/
	// console.log('MMUI.Timeline update')
	var frame;
	for( frame in this.uiElements['frame']){
		this.uiElements['frame'][frame].style.backgroundColor = this.bgFrameColor;
	}

	if( this.uiElements['frame'].hasOwnProperty(this.time)){
		this.uiElements['frame'][this.time].style.backgroundColor = this.timeFrameColor;
	}

	this.currentTime.setValue(this.time)

	return this;
}

MMUI.Timeline.prototype.clickTime = function(){
	var scope = this;
	return function( event ){					
		// if( this.hasOwnProperty('innerHTML')){
			scope.setTime( parseInt(this.innerHTML))

			if( event.button == 0 ){	//	 left mouse button
				scope.dom.dispatchEvent( scope.timeChangeEvent );
			}
			if( event.button == 1 ){	//	middle mouse button
				scope.dom.dispatchEvent(scope.timeShiftEvent)
			}
		// }
	}
}

MMUI.Timeline.prototype.dragSelection = function(){
	var scope = this;
	return function(){
		var onMouseMove = function( event ){
			scope._drag_selection_mode = true;

			// console.log('dragSelection.onMouseMove')
			var movementX = event.movementX | event.webkitMovementX | event.mozMovementX | 0;
			// console.log('\tmove', movementX)

			scope._drag_selection += movementX;

			scope._key_offset = 0;

			//	dragging to the right
			if(scope._drag_selection >= scope._frame_width){
				scope._drag_selection = 0;

				//	send signal before changing internal data				
				scope._key_offset = 1;
				scope.dom.dispatchEvent(scope.moveKeysEvent);

				scope._start += 1;
				scope._end += 1;
			}

			if(scope._drag_selection <= -1 * scope._frame_width){
				scope._drag_selection = 0;				

				//	send signal before changing internal data
				scope._key_offset = -1;
				scope.dom.dispatchEvent(scope.moveKeysEvent);

				scope._start -= 1;
				scope._end -= 1;
			}

			if(scope._key_offset !== 0){
				scope._updateSelection();
				scope._moveKeys(scope._key_offset)
				scope._removeKeys()
				scope._buildKeys()				
			}

		}

		var onMouseUp = function( event ){
			// console.log('dragSelection.onMouseUp')
			// console.log('\tevent', event)
			scope._drag_selection_mode = false;

			document.removeEventListener( 'mousemove', onMouseMove );
			document.removeEventListener( 'mouseup', onMouseUp );

			//	end drag selection event 
			scope.dom.dispatchEvent(scope.moveKeysEndEvent)
		}

		document.addEventListener( 'mousemove', onMouseMove, false );
		document.addEventListener( 'mouseup', onMouseUp, false );

		//	start drag selection event
		scope.dom.dispatchEvent(scope.moveKeysStartEvent)

		console.log('dragSelection.mousedown')
		
		// if( event.button == 2 ){
		// 	scope._drag_selection_mode = false;

		// 	document.removeEventListener( 'mousemove', onMouseMove );
		// 	document.removeEventListener( 'mouseup', onMouseUp );

		// 	scope._resetSelection();
		// }

	}
}

MMUI.Timeline.prototype.dragTime = function(){
	var scope = this;
	return function(){
		var onMouseMove = function( event ){
			var movementX = event.movementX | event.webkitMovementX | event.mozMovementX | 0;

			// console.log('moving', movementX)
			// console.log(event.target)
				var stime = parseInt(event.target.innerHTML);
				
				if(!isNaN(stime)){
					if(event.shiftKey === true){
						if(scope._start === -1){
							scope._start = stime;
							console.log('_start', scope._start)
						}else{
							scope._end = stime;
							console.log('_end', scope._end)
						}
						scope._updateSelection()
						scope._getKeysWithinSelection()
					}else{
						// console.log('resetting')
						scope._start = -1;
						scope._end = -1;
					}
				}

			// if( event.target.hasOwnProperty('innerHTML')){
				scope.setTime(stime)
				
				//	left mouse button drag
				if( event.button == 0 ){
					scope.dom.dispatchEvent(scope.timeChangeEvent);
				}

				//	middle mouse button drag
				if( event.button == 1 ){
					scope.dom.dispatchEvent(scope.timeShiftEvent);
				}
			// }
		}
		var onMouseUp = function( event ){
			// console.log('dragTime.onMouseUp')
			// console.log('\tevent', event)

			//	reset the selection when we click on a frame while no longer holding down the shift key
			if(event.shiftKey === false){
				scope._resetSelection();
			}			

			document.removeEventListener( 'mousemove', onMouseMove );
			document.removeEventListener( 'mouseup', onMouseUp );	

			scope.dom.dispatchEvent(scope.timeReleaseEvent);
		}
		document.addEventListener( 'mousemove', onMouseMove, false );
		document.addEventListener( 'mouseup', onMouseUp, false );
	}
}

MMUI.Timeline.prototype._updateSelection = function(){	
	// console.log('_updateSelection')
	
	if(this._start === -1 ){
		return
	}
	if(this._end === -1 ){
		return
	}
	
	var start = this._start;
	var end = this._end;
	if( this._start > this._end){
		start = this._end;
		end = this._start;
	}
	// console.log('\tindex start', start, 'end', end)
	// console.log(this.uiElements['frame'][start])
	// console.log(this.uiElements['frame'][end])

	var start_pos = parseInt(this.uiElements['frame'][start].style.left)
	var end_pos = parseInt(this.uiElements['frame'][end].style.left)
	end_pos += parseInt(this.uiElements['frame'][end].style.width)

	// console.log('\tposition start', start_pos, 'end', end_pos)

	// display selection panel
	var panel = this.uiElements['selection'].style
	panel.display='block';
	panel.left = start_pos+'px'
	panel.width = ((end_pos - start_pos)+2)+'px'
}

MMUI.Timeline.prototype._resetSelection = function(){
	// console.log('_resetSelection')

	//	reset selection reference frames
	this._start = -1;
	this._end = -1;

	//	hide selection
	if(this.uiElements.hasOwnProperty('selection')){
		this.uiElements['selection'].style.display='none';
	}
}

MMUI.Timeline.prototype._getKeysWithinSelection = function(){
	/**
	 * Get the indices of the displayed keys the fall with the current selection area.
	 */	
	// console.log('_getKeysWithinSelection')
	// console.log('\tstart', this._start, 'end', this._end)
	this._key_indices = []; 

	var i, j;
	for(i = 0, j = this.keyframes.length; i<j; i++){
		// console.log('\tkey time value', this.keyframes[i])
		if(this.keyframes[i] >= this._start && this.keyframes[i] <= this._end){
			this._key_indices.push(i)
		}
	}
	// console.log('\tkey indices:', this._key_indices)
}

MMUI.Timeline.prototype._moveKeys = function( value ){
	/**
	 * Add the given value to the active keyframe indicies. This allows us to move them through time.
	 * @param  {Number} value [The amount we want to move the key indices]
	 */
	// console.log('_moveKeys', value)
	var i, j;
	for(i = 0, j = this._key_indices.length; i < j; i++){
		this.keyframes[this._key_indices[i]] += value;
	}
	// console.log('\tkeyframes', this.keyframes)
}

MMUI.Timeline.prototype._removeKeys = function(){
	// console.log('_removeKeys')
	var key;
	for(key in this.uiElements['key']){
		console.log('\tkey', this.uiElements['key'][key])

		this.uiElements['key'][key].parentNode.removeChild(this.uiElements['key'][key])
	}
}

MMUI.Timeline.prototype._buildKeys = function(){
	this.uiElements['key'] = {}

	//	keys
	var position, i, j;
	for(i = 0, j = this.keyframes.length; i < j; i++){
		if(!this.uiElements['bar'].hasOwnProperty(this.keyframes[i])){
			// console.log('\tskipping keyframe', this.keyframes[i])
			continue;
		}
		position = parseInt(this.uiElements['bar'][this.keyframes[i]].style.left)

		// console.log('\tadding keyframe', this.keyframes[i])
		var key = document.createElement('span');		
		key.className = 'timeline-key'
		key.style.cssText = 'left:'+(position+2)+'px;'
		this.timeLine.dom.appendChild( key );

		this.uiElements['key'][i] = key
	}
}

MMUI.Timeline.prototype.rebuild = function(){
	// console.log('MMUI.Timeline rebuild')
	// console.log('\twidth', this.timeLine.dom.offsetWidth)
	/*
	Rebuilds the entire timeline
	NOTE: we should only run this one when the time range has changed
	*/
	this.uiElements = {
						  bar:{}
						, frame:{}
						, key:{}
					};

	while (this.timeLine.dom.firstChild) {
		this.timeLine.dom.removeChild(this.timeLine.dom.firstChild);
	}

	// console.log('\twidth', this.timeLine.dom.offsetWidth)

	var numberOfLines = (this.endTime - this.startTime) + 1
	var offset = Math.floor(((this.timeLine.dom.offsetWidth) / numberOfLines) - 1); // 1 pixel representing the actual frame
	// console.log('\toffset', offset)	
	// console.log('\ttotal', (offset + 1) * numberOfLines )
	this._frame_width = offset;

	// console.log('start', this.startTime)
	var number = this.startTime
	var increment = 0;
	var position = 0;
	var indent = offset / 2;
	while ( this.timeLine.dom.children.length < (numberOfLines * 2) ){
		position = indent + (increment * (offset + 1));
		// console.log('\tnumber', number)
		// console.log('\toffset', offset)
		// console.log('\tposition', position )

	//	bar
		var bar = document.createElement('span');			
		bar.className = 'timeline-bar'
		bar.style.cssText = 'left:'+position+'px;';

		this.timeLine.dom.appendChild( bar );
		this.uiElements['bar'][number] = bar

	//	frame
		var frame = document.createElement('span');
		frame.className = 'timeline-frame'
		if( this.time === number ){
			frame.style.cssText = 'width:'+ offset +'px;left:'+(position+1)+'px;background-color:'+this.timeFrameColor;	
		}else{			
			frame.style.cssText = 'width:'+ offset +'px;left:'+(position+1)+'px;background-color:'+this.bgFrameColor;
		}

		frame.addEventListener( 'mousedown', this.dragTime());
		frame.addEventListener( 'click', this.clickTime());

		frame.textContent = number;
		
		this.timeLine.dom.appendChild( frame );
		this.uiElements['frame'][number] = frame

		number += 1;
		increment += 1;
	}

	//	keys
	this._buildKeys()

	//	selection
	var selection = document.createElement('span');
	selection.className = 'timeline-key-selection'
	selection.style.cssText = 'left:100px;width:100px;display:none;';
	this.timeLine.dom.appendChild( selection );

	selection.addEventListener( 'mousedown', this.dragSelection());

	this.uiElements['selection'] = selection

	return this;
}

var events = [  
				'Play', 
				'Startframe', 
				'Previousframe', 
				'Nextframe', 
				'Endframe',
				'Timechange',
				'Timeshift', // change time without evaluating it
				'Movekeysstart',
				'Movekeys',
				'Movekeysend',
				'Timerelease'
				];
events.forEach( function ( event ) {
    var method = 'on' + event;
    MMUI.Timeline.prototype[ method ] = function ( callback ) {
        this.dom.addEventListener( event.toLowerCase(), callback, false );
        return this;
    };
});
