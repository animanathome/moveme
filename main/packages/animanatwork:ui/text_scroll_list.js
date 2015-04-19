MMUI.TextScrollList = function () {
    MMUI.Element.call( this );

    var scope = this;

    var dom = document.createElement( 'div' );
    dom.className = 'TextScrollList';
    //dom.style.background = '#fff';
    // dom.style.border = '1px solid #ccc';
    // dom.style.padding = '0';
    dom.style.cursor = 'default';    
    dom.style.overflow = 'auto';
    // dom.style.overflow = 'scroll';

    this.name = ""
    this.dom = dom;

    this.options = [];
    this.objects = [];

//  SELECTION TAG
    //  filter to only show objects with the specific tag
    this.objectsWithTag = undefined;
    this.selectedIds = [];
    this.numberOfSelected = 0;

    // this allows us to attach a popup optionMenuGrp
    // the specifed menu will be displayed when the user
    //  clicks with the right mouse button with this element
    //  once the user has selected an option from the list 
    //  and let's go, the selected option will be returned
    //  through the command signal    
    this.menu = undefined
    this.menuItemTxts = [] // labels for the different menuItems
    this.selectedMenuItem = undefined

    dom.addEventListener( 'keydown', function ( event ) {

        event.stopPropagation();

    }, false );

    var changeEvent = document.createEvent( 'HTMLEvents' );
    changeEvent.initEvent( 'change', true, true );

    var finishEvent = document.createEvent( 'HTMLEvents' );
    finishEvent.initEvent( 'finish', true, true );

    var commandEvent = document.createEvent( 'HTMLEvents' );
    commandEvent.initEvent( 'command', true, true );

    var onMouseDown = function ( event )
    {
        console.log('TextScrollList: onMouseDown')
        event.preventDefault();
        
        //  textscroll list behaviour
        if(event.button === 0) // left mouse button
        {
            if (scope.objects === undefined){
                console.log('\t', 'No objects in list to select')
                return;
            }
            console.log('\t', event.target.id, scope.name)

            scope.selectedIds = []
            scope.selectedIds.push(parseInt(event.target.id))

            console.log('\tadding id', event.target.id)

            document.addEventListener( 'mousemove', onMouseMove, false );
            document.addEventListener( 'mouseup', onMouseUp, false );

            dom.dispatchEvent( changeEvent );
        
        //  option list behaviour (external)
        }else if(event.button === 2){ // right mouse button
            
            if( scope.menu === undefined) return;
            
            scope.menu.setDisplay('')

            // console.log('position', event.layerX, event.layerY)
            scope.menu.dom.style.left = event.layerX+'px'
            scope.menu.dom.style.top = event.layerY+'px'

            document.addEventListener( 'mouseup', onMouseUp, false );
        }else{            
            // pass
            console.log('\tunsupported mouse button')
        }
    };

    var onMouseMove = function ( event )
    {
        console.log('TextScrollList: onMouseMove', event.target.id)

        scope.selectedIds.push(parseInt(event.target.id))

        console.log('\tadding id', event.target.id)

        scope.selectedIds = scope.selectedIds.filter(function(elem, pos, self) {
            return self.indexOf(elem) == pos;
        })

        //  only update dom when the number of selected elements has changed
        if(scope.numberOfSelected != scope.selectedIds.length)
        {
            dom.dispatchEvent( changeEvent );
        }
        scope.numberOfSelected = scope.selectedIds.length
    };

    var onMouseUp = function ( event )
    {
        // console.log('TextScrollList: onMouseUp')
        // console.log('\tmouse button',event.button)

        //  textscroll list behaviour
        if(event.button === 0) // left mouse button
        {
            document.removeEventListener( 'mousemove', onMouseMove, false );
            document.removeEventListener( 'mouseup', onMouseUp, false );

            //console.log(scope.selectedIds)
            dom.dispatchEvent( finishEvent );
        
        //  option list behaviour (external)
        }else if( event.button === 2){ // right mouse button
            //  hide option list
            scope.menu.setDisplay('none')

            document.removeEventListener( 'mouseup', onMouseUp, false );
            
            // console.log(event.target)
            // console.log(event.target.textContent)
            scope.selectedMenuItem = event.target.textContent;
            dom.dispatchEvent( commandEvent );            
        }else{
            // pass            
        }
    };

    var onChange = function ( event ) {
        //console.log('onChange', scope.name)

        for( var i = 0; i < scope.options.length; i++){
            scope.options[i].style.backgroundColor = '' 
        }

        for( var i = 0; i < scope.selectedIds.length; i++){
            console.log('selected id:', console.log(scope.selectedIds[i]))
            if( scope.selectedIds[i] === undefined){
                // console.log('\t', i, 'is undefined')
                continue;
            }

            var thisId = parseInt(scope.selectedIds[i]);  
            var thisIndex = scope.getIndexById(thisId)
            if(thisIndex !== -1 ){
                if(scope.options[thisIndex] === undefined){
                    // console.log('No dom element on index', thisIndex)
                    continue
                }
                scope.options[thisIndex].style.backgroundColor = '#555'
            }
        }
    };

    var onCommand = function( event ){
        console.log('TextscrollList: onCommand')
    }

    var onFinish = function ( event ){
        // console.log('TextscrollList: onFinish')
    }

    dom.addEventListener( 'mousedown', onMouseDown, false );
    dom.addEventListener( 'change', onChange, false ); 
    dom.addEventListener( 'finish', onFinish, false );   
    dom.addEventListener( 'command', onCommand, false );    

    return this;
}

MMUI.TextScrollList.prototype = Object.create( MMUI.Element.prototype );

MMUI.TextScrollList.prototype.getSelectedObjects = function ()
{
    //console.log('TextScrollList: getSelectedObjects', this.name)
    var selectedObjects = [];
    
    for(var i = 0; i < this.selectedIds.length; i++){        
        for(var j = 0; j < this.objects.length; j++){ 
            //console.log('\tlooking at ', this.objects[j])           
            // for some reason we have a "undefined" entry sneaking in
            // check where this is coming from            
            if(this.objects[j] !== undefined){
                if( this.objects[j].id === parseInt(this.selectedIds[i])){
                    selectedObjects.push( this.objects[j])
                }
            }
        }
    }

    // console.log("selected", selectedObjects )
    return selectedObjects;
};

MMUI.TextScrollList.prototype.addMenuItem = function ( text )
{
    this.menuItemTxts.push( text );
}

MMUI.TextScrollList.prototype.addMenu = function ()
{
    var listOptions = new MMUI.Panel();        
    listOptions.setDisplay("none")
    listOptions.setPosition('absolute')  
    listOptions.setClass( 'keyframeListOptions')
    this.dom.appendChild( listOptions.dom );
    this.menu = listOptions;

    var i, j;
    var optionMenu, optionItem;
    for( i = 0, j = this.menuItemTxts.length; i < j; i++){
        optionItem = new MMUI.Panel();
        optionItem.setClass( 'keyframeListOption' );    
        optionItem.setTextContent( this.menuItemTxts[i] );   
        listOptions.add( optionItem );        
    }
}

MMUI.TextScrollList.prototype.addObject = function ( object )
{
    // console.log('TextScrollList: addObject', object.name, this.name)

    //  make sure we don't already have the object in our list
    var nObjects = this.objects.length
    var isPart = false
    while( nObjects --){
        if( this.objects[nObjects].id === object.id){
            isPart = true;
            break; break;
        }
    }

    if(isPart === true){
        console.log('\tobject', object.name, 'is already part of the list')
        return this
    }

    this.objects.push( object )

    this.updateUI();

    return this
};

MMUI.TextScrollList.prototype.removeObject = function ( object )
{

    this.removeObjectById( object.id )
    this.updateUI();

    return this
}


MMUI.TextScrollList.prototype.selectAll = function()
{
    //console.log('TextScrollList: selectAll', this.name)

    for( var i = 0; i < this.objects.length; i++){
        this.selectedIds.push( this.objects[i].id)
    }

    this.updateUI();

    return this
}

MMUI.TextScrollList.prototype.deselectAll = function()
{
    this.selectedIds = [];
    
    this.updateUI();

    return this;
}

MMUI.TextScrollList.prototype.selectObject = function ( object )
{
    console.log('TextScrollList: selectObject', object)

    this.selectedIds = []

    if(object !== null && object !== isNaN() && object !== undefined)
    {
        this.selectedIds.push(object.id)
    }

    this.updateUI();

    return this;
};

MMUI.TextScrollList.prototype.getIndexById = function ( id )
{
    //console.log('TextScrollList: getIndexById', id, this.name)
    var index = -1;
    for(var i = 0; i < this.objects.length; i++){
        if(this.objects[i].id === id){
            index = i;
            break;
        }
    }
    if( index === -1 ){
        console.log('\tUnable to find index', id)
    }            
    return index;    
};

MMUI.TextScrollList.prototype.removeObjectByName = function ( name )
{
    //console.log('TextScrollList: removeObjectByName', name, this.name)

    var index = -1;
    for(var i = 0; i < this.objects.length; i++){
        if(this.objects[i].name === name){
            index = i;
            break;
        }
    }
    if(index !== -1){
        this.objects.splice(index, 1);
    }else{
        console.log('\tunable to remove object from list')
    }
    return this;
};

MMUI.TextScrollList.prototype.removeObjectById = function ( id )
{
    //console.log('TextScrollList: removeObjectById', id, this.name)

    var index = this.getIndexById( id )
    if(index !== -1){
        this.objects.splice(index, 1);
    }else{
        console.log('\tUnable to remove object from list')
    }       

    //  if the object that we just removed was in the selection
    //  list, then remove it from the list
    var i = this.selectedIds.indexOf(id);
    if(i != -1) {
        this.selectedIds.splice(i, 1);
    }else{
        console.log('\tId was not part of the selection list')
    }
};

MMUI.TextScrollList.prototype.addObjectToUI = function ( object )
{
    //console.log('TextScrollList: addObjectToUI', object.name, this.name)
    
    var option = document.createElement( 'div' );
    option.style.padding = '4px';
    option.style.whiteSpace = 'nowrap';            
    option.value = object.name;
    option.innerHTML = object.name;
    option.id = object.id;

    //console.log('\tobject id', object.id)
    //console.log('\tselectedIds', this.selectedIds)

    var length = this.selectedIds.length;
    while( length --)
    {
        //console.log('\t check if item is selected: current selected id',this.selectedIds[length], 'object id', object.id)
        if(this.selectedIds[length] === object.id)
        {
            option.style.backgroundColor = '#555'
            break;
        }
    }

    this.dom.appendChild( option );
    
    this.options.push( option );

    return this;
}

MMUI.TextScrollList.prototype.removeAllFromUI = function ( objects )
{            
    while ( this.dom.children.length > 0 ) 
    {
        this.dom.removeChild( this.dom.firstChild );
    }
    this.options = []

    return this;
};

MMUI.TextScrollList.prototype.updateUI = function ()
{    
    //  remove all 
    this.removeAllFromUI()

    //  add all groups and objects
    for(var i = 0; i < this.objects.length; i++)
    {
        if( this.objectsWithTag !== undefined)
        {
            if(this.objects[i].tag === this.objectsWithTag)
            {
                this.addObjectToUI( this.objects[i] )
            }else{
                //console.log('\t', this.objects[i].name, 'does not have a', this.objectsWithTag, 'tag')
            }
        }else{            
            this.addObjectToUI( this.objects[i] )
        }
    }

    //  add menuItems
    this.menu = undefined;
    this.addMenu();

    return this;
}