MM.FFDDemo = function( editor ){

	var geometry = new THREE.CubeGeometry( 1, 1, 1, 1, 1, 1 );
	var mesh = new THREE.Mesh( geometry, new THREE.MeshLambertMaterial() );
	editor.addObject( mesh );
	mesh.position.set(.5,.5,.5)
	MM.freezeTransformations( mesh ) 

	// var minX = new THREE.Vector3(0.0, 0.0, 0.0)
	// var maxX = new THREE.Vector3(10.0, 10.0, 10.0)
	// ffd = new MM.FFD();	
	// ffd.initialize( minX, maxX )
	// ffd.CPSetup();
	// ffd.addDisplay();
	// ffd.setGeometry( mesh.geometry )
	// editor.addObject( ffd )
	// editor.addHelper( ffd.cd.dvrt )
	// console.log(ffd)


	ffd = new MM.FFD1();
	ffd.initControlPoints();	
	ffd.addDisplay();
	ffd.setGeometry( mesh.geometry )
	ffd.createBernsteinCoefficients();
	ffd.moveControlPoint( 0, new THREE.Vector3(0,-.5,0))

	editor.addObject( ffd )
	editor.addHelper( ffd.cd.dvrt )	
}