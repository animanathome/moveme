MM.Control = function(){
    THREE.Object3D.call(this);
    this.type = 'control'

    //  shape control properties 
    this.controlColor = new THREE.Color( 0xffff00);
    this.controlSize = 10; 
    this.controlScale = new THREE.Vector3(1,1,1);  
    this.controlOffset = new THREE.Vector3(0,0,0);

    //  different type of controls:
    //  0 = default
    //  1 = fk
    //  2 = ik
    this.controlType = 0
    //  depending on the type different rules can be applied. The first use
    //  case is to further control its color through rigComponent.

    //  can be cube, plane, circle or triangle  
    this.controlShape = undefined;
    this.displayRotationAxis = false;

    this.controlSide = 'C'

    //  defines to which asset this control belong to
    this.asset = undefined

    //  visualisation
    this.cd = undefined             // control display  
    this.boundingBox = null;        //  bounding box for selection
    this.isFull = false;            //  is it a line or full shape?
    this.isFacing = false;          // is the control face the camera
    this.facingCamera = undefined;  // the camera we need to be looking at

    this.computeBoundingBox();
};

MM.Control.prototype = Object.create( THREE.Object3D.prototype );

MM.Control.prototype.setFacingCamera = function( camera ){
    console.log('MM.Control.setFacingCamera', camera)

    this.isFacing = true;
    this.facingCamera = camera;
}

MM.Control.prototype.computeBoundingBox = function ()
{
    // console.log('control.computeBoundingBox')

    /*
    Description: to ensure we can select the control even though it doesn't
    get drawn / displayed we need to give it a bounding box. This method 
    calculates the bounding box based on its size and scale. Note that this
    value gets overwritten the moment it gets displayed. 

    NOTE: since the bounding box is based on the scale, size and offset 
    variables we should re-comupte it every time they change. 
    */
    if ( this.boundingBox === null ) {
        this.boundingBox = new THREE.Box3();
    }

    var wpos = new THREE.Vector3().getPositionFromMatrix(this.matrixWorld);

    var mnHalfX = (-1 * this.controlScale.x * (this.controlSize / 2.0)) + this.controlOffset.x + wpos.x;
    var mnHalfY = (-1 * this.controlScale.y * (this.controlSize / 2.0)) + this.controlOffset.y + wpos.y;
    var mnHalfZ = (-1 * this.controlScale.z * (this.controlSize / 2.0)) + this.controlOffset.z + wpos.z;

    var mxHalfX = (this.controlScale.x * (this.controlSize / 2.0)) + this.controlOffset.x + wpos.x;
    var mxHalfY = (this.controlScale.y * (this.controlSize / 2.0)) + this.controlOffset.y + wpos.y;
    var mxHalfZ = (this.controlScale.z * (this.controlSize / 2.0)) + this.controlOffset.z + wpos.z;

    this.boundingBox.min.set( mnHalfX, mnHalfY, mnHalfZ);
    this.boundingBox.max.set( mxHalfX, mxHalfY, mxHalfZ );
}

MM.Control.prototype.updateMatrixWorld = function ( force ) {
    // console.log('updateMatrixWorld', this.name)

    THREE.Object3D.prototype.updateMatrixWorld.call(this, force);

    //  update bounding box
    this.computeBoundingBox();

    //  ensures that the joint line gets draw properly
    //  it fails however, whenever we have actually geometry parented under it  
    if( this.hasDisplay() === true ){
        this.cd.update()
    }
}

MM.Control.prototype.setVisibility = function( value ){
    console.log('setVisibility', value)
    if( value === true ){
        this.show();
    }else{
        this.hide();
    }
}

MM.Control.prototype.hide = function(){
    if( this.hasDisplay() === true ){
        this.visible = false;
        this.cd.line.visible = false;
    }
}

MM.Control.prototype.show = function(){
    if( this.hasDisplay() === true ){
        this.visible = true
        this.cd.line.visible = true;
    }    
}

MM.Control.prototype.hasDisplay = function(){
    if( this.cd === undefined)
    {
        return false
    }
    return true
}

MM.Control.prototype.addDisplay = function(){
    //  only create a shape display when we want to 
    //  this is so we can control which one get a shape
    if( this.controlShape === undefined){
        return this;
    }
    // console.log('Control: addDisplay')
    if( this.isFull === true ){
        this.cd = new MM.ControlDisplayFull( this )
    }else{
        this.cd = new MM.ControlDisplay( this )
    }
    
    this.cd.controlColor = this.controlColor;
    // console.log(this.cd.line)

    return this;
}

MM.Control.prototype.removeDisplay = function(){
    // console.log('Control: removeDisplay')
    this.cd = undefined;

    //  re-compute the bounding box
    this.computeBoundingBox();
    return this;  
}

MM.Control.prototype.updateDisplayColor = function( color ){
    if( this.hasDisplay() === true ){
        this.cd.controlColor = color;
        this.cd.update()
    }    
}

MM.Control.prototype.setDisplayColor = function( color ){
    // console.log('Control: setDisplayColor', color)
    this.controlColor = color
    if( this.hasDisplay() === true ){
        this.cd.controlColor = this.controlColor;
    }
}

MM.Control.prototype.setControlShape = function( side, shape, controlSize ){
    //  Description:
    //      Convenient little wrapper 
    if( side === undefined ){
        side = 'c'
    }
    
    if( shape === undefined ){
        shape = 'plane'
    }
    if( controlSize === undefined ){
        controlSize = 10;
    }

    this.tag = 'control'
    this.controlSide = side
    this.controlShape = shape
    this.controlSize = controlSize
}

MM.createControlGroup = function( side, name, shape, controlSize){
    // console.log('createControlGroup', side, name, shape, controlSize)
    if( shape === undefined){
        shape = 'plane'
    }

    if( controlSize === undefined ){
        controlSize =  10;
    }

    var zero = new MM.Spaceswitch();
    zero.name = name+'Zero'
    
    var ctrl = new MM.Control();
    ctrl.name = name
    zero.setParent( ctrl )

    ctrl.tag = 'control'
    ctrl.controlShape = shape
    ctrl.controlSize = controlSize
    ctrl.controlSide = side

    return {'control':ctrl, 'zero':zero}
}

