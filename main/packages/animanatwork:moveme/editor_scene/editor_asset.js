//  ASSET
//  an asset gets defined by its namespaces. All nodes that belong to the same
//  asset should have the same namespace. Example: tiny1:test is the first 
//  first instance of the tiny asset.
//  1. 3D objects
//  2. group nodes
//  3. setup nodes
MM.Editor.prototype.addAssetObject = function( assetObject ){
    // console.log('Adding assetObject', assetObject)
    // console.log('WARNING -> depricating addAssetObject, use addAsset instead')
    
    this.addAsset( assetObject )
}

MM.Editor.prototype.addAsset = function( asset ){
    console.log('Editor.addAsset', asset)

    this.assets.push( asset )
    this.signals.showInfo.dispatch('Added asset '+asset.name)
    this.signals.assetAdded.dispatch( asset )    
}

MM.Editor.prototype.getAssetByName = function( assetName ){
    // console.log('Editor: getAssetByName', assetName)
    var i,j;
    for( i = 0, j = this.assets.length; i < j; i++){
        if( this.assets[i].getAbsoluteName() === assetName ){
            console.log('\t', this.assets[i])
            return this.assets[i];
        }   
    }
    return undefined;
}

MM.Editor.prototype.getNamespaceFromAssetObjects = function(){
    var i,j;
    var result = {"none:none":"none"}
    for( i = 0, j = this.assets.length; i < j; i++){
        result[this.assets[i].getAbsoluteName()] = this.assets[i].getNamespace();
    }
    return result;
}

MM.Editor.prototype.getDescriptionFromAssetObjects = function(){
    /*
    description = short name
    */
    var i,j;
    var result = {"none:none":"none"}
    for( i = 0, j = this.assets.length; i < j; i++){
        result[this.assets[i].getAbsoluteName()] = this.assets[i].getName();
    }
    return result;
}

MM.Editor.prototype.removeAssetObject = function( assetObject ){
    // console.log('Removing assetObject', assetObject)
    
    this.signals.showInfo.dispatch('Removed asset '+asset.name)
    this.signals.assetRemoved.dispatch( assetObject )

    var i, j;
    for( i = 0, j = this.assets.length; i < j; i++){
        if( this.assets[i] === assetObject ){
            this.assets.splice(i, 1);
            break;
        }
    }        
}

MM.Editor.prototype.removeAsset = function ( object , namespace , isUndo){
    console.log('editor.removeAsset', object, namespace)

    //  Delete all of the objects that have the same namespace
    //  This assumes that all objects with the same namespace
    //  belong to the same asset. Note that currently we don't
    //  have an asset object.

    if( object === undefined && namespace === undefined ){
        console.error('At least one arguments needs to be defined')
        return 
    }

    //  extract namespace from object
    if( object !== undefined && namespace === undefined ){
        // console.log('\tobject mode')
        namespace = object.getNamespace()    
    }

    if( isUndo === undefined ){
        isUndo = false
    }

    // console.log('namespace:', namespace)

    //  now that we know both the asset and namespace get all of 
    //  the object which match that description and delete them

    //  get scene objects which match description
    var sceneObjects = this.scene.getObjectWithNamespace( namespace )
    console.log('#\tfound the following objects with namespace', namespace, sceneObjects)
    this.removeObjects( sceneObjects );

    //  get asset group elements which match description
    var groupObjects;
    groupObjects = this.groups['asset'].scene.getObjectByNamespace( namespace )
    // console.log('group objects', groupObjects)
    this.groups['asset'].removeGroups( groupObjects )

    //  get material group elements which match description
    groupObjects = this.groups['material'].scene.getObjectByNamespace( namespace )
    // console.log('group objects', groupObjects)
    this.groups['material'].removeGroups( groupObjects )

    //  get all additional setup nodes ( not sure if they are actually part 
    //  of the objects list)        
    var setup1Nodes = this.getSetupsWithNamespace( namespace,  "1")
    this.removeSetups( setup1Nodes, "1")
    
    var setup2Nodes = this.getSetupsWithNamespace( namespace,  "2")
    this.removeSetups( setup2Nodes, "2") 

    // console.log( this.scene )    
    if( isUndo === false ){
        this.getUndoDataForRemoveAsset( namespace, 'undo')
    }   
}