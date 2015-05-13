MM.Editor.prototype.setTime = function( time ){
    //  set the time and evaluate the scene at this new time
    this.time = time
    this.signals.timeChanged.dispatch()

    this.signals.showInfo.dispatch(('Move to '+ this.time))
}

MM.Editor.prototype.shiftTime = function( time ){
    //  shift the time and DON'T evaluate the scene at this new time
    this.time = time;

    this.signals.timeShifted.dispatch();
    
    this.signals.showInfo.dispatch(('Shift to '+ this.time))
}

MM.Editor.prototype.play = function(){
    // console.log('MM.Editor.play');
    if(this.isPlaying === true ){
        this.isPlaying = false;
        this.clock.stop();
        this.timeAsDouble = this.time;
        this.signals.showInfo.dispatch('Stop playing')
    }else{
        this.isPlaying = true;
        this.clock.start();
        this.timeAsDouble = this.time;
        this.signals.showInfo.dispatch('Start playing')
    }
    this.signals.play.dispatch();
    return this;
}

MM.Editor.prototype.nextFrame = function(){
    this.setTime(this.time + 1);    

    this.signals.showInfo.dispatch('Move to next frame')
    return this;
}

MM.Editor.prototype.previousFrame = function(){
    this.setTime(this.time - 1);
    
    this.signals.showInfo.dispatch('Move to previous frame')
    return this;    
}

MM.Editor.prototype.startFrame = function(){
    this.setTime(this.startRange);    
    
    this.signals.showInfo.dispatch('Move to start frame')
    return this;
}

MM.Editor.prototype.endFrame = function(){
    this.setTime(this.endRange);

    this.signals.showInfo.dispatch('Move to end frame')
    return this;
}

MM.Editor.prototype.animate = function(){   
    //  if we are playing
    //  1. define time
    //  2. evaluate all animation curves at time
    // console.log('MM.Editor.animate')
    // console.log('\trange', this.startRange, this.endRange)

    if( this.isPlaying ){ 
        var timeOffset;

        // fixed fps or play at set fixed speed
        if( this.playbackMode === 'fixed'){
            var cd = this.clock.getDelta();       
            var ed = 1.0 / this.playbackSpeed;
            var offset = cd / ed;

            this._fps = ((1/cd)*offset).toFixed(1);

            this.timeAsDouble += offset;
        
        //  free or play every frame as fast as possible
        }else{
            this.timeAsDouble += 1;
            this._fps = (1/this.clock.getDelta()).toFixed(1);
        }

        if( this.timeAsDouble > this.endRange ){
            this.timeAsDouble = this.startRange;
        }

        this.time = Math.round(this.timeAsDouble)

        // console.log('play', this.time)

        //  let eveyone know who's listening that time has changed
        this.signals.timeChanged.dispatch();
    }else{
        var totalTime = this.time;
    } 
}

MM.Editor.prototype.evaluateScene = function( evalAnim ){
    if( evalAnim === undefined ){
        evalAnim = false;
    }

    //  evaluate all animation curves
    if( evalAnim ){
        this.scene.updateAnimation( this.time )
    }
    
    // console.log('MM.Editor.animate')
    for( var i = 0, l = this.step1Nodes.length; i < l; i++){
        this.step1Nodes[i].update()
    }

    for( var i = 0, l = this.step2Nodes.length; i < l; i++){
        this.step2Nodes[i].update()
    }

    //  update the state of the viewport
    this.scene.updateMatrixWorld();
    this.scene.updateMatrixWorld();
    this.scene.updateMatrixWorld();
}

MM.Editor.prototype.getAnimCurveByName = function(name){
    console.log('getAnimCurveByName', name)
    var nc = this.animCurves.length;
    var i;
    for( i = 0; i < nc; i++){        
        if(this.animCurves[i].name === name ){
            console.log('\t', this.animCurves[i].name, 'matches')
            return this.animCurves[i];
        }
    }
    console.log('\tUnable to find animation curve by name', name)
}

MM.Editor.prototype.setTimeValueFromSelectedAnimcurves = function(){
    // console.log('MM.Editor.setTimeValueFromSelectedAnimcurves')

    var i, j;
    var timeValues = []
    for( i = 0, j = this.selectedAnimCurves.length; i < j; i++){
        MM.extendArrayWithArray( timeValues, this.selectedAnimCurves[i].t);        
    }
    this.activeTimeValue =  _.uniq(timeValues)
}

MM.Editor.prototype.toggleAutoKey = function(){
    if(this.autoKey){
        this.setAutoKey(false);
    }else{
        this.setAutoKey(true);
    }
}

MM.Editor.prototype.setAutoKey = function( value ){
    // console.log('setAutoKey', value)

    this.autoKey = value;    
    this.signals.keyAuto.dispatch();

    if(this.autoKey){
        this.signals.showInfo.dispatch('Setting autoKey on')
    }else{
        this.signals.showInfo.dispatch('Setting autoKey off')
    }
}

MM.Editor.prototype.autoKeySelectedObjects = function (){
    // console.log('autoKeySelectedObjects')

    //  Automatically add a or update the key at the current time for the selected object if the value has changed.
    if( ! this.autoKey )
        return

    var i, j;
    var addedKeys = false;
    for( i = 0, j = this.selectedObjects.length; i < j; i++){
        if(this.selectedObjects[i].keyAnimated( 
            this.time, 
            this.defaultTangentType, 
            this.defaultTangentType 
        )){
            addedKeys = true;
        }
    }
    // if(addedKeys){
    //     //  update interface
    // }
}

MM.Editor.prototype.hasKeysOrTangentsSelected = function(){
    var nAnims = this.selectedAnimCurves.length;
    if( nAnims === 0 ){
        return false;
    }

    var i; 
    for(i = 0; i < nAnims; i++){
        if( this.selectedAnimCurves[i].hasSelection() === true ){
            return true;
        }
        if( this.selectedAnimCurves[i].hasTangentSelection() === true ){
            return true;
        }
    }

    return false;
}

MM.Editor.prototype.keyObjects = function( objectList ){
    // console.log('editor: keyObjects', objectList)

    var i,j,k,l,foundItem, addedAnimCurves;
    var skipList = [];
    for(i = 0, j = objectList.length; i < j; i++){
        foundItem = this.scene.getObjectByName( objectList[i], true );
        if( foundItem !== undefined ){
            //  key current object
            addedAnimCurves = foundItem.keyAll( this.time, 
                this.defaultTangentType, this.defaultTangentType, skipList );

            //  if animation curves where created in the process, add them 
            //  to the scene
            for( k = 0, l = addedAnimCurves.length; k < l; k++){
                this.addAnimCurve( addedAnimCurves[k] )
            }
        }
    }

    this.signals.objectSelected.dispatch()
}

MM.Editor.prototype.keySelectedObjectsChannels = function(channels){
    console.log('Editor.keySelectedObjectsChannels', channels)

    if( this.selectedObjects.length === 0 ){
        console.log('\tNo selected objects. Skipping...')
        return
    }

    var i, j, k, l;
    var allAddedAnimCurves = [];
    for( i = 0, j = this.selectedObjects.length; i < j; i++){
        
        var addedAnimCurves=[];
        for( k = 0, l = channels.length; k < l; k++){
             var thisAnimCurve = this.selectedObjects[i].keyChannel( 
                this.time, 
                this.defaultTangentType, 
                this.defaultTangentType, 
                channels[k][0], 
                channels[k][1]
            );
            if(thisAnimCurve){
                addedAnimCurves.push(thisAnimCurve);
            }
        }

        for( k = 0, l = addedAnimCurves.length; k < l; k++){
            this.addAnimCurve( addedAnimCurves[k] )

            allAddedAnimCurves.push(addedAnimCurves[k])
        }
    }

    this.displayAnimCurves()
    this.signals.objectSelected.dispatch()
    //  object selected needs to trigger key view redraw
    //  
    return allAddedAnimCurves;
}

MM.Editor.prototype.clearSelectedObjectsChannels = function( channels){
    console.log('clearSelectedObjectsChannels', channels)

    if( this.selectedObjects.length === 0 ){
        console.log('\tNo selected objects. Skipping...')
        return
    }

    var i, j, k, l;
    for( i = 0, j = this.selectedObjects.length; i < j; i++){
        for( k = 0, l = channels.length; k < l; k++){
            var animCurve = this.selectedObjects[i].getAnimCurveFromChannel(channels[k])
            if(!animCurve){
                console.log('No animCurve found for', channels[k])
            }
            this.removeDisplayAnimCurves([animCurve])
            this.removeAnimCurve(animCurve)
        }
    }
    this.displayAnimCurves()
    this.signals.objectSelected.dispatch()
}

MM.Editor.prototype.keySelectedObjects = function (skipList){
    console.log('editor: keySelectedObjects')
    
    if( this.selectedObjects.length === 0 ){
        console.log('\tNo selected objects. Skipping...')
        return
    }

    var i, j, k, l;
    var addedAnimCurves;
    var allAddedAnimCurves = [];
    var allAnimCurves = [];
    var undoKeyData = [];
    for( i = 0, j = this.selectedObjects.length; i < j; i++){
        addedAnimCurves = this.selectedObjects[i].keyAll( this.time, 
            this.defaultTangentType, this.defaultTangentType, 
            skipList );

        for( k = 0, l = addedAnimCurves.length; k < l; k++){
            this.addAnimCurve( addedAnimCurves[k], true)

            //  keep a seperate list for the undo command since we want to be able to undo the creation of all animCurves in one go 
            allAddedAnimCurves.push( addedAnimCurves[k])
        }

        //  collect all of the anim curves we created a key for
        Array.prototype.push.apply(allAnimCurves, this.selectedObjects[i].animCurves)
        for( k = 0, l = this.selectedObjects[i].animCurves.length; k < l; k++){
            undoKeyData.push([[this.time]])
        }
        
    }

    //  undo set key command
    this.getUndoDataFromAddKey( allAnimCurves, undoKeyData , "undo")

    //  undo create anim curve command
    if(allAddedAnimCurves.length > 0){
        this.getUndoDataFromAddAnimCurve(allAddedAnimCurves, 'undo')
    }

    this.displayAnimCurves()
    this.signals.objectSelected.dispatch()

    if(skipList !== undefined){
        this.signals.showInfo.dispatch('Key selected objects but ship '+skipList)
    }else{
        this.signals.showInfo.dispatch('Key selected objects')
    }
}

//  ANIMCURVES
//  since we keep track of the selected / displayed anim curves
//  on a editor level we need to know about them here. That's
//  why we can find methods here which add and remove animCurves
MM.Editor.prototype.addAnimCurve = function ( animCurve, isUndo ){
    // console.log('editor: addAnimCurve', animCurve)    
    if( animCurve === null || animCurve === undefined){
        return;
    }

//  undo
    if( isUndo === undefined ){
        isUndo = false
    }

    if( isUndo === false ){
        this.getUndoDataFromAddAnimCurve([animCurve], 'undo' )
    }

//  actual action
    //this.sceneAnimCurves.add(animCurve.line)
    this.animCurves.push( animCurve )
    
    animCurve.id = this.animCurveId;

    //  here we should get the next available id
    //  not just do += 1 :(
    this.animCurveId += 1
}

MM.Editor.prototype.removeAnimCurve = function ( animCurve, isUndo){
    // console.log('editor: removeAnimCurve', animCurve)
    if( animCurve === undefined ){
        // console.log('Editor: removeAnimCurve undefined')
        return
    }

//  undo
    if( isUndo === undefined ){
        isUndo = false
    }

    if( isUndo === false ){
        this.getUndoDataFromRemoveAnimCurve([animCurve], 'undo')
    }

//  actual action
    //  remove the animCurve from the scene list
    var i = this.animCurves.indexOf(animCurve);        
    if(i != -1) {
        this.animCurves.splice(i, 1);
    }

    //  remove the animCurve from the selected list
    i = this.selectedAnimCurves.indexOf(animCurve)
    if(i != -1){
        this.selectedAnimCurves.splice(i, 1);
        // console.log('removing', animCurve, 'from selected list')
    }
    // console.log('\tselectedAnimCurves:', this.selectedAnimCurves)

    //  remove display if one is present
    this.removeDisplayAnimCurve(animCurve)

    //  remove animation curve from object
    animCurve.driven.removeAnimCurve( animCurve )
}

MM.Editor.prototype.removeSelectedAnimCurves = function( ){   
    // console.log('editor: removeSelectedAnimCurves')
    var i, l;        
    for( i = 0, l = this.selectedAnimCurves.length; i < l; i++){
        // console.log('\tremoving', this.selectedAnimCurves[i])
        this.removeAnimCurve( this.selectedAnimCurves[i])
    }
}

MM.Editor.prototype.removeAllAnimCurves = function(){        
    // console.log('editor: removeAllAnimCurves')        
    while( this.animCurves.length !== 0){
        // console.log('\tRemoving', this.animCurves[0].name)
        this.removeAnimCurve( this.animCurves[0])
    }
}

MM.Editor.prototype.displaySelectedObjectsAnimCurves = function(){
    var i, j, currentAnimCurves;
    var allAnimCurves = [];    
    for( i = 0, j = this.selectedObjects.length; i < j; i++){        
        Array.prototype.push.apply(allAnimCurves,this.selectedObjects[i].getAnimCurves());
    }    
    this.displayAnimCurves(allAnimCurves);
}

MM.Editor.prototype.displayAnimCurves = function( animCurves ){
    // console.log('Editor: displayAnimCurves', animCurves)   
    
    this.removeDisplayAnimCurves( this.selectedAnimCurves );
    if( animCurves !== undefined ){  
        // console.log('\tpassing on animCurves')          
        this.selectedAnimCurves = animCurves;
    // }else{
    //     console.log('\tusing existing selection', this.selectedAnimCurves)
    }

    // if(this.selectedAnimCurves.length === 0 ){
    //     console.log('\tnothing to display')
    // }
    var line;
    for(var i = 0; i < this.selectedAnimCurves.length; i++){ 
        // console.log('\t', i, 'adding display to', this.selectedAnimCurves[i].name)
        this.selectedAnimCurves[i].addDisplay();
        // console.log('\t', i, 'has selection', this.selectedAnimCurves[i].hasSelection())

        //  make sure we only add the display when they haven't already been added
        line = this.sceneAnimCurves.getObjectByName(
            this.selectedAnimCurves[i].dp.line.name, true)
        if(line === undefined){
            this.sceneAnimCurves.add(this.selectedAnimCurves[i].dp.line)
            this.sceneAnimCurves.add(this.selectedAnimCurves[i].dp.dvrt)
            this.sceneAnimCurves.add(this.selectedAnimCurves[i].dp.svrt)
        }            
    }
} 

MM.Editor.prototype.updateDisplayAnimCurves = function(){
    // console.log('editor: updateDisplayAnimCurves')      
    for(var i = 0; i < this.selectedAnimCurves.length; i++)
    {
        this.selectedAnimCurves[i].updateDisplay();   
    }
}

MM.Editor.prototype.clearSelectionAnimCurves = function( animCurves){
    // console.log('editor: clearSelectionAnimCurves', animCurves)
    // if( animCurves.length === 0 ){
    //     console.log('\tno animation curves to hide')
    // }

    for(var i = 0; i < animCurves.length; i++)
    {
        animCurves[i].clearSelection(); 
    }
}

MM.Editor.prototype.removeDisplayAnimCurvesFromPrevisouslySelected = function(){
    // console.log('removeDisplayAnimCurvesFromPrevisouslySelected')
    // console.log('\tpreviously', this.prevSelectedObjects)

    var i,j,k,l, theseAnimCurves;
    for( i = 0, j = this.prevSelectedObjects.length; i < j; i++){
        theseAnimCurves = this.prevSelectedObjects[i].getAnimCurves()
        // console.log('\tremoving display from', theseAnimCurves)
        for( k = 0, l = theseAnimCurves.length; k < l; k++){
            theseAnimCurves[k].removeDisplay( this.sceneAnimCurves );
        }
    }

    // console.log('\tascene', this.sceneAnimCurves)
}

MM.Editor.prototype.removeDisplayAnimCurve = function( animCurve ){    
    console.log('removeDisplayAnimCurve', animCurve)
    console.log('depricated... use animCurve.removeDisplay instead')

    animCurve.removeDisplay( this.sceneAnimCurves );
}

MM.Editor.prototype.removeDisplayAnimCurves = function( animCurves ){
    //  NOTE
    //  here we should be able to remove all of the currently
    //  displayed animCurves. When the active selection becomes
    //  null we currently have no way to figure out which curves
    //  need to be removed :(
    // console.log('editor: removeDisplayAnimCurves', animCurves)
    // if( animCurves.length === 0 ){
    //     console.log('\tno animation curves to hide')
    // }

    if( animCurves.length === 0 ){
        this.removeDisplayAnimCurvesFromPrevisouslySelected();
    }

    for(var i = 0; i < animCurves.length; i++){
        animCurves[i].removeDisplay( this.sceneAnimCurves )
    }
}

//  KEYS
//  since we're working on the selected animation curves which is managed on this
//  level is makes sense to keep the necessary methods here as well.
MM.Editor.prototype.addKey = function(){
    // console.log('editor.addKey')

    var thisAnimCurve, channelGroup, undoInfo, keyIndex;
    var undoAnimCurves = [];
    var undoKeyData = [];
    for(var i = 0; i < this.selectedAnimCurves.length; i++){               
        thisAnimCurve = this.selectedAnimCurves[i]
        channelGroup = thisAnimCurve.driven[ thisAnimCurve.attr[0] ]

        thisAnimCurve.add( this.time, channelGroup[thisAnimCurve.attr[1]], 
            this.defaultTangentType, this.defaultTangentType )

        undoAnimCurves.push( thisAnimCurve );
        undoKeyData.push([[this.time]])
    }   
    
    //  undo command
    this.getUndoDataFromAddKey( undoAnimCurves, undoKeyData , "undo")

    this.signals.keyframeEditorChanged.dispatch()
}

MM.Editor.prototype.moveKeys = function(start_time, end_time, value){
    console.log('moveKeys', start_time, end_time, value)
    /*
    Move the keys inbetween start and end time from the currently active animation curves by the given value
    */
    var i, j, thisAnimCurve;
    for(i = 0; i < this.selectedAnimCurves.length; i++){
        thisAnimCurve = this.selectedAnimCurves[i];
        for(j = 0; j < thisAnimCurve.getNumberOfKeys(); j++){
            if(thisAnimCurve.t[j] >= start_time && thisAnimCurve.t[j] <= end_time){
                thisAnimCurve.t[j] += value;
            }

        }
    }

    this.signals.keyframeEditorChanged.dispatch()
}

MM.Editor.prototype.removeKey = function(){
    //  undo
    var undoAnimCurves = []
    var undoIndicies = []
    var thisAnimCurve;
    var removedIndices = [];
    for(var i = 0; i < this.selectedAnimCurves.length; i++){
        thisAnimCurve = this.selectedAnimCurves[i];
        removedIndices = [];
        for(var j = 0; j < thisAnimCurve.getNumberOfKeys(); j++){
            if(thisAnimCurve.s[j] === true){
                removedIndices.push(j)
            }
        }
        undoAnimCurves.push(thisAnimCurve);
        undoIndicies.push(removedIndices);
    }  

    this.getUndoDataFromRemoveKey( undoAnimCurves, undoIndicies, "undo")

    //  actual
    for(var i = 0; i < this.selectedAnimCurves.length; i++){
        thisAnimCurve = this.selectedAnimCurves[i];
        for(var j = 0; j < thisAnimCurve.getNumberOfKeys(); j++){
            if(thisAnimCurve.s[j] === true){                            
                thisAnimCurve.removeIndex(j)
            }
        }
    }  


    this.signals.keyframeEditorChanged.dispatch()      
}

MM.Editor.prototype.copyKeys = function(){
    var i, j, tv, tc;
    var data = {};
    for( i = 0, j = this.selectedAnimCurves.length; i<j; i++){
        // console.log(i, this.selectedAnimCurves[i].nattr)
        tc = this.selectedAnimCurves[i]

        //  if we have a selection, only store their data, otherwise store the data of the entire animCurve
        if(tc.hasSelection()){
            tv = tc.getAllFromSelected(this.time)    
        }else{
            tv = tc.getAll(this.time)
        }
        
        // console.log(i, tv)
        data[tc.name]=tv;
    }
    // console.log('\tresult', data)
    this.pastedKeyValues = data;
}

MM.Editor.prototype.pasteKeys = function(){ 
    console.log('pasteKeys')
    var i, j, k, l, tCurve, tValue, rAttr, cAttr;
    var sac = this.selectedAnimCurves.length;
    var so = this.selectedObjects.length;

    //  return if no objects are selected
    if( so === 0){
        console.log('\tNo objects selected to apply the stored keys on.')
        return
    }

 
    var animCurves = this.selectedAnimCurves;

    //  apply the stored anim curve keys to the selected anim curves, one to one by object, channel group, channel name ( in that order )
    var keysAdded = false;
    for( i = 0, j = animCurves.length; i<j; i++){
        tCurve=animCurves[i];
        //  check if we have any values stored for the given attributes
        // console.log('\tDo we have data for',tCurve.nattr)
        cAttr = tCurve.name;
        if(this.pastedKeyValues.hasOwnProperty(cAttr)){
            // console.log('\tYes', this.pastedKeyValues[tCurve.nattr])
            for( k = 0, l = this.pastedKeyValues[cAttr].length; k < l; k++){
                tValue=this.pastedKeyValues[cAttr][k];
                tCurve.add( this.time+tValue[0], tValue[1], tValue[2], tValue[3], tValue[4], tValue[5], tValue[6], tValue[7])
                
                keysAdded=true;
            }
        }
    }

    //  if we have 1 or more animation curve selected but don't have stored data for it (different name), then use the data from the first element or key
    if(!keysAdded && sac !== 0){
        console.log('\tNo keys were added but we do have an animation curve selected.')

        var firstChannelData=this.pastedKeyValues[Object.keys(this.pastedKeyValues)[0]];        
        
        for(i = 0, j = sac; i < j; i++){
            tCurve=animCurves[i];
            for( k = 0, l = firstChannelData.length; k < l; k++){
                console.log('\tApplying keys', k)

                tValue=firstChannelData[k];
                tCurve.add( this.time+tValue[0], tValue[1], tValue[2], tValue[3], tValue[4], tValue[5], tValue[6], tValue[7]);
                    
                keysAdded=true;
            }
        }
    }

    if(keysAdded){
        console.log('\tKeys were added, dispatch event.')
        this.signals.keyAdded.dispatch();
        this.signals.keyframeEditorChanged.dispatch();
    }    
}

MM.Editor.prototype.copyKey = function(){
    // console.log('copyKey')

    if(this.selectedAnimCurves.length === 0)
        return

    //  get the value of the first selected key
    var timeAndValue = this.selectedAnimCurves[0].getTimeAndValueFromSelected( true );

    // console.log('\tstoring value ', timeAndValue[0][1])
    this.pastedKeyValue = timeAndValue[0][1]
    // console.log(this.pastedKeyValue)
}

MM.Editor.prototype.pasteKey = function(){
    // console.log('KeyframeOptions: pasteKey')

    if( this.pastedKeyValue === undefined ){
        console.log('\tNo value to paste.')
        return
    }

    //  paste the value on the selected animCurves for the current time
    for(var i = 0; i < this.selectedAnimCurves.length; i++){
        this.selectedAnimCurves[i].add( this.time, this.pastedKeyValue )
    }

    this.signals.keyAdded.dispatch();
    this.signals.keyframeEditorChanged.dispatch();
}

//  TANGENTS
MM.Editor.prototype.updateDisplayKeyTangents = function(){
    // console.log('editor: updateDisplayKeyTangents')
    for( var i = 0; i < this.selectedAnimCurves.length; i++)
    {
        this.selectedAnimCurves[i].updateTangentDisplay();
    }
}

MM.Editor.prototype.displayKeyTangents = function(){
    // console.log('editor: displayKeyTangents')   

    // if( this.selectedAnimCurves.length === 0 ){
    //     console.log('\tNo curves are being displayed.')
    // }

    this.removeDisplayKeyTangents();

    for( var i = 0; i < this.selectedAnimCurves.length; i++){
        if( this.selectedAnimCurves[i].hasSelection() === true 
            || this.selectedAnimCurves[i].hasTangentSelection() === true ){             
            // console.log('\t', i, 'adding keyTangentDisplay')                
            
            var akeys;
            if( this.selectedAnimCurves[i].hasSelection() === true ){
                akeys = this.selectedAnimCurves[i].getSelectedIndices()
            }else{
                akeys = this.selectedAnimCurves[i].getSelectedTangentIndices()
            }                
            
            // console.log('\t', i, 'creating tangent for key index', akeys)
            this.selectedAnimCurves[i].addTangentDisplay( akeys )

            if(this.selectedAnimCurves[i].hasTangentDisplay()){
                // console.log('\t', i, 'adding tangent', this.selectedAnimCurves[i].tdp, 'to scene.')
                this.sceneAnimCurves.add(this.selectedAnimCurves[i].tdp.line)
                this.sceneAnimCurves.add(this.selectedAnimCurves[i].tdp.dvrt)
                this.sceneAnimCurves.add(this.selectedAnimCurves[i].tdp.svrt)
            }else{
                // console.log('\t', i, 'no keyTangentDisplay to add.')
            }
        }else{
            // console.log('\t', i, this.selectedAnimCurves[i].name, 'has no selection.')                
        }
    }
    // console.log('done')           
}

MM.Editor.prototype.removeDisplayKeyTangents = function (){        
/*          
remove any existing tangents, we can do this in 2 ways:
1. get the previously selected animCurves and delete their tangents
2. or get the tangents which are currently being drawn by the scene
here we've implemented 2 
*/
    // console.log('editor: removeDisplayKeyTangents') 
    var lines = this.sceneAnimCurves.getObjectOfInstance(THREE.Line)
    var i, k;
    var thisAnimCurve;
    for( i = 0, k = lines.length; i < k; i++){
        if( lines[i].hasOwnProperty('animParent') ){
            // console.log( i, lines[i], lines[i].animParent.animCurve)
            //  travel 2 steps upwards to get the owner
            thisAnimCurve = lines[i].animParent.animCurve

            if( thisAnimCurve.hasTangentDisplay() ){
                // console.log('\t', i, 'removing tangent for', thisAnimCurve.name)
                this.sceneAnimCurves.remove(thisAnimCurve.tdp.line)
                this.sceneAnimCurves.remove(thisAnimCurve.tdp.dvrt)
                this.sceneAnimCurves.remove(thisAnimCurve.tdp.svrt)
                thisAnimCurve.removeTangentDisplay();
            }
        }
    }
}

MM.Editor.prototype.clearSelectionTangents = function()
{
    // console.log('editor: clearSelectionTangents')
    for(var i = 0; i < this.selectedAnimCurves.length; i++){
        this.selectedAnimCurves[i].clearTangentSelection(); 
    }
}

MM.Editor.prototype.setTangentMode = function( mode ){
/*
    Set the tangent mode for the selecte animation curves. Possible values 
    are:
    1. stepped
    2. linear
    3. bezier
*/
    for(var i = 0; i < this.selectedAnimCurves.length; i++){
        this.selectedAnimCurves[i].setTangentType( mode );
    }   
}

MM.Editor.prototype.resetTangent = function()
{
    for(var i = 0; i < this.selectedAnimCurves.length; i++){
        this.selectedAnimCurves[i].resetTangent();
    }
}

MM.Editor.prototype.breakTangent = function()
{
    for(var i = 0; i < this.selectedAnimCurves.length; i++){
        this.selectedAnimCurves[i].breakTangent();
    }   
}

MM.Editor.prototype.unifyTangent = function()
{
    for(var i = 0; i < this.selectedAnimCurves.length; i++){
        this.selectedAnimCurves[i].unifyTangent();
    }   
}

MM.Editor.prototype.lockTangent = function()
{
    for(var i = 0; i < this.selectedAnimCurves.length; i++){
        this.selectedAnimCurves[i].lockTangent();
    }        
}

MM.Editor.prototype.unlockTangent = function()
{
    for(var i = 0; i < this.selectedAnimCurves.length; i++){
        this.selectedAnimCurves[i].unlockTangent();
    }           
}

MM.Editor.prototype.flattenTangent = function()
{
    for(var i = 0; i < this.selectedAnimCurves.length; i++){
        this.selectedAnimCurves[i].flattenTangent();
    }           
}

//  TANGENT WRAPPERS
MM.Editor.prototype.steppedTangents = function(){
    // console.log('editor: steppedTangents')

//  undo
    this.getUndoTransformDataFromSelectedKeys('undo')

//  actual action
    // signals.tangentStepped.dispatch();
    this.setTangentMode( 0 );
    this.resetTangent()

    //  let's reset the tangents when changing modes
    //  this is/was to cleanup any issues with the existing
    //  tangent data

    this.displayAnimCurves();

    //  data structure has changed so rebuild
    this.signals.keyframeEditorChanged.dispatch();
}

MM.Editor.prototype.linearTangents = function(){
    // console.log('editor: linearTangents')

//  undo
    this.getUndoTransformDataFromSelectedKeys('undo')

//  actual action
    // signals.tangentLinear.dispatch();
    this.setTangentMode( 1 );
    this.resetTangent()

    //  let's reset the tangents when changing modes
    //  this is/was to cleanup any issues with the existing
    //  tangent data
    this.displayAnimCurves();

    //  data structure has changed so rebuild
    this.signals.keyframeEditorChanged.dispatch();
}

MM.Editor.prototype.bezierTangents = function(){
    // console.log('editor: bezierTangents')

//  undo
    this.getUndoTransformDataFromSelectedKeys('undo')

//  actual action
    this.setTangentMode( 2 );
    this.displayAnimCurves();
    this.signals.keyframeEditorChanged.dispatch();
}

MM.Editor.prototype.breakTangents = function(){
    // console.log('editor: breakTangents')

//  undo
    this.getUndoTransformDataFromSelectedKeys('undo')

//  actual action        
    this.breakTangent();
    this.signals.keyframeEditorKeysUpdated.dispatch();
}

MM.Editor.prototype.unifyTangents = function(){
    // console.log('editor: unifyTangents')
    
//  undo
    this.getUndoTransformDataFromSelectedKeys('undo')

//  actual action
    this.unifyTangent();
    this.signals.keyframeEditorKeysUpdated.dispatch();        
}

MM.Editor.prototype.lockTangents = function(){
    // console.log('editor: lockTangents')
    
//  undo
    this.getUndoTransformDataFromSelectedKeys('undo')

//  actual action
    this.lockTangent()
    this.signals.keyframeEditorKeysUpdated.dispatch();   
}

MM.Editor.prototype.unlockTangents = function(){
    // console.log('editor: unlockTangents')
    
//  undo
    this.getUndoTransformDataFromSelectedKeys('undo')

//  actual action
    this.unlockTangent();
    this.signals.keyframeEditorKeysUpdated.dispatch();
}

MM.Editor.prototype.flattenTangents = function(){
    // console.log('editor: flattenTangents')
    
//  undo
    this.getUndoTransformDataFromSelectedKeys('undo')

//  actual action
    this.flattenTangent();
    this.signals.keyframeEditorKeysUpdated.dispatch();
}    