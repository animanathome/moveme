/**
 * @author mrdoob / http://mrdoob.com/
 */

THREE.MaterialExporter = function () {};

THREE.MaterialExporter.prototype = {

	constructor: THREE.MaterialExporter,

	parse: function ( material ) {

		var output = {
			metadata: {
				version: 4.2,
				type: 'material',
				generator: 'MaterialExporter'
			}
		};

		output.uuid = material.uuid;

		if ( material.name !== "" ) output.name = material.name;
		if ( material.skinning === true ) output.skinning = material.skinning;

		if ( material instanceof THREE.MeshBasicMaterial ) {

			output.type = 'MeshBasicMaterial';
			output.color = material.color.getHex();
			if ( material.vertexColors !== THREE.NoColors ) output.vertexColors = material.vertexColors;
			if ( material.blending !== THREE.NormalBlending ) output.blending = material.blending;
			output.opacity = material.opacity;
			output.transparent = material.transparent;
			output.wireframe = material.wireframe;

		} else if ( material instanceof THREE.MeshLambertMaterial ) {

			output.type = 'MeshLambertMaterial';
			output.color = material.color.getHex();
			output.ambient = material.ambient.getHex();
			output.emissive = material.emissive.getHex();
			if ( material.vertexColors !== THREE.NoColors ) output.vertexColors = material.vertexColors;
			if ( material.blending !== THREE.NormalBlending ) output.blending = material.blending;
			output.opacity = material.opacity;
			output.transparent = material.transparent;
			output.wireframe = material.wireframe;

		} else if ( material instanceof THREE.MeshPhongMaterial ) {

			output.type = 'MeshPhongMaterial';
			output.color = material.color.getHex();
			output.ambient = material.ambient.getHex();
			output.emissive = material.emissive.getHex();
			output.specular = material.specular.getHex();
			output.shininess = material.shininess;
			if ( material.vertexColors !== THREE.NoColors ) output.vertexColors = material.vertexColors;
			if ( material.blending !== THREE.NormalBlending ) output.blending = material.blending;
			output.opacity = material.opacity;
			output.transparent = material.transparent;
			output.wireframe = material.wireframe;

		} else if ( material instanceof THREE.MeshNormalMaterial ) {

			output.type = 'MeshNormalMaterial';
			if ( material.blending !== THREE.NormalBlending ) output.blending = material.blending;
			output.opacity = material.opacity;
			output.transparent = material.transparent;
			output.wireframe = material.wireframe;

		} else if ( material instanceof THREE.MeshDepthMaterial ) {

			output.type = 'MeshDepthMaterial';
			if ( material.blending !== THREE.NormalBlending ) output.blending = material.blending;
			output.opacity = material.opacity;
			output.transparent = material.transparent;
			output.wireframe = material.wireframe;

		} else if ( material instanceof THREE.MeshFaceMaterial ) {

			output.type = 'MeshFaceMaterial';
			output.materials = [];

			for ( var i = 0, l = material.materials.length; i < l; i ++ ) {

				output.materials.push( this.parse( material.materials[ i ] ) );

			}

		}

		return output;

	}

};
