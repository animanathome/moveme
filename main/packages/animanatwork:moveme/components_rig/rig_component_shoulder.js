MM.ShoulderComponent = function( parameters ) 
{   
    MM.RigComponent.call( this );

    this.joints = []
    this.parentJoint = undefined
    this.controlNames = ['_shoulder_0_ctrl']    

    this.setValues( parameters )

    return this;
}

MM.ShoulderComponent.prototype = Object.create( MM.RigComponent.prototype );

MM.ShoulderComponent.prototype.setValues = function( parameters ){
    MM.RigComponent.prototype.setValues.call(this, parameters);

    this.joints = [ '_collar_0_jnt', '_shoulder_0_jnt' ]

    if( parameters !== undefined ){        
        if(parameters.hasOwnProperty('joints')){
            console.log('\tsetting joints value to', parameters['joints'])
            this.joints = parameters['joints']
        }
        if(parameters.hasOwnProperty('parentJoint')){
            console.log('\tsetting parentJoint value to', parameters['parentJoint'])
            this.parentJoint = parameters['parentJoint']
        }
    }
}

MM.ShoulderComponent.prototype.build = function(){
    var parentJoint=this.editor.scene.getObjectByName(this.namespace+this.parentJoint, true)
    if( parentJoint === undefined ){
        console.log('Unable to find parent joint', this.parentJoint)
    }

    var collarJoint=this.editor.scene.getObjectByName(this.namespace+this.side+this.joints[0], true);
    if( collarJoint === undefined ){
        console.log('Unable to find collar joint', this.joints[0])
    }

    var shoulderJoint=this.editor.scene.getObjectByName(this.namespace+this.side+this.joints[1], true);
    if( shoulderJoint === undefined ){
        console.log('Unable to find shoulder joint', this.joints[1])
    }

    var shoulderPos = new THREE.Vector3();
    shoulderPos = shoulderJoint.matrixWorld.getPosition();

    var shoulderZero = new THREE.Object3D();
    shoulderZero.name = this.namespace+this.side+this.controlNames[0]+'Zero'
    this.editor.addObject( shoulderZero )
    shoulderZero.position.set(shoulderPos.x, shoulderPos.y, shoulderPos.z);

    var shoulderIk = new MM.OneSimpleBoneIkSolver();
    shoulderIk.name=this.namespace+this.side+this.controlNames[0]
    shoulderIk.tag = 'control'
    shoulderIk.controlSide = this.side    
    shoulderIk.startJoint = collarJoint;
    shoulderIk.startPreferedAngle.set(collarJoint.rotation.x, collarJoint.rotation.y, collarJoint.rotation.z)
    shoulderIk.endJoint = shoulderJoint; 
    shoulderIk.setChannelsTranslate()
    shoulderIk.controlSize = 8 * this.controlScale;
    shoulderIk.controlScale.set(.1,.4,.4)       
    shoulderIk.controlShape = 'plane'
    shoulderZero.setParent( shoulderIk )

    this.addControl(shoulderIk, this.controlNames[0]);
    this.editor.addSelectables([shoulderIk]) 
    this.editor.addGroupContent( this.assetGroup, [ shoulderIk ] ) 

    return this;
}