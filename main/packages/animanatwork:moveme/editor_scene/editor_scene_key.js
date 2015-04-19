MM.Editor.prototype.setupDefaultKeyScene = function(){
	var scope = this;

//	selection box
	selectionBox = new THREE.PlaneHelper();
	selectionBox.material.depthTest = false;
	selectionBox.material.transparent = true;
	selectionBox.visible = false;
	this.sceneAnimCurves.add( selectionBox );
	
	this.keySelectionBox = selectionBox;

//	camera
	var camera = new THREE.OrthographicCamera( window.innerWidth / - 2, 
		window.innerWidth / 2, window.innerHeight / 2, 
		window.innerHeight / - 2, 0, 20 );
        camera.position.z = 10;    
    camera.name = 'keyframeCam'
    this.sceneAnimCurves.add( camera )

    this.keyCamera = camera;

//	projector
    var projector = new THREE.Projector();
    this.keyProjector = projector;

//	grid
    var grid = new MM.KeyframeGrid( camera, projector, this.sceneAnimCurves )

    this.keyGrid = grid;

//	timeline  
    var geometry = new THREE.Geometry();
	geometry.vertices.push(new THREE.Vector3(this.time,750,4));
    geometry.vertices.push(new THREE.Vector3(this.time,-750,4));   
    var material = new THREE.LineBasicMaterial( { color : 0xff0000 , linewidth : 1} );
    var timeline = new THREE.Line( geometry, material );
    timeline.name = 'timeline'
    this.sceneAnimCurves.add( timeline );

    this.keyTimeline = timeline;  
}