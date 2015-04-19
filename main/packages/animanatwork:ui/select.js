MMUI.Select = function () {

    MMUI.Element.call( this );

    var scope = this;

    var dom = document.createElement( 'select' );
    dom.className = 'Select';
    // dom.style.width = '64px';
    // dom.style.height = '16px';
    // dom.style.border = '0px';
    // dom.style.padding = '0px';

    this.dom = dom;

    return this;

};

MMUI.Select.prototype = Object.create( MMUI.Element.prototype );

MMUI.Select.prototype.setMultiple = function ( boolean ) {

    this.dom.multiple = boolean;

    return this;

};

MMUI.Select.prototype.setOptions = function ( options ) {

    var selected = this.dom.value;

    while ( this.dom.children.length > 0 ) {

        this.dom.removeChild( this.dom.firstChild );

    }

    for ( var key in options ) {

        var option = document.createElement( 'option' );
        option.value = key;
        option.innerHTML = options[ key ];
        this.dom.appendChild( option );

    }

    this.dom.value = selected;

    return this;

};

MMUI.Select.prototype.getValue = function () {

    return this.dom.value;

};

MMUI.Select.prototype.setValue = function ( value ) {
    console.log('MMUI.Select.setValue', value)

    this.dom.value = value;

    return this;
};

MMUI.Select.prototype.getSelectedText = function(){
    return this.dom.options[this.dom.value].text
}

MMUI.Select.prototype.setSelectedText = function( text ){
    // console.log('Select.setSelectedText', text)
    // console.log('\tlength', this.dom.options.length)

    var i, j;
    for( i = 0, j = this.dom.options.length; i < j; i++){
        if( this.dom.options[i].text === text ){
            this.dom.value = i;
            return;
        }
    }
}