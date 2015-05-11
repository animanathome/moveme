
MM.AssetBuild = function ( editor ){
	this._build = new MM.Build()
	this._editor = editor

	this.nTasks = 0; // number of tasks
	this.fTasks = 0;
	
	this.assetName = undefined	
	this.modelFiles = []
	this.weightFiles = []
	this.skeletonFile = undefined
	this.skeletonPostFunction = undefined
	this.textureFiles = [] 	
	this.textureModel = []
	this.rigComponents = []
	this.rigComponentsName = []
	this.shapeFile = undefined
	this.lastFunction = undefined

	this.namespace = undefined
	this.assetGroup = undefined

	this.models = []
	this.joints = []
	this.controls = [] // controls are collected on a component level

	//	this is the object that will live on
	this.assetObject = undefined;

	//	ui elements
	this.win = undefined
	this.progressBar = undefined
	this.progressTxt = undefined

	return this;
}

MM.AssetBuild.prototype = {	
	setNamespace : function( namespace ){
		//	make sure assign a unique namespace
		this.namespace = this._editor.scene.getUniqueNamespace(namespace);

		//	create asset group ( this should be passed around between the different
		//	components )
		this.assetGroup = this._editor.addGroup( this.namespace , 'asset')  
		this.materialGroup = this._editor.addGroup( this.namespace , 'material')  
	},
	addControls : function( controls ){
		this.controls = MM.extendArrayWithArray(this.controls, controls)
	},
	getControl : function( control_name ){
		var i, j;
		for( i = 0, j = this.controls.length; i < j; i++){
			if( this.controls[i].name === this.namespace+control_name ){
				return this.controls[i]
			}
		}
	},
	addModel : function( fileName ){
		this.modelFiles.push( fileName )
		this.nTasks += 1
	},
	loadModel : function( index ){
		console.log('loading model')

		var scope = this;		
		var modelName = this.modelFiles[index].replace(/^.*[\\\/]/, '').split('.')[0]

		var setupModel = function( data ){
			// console.log('Creating model', modelName)

			var objLoader = new THREE.OBJLoader();
			var object = objLoader.parse( data )
			       	
        	object.children[0].scale = new THREE.Vector3(10,10,10)

        	// object.children[0].scale.x = 10;
        	// object.children[0].scale.y = 10;
        	// object.children[0].scale.z = 10;

        	if( scope.namespace === undefined ){
        		object.children[0].name = modelName
        	}else{
        		object.children[0].name = scope.namespace + modelName
        	}

        	MM.freezeTransformations( object.children[0] ) 
        	// console.log('loaded geometry')
        	// console.log(object.children[0])
        	
            //	coloring object
            object.traverse( function ( child ) {
                if ( child instanceof THREE.Mesh ) {
                   child.material.color = new THREE.Color( 0xC0C0C0);                   
                }
            } ); 
            object.children[0].castShadow = true;
            scope.models.push( object.children[0] )
			
			//	add visibility attribute
			object.children[0].setChannelsEmpty()
			object.children[0].addChannel( 'custom' , 'visibility' )
    		object.children[0].custom={'visibility' : true}
    		object.children[0].asset=scope.assetName 

			scope._editor.addObject( object.children[0] );	
		
			//	delete the parent object
			object.children = []

			scope.updateProgress()
		}

		this._build.addDataProcess({
			'filename' : this.modelFiles[index],
			'onLoaded' : setupModel			
		})
	},
	addSkin : function( fileName ){
		this.weightFiles.push( fileName )
		this.nTasks += 1
	},
	loadSkin : function( index ){
		console.log('loading skin', this.weightFiles[index])

		var scope = this;
		var setupWeights = function( data ){
			var json = JSON.parse( data );
			var skin = MM.weightsConvert( json, scope._editor , scope.namespace)

			scope._editor.addGroupContent( scope.materialGroup, [skin] )
			scope.models.push( skin )

			//	add visibility attribute
			skin.addChannel( 'custom' , 'visibility' )
    		skin.custom={'visibility' : true}

			scope.updateProgress()
		}

		this._build.addDataProcess({
			'filename' : this.weightFiles[index],
			'onLoaded' : setupWeights			
		})
	},
	addSkeleton : function( fileName ){
		this.skeletonFile = fileName
		this.nTasks += 1
	},
	addSkeletonPostFunction : function( postFunction ){		
		// Pass a function here for it to be run once the skeleton has been build
		this.skeletonPostFunction = postFunction
	},
	loadSkeleton : function(){
		console.log('loading skeleton')
		
		var scope = this;
		var setupSkeleton = function( data ){			
			var json = JSON.parse( data );		
			scope.joints = MM.jointsConvert( json, scope._editor, scope.namespace, scope.asset)

			scope.updateProgress()			
		}

		this._build.addDataProcess({
			'filename' : this.skeletonFile,
			'onLoaded' : setupSkeleton,
			'onFinished' : this.skeletonPostFunction	
		})
	},
	addTexture : function( model, textureFile ){
		this.textureModel.push( model )
		this.textureFiles.push( textureFile )
		this.nTasks += 1
	},
	loadTexture : function( index ){
		console.log('loading texture', this.textureFiles[index], 'on', this.textureModel[index])
		var scope = this;
		var texture = scope.textureFiles[index]
		var model = scope.textureModel[index]
		var setupTexture = function(){			
			console.log('loading texture', texture, 'on', model)
			var colorMap = THREE.ImageUtils.loadTexture( texture );

			var modelObj = scope._editor.scene.getObjectByName( model ) 
			if( modelObj !== undefined ){
				console.log('assigning texture to', modelObj.name)
				console.log(modelObj)				
				modelObj.geometry.buffersNeedUpdate = true;
				modelObj.geometry.uvsNeedUpdate = true;
				modelObj.material.map = colorMap;
				modelObj.material.needsUpdate = true;
				// modelObj.material.wireframe = true;
			}else{
				console.log('unable to find', model)
			}
			scope.updateProgress()
		}

		this._build.addDataProcess({			
			'onFinished' : setupTexture			
		})		
	},
	addRigComponent : function( rigComponent, rigComponentName){
		this.rigComponents.push( rigComponent )
		this.rigComponentsName.push( rigComponentName )
		this.nTasks += 1
	},
	getRigComponent : function( rigComponentName ){
		// console.log('getRigComponent', rigComponentName)
		var thisIndex = this.rigComponentsName.indexOf(rigComponentName);
		if( thisIndex !== -1 ){
			// console.log('result', this.rigComponents[thisIndex])
			return this.rigComponents[thisIndex]
		}
	},
	buildRigComponent : function( index ){
		var component = this.rigComponents[index]
		component.editor = this._editor
		var scope = this;
		
		var setupComponent = function(){
			if(scope.namespace !== undefined){
				component.namespace = scope.namespace
			}
			if(scope.assetGroup !== undefined){
				component.assetGroup = scope.assetGroup
			}

			var thisComponent = component.build()

			// console.log('--------------------')
			// console.log(thisComponent.controls)
			scope.addControls( MM.getDictionaryAsArray( thisComponent.controls ))

			scope.updateProgress()
		}

		this._build.addDataProcess({			
			'onFinished' : setupComponent
		})		
	},
	addShape : function( shapeFile ){
		this.shapeFile = shapeFile
		this.nTasks += 1
	},
	loadShape : function(){
		var scope = this;
		var setupShapes = function( data ){
			console.log('setupShapes')
			var json = JSON.parse( data );	
			MM.shapeConvert( json, scope._editor )

			scope.updateProgress()
		}

		this._build.addDataProcess({
			'filename' : this.shapeFile,
			'onLoaded' : setupShapes			
		})
	},
	addLast : function( lastFunction ){
		var scope = this;
		this.lastFunction = (function(){
			//	run last function
			lastFunction(); 	

			scope.updateProgress();

			//	now pass on all of the created elements
			//	to the asset
			var assetObject = new MM.Asset();
			assetObject.name = scope.assetName;
			assetObject.namespace = scope.namespace;
			assetObject.assetGroup = scope.assetGroup;
			assetObject.models = scope.models;
			assetObject.controls = scope.controls;
			assetObject.joints = scope.joints;
			scope.assetObject = assetObject;

			scope._editor.addAssetObject( assetObject )	
		})
		this.nTasks += 1
	},
	loadLast : function(){
		this._build.addDataProcess({			
			'onFinished' : this.lastFunction
		})	
	},
	addPost : function( postFunction ){
		var scope = this;
		this.postFunction = postFunction
		// this.nTasks += 1;
	},
	loadPost : function(){
		this._build.addDataProcess({
			'onFinished' : this.postFunction
		})
	},
	build : function(){
		//	build task list so one task chains into the next
		console.log('build me the asset')
		var i, l;

		// load all models
		for( i = 0, l = this.modelFiles.length; i < l; i++){
			this.loadModel( i )
		}

		//	load skeleton
		this.loadSkeleton()

		//	load all weights
		for( i = 0, l = this.weightFiles.length; i < l; i++){
			this.loadSkin( i )
		}

		//	load all textures
		for( i = 0, l = this.textureFiles.length; i < l; i++){
			this.loadTexture( i )
		}

		//	build any rig components
		for( i = 0, l = this.rigComponents.length; i < l; i++){
			this.buildRigComponent( i )
		}

		this.loadShape();

		this.loadLast();

		this.loadPost();

		this._build.run()		
	},	
	showProgress : function(){
		var dom = document.createElement( 'div' ); 
		dom.className = 'asset-progress'
		document.body.appendChild( dom )
		this.win = dom;

		var txt = new MMUI.Text( 'Loading Asset')
		dom.appendChild( txt.dom )

		var pnl = new MMUI.Panel()
		pnl.dom.className='asset-progress-content'
		pnl.dom.style.backgroundColor = '#B3B3B3'	
		dom.appendChild( pnl.dom )

		this.progressBar = new MMUI.Panel();
		this.progressBar.dom.className='asset-progress-bar'
		pnl.add ( this.progressBar )		

		var progressTxt = '0/'+this.nTasks
		this.progressTxt = new MMUI.Text( progressTxt )
		this.progressTxt.className = 'asset-progress-text'
		this.progressBar.add( this.progressTxt )
	},
	updateProgress : function(){		
		this.fTasks += 1
		if( this.progressTxt === undefined )
			return 

		var width = (1.0 / this.nTasks)
		width *= 250 - 6;
		width *= this.fTasks	

		var progressTxt = this.fTasks+'/'+this.nTasks
		this.progressTxt.setValue( progressTxt );

		// console.log('progressBar width: ', width)
		this.progressBar.dom.style.width = width + 'px'

		if( this.fTasks === this.nTasks )
			document.body.removeChild( this.win )
	}

}