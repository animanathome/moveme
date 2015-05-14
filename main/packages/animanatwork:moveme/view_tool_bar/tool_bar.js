MM.Toolbar = function( editor, parent, options){
	// console.log('Toolbar', editor, parent)

	var signals = editor.signals;

	var container = new MMUI.Panel();
	container.setClass( 'toolbar')
	parent.appendChild( container.dom );

	var File = new MM.FileToolBar( editor, container, options )
	
	var SceneView = new MM.SceneViewToolBar( editor, container )
	
	var KeyView = new MM.KeyViewToolBar( editor, container )

	SceneView.dom.style.float = 'left'

	return container;
}

MM.FileToolBar = function( editor, parent, options){
	console.log('FileToolBar', editor, parent, options)

	var showFile = true
	if( options.hasOwnProperty('server_actions')){
		showFile = options['server_actions']
	}

	var signals = editor.signals;

//	build base layout
	var panel = new MMUI.Panel();
	panel.setClass( "file-toolbar");
	
	if(showFile){
		panel.setWidth('170px')	
	}else{
		panel.setWidth('135px')	
	}

	parent.add( panel )

	var intro = new MMUI.Text().setValue('File').setClass('toolbar-intro')
	panel.add( intro )	

//	FILE IO
	var toolbar = new MMUI.ButtonToolBar;
	panel.add( toolbar )

	var snapGroup = new MMUI.ButtonGroup;
	toolbar.add( snapGroup )

	if(showFile){
		var valueSnapUI = new MMUI.Button().setImage('/ui/file_save.png').addToolTip('File Save').onClick( function(){
				editor.saveSceneLocal();
		} );	
		snapGroup.add(valueSnapUI)
	}

//	UNDO - REDO
	var undoUI = new MMUI.Button().setImage('/ui/undo.gif').addToolTip('Undo Action').onClick( function(){
			editor.undo();
	} );	
	snapGroup.add(undoUI)

	var redoUI = new MMUI.Button().setImage('/ui/redo.gif').addToolTip('Undo Action').onClick( function(){
			editor.redo();
	} );	
	snapGroup.add(redoUI)

	return panel;
}