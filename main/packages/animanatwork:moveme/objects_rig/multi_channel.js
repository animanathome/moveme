MM.MultiChannel = function(){
	this.id = THREE.Object3DIdCount ++;
	this.uuid = THREE.Math.generateUUID();
	this.name = undefined;

	//	one channel drives multiple ones
	this.driver = undefined;
	this.driverChannelGroup = undefined;
	this.driverChannel = undefined
	
	this.driven = [];
	this.drivenChannelGroups = [];
	this.drivenChannels = []	
	
	// 0 PASS 
	// 1 INVERSE
	// 2 CLAMP
	// 3 CLAMP_MULTIPLY
	this.drivenBehavior = []
	// Define custom values
	// Depending the behavior these values can be used in different ways
	// For clamp V0 it represents min and V1 represents max. In case of multi
	// only V0 gets used and represents the value we multiply the driver 
	// value with
	this.drivenV0 = [] 
	this.drivenV1 = []
	this.drivenV2 = []

	return this;
}

MM.MultiChannel.prototype = {
	constructor: MM.MultiChannel,

	exportData : function(){
		// console.log('\tMultiChannel.exportData')
		var thisData = {}

		thisData.type = 'MultiChannel'
		thisData.driver = this.driver.name
		thisData.driverChannelGroup = this.driverChannelGroup
		thisData.driverChannel = this.driverChannel

		thisData.driven = []
		thisData.drivenChannelGroups = this.drivenChannelGroups
		thisData.drivenChannels = this.drivenChannels
		thisData.drivenBehavior = this.drivenBehavior
		thisData.drivenV0 = this.drivenV0
		thisData.drivenV1 = this.drivenV1
		thisData.drivenV2 = this.drivenV2
		
		for( var i = 0, j = this.driven.length; i < j; i++){
			thisData.driven[i] = this.driven[i].name			
		}

		// console.log('\tresult', thisData)
		return thisData
	},

	importData : function( data, scene ){
		// console.log('MultiChannel.importData', data, scene)

		//	DRIVER
		var driver = scene.getObjectByName( data.driver , true);
		if( driver === undefined ){
			console.warn('\tUnable to find', data.driver)
		}
		this.driver = driver
		this.driverChannelGroup = data.driverChannelGroup
		this.driverChannel = data.driverChannel

		//	DRIVEN
		for( var i = 0, j = data.driven.length; i < j; i++){
			var driven = scene.getObjectByName( data.driven[i], true);
			if( driven === undefined ){
				console.warn('\tUnable to find', data.driven[i])
			}
			this.driven.push( driven )			
		}
		this.drivenChannelGroups = data.drivenChannelGroups
		this.drivenChannels = data.drivenChannels
		this.drivenBehavior = data.drivenBehavior
		this.drivenV0 = data.drivenV0
		this.drivenV1 = data.drivenV1
		this.drivenV2 = data.drivenV2
	},

	addDrivenChannel : function( object, channelGroup, channel ){
		// console.log('MultiChannel: addDrivenChannel as', object, channelGroup, channel)
		
		//	not sure if it will be that simple
		this.driven.push( object )
		this.drivenChannelGroups.push( channelGroup )
		this.drivenChannels.push( channel )
		this.drivenBehavior.push( 0 ) // default PASS behavior

		//	return the index of the driven channel
		//	this value can then be used to further define it's behavior if necessary
		return (this.drivenBehavior.length - 1)
	},

	setDrivenBehavior : function( index, behavior, v0, v1, v2)
	{
		// console.log('MultiChannel: setDrivenBehavior', index, behavior, v0, v1, v2)
		
		switch( behavior )
		{
			case 'INVERSE':
				this.drivenBehavior[index] = 1;
			break;

			case 'CLAMP':
				this.drivenBehavior[index] = 2;
				this.drivenV0[index] = v0;
				this.drivenV1[index] = v1;
			break;

			case 'MULTIPLY':
				this.drivenBehavior[index] = 3;
				this.drivenV0[index] = v0;
			break;

			case 'CLAMP_MULTIPLY':
				this.drivenBehavior[index] = 4;
				this.drivenV0[index] = v0;
				this.drivenV1[index] = v1;
				this.drivenV2[index] = v2;
			break;

			default:
				console.log('\tUnknown behavior. Defaulting to PASS.')
			break;
		}

	},

	setDriverChannel : function( object, channelGroup, channel){
		// console.log('MultiChannel: setDriverChannel to ', object, channelGroup, channel)

		this.driver = object;
		this.driverChannelGroup = channelGroup;
		this.driverChannel = channel;		
	},

	update : function()
	{
		// console.log('MultiChannel: update')
		// console.log('\tsetting driven channels to ', this.driver, this.driverChannelGroup, this.driverChannel);

		var driverChannelGroup = this.driver[this.driverChannelGroup]

		var i, l;
		var driven, driverValue;
		for( i = 0, l = this.driven.length; i < l; i++){
			//	pass the value of the driver to the driven			
			driven = this.driven[i][this.drivenChannelGroups[i]]
			driverValue = driverChannelGroup[this.driverChannel];

			switch( this.drivenBehavior[i]){
				case 0: // pass
					// console.log('\tpassing value', driverValue)
					driven[this.drivenChannels[i]] = driverValue;
				break;

				case 1: // inverse
					// console.log('\tinverse value', driverValue)
					if( driverValue < 0){
						driverValue = 0;
					}
					if( driverValue > 1){
						driverValue = 1;
					}
					// console.log('\tresult value', driverValue)
					driven[this.drivenChannels[i]] = 1.0 - driverValue;
				break;

				case 2: // clamp
					// console.log('\tclamping value', driverValue, 'between', this.drivenV0[i], 'and', this.drivenV1[i])
					if( driverValue <= this.drivenV0[i]){
						driverValue = this.drivenV0[i]
					}
					if( driverValue >= this.drivenV1[i]){
						driverValue = this.drivenV1[i]
					}
					// console.log('\tresult value', driverValue)
					driven[this.drivenChannels[i]] = driverValue;
				break;

				case 3: // multiply
					// console.log('\tmultiply value', driverValue, 'with', this.drivenV0[i])
					// console.log('\tresult value', ( driverValue * this.drivenV0[i] ))
					driven[this.drivenChannels[i]] = ( driverValue * this.drivenV0[i] );
				break;

				case 4: // clamp and multiply
					// console.log('\tclamping value', driverValue, 'between', this.drivenV0[i], 'and', this.drivenV1[i])
					if( driverValue <= this.drivenV0[i]){
						driverValue = this.drivenV0[i]
					}
					if( driverValue >= this.drivenV1[i]){
						driverValue = this.drivenV1[i]
					}
					// console.log('\tmultiplying clamped value', driverValue, 'with', this.drivenV2[i])
					// console.log('\tresult value', driverValue * this.drivenV2[i])
					driven[this.drivenChannels[i]] = driverValue * this.drivenV2[i];
				break;
			}
		}
	}

}