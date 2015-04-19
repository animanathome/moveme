
MM.KeyframeEditorControls = function ( object, domElement ) {

	console.log('KeyframeEditorControls', object.name)
	console.log('\tdom', domElement)

	domElement = ( domElement !== undefined ) ? domElement : document;

	// API

	this.enabled = true;

	// internals

	var scope = this;
	var vector = new THREE.Vector3();

	var STATE = { NONE: -1, ZOOM: 1, PAN: 2 };
	var state = STATE.NONE;

	var center = new THREE.Vector3();
	var normalMatrix = new THREE.Matrix3();

	var projector = new THREE.Projector();
	var scale = 1.0;

	var objClone = object.clone();
	object.position.set(0, 0, 10);

	var changeEvent = { type: 'keyframeEditorChange' };

	this.focus = function ( target ) {
		console.log('focus')
		center.getPositionFromMatrix( target.matrixWorld );
		object.lookAt( center );

		scope.dispatchEvent( changeEvent );

	};

	this.pan = function ( distance ) {
		// console.log('KeyframeEditorControls: pan')
		// console.log('\tdistance', distance.x, distance.y)

		//	this makes the pan a lot more sensitive
		//	make sense on macbook touchpad, not sure 
		//	how it will behave when using a mouse
		// distance.multiplyScalar(10)

		// console.log('\tscale', object.scale.x, object.scale.y)

		var remapped = new THREE.Vector3().multiplyVectors( distance, object.scale )

		// normalMatrix.getNormalMatrix( object.matrix );

		// remapped.applyMatrix3( normalMatrix );
		// remapped.multiplyScalar( vector.copy( center ).sub( object.position ).length() * 0.001 );

		object.position.add( remapped );
		
		// console.log(object.matrix)
		// center.add( remapped );

		scope.dispatchEvent( changeEvent );

	};

	this.zoom = function ( distance ) {
		console.log('zoom', object.name, distance)

		var xValue, yValue;
		if( distance instanceof THREE.Vector3 ){
			xValue = distance.x / (50 * (1.0 / object.scale.x));
			yValue = distance.y / (50 * (1.0 / object.scale.y));
		}else{
			xValue = distance / (25 * (1.0 / object.scale.x));
			yValue = distance / (25 * (1.0 / object.scale.x));
		}

		object.scale.x = object.scale.x + xValue;
		object.scale.y = object.scale.y + yValue;

		if(object.scale.x < 0.001){
			object.scale.x = 0.001
			object.scale.y = 0.001
		}

		if(object.scale.y < 0.001){
			object.scale.y = 0.001
		}

		// console.log(object.position)

		scope.dispatchEvent( changeEvent );
	};

	// mouse
	// var pScreenPos, nScreenPos;
	// var cursorPosition = function(event){
	// 	var worldPosition = new THREE.Vector3();
	// 	worldPosition.x = ( event.layerX / domElement.offsetWidth ) * 2 - 1;
	// 	worldPosition.y = - ( event.layerY / domElement.offsetHeight ) * 2 + 1;
	// 	worldPosition.z = 0.5;

	// 	projector.unprojectVector( worldPosition, objClone );

	// 	return worldPosition;
	// }

	// function domHWRatio(){
	// 	console.log('\twidth', domElement.offsetWidth)
	// 	console.log('\theight', domElement.offsetHeight)
	// 	var x2y = domElement.offsetWidth / domElement.offsetHeight;
	// 	console.log('\tx2y', x2y)
	// 	return 1.0;
	// }

	function onMouseDown( event ) {

		if ( scope.enabled === false ) return;

		event.preventDefault();

		if ( event.button === 1 ) {
			// console.log('KeyframeEditorControls: zoom')
			state = STATE.ZOOM;

		} else if ( event.button === 2 ) {
			// console.log('KeyframeEditorControls: pan')
			state = STATE.PAN;

		}

		domElement.addEventListener( 'mousemove', onMouseMove, false );
		domElement.addEventListener( 'mouseup', onMouseUp, false );
		domElement.addEventListener( 'mouseout', onMouseUp, false );

	}

	function onMouseMove( event ) {

		if ( scope.enabled === false ) return;

		event.preventDefault();

		var movementX = event.movementX || event.webkitMovementX || event.mozMovementX || event.oMovementX || 0;
		var movementY = event.movementY || event.webkitMovementY || event.mozMovementY || event.oMovementY || 0;
		// movementY *= domHWRatio();
		// nScreenPos = cursorPosition(event);

		// var movementX = (nScreenPos.x - pScreenPos.x);
		// var movementY = -1 * (nScreenPos.y - pScreenPos.y);
		
		// pScreenPos = nScreenPos;

		if ( state === STATE.PAN ) {

			scope.pan( new THREE.Vector3( - movementX, movementY, 0 ) );

		} else if ( state === STATE.ZOOM ){
			console.log( 'zzzzzzzooom')

			scope.zoom( new THREE.Vector3( - movementX, movementY, 0) );
		}

	}

	function onMouseUp( event ) {

		if ( scope.enabled === false ) return;

		domElement.removeEventListener( 'mousemove', onMouseMove, false );
		domElement.removeEventListener( 'mouseup', onMouseUp, false );
		domElement.removeEventListener( 'mouseout', onMouseUp, false );

		state = STATE.NONE;

	}

	function onMouseWheel( event ) {
		// console.log('keyframeEditor: onMouseWheel')

		if ( scope.enabled === false ) return;		

		var delta = 0;

		if ( event.wheelDelta ) { // WebKit / Opera / Explorer 9

			delta = - event.wheelDelta;

		} else if ( event.detail ) { // Firefox

			delta = event.detail * 10;

		}

		scope.zoom( delta / 1000 );

	}

	domElement.addEventListener( 'contextmenu', function ( event ) { event.preventDefault(); }, false );
	domElement.addEventListener( 'mousedown', onMouseDown, false );
	domElement.addEventListener( 'mousewheel', onMouseWheel, false );
	domElement.addEventListener( 'DOMMouseScroll', onMouseWheel, false ); // firefox

	// touch

	var touch = new THREE.Vector3();
	var prevTouch = new THREE.Vector3();
	var prevDistance = null;

	function touchStart( event ) {

		if ( scope.enabled === false ) return;

		var touches = event.touches;

		switch ( touches.length ) {

			case 2:
				var dx = touches[ 0 ].pageX - touches[ 1 ].pageX;
				var dy = touches[ 0 ].pageY - touches[ 1 ].pageY;
				prevDistance = Math.sqrt( dx * dx + dy * dy );
				break;

		}

		prevTouch.set( touches[ 0 ].pageX, touches[ 0 ].pageY, 0 );

	}

	function touchMove( event ) {

		if ( scope.enabled === false ) return;

		event.preventDefault();
		event.stopPropagation();

		var touches = event.touches;

		touch.set( touches[ 0 ].pageX, touches[ 0 ].pageY, 0 );

		switch ( touches.length ) {

			case 2:
				var dx = touches[ 0 ].pageX - touches[ 1 ].pageX;
				var dy = touches[ 0 ].pageY - touches[ 1 ].pageY;
				var distance = Math.sqrt( dx * dx + dy * dy );
				scope.zoom( new THREE.Vector3( 0, 0, prevDistance - distance ) );
				prevDistance = distance;
				break;

			case 3:
				scope.pan( touch.sub( prevTouch ).setX( - touch.x ) );
				break;

		}

		prevTouch.set( touches[ 0 ].pageX, touches[ 0 ].pageY, 0 );

	}

	domElement.addEventListener( 'touchstart', touchStart, false );
	domElement.addEventListener( 'touchmove', touchMove, false );

};

MM.KeyframeEditorControls.prototype = Object.create( THREE.EventDispatcher.prototype );
