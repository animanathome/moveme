MM.Menubar = function ( layout, editor , dom, options) {
	console.log('Menubar', options)

	var navigationBar = new MMUI.NavigationBar();
	//	add a suffix to the className so we can differentiate between the main navigation menu and this tool navigation menu 
	navigationBar.dom.className = "navbar navbar-default nav-lower navbar-anim"

	var navigation = new MMUI.Navigation();
	navigationBar.add( navigation )

	//	FILE
	showSaveVersion = true
	if( options.hasOwnProperty('server_actions')){
		showSaveVersion = options['server_actions']
	}	
	navigation.add( new MM.Menubar.Files( editor, showSaveVersion));
		
	//	EDITS
	navigation.add( new MM.Menubar.Edits( editor ) );
	
	//	VIEWS
	navigation.add( new MM.Menubar.Views( layout, editor ) );
	
	//	INSERTS
	navigation.add( new MM.Menubar.Inserts( editor ) );
	
	//	ANIMATE
	navigation.add( new MM.Menubar.Animates( editor ) );
	
	// DEMO
	show_demo = true
	if( options.hasOwnProperty('demo_actions')){
		show_demo = options['demo_actions']
	}
	if(show_demo ){
		navigation.add( new MM.Menubar.Demos( editor ) );
	}	

	if( dom )
		dom.appendChild( navigationBar.dom )

	this.dom = navigationBar.dom;


	return this;
}