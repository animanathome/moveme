THREE.Quaternion.prototype.mSetFromAxisAngle = function(axis, theta) {
	// console.log('mSetFromAxisAngle', axis, theta)

	var kDoubleEpsilon=1.0e-10;
	var sumOfSquares = (axis.x * axis.x) + (axis.y * axis.y) + (axis.z * axis.z);

	// console.log('mSumOfSquares', sumOfSquares)

	var tTheta = theta * 0.5;
	if (sumOfSquares <= kDoubleEpsilon){
		// console.log('returning identity')
		this.x = .0
		this.y = .0
		this.z = .0
		this.w = 1.
	}else{
		var v = Math.cos(tTheta)
		var commonFactor = Math.sin(tTheta)

		// console.log('commonFactor', commonFactor)
		// if(! boolEquivalent(sumOfSquares, 1.0, kDoubleEpsilon)){
		// 	commonFactor /= Math.sqrt(sumOfSquares)
		// }
		// console.log('commonFactor', commonFactor)

		this.x = commonFactor * axis.x
		this.y = commonFactor * axis.y
		this.z = commonFactor * axis.z
	}
	
	this._updateEuler();
	
	return this;
}

THREE.Quaternion.prototype.setFromAxisAngle = function ( axis, angle ) {
	//	NOTE: this got updated to work with degrees instead of radians
	// console.log('setFromAxisAngle', axis, angle)

	// from http://www.euclideanspace.com/maths/geometry/rotations/conversions/angleToQuaternion/index.htm
	// axis have to be normalized
	// angle is in degrees

	var halfAngle = (angle / THREE.Math.rad) / 2;
	var s = Math.sin( halfAngle );

	this._x = axis.x * s;
	this._y = axis.y * s;
	this._z = axis.z * s;
	this._w = Math.cos( halfAngle );

	this._updateEuler();

	return this;

}
	
THREE.Quaternion.prototype.setFromEuler = function ( euler, update ) {
	//	NOTE: this got updated to work with degrees instead of radians
	if ( euler instanceof THREE.Euler === false ) {

		throw new Error( 'ERROR: Quaternion\'s .setFromEuler() now expects a Euler rotation rather than a Vector3 and order.  Please update your code.' );
	}

	// http://www.mathworks.com/matlabcentral/fileexchange/
	// 	20696-function-to-convert-between-dcm-euler-angles-quaternions-and-euler-vectors/
	//	content/SpinCalc.m
	//	
	
	var x = euler._x / THREE.Math.rad;
	var y = euler._y / THREE.Math.rad;
	var z = euler._z / THREE.Math.rad;

	var c1 = Math.cos( x / 2 );
	var c2 = Math.cos( y / 2 );
	var c3 = Math.cos( z / 2 );
	
	var s1 = Math.sin( x / 2 );
	var s2 = Math.sin( y / 2 );
	var s3 = Math.sin( z / 2 );

	if ( euler.order === 'XYZ' ) {

		this._x = s1 * c2 * c3 + c1 * s2 * s3;
		this._y = c1 * s2 * c3 - s1 * c2 * s3;
		this._z = c1 * c2 * s3 + s1 * s2 * c3;
		this._w = c1 * c2 * c3 - s1 * s2 * s3;

	} else if ( euler.order === 'YXZ' ) {

		this._x = s1 * c2 * c3 + c1 * s2 * s3;
		this._y = c1 * s2 * c3 - s1 * c2 * s3;
		this._z = c1 * c2 * s3 - s1 * s2 * c3;
		this._w = c1 * c2 * c3 + s1 * s2 * s3;

	} else if ( euler.order === 'ZXY' ) {

		this._x = s1 * c2 * c3 - c1 * s2 * s3;
		this._y = c1 * s2 * c3 + s1 * c2 * s3;
		this._z = c1 * c2 * s3 + s1 * s2 * c3;
		this._w = c1 * c2 * c3 - s1 * s2 * s3;

	} else if ( euler.order === 'ZYX' ) {

		this._x = s1 * c2 * c3 - c1 * s2 * s3;
		this._y = c1 * s2 * c3 + s1 * c2 * s3;
		this._z = c1 * c2 * s3 - s1 * s2 * c3;
		this._w = c1 * c2 * c3 + s1 * s2 * s3;

	} else if ( euler.order === 'YZX' ) {

		this._x = s1 * c2 * c3 + c1 * s2 * s3;
		this._y = c1 * s2 * c3 + s1 * c2 * s3;
		this._z = c1 * c2 * s3 - s1 * s2 * c3;
		this._w = c1 * c2 * c3 - s1 * s2 * s3;

	} else if ( euler.order === 'XZY' ) {

		this._x = s1 * c2 * c3 - c1 * s2 * s3;
		this._y = c1 * s2 * c3 - s1 * c2 * s3;
		this._z = c1 * c2 * s3 + s1 * s2 * c3;
		this._w = c1 * c2 * c3 + s1 * s2 * s3;

	}

	if ( update !== false ) this._updateEuler();

	return this;

}

THREE.Quaternion.prototype.setFromVectors = function(a, b) {
	// console.log('setFromVectors', a, b)
	var kFloatEpsilon=1.0e-5;
	var dot = Math.min(Math.max(a.dot(b), -1.0), 1.0);
	// console.log('\tdot', dot)
	var theta = Math.acos(dot);


	// console.log('\ttheta', theta, 'or', radToDeg(theta))

	var pivotVector = new THREE.Vector3().crossVectors(a, b);
	// console.log('\tpivotVector', pivotVector.x , pivotVector.y, pivotVector.z)

	if(dot < 0.0 && pivotVector.length() < kFloatEpsilon){
		// console.log('exception')
		var dominantIndex = a.getDominantAxis();

		pivotVector[dominantIndex] = -a[(dominantIndex+1)%3];
		pivotVector[(dominantIndex+1)%3] = a[dominantIndex];
		pivotVector[(dominantIndex+2)%3] = 0.0;
	}
	
	pivotVector.normalize();
	this.setFromAxisAngle(pivotVector, theta * THREE.Math.rad);

	return this;
}