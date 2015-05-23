MM.SpaceswitchSplit = function(){
	MM.Control.call(this);

	this.pOffsetMatrices = []
	this.pSpaces = []
	this.pSpaceNames = []
	this.pChannelName = 'positionSpaceSwitch'
	this.pChannelObject = undefined;

	this.rOffsetMatrices = []
	this.rSpaces = []
	this.rSpaceNames = []
	this.rChannelName = 'rotationSpaceSwitch'
	this.rChannelObject = undefined;

	this.objectType = 'SpaceswitchSplit'

	this.addChannel('custom', this.pChannelName, [], 'enum')
	this.addChannel('custom', this.rChannelName, [], 'enum')

	this.custom = {'pSpaceSwitch':0, 'rSpaceSwitch':0}
}

MM.SpaceswitchSplit.prototype = Object.create( MM.Control.prototype );

MM.SpaceswitchSplit.prototype.importData = function( data ){
	console.log('SpaceswitchSplit.importData', data)

	this.name = data.name
    this.uuid = data.uuid

    this.controlColor.setRGB( data.controlColor.r, data.controlColor.g, 
        data.controlColor.b )

    this.controlSize = data.controlSize
    
    this.controlScale.set( data.controlScale.x, data.controlScale.y, 
        data.controlScale.z )  

    this.controlOffset.set( data.controlOffset.x, data.controlOffset.y, 
        data.controlOffset.z ) 
    
    this.controlSide = data.controlSide
    this.displayRotationAxis = data.displayRotationAxis

    if( data.hasOwnProperty('controlShape')){
        this.controlShape = data.controlShape
    }

    if( data.hasOwnProperty('custom')){
        this.custom = data.custom
    }

    //	-----------------------------------------------------------------------
    //	space switch split specific
    var thisMatrix;

    //	position
    this.pSpaceNames = data.pSpaceNames;
    this.pOffsetMatrices = []    
    for(var i = 0; i < data.pOffsetMatrices.length; i++){
    	thisMatrix = new THREE.Matrix4().fromArray(data.pOffsetMatrices[i])
    	this.pOffsetMatrices.push(thisMatrix)
    }
    
    //	rotation
    this.rSpaceNames = data.rSpaceNames;
    this.rOffsetMatrices = []    
    for(var i = 0; i < data.rOffsetMatrices.length; i++){
    	thisMatrix = new THREE.Matrix4().fromArray(data.rOffsetMatrices[i])
    	this.rOffsetMatrices.push(thisMatrix)
    }
}

MM.SpaceswitchSplit.prototype.exportData = function(){
	console.log('SpaceswitchSplit.exportData')

	var data = {}

    data.name = this.name
    data.uuid = this.uuid
    data.type = this.objectType

    data.controlColor = this.controlColor
    data.controlSize = this.controlSize
    data.controlScale = this.controlScale
    data.controlOffset = this.controlOffset
    data.controlSide = this.controlSide
    data.displayRotationAxis = this.displayRotationAxis

    if( this.controlShape !== undefined ) 
        data.controlShape = this.controlShape 
        
    if( this.hasOwnProperty('custom')){
        // console.log('\tExporting custom channels')
        data.custom = this.custom
    }   

    //	-----------------------------------------------------------------------
    //	space switch split specific
	var theseElements;

	//	position
    data.pSpaceNames = this.pSpaceNames
    data.pOffsetMatrices = []
    for(var i = 0; i < this.pOffsetMatrices.length; i++){
    	theseElements = this.pOffsetMatrices[i].toArray();
    	data.pOffsetMatrices.push(theseElements)
    }

    //	rotation
	data.rSpaceNames = this.rSpaceNames
	data.rOffsetMatrices = []
    for(var i = 0; i < this.rOffsetMatrices.length; i++){
    	theseElements = this.rOffsetMatrices[i].toArray();
    	data.rOffsetMatrices.push(theseElements)
    }

	return data;
}

MM.SpaceswitchSplit.prototype.importSetup = function( scene, data ){
	console.log('SpaceswitchSplit.importSetup')

	var foundObject;

//	position
	for( var i = 0; i < this.pSpaceNames.length; i++){
		foundObject = scene.getObjectByName( this.pSpaceNames[i], true )
		if( foundObject !== undefined ){
			this.pSpaces.push( foundObject )
		}else{
			console.error('Unable to find', this.pSpaceNames[i])
		}
	}

	// fill in the channel object ( when it has been defined before )
    if( data.hasOwnProperty('pChannelObject')){
        foundObject = scene.getObjectByName( data.pChannelObject, true )
        if( foundObject !== undefined ){
            this.addPositionSpaceswitchChannel( foundObject )
        }else{
            console.error('Unable to find channel object', data.foundObject)
        }
    }

//	rotation
	for( var i = 0; i < this.rSpaceNames.length; i++){
		foundObject = scene.getObjectByName( this.rSpaceNames[i], true )
		if( foundObject !== undefined ){
			this.rSpaces.push( foundObject )
		}else{
			console.error('Unable to find', this.rSpaceNames[i])
		}
	}
	
	// fill in the channel object ( when it has been defined before )
    if( data.hasOwnProperty('rChannelObject')){
        foundObject = scene.getObjectByName( data.rChannelObject, true )
        if( foundObject !== undefined ){
            this.addRotationSpaceswitchChannel( foundObject )
        }else{
            console.error('Unable to find channel object', data.foundObject)
        }
    }

}

MM.SpaceswitchSplit.prototype.exportSetup = function(){
	console.log('SpaceswitchSplit.exportSetup')

	// console.log('Spaceswitch.exportSetup')
	//	nothing to do 
	var data = {}
	data.type = this.objectType
	data.name = this.name

    //  this is only populated when we actually use this as a spaceswitch
    //  which might not always be the case since we use this by default
    //  when creating a controlGroup or when using the inbetween method
    // console.log('\tchannelObject', this.channelObject)
    if( this.pChannelObject !== undefined ){
        data.pChannelObject = this.pChannelObject.name    
    }
    if( this.rChannelObject !== undefined ){
        data.rChannelObject = this.rChannelObject.name    
    }
    // console.log('\tresult', data)
	return data;
}

MM.SpaceswitchSplit.prototype.addPositionSpace = function( object ){
	// console.log('addSpace', object.name)
 	// console.log('\tchannelName', this.channelName)    
	this.pSpaces.push( object )
	this.pSpaceNames.push(object.name)
    this.custom[this.pChannelName] = this.pSpaces.length - 1;
    // console.log('\tthis', this)

    this.addToChannelRange('custom' , this.pChannelName, object.name)

	var parentInverse = new THREE.Matrix4().getInverse( object.matrixWorld );
	// console.log('\tspace inverse', parentInverse.getPosition())

	var offsetMatrix = new THREE.Matrix4().multiplyMatrices(parentInverse, this.matrixWorld);
	// console.log('\tthis', this.matrixWorld.getPosition())
	// console.log('\toffset', offsetMatrix.getPosition())
	this.pOffsetMatrices.push( offsetMatrix );
}

MM.SpaceswitchSplit.prototype.hasPositionSpace = function( object ){
	if( this.pSpaces.indexOf( object ) !== -1 ){
        return true;
    }else{
        return false;
    }
}

MM.SpaceswitchSplit.prototype.addPositionSpaceswitchChannel = function( object ){
    console.log('addPositionSpaceswitchChannel', object.name)

	//	add the necessary properties to the object so we can have it pass 
	//	through the value of the spaceSwitch as well as being properly 
	//	displayed in the sidebar
	//	this method is here because we don't allow the user to directly
	//	interact with this driven object
	
	//	adds this ability to animate the channel
	object.addChannel( 'custom', this.pChannelName, this.pSpaceNames, 'enum')
    object.custom = this.custom;   
    object.spaces = this.pSpaces;
    object.spaceNames = this.pSpaceNames;
    
    this.pChannelObject = object;
    // console.log('\tresult', this)
}

MM.SpaceswitchSplit.prototype.addRotationSpace = function( object ){
	// console.log('addSpace', object.name)
 	// console.log('\tchannelName', this.channelName)    
	this.rSpaces.push( object )
	this.rSpaceNames.push(object.name)
    this.custom[this.rChannelName] = this.rSpaces.length - 1;
    // console.log('\tthis', this)

    this.addToChannelRange('custom' , this.rChannelName, object.name)

	var parentInverse = new THREE.Matrix4().getInverse( object.matrixWorld );
	// console.log('\tspace inverse', parentInverse.getPosition())

	var offsetMatrix = new THREE.Matrix4().multiplyMatrices(parentInverse, this.matrixWorld);
	// console.log('\tthis', this.matrixWorld.getPosition())
	// console.log('\toffset', offsetMatrix.getPosition())
	this.rOffsetMatrices.push( offsetMatrix );
}

MM.SpaceswitchSplit.prototype.hasRotationSpace = function( object ){
	if( this.rSpaces.indexOf( object ) !== -1 ){
        return true;
    }else{
        return false;
    }
}

MM.SpaceswitchSplit.prototype.addRotationSpaceswitchChannel = function(object){
    console.log('addRotationSpaceswitchChannel', object.name)

	//	add the necessary properties to the object so we can have it pass 
	//	through the value of the spaceSwitch as well as being properly 
	//	displayed in the sidebar
	//	this method is here because we don't allow the user to directly
	//	interact with this driven object
	
	//	adds this ability to animate the channel
	object.addChannel( 'custom', this.rChannelName, this.rSpaceNames, 'enum')
    object.custom = this.custom;   
    object.spaces = this.rSpaces;
    object.spaceNames = this.rSpaceNames;
    
    this.rChannelObject = object;
    // console.log('\tresult', this)
}

MM.SpaceswitchSplit.prototype.setChannelsTranslateAndRotate = function(){
	this.animChannels = [
                            this._getChannelsTranslate(), 
                            this._getChannelsRotate(),
							["custom", [this.pChannelName, this.rChannelName], [[],[]], ['enum', 'enum']]
						]
}

MM.SpaceswitchSplit.prototype.updateMatrixWorld = function (){
	// console.log('updateMatrixWorld')
	MM.Control.prototype.updateMatrixWorld.call(this);

	if( this.pSpaces.length === 0 ){
		return
	}

	if( this.rSpaces.length === 0 ){
		return 
	}

//	set position
	var pIndex = this.custom[this.pChannelName];

    var parentInverse = new THREE.Matrix4()
    parentInverse.getInverse(this.parent.matrixWorld);

    var pMatrix1 = new THREE.Matrix4();
    pMatrix1.multiplyMatrices(parentInverse, this.pSpaces[pIndex].matrixWorld)

    var pMatrix2 = new THREE.Matrix4();
    pMatrix2.multiplyMatrices(pMatrix1, this.pOffsetMatrices[pIndex])
    
    this.position.getPositionFromMatrix( pMatrix2 );
    
//	set rotation
	var rIndex = this.custom[this.rChannelName];

    var parentInverse = new THREE.Matrix4()
    parentInverse.getInverse(this.parent.matrixWorld);

    var rMatrix1 = new THREE.Matrix4();
    rMatrix1.multiplyMatrices(parentInverse, this.rSpaces[rIndex].matrixWorld);

    var rMatrix2 = new THREE.Matrix4();
    rMatrix2.multiplyMatrices(rMatrix1, this.rOffsetMatrices[rIndex])
    
    var m1 = new THREE.Matrix4();
    m1.extractRotation( rMatrix2 );
    this.quaternion.setFromRotationMatrix( m1 );

//	update matrix
    this.updateMatrix();
}