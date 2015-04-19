MM.ControlDisplayFull = function ( control ){
	console.log('MM.ControlDisplayFull init')

	this.control = control
	
	this.name = control.name+'Display'
	this.geometry = new THREE.Geometry()
	
	this.material = new THREE.MeshBasicMaterial();
	this.line = new THREE.Mesh(this.geometry, this.material );

	//	TODO:
	//	is mesh a 3D object? if so then we do not need to manipulate each individual point!
	//	-> updateMatrix!@!@


	this.line.name = this.name+'Line'
	this.line.exportType = 'DO_NOT_EXPORT'
	
	this.create()
	this.update()

	this.controlColor = new THREE.Color();

	return this
}

MM.ControlDisplayFull.prototype = {
	constructor: MM.ControlDisplay,

	//	create the shape in question
	create: function(){
		console.log('\tcreating shape', this.control.controlShape)

		this.material.color = this.controlColor

		this.geometry.verticesNeedUpdate = true;
		this.geometry.elementsNeedUpdate = true;
		this.geometry.normalsNeedUpdate = true;
		this.geometry.buffersNeedUpdate = true;

		this.geometry.vertices = [];
		this.geometry.faces = [];

		var scale = this.control.controlScale.clone().multiplyScalar(this.control.controlSize)
		var normal = new THREE.Vector3( 0, 0, -1 );
		switch(this.control.controlShape){
			case "plane":
				//	vertices
				var a, b, c, d;
				a = new THREE.Vector3(  scale.x,  scale.y, 0 )
				b = new THREE.Vector3(  scale.x, -1 * scale.y, 0 )
				c = new THREE.Vector3( -1 * scale.x, -1 * scale.y, 0 )
				d = new THREE.Vector3( -1 * scale.x,  scale.y, 0 )

				this.geometry.vertices.push( a );
				this.geometry.vertices.push( b );
				this.geometry.vertices.push( c );
				this.geometry.vertices.push( d );

				//	faces
				var face = new THREE.Face3( 1, 0, 3 );
				face.normal.copy( normal );
				face.vertexNormals.push( normal.clone(), normal.clone(), normal.clone() );
				this.geometry.faces.push( face );

				face = new THREE.Face3( 3, 2, 1 );
				face.normal.copy( normal );
				face.vertexNormals.push( normal.clone(), normal.clone(), normal.clone() );
				this.geometry.faces.push( face );			
			break;

			case "triangleUp":
				//	vertices
				var a, b, c
				a = new THREE.Vector3(  0,  scale.y, 0 )
				b = new THREE.Vector3(  scale.x, 0, 0 )
				c = new THREE.Vector3( -1 * scale.x, 0, 0 )				

				this.geometry.vertices.push( a );
				this.geometry.vertices.push( b );
				this.geometry.vertices.push( c );				

				//	faces
				var face = new THREE.Face3( 2, 1, 0 );
				face.normal.copy( normal );
				face.vertexNormals.push( normal.clone(), normal.clone(), normal.clone() );
				this.geometry.faces.push( face );
			break;

			case "triangleDown":
				//	vertices
				var a, b, c
				a = new THREE.Vector3( -1 * scale.x, 0, 0 )				
				b = new THREE.Vector3(  scale.x, 0, 0 )
				c = new THREE.Vector3(  0,  -scale.y, 0 )

				this.geometry.vertices.push( a );
				this.geometry.vertices.push( b );
				this.geometry.vertices.push( c );				

				//	faces
				var face = new THREE.Face3( 2, 1, 0 );
				face.normal.copy( normal );
				face.vertexNormals.push( normal.clone(), normal.clone(), normal.clone() );
				this.geometry.faces.push( face );
			break;		

			case "triangleLeft":
				//	vertices
				var a, b, c
				a = new THREE.Vector3(  0,  scale.y, 0 )
				b = new THREE.Vector3(  0, -1 * scale.y, 0 )
				c = new THREE.Vector3( -1 * scale.x, 0, 0 )				

				this.geometry.vertices.push( a );
				this.geometry.vertices.push( b );
				this.geometry.vertices.push( c );				

				//	faces
				var face = new THREE.Face3( 2, 1, 0 );
				face.normal.copy( normal );
				face.vertexNormals.push( normal.clone(), normal.clone(), normal.clone() );
				this.geometry.faces.push( face );
			break;	

			case "triangleRight":
				//	vertices
				var a, b, c
				a = new THREE.Vector3(  0,  scale.y, 0 )
				b = new THREE.Vector3(  0, -1 * scale.y, 0 )
				c = new THREE.Vector3(  1 * scale.x, 0, 0 )				

				this.geometry.vertices.push( a );
				this.geometry.vertices.push( b );
				this.geometry.vertices.push( c );				

				//	faces
				var face = new THREE.Face3( 0, 1, 2 );
				face.normal.copy( normal );
				face.vertexNormals.push( normal.clone(), normal.clone(), normal.clone() );
				this.geometry.faces.push( face );
			break;	

			case "circle":
				var thetaStart = 0;
				var thetaLength = Math.PI * 2;
				var segments = 20;
				var radius = this.control.controlSize;

				var segment, xValue, yValue;
				for (var i = 0; i <= segments; i ++ ){
					var segment = thetaStart + i / segments * thetaLength;
					var xValue = radius * Math.cos( segment );
					var yValue = radius * Math.sin( segment );
					this.geometry.vertices.push( new THREE.Vector3( xValue, yValue, 0.0 ));
				}

				//	faces
				var end;
				for (var i = 0; i <= segments; i ++ ){
					end = i + 1;
					if(end > segments){
						end = 0;
					}
					var face = new THREE.Face3( 0, i, end );
					face.normal.copy( normal );
					face.vertexNormals.push( normal.clone(), normal.clone(), normal.clone() );
					this.geometry.faces.push( face );
				}
			break;

			default:
				console.log('\tUnsupported shape', this.control.controlShape)
			break;
		}
		this.geometry.computeCentroids();
		this.geometry.computeFaceNormals();

		return this;
	},
	update: function(){
		this.material.color = this.controlColor
		
		var offsetMatrix = new THREE.Matrix4()
		offsetMatrix.setPosition(this.control.controlOffset);

		var finalMatrix = new THREE.Matrix4().multiplyMatrices(this.control.matrixWorld, offsetMatrix)

		if( this.control.isFacing === true ){		
			var camRotation = new THREE.Matrix4().extractRotation( this.control.facingCamera.matrixWorld)
			camRotation.copyPosition( finalMatrix );
			finalMatrix = camRotation;
		}
		
		var scale = this.control.controlScale.clone().multiplyScalar(this.control.controlSize)

		this.geometry.vertices = []
		this.geometry.verticesNeedUpdate = true;

		switch(this.control.controlShape){
			case "plane":
				this.geometry.vertices.push( new THREE.Vector3(  1 * scale.x,  1 * scale.y, 0 ).applyMatrix4(finalMatrix));
				this.geometry.vertices.push( new THREE.Vector3(  1 * scale.x, -1 * scale.y, 0 ).applyMatrix4(finalMatrix));
				this.geometry.vertices.push( new THREE.Vector3( -1 * scale.x, -1 * scale.y, 0 ).applyMatrix4(finalMatrix));
				this.geometry.vertices.push( new THREE.Vector3( -1 * scale.x,  1 * scale.y, 0 ).applyMatrix4(finalMatrix));
			break;

			case "triangleUp":
				this.geometry.vertices.push( new THREE.Vector3(  0,  scale.y, 0 ).applyMatrix4(finalMatrix));
				this.geometry.vertices.push( new THREE.Vector3(  1 * scale.x, 0, 0 ).applyMatrix4(finalMatrix));
				this.geometry.vertices.push( new THREE.Vector3( -1 * scale.x, 0, 0 ).applyMatrix4(finalMatrix));
			break;

			case "triangleDown":
				this.geometry.vertices.push( new THREE.Vector3( -1 * scale.x, 0, 0 ).applyMatrix4(finalMatrix));
				this.geometry.vertices.push( new THREE.Vector3(  1 * scale.x, 0, 0 ).applyMatrix4(finalMatrix));
				this.geometry.vertices.push( new THREE.Vector3(  0,  -scale.y, 0 ).applyMatrix4(finalMatrix));
			break;

			case "triangleLeft":
				this.geometry.vertices.push( new THREE.Vector3( 0,  1 * scale.y, 0 ).applyMatrix4(finalMatrix));
				this.geometry.vertices.push( new THREE.Vector3( 0, -1 * scale.y, 0 ).applyMatrix4(finalMatrix));
				this.geometry.vertices.push( new THREE.Vector3(  -1 * scale.x,  0, 0 ).applyMatrix4(finalMatrix));
			break;

			case "triangleRight":
				this.geometry.vertices.push( new THREE.Vector3( 0,  1 * scale.y, 0 ).applyMatrix4(finalMatrix));
				this.geometry.vertices.push( new THREE.Vector3( 0, -1 * scale.y, 0 ).applyMatrix4(finalMatrix));
				this.geometry.vertices.push( new THREE.Vector3(  1 * scale.x,  0, 0 ).applyMatrix4(finalMatrix));
			break;

			case "circle":
				var thetaStart = 0;
				var thetaLength = Math.PI * 2;
				var segments = 20;
				var radius = this.control.controlSize;
				for (var i = 0; i <= segments; i ++ ){
					var segment = thetaStart + i / segments * thetaLength;
					var xValue = radius * Math.cos( segment );
					var yValue = radius * Math.sin( segment );
					this.geometry.vertices.push( new THREE.Vector3( xValue, yValue, 0.0 ).applyMatrix4(finalMatrix));
				}
			break;

			default:
				console.log('\tUnsupported shape', this.control.controlShape)
			break;			
		}

		this.geometry.computeCentroids();
		this.geometry.computeFaceNormals();
		
		return this;
	}
}	