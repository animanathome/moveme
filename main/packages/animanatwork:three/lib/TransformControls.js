/**
 * @author arodic / https://github.com/arodic
 */

 //"use strict";
// var THREE.Math.rad = 57.29577951308232;

THREE.TransformControls = function ( camera, domElement, doc ) {

	// TODO: Make non-uniform scale and rotate play nice in hierarchies
	// TODO: ADD RXYZ contol

	this.camera = camera;
	this.domElement = ( domElement !== undefined ) ? domElement : document;
	this.document = ( doc !== undefined ) ? doc : document;

	this.object = undefined;
	this.objects = undefined; 


	this.active = false;
	this.hovered = false;
	this.enabled = false;

	this.mode = 'translate';
	this.space = 'world';
	this.scale = 1;

	this.snapDist = null;
	this.modifierAxis = new THREE.Vector3( 1, 1, 1 );
	this.gizmo = new THREE.Object3D();
	this.gizmo.exportType = 'DO_NOT_EXPORT'

	this.isMoving = false;

	var scope = this;

	var changeEvent = { type: 'change' };	
	var startEvent = { type: 'start' };
	// var toolChangeEvent = { type: 'toolchange'};

	var showPickers = false; // debug

	var ray = new THREE.Raycaster();
	var projector = new THREE.Projector();
	var pointerVector = new THREE.Vector3();

	var point = new THREE.Vector3();
	var offset = new THREE.Vector3();

	var rotation = new THREE.Vector3();
	var offsetRotation = new THREE.Vector3();
	var scale = 1;

	var lookAtMatrix = new THREE.Matrix4();
	var eye = new THREE.Vector3()

	var tempMatrix = new THREE.Matrix4();
	var tempVector = new THREE.Vector3();
	var tempQuaternion = new THREE.Quaternion();
	var unitX = new THREE.Vector3( 1, 0, 0 );
	var unitY = new THREE.Vector3( 0, 1, 0 );
	var unitZ = new THREE.Vector3( 0, 0, 1 );

	var quaternionXYZ = new THREE.Quaternion();
	var quaternionX = new THREE.Quaternion();
	var quaternionY = new THREE.Quaternion();
	var quaternionZ = new THREE.Quaternion();
	var quaternionE = new THREE.Quaternion();

	var oldPosition = new THREE.Vector3();
	var oldScale = new THREE.Vector3();
	var oldRotationMatrix = new THREE.Matrix4();

	var oldPositions = [];
	var oldScales = [];
	var oldRotationMatrices = [];

	var parentRotationMatrix  = new THREE.Matrix4();
	var parentScale = new THREE.Vector3();

	var parentRotationMatrices = [];
	var parentScales = [];

	var worldPosition = new THREE.Vector3();
	var worldRotation = new THREE.Euler();
	var worldRotationMatrix  = new THREE.Matrix4();
	var camPosition = new THREE.Vector3();
	var camRotation = new THREE.Euler();

	var worldPositions = [];
	var worldRotations = [];
	var worldRotationMatrices = [];	

	var displayAxes = {};
	var pickerAxes = {};
	var intersectionPlanes = {};
	var intersectionPlaneList = ['XY','YZ','XZ','XYZE']; // E
	var currentPlane = 'XY';

	// intersection planes
	{

		var planes = new THREE.Object3D();
		planes.exportType = 'DO_NOT_EXPORT'
		this.gizmo.add(planes);

		for ( var i in intersectionPlaneList ){

			intersectionPlanes[intersectionPlaneList[i]] = new THREE.Mesh( new THREE.PlaneGeometry( 500, 500 ) );
			intersectionPlanes[intersectionPlaneList[i]].material.side = THREE.DoubleSide;
			intersectionPlanes[intersectionPlaneList[i]].visible = false;
			planes.add(intersectionPlanes[intersectionPlaneList[i]]);

		}

		// intersectionPlanes['YZ'].rotation.set( 0, Math.PI/2, 0 );
		// intersectionPlanes['XZ'].rotation.set( -Math.PI/2, 0, 0 );
		intersectionPlanes['YZ'].rotation.set( 0, 90, 0 );
		intersectionPlanes['XZ'].rotation.set( -90, 0, 0 );
		bakeTransformations(intersectionPlanes['YZ']);
		bakeTransformations(intersectionPlanes['XZ']);

	}

	// gizmo geometry
	{

		displayAxes["translate"] = new THREE.Object3D();
		displayAxes["rotate"] = new THREE.Object3D();
		displayAxes["scale"] = new THREE.Object3D();
		this.gizmo.add( displayAxes["translate"] );
		this.gizmo.add( displayAxes["rotate"] );
		this.gizmo.add( displayAxes["scale"] );

		displayAxes["translate"].exportType = 'DO_NOT_EXPORT'
		displayAxes["rotate"].exportType = 'DO_NOT_EXPORT'
		displayAxes["scale"].exportType = 'DO_NOT_EXPORT'

		pickerAxes["translate"] = new THREE.Object3D();
		pickerAxes["rotate"] = new THREE.Object3D();
		pickerAxes["scale"] = new THREE.Object3D();
		this.gizmo.add( pickerAxes["translate"] );
		this.gizmo.add( pickerAxes["rotate"] );
		this.gizmo.add( pickerAxes["scale"] );

		pickerAxes["translate"].exportType = 'DO_NOT_EXPORT'
		pickerAxes["rotate"].exportType = 'DO_NOT_EXPORT'
		pickerAxes["scale"].exportType = 'DO_NOT_EXPORT'

		var HandleMaterial = function ( color, opacity ) {
			var material = new THREE.MeshBasicMaterial();
			material.color = color;
			material.side = THREE.DoubleSide;
			material.depthTest = false;
			material.depthWrite = false;
			material.opacity = opacity !== undefined ? opacity : 1;
			material.transparent = true;
			return material;
		}

		var LineMaterial = function ( color, opacity ) {
			var material = new THREE.LineBasicMaterial();
			material.color = color;
			material.depthTest = false;
			material.depthWrite = false;
			material.opacity = opacity !== undefined ? opacity : 1;
			material.transparent = true;
			return material;
		}

		// materials by color
		var white = new THREE.Color( 0xffffff );
		var gray = new THREE.Color( 0x808080 );
		var red = new THREE.Color( 0xff0000 );
		var green = new THREE.Color( 0x00ff00 );
		var blue = new THREE.Color( 0x0000ff );
		var cyan = new THREE.Color( 0x00ffff );
		var magenta = new THREE.Color( 0xff00ff );
		var yellow = new THREE.Color( 0xffff00 );

		var geometry, material, mesh;

		// Line axes
		geometry = new THREE.Geometry();
		geometry.vertices.push(
			new THREE.Vector3( 0, 0, 0 ), new THREE.Vector3( 1, 0, 0 ),
			new THREE.Vector3( 0, 0, 0 ), new THREE.Vector3( 0, 1, 0 ),
			new THREE.Vector3( 0, 0, 0 ), new THREE.Vector3( 0, 0, 1 )
		);
		geometry.colors.push(
			red, red, green, green, blue, blue
		);
		material = new THREE.LineBasicMaterial( {
			vertexColors: THREE.VertexColors,
			depthTest: false,
			depthWrite: false,
			transparent: true
		} );
		mesh = new THREE.Line( geometry, material, THREE.LinePieces );
		displayAxes['translate'].add( mesh );
		displayAxes['scale'].add( mesh.clone() );

		// Translate handles

		mesh = new THREE.Mesh( new THREE.OctahedronGeometry( 0.1, 0 ), HandleMaterial( white, 0.25 ) );
		mesh.name = 'TXYZ';
		displayAxes['translate'].add( mesh );
		pickerAxes['translate'].add( mesh.clone() );

		geometry = new THREE.PlaneGeometry( 0.5, 0.5 );

		mesh = new THREE.Mesh( geometry, HandleMaterial( yellow, 0.25 ) );
		mesh.position.set( 0.25, 0.25, 0 );
		bakeTransformations( mesh );
		mesh.name = 'TXY';
		displayAxes['translate'].add( mesh );
		pickerAxes['translate'].add( mesh.clone() );

		mesh = new THREE.Mesh( geometry, HandleMaterial( cyan, 0.25 ) );
		mesh.position.set( 0, 0.25, 0.25 );
		// mesh.rotation.y = Math.PI/2;
		mesh.rotation.y = 90;
		bakeTransformations( mesh );
		mesh.name = 'TYZ';
		displayAxes['translate'].add( mesh );
		pickerAxes['translate'].add( mesh.clone() );

		mesh = new THREE.Mesh( geometry, HandleMaterial( magenta, 0.25 ) );
		mesh.position.set( 0.25, 0, 0.25 );
		// mesh.rotation.x = Math.PI/2;
		mesh.rotation.x = 90;
		bakeTransformations( mesh );
		mesh.name = 'TXZ';
		displayAxes['translate'].add( mesh );
		pickerAxes['translate'].add( mesh.clone() );

		geometry = new THREE.CylinderGeometry( 0, 0.05, 0.2, 4, 1, true );

		mesh = new THREE.Mesh( geometry, HandleMaterial( red ) );
		mesh.position.x = 1.1;
		// mesh.rotation.z = -Math.PI/2;
		mesh.rotation.z = -90;
		bakeTransformations( mesh );
		mesh.name = 'TX';
		displayAxes['translate'].add( mesh );

		mesh = new THREE.Mesh( geometry, HandleMaterial( green ) );
		mesh.position.y = 1.1;
		bakeTransformations( mesh );
		mesh.name = 'TY';
		displayAxes['translate'].add( mesh );

		mesh = new THREE.Mesh( geometry, HandleMaterial( blue ) );
		mesh.position.z = 1.1;
		// mesh.rotation.x = Math.PI/2;
		mesh.rotation.x = 90;
		bakeTransformations( mesh );
		mesh.name = 'TZ';
		displayAxes['translate'].add( mesh );

		geometry = new THREE.CylinderGeometry( 0.2, 0.1, 0.8, 4, 1, false );

		mesh = new THREE.Mesh( geometry, HandleMaterial( red ) );
		mesh.position.x = 0.7;
		// mesh.rotation.z = -Math.PI/2;
		mesh.rotation.z = -90;
		bakeTransformations( mesh );
		mesh.name = 'TX';
		pickerAxes['translate'].add( mesh );

		mesh = new THREE.Mesh( geometry, HandleMaterial( green ) );
		mesh.position.y = 0.7;
		bakeTransformations( mesh );
		mesh.name = 'TY';
		pickerAxes['translate'].add( mesh );

		mesh = new THREE.Mesh( geometry, HandleMaterial( blue ) );
		mesh.position.z = 0.7;
		// mesh.rotation.x = Math.PI/2;
		mesh.rotation.x = 90;
		bakeTransformations( mesh );
		mesh.name = 'TZ';
		pickerAxes['translate'].add( mesh );

		// scale manipulators

		geometry = new THREE.CubeGeometry( 0.125, 0.125, 0.125 );

		mesh = new THREE.Mesh( geometry, HandleMaterial( white, 0.25 ) );
		mesh.name = 'SXYZ';
		displayAxes['scale'].add( mesh );
		pickerAxes['scale'].add( mesh.clone() );

		mesh = new THREE.Mesh( geometry, HandleMaterial( red ) );
		mesh.position.set( 1.05, 0, 0 );
		bakeTransformations( mesh );
		mesh.name = 'SX';
		displayAxes['scale'].add( mesh );
		pickerAxes['scale'].add( mesh.clone() );

		mesh = new THREE.Mesh( geometry, HandleMaterial( green ) );
		mesh.position.set( 0, 1.05, 0 );
		bakeTransformations( mesh );
		mesh.name = 'SY';
		displayAxes['scale'].add( mesh );
		pickerAxes['scale'].add( mesh.clone() );

		mesh = new THREE.Mesh( geometry, HandleMaterial( blue ) );
		mesh.position.set( 0, 0, 1.05 );
		bakeTransformations( mesh );
		mesh.name = 'SZ';
		displayAxes['scale'].add( mesh );
		pickerAxes['scale'].add( mesh.clone() );

		// rotate manipulators

		var Circle = function ( radius, facing, arc ) {

			geometry = new THREE.Geometry();
			arc = arc ? arc : 1;
			for ( var i = 0; i <= 64 * arc; ++i ) {
				if ( facing == 'x' ) geometry.vertices.push( new THREE.Vector3( 0, Math.cos( i / 32 * Math.PI ), Math.sin( i / 32 * Math.PI ) ).multiplyScalar(radius) );
				if ( facing == 'y' ) geometry.vertices.push( new THREE.Vector3( Math.cos( i / 32 * Math.PI ), 0, Math.sin( i / 32 * Math.PI ) ).multiplyScalar(radius) );
				if ( facing == 'z' ) geometry.vertices.push( new THREE.Vector3( Math.sin( i / 32 * Math.PI ), Math.cos( i / 32 * Math.PI ), 0 ).multiplyScalar(radius) );
			}

			return geometry;
		}

		mesh = new THREE.Line( Circle( 1, 'x', 0.5 ), LineMaterial( red ) );
		mesh.name = 'RX';
		displayAxes['rotate'].add( mesh );

		mesh = new THREE.Line( Circle( 1, 'y', 0.5 ), LineMaterial( green ) );
		mesh.name = 'RY';
		displayAxes['rotate'].add( mesh );

		mesh = new THREE.Line( Circle( 1, 'z', 0.5 ), LineMaterial( blue ) );
		mesh.name = 'RZ';
		displayAxes['rotate'].add( mesh );

		mesh = new THREE.Line( Circle( 1, 'z' ), LineMaterial( gray ) );
		mesh.name = 'RXYZE';
		displayAxes['rotate'].add( mesh );

		mesh = new THREE.Line( Circle( 1.25, 'z' ), LineMaterial( yellow, 0.25 ) );
		mesh.name = 'RE';
		displayAxes['rotate'].add( mesh );

		geometry = new THREE.TorusGeometry( 1, 0.15, 4, 6, Math.PI );

		mesh = new THREE.Mesh( geometry, HandleMaterial( red ) );
		// mesh.rotation.z = -Math.PI/2;
		// mesh.rotation.y = -Math.PI/2;
		mesh.rotation.z = -90;
		mesh.rotation.y = -90;
		bakeTransformations( mesh );
		mesh.name = 'RX';
		pickerAxes['rotate'].add( mesh );

		mesh = new THREE.Mesh( geometry, HandleMaterial( green ) );
		// mesh.rotation.z = Math.PI;
		// mesh.rotation.x = -Math.PI/2;
		mesh.rotation.z = 90;
		mesh.rotation.x = -90;
		bakeTransformations( mesh );
		mesh.name = 'RY';
		pickerAxes['rotate'].add( mesh );

		mesh = new THREE.Mesh( geometry, HandleMaterial( blue ) );
		// mesh.rotation.z = -Math.PI/2;
		mesh.rotation.z = -90;
		bakeTransformations( mesh );
		mesh.name = 'RZ';
		pickerAxes['rotate'].add( mesh );

		mesh = new THREE.Mesh( new THREE.SphereGeometry( 0.95, 12, 12 ), HandleMaterial( white, 0.25 ) );
		mesh.name = 'RXYZE';
		pickerAxes['rotate'].add( mesh );

		intersectionPlanes['SPHERE'] = new THREE.Mesh( new THREE.SphereGeometry( 0.95, 12, 12 ) );
		intersectionPlanes['SPHERE'].visible = false;
		planes.add(intersectionPlanes['SPHERE']);

		mesh = new THREE.Mesh( new THREE.TorusGeometry( 1.30, 0.15, 4, 12 ), HandleMaterial( yellow, 0.25 ) );
		mesh.name = 'RE';
		pickerAxes['rotate'].add( mesh );

		mesh = null;

	}

	this.attach = function ( object ) {

		this.object = object;
	 	this.setMode( scope.mode );
	 	this.enabled = true

		this.domElement.addEventListener( 'mousedown', onMouseDown, false );
		this.domElement.addEventListener( 'mousemove', onMouseHover, false );
		// this.document.addEventListener( 'keydown', onKeyDown, false );

	}

	this.multiAttach = function( objects ){
		// console.log('TransformControls: multiAttach', objects)
		// console.log('\tdom', this.domElement)

		this.objects = objects;
	 	this.setMode( scope.mode );
	 	this.enabled = true;

		this.domElement.addEventListener( 'mousedown', onMouseDown, false );
		this.domElement.addEventListener( 'mousemove', onMouseHover, false );
		// this.document.addEventListener( 'keydown', onKeyDown, false );
	}

	this.detach = function ( object ) {
		// console.log('TransformControls: detach')

		this.object = undefined;
		this.objects = undefined;
		this.hovered = false;
		this.enabled = false

	 	this.hide();

		this.domElement.removeEventListener( 'mousedown', onMouseDown, false );
		this.domElement.removeEventListener( 'mousemove', onMouseHover, false );
		// this.document.removeEventListener( 'keydown', onKeyDown, false );

	}

	this.changeAttach = function( camera, domElement ){
		// console.log('TransformControls: changeAttach')

		if( this.objects === undefined )
			return;

		if( camera === this.camera && domElement === this.domElement )
			return;		
		
	//	remove events
		// console.log('\tremoving events')
		this.domElement.removeEventListener( 'mousedown', onMouseDown, false );
		this.domElement.removeEventListener( 'mousemove', onMouseHover, false );
		
	//	add new events
		this.camera = camera;
		this.domElement = domElement;

		// console.log('\tadding events')
		this.domElement.addEventListener( 'mousedown', onMouseDown, false );
		this.domElement.addEventListener( 'mousemove', onMouseHover, false );
	}

	this.update = function () {
		console.log('TransformControls: update')
		// console.log('\tcamera', this.camera)

	//	SINGLE SELECTION
		// if ( this.object === undefined ){
		// 	return;
		// }
		// console.log('\tobject', this.object)
	
	//	MULTI SELECTION
		if ( this.objects === undefined || this.objects.length === 0 ){
			// console.log('\tNo objects to affect.')
			return;
		}		
		// console.log('\tobjects', this.objects)

		var objectToUse = []
		if( this.object !== undefined ){
			objectToUse.push( object )
		}
		if( this.objects !== undefined ){
			var indexToUse = this.objects.length-1;
			objectToUse = this.objects[indexToUse];
		}

		// console.log('\tupdating using', objectToUse)

		objectToUse.updateMatrixWorld();
		worldPosition.getPositionFromMatrix( objectToUse.matrixWorld );
		worldRotation.setFromRotationMatrix( tempMatrix.extractRotation( objectToUse.matrixWorld ) );

		this.camera.updateMatrixWorld();
		camPosition.getPositionFromMatrix( this.camera.matrixWorld );
		camRotation.setFromRotationMatrix( tempMatrix.extractRotation( this.camera.matrixWorld ) );

		if( this.camera instanceof THREE.PerspectiveCamera){
			//	the closer the camera is to the object, the smaller the scale			
			scale = worldPosition.distanceTo( camPosition ) / 6 * this.scale;	
		}else{
			scale = (60 * (1 / this.camera.zoom )) * this.scale;
			// console.log('\tzoom', this.camera.zoom)
			// console.log('\t1 over', (1/this.camera.zoom))
			// console.log('\tscale', this.scale)
		}
		this.gizmo.position.copy( worldPosition )

		// console.log('\tsetting gizmo scale to', scale)

		this.gizmo.scale.set( scale, scale, scale );

		for ( var i in this.gizmo.children ) {

			for ( var j in this.gizmo.children[i].children ) {

				var object = this.gizmo.children[i].children[j];
				var name = object.name;

				if ( name.search('E') != -1 ){
					// console.log('\tE')

					lookAtMatrix.lookAt( camPosition, worldPosition, tempVector.set( 0, 1, 0 ));
					object.rotation.setFromRotationMatrix( lookAtMatrix );

				} else {

					eye.copy( camPosition ).sub( worldPosition ).normalize();

					if ( this.space == 'local' ) {

						tempQuaternion.setFromEuler( worldRotation );

						if ( name.search('R') != -1 ){

							tempMatrix.makeRotationFromQuaternion( tempQuaternion ).getInverse( tempMatrix );
							eye.applyProjection( tempMatrix );

							if ( name == 'RX' ) {
								quaternionX.setFromAxisAngle( unitX, Math.atan2( -eye.y, eye.z ) * THREE.Math.rad);
								tempQuaternion.multiplyQuaternions( tempQuaternion, quaternionX );
							}

							if ( name == 'RY' ) {
								quaternionY.setFromAxisAngle( unitY, Math.atan2( eye.x, eye.z ) * THREE.Math.rad);
								tempQuaternion.multiplyQuaternions( tempQuaternion, quaternionY );
							}

							if ( name == 'RZ' ) {
								quaternionZ.setFromAxisAngle( unitZ, Math.atan2( eye.y, eye.x ) * THREE.Math.rad);
								tempQuaternion.multiplyQuaternions( tempQuaternion, quaternionZ );
							}

						}

						object.quaternion.copy( tempQuaternion );

					} else if ( this.space == 'world' ) {						
						object.rotation.set( 0, 0, 0 );
						// if ( name == 'RX' ) object.rotation.x = Math.atan2( -eye.y, eye.z );
						// if ( name == 'RY' ) object.rotation.y = Math.atan2(  eye.x, eye.z );
						// if ( name == 'RZ' ) object.rotation.z = Math.atan2(  eye.y, eye.x );

						if ( name == 'RX' ) object.rotation.x = Math.atan2( -eye.y, eye.z ) * THREE.Math.rad;
						if ( name == 'RY' ) object.rotation.y = Math.atan2(  eye.x, eye.z ) * THREE.Math.rad;
						if ( name == 'RZ' ) object.rotation.z = Math.atan2(  eye.y, eye.x ) * THREE.Math.rad;

					}

				}

			}

		}

	}


	this.show = function () {

		for ( var i in displayAxes ) {

			for ( var j in displayAxes[i].children ) {

				displayAxes[i].children[j].visible = true;

			}

		}

		for ( var i in pickerAxes ) {

			for ( var j in pickerAxes[i].children ) {

				pickerAxes[i].children[j].visible = true;

			}

		}

	}


	this.hide = function () {

		for ( var i in displayAxes ) {

			for ( var j in displayAxes[i].children ) {

				displayAxes[i].children[j].visible = false;

			}

		}

		for ( var i in pickerAxes ) {

			for ( var j in pickerAxes[i].children ) {

				pickerAxes[i].children[j].visible = false;

			}

		}

	}

	this.setSpace = function( value ){
		// console.log('TransformControls: setSpace', value)
		scope.space = value
		scope.setMode( scope.mode)
	}

	this.setMode = function ( value ) {
		// console.log('TransformControls: setMode', value)
		// console.log('\tobject', this.object)
		// console.log('\tobjects', this.objects)
		
		//	Toggle space
		// if(scope.mode === value){
		// 	if(scope.space === 'local'){
		// 		scope.space = 'world'
		// 	}else{
		// 		scope.space = 'local'
		// 	}
		// }

		scope.mode = value;

		//	hide all display axes ( scale, rotate and translate )
		this.hide();

		var objectToUse;
		if( this.object !== undefined ){
			objectToUse = this.object;
		}

		if( this.objects !== undefined && this.objects.length !== 0 ){
			// console.log('\tusing objects')
			var indexToUse = this.objects.length-1;
			objectToUse = this.objects[indexToUse];
		}

		if( value === 'select'){
			
		}else{
			// console.log('\tObject to use', objectToUse)

			var animChannels;
			if( objectToUse !== undefined ){
				switch( value ){
					case 'translate': 
					animChannels = objectToUse.getChannelsFromGroup('position'); 
					break;
					
					case 'rotate': 
					animChannels = objectToUse.getChannelsFromGroup('rotation'); 
					break;
					
					case 'scale': 
					animChannels = objectToUse.getChannelsFromGroup('scale');
					break;
				}

				if ( scope.mode == 'scale' ) scope.space = 'local';

				var name, axis;
				for ( var i in displayAxes[this.mode].children ) {
					//	only show the axes that are animatable
					name = displayAxes[this.mode].children[i].name				
					if( THREE.containsElementFromArray(name.toLowerCase(), animChannels) === true ){
						displayAxes[this.mode].children[i].visible = true;
					}
				}

				for ( var i in pickerAxes[this.mode].children ) {
					pickerAxes[this.mode].children[i].visible = showPickers;

				}
			}
		}

		scope.update();

	}

	this.setIntersectionPlane = function () {
		console.log('TransformControls: setIntersectionPlane')
		console.log('\tusing', scope.objects)
		// console.log('\teye before:', eye)
		// console.log('\tplane before:', currentPlane)
		// console.log('\tactive:', this.active)
		// console.log('\tcamera position:', camPosition)	
		// console.log('\tworldPosition:', worldPosition)

		eye.copy( camPosition ).sub( worldPosition ).normalize();

		// console.log('\teye after:', eye)

		if ( this.space == 'local' ) {

			eye.applyMatrix4( tempMatrix.getInverse( scope.objects[0].matrixWorld ) );

		}		

		if ( isActive("X") ) {

			if ( eye.y > eye.z ) currentPlane = 'XZ';
			else currentPlane = 'XY';

		}

		if ( isActive("Y") ) {

			if ( eye.x > eye.z ) currentPlane = 'YZ';
			else currentPlane = 'XY';

		}

		if ( isActive("Z") ) {

			if ( eye.x > eye.y ) currentPlane = 'YZ';
			else currentPlane = 'XZ';

		}

		if ( isActive("XY") ) {

			currentPlane = 'XY';

		}

		if ( isActive("YZ") ) {

			currentPlane = 'YZ';

		}

		if ( isActive("XZ") ) {

			currentPlane = 'XZ';

		}

		if ( isActive("XYZ") || isActive("E") ) {

			currentPlane = 'XYZE';

		}

	 	if ( isActive("RX") ) {

			currentPlane = 'YZ';

		}

		if ( isActive("RY") ) {

			currentPlane = 'XZ';

		} 

		if ( isActive("RZ") ) {

			currentPlane = 'XY';

		}

		if ( isActive("RXYZ") ) {

			currentPlane = 'SPHERE';

		}

		if ( scope.camera.name === 'front' ){
			currentPlane = 'XY';
		}

		if ( scope.camera.name === 'side'){
			currentPlane = 'YZ'
		}

		if ( scope.camera.name === 'top'){
			currentPlane = 'XZ'
		}
	}

	var hovered = null;
	var hoveredColor = new THREE.Color();
	var hoveredOpacity = 1;

	function onMouseHover( event ) {
		// console.log('TransformControls: onMouseHover')

		if(event.altKey === true){
			console.log('\talt pressed')
			return;
		}

		if(scope.mode === 'select'){
			// console.log('\tSelect mode. Nothing to do.')
			return;
		}

		event.preventDefault();

		// console.log('\tevent button:', event.button)
		// console.log('\tscope active:', scope.active)

		if ( event.button === 0 && scope.active === false ) {


			// console.log('\tcamera:', scope.camera)

			var intersect = intersectObjects( event, pickerAxes[scope.mode].children );

			if ( intersect ) {
				// console.log('\tintersecting', intersect)
				// console.log('\thovered', hovered)

				if ( hovered !== intersect.object ) {

					if ( hovered !== null ) {

						hovered.material.color.copy( hoveredColor );
						hovered.material.opacity = hoveredOpacity;

					}

					hovered = intersect.object;
					hoveredColor.copy( hovered.material.color );
					hoveredOpacity = hovered.material.opacity;

					hovered.material.color.setRGB( 1, 1, 0 );
					hovered.material.opacity = 1;

					scope.dispatchEvent( changeEvent );

				}

				scope.hovered = true;

			} else if ( hovered !== null ) {				
				// console.log('\tresetting display')
				hovered.material.color.copy( hoveredColor );
				hovered.material.opacity = hoveredOpacity;

				hovered = null;

				scope.dispatchEvent( changeEvent );

				scope.hovered = false;

			} else {
				// console.log('\tnot intersecting')
			}

		}

		scope.document.addEventListener( 'mousemove', onMouseMove, false );
		scope.document.addEventListener( 'mouseup', onMouseUp, false );

	};

	function onMouseDown( event ) {
		// console.log('TransformControls: onMouseDown')
		// console.log('\tmode', scope.mode)
		// console.log('\tspace', scope.space)

		if( scope.space !== 'local' && scope.space !== 'world'){			
			// alert('TransformControls: somebody is overwriting .space as a method... fix me... boem')
			scope.space = 'local';
		}

		event.preventDefault();

		var i, j;
		if ( event.button === 0 && scope.mode !== 'select') {

			var intersect = intersectObjects( event, pickerAxes[scope.mode].children );
			// console.log('\tintersect', intersect)
			if ( intersect ) {

				scope.active = intersect.object.name;
				// console.log('\t\tactive', intersect.object.name)

				scope.update();
				scope.setIntersectionPlane();

				// console.log('\t\tcurrent plane:', currentPlane)
				// console.log('\t\tintersection planes:', [intersectionPlanes[currentPlane]])
				var planeIntersect = intersectObjects( event, [intersectionPlanes[currentPlane]] );
				// console.log('\t\tplane intersect:', planeIntersect)
				
				var objectToUse;

			// //	SINGLE SELECTION
			// 	if( scope.object !== undefined ){
			// 		objectToUse = scope.object;
			// 	}

			//	MULTI SELECTION
				var indexToUse;
				if( scope.objects !== undefined && scope.objects.length !== 0 ){
					indexToUse = scope.objects.length-1;
					objectToUse = scope.objects[indexToUse];					 
				}

				if ( planeIntersect ) {
					// console.log('\t\t\tintersect', planeIntersect)

				//	SINGLE SELECTION
					oldPosition.copy( objectToUse.position );
					oldScale.copy( objectToUse.scale );
					oldRotationMatrix.extractRotation( objectToUse.matrix );
			
					worldRotationMatrix.extractRotation( objectToUse.matrixWorld );

					parentRotationMatrix.extractRotation( objectToUse.parent.matrixWorld );
					parentScale.getScaleFromMatrix( tempMatrix.getInverse( objectToUse.parent.matrixWorld ) );

					offset.copy( planeIntersect.point );

					// console.log('\t\t\toffset', offset)

				//	MULTI SELECTION
					oldPositions = []
					oldScales = []
					oldRotationMatrices = []
					worldRotationMatrices = []
					parentRotationMatrices = []
					parentScales = []
					for(i=0, j=scope.objects.length; i < j; i++){
						oldPositions.push( new THREE.Vector3().copy(scope.objects[i].position));
						oldScales.push( new THREE.Vector3().copy(scope.objects[i].scale));
						
						oldRotationMatrices.push( new THREE.Matrix4().extractRotation( scope.objects[i].matrix ) );
						worldRotationMatrices.push( new THREE.Matrix4().extractRotation( scope.objects[i].matrixWorld));

						parentRotationMatrices.push( new THREE.Matrix4().extractRotation( scope.objects[i].parent.matrixWorld))
						parentScales.push( new THREE.Vector3().getScaleFromMatrix( tempMatrix.getInverse( scope.objects[i].parent.matrixWorld)))
					}

				}

			}

		}
		scope.document.addEventListener( 'mousemove', onMouseMove, false );
		scope.document.addEventListener( 'mouseup', onMouseUp, false );

		scope.isMoving = false;
	};

	function onMouseMove( event ) {

		if( event.altKey === true ){
			return
		}

		// console.log('----------------')
		// console.log('TransformControls.onMouseMove')
		// console.log('\tisMoving', scope.isMoving)
		// console.log('\tisActive', scope.active)
		if ( scope.active ) {
			// console.log('\tactive')
			// console.log('\tactive panel:', currentPlane)
			// 
			if( scope.isMoving === false ){
				// console.log('\tstart moving manipulator')
				scope.dispatchEvent( startEvent );
			}

			var planeIntersect = intersectObjects( event, [intersectionPlanes[currentPlane]] );

			if ( planeIntersect ) {
				// console.log('\tintersect', planeIntersect)

				point.copy( planeIntersect.point );

				var objectsToUse = [];

			//	SINGLE SELECTION
				if( scope.object !== undefined ){
					objectsToUse.push( scope.object )
				}

			//	MULTI SELECTION
				var indexToUse;
				if( scope.objects !== undefined || scope.objects.length !== 0 ){					
					objectsToUse = scope.objects;
					indexToUse = objectsToUse.length-1;
				}

				// console.log('\tobjectToUse', objectsToUse)

				var i, j;
				if ( ( scope.mode == 'translate' ) && isActive("T")){
					point.sub( offset );
					point.multiply(parentScale);

					if ( scope.space == 'local' ) {
						// console.log('\tlocal translate')
						point.applyMatrix4( tempMatrix.getInverse( worldRotationMatrix ) );

						if ( !(isActive("X")) || scope.modifierAxis.x != 1 ) point.x = 0;
						if ( !(isActive("Y")) || scope.modifierAxis.y != 1 ) point.y = 0;
						if ( !(isActive("Z")) || scope.modifierAxis.z != 1 ) point.z = 0;
						if ( isActive("XYZ") ) point.set( 0, 0, 0 );

						point.applyMatrix4( oldRotationMatrix );

						//	get the transformation of the object we're manipulating
						var oPos = new THREE.Vector3().copy( objectsToUse[indexToUse].position );
						if( objectsToUse[indexToUse].hasChannelGroup("position") ){
							objectsToUse[indexToUse].position.copy( oldPosition );
							objectsToUse[indexToUse].position.add( point );
						}
						var nPos = new THREE.Vector3().copy( objectsToUse[indexToUse].position );
						var dPos = new THREE.Vector3().subVectors( nPos, oPos )

						// console.log('\tvector', dPos.x, dPos.y, dPos.z)

						//	now apply the transformation on all other selected objects
						if( objectsToUse.length > 1){
							for( i = 0, j = objectsToUse.length-1; i < j; i++){
								objectsToUse[i].position.add( dPos );	
							}
						}
					} 					

					if ( scope.space == 'world' || isActive("XYZ") ) {
						// console.log('\tworld translate')

						if ( !(isActive("X")) || scope.modifierAxis.x != 1 ) point.x = 0;
						if ( !(isActive("Y")) || scope.modifierAxis.y != 1 ) point.y = 0;
						if ( !(isActive("Z")) || scope.modifierAxis.z != 1 ) point.z = 0;

						point.applyMatrix4( tempMatrix.getInverse( parentRotationMatrix ) );

						var oPos = new THREE.Vector3().copy( objectsToUse[indexToUse].position );
						objectsToUse[indexToUse].position.copy( oldPosition );
						objectsToUse[indexToUse].position.add( point );
						if ( scope.snapDist ) {
							if ( isActive("X") ) objectsToUse[indexToUse].position.x = Math.round( objectsToUse[i].position.x / scope.snapDist ) * scope.snapDist;
							if ( isActive("Y") ) objectsToUse[indexToUse].position.y = Math.round( objectsToUse[i].position.y / scope.snapDist ) * scope.snapDist;
							if ( isActive("Z") ) objectsToUse[indexToUse].position.z = Math.round( objectsToUse[i].position.z / scope.snapDist ) * scope.snapDist;
						}
						var nPos = new THREE.Vector3().copy( objectsToUse[indexToUse].position );
						var dPos = new THREE.Vector3().subVectors( nPos, oPos )

						if( objectsToUse.length > 1){
							for( i = 0, j = objectsToUse.length-1; i < j; i++){
								objectsToUse[i].position.add( dPos );	
							}
						}
					}
				} else if ( ( scope.mode == 'rotate' ) && isActive("R") ){
					// console.log('\tRotate')

					point.sub( worldPosition );
					point.multiply(parentScale);
					tempVector.copy(offset).sub( worldPosition );
					tempVector.multiply(parentScale);

					if ( scope.active == "RE" ) {
						console.log('\t\tRE')

						point.applyMatrix4( tempMatrix.getInverse( lookAtMatrix ) );
						tempVector.applyMatrix4( tempMatrix.getInverse( lookAtMatrix ) );

						rotation.set( Math.atan2( point.z, point.y ) * THREE.Math.rad, 
							Math.atan2( point.x, point.z ) * THREE.Math.rad, 
							Math.atan2( point.y, point.x ) * THREE.Math.rad);
						
						offsetRotation.set( Math.atan2( tempVector.z, tempVector.y ) * THREE.Math.rad, 
							Math.atan2( tempVector.x, tempVector.z ) * THREE.Math.rad, 
							Math.atan2( tempVector.y, tempVector.x ) * THREE.Math.rad);

						tempQuaternion.setFromRotationMatrix( tempMatrix.getInverse( parentRotationMatrix ) );

						quaternionE.setFromAxisAngle( eye, rotation.z - offsetRotation.z );
						quaternionXYZ.setFromRotationMatrix( worldRotationMatrix );

						tempQuaternion.multiplyQuaternions( tempQuaternion, quaternionE );
						tempQuaternion.multiplyQuaternions( tempQuaternion, quaternionXYZ );

						// objectsToUse[i].quaternion.copy( tempQuaternion );
						for( i = 0, j = objectsToUse.length; i < j; i++){
							if( objectsToUse[i].hasChannelGroup("rotation")){
								objectsToUse[i].rotation.offsetUsingQuaternion( tempQuaternion );
							}
						}

					} else if ( scope.active == "RXYZE" ) {
						// console.log('\t\tRXYZE')

						// console.log( 'test ', point.clone().cross(tempVector).normalize())

						var temp = point.clone().cross(tempVector).normalize()
						var tempEuler = new THREE.Euler( temp.x * THREE.Math.rad, temp.y * THREE.Math.rad, temp.z * THREE.Math.rad)
						quaternionE.setFromEuler( tempEuler ); // rotation axis

						tempQuaternion.setFromRotationMatrix( tempMatrix.getInverse( parentRotationMatrix ) );
						quaternionX.setFromAxisAngle( quaternionE, - point.clone().angleTo(tempVector) * THREE.Math.rad);
						quaternionXYZ.setFromRotationMatrix( worldRotationMatrix );

						tempQuaternion.multiplyQuaternions( tempQuaternion, quaternionX );
						tempQuaternion.multiplyQuaternions( tempQuaternion, quaternionXYZ );

						// objectsToUse[i].quaternion.copy( tempQuaternion );
						for( i = 0, j = objectsToUse.length; i < j; i++){
							if( objectsToUse[i].hasChannelGroup("rotation")){
								console.log('\toffseting rotation on ', objectsToUse[i])
								objectsToUse[i].rotation.offsetUsingQuaternion( tempQuaternion );
							}
						}

					} else if ( scope.space == 'local' ) {

						point.applyMatrix4( tempMatrix.getInverse( worldRotationMatrix ) );

						tempVector.applyMatrix4( tempMatrix.getInverse( worldRotationMatrix ) );

						rotation.set( Math.atan2( point.z, point.y ) * THREE.Math.rad, 
							Math.atan2( point.x, point.z ) * THREE.Math.rad, 
							Math.atan2( point.y, point.x ) * THREE.Math.rad);
						
						offsetRotation.set( Math.atan2( tempVector.z, tempVector.y ) * THREE.Math.rad, 
							Math.atan2( tempVector.x, tempVector.z ) * THREE.Math.rad, 
							Math.atan2( tempVector.y, tempVector.x ) * THREE.Math.rad);

						quaternionXYZ.setFromRotationMatrix( oldRotationMatrix );
						quaternionX.setFromAxisAngle( unitX, rotation.x - offsetRotation.x );
						quaternionY.setFromAxisAngle( unitY, rotation.y - offsetRotation.y );
						quaternionZ.setFromAxisAngle( unitZ, rotation.z - offsetRotation.z );

						if ( scope.active == "RX" ) quaternionXYZ.multiplyQuaternions( quaternionXYZ, quaternionX );
						if ( scope.active == "RY" ) quaternionXYZ.multiplyQuaternions( quaternionXYZ, quaternionY );
						if ( scope.active == "RZ" ) quaternionXYZ.multiplyQuaternions( quaternionXYZ, quaternionZ );

						var oRot = new THREE.Vector3( objectsToUse[indexToUse].rotation.x, 
							objectsToUse[indexToUse].rotation.y, objectsToUse[indexToUse].rotation.z );
						if( objectsToUse[indexToUse].hasChannelGroup("rotation")){
							objectsToUse[indexToUse].rotation.offsetUsingQuaternion( quaternionXYZ );	
						}
						var nRot = new THREE.Vector3( objectsToUse[indexToUse].rotation.x, 
							objectsToUse[indexToUse].rotation.y, objectsToUse[indexToUse].rotation.z );
						var dRot = new THREE.Vector3().subVectors( nRot, oRot )

						// console.log('\tdrot', dRot.x, dRot.y, dRot.z)

						if( objectsToUse.length > 1){
							for( i = 0, j = objectsToUse.length-1; i < j; i++){
								if( objectsToUse[i].hasChannelGroup("rotation") ){
									objectsToUse[i].rotation.x = objectsToUse[i].rotation.x + dRot.x;
									objectsToUse[i].rotation.y = objectsToUse[i].rotation.y + dRot.y;
									objectsToUse[i].rotation.z = objectsToUse[i].rotation.z + dRot.z;
								}
							}
						}

					} else if ( scope.space == 'world' ) {

						rotation.set( Math.atan2( point.z, point.y ) * THREE.Math.rad, 
							Math.atan2( point.x, point.z ) * THREE.Math.rad, 
							Math.atan2( point.y, point.x ) * THREE.Math.rad);
						offsetRotation.set( Math.atan2( tempVector.z, tempVector.y ) * THREE.Math.rad, 
							Math.atan2( tempVector.x, tempVector.z ) * THREE.Math.rad, 
							Math.atan2( tempVector.y, tempVector.x ) * THREE.Math.rad);

						// tempQuaternion.setFromRotationMatrix( tempMatrix.getInverse( parentRotationMatrix ) );

						// quaternionX.setFromAxisAngle( unitX, rotation.x - offsetRotation.x );
						// quaternionY.setFromAxisAngle( unitY, rotation.y - offsetRotation.y );
						// quaternionZ.setFromAxisAngle( unitZ, rotation.z - offsetRotation.z );
						
						// quaternionXYZ.setFromRotationMatrix( worldRotationMatrix );

						// if ( scope.active == "RX" ) tempQuaternion.multiplyQuaternions( tempQuaternion, quaternionX );
						// if ( scope.active == "RY" ) tempQuaternion.multiplyQuaternions( tempQuaternion, quaternionY );
						// if ( scope.active == "RZ" ) tempQuaternion.multiplyQuaternions( tempQuaternion, quaternionZ );

						// tempQuaternion.multiplyQuaternions( tempQuaternion, quaternionXYZ );

						// objectsToUse[i].quaternion.copy( tempQuaternion );
						for( i = 0, j = objectsToUse.length; i < j; i++){
							if( objectsToUse[i].hasChannelGroup("rotation")){
								// tempQuaternion.setFromRotationMatrix( tempMatrix.getInverse( parentRotationMatrix ) );	
								tempQuaternion.setFromRotationMatrix( tempMatrix.getInverse( parentRotationMatrices[i] ) );	
								
								// console.log('\t org pr:', i, parentRotationMatrix.elements)
								// console.log('\t new pr:', i, parentRotationMatrices[i].elements)
								
								quaternionX.setFromAxisAngle( unitX, rotation.x - offsetRotation.x );
								quaternionY.setFromAxisAngle( unitY, rotation.y - offsetRotation.y );
								quaternionZ.setFromAxisAngle( unitZ, rotation.z - offsetRotation.z );

								// quaternionXYZ.setFromRotationMatrix( worldRotationMatrix );
								quaternionXYZ.setFromRotationMatrix( worldRotationMatrices[i] );

								// console.log('\t org wr:', i, worldRotationMatrix.elements)
								// console.log('\t new wr:', i, worldRotationMatrices[i].elements)

								if ( scope.active == "RX" ) tempQuaternion.multiplyQuaternions( tempQuaternion, quaternionX );
								if ( scope.active == "RY" ) tempQuaternion.multiplyQuaternions( tempQuaternion, quaternionY );
								if ( scope.active == "RZ" ) tempQuaternion.multiplyQuaternions( tempQuaternion, quaternionZ );
								
								tempQuaternion.multiplyQuaternions( tempQuaternion, quaternionXYZ );							
								objectsToUse[i].rotation.offsetUsingQuaternion( tempQuaternion );					
							}
						}
					}
				// }
				} else if ( ( scope.mode == 'scale') && isActive("S") ) {
					// console.log('\tScale')

					point.sub( offset );
					point.multiply(parentScale);

					if ( scope.space == 'local' ) {
						// console.log('\t\tLocal')
						if ( isActive("XYZ")) {
							// console.log('\t\t\tXYZ')

							scale = 1 + ( ( point.y ) / 50 );

							// console.log('\t\t\tscale value:', scale)

							var oScale = new THREE.Vector3().copy( objectsToUse[indexToUse].scale );
							if( objectsToUse[indexToUse].hasChannelGroup("scale") ){
								objectsToUse[indexToUse].scale.x = oldScale.x * scale;
								objectsToUse[indexToUse].scale.y = oldScale.y * scale;
								objectsToUse[indexToUse].scale.z = oldScale.z * scale;
							// }else{
							// 	console.log('\t\t\tUnable to scale', objectsToUse[indexToUse])
							}
							var nScale = new THREE.Vector3().copy( objectsToUse[indexToUse].scale );
							var dScale = new THREE.Vector3().subVectors( nScale, oScale );

							if( objectsToUse.length > 1){
								for( i = 0, j = objectsToUse.length-1; i < j; i++){
									if( objectsToUse[i].hasChannelGroup("scale") ){
										objectsToUse[i].scale.add( dScale );	
									}
								}
							}
						} else {
							// console.log('\t\t\tIndividual axis')

							point.applyMatrix4( tempMatrix.getInverse( worldRotationMatrix ) );

							if ( !(isActive("X")) || scope.modifierAxis.x != 1 ) point.x = 0;
							if ( !(isActive("Y")) || scope.modifierAxis.y != 1 ) point.y = 0;
							if ( !(isActive("Z")) || scope.modifierAxis.z != 1 ) point.z = 0;

							var oScale = new THREE.Vector3().copy( objectsToUse[indexToUse].scale );
							if( objectsToUse[indexToUse].hasChannelGroup("scale") ){
								if ( isActive("X") ) objectsToUse[indexToUse].scale.x = oldScale.x * ( 1 + point.x / 50 );
								if ( isActive("Y") ) objectsToUse[indexToUse].scale.y = oldScale.y * ( 1 + point.y / 50 );
								if ( isActive("Z") ) objectsToUse[indexToUse].scale.z = oldScale.z * ( 1 + point.z / 50 );
							}
							var nScale = new THREE.Vector3().copy( objectsToUse[indexToUse].scale );
							var dScale = new THREE.Vector3().subVectors( nScale, oScale );

							console.log('\t\t\tScale value:', dScale)

							if( objectsToUse.length > 1){
								for( i = 0, j = objectsToUse.length-1; i < j; i++){
									if( objectsToUse[i].hasChannelGroup("scale") ){
										console.log('\t\t\t\tApplying scale value to', objectsToUse[i])
										objectsToUse[i].scale.add( dScale );	
									}else{
										console.log('\t\t\t\tUnable to scale', objectsToUse[i])
									}
								}
							}else{
								console.log('\t\t\tOnly one object to apply scale to.')
							}
						}
					}
				}
			}
			// console.log('setting isMoving to true')
			scope.isMoving = true;
			
			//	this behaves very unstable when dealing with a long hierarchy of controls
			//	which we are rotating at the same time
			// scope.update();
			
			scope.dispatchEvent( changeEvent );
		}

	}

	function onMouseUp( event ) {

		scope.active = false;
		scope.isMoving = false;
		scope.update();
		scope.document.removeEventListener( 'mousemove', onMouseMove, false );
		scope.document.removeEventListener( 'mouseup', onMouseUp, false );

	}

	// function onKeyDown( event ) {

	// 	console.log( 'TransformControls.onKeyDown', event.keyCode)

	// 	var currentMode = scope.mode;
	// 	var currentSpace = scope.space;
	// 	var currentScale = scope.scale;

	// 	if ( event.keyCode == 81 ) { // Q
	// 		scope.mode = 'select';	
	// 	}

	// 	if ( event.keyCode == 87 ) { // W

	// 		if ( scope.mode == 'translate' ) scope.space = ( scope.space == 'world' ) ? 'local' : 'world';
	// 		scope.mode = 'translate';

	// 	}

	// 	if ( event.keyCode == 69 ) { // E

	// 		if ( scope.mode == 'rotate' ) scope.space = ( scope.space == 'world' ) ? 'local' : 'world';
	// 		scope.mode = 'rotate';

	// 	}

	// 	if ( event.keyCode == 82 ) { // R

	// 		scope.mode = 'scale';
	// 		scope.space = 'local';

	// 	}

	// 	if ( event.keyCode == 187 || event.keyCode == 107 ) { // +,=,num+

	// 		scope.scale += 0.1

	// 	}

	// 	if ( event.keyCode == 189 || event.keyCode == 109) { // -,_,num-

	// 		scope.scale -= 0.1
	// 		scope.scale = Math.max( scope.scale, 0.1 );

	// 	}

	// 	if ( scope.mode !== currentMode || scope.space !== currentSpace || scope.scale !== currentScale ) {
	// 		console.log('\tupdating mode')

	// 		scope.setMode( scope.mode );
	// 		scope.dispatchEvent( changeEvent );
	// 		// scope.dispatchEvent( toolChangeEvent );
	// 	}

	// }

	function intersectObjects( event, objects ) {
		// console.log('TransformControls: intersectObjects', objects)
		pointerVector.set(
			( event.layerX / scope.domElement.offsetWidth ) * 2 - 1,
			- ( event.layerY / scope.domElement.offsetHeight ) * 2 + 1,
			0.5
		);

		if( scope.camera.name === 'front'){			
			projector.unprojectVector( pointerVector, scope.camera );
			ray.ray.origin.y = pointerVector.y;
			ray.ray.origin.x = pointerVector.x;
			ray.ray.origin.z = -100.0;
			ray.ray.direction.x = 0.0;
			ray.ray.direction.y = 0.0;
			ray.ray.direction.z = 1.0;
		}else if( scope.camera.name === 'side'){
			projector.unprojectVector( pointerVector, scope.camera );
			ray.ray.origin.y = pointerVector.y;
			ray.ray.origin.z = pointerVector.z;
			ray.ray.origin.x = -100.0;
			ray.ray.direction.z = 0.0;
			ray.ray.direction.y = 0.0;
			ray.ray.direction.x = 1.0;
		}else if( scope.camera.name === 'top'){
			projector.unprojectVector( pointerVector, scope.camera );
			ray.ray.origin.x = pointerVector.x;
			ray.ray.origin.z = pointerVector.z;
			ray.ray.origin.y = -100.0;
			ray.ray.direction.z = 0.0;
			ray.ray.direction.x = 0.0;
			ray.ray.direction.y = 1.0;
		}else{
			projector.unprojectVector( pointerVector, scope.camera );		
			ray.set( camPosition, pointerVector.sub( camPosition ).normalize() );			
		}

		// console.log('\tray:', ray)

		var intersections = ray.intersectObjects( objects, true );
		// if(intersections.length > 0){
		// 	console.log("\t intersection: "+intersections[0].object.name)
		// }
		return intersections[0] ? intersections[0] : false;

	}

	function isActive( name ) {

		if ( scope.active.search( name ) != -1 ) return true;
		else return false;

	}

	function bakeTransformations( object ) {

		var tempGeometry = new THREE.Geometry();
		THREE.GeometryUtils.merge( tempGeometry, object );
		object.geometry = tempGeometry;
		object.position.set( 0, 0, 0 );
		object.rotation.set( 0, 0, 0 );
		object.scale.set( 1, 1, 1 );

	}

};

THREE.TransformControls.prototype = Object.create( THREE.EventDispatcher.prototype );
