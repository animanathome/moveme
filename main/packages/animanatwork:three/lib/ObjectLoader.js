/**
 * @author mrdoob / http://mrdoob.com/
 */

THREE.ObjectLoader = function ( manager ) {

	this.manager = ( manager !== undefined ) ? manager : THREE.DefaultLoadingManager;

};

THREE.ObjectLoader.prototype = {

	constructor: THREE.ObjectLoader,

	load: function ( url, onLoad, onProgress, onError ) {

		var scope = this;

		var loader = new THREE.XHRLoader( scope.manager );
		loader.setCrossOrigin( this.crossOrigin );
		loader.load( url, function ( text ) {

			onLoad( scope.parse( JSON.parse( text ) ) );

		} );

	},

	setCrossOrigin: function ( value ) {

		this.crossOrigin = value;

	},

	parse: function ( json ) {
		// console.log('ObjectLoader.parse', json)

		var geometries = this.parseGeometries( json.geometries );
		var materials = this.parseMaterials( json.materials );
		var object = this.parseObject( json.object, geometries, materials );

		return object;

	},

	parseGeometries: function ( json ) {

		var geometries = {};

		if ( json !== undefined ) {

			var geometryLoader = new THREE.JSONLoader();
			var bufferGeometryLoader = new THREE.BufferGeometryLoader();

			for ( var i = 0, l = json.length; i < l; i ++ ) {

				var geometry;
				var data = json[ i ];

				switch ( data.type ) {

					case 'PlaneGeometry':

						geometry = new THREE.PlaneGeometry(
							data.width,
							data.height,
							data.widthSegments,
							data.heightSegments
						);

						break;

					case 'CubeGeometry':

						geometry = new THREE.CubeGeometry(
							data.width,
							data.height,
							data.depth,
							data.widthSegments,
							data.heightSegments,
							data.depthSegments
						);

						break;

					case 'CylinderGeometry':

						geometry = new THREE.CylinderGeometry(
							data.radiusTop,
							data.radiusBottom,
							data.height,
							data.radiusSegments,
							data.heightSegments,
							data.openEnded
						);

						break;

					case 'SphereGeometry':

						geometry = new THREE.SphereGeometry(
							data.radius,
							data.widthSegments,
							data.heightSegments,
							data.phiStart,
							data.phiLength,
							data.thetaStart,
							data.thetaLength
						);

						break;

					case 'IcosahedronGeometry':

						geometry = new THREE.IcosahedronGeometry(
							data.radius,
							data.detail
						);

						break;

					case 'TorusGeometry':

						geometry = new THREE.TorusGeometry(
							data.radius,
							data.tube,
							data.radialSegments,
							data.tubularSegments,
							data.arc
						);

						break;

					case 'TorusKnotGeometry':

						geometry = new THREE.TorusKnotGeometry(
							data.radius,
							data.tube,
							data.radialSegments,
							data.tubularSegments,
							data.p,
							data.q,
							data.heightScale
						);

						break;

					case 'BufferGeometry':

						geometry = bufferGeometryLoader.parse( data.data );

						break;

					case 'Geometry':

						geometry = geometryLoader.parse( data.data ).geometry;

						break;

				}

				geometry.uuid = data.uuid;

				if ( data.name !== undefined ) geometry.name = data.name;
				if ( data.tag !== undefined ) geometry.tag = data.tag;

				geometries[ data.uuid ] = geometry;

			}

		}

		return geometries;

	},

	parseMaterials: function ( json ) {

		var materials = {};

		if ( json !== undefined ) {

			var loader = new THREE.MaterialLoader();

			for ( var i = 0, l = json.length; i < l; i ++ ) {

				var data = json[ i ];
				var material = loader.parse( data );

				material.uuid = data.uuid;

				if ( data.name !== undefined ) material.name = data.name;

				materials[ data.uuid ] = material;

			}

		}

		return materials;

	},

	parseObject: function () {

		var matrix = new THREE.Matrix4();

		return function ( data, geometries, materials ) {

			var object;

			switch ( data.type ) {

				case 'Scene':

					object = new THREE.Scene();

					break;

				case 'PerspectiveCamera':

					object = new THREE.PerspectiveCamera( data.fov, data.aspect, data.near, data.far );

					break;

				case 'OrthographicCamera':

					object = new THREE.OrthographicCamera( data.left, data.right, data.top, data.bottom, data.near, data.far );

					break;

				case 'AmbientLight':

					object = new THREE.AmbientLight( data.color );

					break;

				case 'DirectionalLight':

					object = new THREE.DirectionalLight( data.color, data.intensity );

					break;

				case 'PointLight':

					object = new THREE.PointLight( data.color, data.intensity, data.distance );

					break;

				case 'SpotLight':

					object = new THREE.SpotLight( data.color, data.intensity, data.distance, data.angle, data.exponent );

					break;

				case 'HemisphereLight':

					object = new THREE.HemisphereLight( data.color, data.groundColor, data.intensity );

					break;

				// case 'SkinnedMesh':
				// 	var geometry = geometries[ data.geometry ];
				// 	var material = materials[ data.material ];

				// 	if ( geometry === undefined ) {

				// 		console.error( 'THREE.ObjectLoader: Undefined geometry ' + data.geometry );

				// 	}

				// 	if ( material === undefined ) {

				// 		console.error( 'THREE.ObjectLoader: Undefined material ' + data.material );

				// 	}

				// 	object = new THREE.SkinnedMesh( geometry, material );	

				// 	break;

				case 'Mesh':

					var geometry = geometries[ data.geometry ];
					var material = materials[ data.material ];

					if ( geometry === undefined ) {

						console.error( 'THREE.ObjectLoader: Undefined geometry ' + data.geometry );

					}

					if ( material === undefined ) {

						console.error( 'THREE.ObjectLoader: Undefined material ' + data.material );

					}

					object = new THREE.Mesh( geometry, material );

					break;

				case 'SplineCluster':
					//	here we need to make a temp object so we can create
					//	any objects that might be parented under the object
					object = new THREE.Object3D();
				break;

				case 'FourBoneIkBlendSolver':
					// console.log('Creating FourBoneIkBlendSolver', data.name)
					object = new MM.FourBoneIkBlendSolver();
					object.importData( data )
					// console.log('\tresult:', object)
				break;

				case 'TwoBoneIkBlendSolver':
					// console.log('Creating TwoBoneIkBlendSolver', data.name)
					object = new MM.TwoBoneIkBlendSolver();
					object.importData( data )
					// console.log('\tresult:', object)
				break;

				case 'TwoBoneSoftIkSolver':
					object = new MM.TwoBoneSoftIkSolver();
					object.importData( data )				
				break;

				case 'TwoBoneIkSolver':
					// console.log('Creating TwoBoneIkSolver', data.name)

					object = new MM.TwoBoneIkSolver();
					object.importData( data )

					// console.log('\tresult:', object)
				break;

				case 'OneSimpleBoneIkSolver':
					// console.log('Creating OneSimpleBoneIkSolver', data.name)

					object = new MM.OneSimpleBoneIkSolver();
					object.importData( data )
					
					console.log('\tresult:', object)
				break;

				case 'Joint':
					// console.log('\tCreating joint')

					object = new MM.Joint();
					object.importData(data)

					// object.radius = data.radius
					// object.controlSize = data.controlSize
					// object.showRotationAxis = data.showRotationAxis
					// object.showHierarchy = data.showHierarchy
					// object.showControl = data.showControl

					// // console.log('\tskinData:', data.skinMatrix)

					// object.skinMatrix.fromArray( data.skinMatrix )

					// // console.log('\tskin obj:', object.skinMatrix)

					// object.preferedAngle.set( data.preferedAngle.x, 
					// 	data.preferedAngle.y, data.preferedAngle.z)

					break;

				case 'ParentMaster':
					object = new MM.ParentMaster();
					object.importData( data );
				break;

				case 'Spaceswitch':
					object = new MM.Spaceswitch();
					object.importData( data );
				break;

				case 'Constraint':
					// console.log('\tCreating constraint')
					// console.log('\tdata', data)

					object = new MM.Constraint();

					object.constraintMode = data.constraintMode 
					
					object.controlColor.setRGB( data.controlColor.r, 
						data.controlColor.g, data.controlColor.b )
					object.controlSize = data.controlSize
					
					object.controlScale.set( data.controlScale.x, 
						data.controlScale.y, data.controlScale.z ) 	

					object.controlOffset.set( data.controlOffset.x, 
						data.controlOffset.y, data.controlOffset.z ) 
					
					object.controlSide = data.controlSide
					object.offsetMatrix.fromArray( data.offsetMatrix)

					if( data.hasOwnProperty('controlShape')){
						object.controlShape = data.controlShape
					}

					if( data.hasOwnProperty('custom')){
						object.custom = data.custom
					}
				break;	

				case 'Control':
					// console.log('\tCreating Control')

					object = new MM.Control();

					object.controlColor.setRGB( data.controlColor.r, 
						data.controlColor.g, data.controlColor.b )

					object.controlSize = data.controlSize
					
					object.controlScale.set( data.controlScale.x, 
						data.controlScale.y, data.controlScale.z ) 	

					object.controlOffset.set( data.controlOffset.x, 
						data.controlOffset.y, data.controlOffset.z ) 
					
					object.controlSide = data.controlSide

					// object.offsetMatrix.fromArray( data.offsetMatrix)

					if( data.hasOwnProperty('controlShape')){
						object.controlShape = data.controlShape
					}
					break;			

				default:

					object = new THREE.Object3D();

			}

			object.uuid = data.uuid;

			if ( data.name !== undefined ) object.name = data.name;
			if ( data.type !== undefined ) object.type = data.type;
			if ( data.asset !== undefined ) object.asset = data.asset;
			if ( data.animChannels !== undefined ){
				// console.log(object.name, ' -> ', data.animChannels)
				object.animChannels = data.animChannels;
			}

			//	Set drive channel property
			//	NOTE: This will still need to be initialized since we can't setup the connection here since the object might not yet exist.
			// console.log('looking at driveChannel on', data.name)
			// console.log('\tdata', data)
			if( data.hasOwnProperty('driveChannel')){
				// console.log('\tadding driveChannel data')
				object.driveChannel = data.driveChannel;
				// console.log('\tobject', this)
			}

			if( data.custom !== undefined ){
				console.log('\treading in custom data object', data.custom)
				object.custom = data.custom

				if( data.custom.hasOwnProperty('color') === true ){
					data.custom['color'] = object.material.color
				}
			}
			if ( data.tag !== undefined ) object.tag = data.tag;
			if ( data.matrix !== undefined ) {

				matrix.fromArray( data.matrix );
				matrix.decompose( object.position, object.quaternion, object.scale );

			} else {

				if ( data.position !== undefined ) object.position.fromArray( data.position );
				if ( data.rotation !== undefined ) object.rotation.fromArray( data.rotation );
				if ( data.scale !== undefined ) object.scale.fromArray( data.scale );

			}

			if ( data.visible !== undefined ) object.visible = data.visible;
			if ( data.userData !== undefined ) object.userData = data.userData;

			if ( data.children !== undefined ) {

				for ( var child in data.children ) {

					object.add( this.parseObject( data.children[ child ], geometries, materials ) );

				}

			}

			if( data.animCurves !== undefined ){
				object.importAnimation( data.animCurves )
			}


			// console.log('\created', object)
			return object;

		}

	}()

};
