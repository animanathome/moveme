THREE.Matrix4.prototype.unify = function(){
	//	ensures the rotation matrix is normalized

	// console.log('unify', this.elements)

	var te = this.elements;
	
	//	unify rotation matrix
	var rx = new THREE.Vector3(te[0], te[1], te[2]).normalize();
	var ry = new THREE.Vector3(te[4], te[5], te[6]).normalize();
	var rz = new THREE.Vector3(te[8], te[9], te[10]).normalize();

	te[0] = rx.x; te[1] = rx.y; te[2] = rx.z;
	te[4] = ry.x; te[5] = ry.y; te[6] = ry.z;
	te[8] = rz.x; te[9] = rz.y; te[10] = rz.z;

	// console.log('\tresult', this.elements)

	return this
}

THREE.Matrix4.prototype.makeRotationFromEuler = function ( euler ) {
	// console.log('makeRotationFromEuler', euler.x, euler.y, euler.z)

	if ( euler instanceof THREE.Euler === false ) {

		console.error( 'ERROR: Matrix\'s .makeRotationFromEuler() now expects a Euler rotation rather than a Vector3 and order.  Please update your code.' );

	}

	var te = this.elements;

	var x = euler.x / THREE.Math.rad;
	var y = euler.y / THREE.Math.rad;
	var z = euler.z / THREE.Math.rad;
	var a = Math.cos( x ), b = Math.sin( x );
	var c = Math.cos( y ), d = Math.sin( y );
	var e = Math.cos( z ), f = Math.sin( z );

	if ( euler.order === 'XYZ' ) {

		var ae = a * e, af = a * f, be = b * e, bf = b * f;

		te[0] = c * e;
		te[4] = - c * f;
		te[8] = d;

		te[1] = af + be * d;
		te[5] = ae - bf * d;
		te[9] = - b * c;

		te[2] = bf - ae * d;
		te[6] = be + af * d;
		te[10] = a * c;

	} else if ( euler.order === 'YXZ' ) {

		var ce = c * e, cf = c * f, de = d * e, df = d * f;

		te[0] = ce + df * b;
		te[4] = de * b - cf;
		te[8] = a * d;

		te[1] = a * f;
		te[5] = a * e;
		te[9] = - b;

		te[2] = cf * b - de;
		te[6] = df + ce * b;
		te[10] = a * c;

	} else if ( euler.order === 'ZXY' ) {

		var ce = c * e, cf = c * f, de = d * e, df = d * f;

		te[0] = ce - df * b;
		te[4] = - a * f;
		te[8] = de + cf * b;

		te[1] = cf + de * b;
		te[5] = a * e;
		te[9] = df - ce * b;

		te[2] = - a * d;
		te[6] = b;
		te[10] = a * c;

	} else if ( euler.order === 'ZYX' ) {

		var ae = a * e, af = a * f, be = b * e, bf = b * f;

		te[0] = c * e;
		te[4] = be * d - af;
		te[8] = ae * d + bf;

		te[1] = c * f;
		te[5] = bf * d + ae;
		te[9] = af * d - be;

		te[2] = - d;
		te[6] = b * c;
		te[10] = a * c;

	} else if ( euler.order === 'YZX' ) {

		var ac = a * c, ad = a * d, bc = b * c, bd = b * d;

		te[0] = c * e;
		te[4] = bd - ac * f;
		te[8] = bc * f + ad;

		te[1] = f;
		te[5] = a * e;
		te[9] = - b * e;

		te[2] = - d * e;
		te[6] = ad * f + bc;
		te[10] = ac - bd * f;

	} else if ( euler.order === 'XZY' ) {

		var ac = a * c, ad = a * d, bc = b * c, bd = b * d;

		te[0] = c * e;
		te[4] = - f;
		te[8] = d * e;

		te[1] = ac * f + bd;
		te[5] = a * e;
		te[9] = ad * f - bc;

		te[2] = bc * f - ad;
		te[6] = b * e;
		te[10] = bd * f + ac;

	}

	// last column
	te[3] = 0;
	te[7] = 0;
	te[11] = 0;

	// bottom row
	te[12] = 0;
	te[13] = 0;
	te[14] = 0;
	te[15] = 1;

	return this;

}

THREE.Matrix4.prototype.isEquivalent = function(m){
	// console.log('isEquivalent')
	// console.log(this)
	// console.log(m)

	var te = this.elements;
	var me = m.elements;

	for(var i = 0; i < 16; i++){
		if(te[i] != me[i]){
			return false;
		}		
	}
	return true;
}
	
THREE.Matrix4.prototype.lookAt = function() {

	var x = new THREE.Vector3();
	var y = new THREE.Vector3();
	var z = new THREE.Vector3();

	return function ( eye, target, up, side ) {
		// console.log('lookAt')
		// console.log('\teye', eye.x, eye.y, eye.z)
		// console.log('\ttarget', target.x, target.y , target.z)
		
		// if( up !== undefined ){
		// 	console.log('\tup', up.x, up.y, up.z)
		// }
		
		// if( side !== undefined ){
		// 	console.log('\tside', side.x, side.y, side.z)
		// }

		var te = this.elements;

	//	aim
		z.subVectors( eye, target ).normalize();

		if ( z.length() === 0 ) {

			z.z = 1;

		}
		// console.log('\t\tz:', z.x, z.y, z.z)

	//	up
		if( up === undefined ){
			up = new THREE.Vector3(0.0,1.0,0.0);
		}
		x.crossVectors( up, z ).normalize();

		if ( x.length() === 0 ) {

			z.x += 0.0001;
			x.crossVectors( up, z ).normalize();

		}

		// console.log('\t\tx:', x.x, x.y, x.z)

	//	side
		if( side === undefined ){
			y.crossVectors( z, x );
		}else{
			y.crossVectors( z, side );
		}
		// console.log('\t\ty:', y.x, y.y, y.z)

		te[0] = x.x; te[4] = y.x; te[8] = z.x;
		te[1] = x.y; te[5] = y.y; te[9] = z.y;
		te[2] = x.z; te[6] = y.z; te[10] = z.z;

		return this;

	};
}()