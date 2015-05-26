MM.LimbComponent = function( parameters ){    
    //  Description: 3 bone IK/FK stretchy blend setup
    MM.RigComponent.call( this );

    this.joints = [ 'Hip', 'Knee', 'Ankle']    
    this.controlNames = ['HipFkCtl', 'KneeFkCtl', 'AnkleFkCtl','LegSwitch',
                         'KneeIkCtl', 'FootIkCtl'] 
    this.buildIkControlOnFloor = true 
    this.poleVectorOffset = 25
    this.stretchAxis = 'y'; // y for legs and x for arms
    this.setValues( parameters )
    this.rootInbetweenType = 'SpaceswitchSplit'
    
    return this;
}

MM.LimbComponent.prototype = Object.create( MM.RigComponent.prototype );

MM.LimbComponent.prototype.setValues = function( parameters ){
    MM.RigComponent.prototype.setValues.call(this, parameters)

    //  custom parameters
    if( parameters !== undefined ){        
        if(parameters.hasOwnProperty('buildIkControlOnFloor')){
            this.buildIkControlOnFloor = parameters['buildIkControlOnFloor']
        }
        if(parameters.hasOwnProperty('poleVectorOffset')){
            this.poleVectorOffset = parameters['poleVectorOffset']
        }
        if(parameters.hasOwnProperty('fkControlShape')){
            this.fkControlShape = parameters['fkControlShape']
        }
        if(parameters.hasOwnProperty('ikControlShape')){
            this.ikControlShape = parameters['ikControlShape']
        }
        if(parameters.hasOwnProperty('stretchAxis')){
            this.stretchAxis = parameters['stretchAxis']
        }
        if(parameters.hasOwnProperty('rootInbetweenType')){            
            this.rootInbetweenType = parameters['rootInbetweenType']
            console.log('\tSetting rootInbetweenType to ', this.rootInbetweenType)
        }
    }
}

MM.LimbComponent.prototype.build = function(){
//  get all necessary scene elements
    var joints = this.getJoints();
    var jointPositions = this.getJointPositions();

//  create fk controls
    //  joint 0 fk control
    var ctrl0 = MM.createControlGroup( this.side, this.getName(this.controlNames[0]), this.fkControlShape, this.controlSize, this.rootInbetweenType )    
    ctrl0['control'].setChannelsRotate()
    if( joints[this.joints[0]].parent !== undefined ){
        joints[this.joints[0]].parent.add( ctrl0['zero'] )
    }
    ctrl0['zero'].applyMatrix( joints[this.joints[0]].matrix )
    this.addControl( ctrl0['control'], this.controlNames[0] )

    //  joint 1 fk control
    var ctrl1 = MM.createControlGroup( this.side, this.getName(this.controlNames[1]), this.fkControlShape, this.controlSize )
    ctrl1['control'].setChannelsRotate()
    ctrl0['control'].add( ctrl1['zero'])
    ctrl1['zero'].applyMatrix( joints[this.joints[1]].matrix )
    this.addControl( ctrl1['control'], this.controlNames[1] )

    //  joint 2 fk control
    var ctrl2 = MM.createControlGroup( this.side, this.getName(this.controlNames[2]), this.fkControlShape, this.controlSize )
    ctrl2['control'].setChannelsRotate()
    ctrl1['control'].add( ctrl2['zero'])
    ctrl2['zero'].applyMatrix( joints[this.joints[2]].matrix )
    this.addControl( ctrl2['control'], this.controlNames[2] )

//  create switch control
    var blndCtrl = new MM.Control()
    blndCtrl.name = this.getName(this.controlNames[3])
    blndCtrl.setControlShape( this.side, 'triangle', 0.5 * this.controlSize)
    joints[this.joints[2]].add( blndCtrl )  
    this.addControl( blndCtrl, this.controlNames[3]) 

    blndCtrl.setChannelsEmpty();

//  foot transform
    var footControl = MM.createControlGroup( this.side, 
        this.getName(this.controlNames[5]), this.ikControlShape, this.controlSize)    
    
    if(this.buildIkControlOnFloor === true){
        footControl['zero'].position.set(jointPositions[this.joints[2]].x, 
            0.0, jointPositions[this.joints[2]].z);
    }else{
        footControl['zero'].position.set(jointPositions[this.joints[2]].x, 
            jointPositions[this.joints[2]].y, jointPositions[this.joints[2]].z)
    }

    footControl['control'].setChannelsTranslateAndRotate();
    this.editor.addObject( footControl['zero'] )
    footControl['control'].controlType = 2
    this.addControl( footControl['control'], this.controlNames[5] )   

// knee pole vector
    var poleControl = MM.createControlGroup( this.side, 
        this.getName(this.controlNames[4]), 'planeZ', this.controlSize)
    poleControl['zero'].position.set(
        jointPositions[this.joints[1]].x, jointPositions[this.joints[1]].y, 
        jointPositions[this.joints[1]].z+(this.poleVectorOffset * this.controlScale))
    poleControl['control'].setChannelsTranslate();  
    poleControl['control'].controlType = 2      
    this.editor.addObject( poleControl['zero'] )
    this.addControl( poleControl['control'], this.controlNames[4] )

//  ik creation and setup
    var legIk = new MM.TwoBoneIkBlendSolver(); 
    legIk.stretchAxis = this.stretchAxis;
    legIk.endJointEqualsHandleOrientation = true;
    legIk.name = this.getName('IkSolver')
    legIk.position.set(jointPositions[this.joints[2]].x, 
        jointPositions[this.joints[2]].y, jointPositions[this.joints[2]].z);

    //  add solver to scene
    this.editor.addObject( legIk )
    this.editor.addObject( footControl['zero'] ) 
    footControl['control'].setParent( legIk )      
    
    //  setup ik fk blend variables
    legIk.setStartJoint(joints[this.joints[0]]);
    legIk.middleJoint = joints[this.joints[1]];
    legIk.endJoint = joints[this.joints[2]];    
    
    legIk.startFkCtrl = ctrl0['control']
    legIk.middleFkCtrl = ctrl1['control']
    legIk.endFkCtrl = ctrl2['control']

    // legIk.customCtrl = blndCtrl
    legIk.setSoftControl(blndCtrl)
    legIk.setSoftIk();
    legIk.setBlendControl(blndCtrl)

    //  not sure if we really need to expose the following
    legIk.ikFkBlendGroup = 'custom'
    legIk.ikFkBlendChannel = 'ikFkBlend'

    legIk.poleVector = poleControl['control']   
    legIk.handleControl = footControl['control']
    
//  groups
    var controls = [ legIk.customCtrl, legIk.startFkCtrl, legIk.middleFkCtrl, legIk.endFkCtrl, legIk.poleVector, legIk.handleControl]
    this.editor.addGroupContent( this.assetGroup, controls)
    this.editor.addSelectables(controls)
    this.editor.addGroupContent( this.assetGroup, [ poleControl['control'], 
        footControl['control'] ] )    

    return this;
}