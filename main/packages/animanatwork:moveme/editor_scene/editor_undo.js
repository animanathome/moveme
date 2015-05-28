//  UNDO
MM.Editor.prototype.addToUndoStack = function( undoData , mode){
    console.log('addToUndoStack', undoData, mode)
    if( mode === undefined ){
        mode = 'undo'
    }

    switch(mode) {
        case 'undo':
            this.undoStack.push( undoData )
            if( this.undoStack.length > this.undoLimit ){
                this.undoStack.shift()
            }
            break;
        case 'redo':
            this.redoStack.push( undoData )
            if( this.redoStack.length > this.redoLimit ){
                this.redoStack.shift()
            }
            break;
        default:
            console.warn('Unknown mode:', mode)
            break;
    }
}
MM.Editor.prototype.removeLastEntryFromUndoStack = function(){
    // console.log('removeLastEntryFromUndoStack')

    this.undoStack.pop();
}
MM.Editor.prototype.removeLastEntriesFromUndoStack = function( count ){
    // console.log('removeLastEntriesFromUndoStack', count)
    for( var i = 0; i < count; i++){
        var ni = this.undoStack.length;
        // console.log('\tremoving', this.undoStack[ni-1])
        this.undoStack.pop();
    }
}
MM.Editor.prototype.flushUndoStack = function(){
    this.undoStack = []
    this.redoStack = []
}  
MM.Editor.prototype.undo = function(){
    // console.log('---------------------------------------')
    // console.log('Do undo')
    // console.log('\tdata', this.undoStack)
    // console.log('\tdata length', this.undoStack.length)

    //  every time we run an undo action we have to add a
    //  a redo action
    
    var nActions = this.undoStack.length;
    if( nActions > 0 ){
        var commandData = this.undoStack[nActions-1];            
        // console.log('\trunning undoData', commandData)

        //  commandData structure
        //  0 = action to perform
        //  1 = object to apply the action on
        //  2+ = more action related data
            
        switch(commandData[0]){
        //  OBJECTS
            case "selectObject":
                // console.log('\t\tselectObject')
            
            //  redo logic
                this.getUndoDataForSelectedObjects('redo')

            //  undo logic
                var object = commandData[1];
                this.setUndoDataForSelectedObjects( object )

                this.signals.objectChanged.dispatch( object )
            break;

            case "setTransformation":
                console.log('\t\tsetTransformation', commandData)

            //  redo logic
                this.getUndoDataForTransformingObjects('redo')

            //  undo logic
                this.setUndoDataForTransformingObjects( commandData )
                
                this.signals.objectChanged.dispatch()
            break;

            case "setValue":
                // console.log('\t\tsetValue')
                // commandData.shift() // remove the action element
                
                this.getRedoDataForObjectValueUndoData(commandData, 'redo')

                this.setUndoDataForObjectValue( commandData )
            
                this.signals.objectChanged.dispatch(object);
            break;

        //  ANIM CURVES
            case "removeKey":
                console.log('\t\tremoveKey')

                commandData.shift() // remove the action element

                this.getRedoDataFromRemoveKeyUndoData( commandData, 'redo')

                this.setUndoDataFromRemoveKey( commandData )

                this.signals.keyframeEditorChanged.dispatch()
            break;

            case "addKey":
                // console.log('\t\taddKey')
            
                commandData.shift() // remove the action element

                this.getRedoDataFromAddKeyUndoData( commandData, 'redo')

                this.setUndoDataFromAddKey( commandData )

                //  spark a full rebuild
                this.signals.keyframeEditorChanged.dispatch()
            break;

            case "setKey":
                //  NOTE: this only works on selected or active keys/tangents
                //  set key positions
                //  set tangent positions
                //  change tangent mode                    
                // console.log('\t\tsetKey')

                this.getUndoTransformDataFromSelectedKeys('redo')

                this.setUndoTransformDataToSelectedKeys( commandData[1] )
                this.signals.keyframeEditorChanged.dispatch()
            break;

            case "moveKey":
                this.getUndoTransformDataFromMovedKeys('redo')

                this.setUndoTransformDataToMovedKeys( commandData[1] )
                this.signals.keyframeEditorChanged.dispatch()
            break;

            case "selectKey":
                //  set key selections
                // console.log('\t\tselectKey')
                this.getUndoSelectionDataFromKeysForSelection('redo')

                this.setUndoSelectionDataFromKeysForSelection( commandData[1], commandData[2])
                this.signals.keyframeEditorChanged.dispatch()
            break;

            case "addAnimCurve":                
                commandData.shift() // remove the action element
                // console.log('\t\taddAnimCurve', commandData[0])
                this.getUndoDataFromRemoveAnimCurve( commandData[0], 'redo')

                this.setUndoDataFromAddAnimCurve( commandData[0] )

                //  running object select here as that the only event I found
                //  which actually redraws the entire UI
                console.log('\trefesh keyframe editor')
                // this.signals.keyframeEditorChanged.dispatch()
                this.signals.objectSelected.dispatch( this.selected )
            break;

            case "removeAnimCurve":
                commandData.shift() // remove the action elements                    
                // console.log('\t\tremoveAnimCurve', commandData[0])
                this.getUndoDataFromAddAnimCurve( commandData[0], 'redo')

                this.setUndoDataFromRemoveAnimCurve( commandData[0] )
                
                //  running object select here as that the only event I found
                //  which actually redraws the entire UI
                console.log('\trefesh keyframe editor')
                // this.signals.keyframeEditorChanged.dispatch()
                this.signals.objectSelected.dispatch( this.selected )
            break;

            case "addAsset":                    
                commandData.shift() // remove the action elements 
                // console.log('\t\taddAsset', commandData[0])

                this.getUndoDataForRemoveAsset( commandData[0], 'redo')

                this.setUndoDataForAddAsset( commandData[0] )
            break;      

            case "deleteAsset":
                commandData.shift() // remove the action elements 
                // console.log('\t\tdeleteAsset', commandData[0])

                this.getUndoDataForAddAsset( commandData[0] , 'redo')

                this.setUndoDataForRemoveAsset( commandData[0] )
            break;                
        }
                    
        this.undoStack.pop();
        // console.log('removing one from list, new length', editor.undoStack.length)
    // }else{
    //     console.log('\tNo actions to undo.')
    }
    this.signals.showInfo.dispatch('Undo')
}
MM.Editor.prototype.redo = function(){
    // console.log('---------------------------------------')
    // console.log('Do redo')
    // console.log('\tdata', editor.redoStack)
    // console.log('\tdata length', editor.redoStack.length)

    //  every time we run an redo action we have to add a
    //  a undo action
    
    var nActions = this.redoStack.length;
    if( nActions > 0 ){
        var commandData = this.redoStack[nActions-1];            
        console.log('\trunning redoData', commandData)

        switch(commandData[0]){
        //  OBJECTS
            case "selectObject":
                // console.log('\t\tselectObject')
                commandData.shift() // remove the action element

            //  redo logic
                this.getUndoDataForSelectedObjects('undo')

            //  undo logic
                var object = commandData[0];
                this.setUndoDataForSelectedObjects( object )

            //  refresh
                this.signals.objectChanged.dispatch( object )
            break;

            case "setTransformation":
                // console.log('\t\tsetTransformation')

            //  redo logic
                this.getUndoDataForTransformingObjects('undo')

            //  undo logic
                this.setUndoDataForTransformingObjects( commandData )
                
                this.signals.objectChanged.dispatch()
            break;

            case "setValue":
                // console.log('\t\tsetValue') 
                // commandData.shift() // remove the action element                   
                this.getRedoDataForObjectValueUndoData(commandData, 'undo')
                
                this.setUndoDataForObjectValue( commandData )

                this.signals.objectChanged.dispatch(object);
            break;

      //  ANIM CURVES
            case "removeKey":
                // console.log('\t\tremoveKey')
                commandData.shift() // remove the action element
                this.getRedoDataFromRemoveKeyUndoData( commandData, 'undo')

                this.setUndoDataFromRemoveKey( commandData )

                this.signals.keyframeEditorChanged.dispatch()
            break;

            case "addKey":
                // console.log('\t\taddKey')            
                commandData.shift() // remove the action element
                this.getRedoDataFromAddKeyUndoData( commandData, 'undo')

                this.setUndoDataFromAddKey( commandData )

                //  spark a full rebuild
                this.signals.keyframeEditorChanged.dispatch()
            break;

            case "setKey":
                //  set key positions
                //  set tangent positions
                //  change tangent mode                    
                // console.log('\t\tsetKey')

                this.getUndoTransformDataFromSelectedKeys('undo')

                this.setUndoTransformDataToSelectedKeys( commandData[1] )
                this.signals.keyframeEditorChanged.dispatch()
            break;

            case "moveKey":
                this.getUndoTransformDataFromMovedKeys('undo')

                this.setUndoTransformDataToMovedKeys( commandData[1] )
                this.signals.keyframeEditorChanged.dispatch()
            break;

            case "selectKey":
                //  set key selections
                // console.log('\t\tselectKey')
                this.getUndoSelectionDataFromKeysForSelection('undo')

                this.setUndoSelectionDataFromKeysForSelection( commandData[1], commandData[2] )
                this.signals.keyframeEditorChanged.dispatch()
            break;   

            case "addAnimCurve":
                console.log('\t\taddAnimCurve', commandData[1])

                commandData.shift() // remove the action element

                this.getUndoDataFromRemoveAnimCurve( commandData[0], 'undo')

                this.setUndoDataFromAddAnimCurve( commandData[0] )

                //  running object select here as that the only event I found
                //  which actually redraws the entire UI
                this.signals.objectSelected.dispatch( this.selected )
            break;

            case "removeAnimCurve":
                // console.log('\t\tremoveAnimCurve', commandData[1])
                commandData.shift() // remove the action elements                    
                
                this.getUndoDataFromAddAnimCurve( commandData[0], 'undo')

                this.setUndoDataFromRemoveAnimCurve( commandData[0] )
                
                //  running object select here as that the only event I found
                //  which actually redraws the entire UI
                this.signals.objectSelected.dispatch( this.selected )
            break;

            case "addAsset":                    
                commandData.shift() // remove the action elements 
                // console.log('\t\taddAsset', commandData[0])

                this.getUndoDataForRemoveAsset( commandData[0], 'undo')

                this.setUndoDataForAddAsset( commandData[0] )
            break;      

            case "deleteAsset":
                commandData.shift() // remove the action elements 
                // console.log('\t\tdeleteAsset', commandData[0])

                this.getUndoDataForAddAsset( commandData[0] , 'undo')

                this.setUndoDataForRemoveAsset( commandData[0] )
            break;    
        }
        this.redoStack.pop();
        // console.log('removing one from list, new length', editor.redoStack.length)
    }
    this.signals.showInfo.dispatch('Redo')
}

   //  OBJECT3D UNDO
    //  selection
MM.Editor.prototype.getUndoDataForSelectedObjects = function( mode ){
    console.log('getUndoDataForSelectedObjects', mode)
    
    if( mode === undefined ){
        mode = 'undo'
    }

    var thisSelection = [];
    var i, j;
    for( i = 0, j = this.selectedObjects.length; i < j; i++){
        console.log('\tAdding', this.selectedObjects[i])
        thisSelection.push(this.selectedObjects[i])
    }

    var thisData = ['selectObject', thisSelection]
    this.addToUndoStack( thisData , mode);
}

 MM.Editor.prototype.setUndoDataForSelectedObjects = function( undoData ){
    console.log('setUndoDataForSelectedObjects', undoData )

    var object = undoData
    if( object === null ){
        this.deselect( true )
    }else{
        this.select( object , true)
    }
}

//  set channel value
MM.Editor.prototype.getUndoDataForObjectValue = function( object, channelGroup, channel ){ 
    // console.log('getUndoDataForObjectValue', object, channelGroup, channel)

    var i, j;
    var thisChannelGroup;
    var values = [];        
    for( i = 0, j = this.selectedObjects.length; i < j; i++){
        thisChannelGroup = this.selectedObjects[i][channelGroup]
        values.push(thisChannelGroup[channel]);
    }

    var undoInfo = ["setValue", this.selectedObjects, channelGroup, channel, values]
    
    this.addToUndoStack( undoInfo , 'undo')
}
 
 MM.Editor.prototype.getRedoDataForObjectValueUndoData = function( undoData , mode){
    // console.log('getRedoDataForObjectValueUndoData', undoData, mode)

    if( mode === undefined ){
        mode = 'undo'
    }

    var objects = undoData[1];
    var channelGroup = undoData[2];
    var channel = undoData[3];

    var thisChannelGroup;
    var values = [];
    var i, j;
    for( i = 0, j = this.selectedObjects.length; i < j; i++){
        thisChannelGroup = objects[i][channelGroup]
        values.push(thisChannelGroup[channel]);
    }

    var undoInfo = ["setValue", objects, channelGroup, channel, values]
    this.addToUndoStack( undoInfo , mode )
}

 MM.Editor.prototype.setUndoDataForObjectValue = function( undoData ){
    // console.log('setUndoDataForObjectValue', undoData )

    var objects = undoData[1];
    var channelGroup = undoData[2];
    var channel = undoData[3];
    var values = undoData[4];

    // console.log('\tobjects', objects)
    // console.log('\tchannelGroup', channelGroup)
    // console.log('\tchannel', channel)
    // console.log('\tvalues', values)

    var i, j;
    var thisChannelGroup;        

    for(i = 0, j = objects.length; i < j; i++){
        thisChannelGroup = objects[i][channelGroup]
        thisChannelGroup[channel] = values[i];
    }


    // console.log('\t\tresult', thisChannelGroup)
}

//  transformation
MM.Editor.prototype.getUndoDataForTransformingObjects = function( mode ){
    if( mode === undefined ){
        mode = 'undo'
    }
    // console.log('getUndoDataForTransformingObjects', mode)

    var i, j;        
    var transformData = []
    var thisData = ['setTransformation', this.selectedObjects]        
    for( i = 0, j = this.selectedObjects.length; i < j; i++){            
        transformData.push([this.selectedObjects[i].getTransformationData()])        
    }
    this.addToUndoStack( thisData.concat( transformData), mode )
}

MM.Editor.prototype.setUndoDataForTransformingObjects =function( undoData ){
    // console.log('setUndoDataForTransformingObjects', undoData)

    var i, j;
    var objects = undoData[1]
    var transData = undoData[2]

    for(i = 0, j = objects.length; i < j; i++){
        console.log('\t\t', objects[i])
        objects[i].setTransformationData( transData[i] )
    }
}

//  add animCurve
MM.Editor.prototype.getUndoDataFromAddAnimCurve = function( animCurves, mode ){
    // console.log('getUndoDataFromRemoveAnimCurve', animCurve, mode)

    this.addToUndoStack( ['addAnimCurve', animCurves] , mode)
}

 MM.Editor.prototype.setUndoDataFromAddAnimCurve = function( undoData ){
    // console.log('setUndoDataFromRemoveAnimCurve', undoData)

    //  undo the added animCurve ( this means removing one )
    var i, j;
    for( i = 0, j = undoData.length; i < j; i++){
        this.removeAnimCurve( undoData[i], true)
        undoData[i].driven.removeAnimCurve( undoData[i] )
    }    
}

//  remove animCurve
MM.Editor.prototype.getUndoDataFromRemoveAnimCurve = function( animCurves, mode ){
    // console.log('getUndoDataFromRemoveAnimCurve', animCurve, mode)

    this.addToUndoStack( ['removeAnimCurve', animCurves] , mode)
}

MM.Editor.prototype.setUndoDataFromRemoveAnimCurve = function( undoData ){
    // console.log('setUndoDataFromRemoveAnimCurve', undoData)

    //  undo the remove animCurve ( this means adding one )
    var i, j;
    for( i = 0, j = undoData.length; i < j; i++){
        this.addAnimCurve( undoData[i] , true)

        undoData[i].driven.addAnimCurve( undoData[i] )
    }
}

//  remove key
MM.Editor.prototype.getUndoDataFromRemoveKey = function( animCurves, indices, mode ){
    // console.log('getUndoDataFromRemovedKey', animCurves, indices, mode)
    
    if( mode === undefined ){
        mode = 'undo'
    }

    var keyData = [];
    var i, j, k, l;
    for( i = 0, j = animCurves.length; i < j; i++){
        var tKeyData = []
        for( k = 0, l = indices[i].length; k < l; k++){
            tKeyData.push(animCurves[i].getTransformDataFromIndex(indices[i][k]))
        }        
        keyData.push(tKeyData);
    }

    this.addToUndoStack(['removeKey', animCurves, keyData], mode );
}
MM.Editor.prototype.getRedoDataFromRemoveKeyUndoData = function( undoData, mode){
    // console.log('getRedoDataFromRemoveKeyUndoData', undoData, mode)    
    
    if( mode === undefined ){
        mode = 'undo'
    }
    //  remove the added key
    var animCurves = undoData[0]
    var time = undoData[1]

    this.getUndoDataFromAddKey( animCurves, time, mode)
}

MM.Editor.prototype.setUndoDataFromRemoveKey = function( undoData ){
    // console.log('setUndoDataFromRemoveKey', undoData)

    //  add the removed key
    var animCurves = undoData[0];
    var keyData = undoData[1];

    var i, j, k, l;
    for( i = 0, j = animCurves.length; i < j; i++){
        for( k = 0, l = keyData[i].length; k < l; k++){
            animCurves[i].addFromList(keyData[i][k])
        }
    }
}

//  add key
MM.Editor.prototype.getUndoDataFromAddKey = function( animCurves, time, mode ){
    // console.log('getUndoDataFromAddKey', animCurves, time, mode)
    if( mode === undefined ){
        mode = 'undo'
    }

    var undoInfo = ['addKey', animCurves, time]
    this.addToUndoStack( undoInfo , mode);
}

MM.Editor.prototype.getRedoDataFromAddKeyUndoData = function( undoData, mode ){
    // console.log('getRedoDataFromAddKeyUndoData', undoData, mode)
    if( mode === undefined ){
        mode = 'undo'
    }

    //  add the removed key
    var animCurves = undoData[0]
    var keyData = undoData[1]

    var indices = [];
    var i, j, k, l;
    for( i = 0, j = animCurves.length; i < j; i++){
        var tIndices = []
        for( k = 0, l = keyData[i].length; k < l; k++){
            tIndices.push([animCurves[i].getIndexAtTime(keyData[i][k][0])]);
        }
        indices.push(tIndices)
    }

    this.getUndoDataFromRemoveKey( animCurves, indices, mode );
}

MM.Editor.prototype.setUndoDataFromAddKey = function( undoData ){
    // console.log('setUndoDataFromAddKey', undoData)

    //  remove the added key
    var animCurves = undoData[0];
    var keyData = undoData[1];

    var i, j, k, l;
    for( i = 0, j = animCurves.length; i < j; i++){
        for( k = 0, l = keyData[i].length; k < l; k++){
            animCurves[i].removeKeyAtTime(keyData[i][k][0]);
        }
    }
}

MM.Editor.prototype.getUndoTransformDataFromSelectedKeys = function( mode ){
    /*    
    Get undo move data for keyframes

    Data format:
    data = {
        animCurve1: [            
              [0, [0, 0, 2, 2, -2, 0, 2, 0, false, true]]
            , [1, [1, 0, 2, 2, -2, 0, 2, 0, false, true]]
            , [2, [2, 0, 2, 2, -2, 0, 2, 0, false, true]]
        ],
        animCurve2: [            
              [0, [0, 0, 2, 2, -2, 0, 2, 0, false, true]]
            , [1, [1, 0, 2, 2, -2, 0, 2, 0, false, true]]
            , [2, [2, 0, 2, 2, -2, 0, 2, 0, false, true]]
        ]
    }
    */
    
    if( mode === undefined ){
        mode = 'undo'
    }

    var count = 0;
    var thisData = {};
    var thisCurve, lData, theseIndices, ni;
    for(var i = 0; i < this.selectedAnimCurves.length; i++){
        //  Add an entry for the current animation curve
        thisCurve = this.selectedAnimCurves[i];
        thisData[thisCurve.name] = [];

        // Collect data for each selected key/tangent
        theseIndices = thisCurve.getSelectedKeysAndTangents()
        ni = theseIndices.length;
        lData = []
        for(var j = 0; j < ni; j++){
            lData.push( [
                theseIndices[j], 
                thisCurve.getTransformDataFromIndex(theseIndices[j])
                ])
        }

        // Associate the data with the animation curve
        thisData[thisCurve.name] = lData;
    }

    this.addToUndoStack(['setKey', thisData], mode)

    return count;
}

MM.Editor.prototype.setUndoTransformDataToSelectedKeys = function( keyData ){
    // console.log('setUndoTransformDataToSelectedKeys', keyData)
    var curve, tCurve, nde, i;
    for(curve in keyData){
        // number of data entries
        nde = keyData[curve].length; 
        
        //  get the curve
        tCurve = this.getAnimCurveByName(curve)

        //  set the data
        for(i=0; i < nde; i++){
            console.log('\t', keyData[curve][i][0], keyData[curve][i][1])
            tCurve.setTransformDataToIndex( keyData[curve][i][0], keyData[curve][i][1] );  
        }
    }
}

MM.Editor.prototype.getUndoTransformDataFromMovedKeys = function( mode ){
    /*    
    Get undo move data for keyframes

    Data format:
    data = {
        animCurve1: [            
              [0, [0, 0, 2, 2, -2, 0, 2, 0, false, true]]
            , [1, [1, 0, 2, 2, -2, 0, 2, 0, false, true]]
            , [2, [2, 0, 2, 2, -2, 0, 2, 0, false, true]]
        ],
        animCurve2: [            
              [0, [0, 0, 2, 2, -2, 0, 2, 0, false, true]]
            , [1, [1, 0, 2, 2, -2, 0, 2, 0, false, true]]
            , [2, [2, 0, 2, 2, -2, 0, 2, 0, false, true]]
        ]
    }
    */
    
    if( mode === undefined ){
        mode = 'undo'
    }

    var count = 0;
    var thisData = {};
    var thisCurve, lData, theseIndices, ni;
    for(var i = 0; i < this.selectedAnimCurves.length; i++){
        //  Add an entry for the current animation curve
        thisCurve = this.selectedAnimCurves[i];
        thisData[thisCurve.name] = [];

        // Collect data for each selected key/tangent
        ni = thisCurve.getNumberOfKeys();
        lData = [];
        for(var j = 0; j < ni; j++){
            lData.push( [j, thisCurve.getTransformDataFromIndex(j)])
        }

        // Associate the data with the animation curve
        thisData[thisCurve.name] = lData;
    }

    this.addToUndoStack(['moveKey', thisData], mode)

    return count;
}

MM.Editor.prototype.setUndoTransformDataToMovedKeys = function( keyData ){
    // console.log('setUndoTransformDataToSelectedKeys', keyData)
    var curve, tCurve, nde, i;
    for(curve in keyData){
        // number of data entries
        nde = keyData[curve].length; 
        
        //  get the curve
        tCurve = this.getAnimCurveByName(curve)

        //  set the data
        for(i=0; i < nde; i++){
            console.log('\t', keyData[curve][i][0], keyData[curve][i][1])
            tCurve.setTransformDataToIndex( keyData[curve][i][0], keyData[curve][i][1] );  
        }
    }
}

//  OLD
//  move keys and tangents
// MM.Editor.prototype.getUndoTransformDataFromSelectedKeys = function( mode ){
//     // console.log('getUndoTransformDataFromSelectedKeys')

//     /*
//     Get undo move data for keyframes
//     */

//     if( mode === undefined ){
//         mode = 'undo'
//     }

//     var count = 0;
//     var thisCurve, thisData, theseIndices, ni;
//     for(var i = 0; i < this.selectedAnimCurves.length; i++){
//         thisCurve = this.selectedAnimCurves[i];
//         theseIndices = thisCurve.getSelectedKeysAndTangents()
//         ni = theseIndices.length;
//         for(var j = 0; j < ni; j++){                
//             //  animCurve, index, time value, value value                                             
//             thisData = ['setKey', thisCurve, theseIndices[j]]
//             this.addToUndoStack( thisData.concat(
//                 thisCurve.getTransformDataFromIndex(theseIndices[j])), 
//                 mode )                
//         }
//     }
//     return count;
// }

// MM.Editor.prototype.setUndoTransformDataToSelectedKeys = function( keyData ){
//     // console.log('setUndoTransformDataToSelectedKeys', keyData)

//     var animCurve = keyData[1];
//     var index = keyData[2];       

//     //  remove extra elements so it fits the keyData format
//     //  remove the first 3 elements - action, curve and index
//     keyData.splice(0, 1);
//     keyData.splice(0, 1);
//     keyData.splice(0, 1);

//     animCurve.setTransformDataToIndex( index, keyData );        
// }

//  OLD
//  select keys and tangents
// MM.Editor.prototype.getUndoSelectionDataFromKeysForSelection = function( mode ){
//     // console.log('getUndoSelectionDataFromKeysForSelection')

//     if( mode === undefined ){
//         mode = 'undo'
//     }

//     var count = 0;
//     var thisCurve, thisData, selectedIndices, nsi;
//     for(var i = 0; i < this.selectedAnimCurves.length; i++){
//         thisCurve = this.selectedAnimCurves[i];
//         thisData = ['selectKey', thisCurve]                
//         this.addToUndoStack( thisData.concat( 
//                 thisCurve.getSelectionData()),
//                 mode)
//         count += 1;            
//     }
//     return count;
// }

// MM.Editor.prototype.setUndoSelectionDataFromKeysForSelection = function( keyData ){
//     // console.log('setUndoSelectionDataFromKeysForSelection', keyData)        
    
//     var animCurve = keyData[1];

//     //  remove extra elements so it fits the keyData format
//     //  remove the first 2 elements - action and curve
//     keyData.splice(0, 1);
//     keyData.splice(0, 1);

//     animCurve.setSelectionData( keyData );
// }  

MM.Editor.prototype.getUndoSelectionDataFromKeysForSelection = function( mode ){
    // console.log('getUndoSelectionDataFromKeysForSelection')

    if( mode === undefined ){
        mode = 'undo'
    }

    var count = 0; var tCurve; var tData = []; var tCurves = [];
    for(var i = 0; i < this.selectedAnimCurves.length; i++){
        tCurve = this.selectedAnimCurves[i];        
        
        tCurves.push( tCurve )
        tData.push( tCurve.getSelectionData() )
        
        count += 1;            
    }

    this.addToUndoStack( ['selectKey', tCurves, tData], mode)

    return count;
}

MM.Editor.prototype.setUndoSelectionDataFromKeysForSelection = function( animCurves, selectionData ){
    // console.log('setUndoSelectionDataFromKeysForSelection', animCurves, selectionData)
    var i, j;
    for( i = 0, j = animCurves.length; i < j; i++){
        animCurves[i].setSelectionData( selectionData[i] );
    }
}

MM.Editor.prototype.getUndoDataForAddAsset = function( asset, mode ){
    // console.log('getUndoDataForAddAsset', asset, mode)   
    if( asset.slice(-1) === ':'){
        asset = asset.slice(0, asset.length-1)
    }
    
    var undoInfo = ["addAsset", asset]
    this.addToUndoStack( undoInfo, mode )
}

MM.Editor.prototype.setUndoDataForAddAsset = function( undoData ){
    // console.log('setUndoDataForAddAsset', undoData)

    //  undo the addition of the asset
    //  we can easily do that by removing the asset
    this.removeAsset( undefined, undoData, true)
    this.deselect( true )
}

MM.Editor.prototype.getUndoDataForRemoveAsset = function( asset, mode ){
    // console.log('getUndoDataForRemoveAsset', mode)

    if( asset.slice(-1) === ':'){
        asset = asset.slice(0, asset.length-1)
    }

    var undoInfo = ["deleteAsset", asset]
    this.addToUndoStack( undoInfo, mode )
}

MM.Editor.prototype.setUndoDataForRemoveAsset = function( undoData ){
    // console.log('setUndoDataForRemoveAsset', undoData)

    //  this is based on the convention where the name of the 
    //  asset is used to set the following:
    //  1. namespace for all asset objects ( cube:main for cube )
    //  2. name for the creation function ( insertCube for cube )
    var assetFunction = 'insert'+undoData.slice(0,1).toUpperCase()
    assetFunction +=undoData.slice(1,undoData.length)+'(this)'
    console.log('assetFunction', assetFunction)
    eval( assetFunction )
}