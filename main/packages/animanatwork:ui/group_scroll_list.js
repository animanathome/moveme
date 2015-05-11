MMUI.GroupScrollList = function(){
    MMUI.Element.call( this );

    var scope = this;    

    var dom = document.createElement('div');
    dom.className = 'groupscrolllist-panel';    
    // dom.style.cursor = 'default';    
    // dom.style.overflow = 'auto';

    this.name = ""
    // this.sOColor = '#555'   // selected object background color
    // this.sGColor = '#666'   // selected group background color

    this.dom = dom;
    this.document = document;

    /*
    Important: here we are only going to filter based on the type 
    of the groups. Not the object! That means we have to ensure all objects
    belong to a or the proper group.
    */
    this.typeToDisplay = undefined // display all groups and their content of type
    this.groups = {};   // displayed groups and their objects
    this.groupTypes = {}; // displayed groups and their type

    this.maximized = [];    // list of the maximized groups

    this.psi = 0; // previously selected object
    this.sGroups = []; // list of the selected groups
    this.sObjects = []; // list of the selected objects

    this.gOptions = []; // group ui option elements
    this.oOptions = {}; // object ui option elements

    this.oElements = []; // object elements sorted by global index

    /*
    this allows us to attach a popup optionMenuGrp the specifed menu will be 
    displayed when the user clicks with the right mouse button with this 
    element once the user has selected an option from the list and let's go, 
    the selected option will be returned through the command signal. 
    */
    this.menu = undefined
    this.selectedMenuItem = undefined
    this.menuItemTxts = [] // labels for the different menuItems    

    var maximizeEvent = document.createEvent( 'HTMLEvents' );
    maximizeEvent.initEvent( 'maximize', true, true );

    var groupSelectEvent = document.createEvent( 'HTMLEvents' );
    groupSelectEvent.initEvent( 'groupselect', true, true );  

    var selectObjectEvent = document.createEvent( 'HTMLEvents' );
    selectObjectEvent.initEvent( 'objectselect', true, true );  

    var commandEvent = document.createEvent( 'HTMLEvents' );
    commandEvent.initEvent( 'command', true, true );    

    var onMouseDown = function ( event ){
        // console.log('GroupScrollList: onMouseDown')
                
        event.preventDefault(); 

        if( event.button === 0 ){
            //  left button
            dom.addEventListener( 'mousemove', onMouseMove, false );
            dom.addEventListener( 'mouseup', onMouseUp, false );
        }else if(event.button === 2){
            //  right button
            if( scope.menu === undefined) return;
            
            console.log('display', scope.menu.dom.style.display)

            scope.menu.setDisplay('block')


            // console.log('position', event.layerX, event.layerY)
            scope.menu.dom.style.left = event.layerX+'px'
            scope.menu.dom.style.top = event.layerY+'px'

            dom.addEventListener( 'mouseup', onMouseUp, false );
        }else{
            //  pass
        }        
    }

    var onMouseMove = function ( event ){
        console.log('GroupScrollList: onMouseMove')
    }

    var onMouseUp = function ( event ){
        console.log('GroupScrollList: onMouseUp')

        if(event.button === 0) {
            // left mouse button
            if( event.target.id.indexOf('$M') !== -1){
                scope.setMaximizeGroupValue( event.target.value );
                scope.dom.dispatchEvent( maximizeEvent );
            }

            if( event.target.id.indexOf('$G') !== -1){
                var mode = 'reset'
                if( event.ctrlKey === true || event.shiftKey === true ){
                    mode = 'add'
                }else if(event.altKey === true){
                    mode = 'remove'
                }
                scope.selectGroup( event.target.value , mode);
                scope.dom.dispatchEvent( groupSelectEvent );
            }

            if( event.target.id.indexOf('$O') !== -1){
                var gi = parseFloat(event.target.getAttribute('gi'))

                var mode = 'reset'
                if( event.ctrlKey === true ){
                    mode = 'add'
                }else if(event.shiftKey === true){
                    mode = 'addInbetween'
                }else if(event.altKey === true){
                    mode = 'remove'
                }
                scope.selectObject( event.target.value , mode, gi);
                scope.dom.dispatchEvent( selectObjectEvent );
            }

            scope.dom.removeEventListener( 'mousemove', onMouseMove, false );
            scope.dom.removeEventListener( 'mouseup', onMouseUp, false );
        }else if( event.button === 2){
            //  right mouse button
            if( scope.menu === undefined )
                return 
            
            scope.menu.setDisplay('none')
                
            scope.selectedMenuItem = event.target.textContent;
            scope.dom.dispatchEvent( commandEvent );    

            scope.dom.removeEventListener( 'mouseup', onMouseUp, false );            
        }else{
            //  pass
        }
    }

    var onChange = function( event ){
        console.log('GroupScrollList: onChange')
    }

    var onMaximize = function( event ){
        console.log('GroupScrollList: onMaximize')

        scope.updateUI();
    }

    var onGroupSelect = function( event ){
        console.log('GroupScrollList: onGroupSelect')

        scope.updateUI();
    }

    var onObjectSelect = function( event ){
        console.log('GroupScrollList: onObjectSelect')

        scope.updateUI();
    }
    var onCommand = function( event ){
        console.log('TextscrollList: onCommand')
    }    

    dom.addEventListener( 'mousedown', onMouseDown, false );
    dom.addEventListener( 'change', onChange, false ); 
    dom.addEventListener( 'maximize', onMaximize, false ); 
    dom.addEventListener( 'groupselect', onGroupSelect, false ); 
    dom.addEventListener( 'objectselect', onObjectSelect, false ); 
    dom.addEventListener( 'command', onCommand, false );      

    return this
}

MMUI.GroupScrollList.prototype = Object.create( MMUI.Element.prototype );

var additionalEvents = [ 'Maximize' , 'GroupSelect', 'ObjectSelect'];
additionalEvents.forEach( function ( event ) {
    var method = 'on' + event;
    MMUI.GroupScrollList.prototype[ method ] = function ( callback ) {
        this.dom.addEventListener( event.toLowerCase(), callback, false );
        return this;
    };
} );

MMUI.GroupScrollList.prototype.clear = function ()
{
    this.removeAllFromUI();
    this.groups = {};
    this.maximized = [];

    //  reset the selection when a new object gets added
    this.sObjects = [];
    this.sGroups = [];
}

MMUI.GroupScrollList.prototype.addGroup = function( groupName , type){ 
    // console.log('GroupScrollList: addGroup', groupName, type)

    if(! this.groups.hasOwnProperty(groupName) ){
        if( type === 'undefined' ){
            //  by default everything will go into the asset section unless 
            //  specified differently
            type = 'asset';
        }

        // console.log('Adding group', groupName, 'to GroupScrollList')
        this.groups[groupName] = [];
        this.groupTypes[groupName] = type
        this.maximized[groupName] = true;
    }
}

MMUI.GroupScrollList.prototype.removeGroup = function( groupName ){
    if( this.groups.hasOwnProperty( groupName )){
        // console.log('Removing group', groupName, 'from GroupScrollList')
        delete this.groups[groupName];
        delete this.groupTypes[groupName];
        delete this.maximized[groupName];
    }else{
        console.log('GroupScrollList does not contain group ', groupName, '. Nothing to remove.')
    }
}

MMUI.GroupScrollList.prototype.hasGroup = function( groupName ){
    if( this.groups.hasOwnProperty( groupName )){
        return true;
    }
    return false;
}

MMUI.GroupScrollList.prototype.addObject = function( groupName, object ){
    if( this.hasGroup( groupName )){
        if( this.groups[groupName].indexOf( object) == -1 ){
            // console.log('Adding', object, 'to group', groupName)
            this.groups[groupName].push( object );
            return true
        }else{
            console.log(object, 'is already part of group', groupName)
        }
    }
    return false;
}

MMUI.GroupScrollList.prototype.removeObject = function( groupName, object ){
    if( this.hasGroup( groupName )){
        var index = this.groups[groupName].indexOf(object);
        if( index != -1 ){
            this.groups[groupName].splice(index, 1);
        }else{
            console.log(object, 'is not part of group', groupName, '. Nothing to remove.')
        }
    }
}

MMUI.GroupScrollList.prototype.hasObject = function( groupName, object ){
    if( this.hasGroup( groupName )){
        var index = this.groups[groupName].indexOf(object);
        if( index != -1 ){
            return true;
        }
        return false;        
    }
    return false;
}

MMUI.GroupScrollList.prototype.isGroupSelected = function( groupName ){
    if( this.sGroups.indexOf( groupName ) != -1 ){
        return true;
    }
    return false;
}

MMUI.GroupScrollList.prototype.isObjectSelected = function( object ){
    if( this.sObjects.indexOf( object ) != -1 ){
        return true;
    }
    return false
}

MMUI.GroupScrollList.prototype.addGroupToUI = function( groupName ){
    // var scope = this;

    // var maximizeEvent = document.createEvent( 'HTMLEvents');
    // maximizeEvent.initEvent( 'maximize', true, true );

    // var groupSelectEvent = document.createEvent( 'HTMLEvents' );
    // groupSelectEvent.initEvent( 'groupselect', true, true );

    var option = document.createElement( 'div' );
    option.className = 'groupscrolllist-group'
    // option.style.height = '14px';
    // option.style.padding = '4px';
    // option.style.overflow = 'hidden'
    if( this.isGroupSelected( groupName ) === true ){
        // option.style.backgroundColor = this.sGColor;
        option.className = 'groupscrolllist-group groupscrolllist-group-selected';
    }
    this.dom.appendChild( option );

    var mm = document.createElement( 'div' );
    mm.className = 'groupscrolllist-group-min-max'
    mm.value = groupName
    // mm.style.float = 'left'
    // mm.style.width = '12px'
    mm.id = groupName + '$M' // min max
    
    if( this.maximized[ groupName ] == true){
        mm.innerHTML = '-';    
    }else{
        mm.innerHTML = '+';
    }
    option.appendChild( mm )
    
    var txt = document.createElement( 'div' );
    txt.className = 'groupscrolllist-group-name'
    txt.value = groupName
    txt.innerHTML = groupName
    // txt.style.left = '12px'
    // txt.style.overflow = 'hidden'
    txt.id = groupName + '$G'
    option.appendChild( txt )

    this.gOptions.push( option );
}

MMUI.GroupScrollList.prototype.setMaximizeGroupValue = function ( groupName ){
    console.log( 'GroupScrollList: setMaximizeGroupValue', groupName)
    //  This value will determine whether of not the group is maximized.
    //  When maximized all group objects will be visible.
    if( this.maximized[ groupName ] === true ){
        this.maximized[ groupName ] = false;
    }else{
        this.maximized[ groupName ] = true;
    }    
}

MMUI.GroupScrollList.prototype.addObjectToUI = function( groupName, object, index){
    // var scope = this;

    // var selectObjectEvent = document.createEvent( 'HTMLEvents' );
    // selectObjectEvent.initEvent( 'objectselect', true, true );

    var option = document.createElement( 'div' );
    // option.style.padding = '4px';
    // option.style.whiteSpace = 'nowrap';            
    option.value = object;
    option.setAttribute('gi', index)
    option.id = object.name + '$O'
    option.className = 'groupscrolllist-object'
    option.innerHTML = '&nbsp&nbsp&nbsp'+object.nattr;    

    if( this.isObjectSelected( object ) === true ){
        // option.style.backgroundColor = this.sOColor;
        option.className =  'groupscrolllist-object groupscrolllist-object-selected';
    }

    this.dom.appendChild( option );

    if(! this.oOptions.hasOwnProperty( groupName ) ){
        this.oOptions[ groupName ] = [];        
    }
    this.oOptions[groupName].push( option );

    this.oElements[index] = object;
}

MMUI.GroupScrollList.prototype.selectGroup = function ( group, mode ){
    // console.log( 'GroupScrollList: selectGroup', group, mode)

    if( mode === undefined ){
        console.log('\tno mode defined. Defaulting to reset.')
    }

    //  add to the current selection
    if( mode === 'add'){
        this.sGroups.push( group)    
    }else if(mode === 'remove'){
        var sindex = this.sGroups.indexOf( group, 'to selection' )
        this.sGroups.splice(sindex, 1)
        // console.log('\tremoving', group)
    //  reset selection
    }else{
        this.sGroups = [];
        this.sObjects = [];
        this.sGroups.push( group)
    }

    // make sure we don't have any objects of this group selected
    var i, j;
    for( i = 0, j = this.groups[group].length; i < j; i++){
        var sindex = this.sObjects.indexOf(this.groups[group][i])
        if( sindex !== -1 ){            
            this.sObjects.splice(sindex, 1)
        }
    }

}

MMUI.GroupScrollList.prototype.selectObject = function ( object, mode, index){
    // console.log( 'GroupScrollList: selectObject', object, mode, index)

    if( mode === undefined ){
        console.log('\tno mode defined. Defaulting to reset.')
    }

    if( mode === 'add' ){
        //  keep adding to the current selection
        this.sObjects.push( object )
        // console.log('\tadding', object, 'to selection')
    }else if(mode === 'addInbetween'){
        if(this.sObjects.length === 0 ){
            this.sObjects.push( object )
        }else{
            // console.log('select object from', this.psi, 'to', index)
            if((this.psi + 1) < index){
                var i;
                // console.log(this.psi, 'is smaller then', index)
                for( i = (this.psi +1); i <= index; i++){
                    // console.log('\t', i)
                    // console.log('\tselecting', this.oElements[i].name)
                    this.sObjects.push(this.oElements[i]);
                }
            }else{
                // console.log(this.psi, 'is bigger then', index)
                for( i = index; i <= (this.psi-1); i++){
                    // console.log('\t', i)
                    // console.log('\tselecting', this.oElements[i].name)
                    this.sObjects.push(this.oElements[i]);
                }
            }
        }
    }else if(mode === 'remove'){
        //  remove from the current selection
        var sindex = this.sObjects.indexOf( object, 'to selection' )
        this.sObjects.splice(sindex, 1)
        // console.log('\tremoving', object)
    }else{
        // console.log('\tonly selecting', object)
        this.sGroups = [];
        this.sObjects = [];
        this.sObjects.push( object )
    }
    this.psi = index; // set the previously selected index

    //  make sure we don't have a group selected which contains the current
    //  object, if we do, deselect the group since the user only want to select
    //  one object and not the entire group
    if( this.sGroups.length > 0 ){        
        var g, h, i, j;
        for( g = 0, h = this.sGroups.length; g < h; g++ ){            
            // console.log('bla', this.groups[this.sGroups[g]])
            if( this.groups[this.sGroups[g]] !== undefined){
                for( i = 0, j = this.groups[this.sGroups[g]].length; i < j; i++){
                    var sindex = this.groups[this.sGroups[g]].indexOf(object)
                    if(sindex !== -1){                        
                        this.sGroups.splice(sindex, 1)
                    }
                }
            }
        }
    }else{
        console.log('No groups selected.')
    }
}

MMUI.GroupScrollList.prototype.removeAllFromUI = function (){
     while ( this.dom.children.length > 0 ){
        this.dom.removeChild( this.dom.firstChild );
    }
    this.gOptions = []
    this.oOptions = {}
    this.oElements = []

    return this;   
}

MMUI.GroupScrollList.prototype.addMenuItem = function ( text ){
    this.menuItemTxts.push( text );
    return this;
}

MMUI.GroupScrollList.prototype.addMenu = function (){
    // console.log('GroupScrollList: addMenu')

    var listOptions = new MMUI.Panel();        
    // listOptions.setDisplay("none")
    // listOptions.setPosition('absolute')  
    listOptions.setClass( 'groupscrolllist-popup')
    // listOptions.dom.style.zIndex = 10;
    this.dom.appendChild( listOptions.dom );
    this.menu = listOptions;

    var i, j;
    var optionMenu, optionItem;
    for( i = 0, j = this.menuItemTxts.length; i < j; i++){
        optionItem = new MMUI.Panel();
        // optionItem.setClass( 'keyframeListOption' );    
        optionItem.setTextContent( this.menuItemTxts[i] );   
        listOptions.add( optionItem );        
    }
}

MMUI.GroupScrollList.prototype.getSelectedObjects = function(){    
    return this.sObjects;
}

MMUI.GroupScrollList.prototype.updateUI = function (){
    // console.log('GroupScrollList: updateUI')

    //  remove all elements
    this.removeAllFromUI();    

    //  add groups and objects
    var tc = 0;
    for(var thisGroup in this.groups){
        //  if no specific type is defined, display all
        if (this.typeToDisplay !== undefined){
            this.addGroupToUI( thisGroup )
            if( this.maximized[ thisGroup ] === true ){        
                for( var i = 0; i < this.groups[thisGroup].length; i++){
                    this.addObjectToUI( thisGroup, this.groups[thisGroup][i], tc);
                    tc += 1;
                }
            }    
        //  if a specific type is defined, only display those groups of the 
        //  specified object type
        }else{
            if( this.groupTypes[thisGroup] === this.typeToDisplay ){
                this.addGroupToUI( thisGroup )
                if( this.maximized[ thisGroup ] === true ){        
                    for( var i = 0; i < this.groups[thisGroup].length; i++){
                        this.addObjectToUI(thisGroup, this.groups[thisGroup][i], tc);
                        tc += 1;
                    }
                }     
            }
        }        
    }

    //  add menu
    this.menu = undefined;
    this.addMenu();
}