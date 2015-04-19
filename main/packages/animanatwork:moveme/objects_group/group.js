/*
This only needs to be declared when we want to work in isolation of the THREE
library
var THREE = {}
*/

MM.Group = function( groupName ){
/*
    Groups allow us to define different ways on how objects can be groups together
    these groups can then be visualized using the GroupScrollList UI Element. 
    A test file can be found at tests/groups.html
*/
	this.name = groupName;
	this.parent = undefined;
	this.children = [];
	this.content = [];
	this.depth = 0;
};

MM.Group.prototype = {
	constructor: MM.Group,

	add: function( object ){
		if( object === this )
			return

		if( object instanceof MM.Group ){
			object.parent = this;
			this.children.push( object )
			object.depth = this.depth + 1;
		}
	},
	remove: function( object ){
		var index = this.children.indexOf( object );

		if ( index !== - 1 ){
			object.parent = undefined;
			this.children.splice( index, 1 );		
		}		
	},
	getObjectByName: function ( name, recursive ) {
		for ( var i = 0, l = this.children.length; i < l; i ++ ) {
			var child = this.children[ i ];
			if ( child.name === name ) {
				return child;
			}

			if ( recursive === true ) {
				child = child.getObjectByName( name, recursive );
				if ( child !== undefined ) {
					return child;
				}
			}
		}
		return undefined;
	},
	getNamespace : function()
	{
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
	},	
	getObjectByNamespace: function( namespace, array){
		if( array == undefined ) array = []

		for ( var i = 0, l = this.children.length; i < l; i ++ ){
			var child = this.children[ i ];

			if( child.getNamespace() === namespace ){
				array.push( child )
			}

			child.getObjectByNamespace( namespace, array );
		}

		return array 
	},
	traverse: function ( callback ) {
		callback( this );
		for ( var i = 0, l = this.children.length; i < l; i ++ ) {
			this.children[ i ].traverse( callback );
		}
	},

	// importData: function( data ){
	// 	console.log('group.importData', data)
	// },

	exportData: function( data ){
		// console.log('group.exportData', this.name)
		if( data === undefined )
			data = {}
		
		var i, j;

		data.name = this.name
		if( this.parent !== undefined ){
			data.parent = this.parent.name
		}else{
			data.parent = undefined
		}		
		
		data.depth = this.depth

		data.content = []
		for( i = 0, j = this.content.length; i < j; i++){
			data.content.push( this.content[i].name )
		}

		data.children = []
		for( i = 0, j = this.children.length; i < j; i++){		
			// console.log('\texporting data for ', this.children[i])	
			data.children.push( this.children[ i ].exportData() )			
		}

		return data
	}
};