MM.TwoStepFourBoneIkBlendSolver = function(){
    MM.TwoBoneIkBlendSolver.call(this);

    this.heelJoint = undefined;
    this.ball0Joint = undefined;
    this.ball1Joint = undefined;
    this.toeJoint = undefined;

    this.ball0FkCtl = undefined;
    this.ball1FkCtl = undefined;

    //  foot roll setup hierarchy
    this.toeObject = undefined;
    this.ball0Object = undefined;
    this.ball1Object = undefined;
    this.heelObject = undefined;

    //  control channel
    this.toeChannel = undefined;
    this.ballChannel = undefined;
    this.heelChannel = undefined;
    this.toeRotateChannel = undefined;

    //  how much does the first ball joint have to be rotated before we pass
    //  on to the next to generate a 2 step foot roll behavior
    this.ball0EndValue = 20;
    this.ball1EndValue = 20;
}

MM.TwoStepFourBoneIkBlendSolver.prototype = Object.create(MM.TwoBoneIkBlendSolver.prototype);

MM.TwoStepFourBoneIkBlendSolver.prototype.exportData = function(){
    var data = MM.TwoBoneIkBlendSolver.prototype.exportData.call(this);
    data.type = 'TwoStepFourBoneIkBlendSolver'
    return data
}

MM.TwoStepFourBoneIkBlendSolver.prototype.updateMatrixWorld = function ( force ){
//  IK
    //  use our custom channels to drive hidden object channels
    //  is this case it is to generate the foot roll behavior
    if( this.handleControl !== undefined ){
        this.toeObject.rotation.x = this.handleControl.custom[this.toeChannel];
        
        var thisBallChannelValue = this.handleControl.custom[this.ballChannel]        
        if( this.ball0EndValue > thisBallChannelValue){
            this.ball0Object.rotation.x = thisBallChannelValue;
            this.ball1Object.rotation.x = 0;
        }else{
            this.ball0Object.rotation.x = this.ball0EndValue;
            this.ball1Object.rotation.x = thisBallChannelValue - this.ball0EndValue;
        }
        
        this.heelObject.rotation.x = this.handleControl.custom[this.heelChannel];
    }

    //  do everything except blend, otherwise we'll have trouble properly blending
    //  between our newly added joints ( ball and ankle)
    this.doBlend = false;
    MM.TwoBoneIkBlendSolver.prototype.updateMatrixWorld.call(this, force);    

    var thisUp, thisSide;
    if( this.ball0Object !== undefined){
        thisUp = this.ball0Object.getWorldUp();
        thisUp.multiplyScalar( 5 )
        thisSide = this.ball0Object.getWorldSide();
        thisSide.multiplyScalar( 5 )
    }

    if( this.ball0Object !== undefined && this.endJoint.parent !== undefined ){
        this.endJoint.matrix = new THREE.Matrix4();
        this.endJoint.updateMatrix()

        var aimPosition = this.ball0Object.getWorldPosition();
        var thisPosition = this.endJoint.getWorldPosition();        
        
        var n1 = new THREE.Matrix4()
        n1.setPosition( new THREE.Vector3( thisPosition.x, thisPosition.y, thisPosition.z ));
        n1.lookAt( aimPosition, thisPosition, thisUp, thisSide );
        
        var pim = new THREE.Matrix4().getInverse( this.endJoint.parent.matrixWorld )
        var lam = new THREE.Matrix4().multiplyMatrices( pim, n1)
        lam.unify()

        this.updateJoints();
        
        if( this.aimAnkleOffset === undefined ){            
            var inverse = new THREE.Matrix4().getInverse( lam )
            this.aimAnkleOffset = new THREE.Matrix4().multiplyMatrices( inverse, this.endJoint.matrixWorld )
        }else{
            var lamo = new THREE.Matrix4().multiplyMatrices( lam, this.aimAnkleOffset)
            this.endJoint.rotation.setFromRotationMatrix( lamo )            
        }
        this.updateJoints();
    }

    if( this.ball1Object !== undefined && this.ball0Joint.parent !== undefined){
        var aimPosition = this.ball1Object.getWorldPosition();
        var thisPosition = this.ball0Joint.getWorldPosition();

        var m1 = new THREE.Matrix4().copy( this.ball0Joint.matrixWorld );
        m1.lookAt( aimPosition, thisPosition, thisUp )//, thisSide );

        var parentInverse = new THREE.Matrix4().getInverse(this.ball0Joint.parent.matrixWorld);
        var m2 = new THREE.Matrix4().multiplyMatrices( parentInverse, m1 )
        
        this.ball0Joint.rotation.setFromRotationMatrix( m2)
             
        //  update all joints using our new result
        this.updateJoints();            
    }

    if( this.toeObject !== undefined && this.ball1Joint.parent !== undefined){
        var aimPosition = this.toeObject.getWorldPosition();
        var thisPosition = this.ball1Joint.getWorldPosition();

        var m1 = new THREE.Matrix4().copy( this.ball1Joint.matrixWorld );
        m1.lookAt( aimPosition, thisPosition, thisUp )//, thisSide );

        var parentInverse = new THREE.Matrix4().getInverse(this.ball1Joint.parent.matrixWorld);
        var m2 = new THREE.Matrix4().multiplyMatrices( parentInverse, m1 )
        
        this.ball1Joint.rotation.setFromRotationMatrix( m2)

        //  offset ball rotation
        this.ball1Joint.rotateX( this.handleControl.custom[this.toeRotateChannel] );
             
        //  update all joints using our new result
        this.updateJoints();            
    }

//  BLEND
    if( this.customCtrl !== undefined && this.ikFkBlendGroup !== undefined
        && this.ikFkBlendChannel !== undefined ){
        var blendObjectGroup = this.customCtrl[this.ikFkBlendGroup]
        var blendValue = blendObjectGroup[this.ikFkBlendChannel]
        if( blendValue < 0.0 ) blendValue = 0;
        if( blendValue > 1.0 ) blendValue = 1;

        //  blend between ik and fk
        this.startJoint.quaternion.slerp( this.startFkCtrl.quaternion, blendValue )
        this.middleJoint.quaternion.slerp( this.middleFkCtrl.quaternion, blendValue )
        this.endJoint.quaternion.slerp( this.endFkCtrl.quaternion, blendValue )
        this.ball0Joint.quaternion.slerp( this.ball0FkCtl.quaternion, blendValue ) 
        this.ball1Joint.quaternion.slerp( this.ball1FkCtl.quaternion, blendValue )    

        //  only show the controls that are relevant
        //  ik
        if( blendValue === 0 ){
            this.startFkCtrl.hide()
            this.middleFkCtrl.hide()
            this.endFkCtrl.hide()
            this.ball0FkCtl.hide()
            this.ball1FkCtl.hide()
            this.poleVector.show()
            this.handleControl.show()
        }
        //  fk
        else if( blendValue === 1 ){
            this.startFkCtrl.show()
            this.middleFkCtrl.show()
            this.endFkCtrl.show()
            this.ball0FkCtl.show()
            this.ball1FkCtl.show()
            this.poleVector.hide()
            this.handleControl.hide()
        }
        //  blend 
        else{
            this.startFkCtrl.show()
            this.middleFkCtrl.show()
            this.endFkCtrl.show()
            this.ball0FkCtl.show()
            this.ball1FkCtl.show()
            this.poleVector.show()
            this.handleControl.show()
        }
        
        this.updateJoints();        
    }     
}    
