MM.KeyframeGrid = function( camera, projector, scene){
	this.color1 = new THREE.Color( 0x444444 );
	this.color2 = new THREE.Color( 0x888888 );
	this.camera = camera;
	this.projector = projector;
	this.scene = scene;
	this.update();	
	this.line = undefined;
	return this;
};

MM.KeyframeGrid.prototype = {
    constructor: MM.KeyframeGrid,

    update: function(){
    	/*
    		Since the number of points/lines can change from one update to 
    		another we have to build a new piece of geometry every time.
    	*/
		// console.log('KeyframeGrid: update')		
		
		var geometry = new THREE.Geometry();
		var material = new THREE.LineBasicMaterial( { vertexColors: THREE.VertexColors } );
		var line = new THREE.Line( geometry, material, THREE.LinePieces);
		line.name = 'gridLine'

	//	get the visible range in X and Y
	 	var upleft = new THREE.Vector3( -1, -1, .5)
		this.projector.unprojectVector( upleft, this.camera );        
		
		var downRight = new THREE.Vector3( 1, 1, .5)
		this.projector.unprojectVector( downRight, this.camera );   

		var rangeInY = Math.abs(upleft.y) + Math.abs(downRight.y)	
		var rangeInX = Math.abs(upleft.x) + Math.abs(downRight.x)

		// console.log('range y:', rangeInY)
		// console.log('range x:', rangeInX)	

	//	lines in Y
	//	values	
		var ranges = [
						[10000,1000,100],
						[1000,500,50],
						[500,100,20],
						// [200,100,10],
						[100,50,10],
						[50,25,5],
						[25,1,1]
					  ]

		var rangeOffset;
		for( var i = 0; i < ranges.length; i++){
			if( rangeInY < ranges[i][0] && rangeInY > ranges[i][1])
			{
				rangeOffset = ranges[i][2];
				break;
			}
		}	

		// console.log('\tY: grid line offset', rangeOffset)

		var absNumber, negNumber, posNumber;
		negNumber = Math.abs(Math.ceil(upleft.y / rangeOffset))
		posNumber = Math.floor(downRight.y / rangeOffset)		
		absNumber = 1 + negNumber + posNumber;
		var offsetValue = rangeOffset;	

		geometry.vertices.push( new THREE.Vector3( upleft.x - 10, 0, 0 ), 
								new THREE.Vector3( downRight.x + 10, 0, 0 ))
		geometry.colors.push( this.color1, this.color1 );

		var valueToDraw;
		for( var i = 1; i < negNumber; i++ ){			
			valueToDraw = -(i * offsetValue)
			geometry.vertices.push( new THREE.Vector3( upleft.x - 10, valueToDraw, 0 ), 
									new THREE.Vector3( downRight.x + 10, valueToDraw, 0 ))
			geometry.colors.push( this.color2, this.color2 );
		}		

		for( var i = 1; i < posNumber; i++ ){
			valueToDraw = (i * offsetValue)			
			geometry.vertices.push( new THREE.Vector3( upleft.x - 10, valueToDraw, 0 ), 
									new THREE.Vector3( downRight.x + 10, valueToDraw, 0 ))
			geometry.colors.push( this.color2, this.color2 );
		}

	//	lines in X
	//	timeline 	
		ranges = [
						[10000,1000,100],
						[1000,500,50],
						[500,100,10],
						// [200,100,10],
						[100,50,5],
						// [50,25,5],
						[50,1,1]
					  ]

		for( var i = 0; i < ranges.length; i++){
			if( rangeInX < ranges[i][0] && rangeInX > ranges[i][1])
			{
				rangeOffset = ranges[i][2];
				break;
			}
		}

		// console.log('\tX: grid line offset', rangeOffset)

		negNumber = Math.abs(Math.ceil(upleft.x / rangeOffset))
		posNumber = Math.floor(downRight.x / rangeOffset)		
		absNumber = 1 + negNumber + posNumber;
		offsetValue = rangeOffset;	

		geometry.vertices.push( new THREE.Vector3( 0, upleft.y, 0 ), 
								new THREE.Vector3( 0, downRight.y, 0 ))
		geometry.colors.push( this.color1, this.color1 );

		for( var i = 1; i < negNumber; i++ )
		{			
			valueToDraw = -(i * offsetValue)
			geometry.vertices.push( new THREE.Vector3( valueToDraw, upleft.y, 0 ), 
									new THREE.Vector3( valueToDraw, downRight.y, 0 ))
			geometry.colors.push( this.color2, this.color2 );
		}

		for( var i = 1; i < posNumber; i++ )
		{			
			valueToDraw = i * offsetValue
			geometry.vertices.push( new THREE.Vector3( valueToDraw, upleft.y, 0 ), 
									new THREE.Vector3( valueToDraw, downRight.y, 0 ))
			geometry.colors.push( this.color2, this.color2 );
		}	

	//	refresh
		this.scene.remove( this.line )
		this.scene.add( line )
		this.line = line; 
	}
}    