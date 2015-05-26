MM.TwoBoneIkSolver = function() 
{
	// console.log('creating TwoBoneIkSolver')

	MM.Control.call(this);

	//	ik solve
	this.startJoint = undefined;	
    this.middleJoint = undefined;
	this.endJoint = undefined;

    this.startMatrix = new THREE.Matrix4();

    this.twist = 0.0;
	this.poleVector = undefined;
    this.handleControl = undefined;
    
    //  add the ability to modify the handles position internally
    this.customHandlePos = false;
    this.handlePos = new THREE.Vector3();

    this.showStart = undefined;
    this.showEnd = undefined;

    this.prevStartMatrix = new THREE.Matrix4();
	this.prevHandlePos = new THREE.Vector3();
	this.prevPoleVector = new THREE.Vector3();
};

MM.TwoBoneIkSolver.prototype = Object.create( MM.Control.prototype );

MM.TwoBoneIkSolver.prototype.importData = function( data )
{
    // this.startMatrix.fromArray( data.startMatrix )
    this.name = data.name
    this.uuid = data.uuid

    this.twist = data.twist
    this.poleVector = new THREE.Vector3( data.poleVector )

    this.controlColor.setRGB( data.controlColor.r, 
        data.controlColor.g, data.controlColor.b )

    this.controlSize = data.controlSize
    
    this.controlScale.set( data.controlScale.x, 
        data.controlScale.y, data.controlScale.z )  

    this.controlOffset.set( data.controlOffset.x, 
        data.controlOffset.y, data.controlOffset.z ) 
    
    this.controlSide = data.controlSide

    if( data.hasOwnProperty('controlShape')){
        this.controlShape = data.controlShape
    }

    if( data.hasOwnProperty('custom')){
        this.custom = data.custom
    }
}

MM.TwoBoneIkSolver.prototype.exportData = function(){
    var data = {};

    data.type = 'TwoBoneIkSolver';
    data.name = this.name;
    data.uuid = this.uuid;

    //  don't think we have to export this one since its get set during doSolve
    // data.startMatrix = this.startMatrix.toArray()
    data.twist = this.twist;   
    
    data.controlColor = this.controlColor;
    data.controlSize = this.controlSize;
    data.controlScale = this.controlScale;
    data.controlOffset = this.controlOffset;
    data.controlSide = this.controlSide;
    
    if( this.controlShape !== undefined){ 
        data.controlShape = this.controlShape;
    }
    
    if( this.hasOwnProperty('custom')){
        // console.log('\tExporting custom channels')
        data.custom = this.custom;
    }

    return data;
}

MM.TwoBoneIkSolver.prototype.exportSetup = function(){

    var data={};
    data.type = 'TwoBoneIkSolver';
    data.name = this.name;
    data.startMatrix = this.startMatrix.toArray();
    data.startJoint = this.startJoint.name;
    data.middleJoint = this.middleJoint.name;
    data.endJoint = this.endJoint.name;
    data.poleVector = this.poleVector.name;

    if(this.handleControl !== undefined ){
        data.handleControl = this.handleControl.name;
    }

    return data;
}


MM.TwoBoneIkSolver.prototype.importSetup = function(scene, data){
    console.log('TwoBoneIkSolver.importSetup', data)
    
    this.poleVector = scene.getObjectByName(data.poleVector, true);
    this.setStartJoint(scene.getObjectByName(data.startJoint, true));
    
    this.startMatrix.fromArray(data.startMatrix);
    
    this.middleJoint = scene.getObjectByName(data.middleJoint, true);
    this.endJoint = scene.getObjectByName(data.endJoint, true);

    if(data.hasOwnProperty('handleControl')){
        this.handleControl=scene.getObjectByName(data.handleControl, true);  
    }
}


MM.TwoBoneIkSolver.prototype.updateMatrixWorld = function ( force ) {
	THREE.Object3D.prototype.updateMatrixWorld.call(this);

    this.doSolve(force);

    if( this.handleControl !== undefined && this.endJoint.parent !== undefined ){
        var parentInverse = new THREE.Matrix4()
        parentInverse.getInverse(this.endJoint.parent.matrixWorld);   

        var localMatrix = new THREE.Matrix4();
        localMatrix.multiplyMatrices(parentInverse, this.handleControl.matrixWorld)  

        this.endJoint.setRotationFromMatrix(localMatrix);   
        this.endJoint.updateMatrix();
    }
}

MM.TwoBoneIkSolver.prototype.setStartJoint = function(startJoint){
    // console.log('setStartJoint', startJoint.name)
	this.startJoint = startJoint;
    this.startMatrix.extractRotation(startJoint.matrixWorld);
    this.prevStartMatrix = startJoint.matrixWorld;
    
    // console.log(this.startMatrix)
}

MM.TwoBoneIkSolver.prototype.setMidJoint = function(midJoint){
	this.middleJoint = midJoint;
}

MM.TwoBoneIkSolver.prototype.setEndJoint = function(endJoint){
	this.endJoint = endJoint;
}

MM.TwoBoneIkSolver.prototype.updateJoints = function(){
	// this.startJoint.updateMatrix();
	this.startJoint.updateMatrixWorld(true);

	// this.middleJoint.updateMatrix();
	this.middleJoint.updateMatrixWorld(true);

	// this.endJoint.updateMatrix();
	this.endJoint.updateMatrixWorld(true);
}

MM.TwoBoneIkSolver.prototype.doSolve = function( force ){
    if( force === undefined ){
        force = false;
    }

    // console.log('TwoBoneIkSolver: doSolve', this.name, force);

	//	make sure we've assigned our joints
	
	if(this.startJoint === undefined || this.middleJoint === undefined || this.endJoint === undefined){
		// console.log('\tNot all joints have been defined. Nothing to solve.')
		return 
	}	

	//	update the joints 
	this.updateJoints();

//	get all data
	var poleVector = new THREE.Vector3( 0.0, 0.0, -10.0 );
	if(this.poleVector !== undefined)
	{
		poleVector = new THREE.Vector3().subVectors(this.poleVector.getWorldPosition(), 
            this.startJoint.getWorldPosition());        
	}
	
    var startMatrix = this.startJoint.matrixWorld.clone();  
    if(this.customHandlePos === false){ // this is default
        this.handlePos = this.getWorldPosition();
    }

    //  only solve when a the following has changed
    if( ! this.prevStartMatrix.isEquivalent(startMatrix) ||    
        ! this.prevHandlePos.isEquivalent(this.handlePos) ||
        ! this.prevPoleVector.isEquivalent(poleVector) || force)
    {
        //  specify further what has changed
        if(! this.prevStartMatrix.isEquivalent(startMatrix))
        {
            // console.log('\tStart joint has changed position')
            //console.log(this.startJoint)
        }
        if(! this.prevHandlePos.isEquivalent(this.handlePos))
        {
            // console.log('\tHandle has changed position from', this.prevHandlePos.x, this.prevHandlePos.y, this.prevHandlePos.z, 'to', handlePos.x, handlePos.y, handlePos.z)            
        }
        if(! this.prevPoleVector.isEquivalent(poleVector))
        {
            // console.log('\tPole vector has changed from', this.prevPoleVector.x, this.prevPoleVector.y, this.prevPoleVector.z, 'to', poleVector.x, poleVector.y, poleVector.z)
        }

        // console.log(this.startJoint)
        if(this.startJoint.parent instanceof MM.Joint){
            // console.log(this.startJoint.name, 'has a parent')
            var parentInverseMatrix = new THREE.Matrix4();            
            parentInverseMatrix.getInverse(this.startJoint.parent.matrixWorld)

            var newStartMatrix = new THREE.Matrix4();
            newStartMatrix.multiplyMatrices(this.startMatrix, parentInverseMatrix)
            this.startJoint.setRotationFromMatrix(newStartMatrix)
            // console.log('setting rotation to ', parentInverseMatrix)
        }else{
            // console.log(this.startJoint.name, 'has no parent')
            this.startJoint.setRotationFromMatrix(this.startMatrix)
            // console.log('setting rotation to ', this.startMatrix)
        }

        //  set the preferred angles    
        var midPreferedAngle = this.middleJoint.getPreferedAngle()
        this.middleJoint.rotation.set(midPreferedAngle.x, midPreferedAngle.y, midPreferedAngle.z, 'XYZ')		

        //  update the position of all of the joints
        this.updateJoints();

        //	get the rest of the data
        var startPos = this.startJoint.getWorldPosition();      
		var midPos = this.middleJoint.getWorldPosition();
        var endPos = this.endJoint.getWorldPosition();

        if(this.showStart !== undefined){
            this.showStart.position.set(startPos.x, startPos.y, startPos.z);
        }
        if(this.showEnd !== undefined){
            this.showEnd.position.set(endPos.x, endPos.y, endPos.z);
        }

        //	solve ik
        var result = this.ikSolve(startPos, midPos, endPos, this.handlePos, poleVector, this.twist);

        // console.log(this.startJoint.quaternion)
        // this.startJoint.setRotationFromQuaternion(result[0]);

       	//  offset the current rotation with IK rotation
        var startRotation = new THREE.Quaternion();
        var worldStartQuaternion = new THREE.Quaternion().setFromRotationMatrix(this.startJoint.matrixWorld)
        startRotation.multiplyQuaternions(this.startJoint.quaternion, result[0])        
        this.startJoint.setRotationFromQuaternion(startRotation);

        // console.log('TwoBoneIkSolver: offset start', result[0].x, result[0].y, result[0].z, result[0].w)

        var midRotation = new THREE.Quaternion();
        var worldMidQuaternion = new THREE.Quaternion().setFromRotationMatrix(this.middleJoint.matrixWorld)
        midRotation.multiplyQuaternions(result[1], worldMidQuaternion)
        this.middleJoint.setRotationFromQuaternion(midRotation);

        // console.log('TwoBoneIkSolver: offset middle', result[1].x, result[1].y, result[1].z, result[1].w)

        // //	update joints to 
        this.updateJoints();

        //  check if we've actually reached our target!
        var newEndPosition = this.endJoint.getWorldPosition();
        if(newEndPosition.isEquivalentWithinTolerance(this.handlePos, 0.001))
        {
            newEndPosition.subVectors(newEndPosition, this.handlePos); 
            // console.log(this.name, 'is within tolerance,', newEndPosition.length(), ' away.');
        }else{            
            newEndPosition.subVectors(newEndPosition, this.handlePos);            
            // console.log(this.name, 'is not within tolerance. It is still ', newEndPosition.length(), ' away.');            
        }   

		//  update to the used values        
        this.prevStartMatrix = this.startJoint.matrixWorld.clone();       
        this.prevHandlePos = this.handlePos;
        this.prevPoleVector = poleVector;
    }else{
        // console.log('\t', this.name, 'is still up to date. Nothing to solve.')
    }
}

MM.TwoBoneIkSolver.prototype.ikSolve = function( startJointPos, midJointPos, effectorPos, handlePos, poleVector, twist){
    // console.log('----------------------------')

    var kEpsilon=1.0e-5;
    var qStart = new THREE.Quaternion(0,0,0,1);
    var qMid = new THREE.Quaternion(0,0,0,1);
    var tmpv3 = new THREE.Vector3();
    var tmpv3a = new THREE.Vector3();

    var vector1 = new THREE.Vector3().subVectors(midJointPos, startJointPos);
    var vector2 = new THREE.Vector3().subVectors(effectorPos, midJointPos);
    var vectorH = new THREE.Vector3().subVectors(handlePos, startJointPos);
    var vectorE = new THREE.Vector3().subVectors(effectorPos, startJointPos);

    var length1 = vector1.length();
    var length2 = vector2.length();
    var lengthH = vectorH.length();
    var lengthHsquared = lengthH * lengthH;

    tmpv3.copy(vectorE);
    tmpv3.multiplyScalar((vector1.dot(vectorE)) / (vectorE.dot(vectorE)));
    var vector0 = new THREE.Vector3().subVectors(vector1, tmpv3);
    // console.log('vector0', vector0.x, vector0.y, vector0.z)

    //  calculate q12 which solve the midJoint rotation
    var vectorAngle12 = vector1.angleTo(vector2);
    // console.log('vectorAngle12', vectorAngle12, 'or', radToDeg(vectorAngle12))

    var vectorCross12 = new THREE.Vector3().crossVectors(vector1, vector2);
    // console.log('vectorCross12', vectorCross12.x, vectorCross12.y, vectorCross12.z)

        //  cosine
    var cos_theta = (lengthHsquared - (length1*length1) - (length2 * length2)) / (2*length1*length2);
    if (cos_theta > 1) 
        cos_theta = 1;
    else if (cos_theta < -1) 
        cos_theta = -1;
    var theta = Math.acos(cos_theta);

    // console.log('theta', theta, 'or', radToDeg(theta))

    tmpv3.copy(vectorCross12); tmpv3.normalize();
    var q12 = new THREE.Quaternion().setFromAxisAngle(tmpv3, (theta - vectorAngle12) * THREE.Math.rad)

    //  this implemenation gives us a growing quaterion (scales)
    //  maybe this has to do with the big scale? Need to test on smaller values
    //  q12 = new THREE.Quaternion().mSetFromAxisAngle(vectorCross12, theta - vectorAngle12)

    //  calculate qEH which solves for the effector rotation onto the handle
    // console.log('vector2 before', vector2.x, vector2.y, vector2.z)

    vector2.applyQuaternion(q12)

    // console.log('vector2 after', vector2.x, vector2.y, vector2.z)

    vectorE.addVectors(vector1, vector2)
    // console.log('vectorE', vectorE.x, vectorE.y, vectorE.z)

    // console.log('vectorH', vectorH.x, vectorH.y, vectorH.z)

    //  rotate effector onto handle 
    tmpv3.copy(vectorE); tmpv3.normalize();  
    tmpv3a.copy(vectorH); tmpv3a.normalize();

    // this.showStart.position.set(vectorE.x, vectorE.y, vectorE.z)
    // this.showEnd.position.set(vectorH.x, vectorH.y, vectorH.z)

    var qEH = new THREE.Quaternion().setFromVectors(tmpv3, tmpv3a);

    // console.log('qEH', qEH._x, qEH._y, qEH._z, qEH._w)

    vector1.applyQuaternion(qEH);
    if(vector1.isParalell(vectorH))
    {
        // console.log('isParalell');
        vector1 = vector0.applyQuaternion(qEH);
    }

    var qNP = new THREE.Quaternion();
    if(! poleVector.isParalell(vectorH) && (lengthHsquared != 0))
    {
        // console.log('not paralell')
        tmpv3.copy(vectorH);
        tmpv3.multiplyScalar((vector1.dot(vectorH) / lengthHsquared));
        var vectorN = new THREE.Vector3().subVectors( vector1, tmpv3 );

        tmpv3a.copy(vectorH);
        tmpv3a.multiplyScalar((poleVector.dot(vectorH) / lengthHsquared));
        var vectorP = new THREE.Vector3().subVectors( poleVector, tmpv3a );

        // this.showStart.position.set(vectorN.x, vectorN.y, vectorN.z)
        // this.showEnd.position.set(vectorP.x, vectorP.y, vectorP.z)

        var dotNP = (vectorN.dot(vectorP) / vectorN.length()) * vectorP.length();

        if(Math.abs(dotNP+1.0) < kEpsilon){
            // console.log('exception')

            var qNP1 = new THREE.Quaternion()
            // qNP1.setFromAxisAngle(vectorH, THREEkPi * THREE.Math.rad)
            qNP1.setFromAxisAngle(vectorH, THREE.Math.rad)
            qNP1.normalize()
            qNP = qNP1;
        }else{
            var qNP2 = new THREE.Quaternion();

            //  make sure we normalize the vectors before passing it on
            var vectorNN = new THREE.Vector3()
            vectorNN.copy(vectorN)
            vectorNN.normalize()

            // console.log('vectorNN', vectorNN.x, vectorNN.y, vectorNN.z)

            var vectorPN = new THREE.Vector3()
            vectorPN.copy(vectorP)
            vectorPN.normalize()
            
            // console.log('vectorPN', vectorPN.x, vectorPN.y, vectorPN.z)

            qNP2.setFromVectors(vectorNN, vectorPN);
            qNP2.normalize()
            qNP = qNP2;
        }            
    }


    qMid = q12;
    // qStart = qEH;
    qStart.multiplyQuaternions(qNP, qEH)
    return [qStart, qMid]
}