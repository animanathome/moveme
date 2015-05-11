MM.Loader = function ( editor ) {

	var scope = this;
	var signals = editor.signals;

	this.loadLocalStorage = function () {
		// console.log('SLoader.loadLocalStorage')

		if ( localStorage.threejsEditor !== undefined ) {
			// console.log('\tLoading local storage', localStorage.threejsEditor )
			var loader = new THREE.ObjectLoader();			

			var allData = JSON.parse( localStorage.threejsEditor )

			if( allData.hasOwnProperty('project') === true ){
				// console.log('\t', allData['project'])				
				editor.importPTASettings(allData['project']);
			}

			// console.log('------------------ start scene')
			if( allData.hasOwnProperty('scene') === true ){
				// console.log('\t', allData['scene'])
				var scene = loader.parse(allData['scene']);
				editor.setScene(scene);
			}
			
			if( allData.hasOwnProperty('selectable') === true){
				editor.importSelectables(allData['selectable'])	
			}

			// console.log('------------------ start setups')
			if( allData.hasOwnProperty('setups') === true ){
				editor.importSetups(allData['setups'])
			}

			// console.log('------------------ start groups')
			if( allData.hasOwnProperty('groups') === true ){
				editor.importGroups(allData['groups'])
			}

			// console.log('------------------ start settings')
			if( allData.hasOwnProperty('settings') === true ){
				editor.importSceneSettings(allData['settings'])
			}

			// console.log('------------------ start assets')
			if( allData.hasOwnProperty('assets') === true ){
				editor.importAssetObjects(allData['assets'])
			}

			editor.initDrivenChannels();

		}else{
			console.log('\tNo local storage defined.')
		}

	};

	var exporter = new THREE.ObjectExporter();
	var timeout;

	this.saveLocalStorage = function () {		
		console.log('SLoader.saveLocalStorage')

		var allData = {}

	//	project
		allData['project'] = editor.exportPTASettings();

	//	objects
		allData['scene'] = exporter.parse( editor.scene )
		// console.log('------------------ scene output')
		// console.log('\tscene output:', allData['scene'])

	//	selectable objects
		allData['selectable'] = editor.exportSelectables();

	//	groups
	//	export custom group structure	
		allData['groups'] = editor.exportGroups();
		// console.log('------------------ groups output')
		// console.log('\tgroup output:', allData['groups'])

	//	setups ( special )
	//	the only reason this is seperated here is because we need to have the
	//	import method at the very end of the load method as we need all objects
	//	to exist before creating things like skinnedMeshes
		allData['setups'] = editor.exportSetups();
		// console.log('------------------ setups output')
		// console.log('\tsetup output:', allData['setups'])	
		
	//	scene data
	//	export global scene data like time and visibility settings
		// console.log('------------------ settings output')
		allData['settings'] = editor.exportSceneSettings()	

	//	asset data
		allData['assets'] = editor.exportAssetObjects();

		// console.log('\tlocalStorage', localStorage)
		// console.log('\tdata', allData)

		localStorage.threejsEditor = JSON.stringify( allData );
		
		console.log( 'Saved state to LocalStorage.' );
	};

	this.saveLayout = function(){
		// console.log('SLoader.saveLayout')
		var allData = {}
		allData['settings'] = editor.exportSceneSettings()	
		localStorage.threejsEditor = JSON.stringify( allData );
	};

	this.resetLayout = function(){
		console.log('Loader.resetLayout');
		var allData = {};
		allData['settings'] = editor.resetSceneSettings();
		localStorage.threejsEditor = JSON.stringify( allData );
	}

	this.saveAsJSON = function(){
		// console.log('SLoader.saveAsJSON')
		var allData = {}
		allData['scene'] = exporter.parse( editor.scene );
		allData['selectable'] = editor.exportSelectables();
		allData['groups'] = editor.exportGroups();
		allData['setups'] = editor.exportSetups();
		allData['settings'] = editor.exportSceneSettings();	
		allData['assets'] = editor.exportAssetObjects();
		return JSON.stringify( allData );
	};

	this.loadAsJSON = function( data ){
		var loader = new THREE.ObjectLoader();			
		var scene = loader.parse(data['scene'] ); editor.setScene(scene);
		editor.importSelectables(data['selectable'])
		editor.importSetups(data['setups'])
		editor.importGroups(data['groups'])
		editor.importSceneSettings(data['settings'])
		editor.importAssetObjects(data['assets'])
	};

	this.loadJSONFile = function ( file ){
		var reader = new FileReader();
		var scope = this
		reader.addEventListener( 'load', function ( event ) {
			var contents = event.target.result;
			var data = JSON.parse( contents );

			// console.log('File content:', data)

			scope.loadAsJSON( data )

		}, false );
		reader.readAsText( file );
	};

	this.loadFile = function ( file ) {

		var filename = file.name;
		var extension = filename.split( '.' ).pop().toLowerCase();

		switch ( extension ) {

			// case 'babylon':

			// 	var reader = new FileReader();
			// 	reader.addEventListener( 'load', function ( event ) {

			// 		var contents = event.target.result;
			// 		var json = JSON.parse( contents );

			// 		var loader = new THREE.BabylonLoader();
			// 		var scene = loader.parse( json );

			// 		editor.setScene( scene );

			// 	}, false );
			// 	reader.readAsText( file );

			// 	break;

			// case 'ctm':

			// 	var reader = new FileReader();
			// 	reader.addEventListener( 'load', function ( event ) {

			// 		var contents = event.target.result;

			// 		var stream = new CTM.Stream( contents );
			// 		stream.offset = 0;

			// 		var loader = new THREE.CTMLoader();
			// 		loader.createModelClassic( new CTM.File( stream ), function( geometry ) {

			// 			geometry.sourceType = "ctm";
			// 			geometry.sourceFile = file.name;

			// 			var material = new THREE.MeshPhongMaterial();

			// 			var mesh = new THREE.Mesh( geometry, material );
			// 			mesh.name = filename;

			// 			editor.addObject( mesh );

			// 		} );

			// 	}, false );
			// 	reader.readAsBinaryString( file );

			// 	break;

			// case 'dae':

			// 	var reader = new FileReader();
			// 	reader.addEventListener( 'load', function ( event ) {

			// 		var contents = event.target.result;

			// 		var parser = new DOMParser();
			// 		var xml = parser.parseFromString( contents, 'text/xml' );

			// 		var loader = new THREE.ColladaLoader();
			// 		loader.parse( xml, function ( collada ) {

			// 			collada.scene.name = filename;

			// 			editor.addObject( collada.scene );

			// 		} );

			// 	}, false );
			// 	reader.readAsText( file );

			// 	break;

			case 'js':
			case 'json':

			case '3geo':
			case '3mat':
			case '3obj':
			case '3scn':

				var reader = new FileReader();
				reader.addEventListener( 'load', function ( event ) {

					var contents = event.target.result;

					// 2.0

					if ( contents.indexOf( 'postMessage' ) !== -1 ) {

						var blob = new Blob( [ contents ], { type: 'text/javascript' } );
						var url = URL.createObjectURL( blob );

						var worker = new Worker( url );

						worker.onmessage = function ( event ) {

							event.data.metadata = { version: 2 };
							handleJSON( event.data, file, filename );

						};

						worker.postMessage( Date.now() );

						return;

					}

					// >= 3.0

					var data;

					try {

						data = JSON.parse( contents );

					} catch ( error ) {

						alert( error );
						return;

					}

					handleJSON( data, file, filename );

				}, false );
				reader.readAsText( file );

				break;

			case 'obj':

				var reader = new FileReader();
				reader.addEventListener( 'load', function ( event ) {

					var contents = event.target.result;

					var object = new THREE.OBJLoader().parse( contents );
					object.name = filename;

					editor.addObject( object );

				}, false );
				reader.readAsText( file );

				break;

			// case 'ply':

			// 	var reader = new FileReader();
			// 	reader.addEventListener( 'load', function ( event ) {

			// 		var contents = event.target.result;

			// 		console.log( contents );

			// 		var geometry = new THREE.PLYLoader().parse( contents );
			// 		geometry.sourceType = "ply";
			// 		geometry.sourceFile = file.name;

			// 		var material = new THREE.MeshPhongMaterial();

			// 		var mesh = new THREE.Mesh( geometry, material );
			// 		mesh.name = filename;

			// 		editor.addObject( mesh );

			// 	}, false );
			// 	reader.readAsText( file );

			// 	break;

			// case 'stl':

			// 	var reader = new FileReader();
			// 	reader.addEventListener( 'load', function ( event ) {

			// 		var contents = event.target.result;

			// 		var geometry = new THREE.STLLoader().parse( contents );
			// 		geometry.sourceType = "stl";
			// 		geometry.sourceFile = file.name;

			// 		var material = new THREE.MeshPhongMaterial();

			// 		var mesh = new THREE.Mesh( geometry, material );
			// 		mesh.name = filename;

			// 		editor.addObject( mesh );

			// 	}, false );

			// 	if ( reader.readAsBinaryString !== undefined ) {

			// 		reader.readAsBinaryString( file );

			// 	} else {

			// 		reader.readAsArrayBuffer( file );

			// 	}

			// 	break;

			/*
			case 'utf8':

				var reader = new FileReader();
				reader.addEventListener( 'load', function ( event ) {

					var contents = event.target.result;

					var geometry = new THREE.UTF8Loader().parse( contents );
					var material = new THREE.MeshLambertMaterial();

					var mesh = new THREE.Mesh( geometry, material );

					editor.addObject( mesh );

				}, false );
				reader.readAsBinaryString( file );

				break;
			*/

			// case 'vtk':

			// 	var reader = new FileReader();
			// 	reader.addEventListener( 'load', function ( event ) {

			// 		var contents = event.target.result;

			// 		var geometry = new THREE.VTKLoader().parse( contents );
			// 		geometry.sourceType = "vtk";
			// 		geometry.sourceFile = file.name;

			// 		var material = new THREE.MeshPhongMaterial();

			// 		var mesh = new THREE.Mesh( geometry, material );
			// 		mesh.name = filename;

			// 		editor.addObject( mesh );

			// 	}, false );
			// 	reader.readAsText( file );

			// 	break;

			// case 'wrl':

			// 	var reader = new FileReader();
			// 	reader.addEventListener( 'load', function ( event ) {

			// 		var contents = event.target.result;

			// 		var result = new THREE.VRMLLoader().parse( contents );

			// 		editor.setScene( result );

			// 	}, false );
			// 	reader.readAsText( file );

			// 	break;

			default:

				alert( 'Unsupported file format.' );

				break;

		}

	}

	var handleJSON = function ( data, file, filename ) {

		if ( data.metadata === undefined ) { // 2.0

			data.metadata = { type: 'Geometry' };

		}

		if ( data.metadata.type === undefined ) { // 3.0

			data.metadata.type = 'Geometry';

		}

		if ( data.metadata.version === undefined ) {

			data.metadata.version = data.metadata.formatVersion;

		}

		if ( data.metadata.type.toLowerCase() === 'geometry' ) {

			var loader = new THREE.JSONLoader();
			var result = loader.parse( data );

			var geometry = result.geometry;
			var material = result.materials !== undefined
						? new THREE.MeshFaceMaterial( result.materials )
						: new THREE.MeshPhongMaterial();

			geometry.sourceType = "ascii";
			geometry.sourceFile = file.name;

			var mesh = new THREE.Mesh( geometry, material );
			mesh.name = filename;

			editor.addObject( mesh );

		} else if ( data.metadata.type.toLowerCase() === 'object' ) {

			var loader = new THREE.ObjectLoader();
			var result = loader.parse( data );

			if ( result instanceof THREE.Scene ) {

				editor.setScene( result );

			} else {

				editor.addObject( result );

			}

		} else if ( data.metadata.type.toLowerCase() === 'scene' ) {

			// DEPRECATED

			var loader = new THREE.SceneLoader();
			loader.parse( data, function ( result ) {

				editor.setScene( result.scene );

			}, '' );

		}

	};

}
