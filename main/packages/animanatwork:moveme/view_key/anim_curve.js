MM.AnimCurve = function ( object, channel ){
    // object is the object that we are going to drive
    // channel is the name of the attribute it's driving
    // - [channelGroup, channel]    
    
    if(object === undefined){
        console.error("AnimCurve: Object is not defined")
    }
    if(channel === undefined){
        console.error("AnimCurve: Channel is not defined.")
    }

    //  unique animCurve identifier   
    //  is set on creation time in editor
    this.id = 0;        
    this.attr = channel;     
    this.driven = object; 

    this.nattr = object.getNiceName( channel[0], channel[1])

    //  create a unique name 
    this.name = this.driven.name+'_'+channel[0]+'_'+channel[1]
    
    // //  not happy with this implementation but currently we do 
    // //  not have a way to ask for the 'name' of an attribute
    // //  
    // if(channel[0] === 'shapes'){
    //     this.name = object.name+'.'+channel[1];
    //     this.nattr = channel[1];
    // }else{
    //     this.name = object.name+'.'+channel[0]+channel[1].toUpperCase();    
    //     this.nattr = channel[0]+channel[1].toUpperCase();
    // }

    this.TANGENT = { STEPPED: 0, LINEAR: 1, BEZIER: 2 };

    var defaultIntangent = this.TANGENT.STEPPED;
    var defaultOutTangent = this.TANGENT.STEPPED;

    //  real data
    this.t=[];                      // time index value
    this.v=[];                      // value index value
    this.s=[];                      // selected key index
    this.it=[];                     // in tangent value
    this.ot=[];                     // out tangent value  
    this.itv=[];                    // in tangent vector
    this.otv=[];                    // out tangent vector
    this.bt=[];                     // is the tangent broken
    this.wt=[];                     // are the tangents weighted individually
    this.twv = 5.0;                 // tangent weight value
    this.lc = new THREE.Color();    // display curve line color

    //  data to help with visualisation    
    this.dp = undefined;            // curve display     
    this.tdp = undefined;           // tangent display
    this.tsi=[];                    // selected input tangent index
    this.tso=[];                    // selected output tangent index
};

MM.AnimCurve.prototype = {
    constructor: MM.AnimCurve,

//  DATA
    getChannelValue: function(){
        // console.log('getChannelValue')
        //  return the current value of the channel 
        //  on the object that this curve is driving
        var channelGroup = this.driven[this.attr[0]]        
        return channelGroup[this.attr[1]]
    },
    importData: function( data ){
        // console.log('AnimCurve: importData', data)

        //  ensure we have the right variable type as for some reason we had some 
        //  string values creep into some data. 

        var i, j;
        for( i = 0, j = data.t.length; i < j; i++){
            this.t.push( Number( data.t[i] ));
        }
        for( i = 0, j = data.v.length; i < j; i++){
            this.v.push( Number( data.v[i] ))
        }
        
        //  make sure nothing is selected when loading in data
        for( i = 0, j = data.s.length; i < j; i++){
            this.s.push( false )
        }
        // this.s = data.s

        this.it = data.it
        this.ot = data.ot
        
        // console.log('setting color to', data.lc.r, data.lc.g, data.lc.b)
        this.lc.r = data.lc.r
        this.lc.g = data.lc.g
        this.lc.b = data.lc.b

        //  not sure if this will work since this an array of THREE.Vector3
        //  we might have to iterate over each element here
        // console.log('\t', data.itv.length, data.itv )
        
        for( i = 0, j = data.itv.length; i < j; i++){
            this.itv.push( new THREE.Vector2( data.itv[i].x, data.itv[i].y ))
        }
        // this.itv = data.itv
        
        for( i = 0, j = data.otv.length; i < j; i++){
            this.otv.push( new THREE.Vector2( data.otv[i].x, data.otv[i].y ))
        }
        // this.otv = data.otv
        
        this.bt = data.bt
        this.wt = data.wt

        // this.twv = data.twv
    },
    exportData: function(){
        var data = {};
        
        data.name = this.name
        data.driven = this.driven.name   
        data.attr = this.attr   
        data.t = this.t
        data.v = this.v
        data.s = this.s
        data.it = this.it
        data.ot = this.ot
        data.lc = this.lc 

        //  not sure if this will work since this an array of THREE.Vector3
        //  we might have to iterate over each element here
        data.itv = this.itv
        data.otv = this.otv

        data.bt = this.bt
        data.wt = this.wt
        
        // data.twv = this.twv
        
        return data; 
    },

//  CURVE DISPLAY    
    hasDisplay: function(){
        if(this.dp instanceof MM.AnimCurveDisplay ){
            return true
        }
        return false
    },
    addDisplay: function(){
        if(this.hasDisplay() === false){
            this.dp = new MM.AnimCurveDisplay( this )
        }
        return this;
    },
    updateDisplay: function(){
        if(this.dp instanceof MM.AnimCurveDisplay){
            // console.log('AnimCurve: updateDisplay')
            this.dp.update();
        }else{
            // console.log('AnimCurve: nothing to update')
        }
    },
    removeDisplay: function( scene ){
        if( scene === undefined ){
            console.log('animCurve.removeDisplay. No animation curve scene has been defined.')
        }

        if(this.hasDisplay() === true){ 
            //  remove the objects from the scene
            scene.remove(this.dp.line);
            scene.remove(this.dp.dvrt);
            scene.remove(this.dp.svrt);

            //console.log('AnimCurve: removeDisplay')
            this.dp = null
        }

        //  additional check to ensure all elements have really been removed
        // displays = ["_curveKeyDefault", "_curveLine", "_curveKeySelected"]
        // for( i = 0; i < 3; i++){
        //     //  double check they have actually been removed from the scene
        //     line = scene.getObjectByName(this.name+displays[i], true)
        //     if(line !== undefined){
        //         console.log('\t', this.name+displays[i], 'still exists.', line)
        //         // scene.remove(line)
        //     }else{
        //         console.log('\t', this.name+displays[i], 'has been removed')
        //     }
        // }

        return this
    },

//  TANGENT DISPLAY
    hasTangentDisplay: function(){
        // console.log('hasTangentDisplay')
        if(this.tdp instanceof MM.KeyTangentDisplay ){
            return true
        }
        return false
    },
    addTangentDisplay: function( akeys ){
        // console.log('addTangentDisplay')

        //  only draw a tangent when we have more then 1 key
        if( this.t.length < 2 ){
            return 
        }

        this.tdp = new MM.KeyTangentDisplay( this )
        this.tdp.keys = akeys  // the keys we're drawing tangents for
        return this
    },
    updateTangentDisplay: function(){
        // console.log('updateTangentDisplay')
        if(this.tdp instanceof MM.KeyTangentDisplay){
            this.tdp.update();
        }else{
            // console.log('AnimCurve: nothing to update')
        }        
    },
    removeTangentDisplay: function(){
        // console.log('removeTangentDisplay')        
        this.tdp = null
        return this        
    },

//  TANGENT FUNCTIONS
    setTangentType: function ( tangentType ){
        this.setInTangentType( tangentType )
        this.setOutTangentType( tangentType )
    },
    setInTangentType: function ( tangentType ){
        var si = this.getSelectedIndices()
        for( var i = 0; i < si.length; i++){
            this.it[si[i]] = tangentType
        }
    },
    setOutTangentType: function ( tangentType ){
        var si = this.getSelectedIndices()
        for( var i = 0; i < si.length; i++){
            this.ot[si[i]] = tangentType
        }
    },
    breakTangent: function (){
        var si = this.getSelectedIndices()
        for( var i = 0; i < si.length; i++){
            this.bt[si[i]] = true
        }
    },
    unifyTangent: function (){
        var si = this.getSelectedIndices()
        for( var i = 0; i < si.length; i++){
            this.bt[si[i]] = false
        }
    },
    lockTangent: function(){
        var si = this.getSelectedIndices()
        for( var i = 0; i < si.length; i++){
            this.wt[si[i]] = false
        }
    },
    unlockTangent: function(){
        var si = this.getSelectedIndices()
        for( var i = 0; i < si.length; i++){
            this.wt[si[i]] = true
        }
    },
    clearTangentSelection: function(){
        this.tsi = []
        this.tso = []
    },
    hasTangentSelection: function(){
        if( this.tsi.length !== 0 || this.tso.length !== 0)
            return true;
        return false;
    },
    getTangentSelection: function( mode, index ){
        var tArray;
        if( mode === 'in'){
            tArray = this.tsi
        }else{
            tArray = this.tso
        }

        if( tArray.indexOf( index ) === -1 ){
            return false
        }else{
            return true
        }
    },
    setTangentSelection: function( mode, index, value ){
        // console.log('setTangentSelection', mode, index, value)        
        //  mode: in or out -> tangent
        //  index: index of the key
        //  value: true or false -> true = add index, false = remove index        
        var tArray;
        if( mode === 'in'){
            tArray = this.tsi
        }else{
            tArray = this.tso
        }
        // console.log('\tbefore', tArray)

        //  add value
        var nst = tArray.length;
        if( value === true ){            
            if( nst === 0 ){
                tArray.push( index )
            }else{                
                for( var i = 0; i < nst; i++){
                    if( tArray[i] > index ){
                        tArray.splice(i, 0, index)
                    }
                }
            }
        //  remove value
        }else{
            var indexToRemove;
            for( var i = 0; i < nst; i++){
                if( tArray[i] === index ){
                    indexToRemove = i;
                    break;
                }
            }
            tArray.splice(indexToRemove, 1)
        }
        // console.log('result', tArray)

        if( mode === 'in'){
            this.tsi = tArray;
        }else{
            this.tso = tArray;
        }
    },
    getSelectedTangentIndices: function(){
        // console.log('animCurve: getSelectedTangentIndices')
        var indices = []
        var i, j;
        for( i = 0; i < this.tsi.length; i++){
            indices.push( this.tsi[i])
        }
        for( j = 0; j < this.tso.length; j++){
            if( indices.indexOf( this.tso[j]) === -1){
                indices.push( this.tso[j])
            }
        }
        // console.log('\tresult:', indices)
        return indices
    },
    resetTangent: function(){
        // console.log('animCurves.resetTangents')
        
        var nk = this.getNumberOfKeys();
        for( var i = 0; i < nk; i++){
            //  in
            this.itv[i].x = this.twv * -1;
            this.itv[i].y = 0.0;
            
            //  out
            this.otv[i].x = this.twv;
            this.otv[i].y = 0.0;
        }
    },
    flattenTangent: function(){
        // console.log('animCurve: flattenTangents')

        var si = this.getSelectedIndices()
        if( si.length === 0)
            si = this.getSelectedTangentIndices()

        for( var i = 0; i < si.length; i++){
            this.itv[si[i]].x = this.twv * -1;
            this.itv[si[i]].y = 0.0;
            this.otv[si[i]].x = this.twv;
            this.otv[si[i]].y = 0.0;
        }
    },
//  KEY FUNCTIONS
    getIndexAtTime: function( time){
        // console.log('getIndexAtTime', time)

        var keyIndex = -1;
        for(var i = 0; i < this.t.length; i++){
            if(this.t[i] === time){
                keyIndex = i;
                break;
            }
        }
        // console.log('\tresult', keyIndex);
        return keyIndex;
    },
    removeKeyAtTime : function( time ){
        // console.log('removeKeyAtTime', time)

        var keyIndex = this.getIndexAtTime( time );
        
        if( keyIndex !== -1){
            // console.log('\tremoving index', keyIndex)
            this.removeIndex( keyIndex );
        // }else{
        //     console.log('\tno index found at time', time)
        }
    },
    removeIndex : function( keyIndex ){
        //console.log('removeIndex', keyIndex)        
        
        this.t.splice(keyIndex, 1);
        this.v.splice(keyIndex, 1);
        this.s.splice(keyIndex, 1);
        this.it.splice(keyIndex, 1)
        this.ot.splice(keyIndex, 1)

        this.itv.splice(keyIndex, 1)
        this.otv.splice(keyIndex, 1)
        this.bt.splice(keyIndex, 1)
        this.wt.splice(keyIndex, 1)
    },
    addFromList: function( dataAsList){
        /*
        Pass on the data as a list. This can be used when animCurve data was recieved by using getTransformDataFromIndex().
        */
        this.add( dataAsList[0], dataAsList[1], dataAsList[2], dataAsList[3],
                  dataAsList[4], dataAsList[5], dataAsList[6], dataAsList[7])
    },
    add: function( tv, vv, it, ot, itv, otv, bt, wt)
    {
        console.log('AnimCurve.add', tv, vv, it, ot, itv, otv, bt, wt)
        if( vv.constructor == THREE.Number){
            // console.log('Value is of object type Number. Passing on', vv.value)
            vv = vv.value;            
        }
        
        tv = parseFloat( tv )
        vv = parseFloat( vv )

        //  Make sure we don't have a key already with exactly the same time value. If we do, override it with the new value
        for( var i = 0; i < this.t.length; i++ ){
            if(this.t[i] === tv){
                // console.log('\twe already have a key at time', tv, 'using new value', vv)
                
                //  Overwrite existing values
                this.v[i] = vv
                
                //  if they are defined...
                if(it !== undefined){
                    this.it[i] = it;
                }
                if(ot !== undefined){
                    this.ot[i] = ot;
                }
                if(itv !== undefined){
                    this.itv[i] = itv;
                }
                if(otv !== undefined){
                    this.otv[i] = otv;
                }
                if(bt !== undefined){
                    this.bt[i] = bt;
                }
                if(wt !== undefined){
                    this.wt[i] = wt;
                }
                return
            }
        }        

        if(it === undefined){
            it = this.TANGENT.STEPPED
        }
        if( ot === undefined){
            ot = this.TANGENT.STEPPED
        }

        if( itv === undefined ){
            itv = new THREE.Vector2(-2.0,0.0)
        }
        if( otv === undefined ){
            otv = new THREE.Vector2(2.0,0.0)    
        }

        if( bt === undefined ){
            bt = false
        }
        if( wt === undefined ){
            wt = true
        }

        //  make sure we don't just append the new key at the end of our array
        //  but inject it at the right place        
        var index = 0;

        //  start + 1
        if(this.t.length === 1){
            if(this.t[0] < tv){
                index = 1;   
            }
        }

        //  middle
        for( var i = 0; i < this.t.length-1; i++ ){
            // console.log(i, 'new', tv, 'current', this.t[i], 'next', this.t[i+1])
            if(this.t[i] < tv && tv < this.t[i+1]){
                // console.log(this.t[i], '<', tv, '&&', tv, '<', this.t[i+1])
                index = i+1;
            }
        }

        //  end        
        if(this.t.length > 1){
            if(this.t[this.t.length-1] < tv){
                // console.log(this.t[this.t.length-1], '<', tv)
                index = this.t.length+1
            }
        }

        //console.log('AnimCurve: adding key to index ', index)

        this.t.splice(index, 0, tv);
        this.v.splice(index, 0, vv);
        this.s.splice(index, 0, false);
        this.it.splice(index, 0, it)
        this.ot.splice(index, 0, ot)
        this.itv.splice(index, 0, itv)
        this.otv.splice(index, 0, otv)

        //  by default, tangents are not broken
        this.bt.splice(index, 0, bt)

        //  by default, tangents are not weighted individually
        this.wt.splice(index, 0, wt)
        return this;
    },
    getSelectionData: function(){
        var data = []
        data.push( this.s.slice() )
        data.push( this.tsi.slice() )
        data.push( this.tso.slice() )
        return data;
    },
    setSelectionData: function( keyData ){
        // console.log('setSelectionData', keyData)

        this.s = keyData[0]
        this.tsi = keyData[1]
        this.tso = keyData[2]
    },
    getSelectionDataFromIndex: function( keyIndex ){
        // console.log('getSelectionDataFromIndex')
        
        var data = []
        data.push(this.s[keyIndex])                             //  0
        data.push(this.getTangentSelection('in', keyIndex))     //  1
        data.push(this.getTangentSelection('out', keyIndex))    //  2

        // console.log('\t\ts', data[0])
        // console.log('\t\ttsi', data[1])
        // console.log('\t\ttso', data[2])

        return data;
    },
    setSelectionDataFromIndex: function( keyIndex, keyData ){
        // console.log('setSelectionDataFromIndex', keyIndex, keyData)
        
        this.s[keyIndex] = keyData[0];
        this.setTangentSelection( 'in', keyIndex, keyData[1])
        this.setTangentSelection( 'out', keyIndex, keyData[2])
    },
    getTransformDataFromIndex: function( keyIndex ){
        // console.log('getTransformDataFromIndex', keyIndex)

        var data = []
        data.push(this.t[keyIndex])     //  0
        data.push(this.v[keyIndex])     //  1    
        data.push(this.it[keyIndex])    //  2   
        data.push(this.ot[keyIndex])    //  3
        data.push(this.itv[keyIndex].x) //  4
        data.push(this.itv[keyIndex].y) //  5
        data.push(this.otv[keyIndex].x) //  6
        data.push(this.otv[keyIndex].y) //  7
        data.push(this.bt[keyIndex])    //  8
        data.push(this.wt[keyIndex])    //  9
        
        // console.log('\tresult', data)            
        return data;
    },
    setTransformDataToIndex: function( keyIndex , keyData){
        // console.log('setTransformDataToIndex', keyIndex, keyData)

        // console.log('\titv',this.itv[keyIndex].x, this.itv[keyIndex].y, 
        //     '->',keyData[5], keyData[6])
        // console.log('\totv',this.otv[keyIndex].x, this.otv[keyIndex].y, 
        //     '->',keyData[7], keyData[8])

        this.t[keyIndex] = keyData[0];
        this.v[keyIndex] = keyData[1];        
        this.it[keyIndex] = keyData[2];
        this.ot[keyIndex] = keyData[3];
        this.itv[keyIndex].x = keyData[4];
        this.itv[keyIndex].y = keyData[5];
        this.otv[keyIndex].x = keyData[6];
        this.otv[keyIndex].y = keyData[7];
        this.bt[keyIndex] = keyData[8];
        this.wt[keyIndex] = keyData[9];        
    },
    getNumberOfKeys: function(){
        return this.t.length;
    },
    getSelectedIndices: function( firstOnly ){
        if( firstOnly === undefined)
            firstOnly = false

        var indices = []
        for(var i = 0; i < this.t.length; i++){
            if(this.s[i] === true){
                indices.push(i)
                if(firstOnly === true){
                    break; break;
                }
            }
        }
        return indices
    },
    getSelectedKeysAndTangents: function(){
        // console.log('getSelectedKeysAndTangents')
        /*
        Returns the associated data from the selected keys and tangents
        */

        var skeys = this.getSelectedIndices();
        var stangents = this.getSelectedTangentIndices();
        
        // console.log('\tresult', skeys.concat(stangents))
        return skeys.concat(stangents);
    },
    getTimeRange: function(){
        console.log('getTimeRange')

        return [ this.t[0], this.t[(this.t.length - 1)]]
    },
    getValueRange: function(){
        console.log('getValueRange')

        var smallest = 1000;
        var biggest = -1000;
        for(var i = 0; i < this.v.length; i++){
            if(this.v[i] < smallest){
                smallest = this.v[i]
            }
            if(biggest < this.v[i]){
                biggest = this.v[i]
            }
        }
        return [smallest, biggest]
    },    
    getSelectedTimeRange: function(){
        console.log('getSelectedTimeRange')

        var selectedKeys = this.getSelectedIndices()
        var nsk = selectedKeys.length;        

        return [ this.t[selectedKeys[0]], this.t[selectedKeys[nsk-1]] ]
    },
    getSelectedValueRange: function(){
        console.log('getSelectedValueRange')

        var selectedKeys = this.getSelectedIndices();
        var nsk = selectedKeys.length;        

        var smallest = 1000;
        var biggest = -1000;
        for(var i = 0; i < nsk; i++){
            if(this.v[i] < smallest){
                smallest = this.v[selectedKeys[i]]
            }
            if(biggest < this.v[selectedKeys[i]]){
                biggest = this.v[selectedKeys[i]]
            }
        }
        return [smallest, biggest]
    },
    setValueForSelected: function( value ){
        var selectedKeys = this.getSelectedIndices()
        var i, l;
        for( i = 0,l = selectedKeys.length; i < l; i++){
            this.v[ selectedKeys[i] ] = value; 
        }
    },
    getAll: function( offset ){
        var all = []
        for(var i = 0; i < this.t.length; i++){        
            all.push([
                this.t[i] - offset, this.v[i], this.it[i], this.ot[i], this.itv[i], this.otv[i], this.bt[i], this.wt[i]
                ])        
        }
        return all
    },
    getAllFromSelected: function( offset ){
        var all = []
        for(var i = 0; i < this.t.length; i++){
            if(this.s[i] === true){
                all.push([
                    this.t[i] - offset, this.v[i], this.it[i], this.ot[i], this.itv[i], this.otv[i], this.bt[i], this.wt[i]
                    ])
            }
        }
        return all
    },
    getTimeAndValueFromSelected: function( firstOnly ){
        // firstOnly = boolean
        var timeAndValue = []
        for(var i = 0; i < this.t.length; i++){
            if(this.s[i] === true){
                timeAndValue.push([ this.t[i], this.v[i] ])
                if(firstOnly){
                    break; break;
                }
            }
        }
        return timeAndValue
    },
    setTimeAndValueForFirstSelected: function( time, value ){
        var firstSelected = this.getSelectedIndices( true )
        this.t[ firstSelected ] = time;
        this.v[ firstSelected ] = value; 
    },
    set: function (selected, ntv, nvv ){
        this.t[selected]=ntv;
        this.v[selected]=nvv;
        
        return this;
    },    
    // hasSelection: function(){
    //     // returns true when we have a key selected
    //     // console.log(this.name, 'has selection?')

    //     for(var i = 0; i < this.s.length; i++)
    //     {
    //         if( this.s[i] === true )
    //         {
    //             // console.log('\tyes')
    //             return true
    //         }
    //     }
    //     // console.log('\tno')
    //     return false
    // },
    hasKeyOrTangentSelection: function(){
        //  do we have a key or tangent selected?
        if( this.hasSelection() === true ){
            return true;
        }
        if( this.hasTangentSelection() === true ){
            return true;
        }

        return false;
    },
    hasIndexKeyOfTangentSelected: function( index ){
        //  is the key or its tangents of the given index selected?
        if( this.s[index] === true ){
            return true;
        }

        if( this.tsi.indexOf(index) !== -1 ){
            return true;
        }

        if( this.tso.indexOf(index) !== -1 ){
            return true;
        }

        return false;
    },
    hasSelection: function(){
        var nk = this.s.length;
        var i, j;
        for(i = 0, j = nk; i < j; i++){
            if(this.s[i]){
                return true;
            }
        }
        return false;
    },
    setSelection: function(selected){
        // console.log("set selected key to ", selected);
        
        if(selected instanceof Array ){            
            for(var i = 0; i < selected.length; i++){
                this.s[i] = true
            }
        }else{
            this.s[selected] = true;
        }
        return this;
    },
    isSelected: function(selected){
        return this.s[selected];        
    },
    clearSelection: function(){
        // console.log("resetting selection");
        
        for(var i = 0; i < this.t.length; i++){
            this.s[i] = false;
        }
        return this;
    },
    setColor: function( color ){
        this.lc = new THREE.Color(color);   
    },
    getValue: function( currentTime ){
        // console.log('AnimCurve: getValue', currentTime)
        // console.log('\t', this.name)

        var nKeys = this.getNumberOfKeys()
        if(currentTime <= this.t[0]) return this.v[0]
        if(currentTime >= this.t[nKeys - 1]) return this.v[nKeys - 1]

        //  get the AnimCurve range
        var nextIndex = 0;
        var found = false;
        while(found === false && nextIndex < nKeys - 1)
        {
            if(this.t[nextIndex] <= currentTime && this.t[nextIndex + 1] > currentTime){
                found = true;
                continue;
            }
            nextIndex += 1;
        }

        //  stepped
        var outputValue;
        if(this.ot[nextIndex] === this.TANGENT.STEPPED)
        {
            // console.log('\tStepped')
            outputValue = this.v[nextIndex]
        //  linear interpolation
        }else if(this.ot[nextIndex] === this.TANGENT.LINEAR){
            // console.log('\lLinear')
            var range = this.t[nextIndex+1] - this.t[nextIndex];
            var value = currentTime - this.t[nextIndex];
            var percent = value / range;
            // console.log('\tpercent', percent)
            // console.log('\tstart', this.v[nextIndex])
            // console.log('\tend', this.v[nextIndex+1])
            // console.log('\tend - start', (this.v[nextIndex+1] - this.v[nextIndex]))
            // console.log('\tinbetween', ((this.v[nextIndex+1] - this.v[nextIndex]) * percent))
            //  here we have to explicitly say that the variables integers... very strange
            outputValue = parseFloat(this.v[nextIndex]) + parseFloat((this.v[nextIndex+1] - this.v[nextIndex]) * percent);
        
        //  bezier mode
        }else if(this.ot[nextIndex] === this.TANGENT.BEZIER){
            // console.log('\tBezier')
            var range = this.t[nextIndex+1] - this.t[nextIndex];
            var value = currentTime - this.t[nextIndex];
            var percent = value / range;

            var p0Y = this.v[nextIndex]
            var p1Y = this.v[nextIndex] + this.otv[nextIndex].y
            var p2Y = this.v[nextIndex+1] + this.itv[nextIndex+1].y
            var p3Y = this.v[nextIndex+1]

            outputValue = THREE.Shape.Utils.b3( percent, p0Y, p1Y, p2Y, p3Y);
        }else{
            console.log('\tUnsupported interpolation mode')
        }

        // console.log('time', currentTime, 'range', this.t[nextIndex], this.t[nextIndex+1], 'value', outputValue)
        // console.log('\t', outputValue)
        return outputValue
    }
}