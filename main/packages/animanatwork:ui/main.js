// Write your package code here!
MMUI = {};

// MMUI.test = function(){
// 	console.log('MMUI test')
// };

MMUI.Element = function () {};

MMUI.Element.prototype = {
    setClass: function( name ){
        this.dom.className = name;
        return this;
    },
    setStyle: function ( style, array ){
        for (var i = 0; i < array.length; i++){
            this.dom.style[ style ] = array[ i ];
        }
    },
    setTextContent : function ( value ){
        this.dom.textContent = value;
        return this;
    }
}

// properties
var properties = [ 'position', 'left', 'top', 'right', 'bottom', 'width', 'height', 
'border', 'borderLeft', 'borderTop', 'borderRight', 'borderBottom', 'borderColor', 
'display', 'overflow', 'margin', 'marginLeft', 'marginTop', 'marginRight', 'marginBottom', 
'padding', 'paddingLeft', 'paddingTop', 'paddingRight', 'paddingBottom', 'color', 
'backgroundColor', 'opacity', 'fontSize', 'fontWeight', 'textTransform', 'cursor', 'float'];

properties.forEach( function ( property ) {

	var method = 'set' + property.substr( 0, 1 ).toUpperCase() + property.substr( 1, property.length );
	MMUI.Element.prototype[ method ] = function () {
		this.setStyle( property, arguments );
		return this;
	};
} );

MMUI.Element.prototype.setId = function( value){
  this.dom.setAttribute('id', value);
  return this;
}

MMUI.Element.prototype.setClass = function( className ){
  this.dom.className = className;
  return this;
}

MMUI.Element.prototype.addClass = function( className ){
  this.dom.className = this.dom.className+" "+className;
  return this;
}


//  events
var standardEvents = [ 'KeyUp', 'KeyDown', 'MouseOver', 'MouseOut', 'Click', 
                       'Start',     // just before we start dragging
                       'Change',    // during the dragging or move action
                       'Finish',    // at the end of the dragging or move action
                       'Command',   // when an option gets selected                       
                       ];
standardEvents.forEach( function ( event ) {
	var method = 'on' + event;
	MMUI.Element.prototype[ method ] = function ( callback ) {
		this.dom.addEventListener( event.toLowerCase(), callback, false );
		return this;
	};
} );