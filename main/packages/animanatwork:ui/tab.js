MMUI.Tab = function( ){
	MMUI.Element.call( this );

	var scope = this;
	var dom = document.createElement( 'div' );
	dom.className = 'tab-parent';

	this.width = undefined 
    this.dom = dom;
    this.document = document;

    //this.bgColor = '#B3B3B3' // background color
    // this.slColor = '#B3B3B3' // selected tab color

    this.uiLabels = {} // list of the actuall ui elements
	this.labels = [] // name and label of the tab
	this.labelIcons = [] // icons of the tab
	this.activeTab = undefined

    var tabSelectEvent = document.createEvent( 'HTMLEvents' );
    tabSelectEvent.initEvent( 'tabselect', true, true );

    var onMouseDown = function ( event ){
        //console.log('MMUI.Tab.onMouseDown')
        event.preventDefault();

        // console.log('\ttarget:', event.target)

        scope.activeTab = event.target.value
        scope.update()

        scope.dom.dispatchEvent( tabSelectEvent );
	}

	// var onTabSelect = function ( event )
	// {
	// 	console.log('MMUI.Tab.onTabSelect')
	// }

 	dom.addEventListener( 'mousedown', onMouseDown, false );
 	// dom.addEventListener( 'tabselect', onTabSelect, false ); 
	return this;
}

MMUI.Tab.prototype = Object.create( MMUI.Element.prototype );

var tabEvents = [ 'TabSelect'];
tabEvents.forEach( function ( event ) {
    var method = 'on' + event;
    MMUI.Tab.prototype[ method ] = function ( callback ) {
        this.dom.addEventListener( event.toLowerCase(), callback, false );
        return this;
    };
} );

MMUI.Tab.prototype.setWidth = function( width )
{
	/*
	Description: to be able to specifiy the width of each individual tab
		we need to know the total width of the parent element
		NOTE: I know there are other ways to define this automacially... maybe
		we can add this later on when we can / add the resizing of the scenelist
	*/
	this.width = width
}

MMUI.Tab.prototype.addTab = function( label, labelIcon )
{
	//console.log('MMUI.Tab.addTab:', label, labelIcon)

	this.labels.push( label )
	this.labelIcons.push( labelIcon )
}

MMUI.Tab.prototype.build = function()
{
	//console.log('Tab.build')
	if( this.width === undefined ){
		//console.warn('Width has not been defined. ')
		return
	}

	var labelWidth = this.width / this.labels.length;

	this.activeTab = this.labels[0]
	for( var i = 0, j = this.labels.length; i < j; i++){
		// console.log('\tAdding tab', this.labels[i])

		var item = document.createElement( 'div' );
		item.className = 'tab-item';
		item.style.backgroundImage="url('"+this.labelIcons[i]+"')";
    	item.value = this.labels[i]; 	
    	item.style.left = (i * labelWidth) + 'px'
    	item.style.width = labelWidth + 'px'
    	this.dom.appendChild( item );

    	this.uiLabels[this.labels[i]] = item;
	}

	this.update()
}

MMUI.Tab.prototype.update = function()
{
    for( var tabItem in this.uiLabels ){
    	this.uiLabels[tabItem].className = 'tab-item'
    }
    // console.log('\tactive tab', this.activeTab)
    this.uiLabels[this.activeTab].className = 'tab-item tab-item-selected'
}