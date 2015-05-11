MM.Menubar.Files = function( editor, showSaveVersion){
	if(showSaveVersion === undefined){
		showSaveVersion = true;
	}

	var signals = editor.signals;
	var menuGrp = new MMUI.MenuGrp('File');

	//	in
	var input = document.createElement( 'input' );
	input.type = 'file';
	input.addEventListener( 'change', function ( event ) {

		// editor.loader.loadFile( input.files[ 0 ] );
		// console.log('Loading file', input.files[0])
		editor.loadScene( input.files[0] )
	} );	

//	NEW - OPEN
	var newItem = new MMUI.MenuItem('New').onClick( function(){
		editor.newScene();
	}).addShortcut('Ctrl+n')
	menuGrp.add( newItem )

	var openItem = new MMUI.MenuItem('Import File').onClick(
		function () {
			input.click();
		})//.addShortcut('Ctrl+o')
	menuGrp.add( openItem )	

	// var versionItem = new MMUI.MenuItem('Open Version').onClick(
	// 	function(){

	// })
	// menuGrp.add( versionItem )

	var divider = new MMUI.MenuDivider();
	menuGrp.add( divider )	

//	SAVE - AS
	var saveLocalItem = new MMUI.MenuItem('Save Local').onClick(function(){
		editor.saveSceneLocal();
	}).addShortcut('Ctrl+s');
	menuGrp.add(saveLocalItem)
	
	if(showSaveVersion){
		var saveItem = new MMUI.MenuItem('Save Version').onClick( function(){
			
			//	disable to use of hotkeys
			editor.useHotKeys = false;

			var parent = document.getElementById("movemeanim");
			var dialog = new MMUI.Dialog('Save Version As', 'Scene Description...', 'Save Version');
			parent.appendChild( dialog.dom )
			
			dialog.onAction = function(){
				// console.log('my test', dialog.getValue())
				editor.useHotKeys = true;
				editor.saveScene( dialog.getValue() );
				dialog.deleteUI();
				dialog = null;
			}
		})
		menuGrp.add( saveItem )
	}

	var saveAsItem = new MMUI.MenuItem('Export File').onClick( function(){
		console.log('MM.Menubar.saveFile')
		var output = editor.saveSceneAs();
		var blob = new Blob( [ output ], { type: 'text/plain' } );
		saveAs(blob, "MoveMeScene.json");	
	})
	menuGrp.add( saveAsItem )	

	divider = new MMUI.MenuDivider();
	menuGrp.add( divider )		

//	ANIMATION
	var animSubMenu = new MMUI.SubMenuGrp('Animation')
	menuGrp.add( animSubMenu )

	//	IMPORT ALL ANIMATION
	var animImportItem= new MMUI.MenuItem('Import All').onClick(
		function () {
			inputAnimation.click();
		});
	animSubMenu.add( animImportItem )

	//	Loading scene file	
	var inputAnimation = document.createElement( 'input' );
	inputAnimation.type = 'file';
	inputAnimation.addEventListener( 'change', function ( event ) {

		// editor.loader.loadFile( inputAnimation.files[ 0 ] );
		var file = inputAnimation.files[0]
		// console.log('Loading file', file)
		
		var reader = new FileReader();
		var scope = this
		reader.addEventListener( 'load', function ( event ) {
			var contents = event.target.result;		
			var input = JSON.parse( contents );

			editor.importAnimationData(input)

		}, false );
		reader.readAsText( file );	
	} );	
	
	//	EXPORT ALL ANIMATION
	var animExportItem= new MMUI.MenuItem('Export All').onClick( function(){
		var output = editor.exportAnimationData();
		
		var outputAsJson = JSON.stringify( output, null, '\t' );
		outputAsJson = outputAsJson.replace( /[\n\t]+([\d\.e\-\[\]]+)/g, '$1' );
        
        var blob = new Blob( [ outputAsJson ], { type: 'text/plain' } );
        saveAs(blob, "MoveMeAnimation.json");
	})
	animSubMenu.add( animExportItem )


//	POSE
	var poseSubMenu = new MMUI.SubMenuGrp('Pose')
	menuGrp.add( poseSubMenu )

//	IMPORT POSE
	var importPoseItem = new MMUI.MenuItem('Import All').onClick(
	function () {
		inputPose.click();
	});
	poseSubMenu.add( importPoseItem )
	
	//	Loading scene file	
	var inputPose = document.createElement( 'input' );
	inputPose.type = 'file';
	inputPose.addEventListener( 'change', function ( event ) {

		var file = inputPose.files[0]
		// console.log('Loading file', file)
		
		var reader = new FileReader();
		var scope = this
		reader.addEventListener( 'load', function ( event ) {
			var contents = event.target.result;		
			var input = JSON.parse( contents );

			// console.log('data type:', input.metadata.type)
			if( input.metadata.type !== 'pose'){
				console.log('\twrong data type, looking for pose.')
				return
			}
			
			editor.importPose( input.pose )
			editor.signals.sceneGraphChanged.dispatch();

		}, false );
		reader.readAsText( file );	
	});

//	EXPORT POSE
	var exportPoseItem = new MMUI.MenuItem('Export All').onClick(
	function () {
		var output = {
			metadata:{
				version: 0.1,
				type: 'pose'
			}
		};
		
		output.pose = editor.exportPose();
		
		var outputAsJson = JSON.stringify( output, null, '\t' );
		outputAsJson = outputAsJson.replace( /[\n\t]+([\d\.e\-\[\]]+)/g, '$1' );
        
        var blob = new Blob( [ outputAsJson ], { type: 'text/plain' } );
        saveAs(blob, "MoveMePose.json");
	});
	poseSubMenu.add( exportPoseItem )

	return menuGrp
}