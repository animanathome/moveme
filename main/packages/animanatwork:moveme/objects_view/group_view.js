MMUI.Group = function( groupManager ){
	MMUI.Element.call( this );

    var scope = this;    

    var dom = document.createElement( 'div' );    
    dom.className = 'group-panel';
    // dom.style.backgroundColor = '#B3B3B3'
    // dom.style.cursor = 'default';    
    // dom.style.overflow = 'auto';

    this.uiGroups = {}	// contains the ui elements for the different groups
    // this.sOColor = '#555'	// selected object background color
    // this.sGColor = '#666'   // selected group background color

    //	since gm is a dictionary of groupManagers we have to ensure
    //	we can track the different settings for each individual one
    this.maximized = {}
    this.sGroups = {}; // list of the selected groups
    this.sObjects = []; // list of the selected objects

    this.dom = dom;
    this.document = document;
    var popupYOffset = 50;

    this.menu = undefined
    this.selectedMenuItem = undefined
    this.menuItemTxts = [] // labels for the different menuItems    

    //	group manager
	this.gm = groupManager	//	dictionary of groupManagers
	this.gt = 'asset'		//	default active group type

    var maximizeEvent = document.createEvent( 'HTMLEvents' );
    maximizeEvent.initEvent( 'maximize', true, true );

    var groupSelectEvent = document.createEvent( 'HTMLEvents' );
    groupSelectEvent.initEvent( 'groupselect', true, true );  

    var selectObjectEvent = document.createEvent( 'HTMLEvents' );
    selectObjectEvent.initEvent( 'objectselect', true, true );   

    var commandEvent = document.createEvent( 'HTMLEvents' );
    commandEvent.initEvent( 'command', true, true );    

    var onMouseDown = function ( event ){
        console.log('Group: onMouseDown')
        event.preventDefault();

		if( event.button === 0 ){
            //  left button
            dom.addEventListener( 'mouseup', onMouseUp, false );
        }else if(event.button === 2){
            //  right button
            if( scope.menu === undefined) return;
            
            // console.log('display', scope.menu.dom.style.display)

            scope.menu.setDisplay('block')

            console.log('position', event.layerX, event.layerY)
            console.log('\tparent', scope.dom)

            var parentPosition = MM.elementWorldPosition( scope.dom);
            scope.menu.dom.style.left = event.layerX+'px';
            scope.menu.dom.style.top = event.layerY+'px';

            console.log('\tmenu', scope.menu.dom)
            // scope.menu.dom.style.left = event.clientX-parentPosition.x+'px';
            // scope.menu.dom.style.top = event.clientY-parentPosition.y+popupYOffset+'px';

            dom.addEventListener( 'mouseup', onMouseUp, false );
        }else{

        }
    }

	var onMouseUp = function ( event ){
        console.log('Group: onMouseUp')

        if(event.button === 0) {
            // left mouse button
        //  MAXIMIZE
            if( event.target.id.indexOf('$M') !== -1){
                console.log('maximize target', event.target)
                scope.setMaximizeGroupValue( event.target.value );
                scope.dom.dispatchEvent( maximizeEvent );
            }

        //  GROUP
            if( event.target.id.indexOf('$G') !== -1){
                scope.selectGroup( event.target.value );
                scope.dom.dispatchEvent( groupSelectEvent );
            }

        //  OBJECT
            if( event.target.id.indexOf('$O') !== -1){
                console.log('\tSelecting object')
                var mode = 'reset'
                if( event.ctrlKey === true || event.shiftKey === true ){
                    mode = 'add'
                }else if(event.altKey === true){
                    mode = 'remove'
                }
                console.log('\tObject', event.target.value)
                console.log('\tMode', mode)
                scope.selectObject( event.target.value , mode);
                scope.dom.dispatchEvent( selectObjectEvent );
            }
        }else if( event.button === 2){
            //  right mouse button
            if( scope.menu === undefined )
                return 
            
            scope.menu.setDisplay('none')
                
            scope.selectedMenuItem = event.target.textContent;
            scope.dom.dispatchEvent( commandEvent );    

            scope.dom.removeEventListener( 'mouseup', onMouseUp, false );            
        }else{
        }
    }

    var onMaximize = function( event ){
        // console.log('MMUI.Group.onMaximize')    
        scope.update()       
    }

    var onGroupSelect = function( event ){
        // console.log('MMUI.Group.onGroupSelect')
        scope.update()
    }

    var onObjectSelect = function( event ){
        // console.log('MMUI.Group.onObjectSelect')
        scope.update()
    }    

    var onCommand = function( event ){
        // console.log('MMUI.Group.onCommand')
    }      

    dom.addEventListener( 'mousedown', onMouseDown, false );
    dom.addEventListener( 'maximize', onMaximize, false ); 
    dom.addEventListener( 'groupselect', onGroupSelect, false ); 
    dom.addEventListener( 'objectselect', onObjectSelect, false );
    dom.addEventListener( 'command', onCommand, false );       
	return this
}


MMUI.Group.prototype = Object.create( MMUI.Element.prototype );

var events = [ 'Maximize' , 'GroupSelect', 'ObjectSelect'];
events.forEach( function ( event ) {
    var method = 'on' + event;
    MMUI.Group.prototype[ method ] = function ( callback ) {
        this.dom.addEventListener( event.toLowerCase(), callback, false );
        return this;
    };
} );

MMUI.Group.prototype.setMaximizeGroupValue = function( groupName ){
	console.log('MMUI.Group: setMaximizeGroupValue', groupName)

    if( this.maximized[this.gt][ groupName ] === true ){
        this.maximized[this.gt][ groupName ] = false;
    }else{
        this.maximized[this.gt][ groupName ] = true;
    }   	
}

MMUI.Group.prototype.maximize = function(){
	for(var groupName in this.maximized[this.gt]){
		if(this.maximized[this.gt][groupName] === false){
            console.log('maximizing', groupName)

			var children = this.uiGroups[groupName].children
			//	skip the first 2, otherwise we'll be hiding ourselves
			for( var i = 2, j = children.length; i < j; i++){		
				children[i].style.display = 'none';  
			}
		}
	}
}

MMUI.Group.prototype.removeAll = function(){
	// console.log('MMUI.Group: removeAll')

    while ( this.dom.children.length > 0 ) 
    {
        this.dom.removeChild( this.dom.firstChild );
    }	
    this.gOptions = []
    this.oOptions = {}
    return this
}

MMUI.Group.prototype.isGroupSelected = function( groupName ){
	if(! this.sGroups.hasOwnProperty( this.gt )){
		this.sGroups[ this.gt ] = []
	}

    if( this.sGroups[this.gt].indexOf( groupName ) != -1 ){
        return true;
    }
    return false;
}

MMUI.Group.prototype.selectGroup = function ( groupName ){
    // console.log( 'MMUI.Group: selectGroup', groupName)

	if(! this.sGroups.hasOwnProperty( this.gt )){
		this.sGroups[ this.gt ] = []
	}

    this.sGroups[this.gt] = [];
    this.sObjects = [];
    this.sGroups[this.gt].push( groupName )
}

MMUI.Group.prototype.addGroup = function( groupName, indent, parent){
	// console.log('MMUI.Group.addGroup', groupName, indent, parent)

    var option = document.createElement( 'div' );
    option.className = 'group-group'
    // option.style.height = '14px';
    // option.style.paddingLeft = '4px';
    // option.style.paddingTop = '3px';
    // option.style.paddingBottom = '3px';
    // option.style.overflow = 'hidden'
    if( this.isGroupSelected( groupName ) === true ){
        // option.style.backgroundColor = this.sGColor;
        option.className = 'group-group group-group-selected'
    }

    if( parent === undefined ){
    	this.dom.appendChild( option );
    }else{
    	this.uiGroups[parent].appendChild( option )
    }
    this.uiGroups[groupName] = option;    

    var mm = document.createElement( 'div' );
    mm.value = groupName
    mm.style.float = 'left'
    
    // var space = '&nbsp'
    // var offset = 12;
    // for( var i = 0; i < indent; i++){
    // 	space += '&nbsp&nbsp'
    // 	offset += 6
    // }

    // mm.style.width = offset + 'px'
    mm.className = 'group-group-min-max'
    mm.id = groupName + '$M' // min max

    if( ! this.maximized.hasOwnProperty( this.gt )){
    	this.maximized[ this.gt ] = {}
    }

    if( ! this.maximized[this.gt].hasOwnProperty( groupName ) ){
    	this.maximized[this.gt][ groupName ] = true;
    }

    if( this.maximized[this.gt][ groupName ] == true){
        mm.innerHTML = '-';    
    }else{
        mm.innerHTML = '+';
    }
    option.appendChild( mm )
    
    var txt = document.createElement( 'div' );
    txt.className='group-group-name'
    txt.value = groupName
    txt.innerHTML = groupName
    // txt.style.left = offset + 'px'
    // txt.style.overflow = 'hidden'
    txt.id = groupName + '$G'
    option.appendChild( txt )

    return option
}

MMUI.Group.prototype.selectObjects = function( objects ){
    this.sGroups = [];
    this.sObjects = objects;
}

MMUI.Group.prototype.selectObject = function ( object, mode ){
    console.log( 'MMUI.Group: selectObject', object, mode )

    if( mode === 'add' ){
        //  keep adding to the current selection
        this.sObjects.push( object )
        console.log('\tadding', object, 'to selection')
    }else if(mode === 'remove'){
        //  remove from the current selection
        var sindex = this.sObjects.indexOf( object )
        this.sObjects.splice(sindex, 1)
        console.log('\tremoving', object, 'from selection')
    }else{
        console.log('\tsetting selection to', object)
        this.sGroups = [];
        this.sObjects = [];
        this.sObjects.push( object )
    }

    console.log('\tnew selection', this.sObjects)
}

MMUI.Group.prototype.isObjectSelected = function( object ){
    if( this.sObjects.indexOf( object ) != -1 ){
        return true;
    }
    return false
}

MMUI.Group.prototype.addObject = function( object, indent, parent){
	// console.log('MMUI.Group.addObject', object, indent, parent)

    var option = document.createElement( 'div' );
    // option.style.padding = '3px'
    // option.style.paddingLeft = '4px';
    // option.style.paddingTop = '2px';
    // option.style.paddingBottom = '2px';
    // option.style.whiteSpace = 'nowrap';            
    option.value = object;
    option.id = object.name + '$O'
    option.className = 'group-object'

	// var innerHTML = ''
 //    for( var i = 0; i < indent; i++ )
	//     innerHTML += '&nbsp&nbsp&nbsp&nbsp&nbsp'
	// innerHTML += object.name;
	option.innerHTML =  object.name;

    if( this.isObjectSelected( object ) === true ){
        // option.style.backgroundColor = this.sOColor;
        option.className = 'group-object group-object-selected';
    }

	if( parent === undefined ){
		this.dom.appendChild( option );
	}else{
		this.uiGroups[parent].appendChild( option );
	}
}   


MMUI.Group.prototype.addMenuItem = function ( text )
{
	// console.log('Group: addMenuItem')

    this.menuItemTxts.push( text );
    return this;
}

MMUI.Group.prototype.addMenu = function (){
    // console.log('Group: addMenu')
    var listOptions = new MMUI.Panel();        
    listOptions.setClass( 'group-popup')
    this.dom.appendChild( listOptions.dom );
    this.menu = listOptions;

    var i, j;
    var optionMenu, optionItem;
    for( i = 0, j = this.menuItemTxts.length; i < j; i++){
        optionItem = new MMUI.Panel();
        optionItem.setTextContent( this.menuItemTxts[i] );   
        listOptions.add( optionItem );        
    }
}

MMUI.Group.prototype.update = function()
{
	// console.log('MMUI.Group: update')
	this.removeAll();
	var scope = this;
	this.gm[this.gt].scene.traverse( function( group ){
		if( group.parent != undefined ){
			scope.addGroup( group.name, group.depth, group.parent.name)
		}else{
			scope.addGroup( group.name, group.depth)
		}
		
		for( var i = 0; i < group.content.length; i++){
			scope.addObject( group.content[i], group.depth, group.name )
		}
	})
	this.maximize();
	
	//  add menu
    this.menu = undefined;
    this.addMenu();
}