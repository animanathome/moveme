/**
 * @author qiao / https://github.com/qiao
 * @author mrdoob / http://mrdoob.com
 * @author alteredq / http://alteredqualia.com/
 * @author WestLangley / http://github.com/WestLangley
 *
 * maya controls:
 * 	- tumble : alt + left mouse button
 * 	- pan: alt + middle mouse button
 * 	- dolly: alt + right mouse button
 */

THREE.EditorControls = function ( object, domElement, prefix) {
	// console.log('THREE.EditorControls', object, domElement, prefix)

	domElement = ( domElement !== undefined ) ? domElement : document;

	// API

	this.enabled = true;
	this.object = object; // this now allows us to overwrite the object
	this.prefix = prefix;

	// internals

	var scope = this;

	var STATE = { NONE: -1, ROTATE: 0, ZOOM: 1, PAN: 2 };
	var MODE = { DEFAULT: 0, MAYA: 1}
	var state = STATE.NONE;
	var mode = MODE.MAYA

	var vector = new THREE.Vector3();
	var center = new THREE.Vector3();
	var normalMatrix = new THREE.Matrix3();

	// events

	var changeEvent = { type: 'change' };

	this.setObject = function(object){
		// console.log('setObject', object)

		this.object = object;

		center = new THREE.Vector3();
		vector = new THREE.Vector3();

		normalMatrix = new THREE.Matrix3();
	}

	this.focusOnPoint = function( point ){
		// console.log('EditorControls.focusOnPoint', point)

		center = point;
		this.object.lookAt( center );
		
		scope.dispatchEvent( changeEvent );
	}

	this.focus = function ( target ) {

		center.getPositionFromMatrix( target.matrixWorld );
		this.object.lookAt( center );

		scope.dispatchEvent( changeEvent );
	};

	this.pan = function ( distance ) {
		// console.log('panning camera', scope.object.name)

		if( scope.object instanceof THREE.PerspectiveCamera )
		{
			normalMatrix.getNormalMatrix( this.object.matrix );

			distance.applyMatrix3( normalMatrix );
			distance.multiplyScalar( vector.copy( center ).sub( this.object.position ).length() * 0.001 );

			this.object.position.add( distance );
			center.add( distance );
		}else{		
			var rDistance = new THREE.Vector3().copy(distance) //distance.x , distance.y, distance.z)
			// rDistance.multiplyScalar( (1.0/this.object.zoom));
			rDistance.divideScalar( this.object.zoom );			
			switch( this.object.name ){
				case "front":
					this.object.position.add( rDistance ); 
				break;
				
				case "side":
					this.object.position.add( 
						new THREE.Vector3(  rDistance.z, 
											rDistance.y, 
											-1*rDistance.x) ); 
				break;
				
				case "top":
					this.object.position.add( 
						new THREE.Vector3( -1*rDistance.y, 
											rDistance.z, 
											-1*rDistance.x) ); 
				break;
			}			
		}
		scope.dispatchEvent( changeEvent );
	};

	this.zoom = function ( distance ) {

		if( scope.object instanceof THREE.PerspectiveCamera ){
			//	NOTE: the default zoom effect creates quite a bit of distortion, therefore we choose to opt for this implementation

			normalMatrix.getNormalMatrix( this.object.matrix );
			distance.applyMatrix3( normalMatrix );
			distance.multiplyScalar( vector.copy( center ).sub( this.object.position ).length() * 0.001 );
			this.object.position.add( distance );
		}else{
		// 	// console.log('\tzoom', distance)
		// 	// this.object.scale.addScalar( distance.z * 0.001 )			
		// 	// // console.log(this.object.scale)
		// 	// var smallestValue = 0.1 // seems to clip if we use a smaller value
		// 	// if( this.object.scale.x < smallestValue){
		// 	// 	this.object.scale.set( smallestValue, smallestValue, smallestValue );				
		// 	// }
		// 	// console.log(this.object.scale)			
			this.object.zoom = this.object.zoom + (-1 * distance.z * .001);
		}

		scope.dispatchEvent( changeEvent );

	};

	this.rotate = function ( delta ) {
		// console.log('EditorControls.rotate')
		// console.log('\tobject', object)
		// console.log('\tcenter', center)
		// console.log('\tvector', vector)

		vector.copy( this.object.position ).sub( center );

		var theta = Math.atan2( vector.x, vector.z );
		var phi = Math.atan2( Math.sqrt( vector.x * vector.x + vector.z * vector.z ), vector.y );

		theta += delta.x;
		phi += delta.y;

		var EPS = 0.000001;

		phi = Math.max( EPS, Math.min( Math.PI - EPS, phi ) );

		var radius = vector.length();

		vector.x = radius * Math.sin( phi ) * Math.sin( theta );
		vector.y = radius * Math.cos( phi );
		vector.z = radius * Math.sin( phi ) * Math.cos( theta );

		this.object.position.copy( center ).add( vector );

		this.object.lookAt( center );

		scope.dispatchEvent( changeEvent , 'test');

	};

	// mouse

	function onMouseDown( event ) {

		// console.log('EditorControls: onMouseDown')
		// console.log('\tenabled', scope.enabled)
		// console.log(scope.object)
		// console.log('isOrtho', scope.object instanceof THREE.OrthographicCamera)
		// console.log('isPersp', scope.object instanceof THREE.PerspectiveCamera)

		if ( scope.enabled === false ) return;

		event.preventDefault();

		if ( event.button === 0 ) {			
			if( scope.object instanceof THREE.PerspectiveCamera ){
				state = STATE.ROTATE;
			}

		} else if ( event.button === 1 ) {

			state = STATE.PAN;

		} else if ( event.button === 2 ) {

			
			state = STATE.ZOOM;

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

		if(state === STATE.ROTATE ){

			scope.rotate( new THREE.Vector3( - movementX * 0.005, - movementY * 0.005, 0 ) );

		}else if(state === STATE.ZOOM){

			var zoom = new THREE.Vector2(movementX, movementY).length()			
			var posOrNeg = movementX + (-1 * movementY)
			if(posOrNeg <= 0){
				zoom *= -1
			}
			scope.zoom(new THREE.Vector3( 0, 0, zoom * 5))

		}else if(state === STATE.PAN){
			scope.pan( new THREE.Vector3( - movementX, movementY, 0 ));
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

		if ( scope.enabled === false ) return;

		var delta = 0;

		if ( event.wheelDelta ) { // WebKit / Opera / Explorer 9

			delta = - event.wheelDelta;

		} else if ( event.detail ) { // Firefox

			delta = event.detail * 10;

		}

		scope.zoom( new THREE.Vector3( 0, 0, delta ) );

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

			case 1:
				scope.rotate( touch.sub( prevTouch ).multiplyScalar( - 0.005 ) );
				break;

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

	this.resetEvents = function(){
		//	reset events
		onMouseUp();
	}

	this.clear = function(){
		console.log('THREE.EditorControls.clear')
		domElement.removeEventListener( 'contextmenu', function ( event ) { event.preventDefault(); }, false );
		domElement.removeEventListener( 'mousedown', onMouseDown, false );
		domElement.removeEventListener( 'mousewheel', onMouseWheel, false );
		domElement.removeEventListener( 'DOMMouseScroll', onMouseWheel, false );
		domElement.removeEventListener( 'touchstart', touchStart, false );
		domElement.removeEventListener( 'touchmove', touchMove, false ); 		
	}
	return this;
};

THREE.EditorControls.prototype = Object.create( THREE.EventDispatcher.prototype );

