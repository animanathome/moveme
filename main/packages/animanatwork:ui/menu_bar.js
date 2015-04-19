MMUI.NavigationBar = function(){
    MMUI.Element.call( this );

    var dom = document.createElement( 'nav')
    dom.className = "navbar navbar-default"
    this.dom = dom;
}

MMUI.NavigationBar.prototype = Object.create( MMUI.Element.prototype );

MMUI.NavigationBar.prototype.add = function () {
    for ( var i = 0; i < arguments.length; i++ ) {
        this.dom.appendChild( arguments[i].dom );
    }
    return this;
}

MMUI.Navigation = function (){
    MMUI.Element.call( this );

    var dom = document.createElement( 'ul' );
    dom.className = "nav nav-pills"
    this.dom = dom
    return this;
}

MMUI.Navigation.prototype = Object.create( MMUI.Element.prototype );

MMUI.Navigation.prototype.add = function () {
    for ( var i = 0; i < arguments.length; i++ ) {
        this.dom.appendChild( arguments[i].dom );
    }
    return this;
}

MMUI.MenuGrp = function( title ){
    MMUI.Element.call( this );

    var dom = document.createElement( 'li' );
    dom.className = 'dropdown';        
    this.dom = dom

    var titleElement = document.createElement('a')
    titleElement.className = 'dropdown-toggle';        
    titleElement.setAttribute("data-toggle", "dropdown");
    titleElement.textContent = title
    dom.appendChild( titleElement )

    var carrotElement = document.createElement('b')
    carrotElement.className = 'caret'
    titleElement.appendChild( carrotElement )

    var groupElement = document.createElement('ul')
    groupElement.className = "dropdown-menu"
    dom.appendChild( groupElement)

    this.group = groupElement

    return this;    
}

MMUI.MenuGrp.prototype = Object.create( MMUI.Element.prototype );

MMUI.MenuGrp.prototype.add = function () {
    for ( var i = 0; i < arguments.length; i++ ) {
        this.group.appendChild( arguments[i].dom );
    }
    return this;
}

MMUI.SubMenuGrp = function( title ){
    MMUI.Element.call( this )

    var dom = document.createElement( 'li' );
    dom.className = 'dropdown-submenu';
    this.dom = dom

    var titleElement = document.createElement('a')
    titleElement.textContent = title
    dom.appendChild( titleElement )   

    var groupElement = document.createElement('ul')
    groupElement.className = "dropdown-menu"
    dom.appendChild( groupElement)

    this.group = groupElement

    return this;
}

MMUI.SubMenuGrp.prototype = Object.create( MMUI.MenuGrp.prototype );


MMUI.MenuGlyph = function( glyphicon ){
    if( glyphicon === undefined ){
        console.log('Warning, no glyphicon defined. Resetting to search')
        glyphicon = 'search'
    }

    MMUI.Element.call( this );

    var dom = document.createElement( 'a');    
    this.dom = dom;

    var span = document.createElement( 'span');
    dom.className = 'glyphicon glyphicon-'+glyphicon
    dom.appendChild( span )    

    return this;
}

MMUI.MenuGlyph.prototype = Object.create( MMUI.Element.prototype );

MMUI.MenuGlyph.prototype.setLink = function( link ){
    // console.log('MMUI.MenuGlyph.setLink', link)
    // console.log('\t', this.img)
    this.dom.href = link;

    return this;
}

MMUI.MenuLogo = function( imagePath ){
    MMUI.Element.call( this );

    var dom = document.createElement( 'a');
    dom.className = 'navbar-brand'
    this.dom = dom;

    var img = document.createElement('img');
    img.setAttribute('alt', 'Brand')
    img.className = "img-rounded"
    img.src = imagePath;
    dom.appendChild( img )    
    this.img = img;

    return this;
}

MMUI.MenuLogo.prototype = Object.create( MMUI.Element.prototype );

MMUI.MenuLogo.prototype.setImageDimensions = function( width , height){
    this.img.style.width = width;
    this.img.style.height = height;

    return this;
}

MMUI.MenuLogo.prototype.setLink = function( link ){
    // console.log('MMUI.MenuLogo.setLink', link)
    // console.log('\t', this.img)
    this.dom.href = link;

    return this;
}


MMUI.MenuItem = function( title ){
    MMUI.Element.call( this );

    var dom = document.createElement( 'li' );
    this.dom = dom

    var sdom = document.createElement( 'a')
    sdom.innerHTML = title
    sdom.href='#'
    this.sdom = sdom
    this.dom.appendChild( sdom )

    return this;      
}

MMUI.MenuItem.prototype = Object.create( MMUI.Element.prototype );

MMUI.MenuItem.prototype.add = function () {
    for ( var i = 0; i < arguments.length; i++ ) {
        this.dom.appendChild( arguments[i].dom );
    }
    return this;
}

MMUI.MenuItem.prototype.addShortcut = function( title ){
    var shortcut = document.createElement('span')
    shortcut.className = 'kbd text-muted anim-kbd'
    shortcut.textContent = title
    this.sdom.appendChild( shortcut )

    return this;
}

MMUI.MenuDivider = function(){
    MMUI.Element.call( this )

    var dom = document.createElement('li')
    dom.className = 'divider'
    this.dom = dom

    return this;
}