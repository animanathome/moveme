// function roundToFive(num) {    
//     return +(Math.floor(num + "e+5")  + "e-5");
// }

// String.prototype.toCamel = function(){
// 	return this.replace(/(\-[a-z])/g, function($1){return $1.toUpperCase().replace('-','');});
// };

// String.prototype.getNamespace = function(){
// 	// console.log('getNamespace', this)

// 	var namespaces = this.split(':')
//     var nn = namespaces.length - 1

//     if( nn < 1 ){
//         // console.log('No namespace found for', this)
//         return
//     }

//     var namespace = namespaces[0]
//     for( var i = 1; i < nn; i++ ){
//         namespace += ":"+namespaces[i]
//     }

//     // console.log('\tresult', namespace)
//     return namespace;
// };

MM.elementWorldPosition = function(element) {
    var xPosition = 0;
    var yPosition = 0;
      
    while (element) {
        xPosition += (element.offsetLeft - element.scrollLeft + element.clientLeft);
        yPosition += (element.offsetTop - element.scrollTop + element.clientTop);
        element = element.offsetParent;
    }
    return { x: xPosition, y: yPosition };
}

MM.toScreenXY = function( position, camera, jqdiv ) {
	//console.log('toScreenXY', position , camera, jqdiv)

    var pos = position.clone();
    var projScreenMat = new THREE.Matrix4().multiplyMatrices(camera.projectionMatrix, camera.matrixWorldInverse);
    // projScreenMat.multiply( camera.projectionMatrix, camera.matrixWorldInverse );
    // projScreenMat.multiplyVector3( pos );
    pos.applyMatrix4( projScreenMat )

    return { x: ( pos.x + 1 ) * jqdiv.offsetWidth / 2,// + jqdiv.offsetLeft,
         y: ( pos.y + 1) * jqdiv.offsetHeight / 2};// + jqdiv.offsetTop };

}

MM.extendArrayWithArray = function( arrayToExtend, array ){
	var i, j;
	for( i = 0, j = array.length; i < j; i++){
		if(array[i] === undefined){
			console.error('Element is undefined.')
		}
		arrayToExtend.push( array[i] )
	}
	return arrayToExtend;
}

MM.getDictionaryAsArray = function( dictionaryToConvert, data ){
	//	data = key or value
	var array = []
	if( data === undefined || data === 'value'){
		for( var key in dictionaryToConvert ){
			array.push(dictionaryToConvert[key]);
		}
	}else{
		for( var key in dictionaryToConvert ){
			array.push(key);
		}
	}
	return array;
}

MM.getArrayAsDictionary = function( array ){
	// console.log('getArrayAsDictionary', array)
	var i,j;
	var object = {}
	for( i = 0, j = array.length; i < j; i++){
		object[i] = array[i]
	}
	// console.log('\tresult', object)
	return object;
}

MM.arraysEqual = function(a, b) {
  if (a === b) return true;
  if (a == null || b == null) return false;
  if (a.length != b.length) return false;

  // If you don't care about the order of the elements inside
  // the array, you should sort both arrays here.

  for (var i = 0; i < a.length; ++i) {
    if (a[i] !== b[i]) return false;
  }
  return true;
}

MM.arrayContainsAElementFromArray = function( arrayOne, arrayTwo ){
	if( arrayOne === undefined || arrayTwo === undefined){
		return false;
	}

	//	example: ['a', 'd'] ['c', 'd'] will return true
	var i, j;
	for( i = 0, j = arrayOne.length; i < j; i++){
		if( arrayTwo.indexOf(arrayOne[i]) !== -1 ){
			return true;
		}
	}
	return false;
}

MM.arrayContainsAllElementsInArray = function( arrayOne, arrayTwo){
	// 	example: ['a', 'b'] ['a', 'b', 'c'] will return true
	var i, j;
	var nElementsToMatch = arrayOne.length;
	var count = 0;
	for( i = 0, j = arrayOne.length; i < j; i++){
		if( arrayTwo.indexOf(arrayOne[i]) !== -1){
			count += 1;
		}
		if( count === nElementsToMatch ){
			return true;
		}
	}
	return false;
}

MM.containsElementFromArray = function( string, array ){
	for( var i = 0; i < array.length; i++){
		if( string.indexOf( array[i] ) !== -1 ){
			return true;
		}
	}
	return false;
}

MM.containsInstanceWithinArray = function( instance, array ){
	// console.log('containsInstanceWithinArray', instance, array)
	var i, j;
	for( i = 0, j = array.length; i < j; i++){
		if( array[i] instanceof instance){
			return true;
		}
	}
	return false;
}

MM.containsObjectWithinArray = function( object, array ){
	var i, j;
	for( i = 0, j = array.length; i < j; i++){
		if( object.name === array[i].name){
			return true;
		}
	}
	return false;
}

MM.contentMatches = function( a, b ){
	//	compares the content of array a with array b
	var i, j, k, l;
	k = a.length;
	l = b.length;
	if( k !== l ){
		return false;
	}

	var matches = false;
	for( i = 0; i < k; i++){
		matches = false;
		for( j = 0; j < l; j++){
			if( a[i] === b[j]){
				matches = true;
			}
		}
		if(matches === false){
			// console.log('Unable to find', a[i], 'in', b)
			return false
		}
	}

	return true;
}

MM.roundToFive = function(num) {    
    return +(Math.floor(num + "e+5")  + "e-5");
}

MM.freezeTransformations = function( meshObject ){
	console.log('MM.freezeTransformations', meshObject)
	
	//	get the world matrix
	meshObject.updateMatrixWorld();
	var worldMatrix = new THREE.Matrix4().copy(meshObject.matrixWorld)
	//console.log(meshObject.matrixWorld)
	//console.log(worldMatrix)
	var worldMatrixInverse = new THREE.Matrix4().getInverse(worldMatrix);

	//	zero out the world matrix
	meshObject.applyMatrix(worldMatrixInverse);

	console.log('\tworldMatrix', worldMatrix)

	//	apply the world matrix to each vertex
	meshObject.geometry.verticesNeedUpdate = true;
	for(var i = 0; i < meshObject.geometry.vertices.length; i++)
	{
		meshObject.geometry.vertices[i].applyMatrix4(worldMatrix);
	}	
	//	done
}