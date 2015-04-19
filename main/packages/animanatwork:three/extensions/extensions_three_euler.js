THREE.Euler.prototype.offsetUsingQuaternion = function( q ){
	//	offset the current rotation with the given quaternion		
	//	this allows us to have continus rotation values instead of
	//	-PI to PI which the default THREE implementation gives us
	//	NOTE: this got updated to work with degrees instead of radians
	var PIH2 = 180/2;
	var NPI = -1 * 180;
	
	var temp = new THREE.Euler();
	temp.setFromQuaternion( q , this._order )

	//	x rotation
	var ax = temp._x - (this._x % 180);
	if( Math.abs(ax) > 180){ax %= 180}
	if( Math.abs(ax) > PIH2 ){ax += ax < 0 ? 180 : NPI}		
	this._x += ax;

	//	y rotation
	var ay = temp._y - (this._y % 180);
	if( Math.abs(ay) > 180){ay %= 180}
	if( Math.abs(ay) > PIH2 ){ay += ay < 0 ? 180 : NPI}		
	this._y += ay;

	//	z rotation
	var az = temp._z - (this._z % 180);
	if( Math.abs(az) > 180){az %= 180}
	if( Math.abs(az) > PIH2 ){az += az < 0 ? 180 : NPI}		
	this._z += az;

	this._updateQuaternion()
}

THREE.Euler.prototype.setFromRotationMatrix = function ( m, order ) {
	//	NOTE: this got updated to work with degrees instead of radians
	// assumes the upper 3x3 of m is a pure rotation matrix (i.e, unscaled)

	// clamp, to handle numerical problems

	function clamp( x ) {

		return Math.min( Math.max( x, -1 ), 1 );

	}

	var te = m.elements;
	var m11 = te[0], m12 = te[4], m13 = te[8];
	var m21 = te[1], m22 = te[5], m23 = te[9];
	var m31 = te[2], m32 = te[6], m33 = te[10];

	order = order || this._order;

	if ( order === 'XYZ' ) {

		this._y = Math.asin( clamp( m13 ) );

		if ( Math.abs( m13 ) < 0.99999 ) {

			this._x = Math.atan2( - m23, m33 );
			this._z = Math.atan2( - m12, m11 );

		} else {

			this._x = Math.atan2( m32, m22 );
			this._z = 0;

		}

	} else if ( order === 'YXZ' ) {

		this._x = Math.asin( - clamp( m23 ) );

		if ( Math.abs( m23 ) < 0.99999 ) {

			this._y = Math.atan2( m13, m33 );
			this._z = Math.atan2( m21, m22 );

		} else {

			this._y = Math.atan2( - m31, m11 );
			this._z = 0;

		}

	} else if ( order === 'ZXY' ) {

		this._x = Math.asin( clamp( m32 ) );

		if ( Math.abs( m32 ) < 0.99999 ) {

			this._y = Math.atan2( - m31, m33 );
			this._z = Math.atan2( - m12, m22 );

		} else {

			this._y = 0;
			this._z = Math.atan2( m21, m11 );

		}

	} else if ( order === 'ZYX' ) {

		this._y = Math.asin( - clamp( m31 ) );

		if ( Math.abs( m31 ) < 0.99999 ) {

			this._x = Math.atan2( m32, m33 );
			this._z = Math.atan2( m21, m11 );

		} else {

			this._x = 0;
			this._z = Math.atan2( - m12, m22 );

		}

	} else if ( order === 'YZX' ) {

		this._z = Math.asin( clamp( m21 ) );

		if ( Math.abs( m21 ) < 0.99999 ) {

			this._x = Math.atan2( - m23, m22 );
			this._y = Math.atan2( - m31, m11 );

		} else {

			this._x = 0;
			this._y = Math.atan2( m13, m33 );

		}

	} else if ( order === 'XZY' ) {

		this._z = Math.asin( - clamp( m12 ) );

		if ( Math.abs( m12 ) < 0.99999 ) {

			this._x = Math.atan2( m32, m22 );
			this._y = Math.atan2( m13, m11 );

		} else {

			this._x = Math.atan2( - m23, m33 );
			this._y = 0;

		}

	} else {

		console.warn( 'WARNING: Euler.setFromRotationMatrix() given unsupported order: ' + order )

	}

	this._order = order;
	this._x = this._x * THREE.Math.rad;
	this._y = this._y * THREE.Math.rad;
	this._z = this._z * THREE.Math.rad;
	this._updateQuaternion();

	return this;

}

THREE.Euler.prototype.setFromQuaternion = function ( q, order, update ){
	//	NOTE: this got updated to work with degrees instead of radians		
	// console.log('Euler.setFromQuaternion', q, order)

	// q is assumed to be normalized

	// clamp, to handle numerical problems

	function clamp( x ) {

		return Math.min( Math.max( x, -1 ), 1 );

	}

	// http://www.mathworks.com/matlabcentral/fileexchange/20696-function-to-convert-between-dcm-euler-angles-quaternions-and-euler-vectors/content/SpinCalc.m

	var sqx = q.x * q.x;
	var sqy = q.y * q.y;
	var sqz = q.z * q.z;
	var sqw = q.w * q.w;

	order = order || this._order;

	// console.log('\torder', order)
	// console.log('\tthis order', this.order)

	if ( order === 'XYZ' ) {

		this._x = Math.atan2( 2 * ( q.x * q.w - q.y * q.z ), ( sqw - sqx - sqy + sqz ) );
		this._y = Math.asin(  clamp( 2 * ( q.x * q.z + q.y * q.w ) ) );
		this._z = Math.atan2( 2 * ( q.z * q.w - q.x * q.y ), ( sqw + sqx - sqy - sqz ) );

	} else if ( order ===  'YXZ' ) {

		this._x = Math.asin(  clamp( 2 * ( q.x * q.w - q.y * q.z ) ) );
		this._y = Math.atan2( 2 * ( q.x * q.z + q.y * q.w ), ( sqw - sqx - sqy + sqz ) );
		this._z = Math.atan2( 2 * ( q.x * q.y + q.z * q.w ), ( sqw - sqx + sqy - sqz ) );

	} else if ( order === 'ZXY' ) {

		this._x = Math.asin(  clamp( 2 * ( q.x * q.w + q.y * q.z ) ) );
		this._y = Math.atan2( 2 * ( q.y * q.w - q.z * q.x ), ( sqw - sqx - sqy + sqz ) );
		this._z = Math.atan2( 2 * ( q.z * q.w - q.x * q.y ), ( sqw - sqx + sqy - sqz ) );

	} else if ( order === 'ZYX' ) {

		this._x = Math.atan2( 2 * ( q.x * q.w + q.z * q.y ), ( sqw - sqx - sqy + sqz ) );
		this._y = Math.asin(  clamp( 2 * ( q.y * q.w - q.x * q.z ) ) );
		this._z = Math.atan2( 2 * ( q.x * q.y + q.z * q.w ), ( sqw + sqx - sqy - sqz ) );

	} else if ( order === 'YZX' ) {

		this._x = Math.atan2( 2 * ( q.x * q.w - q.z * q.y ), ( sqw - sqx + sqy - sqz ) );
		this._y = Math.atan2( 2 * ( q.y * q.w - q.x * q.z ), ( sqw + sqx - sqy - sqz ) );
		this._z = Math.asin(  clamp( 2 * ( q.x * q.y + q.z * q.w ) ) );

	} else if ( order === 'XZY' ) {

		this._x = Math.atan2( 2 * ( q.x * q.w + q.y * q.z ), ( sqw - sqx + sqy - sqz ) );
		this._y = Math.atan2( 2 * ( q.x * q.z + q.y * q.w ), ( sqw + sqx - sqy - sqz ) );
		this._z = Math.asin(  clamp( 2 * ( q.z * q.w - q.x * q.y ) ) );

	} else {

		console.warn( 'WARNING: Euler.setFromQuaternion() given unsupported order: ' + order )

	}

	//	set PI or -PI as zero
	if( Math.abs(this._x) === Math.PI){
		this._x = 0;
	}
	if( Math.abs(this._y) === Math.PI){
		this._y = 0;
	}
	if( Math.abs(this._z) === Math.PI){
		this._z = 0;
	}

	this._order = order;

	//	convert result to degrees			
	this._x = this._x * THREE.Math.rad;
	this._y = this._y * THREE.Math.rad;
	this._z = this._z * THREE.Math.rad;

	// console.log('x', this._x)
	// console.log('y', this._y)
	// console.log('z', this._z)
	// 
	// console.log('\tresult:', this)

	if ( update !== false ) this._updateQuaternion();		

	return this;
}