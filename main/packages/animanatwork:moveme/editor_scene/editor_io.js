
MM.Editor.prototype.initDrivenChannels = function(){
    // console.log('initDrivenChannels')
    //  don't like the way this is currently implemented since we first have to iterate over the entire scene to get all of the objects that need to get the properties passed on. Not very efficient as it's going to make opening a scene slow :(
    
    var drivers = this.scene.getObjectWithProperty('driveChannel') 
    // console.log('\tdrivers', drivers)

    var scope = this;
    var driven;
    _.each(drivers, function(driver){
        // console.log('\tdriveChannel', driver.driveChannel)
        driven = scope.scene.getObjectByName(driver.driveChannel.position,true)
        driver.connectChannelTo(driven, 'position');
    })
}

/*
    PTA data object (PTA - project to animation)
    {
        projectId:ZfTSugdubKFHR6jSJ,
        shotId:5YQMzMSDrtzMYkoxC,
        versionId:Ti4SH7S3i9tmKHZYP
    }
*/
MM.Editor.prototype.importPTASettings = function(data){
    // console.log('importPTASettings', data)
    this.projectObj = data;
}

MM.Editor.prototype.exportPTASettings = function(){
    // console.log('exportPTASettings')
    if(this.projectObj === undefined){
        // console.log('\tNo projectObj has been defined.', this)
        return 
    }
    this.projectObj['duration'] = this.endTime - this.startTime;
    // console.log('\tresult', this.projectObj)
    return this.projectObj;
}

MM.Editor.prototype.currentPTASettingsMatches = function(projectId, shotId, versionId){

    if(this.projectObj.projectId !== projectId){
        return false;
    }
    
    if(this.projectObj.shotId !== shotId){
        return false;
    }

    if(this.projectObj.versionId !== versionId){
        return false;
    }

    return true;
}

MM.Editor.prototype.localPTASettingsMatches = function(projectId, shotId, versionId){
    // console.log('Editor.localPTASettings')
    if ( localStorage.threejsEditor !== undefined ) {    
    //  make sure we have the necessary data
        var loader = new THREE.ObjectLoader();          

        if ( localStorage.threejsEditor === undefined ) {
            return false;
        }
        var allData = JSON.parse( localStorage.threejsEditor )


        if(! allData.hasOwnProperty('project')){
            return false;
        }
        var localProjectData = allData['project'];

    //  compare the actuall ids
        if(localProjectData.projectId !== projectId){
            return false;
        }
        
        if(localProjectData.shotId !== shotId){
            return false;
        }

        if(localProjectData.versionId !== versionId){
            return false;
        }

        return true;
    }
    return false;
}

MM.Editor.prototype.matchesPTASettings = function(data){
    //  determines is the current PTA data matches the given PTA data. This allows us to determine whether or not we've loaded the same scene.
    if( this.projectObj === undefined )
        return false

    if( this.projectObj.projectId !== data.projectId)
        return false;

    if( this.projectObj.shotId !== data.shotId)
        return false;

    if( this.projectObj.versionId !== data.versionId)
        return false;

    return true
}

MM.Editor.prototype.exportSelectables = function(){
    var data = []

    var i, j;
    for( i = 0, j = this.selectableObjects.length; i < j; i++){
        data.push(this.selectableObjects[i].name);
    }

    return data;
}

MM.Editor.prototype.importSelectables = function( data ){
    // console.log('importSelectables', data)

    var i, j;
    for( i=0, j=data.length; i < j; i++){
        var objectByName = this.scene.getObjectByName(data[i], true)
        
        if(objectByName){
            this.selectableObjects.push(objectByName)
        }
    }
}

MM.Editor.prototype.exportSceneSettings = function(){
    // console.log('editor.exportSceneSettings')

    var data = {}

//  show
    data.showGrid = this.showGrid;
    data.showJoints = this.showJoints;
    data.showControls = this.showControls;
    data.sceneBackgroundColor = this.sceneBackgroundColor.toArray();
    data.keyBackgroundColor = this.keyBackgroundColor.toArray();

//  time
    data.time = this.time
    data.startTime = this.startTime
    data.endTime = this.endTime
    data.startRange = this.startRange
    data.endRange = this.endRange

    // console.log('\tresult:', data)
    return data;
}

MM.Editor.prototype.resetSceneSettings = function(){
    // console.log('MM.Editor.resetSceneSettings')

    var data = {}
    
//  workspace
    data.showGrid = true;
    data.showJoints = true;
    data.showControls = true;
    data.sceneBackgroundColor = new THREE.Color().setRGB( 0.75, 0.75, 0.75 ).toArray();
    data.keyBackgroundColor = new THREE.Color().setRGB( 0.75, 0.75, 0.75 ).toArray();

//  animation    
    data.time = 0;
    data.startTime = 0;
    data.startRange = 0;
    data.endRange = 24;
    data.endTime = 48;

    return data;
}

MM.Editor.prototype.importSceneSettings = function( data ){
    // console.log('editor.importSceneSettings', data)    

//  show
    this.gridVisibility( data.showGrid )
    this.controlsVisibility( data.showControls )
    this.jointsVisibility( data.showJoints )
    // this.layout.layoutMode = data.layoutMode;
    // this.sceneList = data.sceneList;

    this.sceneBackgroundColor.fromArray(data.sceneBackgroundColor)
    this.keyBackgroundColor.fromArray(data.keyBackgroundColor)

//  time
    this.time = data.time;
    this.startTime = data.startTime
    this.endTime = data.endTime
    this.startRange = data.startRange
    this.endRange = data.endRange

    //  dispatch an event which will update the time line and range slide
    this.signals.timeChanged.dispatch( data.time )
}

MM.Editor.prototype.saveSceneSettings = function(){
    // console.log('Save scene settings to localStorage')
    localStorage.moveMeSceneSettings=JSON.stringify(this.exportSceneSettings());
    // console.log('localStorage', localStorage.moveMeSceneSettings)
}

MM.Editor.prototype.loadSceneSettings = function(){
    // console.log('editor.Load scene settings from localStorage')
    if(localStorage.moveMeSceneSettings !== undefined ){
        // console.log('\tloading...')
        // console.log('raw data', localStorage.moveMeSceneSettings)
        // console.log('data', JSON.parse(localStorage.moveMeSceneSettings))
        this.importSceneSettings(JSON.parse(localStorage.moveMeSceneSettings))
    }
    // console.log('after load scene settings', this.time)
}

MM.Editor.prototype.loadResetSceneSettings = function(){
    this.importSceneSettings(this.resetSceneSettings())    
}

MM.Editor.prototype.exportAssetObjects = function(){
    // console.log('exportAssetObjects')

    var data = {};
    var i, j;
    for( i = 0, j = this.assets.length; i < j; i++){
        data[this.assets[i].getNamespace()] = this.assets[i].exportData();
    }

    // console.log('\tresult', data)
    return data;
}

MM.Editor.prototype.importAssetObjects = function( data ){
    // console.log('importAssetObjects', data)

    //  reset asset list ( since we run this when loading a fresh new scene )
    this.assets = [];

    var thisAsset, assetData;
    for(assetData in data){
        //  create new instance
        thisAsset = new MM.Asset();
        
        //  import data
        thisAsset.importData( data[assetData], this.scene);

        //  add it to the scene
         this.assets.push( thisAsset );             
    }        

    //  push through a assetAdded signal
    this.signals.assetAdded.dispatch();
}

MM.Editor.prototype.importGroups = function( data ){
    // console.log('editor.importGroups')
    // for(group in this.groups){
    //     console.log('\timporting group data for', group)
    //     this.groups[group].importData( data[group]);
    // }
    // this.groups['asset'].importData( data['asset']);
    for(var group in this.groups){
        this.groups[group].importData( data[group]);
    }
    // console.log('\tresult:', this.groups)
}
MM.Editor.prototype.exportGroups = function(){
    // console.log('MM.editor.exportGroups')

    var data = {}

    for(var group in this.groups){
        // console.log('\t----------------------')
        // console.log('\texporting group', group)
        data[group] = this.groups[group].exportData();
    }

    // console.log('\toutput:',data)        

    return data
}

MM.Editor.prototype.importSetups = function( data ){
    //  here we restore connections between objects
    //  which can only happen when all objects have been created!
    // console.log('editor.importSetups', data)      

    for( var uuid in data ){
        var thisData = data[uuid]

        switch( thisData.type ){
            case "SkinnedMesh":
                /*
                    What came first, the chicken or the egg? The only reason
                    why we had to put this here is because we can't get the 
                    necessary 'bones' from the scene when the geometry is build
                    which is currently the first step in the loading process.
                    We can't really move it around since the geometry needs
                    to get assigned to an object which is why the object creation
                    currently happens after geometry.
                */

                // console.log('\tLooking for object with uuid', uuid)
                var mesh = this.scene.getObjectByUuid( uuid )
                if( mesh === undefined )
                    break;

                // console.log('\tFound', mesh)   

                var skinGeometry = mesh.geometry.clone()
                var skinMaterial = mesh.material.clone()
                skinMaterial.skinning = true;            

                //  set the bones / joints
                skinGeometry.bones = []
                for( var i = 0; i < thisData.bones.length; i++){
                    // console.log('\tinfluence', thisData.bones[i])
                    var thisInfluence = this.scene.getObjectByName(
                        thisData.bones[i], true)

                    if(thisInfluence === undefined ){
                        // console.log('Unable to find', thisData.bones[i])
                        break;
                    }
                    //  push the joint/bone onto the geometry
                    skinGeometry.bones.push( thisInfluence )
                }
                // console.log('geometry bones', skinGeometry.bones)

                skinGeometry.skinWeights = []
                skinGeometry.skinIndices = []
                for( var i = 0; i < thisData.skinWeights.length; i++){
                    // console.log('\tskinWeight', i)
                    skinGeometry.skinWeights.push( new THREE.Vector4(                             
                        thisData.skinWeights[i].x, thisData.skinWeights[i].y,
                        thisData.skinWeights[i].z, thisData.skinWeights[i].w
                    ));
                    skinGeometry.skinIndices.push( new THREE.Vector4(
                        thisData.skinIndices[i].x, thisData.skinIndices[i].y,
                        thisData.skinIndices[i].z, thisData.skinIndices[i].w
                    ))
                }

                var skinnedMesh = new THREE.SkinnedMesh( 
                    skinGeometry, skinMaterial )

                skinnedMesh.identityMatrix.fromArray( thisData.identityMatrix )
 
                skinnedMesh.name = mesh.name
                skinnedMesh.boneInverses = undefined
                skinnedMesh.updateMatrixWorld( false )

                // skinnedMesh.boneMatrices = new Float32Array( thisData.boneMatrices.length );
                // for( var i = 0; i < thisData.boneMatrices.length; i++){                        
                //     skinnedMesh.boneMatrices[i] = thisData.boneMatrices[i];
                // }
                
                this.removeObject( mesh )                    
                this.addObject( skinnedMesh )
                skinnedMesh.uuid = uuid; // set back to original uuids

                // console.log('SkinnedMesh', skinnedMesh)
            break;

            case "ParentMaster":
                var parentMaster = this.scene.getObjectByUuid( uuid, true )
                if( parentMaster === undefined ){
                    parentMaster = this.scene.getObjectByName( thisData.name , true)
                    if( parentMaster === undefined ){
                        break;
                    }
                }
                parentMaster.importSetup( this.scene, thisData );
            break;

            case "SpaceswitchSplit":
                var spaceswitchSplit = this.scene.getObjectByUuid( uuid , true)
                if( spaceswitchSplit === undefined ){
                    // console.log('Unable to find spaceswitchSplit with uuid', uuid, ', looking by name', thisData.name)
                    spaceswitchSplit = this.scene.getObjectByName( thisData.name , true)
                    if( spaceswitchSplit === undefined ){
                        break;
                    }
                }
                spaceswitchSplit.importSetup( this.scene, thisData );
            break;

            case "Spaceswitch":
                var spaceswitch = this.scene.getObjectByUuid( uuid , true)
                if( spaceswitch === undefined ){
                    // console.log('Unable to find spaceswitch with uuid', uuid, ', looking by name', thisData.name)
                    spaceswitch = this.scene.getObjectByName( thisData.name , true)
                    if( spaceswitch === undefined ){
                        break;
                    }
                }
                spaceswitch.importSetup( this.scene, thisData );
            break;

            case "Constraint":
                var constraint = this.scene.getObjectByUuid( uuid , true)
                if( constraint === undefined ){
                    // console.log('Unable to find constraint with uuid', uuid, ', looking by name', thisData.name)                        
                    constraint = this.scene.getObjectByName( thisData.name , true)
                    if( constraint === undefined ){
                        break;
                    }
                }

                // var objectToSolve = this.scene.getObjectByName( 
                //     thisData.objectToSolve , true);

                // if( objectToSolve === undefined ){
                //     // console.log('Unable to find object to solve', thisData.objectToSolve)
                //     break;
                // }

                // // console.log('constraint', constraint)
                // // console.log('objectToSolve', objectToSolve)

                // // constraint.objectToSolve = objectToSolve; 
                // constraint.setObjectToSolve( objectToSolve ); 

                constraint.importSetup(this.scene, thisData);
            break;

            case "FourBoneIkBlendSolver":
                // console.log('\tSetting up', thisData.name)

                var solver = this.scene.getObjectByUuid( uuid , true)
                if( solver === undefined ){
                    // console.log('Unable to find solver with uuid', uuid)
                    break;
                }

                solver.importSetup(this.scene, thisData)
                // console.log('SOLVER:', solver )                      
            break;

            case "TwoBoneIkBlendSolver":
                // console.log('\tSetting up', thisData.name)

                var solver = this.scene.getObjectByUuid( uuid , true)
                if( solver === undefined ){
                    // console.log('Unable to find solver with uuid', uuid)
                    break;
                }
                solver.importSetup(this.scene, thisData)                  
            break;

            case "TwoBoneSoftIkSolver":
                var solver = this.scene.getObjectByUuid( uuid , true)
                if( solver === undefined ){
                    // console.log('Unable to find solver with uuid', uuid)
                    break;
                }
                solver.importSetup(this.scene, thisData)
            break;

            case "TwoBoneIkSolver":
                // console.log('\tSetting up', thisData.name)

                var solver = this.scene.getObjectByUuid( uuid , true)
                if( solver === undefined ){
                    // console.log('Unable to find solver with uuid', uuid)
                    break;
                }
                solver.importSetup(this.scene, thisData);
            break;

            case "OneSimpleBoneIkSolver":
                // console.log('\tSetting up', thisData.name)
                // console.log('\tData', thisData)

                var solver = this.scene.getObjectByUuid( uuid , true)
                if( solver === undefined ){
                    // console.log('Unable to find OneSimpleBoneIkSolver with uuid', uuid)
                    break;
                }

                var startJoint = this.scene.getObjectByName( thisData.startJoint , true);
                // if( startJoint === undefined ){
                //     console.log('Unable to find', thisData.startJoint)
                // }
                var endJoint = this.scene.getObjectByName( thisData.endJoint , true);
                // if( endJoint === undefined ){
                //     console.log('Unable to find', thisData.endJoint)
                // }
                solver.setStartJoint( startJoint )                    
                solver.endJoint = endJoint    
                solver.startPreferedAngle.fromArray( thisData.startPreferedAngle )

                // console.log('\tSolver', solver)
            break;

            case "SplineSolver":
                // console.log('\tSetting up SplineSolver')
                // console.log('\tData:', thisData)

                var solver = new MM.SplineSolver( this )
                solver.importData( thisData )

            break;

            case "MultiChannel":
                var multi = new MM.MultiChannel();
                multi.importData( thisData , this.scene)
                this.step2Nodes.push( multi )
            break;
        }
    } 
}

MM.Editor.prototype.exportSetups = function( ){
    // console.log('editor.exportSetups')

    var data = {}
    var thisData = {}

//  WEIGHTS
    var skin = this.scene.getObjectOfInstance(THREE.SkinnedMesh)
    // console.log('skin', skin)
    for(var i = 0, j = skin.length; i < j; i++){
        thisData = {}
        // console.log('\texporting', skin[i])


        thisData.type = 'SkinnedMesh';
        thisData.name = skin[i].name;
        thisData.identityMatrix = skin[i].identityMatrix.elements;
        thisData.bones = [];

        for( var k = 0, l = skin[i].bones.length; k < l; k++){
            thisData.bones.push( skin[i].bones[k].name )
        }

        // console.log('boneMatrices:', skin[i].boneMatrices.length)
        thisData.boneMatrices = []
        for( var k = 0, l = skin[i].boneMatrices.length; k < l; k++){
            thisData.boneMatrices.push( skin[i].boneMatrices[k] )
        }   
        // console.log( 'data:', thisData.boneMatrices )
        thisData.skinWeights = skin[i].geometry.skinWeights;
        thisData.skinIndices = skin[i].geometry.skinIndices;

        //  this unique id should help us when we need to convert the
        //  existing Mesh into a SkinnedMesh
        data[ skin[i].uuid ] = thisData;
    }

//  PARENTMASTER
    var parentMaster = this.scene.getObjectOfInstance(MM.ParentMaster)
    for( var i = 0, j = parentMaster.length; i < j; i++){
        data[ parentMaster[i].uuid ] = parentMaster[i].exportSetup();
    }

//  SPACESWITCHSPLITS
    var spaceswitchSplits = this.scene.getObjectOfInstance(MM.SpaceswitchSplit)
    for( var i = 0, j = spaceswitchSplits.length; i < j; i++){
        data[ spaceswitchSplits[i].uuid ] = spaceswitchSplits[i].exportSetup();
    }

//  SPACESWITCHES
    var spaceswitch = this.scene.getObjectOfInstance(MM.Spaceswitch)
    for( var i = 0, j = spaceswitch.length; i < j; i++){
        data[ spaceswitch[i].uuid ] = spaceswitch[i].exportSetup();
    }

//  CONSTRAINTS
    var constraint = this.scene.getObjectOfInstance(MM.Constraint)
    for( var i = 0, j = constraint.length; i < j; i++){
        data[constraint[i].uuid] = constraint[i].exportSetup();
    }

//  IK SOLVERS
    var fourBoneIkBlendSolver = this.scene.getObjectOfInstance(MM.FourBoneIkBlendSolver)
    for( var i = 0, j = fourBoneIkBlendSolver.length; i < j; i++){
        data[fourBoneIkBlendSolver[i].uuid ]=fourBoneIkBlendSolver[i].exportSetup();
    }
 
    var twoBoneIkBlendSolver = this.scene.getObjectOfInstance(MM.TwoBoneIkBlendSolver)
    for( var i = 0, j = twoBoneIkBlendSolver.length; i < j; i++){
        //  make sure we do not export the same object twice
        //  this is currently the only way I know how do deal with 
        //  objects which inherit from the same prototype
        if( fourBoneIkBlendSolver.indexOf( twoBoneIkBlendSolver[i] ) !== -1 ){
            // console.log('\tskipping ', twoBoneIkBlendSolver[i].name)
            break;
        }

        data[twoBoneIkBlendSolver[i].uuid]=twoBoneIkBlendSolver[i].exportSetup();
    }        

    var twoBoneSoftIkSolver=this.scene.getObjectOfInstance(MM.TwoBoneSoftIkSolver);
    for( var i = 0, j = twoBoneSoftIkSolver.length; i < j; i++){
        if( fourBoneIkBlendSolver.indexOf( twoBoneSoftIkSolver[i] ) !== -1 ){
            // console.log('\tskipping ', twoBoneSoftIkSolver[i].name)
            break;
        }
        if( twoBoneIkBlendSolver.indexOf( twoBoneSoftIkSolver[i] ) !== -1 ){
            // console.log('\tskipping ', twoBoneSoftIkSolver[i].name)
            break;
        }

        data[twoBoneSoftIkSolver[i].uuid]=twoBoneSoftIkSolver[i].exportSetup();
    }

    var twoBoneIkSolver = this.scene.getObjectOfInstance(MM.TwoBoneIkSolver)
    for( var i = 0, j = twoBoneIkSolver.length; i < j; i++){
        //  make sure we do not export the same object twice
        //  this is currently the only way I know how do deal with 
        //  objects which inherit from the same prototype
        if( fourBoneIkBlendSolver.indexOf( twoBoneIkSolver[i] ) !== -1 ){
            // console.log('\tskipping ', twoBoneIkSolver[i].name)
            break;
        }
        if( twoBoneIkBlendSolver.indexOf( twoBoneIkSolver[i] ) !== -1 ){
            // console.log('\tskipping ', twoBoneIkSolver[i].name)
            break;
        }
        if( twoBoneSoftIkSolver.indexOf( twoBoneIkSolver[i] ) !== -1 ){
            // console.log('\tskipping ', twoBoneIkSolver[i].name)
            break;
        }

        data[twoBoneIkSolver[i].uuid]=twoBoneIkSolver[i].exportSetup();
    }

    //  solver = ikHandle
    var oneSimpleBoneIkSolver = this.scene.getObjectOfInstance(MM.OneSimpleBoneIkSolver)
    for( var i = 0, j = oneSimpleBoneIkSolver.length; i < j; i++){
        thisData = {}
        // console.log('\texporting', oneSimpleBoneIkSolver[i], 'as OneSimpleBoneIkSolver')
        thisData.type = 'OneSimpleBoneIkSolver';
        thisData.name = oneSimpleBoneIkSolver[i].name;
        thisData.startJoint = oneSimpleBoneIkSolver[i].startJoint.name
        thisData.endJoint = oneSimpleBoneIkSolver[i].endJoint.name
        thisData.startPreferedAngle = oneSimpleBoneIkSolver[i].startPreferedAngle.toArray()

        data[ oneSimpleBoneIkSolver[i].uuid ] = thisData;
    }

    //  solver does not get evaluated by itself but through its child 
    //  SplineClusters
    var splineIkSolver = this.scene.getObjectOfInstance(MM.SplineCluster, 'as SplineCluster')        
    for( var i = 0, j = splineIkSolver.length; i < j; i++){
        //  Since we have 2 controls per spline solver we need to make sure 
        //  we only export it once. That's why we only continue exporting 
        //  when we're dealing with the top control
        var thisSolver;
        if( splineIkSolver[i].mode === 'T'){
            thisData = {}
            thisSolver = splineIkSolver[i].splineSolver

            // console.log('\texporting', thisSolver)
            data[ thisSolver.uuid ] = thisSolver.exportData()
            console.log( data[ thisSolver.uuid ] )
        }
    }

//  STEP NODES
    for( var i = 0, j = this.step2Nodes.length; i < j; i++){        
        if( this.step2Nodes[i] instanceof MM.MultiChannel ){
            // console.log('\texporting MultiChannel', this.step2Nodes[i])
            data[ this.step2Nodes[i].uuid ] = this.step2Nodes[i].exportData()
        }
    }

    // console.log('\texport:', data)
    return data;
}

MM.Editor.prototype.importAnimation = function( serverFile ){
    // console.log('importAnimation', serverFile)

    var xhr;
    var scope = this;
    if (window.XMLHttpRequest) {
        xhr = new XMLHttpRequest();
    } else if (window.ActiveXObject) {
        xhr = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xhr.onreadystatechange = function(){
        if (xhr.readyState == 4){
            scope.importAnimationData(JSON.parse(xhr.responseText));
        }
    };
    xhr.open("GET",serverFile);
    xhr.send(); 
}

MM.Editor.prototype.importAnimationData = function( data ){
    /*
    Moved from menu_bar_file
    */
    // console.log('editor.importAnimationData')
    // console.log('\tdata', data)

    // console.log('data type:', data.metadata.type)
    if( data.metadata.type !== 'animation'){
        console.warn('\twrong data type, looking for animation.')
        return
    }
    
    // console.log(data.animCurves.length)
    if(!data.hasOwnProperty('animCurves')){
        console.warn('# No animation data found')
        return
    }

    var object;
    var minTime = 1000;
    var maxTime = 0;
    for( var i = 0; i < data.animCurves.length; i++){
        object = this.scene.getObjectByName(data.animCurves[i].driven, true)
        // console.log(object)
        if( object === undefined){
            console.warn('Unable to find', data.animCurves[i].driven)
            continue;
        }
        console.log('\t', i, data.animCurves[i].driven)
        console.log('\t', i, data.animCurves[i].attr)
        
        //  we should only create a new curve if it does not exist yet
        var thisAnimCurve = new MM.AnimCurve( object, data.animCurves[i].attr);
        object.addAnimCurve( thisAnimCurve );       
        this.addAnimCurve( thisAnimCurve );
        thisAnimCurve.importData( data.animCurves[i] )

    //  get time range
        var tMinTime = data.animCurves[i].t[0];
        var tMaxTime = data.animCurves[i].t[(data.animCurves[i].t.length - 1)];
        if( tMinTime < minTime ){
            minTime = tMinTime;
        }
        if( tMaxTime > maxTime ){
            maxTime = tMaxTime;
        }
    }   
    // console.log('\tstart time:', minTime)
    // console.log('\tend time:', maxTime)

    if(minTime > maxTime){
        //  no animation curves where read...
        minTime = 0;
        maxTime = 24;
    }
    
    this.startTime = minTime;         
    this.startRange = minTime;
    this.endTime = maxTime;   
    this.endRange = maxTime; 

    this.signals.showInfo.dispatch('Import all animation')
    this.signals.timeRangeChanged.dispatch();    
}

MM.Editor.prototype.exportAnimationData = function(){
    /*
    Moved from menu_bar_file
    */
    // console.log('this.exportAnimationData')

    var output = {
        metadata:{
            version: 0.1,
            type: 'animation'
        }
    };
    
    for( var i = 0; i < this.animCurves.length; i++){
        if ( output.animCurves === undefined ) {
            output.animCurves = [];
        }           
        var data = this.animCurves[i].exportData()
        output.animCurves.push( data );
    }
    
    this.signals.showInfo.dispatch('Export all animation')
    return output;
}

MM.Editor.prototype.exportPoseData = function(){
    var controls = this.scene.getObjectOfInstance(MM.Control)
    var ncontrols = controls.length

    var channelData;
    var data = {}
    for( var i = 0; i < ncontrols; i++){            
        if( controls[i].tag === 'control'){
            // console.log('\t', i, controls[i].name)
            data[controls[i].name] = controls[i].getChannelValues();                        
            // controls[i].setChannelValues( channelData );
        }
    }
    this.signals.showInfo.dispatch('Export all poses')
    return data;
}

MM.Editor.prototype.importPoseData = function(data){
    // console.log('importPoseData')
    
    var control, object;
    for( object in data ){
        // console.log('\t', object)
        control = this.scene.getObjectByName( object, true);
        if( control !== undefined ){
            control.setChannelValues( data[object] );
        }
    }
    this.signals.showInfo.dispatch('Import all poses')
}

MM.Editor.prototype.exportPose = function(){
    console.warn('exportPose is depricated. Use exportPoseData instead.')
    return this.exportPoseData();
}

MM.Editor.prototype.importPose = function( data ){
    console.warn('importPose is depricated. Use importPoseData instead.')
    this.importPoseData(data);
}