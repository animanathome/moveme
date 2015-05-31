MMUI.lineWithinRange = function( l0, l1 ){
	// console.log('MMUI.lineWithinRange', l0, l1)
	//	this is a very specific method only to be used by panel layout

	//	same length
	if( l0[0] === l1[0] 
	&&  l0[1] === l1[1]
	&&  l0[2] === l1[2])
	{
		return true;
	}

	//	within range
	if( l0[0] === l1[0] 
	&& l0[1] <= l1[1] 
	&& l0[2] >= l1[2])
	{
		return true;
	}

	return false
}

MMUI.PanelLayout = function( editor, mdom){
	// console.log('MMUI.PanelLayout.init')

	MMUI.Element.call( this, editor, mdom);

	var scope = this;
	var dom = document.createElement( 'div' );  	
	dom.style.top = '0px'
	dom.style.bottom = '0px'
	dom.style.left = '0px'
	dom.style.right = '0px'
	dom.style.position = 'absolute'
	this.dom = dom;
	this.mdom = mdom; // master dom - replaces document when creating events. We do this help garbage collection when moving to another page.

	this.prefix = 'main'
	this.applyRandomColor = true;
	this.setPanelClass = undefined;
	this.editor = editor

	this.sliderThickness = 4;
	this.nPanels = 0; // hack untill we properly init the interface!!!
	this.panelName = 'view';
	this.newPanelName = undefined; // holds the name of the latest created panel
	
	//	NOTE: enables recursive neigbour. We should only really have to do this when we have hiden panels! Ideally this would be triggered to moment we find a panel that is hidden, then continue untill we find a panel that is visible!
	this.canHidePanels = false;

	/*
	Object property description:		
		panels: defines the different panels
		hsliders: horizontal sliders between 2 panels
		vsliders: vertical sliders between 2 panels

		h: current height
		w: current width
		td: top dependency
		bd: bottom dependency		
		ld: left depencency
		rd: right dependency
		v: visibility
		dh: default height: can be a value or dependency list. This gets used for when we have to show a panel ( so we give it an initial height )
		dw: default width: can be a value or dependency list. This gets used for when we have to show a panel ( so we give it an initial width )
	*/
	this.layoutObject = {
		//	list of panels and the space they inhabit
		panels : {
			infoLine: {
				 h: [0,5]
				,w: [0,80]
				,td: ['rangeSlider']
				,bd: []
				,rd: ['sidebar']
				,ld: []
				,dh: 5
				,dw: 80
				,v: true
			},
			rangeSlider: {
	 			 h: [5,15]
				,w: [0,80]
				,td: ['timeLine']
				,bd: ['infoLine']
				,rd: ['sidebar']
				,ld: []
				,dh: 10
				,dw: 80
				,v: true
			},
			timeLine: {
	 			 h: [15,25]
				,w: [0,80]
				,td: ['workspace']
				,bd: ['rangeSlider']
				,rd: ['sidebar']
				,ld: []
				,dh: 10
				,dw: 80
				,v: true
			},
			workspace: {
				 h: [25,100]
				,w: [0,80]
				,td: []
				,bd: ['timeLine']
				,rd: ['sidebar']
				,ld: []
				,dh: 75
				,dw: 80
				,v: true
			},
			// assetbar: {
			// 	 h: [0,100]
			// 	,w: [0,20]
			// 	,td: []
			// 	,bd: []
			// 	,rd: ['infoLine','rangeSlider','timeLine','workspace']
			// 	,ld: []
			// 	,v: true
			// 	,dw: 20
			// },
			sidebar: {
				 h: [0,100]
				,w: [80,100]
				,td: []
				,bd: []
				,rd: []
				,ld: ['infoLine','rangeSlider','timeLine','workspace']
				,v: true
				,dw: 20
			}
		},
		//	list of horizontal slider and the panels they influence
		//	bottom to top
		hsliders : {
			infoLine: {
				 h: [0, 5]
				,w: [20, 80]
				,td: ['rangeSlider'] // top dependency
				,bd: ['infoLine']
			},
			rangeSlider: {
				 h: [5, 15] 
				,w: [20, 80]
				,td: ['timeLine']
				,bd: ['rangeSlider']
			},
			timeLine: {
				 h: [15, 25]
				,w: [20, 80]
				,td: ['workspace']
				,bd: ['timeLine']
			}
		},
		//	right to left
		vsliders : {
			  sidebar: {
				 h: [0,100]
				,w: [80, 100]
				,ld: ['workspace', 'timeLine', 'infoLine', 'rangeSlider'] // left dependency
				,rd: ['sidebar']  // right dependency
				// ,bi: ['timeLine'] // bottom influence
			}
			// , assetbar:{
			// 	 h: [0,100]
			// 	,w: [20, 80]
			// 	,rd: ['workspace', 'timeLine', 'infoLine', 'rangeSlider'] // left dependency
			// 	,ld: ['assetbar']  // right dependency
			// 	// ,bi: ['timeLine'] // bottom influence
			// }
		}
	}
	this.layoutElements = {};
	this.totalHeight = 0;
	this.totalWidth = 0;

	this.resizeLayoutEvent = document.createEvent( 'HTMLEvents' );
    this.resizeLayoutEvent.initEvent( 'resizelayout', true, true );

	return this;
}

MMUI.PanelLayout.prototype = Object.create( MMUI.Element.prototype );

MMUI.PanelLayout.prototype.getConnectedSliders = function( panels, ui){
	// console.log('PanelLayout.getConnectedSliders', panels, ui)

	//	determines which sliders are driving the given panels
	//	example: ['view1', 'view2'] 'v'
	var i, tdir, slider;
	var possibleDirs = ['ld', 'rd', 'td', 'bd']
	var connected = []
	for( slider in this.layoutObject[ui]){
		// console.log('\tslider', slider)
		for( i = 0; i < possibleDirs.length; i++){
			//	get the dependend panels in the current direction
			tdir = this.layoutObject[ui][slider][possibleDirs[i]]
			// console.log('\t\t', possibleDirs[i], tdir)
			if( MM.arrayContainsAElementFromArray(tdir, panels)){
				// console.log('\t\tyes')
				connected.push(slider); break;
			}
		}	
	}
	// console.log('\tresult', connected)
	return connected;
}


MMUI.PanelLayout.prototype.updateSliderConnections = function( dir ){
	// console.log('updateSliderConnections', dir)
	// console.log('\tlayoutObject', this.layoutObject)
	//	as we add sliders to the layout we have to make sure all sliders keep driving the proper panels
	// options: hsliders or vsliders

	//	if hsliders (horiztonal)
	//	check for all containers that share a horizontal edge of the same width and height (vertical position in space)

	var ts 	// this slider
	, 	tsp // this slider position
	, 	tp 	// this panel
	, 	tpp0 // this panel position bottom
	,	tpp1 // this panel position top
	, 	slider;

	for( slider in this.layoutObject[dir]){
		// console.log('\t', slider)

		ts = this.layoutObject[dir][slider];
		
		//	reset dependencies
		if( dir === 'hsliders'){
			ts.td=[]; ts.bd=[];
			tsp = [ts.h[1], ts.w[0], ts.w[1]]
		}else{ // vsliders
			ts.ld=[]; ts.rd=[];
			tsp = [ts.w[0], ts.h[0], ts.h[1]]
		}

		//	get the line dimensions of the slider y, x1, x2				
		// console.log('\t', tsp)

		var panel;
		for( panel in this.layoutObject['panels']){
			tp = this.layoutObject['panels'][panel];
			
			if( dir === 'hsliders'){
				tpp0 = [tp.h[0], tp.w[0], tp.w[1]];
				tpp1 = [tp.h[1], tp.w[0], tp.w[1]];
			}else{
				tpp0 = [tp.w[0], tp.h[0], tp.h[1]];
				tpp1 = [tp.w[1], tp.h[0], tp.h[1]];
			}
			
			// console.log('\t\t', panel)
			// console.log('\t\t0:', tpp0, MMUI.lineWithinRange( tsp, tpp0 ))
			// console.log('\t\t1:', tpp1, MMUI.lineWithinRange( tsp, tpp1 ))

			//	check if the top or bottom horizontal line dimensions match with that of the slider
			if( MMUI.lineWithinRange( tsp, tpp0 ) 
			|| MMUI.lineWithinRange( tsp, tpp1 )){
				if( MMUI.lineWithinRange( tsp, tpp0 ) ){
					if( dir === 'hsliders'){
						// console.log('\t\tabove', panel)
						ts.td.push(panel);
					}else{
						// console.log('\t\tright', panel)
						ts.rd.push(panel);
					}
				}else{
					if( dir === 'hsliders'){
						// console.log('\t\tbelow', panel)
						ts.bd.push(panel);
					}else{
						// console.log('\t\tleft', panel)
						ts.ld.push(panel);
					}
				}
			}
		}
	}
}

MMUI.PanelLayout.prototype.replaceDependencies = function(ui, dirs, cpd, npd){
	console.log('replaceDependencies', ui, dirs, cpd, npd)
	console.log('\tobj', this.layoutObject)
	//	replaces the current panel dependency with the new one
	//	example: view0, view2, [ld, td]
	var i, index, panel;
	for( i = 0; i < dirs.length; i++){
		for( panel in this.layoutObject[ui]){
			//	if the current panel has a dependency to the given panel
			//	update it so it points to the new panel
			index = this.layoutObject[ui][panel][dirs[i]].indexOf(cpd);
			if( index !== -1){
				console.log('\tupdating', panel, dirs[i])
				this.layoutObject[ui][panel][dirs[i]][index]=npd;
			}
		}
	}
}

MMUI.PanelLayout.prototype.addDependencies = function(ui, dirs, cpd, npd ){
	// console.log('addDependencies', ui, dirs, cpd, npd)
	//	adds the new panel dependency to each one which already has our current panel dependency
	//	example: vslider [ld, td] view0, view2
	var i, index, panel;
	for( i = 0; i < dirs.length; i++){
		for( panel in this.layoutObject[ui]){
			//	if the current panel has a dependency to the given panel
			//	update it so it points to the new panel
			index = this.layoutObject[ui][panel][dirs[i]].indexOf(cpd);
			if( index !== -1){
				// console.log('\tAdding dependency to', panel)
				this.layoutObject[ui][panel][dirs[i]].push(npd);
			}
		}
	}
}

MMUI.PanelLayout.prototype.removeDependencies = function(ui, dirs, pd ){
	// console.log('removeDependencies', ui, dirs, pd)
	// console.log('\tobject', this.layoutObject)
	//	removes the current panel dependency from the given directions
	//	example: vslider ['ld', 'rd'] view0
	var i, index, panel;
	for( i = 0; i < dirs.length; i++){
		for( panel in this.layoutObject[ui]){
			//	if the current panel has a dependency to the given panel
			//	update it so it points to the new panel
			index = this.layoutObject[ui][panel][dirs[i]].indexOf(pd);
			if( index !== -1){
				// console.log('\tRemoving dependency from', panel)
				this.layoutObject[ui][panel][dirs[i]].splice(index, 1);
			}
		}
	}	
}


MMUI.PanelLayout.prototype.getNeighourDirections = function( panel ){
	console.log('PanelLayout.getNeighourDirections', panel)
	//	determines in which directions the current panel has neighbours of the same height or width. This allows us to use this method to determine in which direction we can collapse.

	var possibleDirs = ['ld', 'rd', 'td', 'bd']
	if( !this.layoutObject.panels.hasOwnProperty(panel)){
		return [];
	}
	
	//	if the lenght or widh is the same
	var cdom = this.layoutElements.container[panel].dom;
	var ch = cdom.offsetHeight;
	var cw = cdom.offsetWidth;

	var dirs = [];
	var tdom; //	this dom
	var tngb; //	this neighour

	var i, j;
	for( i = 0, j = possibleDirs.length; i < j; i++){
		//	if we have a dependency in the given direction
		tngb = this.layoutObject.panels[panel][possibleDirs[i]]
		if( tngb.length > 0){
			console.log('\tneighbour', tngb[0])

			//	make sure either the widht or height is the same
			//	we only need to check 1
			tdom = this.layoutElements.container[tngb[0]].dom;
			if( tdom.offsetWidth === cw || tdom.offsetHeight === ch){
				dirs.push(possibleDirs[i]);
			}
		}
	}
	return dirs;
}

MMUI.PanelLayout.prototype.getSlidersDriven = function( ui, slider, skip){
	// console.log('getSlidersDriven', ui, slider, skip)

	//	determines which panels the given slider drives
	//	NOTE: skip any panels that are in the skip list
	var possibleDirs = ['ld', 'rd', 'td', 'bd']
	var i, j;
	var result = []
	for( i = 0, j = possibleDirs.length; i < j; i++){
		if( this.layoutObject[ui][slider].hasOwnProperty(possibleDirs[i])){
			result.push.apply(result, this.layoutObject[ui][slider][possibleDirs[i]]);
		}
	}
	var index = result.indexOf( skip )
	if( index > -1 ){
		result.splice( index, 1 )
	}

	// console.log('\tresult', result)
	return result;
}

MMUI.PanelLayout.prototype.getDrivingSlider = function( ui, dirs, panel ){
	// console.log('movesPanel', ui, dirs, panel)
	
	//	determines which slider drives the given panel
	//	example: movesPanel vsliders ['ld', 'rd'] view0	
	var cpanel;
	for( cpanel in this.layoutObject[ui]){
		// console.log('\tpanel', cpanel)
		// console.log('\tcontent', this.layoutObject[ui][cpanel][dir])		
		for( var i = 0, j = dirs.length; i < j; i++){
			if( this.layoutObject[ui][cpanel].hasOwnProperty(dirs[i])){
				if( this.layoutObject[ui][cpanel][dirs[i]].indexOf(panel) !== -1 ){
					// console.log('\tyes')
					return cpanel;
				}
			}
		}
	}
}

MMUI.PanelLayout.prototype.getVisibleConnected = function( ui, space, dir, array, counter){

	if( array === undefined ){
		array = [];
	}

	if( counter === undefined ){
		counter = 0;
	}else{
		counter += 1;
	}
	
	if( counter > 10 ){
		console.log('\tERROR:LOOP')
		return;
	}

	var i,j;
	var tpd = []; // this panel dependencies
	//	make sure the property exists (if this empty it might no exist)
	if(this.layoutObject[ui].hasOwnProperty(space)){
		if(this.layoutObject[ui][space].hasOwnProperty(dir)){			
			tpd = this.layoutObject[ui][space][dir];
			for( i = 0, j = tpd.length; i < j; i++){
				//	make sure the panel is visible
				if( this.layoutObject.panels[tpd[i]].v === true){
					array.push( tpd[i] )
				}
			}
		}		
	}

	if( array.length === 0 ){
		for( i = 0, j = tpd.length; i < j; i++){
			if( tpd[i] !== space){	// skip itself
				this.getVisibleConnected(ui, tpd[i], dir, array, counter)
			}
		}
	}
	return array;
}


MMUI.PanelLayout.prototype.resetLayout = function(){
	console.log('MMUI.PanelLayout.resetLayout')

//	delete all elements
    // while (this.dom.firstChild) {
    //     this.dom.removeChild(this.dom.firstChild);
    // }

//	remove containers
	var container;
	for(container in this.layoutElements['container']){
		console.log('\t', this.layoutElements['container'][container])
		container = this.layoutElements['container'][container].dom
		this.dom.removeChild(container)
	}

//	remove horizontal sliders
    // this.layoutElements['hsliders']	
    var hslider;
    for(hslider in this.layoutElements['hsliders']){
		console.log('\t', this.layoutElements['hsliders'][hslider])
		hslider = this.layoutElements['hsliders'][hslider].dom
		this.dom.removeChild(hslider)
	}

//	remove vertical sliders    
    // this.layoutElements['vsliders']	
    for(hslider in this.layoutElements['vsliders']){
		console.log('\t', this.layoutElements['vsliders'][hslider])
		hslider = this.layoutElements['vsliders'][hslider].dom
		this.dom.removeChild(hslider)
	}
}

MMUI.PanelLayout.prototype.deletePanel = function( panel, direction){
	console.log('MMUI.PanelLayout.deletePanel', panel, direction)

	//	delete container and any associated dividers/sliders
	// var dsh, dsw, dsl, dst; // delete space height and width
	if( this.layoutElements['container'].hasOwnProperty(panel)){		
		//	delete dom element	
		var container = this.layoutElements['container'][panel].dom
		// dsh = container.offsetHeight;
		// dsw = container.offsetWidth;
		// dsl = parseFloat(container.style.left);
		// dst = parseFloat(container.style.top);
		container.parentNode.removeChild( container );
		
		//	determine what happens with the white space
		//	if direction is defined, pass on the current dimensions to the neighours from the given direction
		if( direction !== "nd"){
			var i, tp, nb, cp, minw, maxw, minh, maxh;
			tp = this.layoutObject['panels'][panel];
			nb = tp[direction];
			for( i = 0; i < nb.length; i++){
				// console.log('\t', nb[i])				
				cp = this.layoutObject['panels'][nb[i]]
				// console.log('\tediting neighbour', nb[i])
				if( direction === 'ld' 
				||  direction === 'rd' 
				||  direction === 'nd'){
					minw = Math.min( cp.w[0], tp.w[0])
					maxw = Math.max( cp.w[1], tp.w[1])
					// console.log('\tsetting width', minw, maxw)
					cp.w = [minw, maxw]
				}

				if( direction === 'td'
				||  direction === 'bd'
				||  direction === 'nd'){
					minh = Math.min( cp.h[0], tp.h[0])
					maxh = Math.max( cp.h[1], tp.h[1])
					// console.log('\tsetting height', minh, maxh)	
					cp.h = [minh, maxh]
				}
				this.updateContainer(nb[i])
			}
		}

		//	delete element object entry
		delete this.layoutElements['container'][panel];
		
		//	delete object property
		delete this.layoutObject.panels[panel]

		//	remove any references / dependencies
		this.removeDependencies('panels', ['ld','rd','td','bd'], panel)
	}	

	//	delete sliders
	var vsliderInf = this.getDrivingSlider('vsliders', ['ld', 'rd'], panel )
	if( vsliderInf ){
		//	determine how many panels this slider manages		
		var neighbour = this.getSlidersDriven('vsliders', vsliderInf, panel)
		
		//	if only one, then we can delete the slider
		if( neighbour.length === 1){					
			var slider = this.layoutElements.vsliders[vsliderInf].dom;
			slider.parentNode.removeChild( slider );
			delete this.layoutElements['vsliders'][vsliderInf];

			//	delete object property		
			delete this.layoutObject.vsliders[vsliderInf];			
		}		
		// this.removeDependencies('vsliders', ['ld', 'rd'], panel)
	}

	var hsliderInf = this.getDrivingSlider('hsliders', ['ud', 'bd'], panel )
	if( hsliderInf ){
		var neighbour = this.getSlidersDriven('hsliders', hsliderInf, panel)
		
		if( neighbour.length === 1){
			//	delete slider dom element
			var slider = this.layoutElements.hsliders[hsliderInf].dom;
			slider.parentNode.removeChild( slider );

			//	delete dom object
			delete this.layoutElements['hsliders'][hsliderInf];

			//	delete object property		
			delete this.layoutObject.hsliders[hsliderInf]
		}
		// this.removeDependencies('hsliders', ['ud', 'bd'], panel)
	}
	this.updateSliderConnections('hsliders');
	this.updateSliderConnections('vsliders');

	
	console.log('new layoutElements', this.layoutElements)
	console.log('new layoutObject', this.layoutObject)
	this.update(true)	
}

MMUI.PanelLayout.prototype.getNextAvailablePanelName = function(){
	// console.log('getNextAvailablePanelName')
	
	var i, name;
	for( i = 0; i < 100; i++){
		//	get the first available name
		if(! this.layoutObject.panels.hasOwnProperty(this.panelName+i)){
			name = this.panelName+i;
			break;
		}
	}
	// console.log('\tresult', name)
	return name;
}

MMUI.PanelLayout.prototype.createSliderObjectBetween = function(name, dir, panels){
	//	creates a dir ( h or v ) slider between the given object panels

	console.log('createSliderObjectBetween', name, dir, panels)

	//	add new slider object
	var ncsObject;
	switch(dir){
		case "h": 
			if(!this.layoutObject.hasOwnProperty('hsliders')){
				this.layoutObject['hsliders']={};
			}
			this.layoutObject['hsliders'][name] = {}; 
			ncsObject = this.layoutObject['hsliders'][name];
		break;

		case "v": 
			if(!this.layoutObject.hasOwnProperty('vsliders')){
				this.layoutObject['vsliders']={};
			}
			this.layoutObject['vsliders'][name] = {}; 
			ncsObject = this.layoutObject['vsliders'][name];
		break;
	}
	console.log('\tobj', ncsObject)

	//	define the new slider dimensions
	var i, j;
	var thisPanel, subPanel;
	ncsObject['h'] = [];
	ncsObject['w'] = [];
	ncsObject['td'] = [];
	ncsObject['bd'] = [];
	ncsObject['ld'] = [];
	ncsObject['rd'] = [];
	var minMaxW = [1000,0];
	var minMaxH = [1000,0];
	for( i = 0; i < panels.length; i++){
		thisPanel = this.layoutObject.panels[panels[i]]

		// Array.prototype.push.apply(ncsObject.td, thisPanel.td)
		// Array.prototype.push.apply(ncsObject.bd, thisPanel.bd)
		// Array.prototype.push.apply(ncsObject.ld, thisPanel.ld)
		// Array.prototype.push.apply(ncsObject.rd, thisPanel.rd)	
		
		minMaxW[0] = Math.min( minMaxW[0], thisPanel.w[0]);
		minMaxW[1] = Math.max( minMaxW[1], thisPanel.w[1]);

		minMaxH[0] = Math.min( minMaxH[0], thisPanel.h[0]);
		minMaxH[1] = Math.max( minMaxH[1], thisPanel.h[1]);		
	}
	// console.log('\tpanels', panels)

	switch(dir){
		case "h": 
		//	width
			ncsObject.w[0] = minMaxW[0];
			ncsObject.w[1] = minMaxW[1];

		//	height
			ncsObject.h[0] = minMaxH[0];
			for( i = 0; i < panels.length; i++){
				thisPanel = this.layoutObject.panels[panels[i]]
				if( thisPanel.h[0] !== minMaxH[0] 
				&& thisPanel.h[0] !== minMaxH[1]){
					ncsObject.h[1] = thisPanel.h[0];
					break;
				}
			}
			ncsObject.td = [panels[1]]
			ncsObject.bd = [panels[0]]
		break;
		
		case "v": 
		//	height
			ncsObject.h[0] = minMaxH[0];
			ncsObject.h[1] = minMaxH[1];
			// console.log('\tminMaxH', minMaxH)

		//	width
			ncsObject.w[1] = minMaxW[1];
			for( i = 0; i < panels.length; i++){
				thisPanel = this.layoutObject.panels[panels[i]]
				if( thisPanel.w[0] !== minMaxW[0] 
				&& thisPanel.w[0] !== minMaxW[1]){
					ncsObject.w[0] = thisPanel.w[0];
					break;
				}
			}
			// console.log('\tpanels', panels)
			ncsObject.ld = [panels[0]]
			ncsObject.rd = [panels[1]]
		break;
	}
	console.log('\t', ncsObject)
}

MMUI.PanelLayout.prototype.createPanel = function( panel, dir){
	console.log('MMUI.PanelLayout.createPanel', panel, dir)
	console.log('\t', this.layoutObject)

	this.nPanels = Object.keys(this.layoutObject).length;
	console.log('\tnumber of panels', this.nPanels)

	//	get info about the current panel
	if( ! this.layoutElements['container'].hasOwnProperty(panel )){
		console.log('Unable to find panel with name', panel)
		return
	}

	var cpObject = this.layoutObject['panels'][panel]; 

	//	get the dimensions of the current panel
	//	there are 2 different ways to divide the space of the current panel to make room for the new panel; horizontal or vertical
	var cpwidth = cpObject.w; // current panel
	var cpheight = cpObject.h; 
	var ctd = cpObject.td; 
	var cbd = cpObject.bd; 
	var crd = cpObject.rd; 
	var cld = cpObject.ld; 

	var npwidth, npheight; // new panel
	var ntd, nbd, nrd, nld;
	var npname = this.getNextAvailablePanelName()
	switch( dir ){
		case "h":		
			npwidth = cpwidth;
			
			//	put new panel below existing one
			npheight = [];
			npheight[0] = cpheight[0];
			npheight[1] = ((cpheight[1]-cpheight[0])/2)+cpheight[0];
			cpheight[0] = ((cpheight[1]-cpheight[0])/2)+cpheight[0];
			cpheight[1] = cpheight[1];

			//	copy over the left and right dependencies
			nrd = crd;
			nld = cld;

			//	define the top and bottom dependencies
			nbd = cbd;
			ntd = [panel];			
			ctd = ctd;
			cbd = [npname];

			//	replace dependencies 
			this.replaceDependencies('panels', ['td'], panel, npname)
		break;

		case "v":
			npheight = cpheight

			//	put new panel leg to the existing one
			npwidth = [];
			npwidth[0] = cpwidth[0]
			npwidth[1] = ((cpwidth[1]-cpwidth[0])/2)+cpwidth[0];
			cpwidth[0] = ((cpwidth[1]-cpwidth[0])/2)+cpwidth[0];
			cpwidth[1] = cpwidth[1];

			//	copy over the top and bottom dependencies
			ntd = ctd;
			nbd = cbd;

			nrd = [panel];
			nld = cld;
			cld = [npname];
			crd = crd;

			//	update the dependencies left from us to point to the new one
			//	NOTE: left from us is right for them
			this.replaceDependencies('panels', ['rd'], panel, npname)
		break;

		default:
			console.log('Unsupported panel direction')
		break;
	}
	// console.log('\t--------------')
	// console.log('\tnname', npname)
	// console.log('\tnph', npheight)	
	// console.log('\tnpw', npwidth)	
	// console.log('\tntd', ntd)
	// console.log('\tnbd', nbd)
	// console.log('\tnld', nld)
	// console.log('\tnrd', nrd)
	// console.log('\n')
	// console.log('\tcname', panel)
	// console.log('\tcph', cpheight)
	// console.log('\tcpw', cpwidth)
	// console.log('\tctd', ctd)
	// console.log('\tcbd', cbd)
	// console.log('\tcld', cld)
	// console.log('\tcrd', crd)
	
	//	update existing panel object
	cpObject.h = cpheight;
	cpObject.w = cpwidth;
	cpObject.td = ctd;
	cpObject.bd = cbd;
	cpObject.rd = crd;
	cpObject.ld = cld;

	//	add new panel object
	var npObject = this.layoutObject['panels'][npname]={};
	npObject.h = npheight;
	npObject.w = npwidth;
	npObject.td = ntd;
	npObject.bd = nbd;
	npObject.rd = nrd;
	npObject.ld = nld;
	npObject.v = true;
	npObject.dh = npheight[1] - npheight[0];
	npObject.dw = npwidth[1] - npwidth[0];


	console.log('\tlayoutObject', this.layoutObject)
	console.log('\tlayoutElement', this.layoutElements)

	//	create container
	this.updateContainer(panel)
	this.createContainer(npname)
	this.newPanelName = npname;

	//	create slider object
	this.createSliderObjectBetween(npname, dir, [npname, panel])
	switch( dir ){
		case "h": this.buildHSlider(npname); break;
		case "v": this.buildVSlider(npname); break;
	}
	this.updateSliderConnections('hsliders');
	this.updateSliderConnections('vsliders');
	
	//	send update signal
	this.update(true)
}

MMUI.PanelLayout.prototype.hidePanel = function( panel ){
	console.log('MMUI.PanelLayout.hidePanel', panel)
	
//	CONTAINER	
	//	1. hide panel
	//	2. update connected panels ( to fill in the empty space )
	if( ! this.layoutElements['container'].hasOwnProperty(panel )){
		console.log('Unable to find panel with name', panel)
		return
	}

	var container = this.layoutElements['container'][panel]
	console.log('\tcontainer')
	console.log('\t', container)

	var height = container.dom.offsetHeight + this.sliderThickness;
	var width = container.dom.offsetWidth + this.sliderThickness;
	
	//	hide panel container
	container.dom.style.display = 'none'
	this.layoutObject['panels'][panel].v = false;

	console.log('\theight', height)
	console.log('\twidth', width)

	var containerInfo = this.layoutObject['panels'][panel]
	var i, j, tc, lc;
	
	//	TOP - DOWN
	//	pull top panels down
	//	1. if a panel has more then one top dependency ( that are visible )
	//	then we have to pull the entire panel down.
	//	2. if a panel only has one top dependency ( that is visible )	
	var td = this.getVisibleConnected( 'panels', panel, 'td')//, true)

	for( i = 0, j = td.length; i < j; i++ ){
		console.log('\tupdating height for', td[i])
		tc = this.layoutElements['container'][td[i]].dom		
		if( i !== (j - 1)){			
			tc.style.top = (parseFloat(tc.style.top)+height)+'px';
		}			
		tc.style.bottom = (parseFloat(tc.style.bottom)-height)+'px';	
	}	

	//	LEFT - RIGHT
	//	pull left panels to the right 
	var ld = this.getVisibleConnected('panels', panel, 'ld')//, true)
	for( i = 0, j = ld.length; i < j; i++ ){
		console.log('\tupdating width for', ld[i])
		lc = this.layoutElements['container'][ld[i]].dom	
		lc.style.right = (parseFloat(lc.style.right)-width)+'px';	
	}

// HSLIDER
	//	hide slider
	if( this.layoutElements['hsliders'].hasOwnProperty(panel)){
		var hslider = this.layoutElements['hsliders'][panel]
		console.log('\thiding hslider')
		console.log('\t', hslider)

		//	hide slider
		hslider.dom.style.display = 'none'		
	}
	//	update all other sliders to match with their new position
	var ts;
	for( i = 0, j = td.length; i < j; i++ ){
		if( this.layoutElements['hsliders'].hasOwnProperty(td[i])){
			ts = this.layoutElements['hsliders'][td[i]].dom
			ts.style.top = (parseFloat(ts.style.top)+height)+'px';
		}
	}

//	VSLIDER	
	//	hide slider
	if( this.layoutElements['vsliders'].hasOwnProperty(panel)){
		var vslider = this.layoutElements['vsliders'][panel]
		console.log('\thiding vslider')
		console.log('\t', vslider)

		//	hide slider
		vslider.dom.style.display = 'none'		
	}

//	update the layout object so we can savely resize the layout/window
	this.update();
}

MMUI.PanelLayout.prototype.showPanel = function( panel ){
	console.log('MMUI.PanelLayout.showPanel', panel)

	if( ! this.layoutElements['container'].hasOwnProperty(panel )){
		console.log('Unable to find panel with name', panel)
		return
	}

	var container = this.layoutElements['container'][panel]

	//	show panel container
	container.dom.style.display = 'block'
	this.layoutObject['panels'][panel].v = true;

	var height = container.dom.offsetHeight + this.sliderThickness;
	var width = container.dom.offsetWidth + this.sliderThickness;

	console.log('\theight', height)
	console.log('\twidth', width)
	
	//	TOP - DOWN
	//	pull top panels up
	//	1. if a panel has more then one top dependency ( that are visible )
	//	then we have to pull the entire panel down.
	//	2. if a panel only has one top dependency ( that is visible )
	var containerInfo = this.layoutObject['panels'][panel]
	// var td = this.getNextVisiblePanels( panel, 'td' )
	var td = this.getVisibleConnected('panels', panel, 'td')//, true)
	var i, j, ob, ot, tc;

	for( i = 0, j = td.length; i < j; i++ ){
		console.log('\tupdating', td[i])
		tc = this.layoutElements['container'][td[i]].dom		
		if( i !== (j - 1)){			
			tc.style.top = (parseFloat(tc.style.top)-height)+'px';
		}			
		tc.style.bottom = (parseFloat(tc.style.bottom)+height)+'px';	
	}

	//	LEFT - RIGHT
	//	pull left panels to the right 
	// var ld = this.getNextVisiblePanels( panel, 'ld' )
	var ld = this.getVisibleConnected('panels', panel, 'ld')//, true)
	var lc;
	for( i = 0, j = ld.length; i < j; i++ ){
		console.log('\tupdating width for', ld[i])
		lc = this.layoutElements['container'][ld[i]].dom	
		lc.style.right = (parseFloat(lc.style.right)+width)+'px';	
	}

// HSLIDER
	//	show slider
	if( this.layoutElements['hsliders'].hasOwnProperty(panel)){
		var hslider = this.layoutElements['hsliders'][panel]
		console.log('\thslider')
		console.log('\t', hslider)

		//	hide slider
		hslider.dom.style.display = 'block'
	}
	//	update all other sliders to match with their new position
	var ts;
	for( i = 0, j = td.length; i < j; i++ ){
		if( this.layoutElements['hsliders'].hasOwnProperty(td[i])){
			ts = this.layoutElements['hsliders'][td[i]].dom
			ts.style.top = (parseFloat(ts.style.top)-height)+'px';
		}
	}

//	VSLIDER
	//	show slider
	if( this.layoutElements['vsliders'].hasOwnProperty(panel)){
		var vslider = this.layoutElements['vsliders'][panel]
		console.log('\tshowing vslider')
		console.log('\t', vslider)

		//	show slider
		vslider.dom.style.display = 'block';
	}

//	update the layout object so we can savely resize the layout/window
	this.update();
}

MMUI.PanelLayout.prototype.resize = function(){
	/*
		Adjusts all the necessary elements to match with the new dom size
	*/
	// console.log('MMUI.PanelLayout.resize')
	// console.log('\th before:', this.dom.clientHeight);

	this.getDimensions();
	this.updateContainers();
	this.updateHSliders();
	this.updateVSliders();

	// console.log('\th after:', this.dom.clientHeight);

	return this;
}

MMUI.PanelLayout.prototype.update = function( signalOnly ){
	/*
		Internal update
		Update the spacing information of the different panels within our current dom/space
	*/
	// console.log('PanelLayout.update')
	if( signalOnly === undefined ){
		signalOnly = false;
	}

	if( signalOnly === false ){
		this.updateLayoutObject();
	}
	
	this.editor.signals.layoutResized.dispatch( this.prefix );
}

MMUI.PanelLayout.prototype.updateLayoutObject = function(){
	console.log('updateLayoutObject')

	var container, bottom, top, left, right, topIn, leftIn;
	//	update relative positions

	/*
		WARNING: since we keep on converting values from screen units to percentage we loose quite a bit of precision. This results in panels disconnecting from each other. To avoid this we should really be dealing with screen units all the time instead of converting them all the time. As a patch we're just going to add a loop which will cleanup the rough values by trying to match them. The difference between matching values shouldn't be more then 3 units.
	*/	

//	PANELS UPDATE
	var tempValue = {}
	var space;
	for( space in this.layoutElements['container']){
		tempValue[space] = {h:[], w:[]}

		container = this.layoutElements['container'][space]	
		
		bottom = parseInt((parseFloat(container.dom.style.bottom)/this.totalHeight)*100);		
		
		topIn = parseFloat(container.dom.style.top)		
		if( topIn > 0 ) topIn -= this.sliderThickness;		
		top = parseInt(100 - ((topIn/this.totalHeight)*100));
				
		leftIn = parseFloat(container.dom.style.left)
		if( leftIn > 0 ) leftIn -= this.sliderThickness;		
		left = parseInt((leftIn / this.totalWidth) * 100);
		
		right = parseInt(100-((parseFloat(container.dom.style.right) / this.totalWidth)*100));

		tempValue[space]['h'] = [bottom, top]
		tempValue[space]['w'] = [left, right]
	}

	var dif, ospace;
	for( space in this.layoutElements['container']){
		for( ospace in this.layoutElements['container']){
			if( space === ospace ) continue;

			//	if the right side is different from the left one
			dif = tempValue[space].w[1] - tempValue[ospace].w[0];
			if( dif > 0 && dif < 4){			
				tempValue[ospace].w[0] = tempValue[space].w[1];
			}

			//	if the top side is different from the bottom one
			dif = tempValue[space].h[1] - tempValue[ospace].h[0];
			if( dif > 0 && dif < 4){			
				tempValue[ospace].h[0] = tempValue[space].h[1];
			}
		}
	}

	for( space in this.layoutElements['container']){
		this.layoutObject['panels'][space].h = tempValue[space].h;
		this.layoutObject['panels'][space].w = tempValue[space].w;
	}

//	HSLIDERS update
	var dependency, ths, tvs, tc, i, j;
	var minW, minH, maxW, maxH;	
	for( space in this.layoutObject['hsliders']){
		minW = 1000; minH = 1000; maxW = 0; maxH = 0;	
		//	 look at bottom dependencies to define horizontal position
		ths = this.layoutObject['hsliders'][space]
		for(i = 0, j = ths.bd.length; i < j; i++){
			tc = this.layoutObject['panels'][ths.bd[i]];
			minW = Math.min( minW, tc.w[0]);
			maxW = Math.max( maxW, tc.w[1]);
			minH = tc.h[0];
			maxH = tc.h[1];
		}
		ths.w = [minW, maxW];
		ths.h = [minH, maxH];
	}

//	VSLIDERS update
	for( space in this.layoutObject['vsliders']){
		// console.log('vslider', space)
		minW = 1000; minH = 1000; maxW = 0; maxH = 0;	
		//	 look at bottom dependencies to define horizontal position
		tvs = this.layoutObject['vsliders'][space];
		for(i = 0, j = tvs.rd.length; i < j; i++){
			// console.log('\trd', tvs.rd[i])
			tc = this.layoutObject['panels'][tvs.rd[i]];
			// console.log('\trdp', tc.h)
			minH = Math.min( minH, tc.h[0]);
			maxH = Math.max( maxH, tc.h[1]);
			// console.log('\t', minH, maxH)
			minW = tc.w[0];
			maxW = tc.w[1];
		}
		tvs.w = [minW, maxW];
		tvs.h = [minH, maxH];
		// console.log('\th', minH, maxH)
	}

	// console.log('\tresult',this.layoutObject)
}

MMUI.PanelLayout.prototype.setPrefix = function( prefix ){
	/*
	NOTE: this is to ensure we create ui elements with unique id's
	every time we create a new instance of this object we have to 
	define a new, unique id!
	*/
	this.prefix = prefix;
	return this;
}

MMUI.PanelLayout.prototype.setLayout = function( layoutObject ){
	// console.log('PanelLayout.setLayout', layoutObject)

	this.layoutObject = layoutObject
	return this
}

MMUI.PanelLayout.prototype.getRandomColor = function() {
	// console.log('MMUI.PanelLayout', 'getRandomColor')

    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

MMUI.PanelLayout.prototype.getPixelPosition = function( uiElement , inOrOut ){
	// console.log('getPixelPosition', uiElement, inOrOut)
	var value = this.layoutObject[uiElement[0]][uiElement[1]][uiElement[2]][inOrOut];
	// console.log('\tvalue', value)

	value /= 100

	if(this.totalWidth === 0 )
		this.getDimensions();

	if( uiElement[2] === 'h'){
		value *= this.totalHeight;
		if( inOrOut === 1){
			value = this.totalHeight - value;
		}
	}else{
		value *= this.totalWidth;
		if( inOrOut === 1){
			value = this.totalWidth - value;
		}
	}	
	// console.log('\tresult', value)
	return value;
}

MMUI.PanelLayout.prototype.getDimensions = function(){
	// console.log('MMUI PanelLayout: getDimensions')
	this.totalHeight = this.dom.clientHeight;
	this.totalWidth = this.dom.clientWidth;
	// console.log('\tresult', this.totalHeight, this.totalWidth)
}

MMUI.PanelLayout.prototype.showSlider = function() {
    "use strict";
    return function () {
        this.style.backgroundColor = '#00a989'
    };
}

MMUI.PanelLayout.prototype.hideSlider = function() {
    "use strict";
    return function () {
        this.style.backgroundColor = ''
    };
}

MMUI.PanelLayout.prototype.moveVSlider = function( space, uiElements, container){
	var scope = this;
	return function(){			
		console.log('moveVSlider', space, uiElements, container)
		var onMouseMove = function( event ){
			var movementX = event.movementX | event.webkitMovementX | event.mozMovementX | 0;

			var slider = uiElements['vsliders'][space].dom
			var curPosition = parseFloat(slider.style.left)	
			slider.style.left = curPosition + movementX + 'px'

		//	update dependent containers and sliders
			var i, j;
			
			//	right containers
			var rd = scope.getVisibleConnected('vsliders', space, 'rd')//, scope.canHidePanels)
			// console.log('\trd', rd)
			for( i = 0, j = rd.length; i < j; i++){
				var rc = scope.layoutElements['container'][rd[i]].dom;
				rc.style.left = parseFloat(rc.style.left)+movementX+'px';
			}

			//	right sliders
			var rds = scope.getConnectedSliders(rd, 'hsliders')
			// console.log('\trds', rds)
			for( i = 0, j = rds.length; i < j; i++){
				var rs = scope.layoutElements['hsliders'][rds[i]].dom;
				rs.style.left = parseFloat(rs.style.left)+movementX+'px';
			}

			//	left containers
			var ld = scope.getVisibleConnected('vsliders', space, 'ld')//, scope.canHidePanels)
			// console.log('\tld', ld)
			for( i = 0, j = ld.length; i < j; i++){
				var lc = scope.layoutElements['container'][ld[i]].dom;
				lc.style.right = parseFloat(lc.style.right)-movementX+'px';
			}

			//	left sliders
			var lds = scope.getConnectedSliders(ld, 'hsliders')
			// console.log('\tlds', lds)
			for( i = 0, j = lds.length; i < j; i++){
				var ls = scope.layoutElements['hsliders'][lds[i]].dom;
				ls.style.right = parseFloat(ls.style.right)-movementX+'px';
			}

			scope.update();
		}
		var onMouseUp = function( event ){
			document.removeEventListener( 'mousemove', onMouseMove );
			document.removeEventListener( 'mouseup', onMouseUp );	
		}
		document.addEventListener( 'mousemove', onMouseMove, false );
		document.addEventListener( 'mouseup', onMouseUp, false );
	}	
}

MMUI.PanelLayout.prototype.getPanel = function( panelName ){
	// console.log('MMUI.PanelLayout.getPanel', panelName)
	if( this.layoutElements.hasOwnProperty('container')){
		if( this.layoutElements['container'].hasOwnProperty(panelName)){
			return this.layoutElements['container'][panelName]
		}
	}	
}

var getElementInfo = function( referenceAsString ){
	// console.log('getElementInfo', referenceAsString)
	/*
	return the proper path within the uiElements objects
	example: vslider-workspace becomes vslider and workspace while 
	workspace becomes container workspace. This is here to ensure a HSlider can influence a VSlider and vice versa.
	*/
	var result = []
	if( referenceAsString.indexOf('slider') > -1){
		result = [referenceAsString.split('-')[0], referenceAsString.split('-')[1]]
	}else{
		result.push('container')
		result.push(referenceAsString)
	}
	// console.log('\tresult', result)
	return result;
}

MMUI.PanelLayout.prototype.moveHSlider = function( space, uiElements, container){

	var scope = this;

	return function(){	
		// console.log('moveHSlider', space, uiElements, container)

		var onMouseMove = function( event ){
			var movementY = event.movementY | event.webkitMovementY | event.mozMovementY | 0;
			// console.log('\tmovementY', movementY)

		//	move h slider
			var slider = uiElements['hsliders'][space].dom
			var curPosition = parseFloat(slider.style.top)

			slider.style.top = curPosition + movementY + 'px'			

		//	update dependent containers	
			var i, j;

			//	everything below
			var bd = scope.getVisibleConnected('hsliders', space, 'bd')//, scope.canHidePanels)
			for( i = 0, j = bd.length; i < j; i++){
				var bc = scope.layoutElements['container'][bd[i]].dom;
				bc.style.top = parseFloat(bc.style.top)+movementY+'px';	
			}

			//	everything above 
			var td = scope.getVisibleConnected('hsliders', space, 'td')//, scope.canHidePanels)
			for( i = 0, j = td.length; i < j; i++){
				// console.log('\tupdate dependency', td[0])
				var tc = scope.layoutElements['container'][td[i]].dom;
				tc.style.bottom = parseFloat(tc.style.bottom)-movementY+'px'
			}

			scope.update();
		}
		var onMouseUp = function( event ){
			document.removeEventListener( 'mousemove', onMouseMove );
			document.removeEventListener( 'mouseup', onMouseUp );	
		}
		document.addEventListener( 'mousemove', onMouseMove, false );
		document.addEventListener( 'mouseup', onMouseUp, false );		
	}
}

MMUI.PanelLayout.prototype.panelCount = function(){
	return Object.keys(this.layoutElements['container']).length;	
}

MMUI.PanelLayout.prototype.createContainer = function( panel ){
	//	creates the container for the given panel

	//	make sure we haven't already created the panel
	if( this.layoutElements['container'].hasOwnProperty(panel) ){
		console.log('PanelLayout already has an element named', panel)
		return;
	}
	var top, left;
	var container=new MMUI.Panel()
	container.dom.id=this.prefix+ _.str.classify(panel)+'Container'
	container.setPosition('absolute')
	container.dom.style.bottom=this.getPixelPosition(['panels',panel,'h'],0)+'px'
	
	top = this.getPixelPosition(['panels', panel, 'h'], 1);
	if( top > 0 ) top += this.sliderThickness;
	container.dom.style.top = top+'px'	
	
	left = this.getPixelPosition(['panels', panel, 'w'], 0);
	if( left > 0) left += this.sliderThickness;
	container.dom.style.left = left+"px"
	container.dom.style.right = this.getPixelPosition(['panels', panel, 'w'], 1)+"px"
	
	if( this.applyRandomColor ){
		container.setBackgroundColor(this.getRandomColor())
	}
	if( this.setPanelClass !== undefined ){
		container.setClass(this.setPanelClass+' '+this.setPanelClass+'-'+panel)
	}

	this.dom.appendChild( container.dom )
	
	this.layoutElements['container'][panel] = container;
}

MMUI.PanelLayout.prototype.buildContainers = function(){
	// console.log('buildContainers')
	// console.log('\tpanels', this.layoutObject['panels'])

	this.layoutElements['container'] = {}
	
	var space;
	for( space in this.layoutObject['panels'] ){
		// console.log('\tsetting up', space, 'container')
		this.createContainer(space)
	}
}

MMUI.PanelLayout.prototype.updateContainer = function( panel ){
	//	update the dimensions of the given panel by converting the object panel layout values from percent to screen space
	var container = this.layoutElements['container'][panel].dom.style

	//	bottom
	container.bottom=this.getPixelPosition(['panels',panel,'h'],0)+'px'
	var top = this.getPixelPosition(['panels', panel, 'h'], 1);
	if( top > 0 ) top += this.sliderThickness;
	container.top = top+'px'	
	
	var left = this.getPixelPosition(['panels', panel, 'w'], 0);
	if( left > 0) left += this.sliderThickness;
	container.left = left+"px"
	container.right = this.getPixelPosition(['panels', panel, 'w'], 1)+"px"	
}

MMUI.PanelLayout.prototype.updateContainers = function(){
	var space;
	for( space in this.layoutElements['container'] ){
		this.updateContainer(space)
	}	
}

MMUI.PanelLayout.prototype.buildHSlider = function( space ){
	// console.log('buildHSlider', space)

	var sep = new MMUI.Panel()
	sep.dom.id = this.prefix+_.str.classify(space)+'HSlider'
	sep.setPosition('absolute').setHeight(this.sliderThickness+'px')
	sep.setTop(this.getPixelPosition(['hsliders', space, 'h'], 1)+'px')	
	sep.setLeft((this.getPixelPosition(['hsliders', space, 'w'], 0)+"px"))
	sep.setRight(this.getPixelPosition(['hsliders', space, 'w'], 1)+'px')	
	sep.dom.style.zIndex = '10'
	this.dom.appendChild( sep.dom )

	sep.dom.addEventListener( 'mouseenter', this.showSlider());
	sep.dom.addEventListener( 'mouseout', this.hideSlider());
	sep.dom.addEventListener( 'mousedown', this.moveHSlider( space, this.layoutElements, this.dom));	
	
	this.layoutElements['hsliders'][space] = sep;	
	this.layoutElements['hsliders'][space]['td'] = this.layoutObject['hsliders'][space]['td']
	this.layoutElements['hsliders'][space]['bd'] = this.layoutObject['hsliders'][space]['bd']
}

MMUI.PanelLayout.prototype.buildHSliders = function(){
	// var sep;
	this.layoutElements['hsliders'] = {}
	var space;
	for( space in this.layoutObject['hsliders'] ){
		// console.log('\tsetting up', space, 'hslider')
		this.buildHSlider( space )
	}	
}

MMUI.PanelLayout.prototype.updateHSliders = function(){
	var sep, space;
	for( space in this.layoutElements['hsliders'] ){
		sep = this.layoutElements['hsliders'][space]
		sep.setTop(this.getPixelPosition(['hsliders', space, 'h'], 1)+'px')	
		sep.setLeft((this.getPixelPosition(['hsliders', space, 'w'], 0)+"px"))
		sep.setRight(this.getPixelPosition(['hsliders', space, 'w'], 1)+'px')
	}
}

MMUI.PanelLayout.prototype.buildVSlider = function( space ){
	// console.log('PanelLayout.buildVSlider', space)

	var sep = new MMUI.Panel();
	sep.dom.id = this.prefix+_.str.classify(space)+'VSlider';
	sep.setPosition('absolute').setWidth(this.sliderThickness+'px');
	sep.setBottom(this.getPixelPosition(['vsliders', space, 'h'], 0)+'px');
	sep.setTop(this.getPixelPosition(['vsliders', space, 'h'], 1)+'px');
	sep.setLeft((this.getPixelPosition(['vsliders', space, 'w'], 0)+"px"));

	sep.dom.style.zIndex = '10';
	this.dom.appendChild( sep.dom );

	sep.dom.addEventListener( 'mouseenter', this.showSlider());
	sep.dom.addEventListener( 'mouseout', this.hideSlider());
	sep.dom.addEventListener( 'mousedown', this.moveVSlider( space, this.layoutElements, this.dom));

	this.layoutElements['vsliders'][space] = sep;	
	this.layoutElements['vsliders'][space]['ld'] = this.layoutObject['vsliders'][space]['ld'];
	this.layoutElements['vsliders'][space]['rd'] = this.layoutObject['vsliders'][space]['rd'];		

	// console.log('\tresult', sep)
}

MMUI.PanelLayout.prototype.buildVSliders = function(){
	this.layoutElements['vsliders'] = {};
	var space;
	for( space in this.layoutObject['vsliders'] ){
		// console.log('\tsetting up', space, 'vslider')
		this.buildVSlider(space);	
	}
}

MMUI.PanelLayout.prototype.updateVSliders = function(){
	// console.log('-> updateVSliders')
	var sep, space;
	for( space in this.layoutElements['vsliders'] ){
		sep = this.layoutElements['vsliders'][space]
		sep.setBottom(this.getPixelPosition(['vsliders', space, 'h'], 0) +'px')
		sep.setTop(this.getPixelPosition(['vsliders', space, 'h'], 1) +'px')
		sep.setLeft((this.getPixelPosition(['vsliders', space, 'w'], 0) +"px"))
	}	
}

MMUI.PanelLayout.prototype.init = function(){
	//	build layout elements from the layout object
	//	NOTE: the layout is a simple structure which represent the panel hierarchy

	// console.log('MMUI PanelLayout: init')
	// console.log('\th before:', this.dom.clientHeight);

	this.buildContainers();
	this.buildHSliders();
	this.buildVSliders();

	// console.log('\th after:', this.dom.clientHeight);
	// console.log('\tresult', this.layoutElements)
}

var pl_events = [ 'Resizelayout'];
pl_events.forEach( function ( event ) {
    var method = 'on' + event;
    MMUI.PanelLayout.prototype[ method ] = function ( callback ) {
        this.dom.addEventListener( event.toLowerCase(), callback, false );
        return this;
    };
});
