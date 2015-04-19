MM.Joint = function() {
	// console.log('creating joint')	
	THREE.Object3D.call( this );

	//	this should be the bind pose
	this.skinMatrix = new THREE.Matrix4();

	// used by IK to determine the bind pose before the solve
	this.preferedAngle = new THREE.Vector3();	

	this.type = 'Joint'
	
	//	display related variables
	this.radius = 10;
	this.controlSize = 1.0;
	this.showRotationAxis = false;
	this.showHierarchy = true;
	this.showControl = false;

	//	joint display
	this.jd = undefined

	//	target positions (object space)
	this.hasShapes = false		//	defines whether or not to apply to shape offsets to the transform
	this.shapesPosition = {}	//	shapesPosition['lLidU'] = THREE.offset position for the current shape
	this.shapes = {}			//	shapes['lLidU'] = 0 -> value of the current shape
	this.bindPosition = new THREE.Vector3()
	this.offsetPosition = new THREE.Vector3()
};

MM.Joint.prototype = Object.create( THREE.Object3D.prototype );

MM.Joint.prototype.importData=function(data){	
	
	this.radius = data.radius
	this.controlSize = data.controlSize
	this.showRotationAxis = data.showRotationAxis
	this.showHierarchy = data.showHierarchy
	this.showControl = data.showControl

	this.skinMatrix.fromArray( data.skinMatrix )

	this.preferedAngle.set( data.preferedAngle.x, data.preferedAngle.y, data.preferedAngle.z)
}

MM.Joint.prototype.exportData=function(){
	
	data={}
	data.radius = this.radius
	data.controlSize = this.controlSize
	data.showRotationAxis = this.showRotationAxis
	data.showHierarchy = this.showHierarchy
	data.showControl = this.showControl
	data.skinMatrix = this.skinMatrix.toArray();
	data.preferedAngle = this.preferedAngle

	return data;
}

MM.Joint.prototype.addTarget = function( targetPosition, influence, name )
{
	// console.log('Joint: addTarget', targetPosition, influence, name)
	if( this.hasShapes === false){
		this.bindPosition = this.position.clone()
		this.hasShapes = true
	}
	
	this.shapesPosition[name] = targetPosition
	this.shapes[name] = influence	
}

MM.Joint.prototype.setBindPose = function()
{
	// console.log('Joint: setBindPose', this.matrixWorld)
	this.skinMatrix = this.matrixWorld.clone();	
	// console.log('\tresult', this.skinMatrix)
}

MM.Joint.prototype.setParent = function( child ){
    //  adds one object to another while maintaining it's
    //  original world position

    //  put the child into the soon to be parent's space
    var inverseMatrix = new THREE.Matrix4();
    inverseMatrix.getInverse(this.matrixWorld);

    var localSpace = new THREE.Matrix4();
    localSpace.multiplyMatrices(child.matrixWorld, inverseMatrix)

    // console.log('localSpace')
    // console.log(localSpace)

    THREE.Object3D.prototype.add.call(this, child);

    child.position.getPositionFromMatrix( localSpace );
    var m1 = new THREE.Matrix4();
    m1.extractRotation( localSpace );
    child.quaternion.setFromRotationMatrix( m1 );   
};

MM.Joint.prototype.updateMatrix = function () {
	//	if we have joint shapes
	//	add the influence of the offsets
	var shapeOffset = new THREE.Vector3();
	if( this.hasShapes === true){
		for( var shape in this.shapes ){			
			if( this.shapes[shape] > 0.0 ){
				// console.log('\t', shape, 'has an influence of', this.shapes[shape])
				// console.log('\t', shape, 'vector', this.shapesPosition[shape])
				var thisOffset = this.shapesPosition[shape].clone().multiplyScalar(this.shapes[shape])
				shapeOffset.add( thisOffset)				
			}			
		}

		this.matrix.compose( new THREE.Vector3().addVectors(this.bindPosition, shapeOffset).add(this.offsetPosition) , this.quaternion, this.scale );
	}else{
		this.matrix.compose( this.position , this.quaternion, this.scale );
	}

	this.matrixWorldNeedsUpdate = true;
}

MM.Joint.prototype.updateMatrixWorld = function ( force ) {
	// console.log('updateMatrixWorld', this.name)

	THREE.Object3D.prototype.updateMatrixWorld.call(this, force);

	//	ensures that the joint line gets draw properly
	//	it fails however, whenever we have actually geometry parented under it	
	if( this.hasDisplay() === true ){
		this.jd.update()
	}
}

MM.Joint.prototype.getPreferedAngle = function()
{
	// console.log(this.name, 'getPreferedAngle', this.preferedAngle.x, this.preferedAngle.y, this.preferedAngle.z)
	return this.preferedAngle;
}

MM.Joint.prototype.setPreferedAngle = function(preferedAngle)
{
	// console.log(this.name, 'setPreferedAngle')
	if(preferedAngle instanceof THREE.Vector3)
	{
		this.preferedAngle = preferedAngle;
	// }else{
	// 	console.log('Needs vector3')
	}
}

MM.Joint.prototype.hasDisplay = function()
{
	if( this.jd instanceof MM.JointDisplay ){
		return true
	}
	return false
}

MM.Joint.prototype.addDisplay = function()
{
	this.jd = new MM.JointDisplay( this )
	return this;
}

MM.Joint.prototype.removeDisplay = function()
{
	this.jd = null;
	return this;
}

MM.Joint.prototype.updateDisplay = function()
{
	if(this.jd instanceof MM.JointDisplay){
		this.jd.update()
	// }else{
	// 	console.log('Joint: no display to update')
	}
}