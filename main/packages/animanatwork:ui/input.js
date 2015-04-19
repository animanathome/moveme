/*
	<div class="input-group">
	  <span class="input-group-addon" id="basic-addon1">@</span>
	  <input type="text" class="form-control" placeholder="Username" aria-describedby="basic-addon1">
	</div>
*/

MMUI.FloatGrp = function( title ){
    MMUI.Element.call( this );

   	var dom = document.createElement('div')
   	dom.className = 'input-group'
   	
   	var scope = this;
   	this.dom = dom;

   	var span = document.createElement('span')
   	span.className = 'input-group-addon'
   	span.innerHTML = title;
   	dom.appendChild( span )

   	var input = document.createElement('input')
   	input.setAttribute('type', 'number')
   	input.className = 'form-control'
   	input.value = 0.0
   	dom.appendChild( input )

   	this.input = input;
    this.startValue = input.value
    this.isMoving = false;
        
    input.addEventListener( 'keydown', function ( event ){
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

    this.min = - Infinity;
    this.max = Infinity;

    this.precision = 2;
    this.step = 1;

 	var startEvent = document.createEvent('HTMLEvents');
    startEvent.initEvent('start', true, true);

    var changeEvent = document.createEvent('HTMLEvents');
    changeEvent.initEvent('change', true, true);

    var finishEvent = document.createEvent( 'HTMLEvents' );
    finishEvent.initEvent( 'finish', true, true );

 	var distance = 0;
    var onMouseDownValue = 0;
    
    var onMouseDown = function ( event ){
        console.log('Number onMouseDown')

        event.preventDefault();

        this.isMoving = false;

        //  keep track of the start value
        onMouseDownValue = parseFloat( input.value );
        this.startValue = onMouseDownValue;
        input.startValue = this.startValue;

        document.addEventListener( 'mouseup', onMouseUp, false );
        document.addEventListener( 'mousemove', onMouseMove, false );     
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

        var currentValue = input.value;

        var movementX = event.movementX || event.webkitMovementX || event.mozMovementX || 0;
        var movementY = event.movementY || event.webkitMovementY || event.mozMovementY || 0;

        distance += movementX - movementY;

        var number = onMouseDownValue + ( distance / ( event.shiftKey ? 5 : 50 ) ) * scope.step;

        input.value = Math.min( scope.max, Math.max( scope.min, number ) ).toFixed( scope.precision );

        if ( currentValue !== input.value ) dom.dispatchEvent( changeEvent );

        this.isMoving = true;
    };

    var onMouseUp = function ( event ){
        console.log('onMouseUp')

        document.removeEventListener( 'mousemove', onMouseMove, false );
        document.removeEventListener( 'mouseup', onMouseUp, false );
        
        if ( Math.abs( distance ) < 2 ) {            
            input.focus();
            input.select();
        }
        
        distance = 0;

        //  for undo - to ensure we only pick up the change at the end
        //  as there is no need to store all the individual changes as 
        //  a undo event - otherwise our stack would 
        dom.dispatchEvent( finishEvent );

        this.isMoving = false;
    };

    var onChange = function ( event ){
        // if(DEBUG)         
        var number = parseFloat(input.value);
        
        // console.log("number onChange", number);        
        
        if( isNaN( number ) === false )
        {
            input.value = number;
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
    //     // console.log('onFocus')

    //     input.style.backgroundColor = '';
    //     input.style.borderColor = '#ccc';
    //     input.style.cursor = '';
    // };

    // var onBlur = function ( event ) 
    // {
    //     // console.log('onBlur')

    //     input.style.backgroundColor = 'transparent';
    //     input.style.borderColor = 'transparent';
    //     input.style.cursor = 'col-resize';
    // };    
    
    input.addEventListener( 'change', onChange, false);
    input.addEventListener( 'mousedown', onMouseDown, false );
    // dom.addEventListener( 'finish', onFinish, false ); 
    // input.addEventListener( 'focus', onFocus, false );
    // input.addEventListener( 'blur', onBlur, false );        


   	return this;
}

MMUI.FloatGrp.prototype = Object.create( MMUI.Element.prototype );

MMUI.FloatGrp.prototype.getStartValue = function()
{
    return this.input.startValue
}

MMUI.FloatGrp.prototype.getValue = function () 
{
    // console.log('number getValue')

    return parseFloat( this.input.value );
}

MMUI.FloatGrp.prototype.setValue = function ( value )
{
    // console.log('number setValue')
    if(value !== undefined)
    {
        this.input.value = value.toFixed( this.precision );
    }
    return this;
}

MMUI.FloatGrp.prototype.setRange = function ( min, max){
    this.min = min;
    this.max = max;
    return this;
}

MMUI.FloatGrp.prototype.setPrecision = function ( precision ){
    this.precision = precision;
    return this;
}