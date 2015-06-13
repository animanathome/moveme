MM.CurveSolver = function(){
	MM.Control.call(this);

	this.joints = []
	this.baseControlPoints = []
	this.deformedControlPoints = []
	
	this.rootCtl = undefined
	this.rootIndices = [0,1]
	this.rootBindMatrix = undefined
	
	this.tipCtl = undefined
	this.tipIndices = [2,3]
	this.tipBindMatrix = undefined

    this.followBottomControl = false
    this.skipFirstJoint = false
}

MM.CurveSolver.prototype = Object.create(MM.Control.prototype);

MM.CurveSolver.prototype.setTipControl = function(control){
	console.log('CurveSolver.setTipControl', control)

	this.tipCtl = control
	this.tipBindMatrix = control.matrixWorld.clone()
}

MM.CurveSolver.prototype.updateTipControl = function(){
	console.log('CurveSolver.updateTipControl')

	var nv = this.tipIndices.length
	for(var i = 0; i < nv; i++){
		var thisIndex = this.tipIndices[i]
        var thisVertex = this.baseControlPoints[thisIndex].clone();
        
		console.log('\tb', thisIndex, thisVertex.x, thisVertex.y, thisVertex.z)

        var inverseMatrix = new THREE.Matrix4();
        inverseMatrix.getInverse(this.tipBindMatrix)

        var localMatrix = new THREE.Matrix4();
        localMatrix.multiplyMatrices(this.tipCtl.matrixWorld, inverseMatrix)

        thisVertex.applyMatrix4(localMatrix);
        this.deformedControlPoints[thisIndex].set(thisVertex.x, thisVertex.y, thisVertex.z, 1.0)

        console.log('\td', thisIndex, thisVertex.x, thisVertex.y, thisVertex.z)
	}
}

MM.CurveSolver.prototype.setRootControl = function(control){
	console.log('CurveSolver.setRootControl', control)
	this.rootCtl = control
	this.rootBindMatrix = control.matrixWorld.clone()
}

MM.CurveSolver.prototype.updateRootControl = function(){
	console.log('CurveSolver.updateRootControl')

	var nv = this.rootIndices.length
	for(var i = 0; i < nv; i++){
		var thisIndex = this.rootIndices[i]
        var thisVertex = this.baseControlPoints[thisIndex].clone();

        console.log('\tb', thisIndex, thisVertex.x, thisVertex.y, thisVertex.z)
        
        var inverseMatrix = new THREE.Matrix4();
        inverseMatrix.getInverse(this.rootBindMatrix)

        var localMatrix = new THREE.Matrix4();
        localMatrix.multiplyMatrices(this.rootCtl.matrixWorld, inverseMatrix)

        thisVertex.applyMatrix4(localMatrix);
        this.deformedControlPoints[thisIndex].set(thisVertex.x, thisVertex.y, thisVertex.z, 1.0)

        console.log('\td', thisIndex, thisVertex.x, thisVertex.y, thisVertex.z)
	}
}

MM.CurveSolver.prototype.setJoints = function(joints){
	console.log('CurveSolver.setJoints', joints)

	this.joints = joints
	var nJoints = this.joints.length

	for(var i = 0; i < nJoints; i++){    
        // console.log(i, this.joints[i])    
        this.baseControlPoints.push(this.joints[i].getWorldPosition());
        this.deformedControlPoints.push(new THREE.Vector4());
    }
}

MM.CurveSolver.prototype.updateMatrixWorld = function(force){
	// console.log('CurveSolver.updateMatrixWorld', force)

	if(this.rootCtl === undefined){
		console.warn('\tNo root control defined.')
		return
	}
	if(this.tipCtl === undefined){
		console.warn('\tNo tip control defined.')
		return
	}

//	apply root and tip control transformation
	this.updateRootControl()
	this.updateTipControl()

//	get positions on curve
    var spinePositions = [];
    var nJoints = this.joints.length

    // console.log('\tjoints', nJoints, this.joints)

    var nurbsDegree = 3;    
    var nurbsKnots = [0,0,0,0,1,1,1,1]
    var blendValues = [0.0, 0.3333333333333333, 0.6666666666666666, 1.0]

    spinePositions = [];
    for(i = 0; i < nJoints; i++){
        var wpos = THREE.NURBSUtils.calcBSplinePoint(nurbsDegree, nurbsKnots, this.deformedControlPoints, blendValues[i]);

        console.log('\t\t', i, 'position', wpos.x, wpos.y, wpos.z)
        spinePositions.push(wpos);
    }

    var startIndex = 0
    if(this.followBottomControl === true 
    	&& this.skipFirstJoint === false
        && this.joints[0].parent !== undefined ){
        // console.log('following bottom control')

        //  local matrix        
        var parentInverse = new THREE.Matrix4()
        parentInverse.getInverse(this.joints[0].parent.matrixWorld)

        var localMatrix = new THREE.Matrix4()
        localMatrix.multiplyMatrices(parentInverse, this.rootCtl.matrixWorld)

        var m1 = new THREE.Matrix4();
        this.joints[0].position.getPositionFromMatrix(localMatrix)
        m1.extractRotation(localMatrix);
        this.joints[0].quaternion.setFromRotationMatrix(m1)

        //  update
        this.joints[0].updateMatrix()
        this.joints[0].updateMatrixWorld(true)   

        startIndex = 1
    }else{
        console.log('\tfollowing curve')
    }

	var m1 = new THREE.Matrix4();
    for(i = startIndex; i < (nJoints-1); i++){
        console.log('\tupdating joint position ', i)

        var botQuat = new THREE.Quaternion();
        botQuat.setFromRotationMatrix(this.rootCtl.matrixWorld);
    
        var topQuat = new THREE.Quaternion();
        topQuat.setFromRotationMatrix(this.tipCtl.matrixWorld);
        
        botQuat.slerp(topQuat, blendValues[i]);  
        
        var slerpMatrix = new THREE.Matrix4();
        slerpMatrix.makeRotationFromQuaternion(botQuat);  

        var slerpMatrixYAxis = new THREE.Vector3();
        slerpMatrixYAxis.x = slerpMatrix.elements[4] * -1.0;
        slerpMatrixYAxis.y = slerpMatrix.elements[5] * -1.0;
        slerpMatrixYAxis.z = slerpMatrix.elements[6] * -1.0;      
        slerpMatrixYAxis.normalize();  

        //  look in front
        var tangent = new THREE.Vector3(spinePositions[i].x, spinePositions[i].y, spinePositions[i].z)
    
        tangent.sub(spinePositions[i+1]);
        tangent.normalize(); 

        //  get the angle between the "curve tangent" and the "control tangent"
        var angle = tangent.angleTo(new THREE.Vector3(slerpMatrixYAxis.x, slerpMatrixYAxis.y, slerpMatrixYAxis.z))

        var axis = new THREE.Vector3(slerpMatrixYAxis.x, slerpMatrixYAxis.y, slerpMatrixYAxis.z);

        axis.cross(tangent);
        axis.normalize();

        var rotationToSnapOnCurve = new THREE.Quaternion();
        rotationToSnapOnCurve.setFromAxisAngle(axis, angle * THREE.Math.rad);
        rotationToSnapOnCurve.multiply(botQuat);

        var tempMatrix = new THREE.Matrix4();
        tempMatrix.makeRotationFromQuaternion(rotationToSnapOnCurve);
        tempMatrix.setPosition(spinePositions[i])

        // //  world matrix
        // this.joints[i].position.set(spinePositions[i].x, spinePositions[i].y, spinePositions[i].z)
        // m1.extractRotation( tempMatrix );
        // this.joints[i].quaternion.setFromRotationMatrix( m1 );

        // local matrix
        if( this.joints[i].parent !== undefined ){
            var parentInverse = new THREE.Matrix4()
            parentInverse.getInverse(this.joints[i].parent.matrixWorld)

            var localMatrix = new THREE.Matrix4()
            localMatrix.multiplyMatrices(parentInverse, tempMatrix)

            this.joints[i].position.getPositionFromMatrix( localMatrix );        
            m1.extractRotation( localMatrix );
            this.joints[i].quaternion.setFromRotationMatrix( m1 );

            //  update
            this.joints[i].updateMatrix()
            this.joints[i].updateMatrixWorld(true)
        }
    }

    //  local matrix
    var thisIndex = (nJoints-1)
    console.log('\tlast joint', thisIndex, this.joints[thisIndex])
    if( this.joints[thisIndex].parent === undefined ){
        return
    }
    
    var parentInverse = new THREE.Matrix4()
    parentInverse.getInverse(this.joints[thisIndex].parent.matrixWorld)

    var localMatrix = new THREE.Matrix4()
    localMatrix.multiplyMatrices(parentInverse, this.tipCtl.matrixWorld)    

    this.joints[thisIndex].position.getPositionFromMatrix( localMatrix );        
    m1.extractRotation( localMatrix );
    this.joints[thisIndex].quaternion.setFromRotationMatrix( m1 );

    //  update
    this.joints[thisIndex].updateMatrix()
    this.joints[thisIndex].updateMatrixWorld(true)
}