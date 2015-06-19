MM.Spaceswitch = function(){
	MM.Control.call(this);

	this.offsetMatrices = [];
	this.spaces = [];
	this.spaceNames = [];

    this.objectType = 'Spaceswitch'
    this.channelName = 'spaceSwitch'

    this.addChannel('custom' , this.channelName, [], 'enum')
    this.custom = {'spaceSwitch' : 0}

    //  The object which actually controls the state of the channel
    //  we need this since we can't use this to change/animate/pose
    //  since it's being driven by our parent spaces. However we do 
    //  need a channel which actually tells us which parent is active
    //  this is where the channel object comes in.
    this.channelObject = undefined;
}

MM.Spaceswitch.prototype = Object.create( MM.Control.prototype );

MM.Spaceswitch.prototype.importData = function( data ){

    MM.Control.prototype.importData.call(this, data);

    //	custom to this object type
    this.spaceNames = data.spaceNames

    this.offsetMatrices = [];
    var thisMatrix;
    for( var i = 0; i < data.offsetMatrices.length; i++){
    	// console.log('\toffsetMatrixAsArray', i, data.offsetMatrices[i])
    	
    	thisMatrix = new THREE.Matrix4().fromArray(data.offsetMatrices[i])

    	// console.log('\toffsetMatrix', i, thisMatrix)
		this.offsetMatrices.push(thisMatrix);
    }
}

MM.Spaceswitch.prototype.exportData = function(){
    // console.log('Spaceswitch.exportData', this.name)

    var data = MM.Control.prototype.exportData.call(this);
    
    data.type = 'Spaceswitch';
    data.spaceNames = this.spaceNames;

    data.offsetMatrices = [];
    var theseElements;
    for( var i = 0; i < this.offsetMatrices.length; i++){
    	theseElements = this.offsetMatrices[i].toArray();
    	
    	// console.log('\toffsetMatrix', i, theseElements)

    	data.offsetMatrices.push( theseElements );
    }
    return data;
}

MM.Spaceswitch.prototype.importSetup = function( scene , data ){
	// console.log('Spaceswitch.importSetup', data)

	var foundObject;

    //  fill in the spaces
	for( var i = 0; i < this.spaceNames.length; i++){
		foundObject = scene.getObjectByName( this.spaceNames[i], true )
		if( foundObject !== undefined ){
			this.spaces.push( foundObject )
		}else{
			console.error('Unable to find', this.spaceNames[i])
		}
	}

    // fill in the channel object ( when it has been defined before )
    if( data.hasOwnProperty('channelObject')){
        foundObject = scene.getObjectByName( data.channelObject, true )
        if( foundObject !== undefined ){
            this.addSpaceswitchChannel( foundObject )
        }else{
            console.error('Unable to find channel object', data.foundObject)
        }
    }

	// console.log('\tresult', this)
}

MM.Spaceswitch.prototype.exportSetup = function(){
	// console.log('Spaceswitch.exportSetup')
	//	nothing to do 
	var data = {}
	data.type = this.objectType
	data.name = this.name

    //  this is only populated when we actually use this as a spaceswitch
    //  which might not always be the case since we use this by default
    //  when creating a controlGroup or when using the inbetween method
    // console.log('\tchannelObject', this.channelObject)
    if( this.channelObject !== undefined ){
        data.channelObject = this.channelObject.name    
    }
    // console.log('\tresult', data)
	return data;
}

MM.Spaceswitch.prototype.addSpace = function( object ){
	// console.log('addSpace', object.name)
 //    console.log('\tchannelName', this.channelName)    
	this.spaces.push( object )
	this.spaceNames.push(object.name)
    this.custom[this.channelName] = this.spaces.length - 1;
    // console.log('\tthis', this)

    this.addToChannelRange('custom' , this.channelName, object.name)


	var parentInverse = new THREE.Matrix4().getInverse( object.matrixWorld );
	// console.log('\tspace inverse', parentInverse.getPosition())

	var offsetMatrix = new THREE.Matrix4().multiplyMatrices(parentInverse, this.matrixWorld);
	// console.log('\tthis', this.matrixWorld.getPosition())

	// console.log('\toffset', offsetMatrix.getPosition())

	this.offsetMatrices.push( offsetMatrix );
}

MM.Spaceswitch.prototype.hasSpace = function( object ){
    // console.log('hasSpace', object)
    if( this.spaces.indexOf( object ) !== -1 ){
        return true;
    }else{
        return false;
    }
}

MM.Spaceswitch.prototype.updateSpace = function( object ){
    console.log('updateSpace', object.name)
}

MM.Spaceswitch.prototype.setChannelsTranslateAndRotate = function(){
	this.animChannels = [
                            this._getChannelsTranslate(),
                            this._getChannelsRotate(),
							[
                                "custom", 
                                [this.channelName], 
                                [], 
                                ['enum']
                            ]
						]
}

MM.Spaceswitch.prototype.updateMatrixWorld = function (){
	// console.log('updateMatrixWorld')
	MM.Control.prototype.updateMatrixWorld.call(this);

	if( this.spaces.length === 0 ){
		return
	}
	var index = this.custom[this.channelName];

    var parentInverse = new THREE.Matrix4()
    parentInverse.getInverse(this.parent.matrixWorld);

    var matrix1 = new THREE.Matrix4();
    matrix1.multiplyMatrices(parentInverse, this.spaces[index].matrixWorld)   

    var matrix2 = new THREE.Matrix4();
    matrix2.multiplyMatrices(matrix1, this.offsetMatrices[index])

    this.position.getPositionFromMatrix( matrix2 );
    var m1 = new THREE.Matrix4();
    m1.extractRotation( matrix2 );
    this.quaternion.setFromRotationMatrix( m1 );  

    this.updateMatrix();
}

MM.Spaceswitch.prototype.addSpaceswitchChannel = function( object ){
    console.log('addSpaceswitchChannel', object.name)

	//	add the necessary properties to the object so we can have it pass 
	//	through the value of the spaceSwitch as well as being properly 
	//	displayed in the sidebar
	//	this method is here because we don't allow the user to directly
	//	interact with this driven object
	
	//	adds this ability to animate the channel
	object.addChannel( 'custom', this.channelName, this.spaceNames, 'enum')
    object.custom = this.custom;   
    object.spaces = this.spaces;
    object.spaceNames = this.spaceNames;
    this.channelObject = object;

    // console.log('\tresult', this)
}