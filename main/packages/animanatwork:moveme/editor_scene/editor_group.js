MM.Editor.prototype.addGroup = function ( groupName , groupType, silent ){
    /*
    Description:
        Add a group of the given name to the given type. Currently we have 4 
        different group types: asset, material, light and camera.
        NOTE: this method can be run silent so it doesn't requist any GUI
        related updates.

    Arguments:
        groupName: string
        groupType: string
        silent: boolean
    */
    if( groupType === undefined )
        groupType = 'asset'

    if( silent === undefined )
        silent = false

    //  add the group    
    var addedGroup = this.groups[groupType].addGroup( groupName )

    if( ! silent === true ){
        this.signals.groupAdded.dispatch( addedGroup )
        this.signals.showInfo.dispatch('Added group '+groupName)
    }

    return addedGroup
}

MM.Editor.prototype.addGroupContent = function( groupName, content, groupType, silent ){
    /*

    */
    // console.log('Editor.addGroupContent', groupName, content)

    if( groupType === undefined )
        groupType = 'asset'

    if( silent === undefined )
        silent = false
    
    this.groups[groupType].addContent( groupName, content )

    if( ! silent === true ){
        this.signals.groupContentAdded.dispatch( groupName )
    }
}

