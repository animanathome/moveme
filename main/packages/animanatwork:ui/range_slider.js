MMUI.RangeSlider = function(){
	MMUI.Element.call( this );

	// console.log('MMUI RangeSlider')

	var scope = this;
	this.startTime = 0;
	this.startRange = 10;
	this.endRange = 40;
	this.endTime = 50;
	this.autoKey = false;
	this.autoKeyColor = 'rgb(255, 111, 111)';

	var dom = document.createElement( 'div' );  		
	dom.style.position = 'absolute'
	dom.style.left = '0px'
	dom.style.right = '0px'
	dom.style.top = '0px'
	dom.style.bottom = '0px'
	this.dom = dom;

	var rangeSlider = new MMUI.Panel();
	rangeSlider.setClass( 'rangeSlider')
	rangeSlider.dom.style.position = 'absolute'
	rangeSlider.dom.style.verticalAlign = 'middle'
	rangeSlider.dom.style.left = '0px'
	rangeSlider.dom.style.right = '0px'
	rangeSlider.dom.style.top = '0px'
	rangeSlider.dom.style.bottom = '0px'
	rangeSlider.setBottom('0px')
	
	this.dom.appendChild( rangeSlider.dom )

//	start
	var lArea = new MMUI.Panel();	
	lArea.dom.style.position = 'absolute';	
	lArea.dom.className = 'input-group'
	lArea.dom.style.top = '0px';
	lArea.dom.style.left = '5px';
	lArea.dom.style.width = '100px';
	lArea.dom.style.bottom = '0px';
	rangeSlider.add( lArea );	

//	range
	//	this panel represents start to end time
	var cArea = new MMUI.Panel();	
	cArea.setClass("rangeArea") 
	cArea.dom.style.position = 'absolute';
	cArea.dom.style.margin = '2px'
	cArea.dom.style.left = '105px'
	cArea.dom.style.right = '145px'
	cArea.dom.style.top = '0px';
	cArea.dom.style.bottom = '0px';
	cArea.dom.style.cursor = 'default'
	rangeSlider.add( cArea );

	this.rangeArea = cArea;

// 	start time
	var startTime = new MMUI.Integer( this.startTime )
	startTime.dom.className = "form-control"
	startTime.dom.id = 'startTime'
	startTime.dom.style.width = '40px';		
	startTime.onChange( function(){
		scope.startTime = startTime.getValue();
		scope.check();
		scope.objectToUI();
		startTime.setValue(scope.startTime);
		scope.dom.dispatchEvent( scope.timeRangeChangeEvent );
	});
	lArea.dom.appendChild( startTime.dom );	

	this.startTimeNumber = startTime

	var startRangeNumber = new MMUI.Integer( this.startRange )
	startRangeNumber.dom.className = "form-control"
	startRangeNumber.dom.id = 'startRangeNumber'
	startRangeNumber.dom.style.width = '40px';
	startRangeNumber.onChange( function(){
		scope.startRange = startRangeNumber.getValue();
		scope.check();
		scope.objectToUI();
		startRangeNumber.setValue(scope.startRange);
		scope.dom.dispatchEvent( scope.timeRangeChangeEvent )
	})
	lArea.dom.appendChild( startRangeNumber.dom );	

	this.startRangeNumber = startRangeNumber;

// 	time range
	//	this panel represents start to end range
	var range = new MMUI.Panel();
	range.setClass("range")
	range.dom.style.position = 'absolute'
	range.dom.style.left = '100px';
	range.dom.style.right = '140px';	
	range.dom.style.top = '0px';
	range.dom.style.bottom = '0px';
	range.dom.style.backgroundColor = "#999"
	range.dom.style.cursor = 'move'
	cArea.dom.appendChild( range.dom );

	this.range = range;

	var scale = 10;
	range.dom.addEventListener( 'mousedown', function ( event ) {
		// var lscope = this;

		var onMouseMove = function ( event ) {			
			var movementX = event.movementX | event.webkitMovementX | event.mozMovementX | 0;
		
			var clPos = parseInt(String(scope.range.dom.style.left).slice(0, -2))
			var crPos = parseInt(String(scope.range.dom.style.right).slice(0, -2))

			if( (clPos + movementX) > -1 && (crPos - movementX) > -1){
				scope.range.dom.style.left = clPos + movementX + 'px';
				scope.range.dom.style.right = crPos - movementX + 'px';
				scope.uiToObject();
				scope.dom.dispatchEvent( scope.timeRangeChangeEvent );
			}			
		};
		var onMouseUp = function ( event ) {
			document.removeEventListener( 'mousemove', onMouseMove );
			document.removeEventListener( 'mouseup', onMouseUp );
		};		

		document.addEventListener( 'mousemove', onMouseMove, false );
		document.addEventListener( 'mouseup', onMouseUp, false );

	}, false);	

	var startRange = new MMUI.Panel();
	startRange.dom.style.position = 'absolute'
	startRange.dom.style.width = '15%'
	startRange.dom.style.height = '100%'
	startRange.dom.style.left = '0px'
	startRange.dom.style.cursor = 'w-resize'	
	startRange.dom.addEventListener( 'mousedown', function ( event ) {
		event.stopPropagation();
		
		var movementX = 0;
		var onMouseMove = function ( event ) {
			movementX = event.movementX | event.webkitMovementX | event.mozMovementX | 0;		
			var clPos = parseInt(String(scope.range.dom.style.left).slice(0, -2))
			if( (clPos + movementX) > -1 ){
				scope.range.dom.style.left = clPos + movementX + 'px';
				scope.uiToObject();
				scope.dom.dispatchEvent( scope.timeRangeChangeEvent );
			}
		};
		var onMouseUp = function ( event ) {
			document.removeEventListener( 'mousemove', onMouseMove );
			document.removeEventListener( 'mouseup', onMouseUp );
		};
		document.addEventListener( 'mousemove', onMouseMove, false );
		document.addEventListener( 'mouseup', onMouseUp, false );

	}, false );	
	range.dom.appendChild( startRange.dom)	

	var endRange = new MMUI.Panel();
	endRange.dom.style.position = 'absolute'
	endRange.dom.style.width = '15%'
	endRange.dom.style.height = '100%'
	endRange.dom.style.right = '0px'
	endRange.dom.style.top = '0px'
	endRange.dom.style.cursor = 'e-resize'
	endRange.dom.addEventListener( 'mousedown', function ( event ) {
		event.stopPropagation();
		
		var movementX = 0;
		var onMouseMove = function ( event ) {
			movementX = event.movementX | event.webkitMovementX | event.mozMovementX | 0;			
			var crPos = parseInt(String(scope.range.dom.style.right).slice(0, -2))
			if((crPos - movementX) > -1){
				scope.range.dom.style.right = crPos - movementX + 'px';
				scope.uiToObject();
				scope.dom.dispatchEvent( scope.timeRangeChangeEvent );
			}
		};
		var onMouseUp = function ( event ) {
			document.removeEventListener( 'mousemove', onMouseMove );
			document.removeEventListener( 'mouseup', onMouseUp );
		};
		document.addEventListener( 'mousemove', onMouseMove, false );
		document.addEventListener( 'mouseup', onMouseUp, false );

	}, false );		
	range.dom.appendChild( endRange.dom)	

//	end
	var rArea = new MMUI.Panel();	
	rArea.dom.style.position = 'absolute';
	rArea.dom.className = 'input-group'
	rArea.dom.style.right = '0px';
	rArea.dom.style.top = '0px';
	rArea.dom.style.width = '130px';
	rArea.dom.style.bottom = '0px';
	rangeSlider.add( rArea );	

// 	end time range
	var endRangeNumber = new MMUI.Integer( this.endRange )
	endRangeNumber.dom.id = 'endRangeNumber'	
	endRangeNumber.dom.className = "form-control"
	endRangeNumber.setRight( '0px')
	endRangeNumber.dom.style.width = '40px';
	endRangeNumber.onChange( function(){
		scope.endRange = endRangeNumber.getValue();
		scope.check();
		scope.objectToUI();
		endRangeNumber.setValue(scope.endRange);
		scope.dom.dispatchEvent( scope.timeRangeChangeEvent )
	})		
	rArea.dom.appendChild( endRangeNumber.dom );

	this.endRangeNumber = endRangeNumber;

//	end time
	var endTime = new MMUI.Integer( this.endTime )
	endTime.dom.className = "form-control"
	endTime.dom.id = 'endTime'
	endTime.dom.style.width = '40px';		
	endTime.onChange( function(){
		scope.endTime = endTime.getValue();
		scope.check();
		scope.objectToUI();
		endTime.setValue(scope.endTime);
		scope.dom.dispatchEvent( scope.timeRangeChangeEvent )
	})		
	rArea.dom.appendChild( endTime.dom );	

	this.endTimeNumber = endTime;

//	auto key button
	var controlGroup = new MMUI.ButtonGroup();
	rArea.add( controlGroup )

	var autoKey = new MMUI.Button().setImage('/ui/keyAuto.gif')	
	autoKey.onClick( function(){
		if( scope.autoKey ){
			scope.autoKey = false;			
		}else{			
			scope.autoKey = true;
		}
		scope.dom.dispatchEvent( scope.autoKeyEvent );
		scope.updateAutoKeyUI()
	}).addToolTip('Auto Key')
	controlGroup.add( autoKey );
	this.autoKeyBtn = autoKey;		

	this.timeRangeChangeEvent = document.createEvent( 'HTMLEvents');
    this.timeRangeChangeEvent.initEvent( 'timerangechange', true, true)

    this.autoKeyEvent = document.createEvent('HTMLEvents');
    this.autoKeyEvent.initEvent('autokeychange', true, true)

    this.updateAutoKeyUI();

	return this;
}	

MMUI.RangeSlider.prototype = Object.create( MMUI.Element.prototype );

MMUI.RangeSlider.prototype.init = function(){
	this.objectToUI();
}

MMUI.RangeSlider.prototype.setAutoKey = function( value ){
	this.autoKey = value;

	this.updateAutoKeyUI();
}

MMUI.RangeSlider.prototype.updateAutoKeyUI = function(){
	if( this.autoKey ){			
		this.autoKeyBtn.setBackgroundColor(this.autoKeyColor);			
	}else{
		this.autoKeyBtn.setBackgroundColor(null);
	}		
}

MMUI.RangeSlider.prototype.check = function(){
	/*
	Ensures the values are within the proper range
	*/
	console.log('check')

	if( this.startRange < this.startTime ){
		this.startRange = this.startTime;
	}
	if( this.endRange > this.endTime ){
		this.endRange = this.endTime;
	}
	console.log('\tfull range', this.startTime, this.endTime)
	console.log('\tsoft range', this.startRange, this.endRange)
}

MMUI.RangeSlider.prototype.uiToObject = function(){
	// console.log('MMUI.RangeSlider.uiToObject')

	var totalWidth = this.rangeArea.dom.offsetWidth
	var localWidth = this.range.dom.offsetWidth;
	// console.log('\ttotal', totalWidth)
	// console.log('\tlocal', localWidth)
	// console.log('\tstart', this.startTime)
	// console.log('\tend', this.endTime)

	var range = this.endTime - this.startTime;
	var uiUnit = range / totalWidth; // 1 pixel = uiUnit = time increment
	// console.log('\tuiUnit', uiUnit)

	this.startRange = Math.floor(this.startTime + (parseInt(String(this.range.dom.style.left).slice(0, -2)) * uiUnit));
	this.endRange = Math.floor(this.endTime - (parseInt(String(this.range.dom.style.right).slice(0, -2)) * uiUnit));

	this.check();

	this.endRangeNumber.setValue( this.endRange )
	this.startRangeNumber.setValue( this.startRange )
}

MMUI.RangeSlider.prototype.objectToUI = function(){
	// console.log('MMUI.RangeSlider.objectToUI')
	// console.log('\tstartTime', this.startTime)
	// console.log('\tstartRange', this.startRange)
	// console.log('\tendRange', this.endRange)
	// console.log('\tendTime', this.endTime)

	var totalWidth = this.rangeArea.dom.offsetWidth	
	var time = this.endTime - this.startTime;
	var uiUnit = totalWidth / time; // 1 pixel = uiUnit = time increment

	// console.log('\tuiUnit', uiUnit)
	var leftOffset = Math.floor((this.startRange - this.startTime) * uiUnit);
	var rightOffset = Math.floor((this.endTime - this.endRange) * uiUnit);
	// console.log('\tleft', leftOffset)
	// console.log('\tright', rightOffset)

	this.range.dom.style.left = leftOffset+'px'
	this.range.dom.style.right = rightOffset+'px'
}

MMUI.RangeSlider.prototype.updateUI = function(){

	this.startTimeNumber.setValue(this.startTime)
	this.startRangeNumber.setValue(this.startRange)
	this.endRangeNumber.setValue(this.endRange)
	this.endTimeNumber.setValue(this.endTime)

	this.objectToUI();
}

MMUI.RangeSlider.prototype.setTime = function( start, end ){
	// console.log('MMUI.RangeSlider.setTime', start, end)
	this.startTime = start;
	this.endTime = end;
	
	this.updateUI();
}

MMUI.RangeSlider.prototype.setRange = function( start, end ){
	// console.log('MMUI.RangeSlider.setRange', start, end)

	this.startRange = start;
	this.endRange = end;
	
	this.updateUI();
}

var events = ['Timerangechange', 'Autokeychange'];
events.forEach( function ( event ) {
    var method = 'on' + event;
    MMUI.RangeSlider.prototype[ method ] = function ( callback ) {
        this.dom.addEventListener( event.toLowerCase(), callback, false );
        return this;
    };
});