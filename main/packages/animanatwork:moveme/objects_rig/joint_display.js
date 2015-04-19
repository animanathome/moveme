MM.JointDisplay = function ( joint ){
	this.joint = joint	
	
	this.jointColor = new THREE.Color( 0xffaa00 );
	this.controlColor = new THREE.Color( 0xff0000 );
	this.geometry = new THREE.Geometry();
	this.material = new THREE.LineBasicMaterial( { vertexColors: THREE.VertexColors } );
	this.line = new THREE.Line( this.geometry, this.material );
	this.line.name = joint.name+'Line'
	this.line.exportType = 'DO_NOT_EXPORT'
	this.update()

	return this
}

MM.JointDisplay.prototype = {
	constructor: MM.JointDisplay,

	update: function(){
		// console.log('JointDisplay', this.joint.name)
		this.geometry.verticesNeedUpdate = true;
		this.geometry.vertices = [];
		this.geometry.colors = [];

		if( this.joint.showHierarchy === true){
			this.drawHierarchy();
		}
		if( this.joint.showRotationAxis === true){
			this.drawRotationAxis();
		}
		if( this.joint.showControl === true){
			this.drawControl()
		}
	},

	drawHierarchy: function(){
		// console.log('JointDisplay: drawHierarchy')

		if(this.joint.children.length !== 0)
		{		
			for(var i = 0; i < this.joint.children.length; i++)
			{	
				this.geometry.vertices.push( new THREE.Vector3().getPositionFromMatrix(this.joint.matrixWorld));
				this.geometry.vertices.push( new THREE.Vector3().getPositionFromMatrix(this.joint.children[i].matrixWorld));

				this.geometry.colors.push(this.jointColor)
				this.geometry.colors.push(this.jointColor)
			}
		}		
	},

	drawRotationAxis: function(){
		// console.log('JointDisplay: drawRotationAxis')

		this.geometry.vertices.push(	
			new THREE.Vector3().applyMatrix4(this.joint.matrixWorld), 
			new THREE.Vector3( this.joint.radius, 0, 0).applyMatrix4(this.joint.matrixWorld),
			
			new THREE.Vector3().applyMatrix4(this.joint.matrixWorld), 
			new THREE.Vector3( 0, this.joint.radius, 0 ).applyMatrix4(this.joint.matrixWorld),
			
			new THREE.Vector3().applyMatrix4(this.joint.matrixWorld), 
			new THREE.Vector3( 0, 0, this.joint.radius ).applyMatrix4(this.joint.matrixWorld)		
		);

		this.geometry.colors.push(
			new THREE.Color( 0xff0000 ), 
			new THREE.Color( 0xff0000 ), // red
			new THREE.Color( 0x00ff00 ), 
			new THREE.Color( 0x00ff00 ), // blue
			new THREE.Color( 0x0000ff ), 
			new THREE.Color( 0x0000ff )  // green				
		);
	},

	drawControl: function(){
		// console.log('JointDisplay: drawControl')

		//	add circle
		var segmentCount = 4;
		var radius = this.controlSize;
		for(var i = 0; i <= segmentCount; i++) 
		{
	    	var theta = ( i / segmentCount ) * Math.PI * 2;
	    	var theta1 = ( (i+1) / segmentCount ) * Math.PI * 2;
	    	this.geometry.vertices.push( new THREE.Vector3( 0, 
	    									Math.cos( theta ) * radius, 
	    									Math.sin( theta ) * radius ));
	    	this.geometry.vertices.push( new THREE.Vector3( 0, 
	    									Math.cos( theta1 ) * radius, 
	    									Math.sin( theta1 ) * radius ));
	    	this.geometry.colors.push(this.controlColor)
	    	this.geometry.colors.push(this.controlColor)
		}		

		//	only when we have a control should we be calculating a bounding box
		this.geometry.computeBoundingBox();			
	}
}