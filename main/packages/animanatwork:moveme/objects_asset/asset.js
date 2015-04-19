MM.Asset = function(){
	/*
		Holds the objects that makes up an instance of an asset
	*/
	this.name = ''
	this.namespace = '';
	
	this.controls = [];
	this.models = []
	this.skeleton = []

	return this;
}

MM.Asset.prototype = {
	getAbsoluteName : function(){
		return this.namespace+this.name;
	},
	getName : function(){
		return this.name;
	},
	getNamespace : function(){
		//	make sure we don't return the ':' sign
		var namespace = this.namespace
		if (namespace.substring(namespace.length-1) == ":"){
	        namespace = namespace.substring(0, namespace.length-1);
	    }
		return namespace;
	},
	getControlNames : function(){
		var i, j;
		var controlNames = [];
		for(i = 0, j = this.controls.length; i < j; i++){
			controlNames.push( this.controls[i].name)
		}
		return controlNames
	},
	addControls : function( controls ){
		this.controls = extendArrayWithArray( this.controls, controls );
		return this;
	},
	exportData: function(){
		console.log('assetObject: exportData')
		console.log('\tname', this.name)
		
		var i, j;
		var data = {};
		
		data.name = this.name;
		data.namespace = this.namespace;

		data.controls = []		
		for( i = 0, j = this.controls.length; i < j; i++){
			data.controls.push( this.controls[i].name )
		}

		data.models = []
		for( i = 0, j = this.models.length; i < j; i++){
			data.models.push( this.models[i].name )
		}

		data.skeleton = []
		for( i = 0, j = this.skeleton.length; i < j; i++){
			data.skeleton.push( this.skeleton[i].name )
		}

		// console.log('\tresult:', data)

		return data;
	},
	importData: function( data, scene ){
		// console.log('assetObject: importData', data, scene)
		/*
		This will take a while to construct a we'll have to 
		go through the entire scene and collect all of the 
		associated objects
		*/
		var i, j;

		this.name = data.name;
		this.namespace = data.namespace;

		var foundItem;

		//	controls
		for( i = 0, j = data.controls.length; i < j; i++){
			foundItem = scene.getObjectByName( data.controls[i] , true)
			if( foundItem !== undefined ){
				this.controls.push( foundItem )
			}else{
				console.log('\tUnable to find', data.controls[i])
			}
		}

		//	models
		for( i = 0, j = data.models.length; i < j; i++){
			foundItem = scene.getObjectByName( data.models[i] , true)
			if( foundItem !== undefined ){
				this.models.push( foundItem )
			}else{
				console.log('\tUnable to find', data.models[i])
			}
		}

		//	skeleton
		for( i = 0, j = data.skeleton.length; i < j; i++){
			foundItem = scene.getObjectByName( data.skeleton[i] , true)
			if( foundItem !== undefined ){
				this.skeleton.push( foundItem )
			}else{
				console.log('\tUnable to find', data.skeleton[i])
			}
		}

	}
}