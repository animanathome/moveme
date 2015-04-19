THREE.PlaneHelper = function ( object ){
	var vertices = [
		new THREE.Vector3(   1,   1,   0 ),
		new THREE.Vector3(   0,   1,   0 ),
		new THREE.Vector3( 	 0,   0,  0 ),
		new THREE.Vector3(   1,   0,  0 ),
	];

	this.vertices = vertices;

	var geometry = new THREE.Geometry();
	geometry.vertices.push(
		vertices[0], vertices[1],
		vertices[1], vertices[2],
		vertices[2], vertices[3],
		vertices[3], vertices[0]
	);

	THREE.Line.call( this, geometry, new THREE.LineBasicMaterial( { color: 0xffff00 } ), THREE.LinePieces );

	if ( object !== undefined ) {

		this.update( object );

	}	
};

THREE.PlaneHelper.prototype = Object.create( THREE.Line.prototype );

THREE.PlaneHelper.prototype.update = function ( object ) {

	var geometry = object.geometry;

	if ( geometry.boundingBox === null ) {

		geometry.computeBoundingBox();

	}

	var min = geometry.boundingBox.min;
	var max = geometry.boundingBox.max;
	var vertices = this.vertices;

	vertices[ 0 ].set( max.x, max.y, 0 );
	vertices[ 1 ].set( min.x, max.y, 0 );
	vertices[ 2 ].set( min.x, min.y, 0 );
	vertices[ 3 ].set( max.x, min.y, 0 );

	this.geometry.computeBoundingSphere();
	this.geometry.verticesNeedUpdate = true;

	this.matrixAutoUpdate = false;
	this.matrixWorld = object.matrixWorld;

};	