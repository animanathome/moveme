// <div class="dropdown">
//   <button class="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-expanded="true">
//     Dropdown
//     <span class="caret"></span>
//   </button>
// 	<ul class="dropdown-menu" role="menu" aria-labelledby="dropdownMenu1">
	   // <li role="presentation"><a role="menuitem" tabindex="-1" href="#">Another action</a></li>
//	</ul>
// </div>  

MMUI.Dropdown = function( title ){
	MMUI.Element.call( this )

	var dom = document.createElement('div')
	dom.className = 'dropdown'
	this.dom = dom;

	var dropbtn = document.createElement('button')
	dropbtn.className = 'btn btn-default dropdown-toggle'
	dropbtn.setAttribute('type', 'button')
	dropbtn.setAttribute('data-toggle', "dropdown")
	dropbtn.innerHTML = title;
	this.dropbtn = dropbtn

	dom.appendChild( dropbtn )

	var caret = document.createElement('span')
	caret.className = 'caret'
	
	dropbtn.appendChild( caret )

	var dropgrp = document.createElement('li')
	dropgrp.className = 'dropdown-menu'
	dropgrp.setAttribute('role', 'menu')

	dom.appendChild( dropgrp )

	this.dropgrp = dropgrp;

	return this;
}

MMUI.Dropdown.prototype = Object.create( MMUI.Element.prototype );

MMUI.Dropdown.prototype.add = function () {
    for ( var i = 0; i < arguments.length; i++ ) {
        this.dropgrp.appendChild( arguments[i].dom );
    }
    return this;
}

MMUI.Dropdown.prototype.setTitle = function( title ){
	this.dropbtn.innerHTML = title;
	return this;
}

MMUI.Dropdown.prototype.removeAll = function(){
	// console.log('removeAll')
    
    while (this.dropgrp.firstChild){
        this.dropgrp.removeChild(this.dropgrp.firstChild);
    }	
	return this;
}


MMUI.DropdownItem = function(title){
	MMUI.Element.call( this )

	var dom = document.createElement('li')
	dom.setAttribute('role', 'presentation')
	this.dom = dom;

	var adom = document.createElement('a')
	adom.setAttribute('role', 'menuitem')
	adom.setAttribute('tabIndex', '-1')
	adom.innerHTML = title;

	this.dom.appendChild( adom )

	return this;
}

MMUI.DropdownItem.prototype = Object.create( MMUI.Element.prototype );

MMUI.DropdownDivider = function(){
	MMUI.Element.call( this );

	var dom = document.createElement('li')
	dom.className = 'divider'
	dom.setAttribute('role', 'presentation')
	this.dom = dom;

	return this;
}

MMUI.DropdownDivider.prototype = Object.create( MMUI.Element.prototype );