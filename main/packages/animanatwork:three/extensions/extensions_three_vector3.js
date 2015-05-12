THREE.Vector3.prototype.norm = function()
{
	var total = this.x + this.y + this.z
	this.x = this.x / total
	this.y = this.y / total
	this.z = this.z / total

	return this
}

THREE.Vector3.prototype.angle = function(b){
	var temp = new THREE.Vector3();
	temp.copy(this);
	temp.normalize();

	var tempB = new THREE.Vector3();
	tempB.copy(b);
	tempB.normalize();

	var cosine = temp.dot(tempB.normalize());
	var angle = 0.0
	if(cosine >= 1.0){
		angle = 0.0;
	}else if(cosine <= -1.0){
		// angle = THREEkPi;
		angle = 0;
	}else{
		angle = Math.acos(cosine);
	}
	return angle;
}

THREE.Vector3.prototype.divide = function ( v ) {
	//	overwriting default function to ensure we can deal with divide by zero
	//	as the default function returns Nan instead of 0
	if(this.x == 0.0 || v.x == 0.0){
		this.x = 0.0
	}else{
		this.x /= v.x;	
	}
	
	if(this.y == 0.0 || v.y == 0.0){
		this.y = 0.0
	}else{
		this.y /= v.y;	
	}

	if(this.z == 0.0 || v.z == 0.0){
		this.z = 0.0
	}else{
		this.z /= v.z;	
	}

	return this;

}

THREE.Vector3.prototype.getDominantAxis = function(){
//	add by manu on 20/01/2014 ported from AwVector
	var xx = Math.abs(this.x);
	var yy = Math.abs(this.y);
	var zz = Math.abs(this.z);

	if(xx > yy){
		if(xx > zz){
			return 0;
		}else{
			return 2;
		}
	}else{
		if(yy > zz){
			return 1;
		}else{
			return 2;
		}
	}
}

THREE.Vector3.prototype.isEquivalent = function(a){
	if(this.x == a.x && this.y == a.y && this.z == a.z){
		return true;
	}else{
		return false;
	}
}

THREE.Vector3.prototype.isEquivalentWithinTolerance = function(a, tolerance){
	var dif = new THREE.Vector3();
	dif.subVectors(this, a); 
	if(dif.length() < tolerance)
	{
		return true;
	}else{
		return false;
	}

	// // console.log('isEquivalentWithinTolerance ', a.x, a.y, a.z, ' t ', tolerance)

	// if(tolerance == undefined)
	// {
	// 	// console.log('Tolerance has not been defined. Assigning default value.')
	// 	tolerance = 1.0e-5;
	// }

	// var dx = this.x - a.x;
	// if(dx > tolerance){
	// 	// console.log('Outside of tolerance ', dx)
	// 	return false;
	// }
	// var dy = this.y - a.y;
	// if(dy > tolerance){
	// 	// console.log('Outside of tolerance ', dy)
	// 	return false;
	// }
	// var dz = this.z - a.z;
	// if(dz > tolerance){
	// 	// console.log('Outside of tolerance ', dz)
	// 	return false
	// }

	// return true;
}

THREE.Vector3.prototype.isParalell = function(a, tolerance){
	// console.log('isParalell')

	if(tolerance == undefined)
	{
		tolerance = 1.0e-5;
		// console.log("Variable tolerance is not defined. Using default value of 1.0e-5.");
	}

	//	make sure here we are not changing the original data!!!
	var tmp = new THREE.Vector3();
	tmp = tmp.copy(this);		
	tmp.normalize();

	var tmpA = new THREE.Vector3()
	tmpA.copy(a)		
	tmpA.normalize()

	// console.log(tmp);
	// console.log(a);

	var dotPrd = tmp.dot(tmpA);
	var absDotPrd = Math.abs(dotPrd);

	// console.log(absDotPrd);

	// equivalent ported from AwMath 
	// inline bool equivalent(double x, double y, double fudge = kDoubleEpsilon) 
	// {
	// 	return ((x > y) ? (x - y <= fudge) : (y - x <= fudge));
	// }
	return ((absDotPrd > 1.0) ? ( absDotPrd - 1.0 <= tolerance ) : ( 1.0 - absDotPrd <= tolerance));
}