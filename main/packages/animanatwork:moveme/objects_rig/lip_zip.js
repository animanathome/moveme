MM.LipZip = function( editor ){
	this.type = 'LipZip'
	this.editor = editor;
	this.tJoints = []
	this.bJoints = []
	this.position = []
	this.range = 0.25;
	this.zip = 0.5;

	return this
}

MM.LipZip.prototype = {
	constructor: MM.LipZip,

	update: function(){
		// console.log('LipZip: update')		

		var zip = this.zip;
		if( this.zip.constructor === MM.Number){
			zip = this.zip.value
			// console.log('zip', zip)
		}
		var range = this.range;
		if( this.range.constructor === MM.Number){
			range = this.range.value
		}
		
		var i, l, factor;
		var withinRange = zip + range
		for( i = 0, l = this.position.length; i < l; i++){
			if( this.position[i] > withinRange){
				factor = 0;
			}else if(zip > this.position[i]){
				factor = 1;
			}else{
				factor = 1 - ((this.position[i] - zip) / range)
			}

			// console.log( '\tposition', i, this.position[i])
			// console.log( '\tfactor', i , factor )
			var tdpos = new THREE.Vector3();
			var bdpos = new THREE.Vector3();
			if( factor > 0.0 ){
				//	get the position without the offset
				this.tJoints[i].offsetPosition = tdpos;
				this.tJoints[i].updateMatrix();
				this.tJoints[i].updateMatrixWorld();

				this.bJoints[i].offsetPosition = tdpos;
				this.bJoints[i].updateMatrix();
				this.bJoints[i].updateMatrixWorld();

				//	now calculate the offset
				var tpos = new THREE.Vector3().getPositionFromMatrix( this.tJoints[i].matrixWorld );
				var bpos = new THREE.Vector3().getPositionFromMatrix( this.bJoints[i].matrixWorld );
				var apos = new THREE.Vector3().addVectors( tpos, bpos ).multiplyScalar( 0.5 )				

				//	get the difference				
				var tPInverse = new THREE.Matrix4().getInverse(this.tJoints[i].parent.matrixWorld)
				var altpos = apos.clone().applyMatrix4( tPInverse )
				tdpos = new THREE.Vector3().subVectors( altpos, new THREE.Vector3().getPositionFromMatrix(this.tJoints[i].matrix ) ).multiplyScalar( factor )

				var bPInverse = new THREE.Matrix4().getInverse(this.bJoints[i].parent.matrixWorld)
				var albpos = apos.clone().applyMatrix4( bPInverse )
				bdpos = new THREE.Vector3().subVectors( albpos, new THREE.Vector3().getPositionFromMatrix(this.bJoints[i].matrix) ).multiplyScalar( factor )
				
				// console.log(i, 'dif', tdpos.x, tdpos.y, tdpos.z )				
			}

			this.tJoints[i].offsetPosition = tdpos;
			this.tJoints[i].updateMatrix();
			this.tJoints[i].updateMatrixWorld();

			this.bJoints[i].offsetPosition = bdpos;
			this.bJoints[i].updateMatrix();
			this.bJoints[i].updateMatrixWorld();			
		}
	},
	addJointPairByName: function( topJointName, bottomJointName, position ){
		var topJoint = this.editor.scene.getObjectByName( topJointName , true) 
		// if( topJoint === undefined ){
		// 	console.log('Unable to find ', topJointName)			
		// }
		var bottomJoint = this.editor.scene.getObjectByName( bottomJointName , true)
		// if( bottomJoint == undefined ){
		// 	console.log('Unable to find ', bottomJointName )			
		// }
		this.tJoints.push( topJoint )
		this.bJoints.push( bottomJoint )
		this.position.push( position )
	}
}