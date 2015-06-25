MM.OneSimpleBoneIkSolver = function(){
    // console.log('creating TwoBoneIkSolver')
    MM.Control.call(this);
    this.type = 'OneSimpleBoneIkSolver'

    //  ik solve
    this.startJoint = undefined;
    this.endJoint = undefined;
    this.startPreferedAngle = new THREE.Vector3();

    //  private
    this.prevStartMatrix = new THREE.Matrix4();
    this.prevStartPos = new THREE.Vector3();
    this.prevHandlePos = new THREE.Vector3();
}

MM.OneSimpleBoneIkSolver.prototype = Object.create( MM.Control.prototype );

MM.OneSimpleBoneIkSolver.prototype.importData = function( data )
{
    this.name = data.name
    this.uuid = data.uuid

    this.controlColor.setRGB( data.controlColor.r, data.controlColor.g, 
        data.controlColor.b )

    this.controlSize = data.controlSize
    
    this.controlScale.set( data.controlScale.x, data.controlScale.y, 
        data.controlScale.z )  

    this.controlOffset.set( data.controlOffset.x, data.controlOffset.y, 
        data.controlOffset.z ) 
    
    this.controlSide = data.controlSide

    if( data.hasOwnProperty('controlShape')){
        this.controlShape = data.controlShape
    }

    if( data.hasOwnProperty('custom')){
        this.custom = data.custom
    }
}

MM.OneSimpleBoneIkSolver.prototype.exportData = function()
{
    var data = {}

    data.name = this.name
    data.uuid = this.uuid
    data.type = this.type

    data.controlColor = this.controlColor
    data.controlSize = this.controlSize
    data.controlScale = this.controlScale
    data.controlOffset = this.controlOffset
    data.controlSide = this.controlSide

    if( this.controlShape !== undefined ) 
        data.controlShape = this.controlShape 
        
    if( this.hasOwnProperty('custom')){
        // console.log('\tExporting custom channels')
        data.custom = this.custom
    }   

    return data;
}

MM.OneSimpleBoneIkSolver.prototype.exportSetup = function(){
    var data = {}

    data.type = 'OneSimpleBoneIkSolver';
    data.name = this.name;
    data.startJoint = this.startJoint.name
    data.endJoint = this.endJoint.name
    data.startPreferedAngle = this.startPreferedAngle.toArray()

    return data
}

MM.OneSimpleBoneIkSolver.prototype.importSetup = function(scene, data){
    var startJoint = scene.getObjectByName(data.startJoint , true)
    var endJoint = scene.getObjectByName(data.endJoint , true)

    this.setStartJoint(startJoint)             
    this.endJoint = endJoint
    this.startPreferedAngle.fromArray(data.startPreferedAngle)
}

MM.OneSimpleBoneIkSolver.prototype.updateMatrixWorld = function ( force ) {
    MM.Control.prototype.updateMatrixWorld.call(this);

    this.doSolve();
}

MM.OneSimpleBoneIkSolver.prototype.setStartJoint = function(startJoint){
    this.startJoint = startJoint;
    this.prevStartMatrix = startJoint.matrixWorld;
}

MM.OneSimpleBoneIkSolver.prototype.updateJoints = function(){
    this.startJoint.updateMatrix();
    this.startJoint.updateMatrixWorld(true);

    this.endJoint.updateMatrix();
    this.endJoint.updateMatrixWorld(true);
}

MM.OneSimpleBoneIkSolver.prototype.doSolve = function()
{
    // console.log('OneSimpleBoneIkSolver: doSolve', this.name);

    if(this.startJoint === undefined || this.endJoint === undefined){
        // console.log('\tNot all joints have been defined. Nothing to solve.')
        return 
    }   

    this.updateJoints();

    var startMatrix = this.startJoint.matrixWorld.clone(); 
    var startPos = this.startJoint.getWorldPosition();    
    var handlePos = this.getWorldPosition();    

    //  only solve when a the following has changed
    if( ! this.prevStartMatrix.isEquivalent(startMatrix) ||    
        ! this.prevHandlePos.isEquivalent(handlePos))        
    {        
        // console.log(this.name, 'is not up to date, updating...')

        // set prefered angles
        this.startJoint.rotation.x = this.startPreferedAngle.x
        this.startJoint.rotation.y = this.startPreferedAngle.y
        this.startJoint.rotation.z = this.startPreferedAngle.z

        this.updateJoints();

        var endPos = this.endJoint.getWorldPosition();

        var result = this.ikSolve(startPos, endPos, handlePos);   

        //  offset the current rotation with IK rotation
        var baseRotation = new THREE.Quaternion();        
        baseRotation.multiplyQuaternions(result, this.startJoint.quaternion)
        this.startJoint.setRotationFromQuaternion(baseRotation);

        // //  offset the current rotation with IK rotation
        // var startRotation = new THREE.Quaternion();
        // var worldStartQuaternion = new THREE.Quaternion().setFromRotationMatrix(this.startJoint.matrixWorld)
        // startRotation.multiplyQuaternions(worldStartQuaternion, result)
        // this.startJoint.setRotationFromQuaternion(startRotation);        

        //  re-evaluate hierarchy
        this.updateJoints();

        //  check if we've actually reached our target!
        var newEndPosition = this.endJoint.getWorldPosition();
        if(newEndPosition.isEquivalentWithinTolerance(handlePos, 0.1))
        {
            newEndPosition.subVectors(newEndPosition, handlePos); 
            // console.log(this.name, 'is within tolerance,', newEndPosition.length(), ' away.');
        }else{            
            newEndPosition.subVectors(newEndPosition, handlePos);            
            // console.log(this.name, 'is not within tolerance. It is still ', newEndPosition.length(), ' away.');            
        }           

        //  update to the used values
        this.prevStartMatrix = this.startJoint.matrixWorld.clone();    
        this.prevStartPos = startPos;
        this.prevHandlePos = handlePos;        
    }else{
        // console.log(this.name, 'is up to date. Nothing to solve.')
    }
}

MM.OneSimpleBoneIkSolver.prototype.ikSolve = function(startJointPos, effectorPos, handlePos)
{
    // console.log('ikSolve')

    var start = new THREE.Quaternion(0,0,0,1);

    var vectorH = new THREE.Vector3();
    vectorH.subVectors(handlePos, startJointPos)
    // console.log('vectorH', vectorH.x, vectorH.y, vectorH.z)

    var vectorE = new THREE.Vector3();
    vectorE.subVectors(effectorPos, startJointPos)
    // console.log('vectorE', vectorE.x, vectorE.y, vectorE.z)

    var lengthH = vectorH.length();
    var lengthE = vectorE.length();

    var crossEH = new THREE.Vector3();
    crossEH = crossEH.crossVectors(vectorE, vectorH)
    crossEH.normalize()
    // console.log('crossEH', crossEH.x, crossEH.y, crossEH.z)
    
    var factorEH = vectorE.length() * vectorH.length()
    // console.log('factorEH', factorEH)

    var dotHE = vectorH.dot(vectorE)/factorEH;
    // console.log('dotHE', dotHE)

    var dotHEClamped=Math.min(Math.max(dotHE, -1.0), 1.0);
    // console.log('dotHEClamped', dotHEClamped)

    var angleHE = Math.acos(dotHEClamped) 
    // console.log('angleHE', dotHE)

    //  rotation axis, rotation angle
    start.setFromAxisAngle(crossEH, angleHE * THREE.Math.rad) 

    // console.log('start', start.x, start.y, start.z, start.w) 
    return start;
}