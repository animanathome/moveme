THREE.Scene.prototype.removeAllOfInstance = function ( objectType){
	// console.log('THREE.Scene: removeAllOfInstance')

	var objectsOfInstance = this.getObjectOfInstance( objectType );
	for( var i = 0, k = objectsOfInstance.length; i < k; i++){
		this.__removeObject( objectsOfInstance[i] )
	}
}

THREE.Scene.prototype.getObjectOfInstance = function( instanceType ){
	var array = []
	for(var i = 0; i < this.__objects.length; i++){
		if(this.__objects[i] instanceof instanceType)
		{
			array.push( this.__objects[i] )	
		}			
	}

	//	TEMP implementation
	//	this was added just so we could find our cameras. For some reason the
	//	get place here while all other object get parented under this.__objects
	console.log('!!!TEMP IMPLEMENTATION: REMOVE ASAP!!!')
	for(var i = 0; i < this.children.length; i++){
		if(this.children[i] instanceof instanceType)
		{
			array.push( this.children[i] )	
		}
	}

	return array;
}

THREE.Scene.prototype.getObjectOfType = function(objectType){
	// console.log('THREE.Scene: getObjectOfType')

	var array = []
	for(var i = 0; i < this.__objects.length; i++){
		if(this.__objects[i].hasOwnProperty('type')){
			if(this.__objects[i].type === objectType){
				array.push(this.__objects[i])
			}
		}
	}
	return array;
}