MM.Editor.prototype.controlsVisibility = function( value ){
    if( value === undefined )
        value = true

    //  shows or hides all controls            
    this.showControls = value

    var controls = this.scene.getObjectOfInstance(MM.Control)
    for( var i = 0, l = controls.length; i < l; i++){
        //  if we want to show all controls, add a display to all
        //  controls that don't yet have one
        if( value === true ){
            if( controls[i].hasDisplay() === false){
                controls[i].addDisplay()            
                if(controls[i].hasDisplay() === true){
                    this.addHelper( controls[i].cd.line )
                }
            }                
        //  if we want to hide all controls, remove the display of 
        //  all controls
        }else{
            if( controls[i].hasDisplay() === true){
                this.removeHelper( controls[i].cd.line )
                controls[i].removeDisplay()                    
            }
        }
    }
    this.signals.showInfo.dispatch('Show controls '+value)
}

MM.Editor.prototype.gridVisibility = function( value ){
    //  show or hide the grid
    this.showGrid = value

    var object = this.scene.getObjectByName('grid')  
    object.visible = value

    this.signals.showInfo.dispatch('Show grid '+value)

    this.signals.sceneGraphChanged.dispatch();    
}

MM.Editor.prototype.geometryVisibility = function( value ){
    // console.log('geometryVisibility', value)

    var geometry = this.scene.getObjectOfInstance(THREE.Mesh)
    var ngeometry = geometry.length

    var skipList = ["TXYZ", "TXY", "TYZ", "TXZ", "TX", "TY", "TZ", "SXYZ", 
                    "SX", "SY", "SZ", "TXYZ", "TXY", "TYZ", "TXZ", "TX", 
                    "TY", "TZ", "RX", "RY", "RZ", "RXYZE", "RE", "SXYZ", 
                    "SX", "SY", "SZ"]
    for( var i = 0; i < ngeometry; i++){
        if( geometry[i].name === ""){
            continue;
        }
        if( skipList.indexOf( geometry[i].name) !== -1 ){
            continue;
        }
        // console.log('\t', geometry[i].name)
        geometry[i].visible = value
    }
    this.signals.showInfo.dispatch('Show geometry '+value)

    this.signals.sceneGraphChanged.dispatch();
}

MM.Editor.prototype.rotationAxisVisibility=function(value){
    console.log('rotationAxisVisibility', value)

    var i,j;
    for(i = 0, j = this.selectedObjects.length; i < j; i++){
        console.log('\tshowing rotation axis for', this.selectedObjects[i])
        if(this.selectedObjects[i].type === 'Joint'){
            console.log('\tjoint already has display')
            if(this.selectedObjects[i].hasDisplay()){
                //  remove display
                this.removeHelper( this.selectedObjects[i].jd.line )
                this.selectedObjects[i].removeDisplay()
                
                //  add display
                this.selectedObjects[i].showRotationAxis=value;                
                this.selectedObjects[i].addDisplay();
                this.addHelper( this.selectedObjects[i].jd.line )
            }
        }
    }
    this.signals.showInfo.dispatch('Show rotation axis on selected joints '+value)
}

MM.Editor.prototype.jointsVisibility = function( value ){
    // console.log('Editor.jointsVisibility', value)

    if( value === undefined ){
        value = true;
    }

    //  shows or hides all joints
    this.showJoints = value

    var joints = this.scene.getObjectOfType('Joint')
    for( var i = 0, l = joints.length; i < l; i++){
        // console.log('\tsetting visiblity for', joints[i])
        if( value === true ){   //  show joints
            if( joints[i].hasDisplay() === false){
                joints[i].addDisplay()
                this.addHelper( joints[i].jd.line )
            }
        }else{  //  hide joints
            if( joints[i].hasDisplay() === true){
                this.removeHelper( joints[i].jd.line )
                joints[i].removeDisplay()
            }
        }
    }
    this.signals.showInfo.dispatch('Show joints '+value)
}