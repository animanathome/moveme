MM.GlobalComponent = function( parameters )
{
    MM.RigComponent.call( this );

    this.setValues( parameters )
}

MM.GlobalComponent.prototype = Object.create( MM.RigComponent.prototype );

MM.GlobalComponent.prototype.build = function(){
    var njoints = this.joints.length;
    var joints = this.getJoints(); // returns dictionary!!!
    for( var i = 0; i < njoints; i++){
        //  create control
        var thisControl = MM.createControlGroup( this.side, 
            this.getName(this.controlNames[i]), this.controlShape, 
            (this.controlSize - (i*2)))
        
        //  move zero group into position
        thisControl['zero'].applyMatrix( joints[this.joints[i]].matrixWorld )

        console.log('\t', joints[this.joints[i]].matrixWorld.elements)
        
        //  add the created control group to the scene
        this.editor.addObject(thisControl['zero'] )
        this.editor.addSelectable(thisControl['control'])

        //  parent the zero group under the previously created control 
        //  off course we can only do this when we're already created one
        if( i !== 0 ){
            this.controls[this.controlNames[i-1]].setParent( thisControl['zero'])
        }

        //  parent the selected joint under the last created control
        if( i === (njoints-1) ){
            thisControl['control'].setParent( joints[this.joints[i]] )
        }
        
        //  only expose translate and rotate channels
        thisControl['control'].setChannelsTranslateAndRotate();

        //  register control to rig component
        this.addControl( thisControl['control'], this.controlNames[i] )    
        
        //  register control to asset group
        this.editor.addGroupContent( this.assetGroup, [ thisControl['control'] ] ) 
    }

    return this;
}