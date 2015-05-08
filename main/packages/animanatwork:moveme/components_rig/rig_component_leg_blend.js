MM.LegBlendComponent = function( parameters ){
    //  Description: stretchy blend leg component with foot roll
    MM.RigComponent.call( this );

    this.joints = ['Hip', 'Knee', 'Ankle', 'Heel', 'Ball', 'Toe']
    this.controlNames = ['HipFkCtl', 'KneeFkCtl', 'AnkleFkCtl', 'BallFkCtl',
                         'LegSwitch','KneeIkCtl', 'FootIkCtl']
    
    this.poleVectorOffset = 25
    // this.stretchAxis = 'y'; // y for legs and x for arms

    this.setValues( parameters )    
    return this;
}

MM.LegBlendComponent.prototype = Object.create( MM.RigComponent.prototype );

MM.LegBlendComponent.prototype.setValues = function( parameters ){
    MM.RigComponent.prototype.setValues.call(this, parameters);

    //  custom parameters
    if( parameters !== undefined ){
        if(parameters.hasOwnProperty('poleVectorOffset')){
            this.poleVectorOffset = parameters['poleVectorOffset']
        }
    }
}

MM.LegBlendComponent.prototype.build = function(){
//  NOTE: since here we want to use a different ik SOLVER we can't just 
//  inherit from the LimbComponent

//  get all necessary scene elements
    var joints = this.getJoints();
    var jointPositions = this.getJointPositions();

//  foot fk controls    
    var ctrl0 = MM.createControlGroup( this.side, 
        this.getName(this.controlNames[0]), "circle", this.controlSize )    
    ctrl0['control'].setChannelsRotate()
    if( joints[this.joints[0]].parent !== undefined ){
        joints[this.joints[0]].parent.add( ctrl0['zero'] )
    }
    ctrl0['zero'].applyMatrix( joints[this.joints[0]].matrix )
    ctrl0['control'].controlType = 1
    this.addControl( ctrl0['control'], this.controlNames[0])

    var ctrl1 = MM.createControlGroup( this.side, 
        this.getName(this.controlNames[1]), "circle", this.controlSize )
    ctrl1['control'].setChannelsRotate()
    ctrl0['control'].add( ctrl1['zero'])
    ctrl1['zero'].applyMatrix( joints[this.joints[1]].matrix )    
    ctrl1['control'].controlType = 1
    this.addControl( ctrl1['control'], this.controlNames[1])

    var ctrl2 = MM.createControlGroup( this.side, 
        this.getName(this.controlNames[2]), "circle", this.controlSize )
    ctrl2['control'].setChannelsRotate()
    ctrl1['control'].add( ctrl2['zero'])
    ctrl2['zero'].applyMatrix( joints[this.joints[2]].matrix )
    ctrl2['control'].controlType = 1
    this.addControl( ctrl2['control'], this.controlNames[2] )    

    var ctrl4 = MM.createControlGroup( this.side, 
        this.getName(this.controlNames[3]), "circleZ", this.controlSize )
    ctrl4['control'].setChannelsRotate()
    ctrl2['control'].add( ctrl4['zero'])
    ctrl4['zero'].applyMatrix( joints[this.joints[4]].matrix )    
    ctrl4['control'].controlType = 1
    this.addControl( ctrl4['control'], this.controlNames[3] )    

//  foot ik hierarchy
    var footControl = MM.createControlGroup( this.side, 
        this.getName(this.controlNames[6]), 'plane', this.controlSize )
    footControl['zero'].position.set(
        jointPositions[this.joints[2]].x, 0.0, jointPositions[this.joints[2]].z);
    footControl['control'].setChannelsTranslateAndRotate();
    this.editor.addObject( footControl['zero'] )
    footControl['control'].controlType = 2
    this.addControl( footControl['control'], this.controlNames[6] )    

    footControl['control'].addChannel( 'custom' , 'heelRoll' )
    footControl['control'].addChannel( 'custom' , 'toeRoll' )
    footControl['control'].addChannel( 'custom' , 'ballRoll' )
    footControl['control'].addChannel( 'custom' , 'toeRotate' )
    footControl['control'].custom = {'heelRoll':0, 'toeRoll':0, 
                                     'ballRoll':0, 'toeRotate':0}  

 // knee pole vector    
    var poleControl = MM.createControlGroup( this.side, 
        this.getName(this.controlNames[5]), 'planeZ', this.controlSize)
    poleControl['zero'].position.set(
        jointPositions[this.joints[1]].x, jointPositions[this.joints[1]].y, 
        jointPositions[this.joints[1]].z+(this.poleVectorOffset*this.controlScale))
    poleControl['control'].setChannelsTranslate();  
    poleControl['control'].controlType = 2      
    this.editor.addObject( poleControl['zero'] )
    this.addControl( poleControl['control'], this.controlNames[5] ) // color and set asset to  control 

    var heelObject = new THREE.Object3D();
    heelObject.name = this.getName('heelIkGrp')    
    heelObject.position.set(
        jointPositions[this.joints[3]].x, jointPositions[this.joints[3]].y, 
        jointPositions[this.joints[3]].z)    
    this.editor.addObject( heelObject );
    footControl['control'].setParent( heelObject );

    var toeObject = new THREE.Object3D();
    toeObject.name = this.getName('toeIkGrp')
    toeObject.position.set(
        jointPositions[this.joints[5]].x, jointPositions[this.joints[5]].y, 
        jointPositions[this.joints[5]].z) 
    this.editor.addObject( toeObject );
    heelObject.setParent( toeObject );             

    var ballObject = new THREE.Object3D();
    ballObject.name = this.getName('ballIkGrp')
    ballObject.position.set(
        jointPositions[this.joints[4]].x, jointPositions[this.joints[4]].y, 
        jointPositions[this.joints[4]].z) 
    this.editor.addObject( ballObject );
    toeObject.setParent( ballObject );        
    
    var ankleObject = new THREE.Object3D();
    ankleObject.name = this.getName('ankleIkGrp')    
    ankleObject.position.set(
        jointPositions[this.joints[2]].x, jointPositions[this.joints[2]].y, 
        jointPositions[this.joints[2]].z )
    this.editor.addObject( ankleObject );
    ballObject.setParent( ankleObject )

//  create switch control
    var blndCtrl = new MM.Control()
    blndCtrl.name = this.getName(this.controlNames[4])
    blndCtrl.controlOffset.z = -5;
    blndCtrl.setControlShape( this.side, 'triangleX', 0.5 * this.controlSize)
    joints[this.joints[2]].add( blndCtrl )  
    this.addControl( blndCtrl, this.controlNames[4]) 

    blndCtrl.setChannelsEmpty();

//  ik creation and setup
    var ik = new MM.FourBoneIkBlendSolver();
    ik.endJointEqualsHandleOrientation = true;
    ik.name = this.getName('IkSolver')

    console.log('\tik', ik)
        
    //  add solver to scene
    ik.position.set(jointPositions[this.joints[2]].x, 
        jointPositions[this.joints[2]].y, jointPositions[this.joints[2]].z);
    this.editor.addObject( ik )
    ankleObject.setParent( ik )

    //  setup ik fk blend variables
    ik.setStartJoint(joints[this.joints[0]]);
    ik.middleJoint = joints[this.joints[1]];
    ik.endJoint = joints[this.joints[2]];
    ik.endJoint.rotation.order = 'YXZ'

    ik.heelJoint = joints[this.joints[3]];
    ik.ballJoint = joints[this.joints[4]];    
    ik.toeJoint = joints[this.joints[5]];
    
    ik.startFkCtrl = ctrl0['control']
    ik.middleFkCtrl = ctrl1['control']
    ik.endFkCtrl = ctrl2['control']
    ik.ballFkCtl = ctrl4['control']

    ik.setSoftControl(blndCtrl)
    ik.setSoftIk();
    ik.setBlendControl(blndCtrl)
    // ik.customCtrl = blndCtrl
    ik.ikFkBlendGroup = 'custom'
    ik.ikFkBlendChannel = 'ikFkBlend'

    ik.poleVector = poleControl['control'] 
    ik.handleControl = footControl['control']

    blndCtrl['custom']['stretchMax'] = 2.0
    
    //  setup foot variables
    ik.footCtrl = footControl['control']
    ik.toeObject = toeObject
    ik.ballObject = ballObject
    ik.heelObject = heelObject
    ik.ankleObject = ankleObject

    ik.toeChannel = 'toeRoll'
    ik.ballChannel = 'ballRoll'
    ik.heelChannel = 'heelRoll'
    ik.toeRotateChannel = 'toeRotate'

//  groups
    var controlList = [ ik.customCtrl, 
                        ik.startFkCtrl, 
                        ik.middleFkCtrl, 
                        ik.endFkCtrl,
                        ik.ballFkCtl,
                        ik.poleVector,
                        ik.handleControl
                        ]

    this.editor.addGroupContent( this.assetGroup, controlList)
    this.editor.addSelectables(controlList)
    this.editor.addGroupContent( this.assetGroup, [ poleControl['control'], 
        footControl['control'] ] )

    return this;
}