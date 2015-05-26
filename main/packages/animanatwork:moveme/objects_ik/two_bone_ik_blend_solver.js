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

    this.customCtrl.addChannel( 'custom' , 'ikFkBlend', [0,1])

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