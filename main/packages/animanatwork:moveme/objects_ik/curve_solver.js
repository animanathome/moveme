MM.CurveSolver = function(){
	MM.Control.call(this);

    this.type = 'CurveSolver'

	this.joints = []
	this.baseControlPoints = []
	this.deformedControlPoints = []
	
	this.rootCtl = undefined
	this.rootIndices = [0,1]
	this.rootBindMatrix = new THREE.Matrix4()
	
	this.tipCtl = undefined
	this.tipIndices = [2,3]
	this.tipBindMatrix = new THREE.Matrix4()

    this.followBottomControl = false
    this.skipFirstJoint = false
}

MM.CurveSolver.prototype = Object.create(MM.Control.prototype);

MM.CurveSolver.prototype.importData = function(data){
    // console.log('CurveSolver.importData', data)

    MM.Control.prototype.importData.call(this, data);

    // console.log('\tdata rootBindMatrix', data.rootBindMatrix)
    this.rootBindMatrix.fromArray(data.rootBindMatrix)
    // console.log('\tthis rootBindMatrix', this.rootBindMatrix.elements)
    this.rootIndices = data.rootIndices

    // console.log('\tdata tipBindMatrix', data.tipBindMatrix)    
    this.tipBindMatrix.fromArray(data.tipBindMatrix)
    // console.log('\tthis tipBindMatrix', this.tipBindMatrix.elements)
    this.tipIndices = data.tipIndices
    
    this.followBottomControl = data.followBottomControl
    this.skipFirstJoint = data.skipFirstJoint

    // console.log('\tfinished importing data', this)
}

MM.CurveSolver.prototype.exportData = function(){
    // console.log('CurveSolver.exportData')

    var data = MM.Control.prototype.exportData.call(this)
    data.type = this.type    
    
    data.rootBindMatrix = []
    this.rootBindMatrix.flattenToArray(data.rootBindMatrix)
    // console.log('\trootBindMatrix', data.rootBindMatrix)    
    data.rootIndices = this.rootIndices
    
    data.tipBindMatrix = []
    this.tipBindMatrix.flattenToArray(data.tipBindMatrix)
    // console.log('\ttipBindMatrix', data.tipBindMatrix)
    data.tipIndices = this.tipIndices
    
    data.followBottomControl = this.followBottomControl
    data.skipFirstJoint = this.skipFirstJoint

    return data
}

MM.CurveSolver.prototype.exportSetup = function(){
    // console.log('CurveSolver.exportSetup')

    var data = {}
    data.type = this.type
    data.name = this.name
    data.joints = []
    for( var i = 0; i < this.joints.length; i++){
        data.joints.push( this.joints[i].name )
    }

    data.baseControlPoints = []
    for( var i = 0; i < this.baseControlPoints.length; i++){
        data.baseControlPoints.push( this.baseControlPoints[i].x)
        data.baseControlPoints.push( this.baseControlPoints[i].y)
        data.baseControlPoints.push( this.baseControlPoints[i].z)
    }

    data.rootCtl = this.rootCtl.name
    data.tipCtl = this.tipCtl.name

    return data;
}

MM.CurveSolver.prototype.importSetup = function(scene, data){
    // console.log('CurveSolver.importSetup', data)
    
    var thisJoint;
    for( var i = 0; i < data.joints.length; i++){
        thisJoint = scene.getObjectByName(data.joints[i], true);
        if( thisJoint === undefined ){
            console.error('Unable to find', data.joints[i])
        }
        this.joints.push(thisJoint)
    }

    for( var i = 0; i < data.baseControlPoints.length; i++){
        this.baseControlPoints.push( new THREE.Vector3( 
            data.baseControlPoints[i],
            data.baseControlPoints[i+1],
            data.baseControlPoints[i+2])
        )
        i += 2

        this.deformedControlPoints.push(new THREE.Vector4());
    }

    var rootCtl = scene.getObjectByName(data.rootCtl, true)
    if( rootCtl !== undefined ){
        this.rootCtl = rootCtl
    }else{
        console.error('Unable to find '+data.rootCtl)
    }

    var tipCtl = scene.getObjectByName(data.tipCtl, true)
    if( tipCtl !== undefined ){
        this.tipCtl = tipCtl
    }else{
        console.error('Unable to find '+data.tipCtl)
    }

    // console.log('\tfinished importSetup', this)
}

MM.CurveSolver.prototype.setTipControl = function(control){
	// console.log('CurveSolver.setTipControl', control)

	this.tipCtl = control
	this.tipBindMatrix = control.matrixWorld.clone()
}

MM.CurveSolver.prototype.updateTipControl = function(){
	// console.log('CurveSolver.updateTipControl')

	var nv = this.tipIndices.length
	for(var i = 0; i < nv; i++){
		var thisIndex = this.tipIndices[i]
        var thisVertex = this.baseControlPoints[thisIndex].clone();
        
		// console.log('\tb', thisIndex, thisVertex.x, thisVertex.y, thisVertex.z)

        var inverseMatrix = new THREE.Matrix4();
        inverseMatrix.getInverse(this.tipBindMatrix)

        var localMatrix = new THREE.Matrix4();
        localMatrix.multiplyMatrices(this.tipCtl.matrixWorld, inverseMatrix)

        thisVertex.applyMatrix4(localMatrix);
        this.deformedControlPoints[thisIndex].set(thisVertex.x, thisVertex.y, thisVertex.z, 1.0)

        // console.log('\td', thisIndex, thisVertex.x, thisVertex.y, thisVertex.z)
	}
}

MM.CurveSolver.prototype.setRootControl = function(control){
	// console.log('CurveSolver.setRootControl', control)
	this.rootCtl = control
	this.rootBindMatrix = control.matrixWorld.clone()
}

MM.CurveSolver.prototype.updateRootControl = function(){
	// console.log('CurveSolver.updateRootControl')

	var nv = this.rootIndices.length
	for(var i = 0; i < nv; i++){
		var thisIndex = this.rootIndices[i]
        var thisVertex = this.baseControlPoints[thisIndex].clone();

        // console.log('\tb', thisIndex, thisVertex.x, thisVertex.y, thisVertex.z)
        
        var inverseMatrix = new THREE.Matrix4();
        inverseMatrix.getInverse(this.rootBindMatrix)

        var localMatrix = new THREE.Matrix4();
        localMatrix.multiplyMatrices(this.rootCtl.matrixWorld, inverseMatrix)

        thisVertex.applyMatrix4(localMatrix);
        this.deformedControlPoints[thisIndex].set(thisVertex.x, thisVertex.y, thisVertex.z, 1.0)

        // console.log('\td', thisIndex, thisVertex.x, thisVertex.y, thisVertex.z)
	}
}

MM.CurveSolver.prototype.setJoints = function(joints){
	// console.log('CurveSolver.setJoints', joints)

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
    var i;
    for(i = 0; i < nJoints; i++){
        var wpos = THREE.NURBSUtils.calcBSplinePoint(nurbsDegree, nurbsKnots, this.deformedControlPoints, blendValues[i]);

        // console.log('\t\t', i, 'position', wpos.x, wpos.y, wpos.z)
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
    // }else{
    //     console.log('\tfollowing curve')
    }

	var m1 = new THREE.Matrix4();
    for(i = startIndex; i < (nJoints-1); i++){
        // console.log('\tupdating joint position ', i)

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
    // console.log('\tlast joint', thisIndex, this.joints[thisIndex])
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