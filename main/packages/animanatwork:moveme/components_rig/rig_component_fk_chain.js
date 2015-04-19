MM.FkChainComponent = function( parameters )
{
    MM.RigComponent.call( this );
    this.setValues( parameters )
}

MM.FkChainComponent.prototype = Object.create( MM.RigComponent.prototype );

MM.FkChainComponent.prototype.build = function(){
    // console.log('FkChainComponent.build')
    
    var joints = this.getJoints(); // returns dictionary!!!

    var i, j;
    var controls = []
    var thisControl;
    for( i = 0, j = this.joints.length; i < j; i++){
        // console.log('\tjoint', i, joints[this.joints[i]])

        //  create control group
        thisControl = MM.createControlGroup( this.side, this.getName( 
            this.controlNames[i]), this.controlShape, this.controlSize)
        
        //  position control group
        thisControl['zero'].applyMatrix( joints[this.joints[i]].matrixWorld )
        thisControl['control'].setChannelsRotate();

        // console.log('\toffset', joints[this.joints[i]].matrixWorld.elements)
        
        //  add to scene
        this.editor.addObject( thisControl['zero'] )

        // parent joint under control
        thisControl['control'].setParent( joints[this.joints[i]] )

        //  record created control to component
        this.addControl( thisControl['control'], this.controlNames[i] ) 
        this.editor.addSelectables([thisControl['control']])

        //  record control group to help us define the control structure
        //  here we're going to match the control hierarchy from the used joint
        //  chain
        controls.push( thisControl )
        if( i > 0 ){
            controls[i-1]['control'].setParent(controls[i]['zero'])
        }
        // this.editor.addGroupContent( this.assetGroup, [ joints[this.joints[i]]])
        this.editor.addGroupContent( this.assetGroup, [ thisControl['control']])        
    }
    // console.log('done')

    return this;
}
