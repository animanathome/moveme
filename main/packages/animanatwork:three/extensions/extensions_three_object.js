THREE.Object3D.prototype.importData = function(data){
	this.uuid = data.uuid;

	if(data.name !== undefined){
		this.name = data.name;
	}
	
	if(data.type !== undefined){
		this.type = data.type;
	}

	if(data.asset !== undefined){
		this.asset = data.asset;
	}
	
	if(data.animChannels !== undefined){
		// console.log(this.name, ' -> ', data.animChannels)
		this.animChannels = data.animChannels;
	}

	if(data.hasOwnProperty('driveChannel')){
		this.driveChannel = data.driveChannel;		
	}

	if(data.custom !== undefined){
		this.custom = data.custom

		if( data.custom.hasOwnProperty('color') === true ){
			data.custom['color'] = this.material.color
		}
	}
	if(data.tag !== undefined){
		this.tag = data.tag;
	}
}

THREE.Object3D.prototype.exportData = function(){
	var data = {};
    
    data.name = this.name
    data.uuid = this.uuid
    data.type = 'Object3D'

	if ( this.asset !== undefined ){
		data.asset = this.asset;
	}

	if ( this.animChannels !== undefined ){	
		data.animChannels = this.animChannels;
	}

	if( this.hasOwnProperty('driveChannel')){
		data.driveChannel = this.driveChannel;
	}

	if ( this.tag !== undefined ){
		data.tag = this.tag;
	}

	if ( JSON.stringify( this.userData ) !== '{}' ){
		data.userData = this.userData;
	}

	if (this.visible !== true ){
		data.visible = this.visible;
	}
	
	if( this.custom !== undefined ){
		data.custom = this.custom;
	}

    return data;
}

THREE.Object3D.prototype.setVisibility = function( value ){
	/*
	The visiblity methods deal with the visibility of the 
	object and the shapes below. 
	*/
	console.log('setVisibility', value)
	this.visible = value;
}

THREE.Object3D.prototype.getVisibility = function(){
	return this.visible;
}

THREE.Object3D.prototype.getNamespaces = function( array ){
	// console.log('Object3D.getNamespaces')

	if ( array === undefined ) array = [];

	for ( var i = 0, l = this.children.length; i < l; i ++ ) {
		if( this.children[i].name !== undefined ){
			var splitName = this.children[i].name.split(':')
			if(splitName.length > 1 ){
				if( array.indexOf( splitName[0]) === -1 ){
					array.push( splitName[0])
				}
			}
		}
		this.children[ i ].getNamespaces( array );
	}

	return array;
}

THREE.Object3D.prototype.getObjectWithNamespace = function( namespace , array){
	if( array === undefined ) array = [];

	var thisNamespace;
	for ( var i = 0, l = this.children.length; i < l; i ++ ){
		thisNamespace = this.children[i].getNamespace()
		if( thisNamespace === namespace ){
			array.push( this.children[i] )
		}
		this.children[i].getObjectWithNamespace( namespace, array )
	}		

	return array;
}

THREE.Object3D.prototype.getNamespace = function(){
	var namespaces = this.name.split(':')
    var nn = namespaces.length - 1

    if( nn < 1 ){
        // console.log('No namespace found for', this.name)
        return
    }

    var namespace = namespaces[0]
    for( var i = 1; i < nn; i++ ){
        namespace += ":"+namespaces[i]
    }
    return namespace;
}

THREE.Object3D.prototype.getUniqueNamespace = function( namespace ){
	console.log('Object3D.getUniqueNamespace', namespace)

	var nElements = namespace.length
	var lastLetter = namespace.slice(nElements-1,nElements)
	if( lastLetter === ":" ){
		namespace = namespace.slice(0,nElements-1)
	}

	var namespaces = this.getNamespaces()

	var thisNamespace = namespace;
	var counter = 1;
	while( namespaces.indexOf( thisNamespace ) !== -1 ){
		thisNamespace = namespace + counter
		counter += 1
	}

	thisNamespace+=':'

	// console.log('\tresult:', thisNamespace)
	return thisNamespace
}

THREE.Object3D.prototype.getObjectsByName = function ( objectNames ){
	var objectsByName = {}
	for( var i = 0, j = objectNames.length; i < j; i++){
		objectsByName[objectNames[i]]=this.getObjectByName(objectNames[i], true);
		if( objectsByName[objectNames[i]] === undefined ){
			console.warn()
		}
	}
	return objectsByName;
}

THREE.Object3D.prototype.getObjectOfInstance = function( instanceType, array ){
	if ( array === undefined ) array = [];

	for ( var i = 0, l = this.children.length; i < l; i ++ ) {
		if( this.children[i] instanceof instanceType){
			array.push( this.children[i] )				
		}			
		this.children[ i ].getObjectOfInstance( instanceType, array );
	}

	return array;
}

THREE.Object3D.prototype.getObjectOfNameAndInstance = function( objectName, objectInstance, array ){
	if ( array === undefined ) array = [];

	for ( var i = 0, l = this.children.length; i < l; i ++ ) {
		if( this.children[i] instanceof objectInstance 
			&& this.children[i].name === objectName){
			array.push( this.children[i] )				
		}			
		this.children[ i ].getObjectOfNameAndInstance( objectName, 
			objectInstance, array );
	}
	return array; 
}

THREE.Object3D.prototype.getObjectByUuid = function ( uuid, recursive ) {
	for ( var i = 0, l = this.children.length; i < l; i ++ ) {
		var child = this.children[ i ];
		if ( child.uuid === uuid ) {
			return child;
		}

		if ( recursive === true ) {
			child = child.getObjectByUuid( uuid, recursive );
			if ( child !== undefined ) {
				return child;
			}
		}
	}
	return undefined;
}

THREE.Object3D.prototype.getObjectWithProperty = function( property, array ){
	// console.log('getObjectWithProperty', this)

	if ( array === undefined ) array = [];

	if( this.hasOwnProperty(property)){
		array.push( this )
	}

	for ( var i = 0, l = this.children.length; i < l; i ++ ) {
		this.children[i].getObjectWithProperty( property, array );
	}

	return array;
}

THREE.Object3D.prototype.getObjectOfType = function ( objectType, array ){
	// console.log('getObjectOfType', this.name)

	if ( array === undefined ) array = [];

	for ( var i = 0, l = this.children.length; i < l; i ++ ) {
		if( this.children[i].type === objectType){
			array.push( this.children[i] )
			this.children[ i ].getObjectOfType( objectType, array );
		}			
	}

	return array;
}


THREE.Object3D.prototype.getChannels = function (){
	/**
	* Initializes the animChannels property if it has not yet been defined. It * initializes it with the 3 default animatable channel groups; position,
	* rotation and scale.
	*
	* An animation channel follows the following structure
	* - channel group
	*	+- channel name
	*	+- channel range [min, max]
	*	+- channel type 
	*/
	if(this.animChannels === undefined){
		//	add default animation channels
		this.setDefaultChannels();
	}
	return this.animChannels
}

THREE.Object3D.prototype.setChannels = function ( channels ){
	this.animChannels =  channels
}

THREE.Object3D.prototype.getChannel = function( niceName ){
	// console.log('object3D: getChannel', niceName)
	var channelGroup = undefined
	var channelName = undefined
	//	check if we're dealing with any of the transformation channels
	if( niceName.indexOf("translate") !== -1 ){
		channelGroup = "position"
		channelName = niceName.substr(niceName.length - 1).toLowerCase();
	}else if( niceName.indexOf("rotate") !== -1 ){
		channelGroup = "rotation"
		channelName = '_'+niceName.substr(niceName.length - 1).toLowerCase();
	}else if( niceName.indexOf("scale") !== -1 ){
		channelGroup = "scale"
		channelName = niceName.substr(niceName.length - 1).toLowerCase();
	}
	//	check if it's a custom or shapes channel
	if( channelGroup === undefined ){
		if( this.hasOwnProperty('custom') ){								
			if( this['custom'].hasOwnProperty(niceName) !== -1 ){
				channelGroup = "custom"
				channelName = niceName
			}
		}
	}
	if( channelGroup === undefined ){
		if( this.hasOwnProperty('shapes') ){								
			if( this['shapes'].hasOwnProperty(niceName) !== -1 ){
				channelGroup = "shapes"
				channelName = niceName  
			}
		}
	}
	// console.log('\tchannelGroup:', channelGroup)
	// console.log('\tchannelName:', channelName)

	return [channelGroup, channelName]
}

THREE.Object3D.prototype.getNiceName = function( channelGroup, channelName ){
	// console.log('Object3D: getNiceName', channelGroup, channelName)

	var niceName;
	switch( channelGroup ){
		case "position": niceName='translate'+channelName.toUpperCase(); break;
        case "rotation": 
        	if( channelName === 'order'){
        		niceName = 'rotateOrder'; 
        	}else{
        		niceName = 'rotate'+channelName.toUpperCase(); 
        	}
        break;			
        
        case "scale": niceName = 'scale'+channelName.toUpperCase(); break;
        case "shapes": case "custom": niceName = channelName; break;	
		default: niceName=(channelGroup+'-'+channelName).toCamel(); break;
	} 
	return _.str.titleize(_.str.humanize(niceName));
}

// THREE.Object3D.prototype.getChannelType = function( channelGroup, channelName ){
// 	// console.log('getChannelType', channelGroup, channelName)
// 	// console.log('\ttype:',typeof this[channelGroup][channelName])

// 	var channelType = typeof this[channelGroup][channelName];
// 	switch(channelType) {
// 		case 'string': // rotateOrder 
// 			channelType = 'enum'; 
// 		break;			
// 	}

// 	//	we need to come up with a better way to deal with enums
// 	if(channelGroup === 'custom'){
// 		if( channelName === 'parentMaster' || channelName === 'spaceSwitch'){
// 			channelType = 'enum';
// 		}
// 		if( channelName === 'color'){
// 			channelType = 'color';
// 		}
// 	}

// 	// console.log('\tresult', channelType)
// 	return channelType
// }


THREE.Object3D.prototype.getChannelGroupIndex = function( channelGroup ){
	var ng = this.animChannels.length;
	var i;
	for( i = 0; i < ng; i++){
		if(this.animChannels[i][0] === channelGroup ){
			return i;
		}
	}
	return -1;
}

THREE.Object3D.prototype.getChannelNameIndex = function( channelGroup, channelName){
	console.log('getChannelNameIndex', channelGroup, channelName)
	console.log('this', this.animChannels)

	var gi = this.getChannelGroupIndex(channelGroup);
	var nc = this.animChannels[gi][1].length;
	var i;
	for( i = 0; i < nc; i++){
		if( this.animChannels[gi][1][i] === channelName ){
			return i;
		}
	}
	return -1;
}


THREE.Object3D.prototype.getChannelRange = function( channelGroup, channelName ){
	var gi = this.getChannelGroupIndex(channelGroup)
	var index = this.getChannelNameIndex( channelGroup, channelName )
	if( index == -1 ){
		console.log('Unable to find channel name')
		return;
	}
	return this.animChannels[gi][2][index]
}

THREE.Object3D.prototype.setChannelRange = function( channelGroup, channelName, channelRange ){

	var gi = this.getChannelGroupIndex(channelGroup)
	var index = this.getChannelNameIndex( channelGroup, channelName )
	if( index == -1 ){
		console.log('Unable to find channel name')
		return;
	}
	this.animChannels[gi][2][index] = channelRange
}

THREE.Object3D.prototype.addToChannelRange = function( channelGroup, channelName, channelRange ){
	console.log('addToChannelRange', channelGroup, channelName, channelRange)

	var gi = this.getChannelGroupIndex(channelGroup)
	var index = this.getChannelNameIndex(channelGroup, channelName)
	if( index == -1 ){
		console.log('Unable to find channel name')
		return;
	}
	this.animChannels[gi][2][index].push(channelRange)
}

THREE.Object3D.prototype.getChannelType = function( channelGroup, channelName ){
	// console.log('getChannelRange', channelGroup, channelName)

	var gi = this.getChannelGroupIndex(channelGroup)
	var ni = this.getChannelNameIndex( channelGroup, channelName )
	if( ni == -1 ){
		console.log('Unable to find channel name')
		return;
	}
	return this.animChannels[gi][3][ni]
}

THREE.Object3D.prototype.setChannelType = function( channelGroup, channelName, channelType ){
	// console.log('setChannelRange', channelGroup, channelName, channelType)

	var gi = this.getChannelGroupIndex(channelGroup)
	var ni = this.getChannelNameIndex( channelGroup, channelName )
	if( ni == -1 ){
		console.log('Unable to find channel name')
		return;
	}
	this.animChannels[gi][3][ni] = channelType
}

// THREE.Object3D.prototype.getChannelRange = function( channelGroup, channelName ){
// 	// console.log('getChannelRange', channelGroup, channelName)

// 	//	NOTE: not very happy with this implementation 
// 	//	very dirty and not very scalable
// 	if( channelGroup === 'rotation' && channelName === 'order'){
// 		return MM.getArrayAsDictionary( THREE.Euler.RotationOrders )
// 	}
// 	if( channelGroup === 'custom'){
// 		if( channelName === 'spaceSwitch' || channelName === 'parentMaster'){
// 			console.log('\tresult', MM.getArrayAsDictionary( this.spaceNames ))
// 			return MM.getArrayAsDictionary( this.spaceNames )
// 		}
// 	}
// }

THREE.Object3D.prototype.getChannelValues = function(){
	// console.log('getChannelValues')

	var channelGroup, channelValue, channelValueData;
	var animChannels = this.getChannels();
	var i,j;

	var data = []
	for( i = 0; i < animChannels.length; i++){
		channelGroup = this[animChannels[i][0]]
		// console.log('\t', channelGroup)

		channelValueData = []
		for( j = 0; j < animChannels[i][1].length; j++){
			channelValue = channelGroup[animChannels[i][1][j]]
			// console.log('\t\t', animChannels[i][1][j], channelValue)
			channelValueData.push( channelValue )
		}

		data.push( [animChannels[i][0], animChannels[i][1], channelValueData ])
	}

	console.log('\tresult:', data)
	return data;
}

THREE.Object3D.prototype.setChannelValues = function( data ){
	// console.log('setChannelValues', data )

	var i, j;
	var channelGroup;
	for( i = 0; i < data.length; i++ ){
		// console.log('\t', data[i][0])
		channelGroup = this[data[i][0]]			
		for( j = 0; j < data[i][1].length; j++){
			// console.log(typeof channelGroup[data[i][1][j]])
			if( channelGroup.hasOwnProperty(data[i][1][j]) 
				|| typeof channelGroup[data[i][1][j]] == 'number'){
				// console.log('\t\tApplying value', data[i][2][j], 'to', data[i][1][j])
				channelGroup[data[i][1][j]] = data[i][2][j];
			}else{
				console.log('\t\tUnable to apply value', data[i][2][j], 'to', data[i][1][j])
			}
		}
	}
}

THREE.Object3D.prototype.connectChannelTo = function( driven, channel){
	// console.log(this.name, 'connectChannelTo', driven.name, channel)
	//	pass on the objects channel object to the given driven
	driven[channel] = this[channel];

	//	keep a record of the connection
	this.driveChannel={};
	this.driveChannel[channel]=driven.name;
}

THREE.Object3D.prototype.setChannelsEmpty = function (){
	this.animChannels = [];
}

THREE.Object3D.prototype._getChannelsTranslate = function (){
	return [
		 "position"
		,["x", "y", "z"]
		,[
			[-Infinity, Infinity],
	  		[-Infinity, Infinity],
	  		[-Infinity, Infinity]
	  	 ]
		,["number", "number", "number"]
	] 
}

THREE.Object3D.prototype._getChannelsRotate =function (){
	return [
		 "rotation"
		,["x", "y", "z", "order"]
		,[
			[-Infinity, Infinity],
			[-Infinity, Infinity],
			[-Infinity, Infinity],
			['XYZ', 'YZX', 'ZXY', 'XZY', 'YXZ', 'ZYX']
		  ]
		,["number", "number", "number", "enum"]
	]
}

THREE.Object3D.prototype._getChannelsScale = function (){
	return [
		 "scale"
		,["x", "y", "z"]
		,[
			[-Infinity, Infinity],
	  		[-Infinity, Infinity],
	  		[-Infinity, Infinity]
	  	 ]
		,["number", "number", "number"]
	] 
}

THREE.Object3D.prototype.setChannelsTranslate = function (){
	this.animChannels = [this._getChannelsTranslate()]
}

THREE.Object3D.prototype.setChannelsRotate = function (){
	this.animChannels = [this._getChannelsRotate()]
}

THREE.Object3D.prototype.setChannelsTranslateAndRotate = function (){
	this.animChannels = [
		this._getChannelsTranslate(), 
		this._getChannelsRotate()
	]
}

THREE.Object3D.prototype.setChannelsScale = function (){
	this.animChannels = [this._getChannelsScale()]
}


THREE.Object3D.prototype.setDefaultChannels =function(){
	this.animChannels = [
		this._getChannelsTranslate(), 
		this._getChannelsRotate(),
		this._getChannelsScale()
	]
}

THREE.Object3D.prototype.hasChannelGroup = function( channelGroup ){
	if( this.animChannels === undefined)
		return false;

	var i, l;
	for( i = 0, l = this.animChannels.length; i < l; i++){
		if( this.animChannels[i][0] === channelGroup ){
			return true
		}
	}
	return false
}

THREE.Object3D.prototype.getChannelsFromGroup = function( channelGroup ){
	if( this.animChannels === undefined)
		return [];

	var i, l;
	for( i = 0, l = this.animChannels.length; i < l; i++){
		if( this.animChannels[i][0] === channelGroup ){
			return this.animChannels[i][1]
		}
	}
	return [];
}

THREE.Object3D.prototype.isAnimatable = function( channelGroup, channelName ){
		// console.log('isAnimatable', channelGroup, channelName)

	if( this.animChannels === undefined)
		return false;

	var i, l;
	var j, m;		
	for( i = 0, l = this.animChannels.length; i < l; i++){
		if( this.animChannels[i][0] === channelGroup ){
			// console.log('\tFound channelGroup', channelGroup)
			// console.log('\t\tChannels', this.animChannels[i][1])
			for( j = 0, m = this.animChannels[i][1].length; j < m; j++){
				// console.log('\t\tChannel', j, this.animChannels[i][1][j])
				if( this.animChannels[i][1][j] === channelName){
					// console.log('\tFound channelName', channelName)
					return true;
				}
			}
		}
	}
	// console.log('\tUnable to find ', channelGroup, channelName)
	return false;
}

THREE.Object3D.prototype.removeChannelGroup = function( channelGroup ){
	/*
	Description:
		Removes a channel group from the given object. A channel group holds
		a collection of channels. By default an object has the following 
		channel groups: position, rotation and scale

	Arguments:
		channelGroup: the name of the group we want to remove
	*/
	var i, l;		
	for( i = 0, l = this.animChannels.length; i < l; i++){
		if( this.animChannels[i][0] === channelGroup ){
			this.animChannels.splice( i, 1)
		}
	}
}

THREE.Object3D.prototype.removeChannel = function( channelGroup, channelName ){
	console.log('removeChannel', channelGroup, channelName)
	if( this.animChannels === undefined){
		// console.log('Object has no animChannels. Nothing to remove.')
		return false;
	}

	var i, l;		
	for( i = 0, l = this.animChannels.length; i < l; i++){
		// console.log('\tlooking at', this.animChannels[i][0])
		if( this.animChannels[i][0] === channelGroup ){
			// console.log('\tchannelGroup', channelGroup, this.animChannels[i][1])
			var index = this.animChannels[i][1].indexOf( channelName )
			if( index !== -1 ){
				this.animChannels[i][1].splice( index, 1)
			}
		}
	}
}

THREE.Object3D.prototype.addChannel = function ( channelGroup, channelName, channelRange, channelType ){
	/*
	Add animatable channel
	*/
	// console.log('addChannel', channelGroup, channelName)
	// console.log('\tanimChannels', this.animChannels)

	if(this.animChannels === undefined){
		this.animChannels = []
	}

	if(channelRange === undefined ){
		channelRange = [-Infinity, Infinity]
	}

	if(channelType === undefined){
		channelType = "number"
	}

	//	determine if the group exists		
	var channelIndex = -1;
	var i, l;
	for( i = 0, l = this.animChannels.length; i < l; i++){
		if( this.animChannels[i][0] === channelGroup ){
			channelIndex = i;
		}
	}

	//	if not, add channel group with channel
	if( channelIndex === -1 ){
		// console.log('\tChannelGroup does not exist. Adding', channelGroup)
		this.animChannels.push([channelGroup, [channelName], [channelRange], [channelType]])
	}else{
		//	determine if we already have the channel within the group
		var index = -1;
		for( i = 0, l = this.animChannels[channelIndex][1].length; i < l; i++){
			// console.log('\t\t', i, this.animChannels[channelIndex][1][i])
			if( this.animChannels[channelIndex][1][i] === channelName ){
				index = i;
			}
		}
		// console.log('\tindex', index)
		if( index === -1 ){
			// console.log('\tChannel does not exist in', this.animChannels[channelIndex][1],'. Adding', channelName)
			this.animChannels[channelIndex][1].push( channelName )
			
			//	CHANGE: not going to sort here anymore since we've added type and range which would otherwise add the risk of messing up there relationship
			// this.animChannels[channelIndex][1].sort();

			this.animChannels[channelIndex][2].push( channelRange )
			this.animChannels[channelIndex][3].push( channelType )
		}
	}
}

THREE.Object3D.prototype.getParent = function(){
	return this.parent
}

THREE.Object3D.prototype.isAnimated = function(){
	//	returns true when the object is animated
	// console.log('Object3D: isAnimated')

	if(this.animCurves === undefined){
		return false
	}

	if(this.animCurves.length === 0)
	{
		return false
	}
	return true;
}
THREE.Object3D.prototype.isChannelAnimated = function( channel ){
	if( this.getAnimCurveFromChannel( channel ) === null ){
		return false
	}else{
		return true
	}
}

THREE.Object3D.prototype.getAnimCurveFromChannel = function( channel ){
	//	channel should be in following format
	//	[channelGroup, channel] or ['position', 'x']
	// console.log('Object3D: getAnimCurveFromChannel', channel)

	if(this.animCurves === undefined){
		return null;
	}

	if(this.animCurves.length === 0){
		return null;
	}

	for(var i = 0; i < this.animCurves.length; i++){
		// console.log('attr', this.animCurves[i].attr)

		//	check channel group
		if(this.animCurves[i].attr[0] === channel[0])
		{
			//	check channel
			if(this.animCurves[i].attr[1] === channel[1])
			{
				return this.animCurves[i];
			}
		}
	}
	return null
}

THREE.Object3D.prototype.getAnimCurves = function(){
	if(this.animCurves === undefined ){
		return [];
	}
	
	if(this.animCurves.length === 0){
		return [];
	}

	return this.animCurves;
}

//	this.animCurves is a list which contains the animCurves for the current
//	object. Here the value of the attr defines which channel or attribute
//	the curve drives
THREE.Object3D.prototype.addAnimCurve = function( animCurve){
	// console.log('Object3D: addAnimCurve')

	if(this.animCurves === undefined){
		this.animCurves = []
	}

	if( this.animCurves.indexOf( animCurve ) === -1 ){
		this.animCurves.push( animCurve )
	// }else{
	// 	console.log('\tanimCurve is already registered')
	}
}

THREE.Object3D.prototype.removeAnimCurve = function( animCurve ){
	//console.log('Object3D: removeAnimCurve', animCurve)

	if(this.animCurves === undefined){
		// console.log('\t', 'Object has no animCurves')
		return
	}

	// this.animCurves.remove( animCurve )
	var i = this.animCurves.indexOf(animCurve);        
    if(i != -1) {
        this.animCurves.splice(i, 1);
    // }else{
    // 	console.log(animCurve.name, 
    // 		'could not be found. Maybe it has already been delete?')
    }
}

THREE.Object3D.prototype.hasKeysSelected = function (){
	/*
	Description:
		Determine whether or not the object has any keys selected
	Returns:
		True or False
	*/
	var i, l;
	for( i = 0, l = this.animCurves.length; i < l; i++){
		if( this.animCurves[i].hasSelection() === true ){
			return true;
		}
	}
	return false;
}

THREE.Object3D.prototype.keyChannel = function( time, inTangentType, outTangentType, channelGroup, channelName){
	// console.log('object3D: keyChannel', time, inTangentType, outTangentType,
		// channelGroup, channelName)
	/*
	Description:
		Keys the given channel. If no animation curve exists for the given
		channel, one will be created and returned.

	Returns:
		Created animation curve
	*/
	var thisAnimCurve = this.getAnimCurveFromChannel( [ channelGroup, 
		channelName ])

	//	create an animation curve is none exists
	var createdAnimCurve = false;
	if( thisAnimCurve === null )
	{
		thisAnimCurve = new MM.AnimCurve( this, [channelGroup, channelName ])
		this.addAnimCurve( thisAnimCurve )

    	switch( channelName ){
			case 'x': thisAnimCurve.setColor(0xFF0000); break;
			case 'y': thisAnimCurve.setColor(0x00FF00); break;
			case 'z': thisAnimCurve.setColor(0x0000FF); break;
    	}
    	createdAnimCurve = true;
	}

	//	add a key to the animation curve
	var thisChannelGroup = this[channelGroup]
	thisAnimCurve.add( time, thisChannelGroup[channelName], inTangentType,
		outTangentType)

	if( createdAnimCurve ){
		return thisAnimCurve
	}else{
		return null
	}
}

THREE.Object3D.prototype.keyAnimated = function( time, inTangentType, outTangentType ){
	// console.log('keyAnimated', time, inTangentType, outTangentType)
	/*
	Description:
		Automatically add keys at the given time with the current value for
		each channel which already has an animation curve.

	Returns:
		Boolean. Returns true is new keys were added
	*/

	if(this.animCurves === undefined){
		// console.log('\tObject has no channels animated.')
		return false
	}

	var addedKeys = false;
	var thisCurve, objectValue, curveValue;
	for(var i = 0; i < this.animCurves.length; i++){
		thisCurve = this.animCurves[i]
		objectValue = thisCurve.getChannelValue();
		curveValue = thisCurve.getValue( time );

		// console.log('\t', i, 'Object value', objectValue)
		// console.log('\t', i, 'Curve value', curveValue)

		//	only add a key at this time when:
		//	1. the value is different or
		//	2. we don't have a key at that time yet
		if(objectValue !== curveValue 
		//|| thisCurve.getIndexAtTime(time) === -1
		){
			thisCurve.add( time, objectValue, inTangentType, outTangentType )
			addedKeys = true;
			// console.log('\t', i, 'Key Added')
		}
	}

	return addedKeys;
}

THREE.Object3D.prototype.keyAll = function( time, inTangentType, outTangentType, skipChannelGroup ){
	// console.log('object3D: keyAll', time, inTangentType, outTangentType, skipChannelGroup)
	/*
	Description:
		Keys all the channels that are not part of the skip list. If no 
		animation curve exists,one will be created and returned.

	Arguments:
		Time, intangentType, outTangentType for the created keys
		Any channel groups to skip

	Returns:
		Any newly created animation curves
	*/

	var newAnimCurves = []
	var keyableAttrs = this.getChannels();

	//	first iterate over the channel groups and then the individual
	//	channels
		for(var i = 0; i < keyableAttrs.length; i++){
			//	look if there are any specific channel groups 
			// 	that we need to skip
			if(skipChannelGroup !== undefined){
				if(skipChannelGroup.indexOf(keyableAttrs[i][0]) !== -1 ){	
					continue;
				}
			}   

		for(var j = 0; j < keyableAttrs[i][1].length; j++){
			//	Do not animate any of the following channels
			if( keyableAttrs[i][0] === 'rotation' 
			&& keyableAttrs[i][1][j] === 'order'){
				// console.log('Skipping channel', keyableAttrs[i][1][j])
				continue;
			}
			if( keyableAttrs[i][0] === 'custom' 
			&& keyableAttrs[i][1][j] === 'spaceSwitch'){
				// console.log('Skipping channel', keyableAttrs[i][1][j])
				continue;
			}

		//	get animCurve from channel
			var thisAnimCurve = this.getAnimCurveFromChannel(
				[keyableAttrs[i][0], keyableAttrs[i][1][j]])	

			//	if null is returned, create one
			if(thisAnimCurve === null ){
				// console.log('\t\t\tCreating a new animCurve for', keyableAttrs[i][0], keyableAttrs[i][1][j])
				thisAnimCurve = new MM.AnimCurve( this, 
					[ keyableAttrs[i][0], keyableAttrs[i][1][j] ]);   						    	
	    		this.addAnimCurve( thisAnimCurve )

		    	//	define curve color
		    	if( keyableAttrs[i][1][j] === 'x'){
					thisAnimCurve.setColor(0xFF0000);
		    	}else if( keyableAttrs[i][1][j] === 'y' ){
		    		thisAnimCurve.setColor(0x00FF00);
		    	}else if( keyableAttrs[i][1][j] === 'z' ){
		    		thisAnimCurve.setColor(0x0000FF);			    	
		    	}else{

		    	}
		    	newAnimCurves.push( thisAnimCurve )	    	
			}
			
			//	get the current value of the given channel
			var channelGroup = this[keyableAttrs[i][0]]
			thisAnimCurve.add( time, channelGroup[ keyableAttrs[i][1][j] ], 
					inTangentType, outTangentType)
			}
		}
		return newAnimCurves;
}

THREE.Object3D.prototype.exportAnimation = function(){
	// console.log('exporting animation for ', this.name)

	var data = []
	var animCurves = this.getAnimCurves()
	var animCurveData;
	if( animCurves.length > 0 ){
		for( var i = 0; i < animCurves.length; i++){
			animCurveData = animCurves[i].exportData()
			data.push( animCurveData )
		}
	}
	return data;
}

THREE.Object3D.prototype.importAnimation = function( data ){
	// console.log('object3D.importAnimation', data)

	var newAnimCurves = []
	for( var i = 0, j = data.length; i < j; i++){
		// console.log('\t', data[i].driven)

		var thisAnimCurve = new MM.AnimCurve( this , data[i].attr);
		thisAnimCurve.importData( data[i] )
		
		this.addAnimCurve( thisAnimCurve )

		newAnimCurves.push( thisAnimCurve )
	}
	return newAnimCurves
}

THREE.Object3D.prototype.updateAnimation = function( time ){
	//console.log('object3D.updateAnimation', this.name, time)

	var thisCurve, attrType;
	if(this.animCurves !== undefined){
		// console.log(this.animCurves)
	    for(var j = 0, l = this.animCurves.length; j < l; j++){
            thisCurve = this.animCurves[j]                
            attrType = this[thisCurve.attr[0]]

            //  set the value from the anim curve to the //  attribute that it is driven
            if( attrType[thisCurve.attr[1]].constructor == THREE.Number ){                    
                attrType[thisCurve.attr[1]].value = thisCurve.getValue( time );
            }else{
                attrType[thisCurve.attr[1]] = thisCurve.getValue( time );
            }       
        }
	}

	for ( var i = 0, k = this.children.length; i < k; i ++ ) {
		this.children[ i ].updateAnimation( time );
	}   
}

THREE.Object3D.prototype.getTransformationData = function(){
	console.log('getTransformationData')
	return [
			this.position.x, 
			this.position.y, 
			this.position.z,

			this.rotation._x,
			this.rotation._y,
			this.rotation._z,
			this.rotation._order,
			
			this.scale.x,
			this.scale.y,
			this.scale.z
			]
}

THREE.Object3D.prototype.setTransformationData = function( data ){
	console.log('setTransformationData', data)

	this.position.set( data[0], data[1], data[2])
	this.rotation.set( data[3], data[4], data[5], data[6] )
	this.scale.set( data[7], data[8], data[9] )
}

THREE.Object3D.prototype.addInbetween = function( name , type){
	console.log('inbetween', name, type)

	var inbetween;
	if( type === undefined || type === 'Spaceswitch'){
		inbetween = new MM.Spaceswitch();
	}else if( type === 'SpaceswitchSplit'){
		inbetween = new MM.SpaceswitchSplit();
	}else if( type === 'ParentMaster'){
		inbetween = new MM.ParentMaster();
	}else{
		inbetween = new THREE.Object3D();
	}
	
	inbetween.name = name;
	this.parent.add( inbetween )
	inbetween.applyMatrix( this.matrix )
	inbetween.updateMatrixWorld()
	inbetween.setParent( this )

	// console.log('\tresult', inbetween)

	return inbetween
}

THREE.Object3D.prototype.setParent = function( child ){
	if( child === undefined ){
		// console.warn('Unable to set parent for', child)
		return
	}

    //  adds one object to another while maintaining it's
    //  original world position

    //  put the child into the soon to be parent's space
    var inverseMatrix = new THREE.Matrix4();
    inverseMatrix.getInverse(this.matrixWorld);

    var localSpace = new THREE.Matrix4();
    localSpace.multiplyMatrices(child.matrixWorld, inverseMatrix)

    // console.log('localSpace')
    // console.log(localSpace)

    THREE.Object3D.prototype.add.call(this, child);

    child.position.getPositionFromMatrix( localSpace );
    var m1 = new THREE.Matrix4();
    m1.extractRotation( localSpace );
    child.quaternion.setFromRotationMatrix( m1 );   
}

THREE.Object3D.prototype.getWorldPosition = function(){
	var v1 = new THREE.Vector3();
	return v1.set(this.matrixWorld.elements[12], 
				  this.matrixWorld.elements[13], 
				  this.matrixWorld.elements[14]); 
}

THREE.Object3D.prototype.getWorldUp = function(){
	var v1 = new THREE.Vector3();
	return v1.set(this.matrixWorld.elements[4], 
				  this.matrixWorld.elements[5], 
				  this.matrixWorld.elements[6]); 
}

THREE.Object3D.prototype.getWorldSide = function(){
	var v1 = new THREE.Vector3();
	return v1.set(this.matrixWorld.elements[0], 
				  this.matrixWorld.elements[1], 
				  this.matrixWorld.elements[2]); 
}
	
THREE.Object3D.prototype.setRotationFromEuler = function ( euler ) {
	// console.log('setRotationFromEuler')
	
	//	Don't update the euler after setting the quaterion
	
	this.quaternion.setFromEuler( euler, false );

}

THREE.Object3D.prototype.setChild = function( child ){
    //  adds one object to another while maintaining it's
    //  original world position

    //  put the child into the soon to be parent's space
    var inverseMatrix = new THREE.Matrix4();
    inverseMatrix.getInverse(this.matrixWorld);

    var localSpace = new THREE.Matrix4();
    localSpace.multiplyMatrices(child.matrixWorld, inverseMatrix)

    // console.log('localSpace')
    // console.log(localSpace)

    THREE.Object3D.prototype.add.call(this, child);

    child.position.getPositionFromMatrix( localSpace );
    var m1 = new THREE.Matrix4();
    m1.extractRotation( localSpace );
    child.quaternion.setFromRotationMatrix( m1 );   
}