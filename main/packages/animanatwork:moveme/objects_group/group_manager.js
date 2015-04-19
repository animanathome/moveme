MM.GroupManager = function( editor ){
	this.scene = new MM.Group('scene')
	this.editor = editor
	return this;
};

MM.GroupManager.prototype = {
	constructor: MM.GroupManager,

	addGroup: function( groupName , parentGroupName , makeUnique){	
		// console.log('GroupManager:addGroup', groupName, parentGroupName)	
		
		if( makeUnique === undefined ){
			makeUnique = true
		}

		var parentGroup;
		if( parentGroupName === undefined ){
			//	if no parent group name is defined, add it to the scene
			parentGroup = this.scene
		}else{
			//	determine if have the parentGroup
			parentGroup = this.scene.getObjectByName( parentGroupName , true)
			if( parentGroup === undefined ){
				// console.warn('parent group with name', parentGroupName, 'does not exist')
				return
			}
		}

		//	NOTE: even though we only check for a unique name on one level, it is
		//	however important to have unqiue names accross all groups. Otherwise
		//	it will become harder to get the content of given group by name (
		//	since we can have multiple ).
		//	SOLUTION: namespaces should solve this. If this is not something we 
		//	can or want to use then we'll have to go and check if the parents 
		//	match up.

		//	make give the group a unique name
		var newGroupName = groupName;

		if( makeUnique === true ){
			var i = 0;
			while( parentGroup.getObjectByName(newGroupName, false) !== undefined ){
				newGroupName = groupName + i;
				i += 1;
			}
		}

		//	add the newly created group to the parent group
		var newGroup;
		if( makeUnique === false && this.hasGroup( newGroupName ) === true ){
			newGroup = this.getGroup( newGroupName )
		}else{
			newGroup = new MM.Group( newGroupName )
			parentGroup.add( newGroup )			
		}

		// console.log('\tAdding group', newGroupName)

		return newGroup
	},
	hasGroup: function( groupName ){
		var group = this.scene.getObjectByName( groupName, true )
		if( group === undefined ){
			return false
		}else{
			return true
		}
	},
	getGroup: function( groupName ){
		return this.scene.getObjectByName( groupName, true )
	},
	removeGroup: function( groupName ){
		// console.log('GroupManager:removeGroup', groupName)

		var group = groupName
		if(! groupName instanceof MM.Group ){
			//	get the group that contains the group
			group = this.scene.getObjectByName( groupName, true )
			if( group === undefined ){
				// console.log('\tUnable to find group by name', groupName)
				return
			}
		}

		//	now remove the group
		if( group.parent !== undefined){
			group.parent.remove( group )
		}
	},
	removeGroups: function( groupNames ){
		for( var i = 0; i < groupNames.length; i++){
			this.removeGroup( groupNames[i] );
		}
	},
	addContent: function( groupName, content ){
		/*
		Description:
			Add content to the given groupName.
		Arguments:
			Groupname: can be both a string or a THREE.Group. Here a THREE.Group
			is a lot saver then using a string since we can have more then one 
			group of the given name
			Content: the content to add in the form of an array
		*/
		// console.log('GroupManager:addContent', groupName, content)
		
		//	get the group
		var group = undefined
		if( groupName instanceof MM.Group ){
			group = groupName 
		}else{
			group = this.scene.getObjectByName(groupName, true)			
		}
		if( group == undefined ){
			// console.log('\tUnable to find group', groupName)
			return 
		}
		
		//	add the content
		for( var i = 0; i < content.length; i++){			
			if( MM.containsObjectWithinArray( content[i], group.content ) === false){
				// console.log('\tadding', content[i].name, 'to', group.name, 'group')
				group.content.push( content[i])
			// }else{
			// 	console.log('\t', content[i].name, 'has already a member of', group.name, 'group')
			}
		}	
	},
	removeContent: function( groupName, content ){
		// console.log('GroupManager:removeContent', groupName, content)
		//	get the group
		var group = this.scene.getObjectByName(groupName, true)
		if( group == undefined ){
			// console.log('\tUnable to find group', groupName)
			return 
		}

		//	remove the content
		for( var i = 0; i < content.length; i++){
			var sIndex = group.content.indexOf( content[i] );
			if( sIndex !== -1 ){
				group.content.splice( sIndex, 1)
			}
		}
	},
	exportData: function(){
		console.log('MM.GroupManager.exportData')

		return this.scene.exportData()

		// console.log('\toutput',data)
	},

	importData: function( data , parent){
		// console.log('groupManager.importData', data)
		
		var thisGroup = undefined
		if( data.name === 'scene'){
			thisGroup = this.scene		
		}else{
			if( parent === undefined || parent.name === 'scene' ){
				thisGroup = this.addGroup( data.name, undefined, false)		
			}else{
				thisGroup = this.addGroup( data.name, parent.name, false)		
			}			
		}
		
		//	no way to get objects by name here :()
		var allContent = [];
		var thisObject;
		for( var i = 0, l = data.content.length; i < l; i++){
			thisObject = this.editor.scene.getObjectByName(data.content[i], true)
			if(thisObject !== undefined ){
				allContent.push( thisObject )
			}
		}
		this.addContent( thisGroup, allContent )

		for( var i = 0, l = data.children.length; i < l; i++){
			this.importData( data.children[i], thisGroup)
		}
	},

	logAllContent: function(){
	/*
		prints or logs all groups and their content
	*/
		this.scene.traverse( function(object){ 
			var intends = ''
			for( var i = 0; i < object.depth; i++){
				intends += '\t'
			}
			// console.log( intends, object.name, ': content', object.content)			
		});
	}
};