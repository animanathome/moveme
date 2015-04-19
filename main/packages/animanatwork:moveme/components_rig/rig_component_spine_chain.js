MM.SpineComponent = function( parameters ) {   
    MM.RigComponent.call( this );

    this.joints = []
    this.controlNames = ['C_body_0_ctrl', 'C_hip_0_ctrl', 'C_chest_0_ctrl']
    this.createGlobalControl = true

    this.setValues( parameters )

    return this
}

MM.SpineComponent.prototype = Object.create( MM.RigComponent.prototype );

MM.SpineComponent.prototype.setValues = function( parameters ){
    MM.RigComponent.prototype.setValues.call(this, parameters);

    this.joints = [ 'C_spine0_0_jnt',
                    'C_spine1_0_jnt',
                    'C_spine2_0_jnt',
                    'C_spine3_0_jnt']

    if( parameters !== undefined ){        
        if(parameters.hasOwnProperty('joints')){
            console.log('\tsetting joints value to', parameters['joints'])
            this.joints = parameters['joints']
        }
        if(parameters.hasOwnProperty('globalControl')){
            console.log('\tsetting create global control to', parameters['globalControl'])
            this.createGlobalControl = parameters['globalControl']
        }
    }
}

MM.SpineComponent.prototype.build = function(){
    var spineJoint = this.editor.scene.getObjectByName(this.namespace+this.joints[0], true)
    // console.log('\tspineJoint', spineJoint)    

    //  spine control
    var spineSetup = new MM.SplineSolver( this.editor )    
    spineSetup.topControlScale.set(1.25 * this.controlSize,0.4 * this.controlSize, 1.25 * this.controlSize)
    spineSetup.bottomControlScale.set(1.25 * this.controlSize,0.4 * this.controlSize,1.25 * this.controlSize)
    spineSetup.followBottomControl = true;
    for(var i = 0; i < this.joints.length; i++){
        var thisJoint = this.editor.scene.getObjectByName(this.namespace+this.joints[i], true)
        if(thisJoint === undefined){
            console.error('Unable to find joint', this.namespace+this.joints[i])
        }
        spineSetup.joints.push(thisJoint)
    }
    spineSetup.build();          

    // console.log('\tNaming control', this.namespace+this.controlNames[1])
    spineSetup.bottomControl.name = this.namespace+this.controlNames[1]
    spineSetup.bottomControl.controlSide = this.side
    spineSetup.bottomControl.setChannelsTranslateAndRotate()
    this.addControl( spineSetup.bottomControl, this.controlNames[1])
    this.editor.addSelectables([spineSetup.bottomControl])
    // console.log('result: top name', spineSetup.topControl.name)

    // console.log('\tNaming control', this.namespace+this.controlNames[2])
    spineSetup.topControl.name = this.namespace+this.controlNames[2]
    spineSetup.topControl.controlSide = this.side
    spineSetup.topControl.setChannelsTranslateAndRotate()
    this.addControl( spineSetup.topControl, this.controlNames[2])
    this.editor.addSelectables([spineSetup.topControl])
    // console.log('result: bottom name', spineSetup.bottomControl.name)
    
    spineSetup.topControl.tag = 'control'
    spineSetup.bottomControl.tag = 'control'
    spineSetup.topControl.curve.name = this.namespace+this.controlNames[1]+'Curve'
    
    //  add zero groups
    var bottomZero = spineSetup.bottomControl.addInbetween(
        this.namespace+this.controlNames[1]+'zero')
    var topZero = spineSetup.topControl.addInbetween(
        this.namespace+this.controlNames[2]+'zero')

    //  debugging
    // editor.addGroupContent( this.assetGroup, [ bottomZero, topZero ] ) 

    if( this.createGlobalControl === true ){
        var spinePos = spineJoint.matrixWorld.getPosition();

        var spineControl = MM.createControlGroup(this.side, 
            this.getName(this.controlNames[0]));
        spineControl['zero'].setChannelsTranslateAndRotate()

        spineControl['zero'].position.set(spinePos.x, spinePos.y, spinePos.z)
        this.editor.addObject(spineControl['zero'])

        this.addControl( spineControl['control'], this.controlNames[0])
        
        spineControl['control'].setParent( bottomZero)
        spineControl['control'].setParent( topZero)

        this.editor.addGroupContent( this.assetGroup,[spineControl['control'], spineSetup.topControl, spineSetup.bottomControl ] )  

        this.editor.addSelectables([spineControl.control])
    }else{
        // this.addControl( spineSetup.topControl )
        // this.addControl( spineSetup.bottomControl )

        // this.editor.addObject( spineSetup.topControl )
        // this.editor.addObject( spineSetup.bottomControl )

        this.editor.addGroupContent( this.assetGroup, [ spineSetup.topControl,
        spineSetup.bottomControl ] )  
    }

    // console.log('result: top name', spineSetup.topControl.name)
    // console.log('result: bottom name', spineSetup.bottomControl.name)
    return this;
}
