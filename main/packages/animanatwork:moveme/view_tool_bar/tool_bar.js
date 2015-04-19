MM.Toolbar = function( editor, parent, options){
	// console.log('Toolbar', editor, parent)

	var signals = editor.signals;

	var container = new MMUI.Panel();
	container.setClass( 'toolbar')
	parent.appendChild( container.dom );

	showFile = true
	if( options.hasOwnProperty('server_actions')){
		showFile = options['server_actions']
	}
	if(showFile){
		var File = new MM.FileToolBar( editor, container )
	}
	
	var SceneView = new MM.SceneViewToolBar( editor, container )
	
	var KeyView = new MM.KeyViewToolBar( editor, container )

	SceneView.dom.style.float = 'left'

	return container;
}

MM.FileToolBar = function( editor, parent ){
	var signals = editor.signals;

	var options = new MMUI.Panel();
	options.setClass( "file-toolbar");
	parent.add( options )

	var intro = new MMUI.Text().setValue('File').setClass('toolbar-intro')
	options.add( intro )	

//	FILE IO
	var toolbar = new MMUI.ButtonToolBar;
	options.add( toolbar )

	var snapGroup = new MMUI.ButtonGroup;
	toolbar.add( snapGroup )

	// var timeSnapUI = new MMUI.Button().setImage('/ui/file_open.png').addToolTip('File Open').onClick( function(){
	// 		console.log('File Open, yet to be implemented')
	// })
	// snapGroup.add(timeSnapUI)

	var valueSnapUI = new MMUI.Button().setImage('/ui/file_save.png').addToolTip('File Save').onClick( function(){
			editor.saveSceneLocal();
	} );	
	snapGroup.add(valueSnapUI)

	return options;
}