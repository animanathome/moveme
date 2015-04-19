MM.FourBoneIkBlendSolver = function(){
    MM.TwoBoneIkBlendSolver.call(this);

    this.heelJoint = undefined;
    this.ballJoint = undefined;
    this.toeJoint = undefined;

    this.ballFkCtl = undefined;

    //  foot roll setup hierarchy
    this.toeObject = undefined;
    this.ballObject = undefined;
    this.heelObject = undefined;
    this.ankleObject = undefined;

    //  control channel
    this.toeChannel = undefined;
    this.ballChannel = undefined;
    this.heelChannel = undefined;
    this.toeRotateChannel = undefined;

    //  joint offset
    this.ballJointRotationOffset = undefined;
}

MM.FourBoneIkBlendSolver.prototype = Object.create(MM.TwoBoneIkBlendSolver.prototype);

MM.FourBoneIkBlendSolver.prototype.exportData = function(){
    var data = MM.TwoBoneIkBlendSolver.prototype.exportData.call(this);
    data.type = 'FourBoneIkBlendSolver'    
    return data
}

MM.FourBoneIkBlendSolver.prototype.importSetup = function(scene, data){
    console.log('FourBoneIkBlendSolver.importSetup', this.name)
    console.log('\tdata', data)

    MM.TwoBoneIkBlendSolver.prototype.importSetup.call(this, scene, data);

    this.heelJoint = scene.getObjectByName(data.heelJoint,true);
    this.ballJoint = scene.getObjectByName(data.ballJoint,true);
    this.toeJoint = scene.getObjectByName(data.toeJoint,true);
    this.ballFkCtl = scene.getObjectByName(data.ballFkCtl,true);
    this.toeObject = scene.getObjectByName(data.toeObject,true);
    this.ballObject = scene.getObjectByName(data.ballObject,true);
    this.heelObject = scene.getObjectByName(data.heelObject,true);
    this.ankleObject = scene.getObjectByName(data.ankleObject,true);

    //  control channel
    this.toeChannel=data.toeChannel;
    this.ballChannel=data.ballChannel;
    this.heelChannel=data.heelChannel;
    this.toeRotateChannel=data.toeRotateChannel;    
};

MM.FourBoneIkBlendSolver.prototype.exportSetup = function(){
    console.log('FourBoneIkBlendSolver.exportSetup', this.name)

    var data = MM.TwoBoneIkBlendSolver.prototype.exportSetup.call(this);
    data.type = 'FourBoneIkBlendSolver';

    data.heelJoint = this.heelJoint.name;
    data.ballJoint = this.ballJoint.name;
    data.toeJoint = this.toeJoint.name;

    data.ballFkCtl = this.ballFkCtl.name;

    //  foot roll setup hierarchy
    data.toeObject = this.toeObject.name;
    data.ballObject = this.ballObject.name;
    data.heelObject = this.heelObject.name;
    data.ankleObject = this.ankleObject.name;

    //  control channel
    data.toeChannel = this.toeChannel;
    data.ballChannel = this.ballChannel;
    data.heelChannel = this.heelChannel;
    data.toeRotateChannel = this.toeRotateChannel;

    return data;
}

MM.FourBoneIkBlendSolver.prototype.updateMatrixWorld = function ( force ){
//  IK
    //  use our custom channels to drive hidden object channels
    //  is this case it is to generate the foot roll behavior
    if( this.handleControl !== undefined ){
        this.toeObject.rotation.x = this.handleControl.custom[this.toeChannel];
        this.ballObject.rotation.x = this.handleControl.custom[this.ballChannel];
        this.heelObject.rotation.x = this.handleControl.custom[this.heelChannel];
    }
    
    //  do everything except blend, otherwise we'll have trouble properly blending
    //  between our newly added joints ( ball and ankle)
    this.doBlend = false;
    MM.TwoBoneIkBlendSolver.prototype.updateMatrixWorld.call(this, force);

    //  WARNING
    //  When the foot control to far to the front or the back it can happen that
    //  the aim and up vector become parallel causing our result to flip. 
    //  We could this push this further by chosing a different up when the dot 
    //  product is to close to parallel.    
    var thisUp, thisSide;
    if( this.ballObject !== undefined){
        // thisUp = new THREE.Vector3().subVectors(this.startJoint.getWorldPosition(),
                // this.endJoint.getWorldPosition()).normalize();
        // thisUp.add( this.ballObject.getWorldUp() ).multiplyScalar( 0.5 )
        thisUp = this.ballObject.getWorldUp();
        thisUp.multiplyScalar( 5 )
        thisSide = this.ballObject.getWorldSide();
        thisSide.multiplyScalar( 5 )
    }

    //  aim ankle to ball
    if( this.ballObject !== undefined && this.endJoint.parent !== undefined ){
        // this.endJoint.matrix = new THREE.Matrix4();
        // this.updateJoints();
        this.endJoint.matrix = new THREE.Matrix4();
        this.endJoint.updateMatrix()

        var aimPosition = this.ballObject.getWorldPosition();
        var thisPosition = this.endJoint.getWorldPosition();

         // debugging
        // this.showPos.position.set( thisPosition.x, thisPosition.y, thisPosition.z)
        // this.showSide.position.set( thisSide.x, thisSide.y, thisSide.z)
        // this.showUp.position.set( thisUp.x, thisUp.y, thisUp.z)
        // this.showAim.position.set( aimPosition.x, aimPosition.y, aimPosition.z)   

        // this.showEndJoint.matrix = new THREE.Matrix4(); // GREEN
        // this.showEndJoint.applyMatrix( this.endJoint.matrix )

        // //  world space reference matrix
        // this.showNew.position.set( thisPosition.x, thisPosition.y, thisPosition.z ) 
        // var n1 = new THREE.Matrix4().copy( this.showNew.matrixWorld )    
        var n1 = new THREE.Matrix4()
        n1.setPosition( new THREE.Vector3( thisPosition.x, thisPosition.y, thisPosition.z ));
        n1.lookAt( aimPosition, thisPosition, thisUp, thisSide );
        // this.showNew.rotation.setFromRotationMatrix( n1 );
        // this.showNew.updateMatrix();


        var pim = new THREE.Matrix4().getInverse( this.endJoint.parent.matrixWorld )
        var lam = new THREE.Matrix4().multiplyMatrices( pim, n1)
        lam.unify()

        // console.log( 'local aim matrix', lam )
        // this.showLocalAim.matrix = new THREE.Matrix4(); // BLUE
        // this.showLocalAim.applyMatrix( lam )
        this.updateJoints();
        
        if( this.aimAnkleOffset === undefined ){
            // var inverse = new THREE.Matrix4().getInverse( this.showLocalAim.matrixWorld )
            // this.aimAnkleOffset = new THREE.Matrix4().multiplyMatrices( inverse, this.showEndJoint.matrixWorld )
            
            var inverse = new THREE.Matrix4().getInverse( lam )
            this.aimAnkleOffset = new THREE.Matrix4().multiplyMatrices( inverse, this.endJoint.matrixWorld )

            //  don't understand why there is an offset here as both should be located at the same location!!!
            // console.log('local offset', this.aimAnkleOffset.elements)
            // this.aimAnkleOffset.elements[12] = 0;
            // this.aimAnkleOffset.elements[13] = 0;
            // this.aimAnkleOffset.elements[14] = 0;            
        }else{
            var lamo = new THREE.Matrix4().multiplyMatrices( lam, this.aimAnkleOffset)
            // this.showLocalAimOffset.matrix = new THREE.Matrix4();
            // this.showLocalAimOffset.applyMatrix( lamo )

            // this.endJoint.matrix = new THREE.Matrix4();
            // this.endJoint.applyMatrix( lamo )
            this.endJoint.rotation.setFromRotationMatrix( lamo )            
        }

        //     var offsetMatrix = new THREE.Matrix4().multiplyMatrices( this.aimAnkleOffset, n1 )
        //     this.endJoint.rotation.setFromRotationMatrix( offsetMatrix )            
        // }else{
        //     this.aimAnkleOffset = new THREE.Matrix4().getInverse(n1)            
        // }
    
        // var m1 = new THREE.Matrix4().copy( this.endJoint.matrixWorld );
        // m1.lookAt( aimPosition, thisPosition, thisUp, thisSide );

        // var parentInverse = new THREE.Matrix4().getInverse(this.endJoint.parent.matrixWorld);
        // var m2 = new THREE.Matrix4().multiplyMatrices( parentInverse, m1 )
        
        // if( this.aimAnkleOffset !== undefined ){
        //     var m3 = new THREE.Matrix4().multiplyMatrices( this.aimAnkleOffset, m2 )
        //     this.endJoint.rotation.setFromRotationMatrix( m3)     
        // }else{
        //     this.endJoint.rotation.setFromRotationMatrix( m2)
        //     this.endJoint.updateMatrix();
        //     this.aimAnkleOffset = new THREE.Matrix4().getInverse(this.endJoint.matrix)  
        //     // console.log('ankle offset', this.aimAnkleOffset)          
        // }
             
        //  update all joints using our new result
        this.updateJoints();
    }

    //  aim ball to toe 
    if( this.toeObject !== undefined && this.ballJoint.parent !== undefined){
        var aimPosition = this.toeObject.getWorldPosition();
        var thisPosition = this.ballJoint.getWorldPosition();

        var m1 = new THREE.Matrix4().copy( this.ballJoint.matrixWorld );
        m1.lookAt( aimPosition, thisPosition, thisUp )//, thisSide );

        //  Store rotation offset between the toe and ball. We need to do this since those joints don't always lay on the same plane
        if(this.ballJointRotationOffset === undefined){
            this.ballJointRotationOffset = new THREE.Matrix4().getInverse(m1);
        }else{
            temp = new THREE.Matrix4().copy(m1)
            m1 = new THREE.Matrix4().multiplyMatrices( temp, this.ballJointRotationOffset)
        }

        var parentInverse = new THREE.Matrix4().getInverse(this.ballJoint.parent.matrixWorld);
        var m2 = new THREE.Matrix4().multiplyMatrices( parentInverse, m1 )
        
        this.ballJoint.rotation.setFromRotationMatrix( m2)

        //  offset ball rotation
        this.ballJoint.rotateX( this.handleControl.custom[this.toeRotateChannel] );
             
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
        this.ballJoint.quaternion.slerp( this.ballFkCtl.quaternion, blendValue )    

        //  only show the controls that are relevant
        //  ik
        if( blendValue === 0 ){
            this.startFkCtrl.hide()
            this.middleFkCtrl.hide()
            this.endFkCtrl.hide()
            this.ballFkCtl.hide()
            this.poleVector.show()
            this.handleControl.show()
        }
        //  fk
        else if( blendValue === 1 ){
            this.startFkCtrl.show()
            this.middleFkCtrl.show()
            this.endFkCtrl.show()
            this.ballFkCtl.show()
            this.poleVector.hide()
            this.handleControl.hide()
        }
        //  blend 
        else{
            this.startFkCtrl.show()
            this.middleFkCtrl.show()
            this.endFkCtrl.show()
            this.ballFkCtl.show()
            this.poleVector.show()
            this.handleControl.show()
        }
        
        this.updateJoints();        
    }  
}