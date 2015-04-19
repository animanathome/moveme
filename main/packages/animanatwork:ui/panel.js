MMUI.Panel = function () {    
    MMUI.Element.call( this );     
    var dom = document.createElement( 'div' );
    dom.className = 'Panel';
    dom.style.userSelect = 'none';            
    this.dom = dom;
    
    return this;
}

MMUI.Panel.prototype = Object.create( MMUI.Element.prototype );

MMUI.Panel.prototype.add = function () {
    for ( var i = 0; i < arguments.length; i++ ) {
        this.dom.appendChild( arguments[i].dom );
    }
    return this;
}

MMUI.CollapsiblePanel = function () {

    MMUI.Panel.call( this );

    this.setClass( 'panel collapsible' );

    var scope = this;

    this.static = new MMUI.Panel();
    this.static.setClass( 'static' );
    this.static.onClick( function () {
        scope.toggle();
    } );
    this.dom.appendChild( this.static.dom );

    this.contents = new MMUI.Panel();
    this.contents.setClass( 'content' );
    this.dom.appendChild( this.contents.dom );

    var button = new MMUI.Panel();
    button.setClass( 'button' );
    this.static.add( button );

    this.isCollapsed = false;

    return this;

};

MMUI.CollapsiblePanel.prototype = Object.create( MMUI.Panel.prototype );

MMUI.CollapsiblePanel.prototype.addStatic = function () {

    this.static.add.apply( this.static, arguments );
    return this;

};

MMUI.CollapsiblePanel.prototype.removeStatic = function () {

    this.static.remove.apply( this.static, arguments );
    return this;

};

MMUI.CollapsiblePanel.prototype.clearStatic = function () {

    this.static.clear();
    return this;

};

MMUI.CollapsiblePanel.prototype.add = function () {

    this.contents.add.apply( this.contents, arguments );
    return this;

};

MMUI.CollapsiblePanel.prototype.remove = function () {

    this.contents.remove.apply( this.contents, arguments );
    return this;

};

MMUI.CollapsiblePanel.prototype.clear = function () {

    this.contents.clear();
    return this;

};

MMUI.CollapsiblePanel.prototype.toggle = function() {

    this.setCollapsed( !this.isCollapsed );

};

MMUI.CollapsiblePanel.prototype.collapse = function() {

    this.setCollapsed( true );

};

MMUI.CollapsiblePanel.prototype.expand = function() {

    this.setCollapsed( false );

};

MMUI.CollapsiblePanel.prototype.setCollapsed = function( boolean ) {

    if(boolean){
        this.dom.classList.add('collapsed');
    }else{
        this.dom.classList.remove('collapsed');
    }
    this.isCollapsed = boolean;

    if(this.onCollapsedChangeCallback !== undefined){
        this.onCollapsedChangeCallback( boolean );
    }
};

MMUI.CollapsiblePanel.prototype.onCollapsedChange = function ( callback ) {

    this.onCollapsedChangeCallback = callback;

};