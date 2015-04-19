MM.getClosestIndex = function( position, positionArray , scale)
{
	//console.log('getClosestIndex')

	//	 maya = 0.4
	//	 three = 4.0

	if( scale === undefined )
	{
		scale = 0.1 // three to maya
	}

	var scaledPosition = position.clone().multiplyScalar( scale )

	var dif;
	var closest = 1000000;
	var closestIndex;
	for(var i = 0; i < positionArray.length; i++)
	{
		dif = new THREE.Vector3().subVectors( scaledPosition, 
			new THREE.Vector3(positionArray[i][0], positionArray[i][1], positionArray[i][2]));
		if( dif.length() < closest)
		{			
			closest = dif.length();
			closestIndex = i

			// console.log('\t', i, closest)
		}
	}

	if(closest > 0.1){
		console.log('warning: ', closest, ':', position.x, position.y, position.z)
	}

	return closestIndex
}

MM.shapeConvert = function( data , editor ){
	//	create a global face control
	//	collect all shapes on this control
	var shapeControl = new MM.Control();
	shapeControl.name = 'cFaceCtl'
	shapeControl.tag = 'control'
	editor.addObject( shapeControl )

	var lEyeControl = new MM.Control();
	lEyeControl.name = 'lEyeCtl'
	lEyeControl.tag = 'control'
	editor.addObject( lEyeControl )

	var lMouthControl = new MM.Control();
	lMouthControl.name = 'lMouthCtl'
	lMouthControl.tag = 'control'
	editor.addObject( lMouthControl )

	var rEyeControl = new MM.Control();
	rEyeControl.name = 'rEyeCtl'
	rEyeControl.tag = 'control'
	editor.addObject( rEyeControl )

	var rMouthControl = new MM.Control();
	rMouthControl.name = 'rMouthCtl'
	rMouthControl.tag = 'control'
	editor.addObject( rMouthControl )	

	// iterate over each shape
	var thisControl;
	var thisMirrorControl;
	for (var shape in data){
 		// console.log('\tImporting', shape)

 		if(shape.match('Lid') || shape.match('Brow')){
 			// console.log('Lid or Brow')
 			thisControl = lEyeControl;
 			thisMirrorControl = rEyeControl;
 		}else if( shape.match('Mouth')){
 			// console.log('Mouth')
 			thisControl = lMouthControl;
 			thisMirrorControl = rMouthControl;
 		}else{
 			// console.log('Something else')
 			thisControl = shapeControl
 			thisMirrorControl = shapeControl
 		}

	// create the left shape channel
 		thisControl.addChannel('shapes', shape);
 		if(thisControl.hasOwnProperty('shapes') === false){ // ensure the data can flow through 
 			// console.log('adding shapes property to ', thisControl.name)
 			thisControl.shapes = {}
 		}
 		thisControl.shapes[shape] = new THREE.Number() // create an object so we can reference the value 	
		
 		// for each shape, get the joint targets
 		var thisJoint;
 		for( var joint in data[shape]){
 			// console.log('\t\t', joint)
 			//	when we find the joint, add a target with the offset 
 			thisJoint = editor.scene.getObjectByName( joint, true )
 			if( thisJoint !== undefined ){
 				var thisTarget = data[shape]
 				var thisTargetPosition = new THREE.Vector3(thisTarget[joint][0], thisTarget[joint][1], thisTarget[joint][2]).multiplyScalar(10);
 				thisJoint.addTarget( thisTargetPosition , thisControl.shapes[shape] , shape) 	
 				//thisJoint.addChannel( 'shapes', name) // show the target as an animatable channel
 			}
 		}

	//	create the right shape channel
 		if( shape.charAt(0) === 'l'){
 			var mshape = 'r' + shape.slice(1)
 			// console.log('\tAdding mirror ', mshape, 'shape')

 			thisMirrorControl.addChannel('shapes', mshape); 
 			if(thisMirrorControl.hasOwnProperty('shapes') === false){ 
 				thisMirrorControl.shapes = {}			
 			}
 			thisMirrorControl.shapes[mshape] = new THREE.Number() // create an object so we can reference the value	

 			// for each shape, get the joint targets
	 		for( var joint in data[shape])
	 		{
	 			// console.log('\t\t', joint)
	 			//	when we find the joint, add a target with the offset 
	 			var mJoint = joint
	 			if( joint.charAt(0) === 'l'){
	 				mJoint = 'r' + joint.slice(1)
	 			}
	 			
	 			thisJoint = editor.scene.getObjectByName( mJoint, true )
	 			if( thisJoint !== undefined ){
	 				var thisTarget = data[shape]
	 				var thisTargetPosition = new THREE.Vector3(-1* thisTarget[joint][0], thisTarget[joint][1], thisTarget[joint][2]).multiplyScalar(10);
	 				thisJoint.addTarget( thisTargetPosition , thisMirrorControl.shapes[mshape] , mshape) 	
	 				//thisJoint.addChannel( 'shapes', name) // show the target as an animatable channel
	 			}
	 		}
 		} 	 			
	}

	//	LIPZIP
	var lzip = new MM.LipZip( editor )
	lzip.addJointPairByName( 'lULip3', 'lDLip3', 0.25)
	lzip.addJointPairByName( 'lULip2', 'lDLip2', 0.5)
	lzip.addJointPairByName( 'lULip1', 'lDLip1', 0.75)
	lzip.addJointPairByName( 'cULip1', 'cDLip1', 1.0) 
	editor.step1Nodes.push( lzip )	

	lMouthControl.addChannel('shapes', 'lZip');
	lMouthControl.shapes['lZip'] = new MM.Number() 
	lzip.zip = lMouthControl.shapes['lZip']; // reference the object so we can 'push' the value through

	lMouthControl.addChannel('shapes', 'lZipRange');
	lMouthControl.shapes['lZipRange'] = new MM.Number() 
	lzip.range = lMouthControl.shapes['lZipRange'];

	var rzip = new MM.LipZip( editor )
	rzip.addJointPairByName( 'rULip3', 'rDLip3', 0.25)
	rzip.addJointPairByName( 'rULip2', 'rDLip2', 0.5)
	rzip.addJointPairByName( 'rULip1', 'rDLip1', 0.75)
	rzip.addJointPairByName( 'cULip1', 'cDLip1', 1.0) 
	editor.step1Nodes.push( rzip )	

	rMouthControl.addChannel('shapes', 'rZip');
	rMouthControl.shapes['rZip'] = new MM.Number() 
	rzip.zip = rMouthControl.shapes['rZip'];	

	rMouthControl.addChannel('shapes', 'rZipRange');
	rMouthControl.shapes['rZipRange'] = new MM.Number() 
	rzip.range = rMouthControl.shapes['rZipRange'];	

}

MM.weightsConvert = function( data , editor, namespace )
{
	// console.log('weightsConvert')
	// console.log('\tnamespace:', namespace)

	//	get the current geometry

	//	convert the weights
	//	NOTE: currently only supports 2 influences per vertex
	// console.log('\t', data.shape)
	if( namespace === undefined ){
		namespace = ''
	}


	// data.shape = 'pants'
	var cMeshObject = editor.scene.getObjectByName(namespace+data.shape, true)
	if( cMeshObject === undefined ){
		console.warn( 'Unable to find ', namespace+data.shape)
	}	


	var skinGeometry;
	var skinMaterial;
	var skinName;
		
	//	clone geomemtry and material
	skinName = cMeshObject.name
	skinGeometry = cMeshObject.geometry.clone()
	skinMaterial = cMeshObject.material.clone()	
	skinMaterial.skinning = true;
	
	//	hide original object
	cMeshObject.visible = false
	// console.log('hiding', cMeshObject.name)
	editor.signals.sceneGraphChanged.dispatch()
	
	console.log( skinGeometry )

	//	set the bones / joints
	skinGeometry.bones = []
	for( var i = 0; i < data.influences.length; i++)  
	{
		// console.log('\tinfluence', data.influences[i])
		var thisInfluence = editor.scene.getObjectByName(namespace+data.influences[i], true)
		if(thisInfluence === undefined ){
			// console.log('Unable to find', namespace+data.influences[i])
			return
		}
		//	push the joint/bone onto the geometry
		skinGeometry.bones.push( thisInfluence )

		thisInfluence.setBindPose();
	}
	// console.log('geometry influences', skinGeometry.bones)

	//	set the weights
	//	make sure the vertex count matches
	if( data.npoints !== skinGeometry.vertices.length)
	{
		console.error('Vertex count does not match')
		console.error('Source', data.npoints, 'destination', skinGeometry.vertices.length)
		return
	}

	//	copy over the weights
	//	NOTE: currently the API only support 2 weights per vertex
	skinGeometry.skinWeights = []
	skinGeometry.skinIndices = []
	var xWeight, xIndex;
	var yWeight, yIndex;
	var zWeight, zIndex;
	var weightPerVertexCount;
	for(var i = 0; i < data.npoints; i++)
	{
		//console.log('\t', i, data.weights[i])
		//console.log(i, 'position', data.positions[i])

		var remapIndex = MM.getClosestIndex( skinGeometry.vertices[i], data.positions )
		//console.log('remapped index', i, remapIndex)

		xWeight = 0.0;
		yWeight = 0.0;
		zWeight = 0.0;		
		xIndex = 0;
		yIndex = 0;
		zIndex = 0;
		weightPerVertexCount = 0;		
		for( var j = 0; j < data.weights[remapIndex].length; j++)
		{
			if( data.weights[remapIndex][j] > 0.0)
			{
				//console.log('\t\t', i, j, data.weights[i][j])

				if(weightPerVertexCount == 0){
					xWeight = data.weights[remapIndex][j]
					xIndex = j
					// xWeight = 1.0
					// xIndex = 1
				}else if(weightPerVertexCount == 1){
					yWeight = data.weights[remapIndex][j]
					yIndex = j
					// yWeight = 0.0
					// yIndex = 2
				}else if(weightPerVertexCount == 2){
					zWeight = data.weights[remapIndex][j]
					zIndex = j
				}else{
					console.warn('\t\t', i, j, 'More then 3 influences')
				}

				weightPerVertexCount += 1;
			}
		}

		//	If we have found only one influence then set the next weight
		//	and influence. Make sure that yIndex isn't the same as xIndex
		if(yWeight === 0.0 && xIndex === 0 ){
			//console.log('\t', i, 'overwriting default binding')
			yIndex = 1;
		}

		//console.log(i, 'joint:', xIndex, yIndex, 'weight:', xWeight, yWeight)

		skinGeometry.skinWeights.push( new THREE.Vector4( xWeight, yWeight, zWeight, 0))
		skinGeometry.skinIndices.push( new THREE.Vector4( xIndex, yIndex, zIndex, 0))
	}

	skinGeometry.computeCentroids();
	skinGeometry.computeFaceNormals();
	skinGeometry.computeBoundingSphere();

	//	removing the old static mesh
	editor.removeObject( cMeshObject )
	cMeshObject.geometry.dispose();
	
	//	adding the new deforming mesh	
	var skinnedMesh = new THREE.SkinnedMesh( skinGeometry, skinMaterial )
	skinnedMesh.name = skinName	
	skinnedMesh.castShadow = true;
	// skinnedMesh.receiveShadow = true;	
	editor.addObject( skinnedMesh )

	// addedGroup = editor.addGroup( namespace , 'material')
	// editor.addGroupContent( addedGroup, [skinnedMesh] )			
	// console.log('\treturning', skinnedMesh )

	return skinnedMesh
}

MM.jointsConvert = function( data , editor, namespace, asset)
{	
    // console.log('jointsConvert')
    // console.log('\tnamespace:', namespace)

    //	when no namespace is defined, replace it with an empty string so
    //	we do not change the name of the joints that will be created
    if( namespace === undefined ){
    	namespace = ''
    }

    if( asset === undefined ){
    	asset = ''
    }

    var nJoints = data.length;
    var createdJoints = []
    // console.log('loader: we have', nJoints, 'to create')

    var jointData;
    for( var i = 0; i < nJoints; i++)   
    // for( i = 0; i < 76; i++)        
    {
        jointData = data[i]
        // console.log('\t------------------------------')
        // console.log('\tcreating joint', jointData.name)

        if(jointData.name == "m:cGlasses_jnt"){
            continue; 
        }
        if(jointData.name == "m:cHair_jnt"){
            continue;
        }

        var newJoint = new MM.Joint();
        createdJoints.push( newJoint )	

        //	convert name_sm to name (sm = simple matrix)
        newJoint.name = namespace + jointData.name.split('_')[0];        
        newJoint.radius = 2.00;

    	newJoint.tag = 'control'
    	newJoint.asset = asset

        newJoint.controlSize = 1.0;         
        editor.addObject(newJoint)

        //  apply position
        var localMatrix = new THREE.Matrix4();
        // localMatrix.fromArray(jointData.matrixWorld)    
        localMatrix.fromArray(jointData.matrix)    
        newJoint.applyMatrix(localMatrix)

        //  scale the position
        var scale = new THREE.Vector3();
        scale.multiplyVectors(newJoint.position, new THREE.Vector3(10,10,10))
        newJoint.position.set(scale.x, scale.y, scale.z)

        // console.log('\tposition', scale.x, scale.y, scale.z)

        if(jointData.parent !== null)
        {
            console.log(jointData.parent[0])
            var parentJoint = editor.scene.getObjectByName(namespace + jointData.parent[0].split('_')[0], true);
            if(parentJoint !== undefined)
            {
                
                if(parentJoint instanceof MM.Joint)
                {                                        
                    // console.log('adding', newJoint.name, 'to', parentJoint.name)      
                    // parentJoint.add(newJoint);                        
                    editor.parent(newJoint, parentJoint)
                }
            // }else{
            //     console.log('\tunable to find parent joint', jointData.parent[0])
            }            
        }else{
            //  parent under world
            // console.log('\tparenting', newJoint.name, 'to scene')
            editor.parent(newJoint)
        }   

        // editor.parent(newJoint)         
    } 

	addedGroup = editor.addGroup( namespace , 'asset')
	editor.addGroupContent( addedGroup, createdJoints )		

    return createdJoints
}