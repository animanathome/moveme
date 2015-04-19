MM.TwoBoneIkBlendSolver = function(){    
    MM.TwoBoneSoftIkSolver.call(this);

    //  object which contains the control channels
    this.customCtrl = undefined

    //  Define ik fk blend control channel 
    this.ikFkBlendGroup = undefined // can this be different then custom?
    this.ikFkBlendChannel = undefined
    this.doBlend = true;
    
    //  define fk controls
    this.startFkCtrl = undefined;
    this.middleFkCtrl = undefined;
    this.endFkCtrl = undefined;

    //  stretch 
    // //  stretch factor - global scale value
    // this.stretchGroup = undefined; // can this be different then custom?
    // this.stretchChannel = undefined;

    // //  auto stretch 
    // this.autoStretchGroup = undefined; // can this be different then custom?
    // this.autoStretchChannel = undefined;
    // this.autoMinChannel = undefined;
    // this.autoMaxChannel = undefined;

    // this.stretchAxis = undefined
    // this.startLength = undefined;
    // this.endLength = undefined;   
    // this.previousStretch = 1.0; 

    //  Regarding: can this be different then custom?
    //  Will be less code if we make this assumption/rule. Since these solver 
    //  require a fixed setup anyway I guess it can't hurt to setup this rule. 
}

MM.TwoBoneIkBlendSolver.prototype=Object.create(MM.TwoBoneSoftIkSolver.prototype);

MM.TwoBoneIkBlendSolver.prototype.exportData = function(){
    var data = MM.TwoBoneSoftIkSolver.prototype.exportData.call(this);
    data.type = 'TwoBoneIkBlendSolver'
    return data
}

MM.TwoBoneIkBlendSolver.prototype.importSetup = function(scene, data){
    console.log('TwoBoneIkBlendSolver.importSetup', this.name)
    console.log('\tdata', data)

    MM.TwoBoneSoftIkSolver.prototype.importSetup.call(this, scene, data);

    this.startFkCtrl = scene.getObjectByName( data.startFkCtrl, true );
    this.middleFkCtrl = scene.getObjectByName( data.middleFkCtrl, true );
    this.endFkCtrl = scene.getObjectByName( data.endFkCtrl, true );
    this.customCtrl = scene.getObjectByName( data.customCtrl, true );

    this.ikFkBlendGroup = data.ikFkBlendGroup
    this.ikFkBlendChannel = data.ikFkBlendChannel
};

MM.TwoBoneIkBlendSolver.prototype.exportSetup = function(){
    console.log('TwoBoneIkBlendSolver.exportSetup', this.name)

    var data = MM.TwoBoneSoftIkSolver.prototype.exportSetup.call(this);

    data.type = 'TwoBoneIkBlendSolver';
    data.startFkCtrl = this.startFkCtrl.name;
    data.middleFkCtrl = this.middleFkCtrl.name;
    data.endFkCtrl = this.endFkCtrl.name;
    data.customCtrl = this.customCtrl.name;

    data.ikFkBlendGroup = this.ikFkBlendGroup
    data.ikFkBlendChannel = this.ikFkBlendChannel

    return data;
}

MM.TwoBoneIkBlendSolver.prototype.setBlendControl=function(control){
    this.customCtrl = control;

    this.customCtrl.addChannel( 'custom' , 'ikFkBlend' )

    if(!this.customCtrl.hasOwnProperty('custom')){
        this.customCtrl.custom = {};
    }

    _.extend(this.customCtrl.custom, {
            'ikFkBlend': 0.0,
        });
}

MM.TwoBoneIkBlendSolver.prototype.solveSoftIk=function(){
    MM.TwoBoneSoftIkSolver.prototype.solveSoftIk.call(this);

    if(this.middleFkCtrl === undefined ){
        return;
    }
    if(this.endFkCtrl === undefined ){
        return;
    }

    //  update the position of the fk controls in case we scale the joints
    this.middleFkCtrl.parent.position[this.stretchAxis]=this.middleJoint.position[this.stretchAxis]
    this.endFkCtrl.parent.position[this.stretchAxis]=this.endJoint.position[this.stretchAxis]    
}

MM.TwoBoneIkBlendSolver.prototype.updateMatrixWorld = function ( force ) {

    // //  init stretch
    // if( this.startLength === undefined && this.endLength === undefined ){
    //     if( this.startJoint !== undefined && this.middleJoint !== undefined 
    //         && this.endJoint !== undefined && this.stretchAxis !== undefined ){
            
    //         var startPos = this.startJoint.getWorldPosition();      
    //         var midPos = this.middleJoint.getWorldPosition();
    //         var endPos = this.endJoint.getWorldPosition();

    //         this.startLength = this.middleJoint.position[this.stretchAxis]
    //         this.endLength = this.endJoint.position[this.stretchAxis]            

    //         // console.log('\tinit stretch:', this.startLength, this.endLength)
    //     }
    // }

    // // solve stretch factor
    // var forceSolve = false;
    // if( this.stretchGroup !== undefined && this.stretchChannel !== undefined ){
    //     var stretchFactorObjectGroup = this.customCtrl[this.stretchGroup]
    //     var stretchFactor = stretchFactorObjectGroup[this.stretchChannel]
    //     // console.log('\tstretch factor:', stretchFactor)
    //     if( this.stretchAxis !== undefined ){
            
    //         this.middleJoint.position[this.stretchAxis] = stretchFactor * this.startLength;
    //         this.endJoint.position[this.stretchAxis] = stretchFactor * this.endLength;                    

    //         //  here we need localized scaling for this to work
    //         //this.startJoint.scale[this.stretchAxis] = stretchFactor;
    //         //this.middleJoint.scale[this.stretchAxis] = stretchFactor;
    //         //console.log('\tstart joint:', this.startJoint)
    //         //this.endJoint.scale[this.stretchAxis] = 1.0/stretchFactor;

    //         // console.log('\tmiddle joint:', this.middleJoint)
    //         // console.log('\tend joint:', this.endJoint) 

    //         this.updateJoints();   

    //         //  make sure we re-solve the ik solution whenever we change the 
    //         //  length of our joints
    //         if( this.previousStretch !== stretchFactor ){
    //             this.previousStretch = stretchFactor
    //             forceSolve = true;
    //         }     
    //     }
    // }

    // //  solve auto stretch
    // if( this.autoStretchGroup !== undefined && this.autoStretchChannel !== undefined){
    //     var autoStretchFactorObjectGroup = this.customCtrl[this.autoStretchGroup]
    //     // console.log('stretchFactorGroup',autoStretchFactorObjectGroup)
    //     var autoStretch = autoStretchFactorObjectGroup[this.autoStretchChannel]        
    //     // console.log('\tauto stretch:', autoStretch)
    //     if( autoStretch > 0.0 ){
    //         var startPos = this.startJoint.getWorldPosition(); 
    //         var hanlePos = this.getWorldPosition(); 

    //         var curLength = new THREE.Vector3().subVectors(startPos, hanlePos).length()            
    //         var length = Math.abs(this.startLength) + Math.abs(this.endLength)
    //         if( this.stretchAxis !== undefined ){
    //             length *= this.customCtrl[this.stretchGroup][this.stretchChannel]
    //         }
    //         // console.log('\tcur length:', curLength)
    //         // console.log('\tchain length:', length)

    //         var stretchValue = MM.roundToFive(curLength / length);

    //         // console.log('\tstretch value', stretchValue)

    //         //  remap stretch values ( in percent )
    //         if( stretchValue < this.customCtrl[this.autoStretchGroup][this.autoMinChannel] ){
    //             stretchValue = this.customCtrl[this.autoStretchGroup][this.autoMinChannel]
    //         }
    //         if( stretchValue > this.customCtrl[this.autoStretchGroup][this.autoMaxChannel] ){
    //             stretchValue = this.customCtrl[this.autoStretchGroup][this.autoMaxChannel]  
    //         }
            
    //         // console.log('\tstretch value:', stretchValue)
    //         if( stretchValue > 1.0 ){
    //             // console.log('\tevaluating stretch value')
    //             this.middleJoint.position[this.stretchAxis] = stretchValue * this.startLength;
    //             this.endJoint.position[this.stretchAxis] = stretchValue * this.endLength;

    //             // this.startJoint.scale[this.stretchAxis] = stretchValue;
    //             //this.middleJoint.scale[this.stretchAxis] = stretchValue;
    //         //console.log('\tstart joint:', this.startJoint)
    //             // this.endJoint.scale[this.stretchAxis] = 1.0/stretchValue;
    //             // console.log('\tend joint', this.endJoint.scale[this.stretchAxis])
    //             forceSolve = true;
    //         }
    //     }
    // }

    //  ik
    MM.TwoBoneSoftIkSolver.prototype.updateMatrixWorld.call(this, force);

    //  blend   
    if( this.customCtrl !== undefined && this.ikFkBlendGroup !== undefined
        && this.ikFkBlendChannel !== undefined && this.doBlend === true
        && this.handleControl !== undefined ){
        var blendObjectGroup = this.customCtrl[this.ikFkBlendGroup]
        var blendValue = blendObjectGroup[this.ikFkBlendChannel]
        if( blendValue < 0.0 ) blendValue = 0;
        if( blendValue > 1.0 ) blendValue = 1;

        //  blend between ik and fk
        this.startJoint.quaternion.slerp( this.startFkCtrl.quaternion, blendValue )
        this.middleJoint.quaternion.slerp( this.middleFkCtrl.quaternion, blendValue )
        this.endJoint.quaternion.slerp( this.endFkCtrl.quaternion, blendValue )    

        this.updateJoints();

        //  only show the controls that are relevant
        //  ik
        if( blendValue === 0 ){
            this.startFkCtrl.hide()
            this.middleFkCtrl.hide()
            this.endFkCtrl.hide()
            this.poleVector.show()
            this.handleControl.show()
        }
        //  fk
        else if( blendValue === 1 ){
            this.startFkCtrl.show()
            this.middleFkCtrl.show()
            this.endFkCtrl.show()
            this.poleVector.hide()
            this.handleControl.hide()
        }
        //  blend 
        else{
            this.startFkCtrl.show()
            this.middleFkCtrl.show()
            this.endFkCtrl.show()
            this.poleVector.show()
            this.handleControl.show()
        }        
    }
}