MM.factorials = function( n ){
	// console.log('factorials', n)
	
	var i = n; 
	var fact = 1.0;	
	for( i = n; i > 0; i--){
		fact = fact * i;
	}
	// console.log('\tresult', fact)
	return fact;
}

MM.bernstein = function( u, v, STUpt ){
	console.log('bernstein', u, v, STUpt)

	var binomial, bernstein;
	binomial = MM.factorials(v) / ( MM.factorials( v - u) * MM.factorials(u));
	bernstein = binomial * Math.pow( STUpt, u * Math.pow( (1-STUpt), (v-u) ));

	console.log('\tresult', bernstein)

	return bernstein;
}

MM.CrossProduct = function( u, v){
	var cross_product = new THREE.Vector3();
	
	cross_product.x = (u.y * v.z) - (u.z * v.y);
	cross_product.y = (u.z * v.x) - (u.x * v.z);
	cross_product.z = (u.x * v.y) - (u.y * v.x);
	
	return cross_product;
}

MM.DotProduct = function( u, v){
	var dot_product;

	dot_product = ( u.x * v.x ) + ( u.y * v.y ) + ( u.z * v.z );

	return dot_product;
}

MM.VectorSubtraction =  function( P, O){
	var vector_substract = new THREE.Vector3();
	vector_substract.x = P.x - O.x;
	vector_substract.y = P.y - O.y;
	vector_substract.z = P.z - O.z;

	return vector_substract;
}

MM.FFDDisplay = function( parent ){
	console.log('FFDDisplay', parent)

	this.ffd = parent 
	this.displaySize = 10;
	var geometry = new THREE.Geometry(); 
    var material = new THREE.ParticleBasicMaterial({ size: this.displaySize, 
        color: 0x000000, sizeAttenuation: false} );                
    this.dvrt = new THREE.ParticleSystem( geometry, material ); 

    this.update();
}

MM.FFDDisplay.prototype.update = function(){
	// console.log('FFDDisplay.update')
	// console.log('\tffd', this.ffd.l, this.ffd.m, this.ffd.n)

	this.dvrt.geometry.verticesNeedUpdate = true;	
	this.dvrt.geometry.vertices = [];

	var i, j, k;
	for( i = 0; i <= this.ffd.l; i++){
		for( j = 0; j <= this.ffd.m; j++){
			for( k = 0; k <= this.ffd.n; k++){
				this.dvrt.geometry.vertices.push( this.ffd.PCI[i][j][k]);
			}
		}
	}	
}

MM.FFD = function(){
    THREE.Object3D.call(this);
    this.type = 'ffd'
    this.dg = undefined; // deforming geometry
    this.cd = undefined; // current display
    this.solved = false;
};

MM.FFD.prototype = Object.create( THREE.Object3D.prototype );

MM.FFD.prototype.setGeometry = function( geometry ){
	this.dg = geometry;
}

MM.FFD.prototype.updateMatrixWorld = function ( force ) {
    THREE.Object3D.prototype.updateMatrixWorld.call(this, force);

    if( this.cd !== undefined ){
    	this.cd.update();
    }

    if( this.dg !== undefined && this.solved === false){
    	var nv = this.dg.vertices.length;
    	var i;
    	for( i = 0; i < nv; i++ ){
    		console.log('----------------------------------------')	
    		console.log('\tBEFORE', i, ':', this.dg.vertices[i].x, this.dg.vertices[i].y, this.dg.vertices[i].z)

    		this.dg.vertices[i] = this.deformMesh( this.dg.vertices[i] )

    		console.log('\tAFTER', i, ':', this.dg.vertices[i].x, this.dg.vertices[i].y, this.dg.vertices[i].z)
    	}
    	this.solved = true;
    }
}    

MM.FFD.prototype.addDisplay = function(){
	if( this.cd !== undefined ){
		return;
	}
	this.cd = new MM.FFDDisplay( this );
	return this;
}

MM.FFD.prototype.initialize = function( minX, maxX ){
  	
	this.origin = new THREE.Vector3();
	this.origin.x = minX.x;
	this.origin.y = minX.y;
	this.origin.z = minX.z;

	this.axis = new THREE.Vector3();
	this.axis.x = maxX.x - minX.x;
	this.axis.y = maxX.y - minX.y;
	this.axis.z = maxX.z - minX.z;

	this.S_axis = new THREE.Vector3();
	this.S_axis.x = this.axis.x;

	this.T_axis = new THREE.Vector3();
	this.T_axis.y = this.axis.y;

	this.U_axis = new THREE.Vector3();
	this.U_axis.z = this.axis.z;

	//	number of control points
	this.l = 1;
	this.m = 1;
	this.n = 1;

	//	control points in (x, y, z)
	this.PCI = []	
}

MM.FFD.prototype.CPSetup = function(){
	var i, j, k, cp;
	for( i = 0; i <= this.l; i++){
		if( this.PCI[i] === undefined ){
			this.PCI[i] = [];
		}

		for( j = 0; j <= this.m; j++){
			if( this.PCI[i][j] === undefined ){
				this.PCI[i][j] = [];
			}

			for( k = 0; k <= this.n; k++){
				cp = new THREE.Vector3();
				cp.x = this.origin.x + ((i/this.l) * this.axis.x);
				cp.y = this.origin.y + ((j/this.m) * this.axis.y);
				cp.z = this.origin.z + ((k/this.n) * this.axis.z);
				this.PCI[i][j][k] = new THREE.Vector3(cp.x, cp.y, cp.z);
			}
		}
	}
}

MM.FFD.prototype.convertToSTU = function( xxx ){
	console.log('convertToSTU', xxx.x, xxx.y, xxx.z)

	// var cp_S = new THREE.Vector3().crossVectors( this.T_axis, this.U_axis )
	// var cp_T = new THREE.Vector3().crossVectors( this.S_axis, this.U_axis )
	// var cp_U = new THREE.Vector3().crossVectors( this.S_axis, this.T_axis )
	// var vs = new THREE.Vector3().subVectors(xxx, this.origin);

	// var STUxxx = new THREE.Vector3();
	// STUxxx.x = cp_S.dot( vs ) / cp_S.dot( this.S_axis )
	// STUxxx.y = cp_T.dot( vs ) / cp_T.dot( this.T_axis )
	// STUxxx.z = cp_U.dot( vs ) / cp_U.dot( this.U_axis )

	var cp_S = MM.CrossProduct(this.T_axis, this.U_axis);
	var cp_T = MM.CrossProduct(this.S_axis, this.U_axis);
	var cp_U = MM.CrossProduct(this.S_axis, this.T_axis);
	var vs = MM.VectorSubtraction(xxx, this.origin);	

	var STUxxx = new THREE.Vector3();
	STUxxx.x = (MM.DotProduct(cp_S, vs)) / (MM.DotProduct(cp_S, this.S_axis));   
	STUxxx.y = (MM.DotProduct(cp_T, vs)) / (MM.DotProduct(cp_T, this.T_axis));
	STUxxx.z = (MM.DotProduct(cp_U, vs)) / (MM.DotProduct(cp_U, this.U_axis));

	console.log('\tresult', STUxxx.x, STUxxx.y, STUxxx.z)

	return STUxxx;
}

MM.FFD.prototype.deformMesh = function( point ){
	var STUp = this.convertToSTU( point );

	console.log('deformMesh', point.x, point.y, point.z)

	var ffd1 = new THREE.Vector3();
	var ffd2 = new THREE.Vector3();
	var ffd3 = new THREE.Vector3();
	var bpS = 0, bpT = 0, bpU = 0;

	var i, j, k;
	for( i = 0; i <= this.l; i++ ){
		ffd2.x = 0;
		ffd2.y = 0;
		ffd2.z = 0;
		for(j = 0; j <= this.m; j++ ){
			ffd3.x = 0;
			ffd3.y = 0;
			ffd3.z = 0;
			for(k = 0; k <= this.n; k++){
				bpU = MM.bernstein(k, this.n, STUp.z);
				ffd3.x = ffd3.x + ( bpU * this.PCI[i][j][k].x);
				ffd3.y = ffd3.y + ( bpU * this.PCI[i][j][k].y);
				ffd3.z = ffd3.z + ( bpU * this.PCI[i][j][k].z);
			}
			bpT = MM.bernstein(j, this.m, STUp.y);
			ffd2.x = ffd2.x + ( bpT * ffd3.x );
			ffd2.y = ffd2.y + ( bpT * ffd3.y );
			ffd2.z = ffd2.z + ( bpT * ffd3.z );
		}
		bpS = MM.bernstein(i, this.l, STUp.x);
		ffd1.x = ffd1.x + ( bpS * ffd2.x );
		ffd1.y = ffd1.y + ( bpS * ffd2.y );
		ffd1.z = ffd1.z + ( bpS * ffd2.z );
	}


	console.log('\tresult', ffd1)
	return ffd1;
}


MM.powf = function( a, i ){
	switch( i ){
		case 0: return 1.0;
		case 1: return a;
		case 2: return a*a;
		case 3: return a*a*a;
	}
}

MM.FFD1Display = function( parent ){
	console.log('FFD1Display', parent)

	this.ffd = parent 
	this.displaySize = 10;
	var geometry = new THREE.Geometry(); 
    var material = new THREE.ParticleBasicMaterial({ size: this.displaySize, 
        color: 0x000000, sizeAttenuation: false} );                
    this.dvrt = new THREE.ParticleSystem( geometry, material ); 

    this.update();
}

MM.FFD1Display.prototype.update = function(){
	// console.log('FFDDisplay.update')
	// console.log('\tffd', this.ffd.l, this.ffd.m, this.ffd.n)

	this.dvrt.geometry.verticesNeedUpdate = true;	
	this.dvrt.geometry.vertices = [];

	var i = 0;
	for( i = 0; i < this.ffd.control_points.length; i++ ){
		this.dvrt.geometry.vertices.push( this.ffd.control_points[i]);
	}
		
}

MM.FFD1 = function(){
    THREE.Object3D.call(this);
    this.type = 'ffd'
    this.dg = undefined; // deforming geometry
    this.cd = undefined; // current display
    this.solved = false;
    this.coefficients = []
};

MM.FFD1.prototype = Object.create( THREE.Object3D.prototype );

MM.FFD1.prototype.updateMatrixWorld = function ( force ) {
    THREE.Object3D.prototype.updateMatrixWorld.call(this, force);

    if( this.cd !== undefined ){
    	this.cd.update();
    }

    if( this.dg !== undefined && this.solved === false){
    	if( this.coefficients.length > 0 ){
    		this.calculateNewPoints();
    		this.solved = true;
    	}
    }
}    

MM.FFD1.prototype.addDisplay = function(){
	if( this.cd !== undefined ){
		return;
	}
	this.cd = new MM.FFD1Display( this );
	return this;
}

MM.FFD1.prototype.setGeometry = function( geometry ){
	this.dg = geometry;
}

MM.FFD1.prototype.initControlPoints = function(){
	var i = 0;
	var x, y, z;
	this.control_points = []
	for( z = 0; z <= 1.0; z+= 1.0/3.0){
		for( y = 0; y <= 1.0; y+= 1.0/3.0){
			for( x = 0; x <= 1.0; x+= 1.0/3.0){
				this.control_points.push( new THREE.Vector3( x, y, z ))
			}
		}
	}
}

MM.FFD1.prototype.createBernsteinCoefficients = function(){
	var binom = [1.0,3.0,3.0,1.0]
	var i, s, t, u;
	var b_u, b_t;
	var vertex;

	this.coefficients = []
	for( i = 0; i < this.dg.vertices.length; i++){
		vertex = this.dg.vertices[i];

		for( u = 0; u < 4; u++ ){
			b_u = binom[u]*MM.powf(vertex.z, u)*MM.powf(1.0-vertex.z, 3.0-u);
			for( t = 0; t < 4; t++ ){
				b_t = binom[t]*MM.powf(vertex.y, t)*MM.powf(1.0-vertex.y, 3.0 - t) * b_u;
				for( s = 0; s < 4; s++ ){					
					this.coefficients.push( binom[s] * MM.powf(vertex.x, s) * MM.powf( 1.0 - vertex.x, 3.0 - s) * b_t );
				}
			}
		}
	}
}

MM.FFD1.prototype.moveControlPoint = function( index, offset ){
	this.control_points[index].add( offset )
}

MM.FFD1.prototype.calculateNewPoints = function(){
	console.log('calculateNewPoints')
	var i, stu, b, c;
	// var b = 0;
	var pos = new THREE.Vector3();
	for( i = 0; i < this.dg.vertices.length; i++){
		pos.x = 0;
		pos.y = 0;
		pos.z = 0;
		c = 0;
		for( stu = 0; stu < 64; stu++, b++, c++){
			console.log('index:', i, 'coof:', b, 'ctl:', c)
			pos.x += this.coefficients[b] * this.control_points[c].x
			pos.y += this.coefficients[b] * this.control_points[c].y
			pos.z += this.coefficients[b] * this.control_points[c].z
		}
		this.dg.vertices[i].x = pos.x;
		this.dg.vertices[i].y = pos.y;
		this.dg.vertices[i].z = pos.z;
		console.log('\t', i, ':', pos.x, pos.y, pos.z)
	}
}

