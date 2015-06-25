/**
 * @author mrdoob / http://mrdoob.com/
 */

THREE.ObjectExporter = function () {};

THREE.ObjectExporter.prototype = {

	constructor: THREE.ObjectExporter,

	parse: function ( object ) {

		// console.log('ObjectExporter.parse', object );

		var output = {
			metadata: {
				version: 4.3,
				type: 'Object',
				generator: 'ObjectExporter'
			}
		};

		//

		var geometries = {};
		var geometryExporter = new THREE.GeometryExporter();
		var bufferGeometryExporter = new THREE.BufferGeometryExporter();

		var parseGeometry = function ( geometry ) {

			if ( output.geometries === undefined ) {

				output.geometries = [];

			}

			if ( geometries[ geometry.uuid ] === undefined ) {

				var data = {};

				data.uuid = geometry.uuid;

				if ( geometry.name !== "" ) data.name = geometry.name;

				if ( geometry instanceof THREE.PlaneGeometry ) {

					data.type = 'PlaneGeometry';
					data.width = geometry.width;
					data.height = geometry.height;
					data.widthSegments = geometry.widthSegments;
					data.heightSegments = geometry.heightSegments;

				} else if ( geometry instanceof THREE.CubeGeometry ) {

					data.type = 'CubeGeometry';
					data.width = geometry.width;
					data.height = geometry.height;
					data.depth = geometry.depth;
					data.widthSegments = geometry.widthSegments;
					data.heightSegments = geometry.heightSegments;
					data.depthSegments = geometry.depthSegments;

				} else if ( geometry instanceof THREE.CylinderGeometry ) {

					data.type = 'CylinderGeometry';
					data.radiusTop = geometry.radiusTop;
					data.radiusBottom = geometry.radiusBottom;
					data.height = geometry.height;
					data.radiusSegments = geometry.radiusSegments;
					data.heightSegments = geometry.heightSegments;
					data.openEnded = data.openEnded;

				} else if ( geometry instanceof THREE.SphereGeometry ) {

					data.type = 'SphereGeometry';
					data.radius = geometry.radius;
					data.widthSegments = geometry.widthSegments;
					data.heightSegments = geometry.heightSegments;
					data.phiStart = geometry.phiStart;
					data.phiLength = geometry.phiLength;
					data.thetaStart = geometry.thetaStart;
					data.thetaLength = geometry.thetaLength;

				} else if ( geometry instanceof THREE.IcosahedronGeometry ) {

					data.type = 'IcosahedronGeometry';
					data.radius = geometry.radius;
					data.detail = geometry.detail;

				} else if ( geometry instanceof THREE.TorusGeometry ) {

					data.type = 'TorusGeometry';
					data.radius = geometry.radius;
					data.tube = geometry.tube;
					data.radialSegments = geometry.radialSegments;
					data.tubularSegments = geometry.tubularSegments;
					data.arc = geometry.arc;

				} else if ( geometry instanceof THREE.TorusKnotGeometry ) {

					data.type = 'TorusKnotGeometry';
					data.radius = geometry.radius;
					data.tube = geometry.tube;
					data.radialSegments = geometry.radialSegments;
					data.tubularSegments = geometry.tubularSegments;
					data.p = geometry.p;
					data.q = geometry.q;
					data.heightScale = geometry.heightScale;

				} else if ( geometry instanceof THREE.BufferGeometry ) {

					data.type = 'BufferGeometry';
					data.data = bufferGeometryExporter.parse( geometry );

					delete data.data.metadata;

				} else if ( geometry instanceof THREE.Geometry ) {

					data.type = 'Geometry';
					data.data = geometryExporter.parse( geometry );

					delete data.data.metadata;
				}

				geometries[ geometry.uuid ] = data;

				output.geometries.push( data );

			}

			return geometry.uuid;

		};

		//

		var materials = {};
		var materialExporter = new THREE.MaterialExporter();

		var parseMaterial = function ( material ) {

			if ( output.materials === undefined ) {

				output.materials = [];

			}

			if ( materials[ material.uuid ] === undefined ) {

				var data = materialExporter.parse( material );

				delete data.metadata;

				materials[ material.uuid ] = data;

				output.materials.push( data );

			}

			return material.uuid;

		};

		//

		var parseObject = function ( object ) {

			// console.log('\tparseObject', object)
			//	TEMP solution start

			//	SKIP LIST			

			//	by instance type
			//	contains a list of setup nodes which get dealt with later
			//	during editor.exportSetups()
			// instanceTypeSkipList = [THREE.SplineCluster, THREE.SplineSolver]
			// for( var i = 0; i < instanceTypeSkipList.length; i++){
			// 	if( object instanceof instanceTypeSkipList[i]){
			// 		console.log('Skipping', object.name, 'by instance type')
			// 		return {}
			// 	}
			// }

			//	by type
			//	don't export objects which are of type DO_NOT_EXPORT
			var typeSkipString = 'DO_NOT_EXPORT'
			if ( object.hasOwnProperty('exportType') === true ){
				if( object.exportType === typeSkipString ){
					// console.log('\t\tSkipping', object.name, 'by DO_NOT_EXPORT')
					return {}
				}
			}

			//	by name
			//	don't export objects with the following name
			var objectList = ['persp', 'top', 'front', 'side', 'manipulator', 'spot'
				, 'ambient', 'grid', "0", "1", "2", "3", "4", "5", "6", "7", "8"]

			if( objectList.indexOf( object.name ) != -1 ){
				// console.log('\t\tSkipping', object.name, 'by name')
				return {}
			}

			//	by no name
			//	for some reason some nodes get created without any name by default 
			//	at this time in writing I haven't not been able to find where exactly
			//	these nodes get created ( so I can't stop them from being created )
			if( object.name === ""){
				// console.log('\t\tSkipping', object, 'with no name')
				return {}
			}

			//	TEMP solution end

			var data = {};

			data.uuid = object.uuid;

			if ( object.name !== '' ) data.name = object.name;
			// if ( object.type !== undefined ) data.filterType = object.type;
			if ( object.asset !== undefined ) data.asset = object.asset;
			if ( object.animChannels !== undefined ){
				// console.log(object.name, '----->', object.animChannels)
				data.animChannels = object.animChannels;
			}

			//	drive channel data
			// console.log('looking for driveChannel', object.name)
			if( object.hasOwnProperty('driveChannel')){
				// console.log('\texporting driveChannel')
				data.driveChannel = object.driveChannel;
				// console.log('\tdata', data)
			}

			if ( object.tag !== undefined ) data.tag = object.tag;
			if ( JSON.stringify( object.userData ) !== '{}' ) data.userData = object.userData;
			if ( object.visible !== true ) data.visible = object.visible;
			if( object.custom !== undefined ) data.custom = object.custom;

			if ( object instanceof THREE.Scene ) {

				data.type = 'Scene';

			} else if ( object instanceof THREE.PerspectiveCamera ) {

				data.type = 'PerspectiveCamera';
				data.fov = object.fov;
				data.aspect = object.aspect;
				data.near = object.near;
				data.far = object.far;

			} else if ( object instanceof THREE.OrthographicCamera ) {

				data.type = 'OrthographicCamera';
				data.left = object.left;
				data.right = object.right;
				data.top = object.top;
				data.bottom = object.bottom;
				data.near = object.near;
				data.far = object.far;

			} else if ( object instanceof THREE.AmbientLight ) {

				data.type = 'AmbientLight';
				data.color = object.color.getHex();

			} else if ( object instanceof THREE.DirectionalLight ) {

				data.type = 'DirectionalLight';
				data.color = object.color.getHex();
				data.intensity = object.intensity;

			} else if ( object instanceof THREE.PointLight ) {

				data.type = 'PointLight';
				data.color = object.color.getHex();
				data.intensity = object.intensity;
				data.distance = object.distance;

			} else if ( object instanceof THREE.SpotLight ) {

				data.type = 'SpotLight';
				data.color = object.color.getHex();
				data.intensity = object.intensity;
				data.distance = object.distance;
				data.angle = object.angle;
				data.exponent = object.exponent;

			} else if ( object instanceof THREE.HemisphereLight ) {

				data.type = 'HemisphereLight';
				data.color = object.color.getHex();
				data.groundColor = object.groundColor.getHex();

			} else if ( object instanceof THREE.Mesh ) {

				data.type = 'Mesh';
				data.geometry = parseGeometry( object.geometry );
				data.material = parseMaterial( object.material );				

			} else if ( object instanceof MM.Joint ) {
				
				// console.log('\t', object.name, 'is joint')
				// console.log('\t', object)
				data.type = 'Joint'
				_.extend(data, object.exportData())

			} else if ( object instanceof MM.FourBoneIkBlendSolver ){				
				// console.log('\t', object.name, 'is FourBoneIkBlendSolver')

				data = object.exportData();

			} else if ( object instanceof MM.TwoBoneIkBlendSolver ){
				// console.log('\t', object.name, 'is TwoBoneIkBlendSolver')

				data = object.exportData();

			} else if ( object instanceof MM.TwoBoneSoftIkSolver){
				data = object.exportData();
				
			} else if ( object instanceof MM.TwoBoneIkSolver ){
				// console.log('\t', object.name, 'is TwoBoneIkSolver')

				data = object.exportData();

			} else if ( object instanceof MM.OneSimpleBoneIkSolver ){

				data = object.exportData();				

			} else if ( object instanceof MM.CurveSolver ){

				data = object.exportData();

			} else if ( object instanceof MM.ParentMaster ){

				data = object.exportData();

			} else if ( object instanceof MM.SpaceswitchSplit ) {	
				// console.log('#\texporting SpaceswitchSplit')
				data = object.exportData();
				// console.log('#\tdata:', data)
				
			} else if ( object instanceof MM.Spaceswitch ) {

				data = object.exportData();

			} else if ( object instanceof MM.Constraint ) {

				data = object.exportData()

			} else if ( object instanceof MM.Control ) {				

				data = object.exportData()
				
			} else {
				// console.log('\tExporting Object3D', object)
				data.type = 'Object3D';
			}

			data.matrix = object.matrix.toArray();

			if ( object.children.length > 0 ) {

				data.children = [];

				var thisOutput;
				for ( var i = 0; i < object.children.length; i ++ ) {
					thisOutput = parseObject( object.children[ i ] )
					//	only add the output as output when we actually recorded anything
					if( Object.getOwnPropertyNames(thisOutput).length !== 0 ){						
						data.children.push( thisOutput );				
					}
				}

			}

			//	export animation		
			data.animChannels = object.getChannels();			
			data.animCurves = object.exportAnimation();	

			return data;
		}

		output.object = parseObject( object );

		return output;

	}

}
