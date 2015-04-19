MM.TwoStepLegBlendComponent = function( parameters ){
    //  Description: stretchy blend leg component with foot roll that drives
    //  2 toes instead of the usual 1. This component is specifically for 
    //  spaceTunny 
    MM.RigComponent.call( this );

    this.joints = [ 'Hip',  //  0 
                    'Knee', //  1
                    'Ankle',//  2 
                    'Heel', //  3
                    'Ball0', //  4
                    'Ball1', //  5
                    'Toe'] //  6

    this.controlNames = ['HipFkCtl',    // 0
                         'KneeFkCtl',   // 1
                         'AnkleFkCtl',  // 2
                         'BallFkCtl',   // 3
                         'ToeFkCtl',    // 4
                         'LegSwitch',   // 5
                         'KneeIkCtl',   // 6
                         'FootIkCtl']   // 7
    this.setValues( parameters )    

    return this;
}

MM.TwoStepLegBlendComponent.prototype = Object.create( MM.RigComponent.prototype );

MM.TwoStepLegBlendComponent.prototype.build = function(){
    //  get all necessary scene elements
    var joints = this.getJoints();
    var jointPositions = this.getJointPositions();

//  FK
    //  foot fk controls    
    var ctrl0 = MM.createControlGroup( this.side, 
        this.getName(this.controlNames[0]), "circle", 2 )    
    ctrl0['control'].setChannelsRotate()
    if( joints[this.joints[0]].parent !== undefined ){
        joints[this.joints[0]].parent.add( ctrl0['zero'] )
    }
    ctrl0['zero'].applyMatrix( joints[this.joints[0]].matrix )
    ctrl0['control'].controlType = 1
    this.addControl( ctrl0['control'], this.controlNames[0])

    var ctrl1 = MM.createControlGroup( this.side, 
        this.getName(this.controlNames[1]), "circle", 2 )
    ctrl1['control'].setChannelsRotate()
    ctrl0['control'].add( ctrl1['zero'])
    ctrl1['zero'].applyMatrix( joints[this.joints[1]].matrix )    
    ctrl1['control'].controlType = 1
    this.addControl( ctrl1['control'], this.controlNames[1])

    var ctrl2 = MM.createControlGroup( this.side, 
        this.getName(this.controlNames[2]), "circle", 3 )
    ctrl2['control'].setChannelsRotate()
    ctrl1['control'].add( ctrl2['zero'])
    ctrl2['zero'].applyMatrix( joints[this.joints[2]].matrix )
    ctrl2['control'].controlType = 1
    this.addControl( ctrl2['control'], this.controlNames[2] )    

    var ctrl4 = MM.createControlGroup( this.side, 
        this.getName(this.controlNames[3]), "circleZ", 3 )
    ctrl4['control'].setChannelsRotate()
    ctrl2['control'].add( ctrl4['zero'])
    ctrl4['zero'].applyMatrix( joints[this.joints[4]].matrix )    
    ctrl4['control'].controlType = 1
    this.addControl( ctrl4['control'], this.controlNames[3] )   

    var ctrl5 = MM.createControlGroup( this.side, 
        this.getName(this.controlNames[4]), "circleZ", 3 )
    ctrl5['control'].setChannelsRotate()
    ctrl4['control'].add( ctrl5['zero'])
    ctrl5['zero'].applyMatrix( joints[this.joints[5]].matrix )    
    ctrl5['control'].controlType = 1
    this.addControl( ctrl5['control'], this.controlNames[3] )       

//  IK
//  foot control
    var footControl = MM.createControlGroup( this.side, 
        this.getName(this.controlNames[7]), 'plane', 5)
    footControl['zero'].position.set(
        jointPositions[this.joints[2]].x, 0.0, jointPositions[this.joints[2]].z);
    footControl['control'].setChannelsTranslateAndRotate();
    this.editor.addObject( footControl['zero'] )
    footControl['control'].controlType = 2
    this.addControl( footControl['control'], this.controlNames[7] )  

    footControl['control'].addChannel( 'custom' , 'heelRoll' )
    footControl['control'].addChannel( 'custom' , 'toeRoll' )
    footControl['control'].addChannel( 'custom' , 'ballRoll' )
    footControl['control'].addChannel( 'custom' , 'toeRotate' )
    footControl['control'].custom = {'heelRoll':0, 'toeRoll':0, 
                                     'ballRoll':0, 'toeRotate':0}      

// knee pole vector    
    var poleControl = MM.createControlGroup( this.side, 
        this.getName(this.controlNames[6]), 'planeZ', 2.5)
    poleControl['zero'].position.set(
        jointPositions[this.joints[1]].x, jointPositions[this.joints[1]].y, 
        jointPositions[this.joints[1]].z+(25* this.controlScale))
    poleControl['control'].setChannelsTranslate();  
    poleControl['control'].controlType = 2      
    this.editor.addObject( poleControl['zero'] )
    this.addControl( poleControl['control'], this.controlNames[6] )    

//  create switch control
    var blndCtrl = new MM.Control()
    blndCtrl.name = this.getName(this.controlNames[5])
    blndCtrl.controlOffset.z = -5;
    blndCtrl.setControlShape( this.side, 'triangleX', 2)
    joints[this.joints[2]].add( blndCtrl )  
    this.addControl( blndCtrl, this.controlNames[5]) 

    blndCtrl.setChannelsEmpty();
    blndCtrl.addChannel( 'custom' , 'ikFkBlend' )
    blndCtrl.addChannel( 'custom' , 'stretchFactor' )
    blndCtrl.addChannel( 'custom' , 'stretchAuto' )
    blndCtrl.addChannel( 'custom' , 'stretchMin' )
    blndCtrl.addChannel( 'custom' , 'stretchMax' )
    blndCtrl.custom={'ikFkBlend' : 0.0 , 'stretchFactor': 1.0 , 
                     'stretchAuto': 1.0, 'stretchMin' : 0.5, 
                     'stretchMax' : 1.5 }    

//  ik setup hierarchy
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
        jointPositions[this.joints[6]].x, jointPositions[this.joints[6]].y, 
        jointPositions[this.joints[6]].z) 
    this.editor.addObject( toeObject );
    heelObject.setParent( toeObject );    

    var ball1Object = new THREE.Object3D();
    ball1Object.name = this.getName('ball1IkGrp')
    ball1Object.position.set(
        jointPositions[this.joints[5]].x, jointPositions[this.joints[5]].y, 
        jointPositions[this.joints[5]].z) 
    this.editor.addObject( ball1Object );
    toeObject.setParent( ball1Object );             

    var ball0Object = new THREE.Object3D();
    ball0Object.name = this.getName('ball0IkGrp')
    ball0Object.position.set(
        jointPositions[this.joints[4]].x, jointPositions[this.joints[4]].y, 
        jointPositions[this.joints[4]].z) 
    this.editor.addObject( ball0Object );
    ball1Object.setParent( ball0Object );   

    this.editor.addGroupContent( this.assetGroup, [ footControl['control'], 
        heelObject, toeObject, ball1Object, ball0Object])  

//  ik solver creation and setup
    var ik = new MM.TwoStepFourBoneIkBlendSolver();
    ik.endJointEqualsHandleOrientation = true;
    ik.name = this.getName('IkSolver') 

//  add solver to scene
    ik.position.set(jointPositions[this.joints[2]].x, 
        jointPositions[this.joints[2]].y, jointPositions[this.joints[2]].z);
    this.editor.addObject( ik )
    ball0Object.setParent( ik )  

    //  setup ik fk blend variables
    ik.setStartJoint(joints[this.joints[0]]);
    ik.middleJoint = joints[this.joints[1]];
    ik.endJoint = joints[this.joints[2]];
    ik.endJoint.rotation.order = 'YXZ'

    ik.heelJoint = joints[this.joints[3]];
    ik.ball0Joint = joints[this.joints[4]]; 
    ik.ball1Joint = joints[this.joints[5]];  
    ik.toeJoint = joints[this.joints[6]];
    
    ik.startFkCtrl = ctrl0['control']
    ik.middleFkCtrl = ctrl1['control']
    ik.endFkCtrl = ctrl2['control']
    ik.ball0FkCtl = ctrl4['control']
    ik.ball1FkCtl = ctrl5['control']

    ik.customCtrl = blndCtrl
    ik.ikFkBlendGroup = 'custom'
    ik.ikFkBlendChannel = 'ikFkBlend'

    ik.poleVector = poleControl['control'] 
    ik.handleControl = footControl['control']

    //  setup stretch variables
    ik.stretchAxis = 'y'
    ik.stretchGroup = 'custom'
    ik.stretchChannel = 'stretchFactor'

    ik.autoStretchGroup = 'custom'
    ik.autoStretchChannel = 'stretchAuto'
    ik.autoMinChannel = 'stretchMin'
    ik.autoMaxChannel = 'stretchMax' 

    blndCtrl['custom']['stretchMax'] = 1.0
    
    //  setup foot variables
    ik.footCtrl = footControl['control']
    ik.toeObject = toeObject
    ik.ball0Object = ball0Object
    ik.ball1Object = ball1Object
    ik.heelObject = heelObject

    ik.toeChannel = 'toeRoll'
    ik.ballChannel = 'ballRoll'
    ik.heelChannel = 'heelRoll'
    ik.toeRotateChannel = 'toeRotate'    

    return this;
}