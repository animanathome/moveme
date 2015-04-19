// To ensure the user can't highlight the individual frames
// http://stackoverflow.com/questions/16805684/javascript-disable-text-select

MMUI.Timeline = function(){
	MMUI.Element.call( this );

	// console.log('MMUI Timeline')

	this.timeControlsWidth = 230

	var scope = this;
	var dom = document.createElement( 'div' );  		
	dom.style.position = 'absolute'
	dom.style.left = '0px'
	dom.style.right = '0px'
	dom.style.top = '0px'
	dom.style.bottom = '0px'
	this.dom = dom;

	this.time = 18;
	this.startTime = 0;
	this.endTime = 24;
	this.keyframes = [0,6,12,18,24];
	this.uiElements = {}

	this.bgFrameColor = '#999';
	this.keyFrameColor = '#900';
	this.timeFrameColor = '#666';

//	TIMELINE
	var timeLine = new MMUI.Panel()	
	timeLine.setClass('timeLine');
	timeLine.dom.style.cursor = 'default'
	timeLine.setPosition('absolute')
	timeLine.setLeft('0px')
	timeLine.setTop('0px')
	timeLine.setBottom('0px')
	timeLine.setRight(this.timeControlsWidth+'px')
	this.timeLine = timeLine

	dom.appendChild( timeLine.dom )

//	CONTROLS
	var timeLineControls = new MMUI.Panel()
	timeLineControls.setClass('timeLineControls')
	timeLineControls.dom.style.position = 'absolute';
	timeLineControls.dom.style.right = '0px';
	timeLineControls.dom.style.top = '0px';
	timeLineControls.dom.style.bottom = '0px';
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

	return this;
}


MMUI.Timeline.prototype = Object.create( MMUI.Element.prototype );

MMUI.Timeline.prototype.setActiveKeys = function( activeKeys ){
	this.keyframes = activeKeys;
	this.update();

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
	for( frame in this.uiElements['frame']){
		this.uiElements['frame'][frame].style.backgroundColor = this.bgFrameColor;
	}
	
	var scope = this;
	_.each( this.keyframes, function( frame ){	
		if( scope.uiElements['frame'].hasOwnProperty( frame ) ){
			scope.uiElements['frame'][frame].style.backgroundColor = scope.keyFrameColor;	
		}
	})

	if( this.uiElements['frame'].hasOwnProperty(this.time)){
		this.uiElements['frame'][this.time].style.backgroundColor = this.timeFrameColor;
	}

	this.currentTime.setValue(this.time)

	return this;
}

MMUI.Timeline.prototype.clickTime = function(){
	var scope = this;
	return function( event ){		
		if( this.hasOwnProperty('innerHTML')){
			scope.setTime( parseInt(this.innerHTML))

			if( event.button == 0 ){	//	 left mouse button
				scope.dom.dispatchEvent( scope.timeChangeEvent );
			}
			if( event.button == 1 ){	//	middle mouse button
				scope.dom.dispatchEvent(scope.timeShiftEvent)
			}
		}
	}
}

MMUI.Timeline.prototype.dragTime = function(){
	var scope = this;
	return function(){
		var onMouseMove = function( event ){
			var movementX = event.movementX | event.webkitMovementX | event.mozMovementX | 0;

			// console.log('moving', movementX)
			// console.log(event.target)

			if( event.target.hasOwnProperty('innerHTML')){
				scope.setTime(parseInt(event.target.innerHTML))
				
				//	left mouse button drag
				if( event.button == 0 ){
					scope.dom.dispatchEvent(scope.timeChangeEvent);
				}

				//	middle mouse button drag
				if( event.button == 1 ){
					scope.dom.dispatchEvent(scope.timeShiftEvent);
				}
			}
		}
		var onMouseUp = function( event ){
			document.removeEventListener( 'mousemove', onMouseMove );
			document.removeEventListener( 'mouseup', onMouseUp );	

			scope.dom.dispatchEvent(scope.timeReleaseEvent);
		}
		document.addEventListener( 'mousemove', onMouseMove, false );
		document.addEventListener( 'mouseup', onMouseUp, false );		
	}
}

MMUI.Timeline.prototype.rebuild = function(){
	// console.log('MMUI.Timeline rebuild')
	// console.log('\twidth', this.timeLine.dom.offsetWidth)
	/*
	Rebuilds the entire timeline
	NOTE: we should only run this one when the time range has changed
	*/
	this.uiElements = {bar:{}, frame:{}};

	while (this.timeLine.dom.firstChild) {
		this.timeLine.dom.removeChild(this.timeLine.dom.firstChild);
	}

	// console.log('\twidth', this.timeLine.dom.offsetWidth)

	var numberOfLines = (this.endTime - this.startTime) + 1
	var offset = Math.floor(((this.timeLine.dom.offsetWidth) / numberOfLines) - 1); // 1 pixel representing the actual frame
	// console.log('\toffset', offset)	
	// console.log('\ttotal', (offset + 1) * numberOfLines )

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
		var bar = document.createElement( 'span' );			
		bar.style.cssText = 'position:absolute;width:1px;top:0px;bottom:0px;left:'+position+'px;background-color:#000';
		bar.style.cursor = 'default'

		this.timeLine.dom.appendChild( bar );
		this.uiElements['bar'][number] = bar

	//	frame
		var frame = document.createElement( 'span' );		
		if( this.time === number ){
			frame.style.cssText = 'position:absolute;width:'+ offset +'px;top:0px;bottom:0px;left:'+(position+1)+'px;background-color:'+this.timeFrameColor;	
		}else{
			if( this.keyframes.indexOf( number ) !== -1){
				frame.style.cssText = 'position:absolute;width:'+ offset +'px;top:0px;bottom:0px;left:'+(position+1)+'px;background-color:'+this.keyFrameColor;
			}else{
				frame.style.cssText = 'position:absolute;width:'+ offset +'px;top:0px;bottom:0px;left:'+(position+1)+'px;background-color:'+this.bgFrameColor;
			}
		}

		frame.addEventListener( 'mousedown', this.dragTime());
		frame.addEventListener( 'click', this.clickTime());

		frame.style.fontSize = '1.4vmin'; // http://css-tricks.com/viewport-sized-typography			
		frame.textContent = number;
		frame.style.textIndent = '1px'
		frame.style.cursor = 'default'
		
		this.timeLine.dom.appendChild( frame );		
		this.uiElements['frame'][number] = frame

		number += 1;
		increment += 1;
	}
	return this;
}

var events = [  
				'Play', 
				'Startframe', 
				'Previousframe', 
				'Nextframe', 
				'Endframe',
				'Timechange',
				'Timeshift',
				'Timerelease'
				];
events.forEach( function ( event ) {
    var method = 'on' + event;
    MMUI.Timeline.prototype[ method ] = function ( callback ) {
        this.dom.addEventListener( event.toLowerCase(), callback, false );
        return this;
    };
});
