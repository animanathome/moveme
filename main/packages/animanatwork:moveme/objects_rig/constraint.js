MM.Constraint = function(){
    MM.Control.call(this);

    //  solver variables
    //  constraint modes
    //  0 = point
    //  1 = orient
    //  2 = point and orient
    //  3 = parent
    //  4 = aim
    //  5 = parent and scale  
    
    this.constraintMode = 0
    this.objectToSolve = undefined 
    this.offsetMatrix = new THREE.Matrix4();

    this.useOffset = false
    this.order = 'XYZ'
};

MM.Constraint.prototype = Object.create( MM.Control.prototype );

MM.Constraint.prototype.setObjectToSolve = function( transform ){
    // console.log('setObjectToSolve', transform.name)
    this.objectToSolve = transform

    //  offset matrix
    var parentInverse = new THREE.Matrix4().getInverse(this.matrixWorld);    
    this.offsetMatrix.multiplyMatrices(parentInverse, this.objectToSolve.matrixWorld)

    // console.log(this.offsetMatrix)
}

MM.Constraint.prototype.updateMatrixWorld = function ( force ) {

    MM.Control.prototype.updateMatrixWorld.call(this);

    this.doSolve();
}

MM.Constraint.prototype.doSolve = function() {
    // console.log('Constraint: doSolve', this)

    if(this.objectToSolve === undefined ){
        // console.log('\tNothing to solve')
        return;
    }
    // console.log('\tSolving', this.objectToSolve)
    
    //  0 = point
    //  1 = orient
    //  2 = point and orient
    //  3 = parent
    //  4 = aim
    //  5 = parent and scale  

    //  position
    if(this.constraintMode == 0){
        if( this.objectToSolve.parent === undefined ){
            return
        }    
        
        var parentInverse = new THREE.Matrix4()
        parentInverse.getInverse(this.objectToSolve.parent.matrixWorld);

        var localMatrix = new THREE.Matrix4();
        localMatrix.multiplyMatrices(parentInverse, this.matrixWorld)

        var localPosition = new THREE.Vector3().getPositionFromMatrix(localMatrix);
        // console.log('position', localPosition.x, localPosition.y, localPosition.z)
        
        this.objectToSolve.position.set(localPosition.x, localPosition.y, localPosition.z)
    }

    //  rotation
    if(this.constraintMode == 1){
        if( this.objectToSolve.parent === undefined ){
            return
        }

        var parentInverse = new THREE.Matrix4()
        parentInverse.getInverse(this.objectToSolve.parent.matrixWorld);

        var localMatrix = new THREE.Matrix4();
        localMatrix.multiplyMatrices(parentInverse, this.matrixWorld)

        // console.log('local matrix')
        // console.log(localMatrix)

        this.objectToSolve.setRotationFromMatrix(localMatrix);
    }

    //  point and orient
    if(this.constraintMode == 2){
        // console.log('point and orient constraint mode')
        var parentInverse = new THREE.Matrix4()
        parentInverse.getInverse(this.objectToSolve.matrixWorld);

        var localMatrix = new THREE.Matrix4();
        localMatrix.multiplyMatrices(this.matrixWorld, parentInverse) 
        
        this.objectToSolve.applyMatrix(localMatrix);   
    }  

    //  parent
    if(this.constraintMode == 3 || this.constraintMode == 5){   
        if( this.objectToSolve.parent === undefined ){
            return
        }

        var parentInverse = new THREE.Matrix4()
        parentInverse.getInverse(this.objectToSolve.parent.matrixWorld);

        var matrix1 = new THREE.Matrix4();
        matrix1.multiplyMatrices(parentInverse, this.matrixWorld)   

        var matrix2 = new THREE.Matrix4();
        matrix2.multiplyMatrices(matrix1, this.offsetMatrix)

        this.objectToSolve.position.getPositionFromMatrix( matrix2 );
        var m1 = new THREE.Matrix4();
        m1.extractRotation( matrix2 );
        this.objectToSolve.quaternion.setFromRotationMatrix( m1 );    

        //  parent and scale
        if( this.constraintMode == 5 ){            
            this.objectToSolve.scale.getScaleFromMatrix( matrix2 );
        }
    }

    //  aim
    if(this.constraintMode == 4){
        // console.log('\taim')
        
        //  reset matrix 
        // this.objectToSolve.matrix = new THREE.Matrix4();
        // console.log('\tlocal matrix', this.objectToSolve.matrix.elements)
        // console.log('\tworld parent matrix', this.objectToSolve.parent.matrixWorld.elements)        
        // this.objectToSolve.matrixWorld.multiplyMatrices( this.objectToSolve.parent.matrixWorld, this.objectToSolve.matrix );

        // console.log('\tworld matrix', this.objectToSolve.matrixWorld.elements)

        var aimPosition = this.getWorldPosition()
        var thisPosition = this.objectToSolve.getWorldPosition();  
        
        var thisUp, thisSide;
        if( this.up === undefined ){
            thisUp = this.objectToSolve.getWorldUp();
        }else{
            thisUp = this.up;
        }
        
        if( this.side === undefined ){
            thisSide = this.objectToSolve.getWorldSide();
        }else{
            thisSide = this.side
        }

        // console.log('\taim position', aimPosition.x, aimPosition.y, aimPosition.z)
        // console.log('\tthis position', thisPosition.x, thisPosition.y, thisPosition.z)
        // console.log('\tthis up', thisUp.x, thisUp.y , thisUp.z)        
        // console.log('\tthis side', thisSide.x, thisSide.y, thisSide.z)

        var m1 = new THREE.Matrix4().copy( this.matrixWorld );
        // console.log('\tstart matrix', m1.elements)
        m1.lookAt( aimPosition, thisPosition, thisUp, thisSide );
        // console.log('\tlook at matrix', m1.elements)
        // this.objectToSolve.rotation.setFromRotationMatrix( m1)

        //  make sure we take the parent space into account when the object that needs solving
        //  has a parent
        if( this.objectToSolve.parent !== undefined ){        
            var parentInverse = new THREE.Matrix4().getInverse(this.objectToSolve.parent.matrixWorld);
            var m2 = new THREE.Matrix4().multiplyMatrices( parentInverse, m1 )
            
            if( this.aimOffset !== undefined && this.useOffset === true){
                // console.log('\tapplying offset matrix', this.aimOffset.elements)
                var m3 = new THREE.Matrix4().multiplyMatrices( m2, this.aimOffset )

                // console.log('\tfinal matrix', m3.elements)

                // this.objectToSolve.quaternion.setFromRotationMatrix( m3 );
                this.objectToSolve.rotation.setFromRotationMatrix( m3)
            }else{
                // this.objectToSolve.quaternion.setFromRotationMatrix( m2 );
                this.objectToSolve.rotation.setFromRotationMatrix( m2)
            }
        }else{
            if( this.aimOffset !== undefined && this.useOffset === true){
                var m2 = new THREE.Matrix4().multiplyMatrices( this.aimOffset, m1 )
                // this.objectToSolve.quaternion.setFromRotationMatrix( m2 );
                this.objectToSolve.rotation.setFromRotationMatrix( m2)
            }else{
                // this.objectToSolve.quaternion.setFromRotationMatrix( m1 );
                this.objectToSolve.rotation.setFromRotationMatrix( m1)
            }
        }

        // console.log('\tend rotation', this.objectToSolve.rotation)
        // console.log('\tend matrix', this.objectToSolve.matrix.elements)        
        
        //  since our objects/joints aren't aligned we need to keep track of the initial solve so 
        //  we can use it as an offset
        if( this.aimOffset === undefined ){
            this.objectToSolve.updateMatrix();
            // console.warn('\tundefined aim offset')
            this.aimOffset = new THREE.Matrix4().getInverse(this.objectToSolve.matrix)            
            // console.log('\taim offset:', this.aimOffs    et.elements)
        }
    }
     
    this.objectToSolve.updateMatrix();    
    // console.log('end constraint')
}  

MM.createConstraintGroup = function( side, name, shape, controlSize)
{
    // console.log('createConstraintGroup', side, name, shape, controlSize)
    if( shape === undefined){
        shape = 'plane'
    }

    if( controlSize === undefined ){
        controlSize =  10;
    }

    var zero = new THREE.Object3D();
    zero.name = name+'Zero'
    
    var constraint = new MM.Constraint();
    constraint.name = name
    zero.add( constraint )

    constraint.tag = 'control'
    constraint.controlShape = shape
    constraint.controlSize = controlSize
    constraint.controlSide = side

    return {'constraint':constraint, 'zero':zero}
}