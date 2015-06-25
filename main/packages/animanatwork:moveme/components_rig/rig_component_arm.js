MM.ArmComponent = function( parameters ){   
    MM.RigComponent.call( this );

    this.joints = []
    this.parentJoint = undefined
    this.controlNames = ['_elbow_0_ctrl', '_hand_0_ctrl']    

    this.setValues( parameters )

    return this;
}

MM.ArmComponent.prototype = Object.create( MM.RigComponent.prototype );

MM.ArmComponent.prototype.setValues = function( parameters ){

    MM.RigComponent.prototype.setValues.call(this, parameters);

    this.joints = [ '_shoulder_0_jnt', '_elbow_0_jnt',  '_wrist_0_jnt']

    if( parameters !== undefined ){        
        if(parameters.hasOwnProperty('joints')){
            console.log('\tsetting joints value to', parameters['joints'])
            this.joints = parameters['joints']
        }
    }
}

MM.ArmComponent.prototype.build = function(){
    var shoulderJoint=this.editor.scene.getObjectByName(this.namespace+this.side+this.joints[0], true);
    if( shoulderJoint === undefined ){
        console.warn('Unable to find ', this.namespace+this.side+this.joints[0])
    }
    var elbowJoint=this.editor.scene.getObjectByName(this.namespace+this.side+this.joints[1], true);
    if( elbowJoint === undefined ){
        console.warn('Unable to find ', this.namespace+this.side+this.joints[1])
    }
    var wristJoint=this.editor.scene.getObjectByName(this.namespace+this.side+this.joints[2], true);
    if( wristJoint === undefined ){
        console.warn('Unable to find ', this.namespace+this.side+this.joints[2])
    }

    var wristPos = wristJoint.matrixWorld.getPosition();
    // console.log(wristJoint.name, wristPos.x, wristPos.y, wristPos.z)

    var wristIk = new MM.TwoBoneIkSolver()
    shortName = this.name.slice(1, this.name.length)
    wristIk.name = this.getName(shortName+'IkSolver')
    // wristIk.name=side+'_arm_0_ik'        
    wristIk.position.set(wristPos.x, wristPos.y, wristPos.z)
    wristIk.setStartJoint(shoulderJoint)
    wristIk.middleJoint = elbowJoint
    wristIk.endJoint = wristJoint

    // wristIk.controlSize = 8;
    // wristIk.controlScale.set(1,1,1)
    // wristIk.addControlShape();
    
    // wristIk.showStart = scene.getObjectByName('selectionPoint', true);
    // wristIk.showEnd = scene.getObjectByName('selectionPoint1', true);

    this.editor.addObject(wristIk);

    var elbowPos = elbowJoint.matrixWorld.getPosition();
    // console.log(elbowJoint.name, elbowPos.x, elbowPos.y, elbowPos.z)

    var poleControl = new MM.Control();
    poleControl.controlSize = 2 * this.controlScale;
    poleControl.controlShape = 'cube'
    poleControl.name = this.namespace+this.side+this.controlNames[0]
    poleControl.controlSide = this.side
    poleControl.tag = 'control'
    poleControl.position.set(elbowPos.x, elbowPos.y, elbowPos.z-25*this.controlScale)
    poleControl.setChannelsTranslate()
    wristIk.poleVector = poleControl

    this.addControl(poleControl);
    this.editor.addObject(poleControl);

    var handControl = new MM.Constraint();
    handControl.name = this.namespace+this.side+this.controlNames[1]

    wristPos = wristJoint.matrixWorld.getPosition();
    handControl.position.set(wristPos.x, wristPos.y, wristPos.z)
    handControl.constraintMode = 1;    
    handControl.controlSide = this.side
    handControl.tag = 'control'
    handControl.controlSize = 4 * this.controlScale;
    handControl.controlScale.set(0.4,1,1)
    handControl.controlShape = 'cube'    
    handControl.setChannelsTranslateAndRotate();
    this.editor.addObject(handControl)
    this.addControl(handControl);
    handControl.setObjectToSolve(wristJoint); 
    handControl.setParent( wristIk )

    return this;
}