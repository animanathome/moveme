MM.ControlDisplay = function ( control ){
	this.control = control
	this.type = 'ControlDisplay'
	
	this.name = control.name+'Display'
	this.geometry = new THREE.Geometry()	
	this.material = new THREE.LineBasicMaterial();
	this.line = new THREE.Line( this.geometry, this.material );

	this.line.name = this.name+'Line'
	this.line.exportType = 'DO_NOT_EXPORT'
	this.update()

	this.controlColor = new THREE.Color();

	return this
}

MM.ControlDisplay.prototype = {
	constructor: MM.ControlDisplay,

	update: function(){
		// console.log('ControlDisplay: update', this.name)
		// console.log('\tcontrolScale', this.control.controlScale)
		// console.log('\tcontrolSize', this.control.controlSize)

		var offsetMatrix = new THREE.Matrix4()
		offsetMatrix.setPosition(this.control.controlOffset);

		var finalMatrix = new THREE.Matrix4().multiplyMatrices(this.control.matrixWorld, offsetMatrix)

		if( this.control.isFacing === true ){		
			var camRotation = new THREE.Matrix4().extractRotation( this.control.facingCamera.matrixWorld)
			camRotation.copyPosition( finalMatrix );
			finalMatrix = camRotation;
		}

		// console.log(this.control.name, 'control shape matrix', finalMatrix)

		var scale = this.control.controlScale.clone().multiplyScalar(this.control.controlSize)		

	//	set color
		this.material.color = this.controlColor
		// console.log('\tcontrolColor', this.control.controlColor.r, this.control.controlColor.g, this.control.controlColor.b)
	
	//	set shape
		this.geometry.vertices = []
		this.geometry.verticesNeedUpdate = true;

		if(this.control.displayRotationAxis === true){
			this.geometry.vertices.push( new THREE.Vector3().applyMatrix4(finalMatrix) ) 
			this.geometry.vertices.push( new THREE.Vector3( scale.x, 0, 0 ).applyMatrix4(finalMatrix) )
			this.geometry.vertices.push( new THREE.Vector3().applyMatrix4(finalMatrix) )
			this.geometry.vertices.push( new THREE.Vector3( 0, scale.y, 0 ).applyMatrix4(finalMatrix) )
			this.geometry.vertices.push( new THREE.Vector3().applyMatrix4(finalMatrix) )
			this.geometry.vertices.push( new THREE.Vector3( 0, 0, scale.z ).applyMatrix4(finalMatrix) )
		}

		switch(this.control.controlShape)		
		{
			case "triangle": // top or Y
				this.geometry.vertices.push( new THREE.Vector3( 0, 0, -scale.z ).applyMatrix4(finalMatrix));
				this.geometry.vertices.push( new THREE.Vector3( scale.x, 0, scale.z ).applyMatrix4(finalMatrix) );	

				this.geometry.vertices.push( new THREE.Vector3( scale.x, 0, scale.z ).applyMatrix4(finalMatrix) );
				this.geometry.vertices.push( new THREE.Vector3( -scale.x, 0, scale.z ).applyMatrix4(finalMatrix) );

				this.geometry.vertices.push( new THREE.Vector3( -scale.x, 0, scale.z ).applyMatrix4(finalMatrix) );
				this.geometry.vertices.push( new THREE.Vector3( 0, 0, -scale.z ).applyMatrix4(finalMatrix) );	
			break;

			case "triangleX": // side or X
				this.geometry.vertices.push( new THREE.Vector3( 0, -scale.z, 0 ).applyMatrix4(finalMatrix));
				this.geometry.vertices.push( new THREE.Vector3( 0, scale.z, scale.x).applyMatrix4(finalMatrix) );	

				this.geometry.vertices.push( new THREE.Vector3( 0, scale.z, scale.x ).applyMatrix4(finalMatrix) );
				this.geometry.vertices.push( new THREE.Vector3( 0, scale.z, -scale.x ).applyMatrix4(finalMatrix) );

				this.geometry.vertices.push( new THREE.Vector3( 0, scale.z, -scale.x ).applyMatrix4(finalMatrix) );
				this.geometry.vertices.push( new THREE.Vector3( 0, -scale.z, 0 ).applyMatrix4(finalMatrix) );	
			break;			

			case "triangleZ": // front or Z
				this.geometry.vertices.push( new THREE.Vector3( -scale.z, 0, 0 ).applyMatrix4(finalMatrix));
				this.geometry.vertices.push( new THREE.Vector3( scale.z, scale.x, 0).applyMatrix4(finalMatrix) );	

				this.geometry.vertices.push( new THREE.Vector3( scale.z, scale.x, 0 ).applyMatrix4(finalMatrix) );
				this.geometry.vertices.push( new THREE.Vector3( scale.z, -scale.x, 0 ).applyMatrix4(finalMatrix) );

				this.geometry.vertices.push( new THREE.Vector3( scale.z, -scale.x, 0 ).applyMatrix4(finalMatrix) );
				this.geometry.vertices.push( new THREE.Vector3( -scale.z, 0, 0 ).applyMatrix4(finalMatrix) );	
			break;	

			case "plane": // top or y			
				this.geometry.vertices.push( new THREE.Vector3( scale.x, 0, -scale.z ).applyMatrix4(finalMatrix));
				this.geometry.vertices.push( new THREE.Vector3( scale.x, 0, scale.z ).applyMatrix4(finalMatrix) );	

				this.geometry.vertices.push( new THREE.Vector3( scale.x, 0, scale.z ).applyMatrix4(finalMatrix) );
				this.geometry.vertices.push( new THREE.Vector3( -scale.x, 0, scale.z ).applyMatrix4(finalMatrix) );

				this.geometry.vertices.push( new THREE.Vector3( -scale.x, 0, scale.z ).applyMatrix4(finalMatrix) );
				this.geometry.vertices.push( new THREE.Vector3( -scale.x, 0, -scale.z ).applyMatrix4(finalMatrix) );	

				this.geometry.vertices.push( new THREE.Vector3( -scale.x, 0, -scale.z ).applyMatrix4(finalMatrix) );
				this.geometry.vertices.push( new THREE.Vector3( scale.x, 0, -scale.z ).applyMatrix4(finalMatrix) );
			break;

			case "planeX":	// side or x		
				this.geometry.vertices.push( new THREE.Vector3( 0, -scale.z, scale.x ).applyMatrix4(finalMatrix));
				this.geometry.vertices.push( new THREE.Vector3( 0, scale.z, scale.x ).applyMatrix4(finalMatrix) );	

				this.geometry.vertices.push( new THREE.Vector3( 0, scale.z, scale.x ).applyMatrix4(finalMatrix) );
				this.geometry.vertices.push( new THREE.Vector3( 0, scale.z, -scale.x ).applyMatrix4(finalMatrix) );

				this.geometry.vertices.push( new THREE.Vector3( 0, scale.z, -scale.x ).applyMatrix4(finalMatrix) );
				this.geometry.vertices.push( new THREE.Vector3( 0, -scale.z, -scale.x ).applyMatrix4(finalMatrix) );	

				this.geometry.vertices.push( new THREE.Vector3( 0, -scale.z, -scale.x ).applyMatrix4(finalMatrix) );
				this.geometry.vertices.push( new THREE.Vector3( 0, -scale.z, scale.x ).applyMatrix4(finalMatrix) );
			break;

			case "planeZ":	// front or Z
				this.geometry.vertices.push( new THREE.Vector3( -scale.z, scale.x, 0 ).applyMatrix4(finalMatrix));
				this.geometry.vertices.push( new THREE.Vector3( scale.z, scale.x, 0 ).applyMatrix4(finalMatrix) );	

				this.geometry.vertices.push( new THREE.Vector3( scale.z, scale.x, 0 ).applyMatrix4(finalMatrix) );
				this.geometry.vertices.push( new THREE.Vector3( scale.z, -scale.x, 0 ).applyMatrix4(finalMatrix) );

				this.geometry.vertices.push( new THREE.Vector3( scale.z, -scale.x, 0 ).applyMatrix4(finalMatrix) );
				this.geometry.vertices.push( new THREE.Vector3( -scale.z, -scale.x, 0 ).applyMatrix4(finalMatrix) );	

				this.geometry.vertices.push( new THREE.Vector3( -scale.z, -scale.x, 0 ).applyMatrix4(finalMatrix) );
				this.geometry.vertices.push( new THREE.Vector3( -scale.z, scale.x, 0 ).applyMatrix4(finalMatrix) );
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
					this.geometry.vertices.push( new THREE.Vector3( xValue, 0.0 , yValue ).applyMatrix4(finalMatrix));
				}
			break;

			case "circleX": // side or x
				var thetaStart = 0;
				var thetaLength = Math.PI * 2;
				var segments = 20;
				var radius = this.control.controlSize;
				for ( i = 0; i <= segments; i ++ ){
					var segment = thetaStart + i / segments * thetaLength;
					var xValue = radius * Math.cos( segment );
					var yValue = radius * Math.sin( segment );
					this.geometry.vertices.push( new THREE.Vector3( 0.0, xValue, yValue ).applyMatrix4(finalMatrix));
				}
			break;	

			case "circleZ": // front or Z
				var thetaStart = 0;
				var thetaLength = Math.PI * 2;
				var segments = 20;
				var radius = this.control.controlSize;
				for ( i = 0; i <= segments; i ++ ){
					var segment = thetaStart + i / segments * thetaLength;
					var xValue = radius * Math.cos( segment );
					var yValue = radius * Math.sin( segment );
					this.geometry.vertices.push( new THREE.Vector3( xValue, yValue, 0.0 ).applyMatrix4(finalMatrix));
				}
			break;			

			case "cube":
				this.geometry.vertices.push( new THREE.Vector3( -scale.x, -scale.y, -scale.z ).applyMatrix4(finalMatrix));
				this.geometry.vertices.push( new THREE.Vector3( -scale.x, scale.y, -scale.z ).applyMatrix4(finalMatrix));

				this.geometry.vertices.push( new THREE.Vector3( -scale.x, scale.y, -scale.z ).applyMatrix4(finalMatrix));
				this.geometry.vertices.push( new THREE.Vector3( scale.x, scale.y, -scale.z ).applyMatrix4(finalMatrix));

				this.geometry.vertices.push( new THREE.Vector3( scale.x, scale.y, -scale.z ).applyMatrix4(finalMatrix));
				this.geometry.vertices.push( new THREE.Vector3( scale.x, -scale.y, -scale.z ).applyMatrix4(finalMatrix));

				this.geometry.vertices.push( new THREE.Vector3( scale.x, -scale.y, -scale.z ).applyMatrix4(finalMatrix));
				this.geometry.vertices.push( new THREE.Vector3( -scale.x, -scale.y, -scale.z ).applyMatrix4(finalMatrix));

				this.geometry.vertices.push( new THREE.Vector3( -scale.x, -scale.y, scale.z ).applyMatrix4(finalMatrix));
				this.geometry.vertices.push( new THREE.Vector3( -scale.x, scale.y, scale.z ).applyMatrix4(finalMatrix));

				this.geometry.vertices.push( new THREE.Vector3( -scale.x, scale.y, scale.z ).applyMatrix4(finalMatrix));
				this.geometry.vertices.push( new THREE.Vector3( scale.x, scale.y, scale.z ).applyMatrix4(finalMatrix));

				this.geometry.vertices.push( new THREE.Vector3( scale.x, scale.y, scale.z ).applyMatrix4(finalMatrix));
				this.geometry.vertices.push( new THREE.Vector3( scale.x, -scale.y, scale.z ).applyMatrix4(finalMatrix));

				this.geometry.vertices.push( new THREE.Vector3( scale.x, -scale.y, scale.z ).applyMatrix4(finalMatrix));
				this.geometry.vertices.push( new THREE.Vector3( -scale.x, -scale.y, scale.z ).applyMatrix4(finalMatrix));

				this.geometry.vertices.push( new THREE.Vector3( scale.x, -scale.y, scale.z ).applyMatrix4(finalMatrix));
				this.geometry.vertices.push( new THREE.Vector3( scale.x, -scale.y, -scale.z ).applyMatrix4(finalMatrix));
			
				this.geometry.vertices.push( new THREE.Vector3( scale.x,  scale.y, -scale.z ).applyMatrix4(finalMatrix));
				this.geometry.vertices.push( new THREE.Vector3( -scale.x, scale.y, -scale.z ).applyMatrix4(finalMatrix));
				this.geometry.vertices.push( new THREE.Vector3( -scale.x, scale.y, scale.z ).applyMatrix4(finalMatrix));

				this.geometry.vertices.push( new THREE.Vector3( scale.x, scale.y, scale.z ).applyMatrix4(finalMatrix));
				this.geometry.vertices.push( new THREE.Vector3( scale.x, scale.y, -scale.z ).applyMatrix4(finalMatrix));			
			break;

			case "default":
				console.log('Unknown shape type.')
			break;
		}		
		this.geometry.boundingBox = null;
    	this.geometry.computeBoundingBox(); 

    	//	make sure we have certain thickness
    	this.geometry.boundingBox.min.y -= 1
    	this.geometry.boundingBox.max.y += 1

    	//	pass on the bounding box of the display to the control
    	//	this should make it a bit easier to select the control
    	this.control.boundingBox = this.geometry.boundingBox
    	return this
	}
}