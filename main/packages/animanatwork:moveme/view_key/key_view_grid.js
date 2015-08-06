MM.KeyframeGrid = function( camera, projector, scene){
	this.color1 = new THREE.Color( 0x999999 );
	// this.color2 = new THREE.Color( 0x888888 );
	this.color2 = new THREE.Color( 0x444444 );
	this.camera = camera;
	this.projector = projector;
	this.scene = scene;	
	this.line = undefined;

	//	List of graph areas. A graph area is an rectangle in where a one animation curve is drawn
	this.graphAreas = [
		[0, 50],
		[50, 100]
	]

	//	Active time area
	this.time_area = [10, 30]

	//	Ticks are the lines which appear at the top of the key view showing the different time lines in more detail
	this.tickStart = 25
	this.inbTickStart = 30
	this.tickEnd = 40

	//	private variables
	this._geometry = undefined;	
	this._upleft = undefined;
	this._downRight = undefined;

	this._graphAreas = [];
	
	//	draw the grid
	this.update()

	return this;
};

MM.KeyframeGrid.prototype = {
    constructor: MM.KeyframeGrid,

    addGraphArea: function( min_x, max_x, min_y, max_y, color){
		var geometry = new THREE.Geometry();
		geometry.vertices.push( new THREE.Vector3( min_x, min_y, 0 ) );
		geometry.vertices.push( new THREE.Vector3( max_x, min_y, 0 ) );
		geometry.vertices.push( new THREE.Vector3( max_x, max_y, 0 ) );
		geometry.vertices.push( new THREE.Vector3( min_x, max_y, 0 ) );
		geometry.faces.push( new THREE.Face3( 0, 1, 2 ) );
		geometry.faces.push( new THREE.Face3( 2, 3, 0 ) );
		geometry.computeFaceNormals();
		
		var material = new THREE.MeshNormalMaterial();
		graphArea = new THREE.Mesh(geometry, material)

		return graphArea
    },

    updateGraphAreas: function(){
    	console.log('KeyframeGrid.updateGraphAreas')
    	// remove all graph areas
    	var i, j;
    	for(i=0, j=this._graphAreas.length; i<j; i++){
    		this.scene.remove(this._graphAreas[i])
    	}

		// create all necesary graph areas within the current range
		var graphArea = undefined
		for(i=0, j=this.graphAreas.length; i<j; i++){
			graphArea = this.addGraphArea(this._upleft.x, this._downRight.x, this.graphAreas[i][0], this.graphAreas[i][1])
			this.scene.add(graphArea)
			this._graphAreas.push(graphArea)
		}
    },

    updateTimeTicks: function(){
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

		var rangeInX = Math.abs(this._upleft.x) + Math.abs(this._downRight.x)
		for( var i = 0; i < ranges.length; i++){
			if( rangeInX < ranges[i][0] && rangeInX > ranges[i][1]){
				rangeOffset = ranges[i][2];
				break;
			}
		}

		// console.log('\tX: grid line offset', rangeOffset)
		var absNumber, negNumber, posNumber;		
		negNumber = Math.abs(Math.ceil(this._upleft.x / rangeOffset))
		posNumber = Math.floor(this._downRight.x / rangeOffset)		
		absNumber = 1 + negNumber + posNumber;
		offsetValue = rangeOffset;	
		offsetValueHalved = offsetValue / 2;

		var startY = this._downRight.y - this.tickStart
		var inbStartY = this._downRight.y - this.inbTickStart
		var endY = this._downRight.y - this.tickEnd

		// center line
		this._geometry.vertices.push( new THREE.Vector3( 0, startY, 0 ), new THREE.Vector3( 0, endY, 0 ))
		this._geometry.colors.push( this.color1, this.color1 );

		// negative number lines
		for( var i = 1; i < negNumber; i++ ){
			//	inbetween tick
			valueToDraw = -(i * offsetValue) + offsetValueHalved
			this._geometry.vertices.push(new THREE.Vector3(valueToDraw, inbStartY, 0), new THREE.Vector3(valueToDraw, endY, 0))
			this._geometry.colors.push( this.color2, this.color2 );

			//	full tick
			valueToDraw = -(i * offsetValue)
			this._geometry.vertices.push(new THREE.Vector3(valueToDraw, startY, 0), new THREE.Vector3(valueToDraw, endY, 0))
			this._geometry.colors.push( this.color1, this.color1 );
		}

		// positive number lines
		for( var i = 1; i < posNumber; i++ ){
			// inbetween tick
			valueToDraw = (i * offsetValue) - offsetValueHalved
			this._geometry.vertices.push( new THREE.Vector3( valueToDraw, inbStartY, 0 ), new THREE.Vector3( valueToDraw, endY, 0 ))
			this._geometry.colors.push( this.color2, this.color2 );

			// full tick		
			valueToDraw = i * offsetValue
			this._geometry.vertices.push( new THREE.Vector3( valueToDraw, startY, 0 ), new THREE.Vector3( valueToDraw, endY, 0 ))
			this._geometry.colors.push( this.color1, this.color1 );
		}
    },

    updateTimeLines: function(){
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

		var rangeInX = Math.abs(this._upleft.x) + Math.abs(this._downRight.x)
		for( var i = 0; i < ranges.length; i++){
			if( rangeInX < ranges[i][0] && rangeInX > ranges[i][1]){
				rangeOffset = ranges[i][2];
				break;
			}
		}

		// console.log('\tX: grid line offset', rangeOffset)
		var absNumber, negNumber, posNumber;		
		negNumber = Math.abs(Math.ceil(this._upleft.x / rangeOffset))
		posNumber = Math.floor(this._downRight.x / rangeOffset)		
		absNumber = 1 + negNumber + posNumber;
		offsetValue = rangeOffset;

		var startY = this._upleft.y
		var endY = this._downRight.y - this.tickEnd

		// center line
		this._geometry.vertices.push( new THREE.Vector3( 0, startY, 0 ), new THREE.Vector3( 0, endY, 0 ))
		this._geometry.colors.push( this.color1, this.color1 );

		// negative number lines
		for( var i = 1; i < negNumber; i++ ){
			valueToDraw = -(i * offsetValue)
			this._geometry.vertices.push( new THREE.Vector3( valueToDraw, startY, 0 ), new THREE.Vector3( valueToDraw, endY, 0 ))
			this._geometry.colors.push( this.color2, this.color2 );
		}

		// positive number lines
		for( var i = 1; i < posNumber; i++ ){
			valueToDraw = i * offsetValue
			this._geometry.vertices.push(new THREE.Vector3(valueToDraw, startY, 0), new THREE.Vector3(valueToDraw, endY, 0))
			this._geometry.colors.push( this.color2, this.color2 );
		}
    },

    updateValueLines: function(){
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
		var rangeInY = Math.abs(this._upleft.y) + Math.abs(this._downRight.y)	
		for( var i = 0; i < ranges.length; i++){
			if( rangeInY < ranges[i][0] && rangeInY > ranges[i][1]){
				rangeOffset = ranges[i][2];
				break;
			}
		}	

		// console.log('\tY: grid line offset', rangeOffset)

		var absNumber, negNumber, posNumber;
		negNumber = Math.abs(Math.ceil(this._upleft.y / rangeOffset))
		posNumber = Math.floor(this._downRight.y / rangeOffset)		
		absNumber = 1 + negNumber + posNumber;
		var offsetValue = rangeOffset;	

		this._geometry.vertices.push( new THREE.Vector3( this._upleft.x - 10, 0, 0 ), 
								new THREE.Vector3( this._downRight.x + 10, 0, 0 ))
		this._geometry.colors.push( this.color1, this.color1 );

		var valueToDraw;
		for( var i = 1; i < negNumber; i++ ){			
			valueToDraw = -(i * offsetValue)
			this._geometry.vertices.push( new THREE.Vector3( this._upleft.x - 10, valueToDraw, 0 ), 
									new THREE.Vector3( this._downRight.x + 10, valueToDraw, 0 ))
			this._geometry.colors.push( this.color2, this.color2 );
		}		

		for( var i = 1; i < posNumber; i++ ){
			valueToDraw = (i * offsetValue)			
			this._geometry.vertices.push( new THREE.Vector3( this._upleft.x - 10, valueToDraw, 0 ), 
									new THREE.Vector3( this._downRight.x + 10, valueToDraw, 0 ))
			this._geometry.colors.push( this.color2, this.color2 );
		}
    },

    update: function(){
    	/*
    		Since the number of points/lines can change from one update to 
    		another we have to build a new piece of geometry every time.
    	*/
		// console.log('KeyframeGrid: update')		
		
		this._geometry = new THREE.Geometry();
		var material = new THREE.LineBasicMaterial( { vertexColors: THREE.VertexColors } );
		var line = new THREE.Line( this._geometry, material, THREE.LinePieces);
		line.name = 'gridLine'

	//	get the visible range in X and Y
	 	this._upleft = new THREE.Vector3( -1, -1, .5)
		this.projector.unprojectVector( this._upleft, this.camera )
		
		this._downRight = new THREE.Vector3( 1, 1, .5)
		this.projector.unprojectVector( this._downRight, this.camera )

	//	draw ticks
		this.updateTimeTicks()

		this.updateGraphAreas()

	//	draw value lines
		// this.updateValueLines()

	//	draw time lines
		this.updateTimeLines()

	//	refresh
		this.scene.remove( this.line )
		this.scene.add( line )
		this.line = line; 
	}
}    