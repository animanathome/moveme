Package.describe({
  name: 'animanatwork:three',
  summary: 'Custom version of three for animanatwork',
  version: '0.0.1'
});

Package.onUse(function(api) {
	api.versionsFrom('1.0.2.1');
	api.addFiles([
					 "src/three_r60.js"			

					//	Extensions from example folder
					, 'lib/BufferGeometryExporter.js'
					, 'lib/EditorControls.js'
					, 'lib/GeometryExporter.js'
					, 'lib/MaterialExporter.js'
					, 'lib/NURBSCurve.js'
					, 'lib/NURBSUtils.js'
					, 'lib/ObjectExporter.js'
					, 'lib/ObjectLoader.js'
					, 'lib/OBJExporter.js'
					, 'lib/OBJLoader.js'
					, 'lib/Raycaster.js'
					, 'lib/SkinnedMesh.js'
					, 'lib/TransformControls.js'
					, 'lib/WebGLShaders.js'
					, 'lib/planeHelper.js'
					, 'lib/SceneExporter.js'

					//	Move Me Extensions					
					,'extensions/extensions_three_object.js'
					,'extensions/extensions_three_scene.js'
					,'extensions/extensions_three_ortho.js'
					,'extensions/extensions_three_matrix4.js'
					,'extensions/extensions_three_euler.js'
					,'extensions/extensions_three_quaternion.js'
					,'extensions/extensions_three_vector3.js'
					,'extensions/extensions_three_line.js'
					,'extensions/extensions_three_skinnedMesh.js'
				 ], 'client');

	if (api.export) 
	    api.export('THREE');  
});
