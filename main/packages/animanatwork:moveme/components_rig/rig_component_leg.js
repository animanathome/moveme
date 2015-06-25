MM.LegComponent = function( parameters ) {   
    //  Description: IK only foot roll setup
    MM.RigComponent.call( this );

    this.joints = []
    this.controlNames = [
                         '_knee_0_ctrl', 
                         '_ball_0_ctrl', 
                         '_toe_0_ctrl', 
                         '_heel_0_ctrl', 
                         '_foot_0_ctrl'
                         ]

    //  setting this flag to true will add custom pivot attributes
    //  to the main foot control. Providing easy access for the user
    //  and removing the need to display all other "foot" controls
    this.useCustomAttributes = false

    this.setValues( parameters )    

    return this;
}

MM.LegComponent.prototype = Object.create( MM.RigComponent.prototype );

MM.LegComponent.prototype.setValues = function( parameters ){
    MM.RigComponent.prototype.setValues.call(this, parameters);

    this.joints = [ 
                    '_hip_0_jnt',
                    '_knee_0_jnt',
                    '_ankle_0_jnt',
                    '_ball_0_jnt',
                    '_toe_0_jnt',
                    '_heel_0_jnt'
                    ]

    if( parameters !== undefined ){        
        if(parameters.hasOwnProperty('joints')){
            console.log('\tsetting joints value to', parameters['joints'])
            this.joints = parameters['joints']
        }
        if(parameters.hasOwnProperty('useCustomAttributes')){
            console.log('\tsetting useCustomAttributes to', parameters['useCustomAttributes'])
            this.useCustomAttributes = parameters['useCustomAttributes']
        }
    }
}

MM.LegComponent.prototype.build = function(){
    console.log('LegComponent.build')
    console.log('\tnamespace', this.namespace)

//  hip -> ankle ik
    var hipJoint = this.editor.scene.getObjectByName(this.namespace+this.side+this.joints[0], true);
    if( hipJoint === undefined ){
        console.log('\tUnable to find', this.namespace+this.side+this.joints[0])
        return 
    }
    var kneeJoint = this.editor.scene.getObjectByName(this.namespace+this.side+this.joints[1], true);
    if( kneeJoint === undefined ){
        console.log('\tUnable to find', this.namespace+this.side+this.joints[1])
        return 
    }
    var ankleJoint = this.editor.scene.getObjectByName(this.namespace+this.side+this.joints[2], true);
    if( ankleJoint === undefined ){
        console.log('\tUnable to find', this.namespace+this.side+this.joints[2])
        return 
    }
    var ballJoint = this.editor.scene.getObjectByName(this.namespace+this.side+this.joints[3], true);
    if( ballJoint === undefined ){
        console.log('\tUnable to find', this.namespace+this.side+this.joints[3])
        return 
    }
    var toeJoint = this.editor.scene.getObjectByName(this.namespace+this.side+this.joints[4], true);
    if( toeJoint === undefined ){
        console.log('\tUnable to find', this.namespace+this.side+this.joints[4])
        return 
    }
    var heelJoint = this.editor.scene.getObjectByName(this.namespace+this.side+this.joints[5], true)
    if( heelJoint === undefined ){
        console.log('\tUnable to find', this.namespace+this.side+this.joints[5])
        return 
    }
    
    // var anklePos = ankleJoint.matrixWorld.getPosition();
    var anklePos = new THREE.Vector3().getPositionFromMatrix( ankleJoint.matrixWorld )
    var kneePos = new THREE.Vector3().getPositionFromMatrix( kneeJoint.matrixWorld )
    var ballPos = new THREE.Vector3().getPositionFromMatrix( ballJoint.matrixWorld )
    var toePos = new THREE.Vector3().getPositionFromMatrix( toeJoint.matrixWorld )
    var heelPos = new THREE.Vector3().getPositionFromMatrix( heelJoint.matrixWorld )
    var footPos = new THREE.Vector3().getPositionFromMatrix( ankleJoint.matrixWorld )
    // var anklePos = new THREE.Vector3().getPositionFromMatrix( ankleJoint.matrixWorld )
    // console.log(ankleJoint.name, anklePos.x, anklePos.y, anklePos.z)

    //  NOTE: this is not a very clean way to init the solver since we can't cleary tell when we've supplied all the necessary information. 
    var legIk = new MM.TwoBoneSoftIkSolver()
    shortName = this.name.slice(1, this.name.length)
    legIk.name = this.getName(shortName+'IkSolver')
    legIk.position.set(anklePos.x, anklePos.y, anklePos.z);
    legIk.setStartJoint(hipJoint);
    legIk.middleJoint = kneeJoint;
    legIk.endJoint = ankleJoint;
    
    this.editor.addObject(legIk);
    console.log('\tAdding ik handle to scene')
    legIk.setSoftIk();

 // knee pole vector    
    var poleControl = new MM.Control();

    poleControl.controlSize = 2 * this.controlScale;
    poleControl.controlScale.set( 1 * this.controlScale , 1 * this.controlScale, 1 * this.controlScale)        
    poleControl.controlShape = 'cube'
    
    poleControl.name = this.namespace+this.side+this.controlNames[0]
    poleControl.tag = 'control'
    poleControl.controlSide = this.side
    poleControl.position.set(kneePos.x, kneePos.y, kneePos.z+(25* this.controlScale))
    poleControl.setChannelsTranslate();
    
    legIk.poleVector = poleControl    
    
    this.editor.addObject( poleControl ) // add control to scene so we can see it     
    this.addControl( poleControl , this.controlNames[0]) // color and set asset to  control

//  ball rotate
    var ballControl = new MM.Constraint();
    ballControl.name = this.namespace+this.side+this.controlNames[1]
    ballControl.position.set(ballPos.x, ballPos.y, ballPos.z);

    this.editor.addObject(ballControl)
    ballControl.setObjectToSolve(ballJoint);
    ballControl.constraintMode = 0;
    ballControl.setChannelsRotate();

    //  parent legIk under the ballControl while keeping its world position
    ballControl.setParent( legIk )    

//  toe rotate    
    var toeControl = new MM.Constraint();        
    toeControl.name = this.namespace+this.side+this.controlNames[2] 
    toeControl.setChannelsRotate();    
    
    toeControl.position.set(toePos.x, toePos.y, toePos.z)

    this.editor.addObject(toeControl)
    toeControl.setParent( ballControl )
    toeControl.constraintMode = 3;
    toeControl.setObjectToSolve( toeJoint )

    //  have the ball follow the orientation of the toe
    //  this is NOT a control
    var ballOrientControl = new MM.Constraint();
    ballOrientControl.name = this.namespace+this.side+'BallOrient'
    ballPos = ballJoint.matrixWorld.getPosition();
    ballOrientControl.position.set( ballPos.x, ballPos.y, ballPos.z)
    
    this.editor.addObject( ballOrientControl )
    toeControl.setParent( ballOrientControl )
    ballOrientControl.constraintMode = 1;
    ballOrientControl.setObjectToSolve( ballJoint )

//  heel rotate  
    var heelControl = new MM.Control();
    heelControl.name = this.namespace+this.side+this.controlNames[3]
    heelControl.controlSide = this.side 
    heelControl.position.set(heelPos.x, heelPos.y, heelPos.z)
    heelControl.setChannelsRotate();

    this.editor.addObject( heelControl )
    heelControl.setParent( toeControl )

//  foot transform
    var footControl = new MM.Control();
    footControl.name = this.namespace+this.side+this.controlNames[4]
    footControl.tag = 'control'
    footControl.controlSide = this.side
    footControl.controlSize = 4 * this.controlScale;
    footControl.controlOffset.set(0,0,2);
    footControl.controlScale.set(.8,0,1.4);
    footControl.controlShape = 'plane'        
    footControl.position.set(footPos.x, 0.0, footPos.z);

    this.editor.addObject(footControl)
    footControl.setParent(heelControl)
    footControl.setParent(poleControl)

    //  setup channels
    footControl.setChannelsTranslateAndRotate();
    footControl.custom = {};

    //  NOTE: here we set the foot control as the control where the user can change the ik's behaviour
    legIk.setSoftControl(footControl)

    this.addControl( footControl , this.controlNames[4] )

    //  NOT A CONTROL
    // ankle    
    var ankleOrientControl = new MM.Constraint()
    ankleOrientControl.name = this.namespace+this.side+'AnkleOrient'
    ankleOrientControl.position.set(anklePos.x, anklePos.y, anklePos.z);

    // this.editor.addObject( ankleOrientControl )
    ballControl.setParent( ankleOrientControl )
    ankleOrientControl.constraintMode = 1;
    ankleOrientControl.setObjectToSolve( ankleJoint )    

    //  Custom attributes
    //  
    //  NOTE: here we do add all our additional step nodes by hand
    //  might be better to add a wrapper for that... might make easier
    //  to manage asset association ( by naming )
    if( this.useCustomAttributes === true ){
        //  add additional channels
        footControl.addChannel( 'custom' , 'toePivot' )
        footControl.addChannel( 'custom' , 'ballPivot' )
        footControl.addChannel( 'custom' , 'heelPivot' )
        // footControl.custom={'toePivot' : 0.0, 'ballPivot' : 0.0, 'heelPivot' : 0.0}        
        _.extend(footControl.custom, {'toePivot':0.0, 'ballPivot':0.0, 'heelPivot':0.0})

        //  have the newly added channels drive underlying objects
        var m1 = new MM.MultiChannel();
        m1.name = this.namespace+this.side+'HeelPivotMC'
        m1.setDriverChannel( footControl, 'custom', 'heelPivot' )     
        m1.addDrivenChannel( heelControl, 'rotation', 'x' )
        this.editor.step2Nodes.push( m1 )

        var m2 = new MM.MultiChannel();
        m2.name = this.namespace+this.side+'BallPivotMC'
        m2.setDriverChannel( footControl, 'custom', 'ballPivot' )     
        m2.addDrivenChannel( ballControl, 'rotation', 'x' )
        this.editor.step2Nodes.push( m2 )

        var m3 = new MM.MultiChannel();
        m3.name = this.namespace+this.side+'ToePivotMC'
        m3.setDriverChannel( footControl, 'custom', 'toePivot' )     
        m3.addDrivenChannel( toeControl, 'rotation', 'x' )
        this.editor.step2Nodes.push( m3 )
    }

    return this;
}