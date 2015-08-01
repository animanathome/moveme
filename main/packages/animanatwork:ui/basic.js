MMUI.shortenString = function( yourString, maxLength){
    if( yourString.length <= maxLength){
        return yourString
    }

    //trim the string to the maximum length
    var trimmedString = yourString.substr(0, maxLength);

    //re-trim if we are in the middle of a word
    return trimmedString = trimmedString.substr(0, Math.min(trimmedString.length, trimmedString.lastIndexOf(" ")))+' ...'
}

MMUI.Text = function ( text ) {
    MMUI.Element.call( this );
    
    var dom = document.createElement( 'span' );
    dom.className = 'Text';
    dom.style.cursor = 'default';
    dom.style.display = 'inline-block';
    dom.style.verticalAlign = 'middle';
    
    this.dom = dom;
    this.setValue( text );
    return this;
}

MMUI.Text.prototype = Object.create( MMUI.Element.prototype );

MMUI.Text.prototype.setValue = function ( value ) {
    if( value !== undefined ){
        this.dom.textContent = value;
    }
    return this;
}

MMUI.Input = function () {
    MMUI.Element.call(this);
    var scope = this;
    
    var dom = document.createElement('input');
    dom.className = 'Input';
    // dom.style.padding = '2px';
    // dom.style.border = '1px solid #ccc';
    
    this.dom = dom;
    
    return this;    
}

MMUI.Input.prototype = Object.create( MMUI.Element.prototype );

MMUI.Input.prototype.setValue = function ( value ){
    this.dom.value = value;
    return this;
}

MMUI.Input.prototype.getValue = function (){
    return this.dom.value;
}

MMUI.Text = function ( text ) {
    MMUI.Element.call( this );
    
    var dom = document.createElement( 'span' );
    dom.className = 'Text';
    // dom.style.cursor = 'default';
    // dom.style.display = 'inline-block';
    // dom.style.verticalAlign = 'middle';
    
    this.dom = dom;
    this.setValue( text );
    return this;
}

MMUI.Text.prototype = Object.create( MMUI.Element.prototype );

MMUI.Text.prototype.setValue = function ( value ) {
    if( value !== undefined ){
        this.dom.textContent = value;
    }
    return this;
}

MMUI.Checkbox = function ( boolean ) {

    MMUI.Element.call( this );

    var scope = this;

    var dom = document.createElement( 'input' );
    dom.className = 'Checkbox';
    dom.type = 'checkbox';

    this.dom = dom;
    this.setValue( boolean );

    return this;

};

MMUI.Checkbox.prototype = Object.create( MMUI.Element.prototype );

MMUI.Checkbox.prototype.getValue = function () {

    return this.dom.checked;

};

MMUI.Checkbox.prototype.setValue = function ( value ) {

    if ( value !== undefined ) {

        this.dom.checked = value;

    }

    return this;

};

MMUI.Color = function () {

    MMUI.Element.call( this );

    var scope = this;

    var dom = document.createElement( 'input' );
    dom.className = 'Color';
    dom.style.backgroundColor = 'transparent';

    try { dom.type = 'color'; } catch ( exception ) {}

    this.dom = dom;

    return this;

};

MMUI.Color.prototype = Object.create( MMUI.Element.prototype );

MMUI.Color.prototype.getValue = function () {

    return this.dom.value;

};

MMUI.Color.prototype.getHexValue = function () {

    return parseInt( this.dom.value.substr( 1 ), 16 );

};

MMUI.Color.prototype.setValue = function ( value ) {
    console.log('MMUI.Color.setValue', value)

    this.dom.value = value;

    return this;

};

MMUI.Color.prototype.setHexValue = function ( hex ) {

    this.dom.value = "#" + ( '000000' + hex.toString( 16 ) ).slice( -6 );

    return this;

};

MMUI.Number = function ( number ) {

    MMUI.Element.call( this );

    var scope = this;

    var dom = document.createElement( 'input' );
    dom.className = 'Number';
    dom.value = 0.0;

    this.startValue = dom.value
    dom.startValue = this.startValue

    this.dom = dom;    
    this.setValue( number )
    this.isMoving = false;
        
    dom.addEventListener( 'keydown', function ( event ){
        //  make sure the event doesn't bubble up to the surface 
        //  or all other keydown events...
        // console.log('stop propagation')
        event.stopPropagation();

        //  blur or hide the edit text field when hitting enter
        if ( event.keyCode === 13 ){
            //  get event just before running execute
            dom.dispatchEvent( startEvent );

            dom.blur(); 

            //  get event just after running execute
            dom.dispatchEvent( finishEvent );           
        }

    }, false );

    this.min = -Infinity;
    this.max = Infinity;

    this.precision = 2;
    this.step = 1;

    // this.dom = dom;
    // this.setValue(number);
    
    var startEvent = document.createEvent('HTMLEvents');
    startEvent.initEvent('start', true, true);

    var changeEvent = document.createEvent('HTMLEvents');
    changeEvent.initEvent('change', true, true);

    var finishEvent = document.createEvent( 'HTMLEvents' );
    finishEvent.initEvent( 'finish', true, true );
    
    // var executeEvent = document.createEvent( 'HTMLEvents' );
    // executeEvent.initEvent( 'execute', true, true );

    var distance = 0;
    var onMouseDownValue = 0;
    
    var onMouseDown = function ( event ){
        console.log('Number onMouseDown')

        event.preventDefault();

        this.isMoving = false;

        //  keep track of the start value
        onMouseDownValue = parseFloat( dom.value );
        this.startValue = onMouseDownValue;
        dom.startValue = this.startValue;        

        //  only allow the ability to change the value with the middle button
        if( event.button === 1){
            document.addEventListener( 'mousemove', onMouseMove, false );  
            dom.style.cursor = 'col-resize';
        }
        document.addEventListener( 'mouseup', onMouseUp, false );
    };

    var onMouseMove = function ( event ) {
        // console.log('move')
        // console.log('\tisMoving', this.isMoving)

        //  Dispatch an event just before we're about to change it's value. This so 
        //  we can take a snapshot of whatever we are changing, animCurve for example.
        //  
        //  WARNING: for some reason isMoving is undefined the first time is it called
        //  not sure why as it is being defined on init and mouseDown
        if( this.isMoving === false || this.isMoving === undefined ){
            //  user to starting to move... 
            dom.dispatchEvent( startEvent );
            this.isMoving = false;
        }

        var currentValue = dom.value;

        var movementX = event.movementX || event.webkitMovementX || event.mozMovementX || 0;
        var movementY = event.movementY || event.webkitMovementY || event.mozMovementY || 0;

        distance += movementX - movementY;

        var number = onMouseDownValue + ( distance / ( event.shiftKey ? 5 : 50 ) ) * scope.step;

        dom.value = Math.min( scope.max, Math.max( scope.min, number ) ).toFixed( scope.precision );

        if ( currentValue !== dom.value ) dom.dispatchEvent( changeEvent );

        this.isMoving = true;
    };

    var onMouseUp = function ( event ){
        console.log('onMouseUp')

        document.removeEventListener( 'mousemove', onMouseMove, false );
        document.removeEventListener( 'mouseup', onMouseUp, false );
        
        if ( Math.abs( distance ) < 2 ) {            
            // dom.focus();
            dom.select();
        }
        
        distance = 0;

        //  for undo - to ensure we only pick up the change at the end
        //  as there is no need to store all the individual changes as 
        //  a undo event - otherwise our stack would 
        dom.dispatchEvent( finishEvent );
         
        dom.style.cursor = 'default';

        this.isMoving = false;
    };

    var onChange = function ( event ){
        var number = parseFloat(dom.value);        
        // console.log("Number.onChange", number);    
        
        if( isNaN( number ) === true ){
            // console.log('\tNew value is not a number. Using previous value', this.startValue)
            dom.value = this.startValue;
        }
    }

    // var onFinish = function ( event ){
    //     //  note: here we should only pick up as finished when the actual
    //     //  value has changed
    //     console.log('Number.onFinish')
    //     console.log('\told value', this.startValue)
    //     console.log('\tnew value', parseFloat(dom.value))
    // }

    // var onFocus = function ( event ) 
    // {
    //     console.log('onFocus')

    //     // dom.style.backgroundColor = '';
    //     // dom.style.borderColor = '#ccc';
    //     // dom.style.cursor = '';

    //     dom.className = dom.className + ' onFocus'
    // };

    // var onBlur = function ( event ) 
    // {
    //     console.log('onBlur')

    //     // dom.style.backgroundColor = 'transparent';
    //     // dom.style.borderColor = 'transparent';
    //     // dom.style.cursor = 'col-resize';

    //     dom.className = dom.className + ' onBlur'
    // };    
    
    dom.addEventListener( 'change', onChange, false);
    dom.addEventListener( 'mousedown', onMouseDown, false );
    // dom.addEventListener( 'finish', onFinish, false ); 
    // dom.addEventListener( 'focus', onFocus, false );
    // dom.addEventListener( 'blur', onBlur, false );    
    
    return this;
}

MMUI.Number.prototype = Object.create( MMUI.Element.prototype );

MMUI.Number.prototype.getStartValue = function()
{
    return this.dom.startValue
}

MMUI.Number.prototype.getValue = function () 
{
    // console.log('number getValue')

    return parseFloat( this.dom.value );
}

MMUI.Number.prototype.setValue = function ( value )
{
    // console.log('number setValue')
    if(value !== undefined)
    {
        this.dom.value = value.toFixed( this.precision );
    }
    return this;
}

MMUI.Number.prototype.setRange = function ( min, max){
    this.min = min;
    this.max = max;
    return this;
}

MMUI.Number.prototype.setPrecision = function ( precision ){
    this.precision = precision;
    return this;
}

MMUI.Integer = function ( number ) {

    MMUI.Element.call( this );

    var scope = this;

    var dom = document.createElement( 'input' );
    dom.className = 'Number';
    // dom.style.color = '#0080f0';
    // dom.style.fontSize = '12px';
    // dom.style.backgroundColor = 'transparent';
    // dom.style.border = '1px solid transparent';
    // dom.style.padding = '2px';
    dom.style.cursor = 'col-resize';
    dom.value = '0.00';

    dom.addEventListener( 'keydown', function ( event ) {

        event.stopPropagation();

    }, false );

    this.min = - Infinity;
    this.max = Infinity;

    this.step = 1;
    this.prevValue = undefined;

    this.dom = dom;
    this.setValue( number );

    var changeEvent = document.createEvent( 'HTMLEvents' );
    changeEvent.initEvent( 'change', true, true );

    var distance = 0;
    var onMouseDownValue = 0;

    var onMouseDown = function ( event ) {

        event.preventDefault();

        distance = 0;

        onMouseDownValue = parseFloat( dom.value );

        document.addEventListener( 'mousemove', onMouseMove, false );
        document.addEventListener( 'mouseup', onMouseUp, false );

    };

    var onMouseMove = function ( event ) {

        var currentValue = dom.value;

        var movementX = event.movementX || event.webkitMovementX || event.mozMovementX || 0;
        var movementY = event.movementY || event.webkitMovementY || event.mozMovementY || 0;

        distance += movementX - movementY;

        var number = onMouseDownValue + ( distance / ( event.shiftKey ? 5 : 50 ) ) * scope.step;

        dom.value = Math.min( scope.max, Math.max( scope.min, number ) ) | 0;

        if ( currentValue !== dom.value ) dom.dispatchEvent( changeEvent );

    };

    var onMouseUp = function ( event ) {

        document.removeEventListener( 'mousemove', onMouseMove, false );
        document.removeEventListener( 'mouseup', onMouseUp, false );

        if ( Math.abs( distance ) < 2 ) {

            // dom.focus();
            dom.select();

        }

    };

    var onChange = function ( event ) {
        console.log('onChange', dom.value)

        var number = parseInt( dom.value );
        if ( isNaN( number ) === false ) {
            dom.value = number;

            scope.prevValue = number;
        }else{
            console.log('\tIs not a number. Setting back previous value.')
            dom.value = scope.prevValue;
        }        
    };

    var onFocus = function ( event ) {
        dom.style.backgroundColor = '';
        dom.style.borderColor = '#ccc';
        dom.style.cursor = '';
    };

    var onBlur = function ( event ) {
        dom.style.backgroundColor = 'transparent';
        dom.style.borderColor = 'transparent';
        dom.style.cursor = 'col-resize';
    };

    dom.addEventListener( 'mousedown', onMouseDown, false );
    dom.addEventListener( 'change', onChange, false );
    // dom.addEventListener( 'focus', onFocus, false );
    // dom.addEventListener( 'blur', onBlur, false );

    return this;

};

MMUI.Integer.prototype = Object.create( MMUI.Element.prototype );

MMUI.Integer.prototype.getValue = function () {
    return parseInt( this.dom.value );
};

MMUI.Integer.prototype.setValue = function ( value ) {
    // console.log('setValue', value)

    if ( value === undefined ) {
        console.log('\tIs undefined. Setting back previous value.')
        this.dom.value = this.prevValue;
        return this;       
    }

    if ( isNaN(value) ){
        console.log('\tIs not a number. Setting back previous value.')
        this.dom.value = this.prevValue;
        return this;
    }
    

    this.dom.value = value | 0;
    this.prevValue = this.dom.value;

    return this;
};

MMUI.Integer.prototype.setRange = function ( min, max ) {
    this.min = min;
    this.max = max;

    return this;
};


MMUI.ButtonToolBar = function(){
    MMUI.Element.call( this );

    var scope = this;

    var dom = document.createElement('div')
    dom.className = 'btn-toolbar';
    dom.setAttribute('role', 'toolbar') 

    this.dom = dom;

    return this; 
}

MMUI.ButtonToolBar.prototype = Object.create( MMUI.Element.prototype );

MMUI.ButtonToolBar.prototype.add = function () {
    for ( var i = 0; i < arguments.length; i++ ) {
        this.dom.appendChild( arguments[i].dom );
    }
    return this;
}

MMUI.ButtonGroup = function(){
    MMUI.Element.call( this );

    var scope = this;

    var dom = document.createElement('div')
    dom.className = 'btn-group';
    dom.setAttribute('role', 'group') 

    this.dom = dom;

    return this;
}

MMUI.ButtonGroup.prototype = Object.create( MMUI.Element.prototype );

MMUI.ButtonGroup.prototype.add = function () {
    for ( var i = 0; i < arguments.length; i++ ) {
        this.dom.appendChild( arguments[i].dom );
    }
    return this;
}

MMUI.Button = function ( value ) {

    MMUI.Element.call( this );

    var scope = this;

    var dom = document.createElement( 'button' );
    dom.className = 'btn btn-default';

    this.dom = dom;

    if( value !== undefined ){
        this.dom.textContent = value;
    }

    return this;

};

MMUI.Button.prototype = Object.create( MMUI.Element.prototype );

MMUI.Button.prototype.setLabel = function ( value ) {

    this.dom.textContent = value;

    return this;
};

MMUI.Button.prototype.setImage = function( imagePath ){
    this.dom.style.backgroundImage="url('"+imagePath+"')";  
    this.dom.className = 'btn btn-image btn-default'; 
    return this;
}

MMUI.Button.prototype.addGlyphicon = function( glyphicon ){
    if( glyphicon === undefined ){
        glyphicon = 'star'
    }

    var span = document.createElement('span')
    span.className = "glyphicon glyphicon-"+glyphicon;
    span.setAttribute('aria-hidden', 'true');
    this.dom.appendChild( span );    

    return this;
}

MMUI.Button.prototype.addToolTip = function( message, placement, delay ){
    //  NOTE: be sure to run once the page has been build
    /*    $(function (){
            $('[data-toggle="tooltip"]').tooltip()})
    */
    if( placement === undefined ){
        placement = 'top';
    }
    if( delay === undefined ){
        delay = '400';
    }

    this.dom.setAttribute('title', message);
    this.dom.setAttribute('data-placement', placement);
    this.dom.setAttribute('data-delay', delay);
    this.dom.setAttribute('data-container', 'body');
    this.dom.setAttribute('data-toggle', 'tooltip');

    return this;
}

MMUI.A = function ( value ) {

    MMUI.Element.call( this );

    var scope = this;

    var dom = document.createElement( 'a' );
    dom.className = 'btn btn-default';

    this.dom = dom;

    if(value !== undefined ){
        this.dom.textContent = value;
    }
    return this;

};

MMUI.A.prototype = Object.create( MMUI.Element.prototype );

MMUI.A.prototype.setLabel = function ( value ) {

    this.dom.textContent = value;

    return this;
};

MMUI.A.prototype.setImage = function( imagePath ){
    this.dom.style.backgroundImage="url('"+imagePath+"')";  
    this.dom.className = 'btn btn-image btn-default';  
    return this;
}