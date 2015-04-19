THREE.Scene.prototype.removeAllOfInstance = function ( objectType){
	// console.log('THREE.Scene: removeAllOfInstance')

	var objectsOfInstance = this.getObjectOfInstance( objectType );
	for( var i = 0, k = objectsOfInstance.length; i < k; i++){
		this.__removeObject( objectsOfInstance[i] )
	}
}

THREE.Scene.prototype.getObjectOfInstance = function( instanceType ){
	// console.log('THREE.Scene: getObjectOfInstance')

	var array = []
	for(var i = 0; i < this.__objects.length; i++){
		if(this.__objects[i] instanceof instanceType)
		{
			array.push( this.__objects[i] )	
		}			
	}
	return array;
}