MM.SplineCluster = function(){
    MM.Control.call(this);

    this.curve = undefined
    this.splineSolver = undefined
    this.mode = undefined // T or B ( top or bottom )
    this.indices = []
    this.bindMatrix = new THREE.Matrix4();
}

MM.SplineCluster.prototype = Object.create( MM.Control.prototype );

MM.SplineCluster.prototype.exportData = function(){
    var data = {}

    //  since the control will be created during the splineSolver build
    //  method we only have to export a limited amount of data
    data.name = this.name
    data.uuid = this.uuid
    data.parent = this.parent.name
    data.custom = this.custom
    data.matrix = this.matrix.toArray();
    data.bindMatrix = this.bindMatrix.toArray();

    data.controlColor = this.controlColor.toArray()
    data.controlSize = this.controlSize
    data.controlScale = this.controlScale.toArray()
    data.controlOffset = this.controlOffset.toArray()
    data.controlSide = this.controlSide
    
    if( this.controlShape !== undefined ) 
        data.controlShape = this.controlShape

    if( this.hasOwnProperty('tag')){
        data.tag = this.tag
    }

    return data
}

MM.SplineCluster.prototype.importData = function( data, editor ){
    console.log('SplineCluster.importData', data)

    //  Here we should already have an object with the given uuid. This so we 
    //  can build any possible children. This means that here we'll have to do
    //  the following before continuing this build
    //  1. parent children to this control
    //  2. parent this control to the parent 
    //  2. copy over animation
    //  3. deleting old object

    var existingObject = editor.scene.getObjectByUuid( data.uuid, true )
    if( existingObject === undefined ){
        console.error('Source object with uuid', data.uuid, 'does not exist. This is strange.')
    }
    // console.log('\tfound source object', existingObject.children.length)

    //  IMPORTANT: remember that here we have to use a while loop instead
    //  of a for loop. This because the length of children becomes smaller
    //  every time we add on of the existing children to the new parent. 
    while( existingObject.children.length !== 0 ){
        // console.log('\treparenting', existingObject.children[0])
        this.add( existingObject.children[0])    
    }

    //  copy over animation
    this.setChannels( existingObject.getChannels() );
    if( existingObject.hasOwnProperty('animCurves') ){
        for( var i = 0; i < existingObject.animCurves.length; i++){
            this.addAnimCurve( existingObject.animCurves[i])
        }
    }    

    this.name = data.name
    this.uuid = data.uuid
    // this.type = existingObject.type
    this.asset = existingObject.asset
    this.custom = data.custom

    //  delete the old object
    editor.removeObject( existingObject )

    var thisParent    
    if( data.parent === 'objectScene'){
        thisParent = editor.scene
    }else{
        thisParent = editor.scene.getObjectByName( data.parent , true )    
        if( thisParent === undefined ){
            console.error('Unable to find', data.parent)
        }
    }
    thisParent.add( this )

    if( data.hasOwnProperty('tag')){
        this.tag = data.tag
    }

    this.controlColor.fromArray( data.controlColor )
    this.controlSize = data.controlSize
    this.controlScale.fromArray( data.controlScale )
    this.controlOffset.fromArray( data.controlOffset)
    this.controlSide = data.controlSide

    var thisMatrix = new THREE.Matrix4().fromArray( data.matrix )
    thisMatrix.decompose( this.position, this.quaternion, this.scale ); 

    this.bindMatrix.fromArray( data.bindMatrix );
}

MM.SplineCluster.prototype.updateMatrixWorld = function ( force ) {
    MM.Control.prototype.updateMatrixWorld.call(this);

    this.doSolve();
}

MM.SplineCluster.prototype.addIndex = function( thisIndex ){
    this.indices.push(thisIndex)
}

MM.SplineCluster.prototype.doSolve = function (){
    //  should always be 2 here!!! 
    // console.log('doSolve', this.name)
    if(this.curve === undefined){
        return
    }

    // console.log('updating curve', this.curve.name)

//  transform the vertices
    var nVertices = this.indices.length
    this.curve.geometry.verticesNeedUpdate = true;  
    // console.log(nVertices, 'vertices to update')
    for(var i = 0; i < nVertices; i++){
        var thisIndex = this.indices[i]
        var thisVertex = this.curve.origPoints[thisIndex].clone();
        
        var inverseMatrix = new THREE.Matrix4();
        inverseMatrix.getInverse(this.bindMatrix)

        var localMatrix = new THREE.Matrix4();
        localMatrix.multiplyMatrices(this.matrixWorld, inverseMatrix)

        thisVertex.applyMatrix4(localMatrix);

        this.curve.geometry.vertices[thisIndex].copy(thisVertex);
    }

    if(this.splineSolver !== undefined){
        if(this.splineSolver instanceof MM.SplineSolver){            
            this.splineSolver.update();
        }
    }
}

MM.SplineSolver = function( editor ){
    this.id = THREE.Object3DIdCount ++;
    this.uuid = THREE.Math.generateUUID();

    this.editor = editor;
    this.joints = []
    this.nurbsControlPoints = []
    
    this.topControl = undefined
    this.topControlSize = 10;
    this.topControlScale = new THREE.Vector3(1,1,1);
    
    this.bottomControl = undefined
    this.bottomControlSize = 10;
    this.bottomControlScale = new THREE.Vector3(1,1,1);
    
    this.linearCurve = undefined
    this.controlPoints = []
    this.followBottomControl = false
    this.skipFirstJoint = false
}

MM.SplineSolver.prototype = Object.create( null );

MM.SplineSolver.prototype.importData = function( data ){
    console.log('SplineSolver.importData', data)

    this.uuid = data.uuid
    this.name = data.name

//  this
    var thisJoint;
    for( var i = 0; i < data.joints.length; i++){
        thisJoint = this.editor.scene.getObjectByName( data.joints[i], true);
        if( thisJoint === undefined )
        {
            console.error('Unable to find', data.joints[i])
        }
        this.joints.push( thisJoint )
    }
    this.followBottomControl = data.followBottomControl
    this.skipFirstJoint = data.skipFirstJoint

    for( var i = 0; i < data.nurbsControlPoints.length; i++){
        this.nurbsControlPoints.push( new THREE.Vector3( 
            data.nurbsControlPoints[i],
            data.nurbsControlPoints[i+1],
            data.nurbsControlPoints[i+2])
        )
        i += 2
    }
    console.log('\tnurbsControlPoints:',this.nurbsControlPoints)

    this.build()

//  load data on controls  
    this.bottomControl.importData( data.bottomControl, this.editor )
    this.topControl.importData( data.topControl, this.editor )

    console.log('\tresult', this)
}

MM.SplineSolver.prototype.exportData = function(){
    var data = {};

    data.type = 'SplineSolver'
    data.uuid = this.uuid
    data.name = this.name

    data.joints = []
    for( var i = 0; i < this.joints.length; i++){
        data.joints.push( this.joints[i].name )
    }

    data.nurbsControlPoints = []
    for( var i = 0; i < this.nurbsControlPoints.length; i++){
        data.nurbsControlPoints.push( this.nurbsControlPoints[i].x)
        data.nurbsControlPoints.push( this.nurbsControlPoints[i].y)
        data.nurbsControlPoints.push( this.nurbsControlPoints[i].z)
    }

    //  top
    data.topControlScale = this.topControlScale.toArray()
    data.topControlSize = this.topControlSize
    data.topControl = this.topControl.exportData()
    
    //  bottom
    data.bottomControlScale = this.bottomControlScale.toArray()
    data.bottomControlSize = this.bottomControlSize
    data.bottomControl = this.bottomControl.exportData()
    
    data.followBottomControl = this.followBottomControl
    data.skipFirstJoint = this.skipFirstJoint

    return data;
}

MM.SplineSolver.prototype.build = function(){
    var nJoints = this.joints.length

//  CURVES
    //  linear curve
    //  control positions
    if( this.nurbsControlPoints.length === 0){
        for(var i = 0; i < nJoints; i++){    
            // console.log(i, this.joints[i])    
            this.nurbsControlPoints.push(this.joints[i].getWorldPosition());        
        }
    }else{
        //  Read in the existing data.
    }

    //  knots
    var nurbsKnots = [];
    var nurbsDegree = 1;    
    var i = 0, j = 0;
    for ( i = 0; i <= nurbsDegree; i ++ ){
        nurbsKnots.push(0);
    }
    
    for( i = 0, j = 5; i < j; i++){
        var knot = (i + 1)/(j - nurbsDegree);
        nurbsKnots.push( THREE.Math.clamp( knot, 0, 1 ));
    }
    
    //  create curve
    var nurbsCurve = new THREE.NURBSCurve(nurbsDegree, nurbsKnots, this.nurbsControlPoints);
    var nurbsGeometry = new THREE.Geometry();
    nurbsGeometry.vertices = nurbsCurve.controlPoints;
        
    var controlPoints = this.nurbsControlPoints;
            
    var nurbsMaterial = new THREE.LineBasicMaterial(  { linewidth: 2, color: 0xff00ff, opacity: 0.50, transparent: true } );
    this.linearCurve = new THREE.Line( nurbsGeometry, nurbsMaterial );    
    this.linearCurve.origPoints = controlPoints;
    this.linearCurve.name = 'splineSolverLinearCurve'

    //  define a custom variable to filter this element out of the export list
    this.linearCurve.exportType = 'DO_NOT_EXPORT'
    
    this.editor.addObject(this.linearCurve);

//  CONTROLS
    //  top control
    // console.log('creating top control')
    var topPosition = this.joints[nJoints-1].getWorldPosition();
    // console.log('position', topPosition.x, topPosition.y, topPosition.z)

    this.topControl = new MM.SplineCluster()
    this.topControl.name = 'splineSolverTopControlCluster'
    this.topControl.controlScale = this.topControlScale;
    this.topControl.controlSize = this.topControlSize;
    this.topControl.controlShape = 'cube';
    this.topControl.mode = 'T'

    this.topControl.position.set(topPosition.x, topPosition.y, topPosition.z)
    this.editor.addObject(this.topControl)

    this.topControl.curve = this.linearCurve    
    this.topControl.indices=[nJoints-1, nJoints-2]
    this.topControl.bindMatrix = this.topControl.matrixWorld.clone();
    this.topControl.splineSolver = this
    
    //  bottom control
    // console.log('creating bottom control')
    var bottomPosition = this.joints[0].getWorldPosition();

    this.bottomControl = new MM.SplineCluster()
    this.bottomControl.name = 'splineSolverBottomsControlCluster'
    this.bottomControl.controlSize = this.bottomControlSize;
    this.bottomControl.controlScale = this.bottomControlScale;
    this.bottomControl.controlShape = 'cube'
    this.bottomControl.mode = 'B'
    
    this.bottomControl.position.set(bottomPosition.x, bottomPosition.y, bottomPosition.z)
    this.editor.addObject(this.bottomControl)  

    this.bottomControl.curve = this.linearCurve
    this.bottomControl.indices = [0,1]
    this.bottomControl.bindMatrix = this.bottomControl.matrixWorld.clone();
    this.bottomControl.splineSolver = this
}

MM.SplineSolver.prototype.update = function(){
    // console.log('update')

    var blendValues = [];
    var spinePositions = [];
    var nJoints = this.joints.length

    var nurbsKnots = [];
    var nurbsDegree = 3;    
    var i = 0, j = 0;
    for ( i = 0; i <= nurbsDegree; i ++ ){
        nurbsKnots.push(0);
    }
    
    for( i = 0, j = nJoints; i < j; i++){
        var knot = (i + 1)/(j - nurbsDegree);
        nurbsKnots.push( THREE.Math.clamp( knot, 0, 1 ));
    }  

    blendValues = [];
    spinePositions = [];
    for(i = 0; i < nJoints; i++)
    {            
        var thisBlendValue = (1.0/(nJoints-1))*i;
        blendValues.push(thisBlendValue);
        // console.log(i, ' blend value ', thisBlendValue);
        
        var wpos = THREE.NURBSUtils.calcBSplinePoint(nurbsDegree, 
                                                     nurbsKnots, 
                                                     this.linearCurve.geometry.vertices, 
                                                     thisBlendValue);
        spinePositions.push(wpos);
        console.log('\t\t', i, 'position', wpos.x, wpos.y, wpos.z)
    }

    var startIndex = 0;
    if(this.skipFirstJoint === true){
        startIndex = 1;
    }

    if(this.followBottomControl === true && this.skipFirstJoint === false
        && this.joints[0].parent !== undefined )
    {
        // console.log('following bottom control')

        //  local matrix        
        var parentInverse = new THREE.Matrix4()
        parentInverse.getInverse(this.joints[0].parent.matrixWorld)

        var localMatrix = new THREE.Matrix4()
        localMatrix.multiplyMatrices(parentInverse, this.bottomControl.matrixWorld)    

        var m1 = new THREE.Matrix4();
        this.joints[0].position.getPositionFromMatrix( localMatrix );        
        m1.extractRotation( localMatrix );
        this.joints[0].quaternion.setFromRotationMatrix( m1 );

        //  update
        this.joints[0].updateMatrix()
        this.joints[0].updateMatrixWorld(true)   

        startIndex = 1;
    }else{
        console.log('following curve')
    }

    var m1 = new THREE.Matrix4();
    for(i = startIndex; i < (nJoints-1); i++){
        var botQuat = new THREE.Quaternion();
        botQuat.setFromRotationMatrix(this.bottomControl.matrixWorld);
    
        var topQuat = new THREE.Quaternion();
        topQuat.setFromRotationMatrix(this.topControl.matrixWorld);
        
        botQuat.slerp(topQuat, blendValues[i]);  
        
        var slerpMatrix = new THREE.Matrix4();
        slerpMatrix.makeRotationFromQuaternion(botQuat);  

        var slerpMatrixYAxis = new THREE.Vector3();
        slerpMatrixYAxis.x = slerpMatrix.elements[4] * -1.0;
        slerpMatrixYAxis.y = slerpMatrix.elements[5] * -1.0;
        slerpMatrixYAxis.z = slerpMatrix.elements[6] * -1.0;      
        slerpMatrixYAxis.normalize();  

        //  look in front
        var tangent = new THREE.Vector3(spinePositions[i].x, 
                                        spinePositions[i].y, 
                                        spinePositions[i].z);
    
        tangent.sub(spinePositions[i+1]);
        tangent.normalize(); 

        //  get the angle between the "curve tangent" and the "control tangent"
        var angle = tangent.angleTo(new THREE.Vector3(slerpMatrixYAxis.x, 
                                                      slerpMatrixYAxis.y, 
                                                      slerpMatrixYAxis.z));

        var axis = new THREE.Vector3(slerpMatrixYAxis.x, slerpMatrixYAxis.y, slerpMatrixYAxis.z);


        axis.cross(tangent);
        axis.normalize();

        var rotationToSnapOnCurve = new THREE.Quaternion();
        rotationToSnapOnCurve.setFromAxisAngle(axis, angle * THREE.Math.rad);
        rotationToSnapOnCurve.multiply(botQuat);

        var tempMatrix = new THREE.Matrix4();
        tempMatrix.makeRotationFromQuaternion(rotationToSnapOnCurve);
        tempMatrix.setPosition(spinePositions[i])

        // //  world matrix
        // this.joints[i].position.set(spinePositions[i].x, spinePositions[i].y, spinePositions[i].z)
        // m1.extractRotation( tempMatrix );
        // this.joints[i].quaternion.setFromRotationMatrix( m1 );

        // local matrix
        if( this.joints[i].parent !== undefined ){
            var parentInverse = new THREE.Matrix4()
            parentInverse.getInverse(this.joints[i].parent.matrixWorld)

            var localMatrix = new THREE.Matrix4()
            localMatrix.multiplyMatrices(parentInverse, tempMatrix)

            this.joints[i].position.getPositionFromMatrix( localMatrix );        
            m1.extractRotation( localMatrix );
            this.joints[i].quaternion.setFromRotationMatrix( m1 );

            //  update
            this.joints[i].updateMatrix()
            this.joints[i].updateMatrixWorld(true)
        }
    }

    // //  world matrix
    // this.joints[i].position.set(spinePositions[i].x, spinePositions[i].y, spinePositions[i].z)
    // m1.extractRotation( this.topControl.matrixWorld );
    // this.joints[i].quaternion.setFromRotationMatrix( m1 );

    //  local matrix
    var thisIndex = (nJoints-1)
    if( this.joints[thisIndex].parent === undefined ){
        return
    }
    
    var parentInverse = new THREE.Matrix4()
    parentInverse.getInverse(this.joints[thisIndex].parent.matrixWorld)

    var localMatrix = new THREE.Matrix4()
    localMatrix.multiplyMatrices(parentInverse, this.topControl.matrixWorld)    

    this.joints[thisIndex].position.getPositionFromMatrix( localMatrix );        
    m1.extractRotation( localMatrix );
    this.joints[thisIndex].quaternion.setFromRotationMatrix( m1 );

    //  update
    this.joints[thisIndex].updateMatrix()
    this.joints[thisIndex].updateMatrixWorld(true)    
}