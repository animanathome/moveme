THREE.SkinnedMesh.prototype.init = function(useVertexTexture){
	console.log('SkinnedMesh.init')

	this.useVertexTexture = useVertexTexture !== undefined ? useVertexTexture : true;

	this.identityMatrix = new THREE.Matrix4();

	this.bones = [];
	this.boneMatrices = [];
	this.boneInverses = undefined; // reset bone inverse

	var b, bone, gbone, p, q, s;
	if ( this.geometry && this.geometry.bones !== undefined ){
		console.log('\tinit skin data')

		this.bones = this.geometry.bones
		var nBones = this.bones.length;		

		if ( this.useVertexTexture ) {
			console.log('\tinit skin texture data')
			// layout (1 matrix = 4 pixels)
			//	RGBA RGBA RGBA RGBA (=> column1, column2, column3, column4)
			//  with  8x8  pixel texture max   16 bones  (8 * 8  / 4)
			//  	 16x16 pixel texture max   64 bones (16 * 16 / 4)
			//  	 32x32 pixel texture max  256 bones (32 * 32 / 4)
			//  	 64x64 pixel texture max 1024 bones (64 * 64 / 4)
			var size;

			if ( nBones > 256 )
				size = 64;
			else if ( nBones > 64 )
				size = 32;
			else if ( nBones > 16 )
				size = 16;
			else
				size = 8;

			console.log('\tsize', size)

			this.boneTextureWidth = size;
			this.boneTextureHeight = size;

			this.boneMatrices = new Float32Array( this.boneTextureWidth * this.boneTextureHeight * 4 ); // 4 floats per RGBA pixel
			this.boneTexture = new THREE.DataTexture( this.boneMatrices, this.boneTextureWidth, this.boneTextureHeight, THREE.RGBAFormat, THREE.FloatType );
			this.boneTexture.minFilter = THREE.NearestFilter;
			this.boneTexture.magFilter = THREE.NearestFilter;
			this.boneTexture.generateMipmaps = false;
			this.boneTexture.flipY = false;
		}else{
			console.log('\tinit skin matrix data')

			this.boneMatrices = new Float32Array( 16 * nBones );
		}

		this.pose();

	}
	return this;	
}

THREE.SkinnedMesh.prototype.exportSetup = function(){
	var data = {}

    data.type = 'SkinnedMesh';
    data.name = this.name;
    data.uuid = this.uuid;
    data.identityMatrix = this.identityMatrix.elements;
    data.bones = [];

    for( var k = 0, l = this.bones.length; k < l; k++){
        data.bones.push( this.bones[k].name )
    }

    // console.log('boneMatrices:', this.boneMatrices.length)
    data.boneMatrices = []
    for( var k = 0, l = this.boneMatrices.length; k < l; k++){
        data.boneMatrices.push( this.boneMatrices[k] )
    }   
    // console.log( 'data:', data.boneMatrices )
    data.skinWeights = this.geometry.skinWeights;
    data.skinIndices = this.geometry.skinIndices;

	return data
}

THREE.SkinnedMesh.prototype.setWeights = function( vertices, influences, weights ) {

	console.log('SkinnedMesh.setWeights')
	console.log('\tvertices', vertices)
	console.log('\tinfluences', influences)
	console.log('\tweights', weights)

	console.log('\tCurrent number of influences', this.bones.length)

	var i, j, k, l;
	var bIs=[];	
	var fM = false;	// found match
	
	//	update the bone data if necessary
	//	and
	//	get the indices for the influences
	for( i = 0, j = influences.length; i < j; i++){
		fM = false;
		
		//	get the influence index
		for( k = 0, l = this.bones.length; k < l; k++){
			if( influences[i] === this.bones[k]){
				bIs.push(k);
				fM = true;
			}
		}
		//	if the influence is not yet part of the object we'll have the initialize it
		if(!fM){
			console.log('Influence does not exist yet. Adding it now...')
			bIs.push(this.bones.length)
			this.geometry.bones.push(influences[i])
			influences[i].setBindPose();			
		}
	}

	//	make sure that the number of influences indices match the number of weights. NOTE: we currently only support 3 weights per vertex.
	if( bIs.length !== weights.length ){
		console.log('\tNumber of influence indices does not match the number of weights')
		return;
	}
	console.log('\tFound all data')
	console.log('\tInfluence indices', bIs)

	var weight = new THREE.Vector4();
	var index = new THREE.Vector4();
	switch(weights.length){
		case 1: 
			weight.set(weights[0], 0, 0, 0); 
			index.set(bIs[0], 0, 0, 0);
		break;
		
		case 2: 
			weight.set(weights[0], weights[1], 0, 0); 
			index.set(bIs[0], bIs[1], 0, 0);
		break;
		
		case 3: 
			weight.set(weights[0], weights[1], weights[2], 0); 
			index.set(bIs[0], bIs[1], bIs[2], 0);
		break;

		default:
			console.log('\tUnsupported mode. Expecting 1, 2 or 3.')
		break;
	}

	console.log('\tInput weight data', weight)
	console.log('\tInput index data', index)

	//	add the weight data to the geometry
	for( i = 0, j = vertices.length; i < j; i++){
		console.log('\t', i, 'vertex', vertices[i], 'weight', weight)
		console.log('\t', i, 'vertex', vertices[i], 'index', index)

		this.geometry.skinWeights[vertices[i]]=weight;
		this.geometry.skinIndices[vertices[i]]=index;
	}

	//	make sure we re-init the shape so we can update the necessary data structure
	this.init();	
	this.geometry.verticesNeedUpdate = true;
};