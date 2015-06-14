MM.RigComponent = function(){
    // To which asset to this component belong? This get's currenlty 
    // used to be able to associate controls (objects) with a given
    // asset. This allows us to for instance show a different picture
    // within the asset select widget. 
    
    //  component name
    this.name = 'base'
    
    this.asset  = undefined 
    this.namespace = undefined
    this.assetGroup = undefined
    this.side = 'C'
    this.controlShape = 'circle'
    this.controlSize = 1.0;
    this.controlScale = 1.0;
        
    this.editor = undefined
    this.joints = []
    this.controlNames = []

    this.controls = {}

    //  purple
    this.globalColor0 = new THREE.Color(0xff00ff); // lighter
    this.globalColor1 = new THREE.Color(0xcc00cc);
    this.globalColor2 = new THREE.Color(0x660066); // darker

    //  yellow
    this.centerColor0 = new THREE.Color(0xffff00); // lighter
    this.centerColor1 = new THREE.Color(0xcccc00);
    this.centerColor2 = new THREE.Color(0x666600); // darker
    
    //  blue
    this.leftColor0 = new THREE.Color(0x0000ff); // lighter
    this.leftColor1 = new THREE.Color(0x0000cc); 
    this.leftColor2 = new THREE.Color(0x000066); // darker
    
    //  red
    this.rightColor0 = new THREE.Color(0xff0000); // lighter
    this.rightColor1 = new THREE.Color(0xcc0000); 
    this.rightColor2 = new THREE.Color(0x660000); // darker

    return this
}

MM.RigComponent.prototype = {
    constructor: MM.RigComponent,
    
    addControl: function( control, controlKey ){
        console.log('RigComponent.addControl', control, controlKey)

        if( controlKey === undefined ){
            console.error('No key was defined')
            return
        }

        //  currently we assume that when we add a control to the component
        //  it's a control that we want to user to interact with.

        //  color the specific control
        switch( this.side ){
            case 'C': case 'c':
                control.setDisplayColor( this['centerColor'+control.controlType] ); 
            break;
            
            case 'G': case 'g': 
                control.setDisplayColor( this['globalColor'+control.controlType] ); 
            break;
            
            case 'L': case 'l': 
                control.setDisplayColor( this['leftColor'+control.controlType] ); 
            break;
            
            case 'R': case 'r': 
                control.setDisplayColor( this['rightColor'+control.controlType] ); 
            break;
            
            default: 
                console.log('No coloring for', control.name);
            break;
        }
        this.controls[controlKey]=control

        if( this.asset !== undefined ){
            // console.log('passing on asset name to', control.name)
            control.asset = this.asset
        }
    },
    setValues: function( parameters ){
        // console.log('RigComponent: setValues')
        if( parameters !== undefined ){
            if( parameters.hasOwnProperty('controlScale')){
                console.warn('Use controlScales instead')
                // console.log('\tsetting controlScale to', parameters['controlScale'])
                this.controlScale = parameters['controlScale']
            }
            if( parameters.hasOwnProperty('controlSize')){
                console.warn('Use controlSizes instead')
                // console.log('\tsetting controlSize to', parameters['controlSize'])
                this.controlSize = parameters['controlSize']
            }
            if(parameters.hasOwnProperty('controlShape')){
                console.warn('Use controlShapes instead')
                this.controlShape = parameters['controlShape']
            }
            if( parameters.hasOwnProperty('side')){
                // console.log('\tsetting side to', parameters['side'])
                this.side = parameters['side']
            }
            if( parameters.hasOwnProperty('name')){
                console.log('\tsetting component name to ', parameters['name'])
                this.name = parameters['name']
            }
            if( parameters.hasOwnProperty('names')){
                // console.log('\tsetting control names to', parameters['names'])
                this.controlNames = parameters['names']
            }
            if( parameters.hasOwnProperty('sizes')){
                this.controlSizes = parameters['sizes']   
            }
            if( parameters.hasOwnProperty('shapes')){
                this.controlShapes = parameters['shapes']   
            }
            if( parameters.hasOwnProperty('asset')){
                // console.log('\tsetting asset name to ', parameters['asset'])
                this.asset = parameters['asset']
            }
            if( parameters.hasOwnProperty('joints')){
                // console.log('\tsetting asset name to ', parameters['joints'])
                this.joints = parameters['joints']
            }
        }
    },
    getJoints: function(){
        var foundJoints = {};
        var thisJoint, thisJointName;
        for( var i = 0, j = this.joints.length; i < j ; i++){
            thisJointName = this.namespace+this.side+this.joints[i];
            thisJoint = this.editor.scene.getObjectByName(thisJointName, true)
            if( thisJoint === undefined ){
                console.warn('Unable to find ', thisJointName)
            }
            foundJoints[this.joints[i]] = thisJoint;
        }
        return foundJoints;
    },
    getJointsAsArray: function(){
        var foundJoints = [];
        var thisJoint, thisJointName;
        for( var i = 0, j = this.joints.length; i < j ; i++){
            thisJointName = this.namespace+this.side+this.joints[i];
            thisJoint = this.editor.scene.getObjectByName(thisJointName, true)
            if( thisJoint === undefined ){
                console.warn('Unable to find ', thisJointName)
            }
            foundJoints.push(thisJoint);
        }
        return foundJoints;
    },
    getJointPositions: function(){
        var jointPositions = {};
        var thisJoint, thisJointName;
        for( var i = 0, j = this.joints.length; i < j; i++){
            thisJointName = this.namespace+this.side+this.joints[i];
            thisJoint = this.editor.scene.getObjectByName(thisJointName, true);
            if( thisJoint === undefined ){
                console.warn('Unable to find ', thisJointName)
            }
            jointPositions[ this.joints[i] ] = new THREE.Vector3().getPositionFromMatrix( thisJoint.matrixWorld ) 
        }
        return jointPositions;
    },
    getName: function(name){
        return this.namespace+this.side+name
    }
}
