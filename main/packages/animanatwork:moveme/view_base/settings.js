MM.SettingsWindow = function( editor ){
	
	MMUI.Element.call( this )

	var scope = this;
	this.editor = editor;

	var dom = document.createElement('div')
	dom.className = 'modal'
	this.dom = dom;

	var dialog = document.createElement('div')
	dialog.className = "modal-dialog"
	dom.appendChild( dialog )

	var content = document.createElement('div')
	content.className = "modal-content"
	dialog.appendChild( content )

//	HEADER
	var header = document.createElement('div')
	header.className = "modal-header"
	content.appendChild( header )

	var hbutton = document.createElement('button')
	hbutton.setAttribute('type', 'button')
	hbutton.className = "close"
	hbutton.setAttribute('data-dismiss', "modal")
	hbutton.setAttribute('aria-label', "Close")
	header.appendChild(hbutton)

	hbutton.onclick = function(){		
		scope.hide();
	}	

	var hspan = document.createElement('span')
	hspan.setAttribute('aria-hidden', 'true')
	hspan.innerHTML = "x"
	hbutton.appendChild(hspan)

	var hh4 = document.createElement('h4')
	hh4.className = "modal-title"
	hh4.innerHTML = 'Default Settings'
	header.appendChild(hh4)

//	BODY
	var body = document.createElement('div')
	body.className = "modal-body"
	content.appendChild(body)
	this.body = body;

	this.viewportSettings();

	var hr = document.createElement('hr')
	this.body.appendChild(hr)

	this.animationSettings();

//	FOOTER
	var footer = document.createElement('div')
	footer.className = "modal-footer"
	content.appendChild(footer)

	var footerba = document.createElement('button')
	footerba.className="btn btn-default"
	footerba.setAttribute('data-dismiss', 'modal')
	footerba.setAttribute('type', 'button')
	footerba.innerHTML = 'Close'
	footer.appendChild(footerba)

	footerba.onclick = function(){		
		scope.hide();
	}	
	
	var footerbb = document.createElement('button')
	footerbb.className="btn btn-default"	
	footerbb.setAttribute('type', 'button')
	footerbb.innerHTML = 'Save Settings and Close'
	footer.appendChild(footerbb)	

	footerbb.onclick = function(){		
		scope.editor.saveSceneSettings();
		scope.hide();
	}	

	this.hide();

	return this;
}

MM.SettingsWindow.prototype = Object.create( MMUI.Element.prototype );

MM.SettingsWindow.prototype.hide = function(){
	this.dom.style.display = 'none';
	return this;
}

MM.SettingsWindow.prototype.show = function(){
	var scope = this;

	this.dom.style.display = 'block';
	
//	workspace	
	//	scene color
	this.sceneColor.setHexValue(this.editor.sceneBackgroundColor.getHex())
	this.sceneColor.onChange(function(){
		scope.editor.sceneBackgroundColor.setHex(scope.sceneColor.getHexValue())
	})

	//	key color
	this.keyColor.setHexValue(this.editor.keyBackgroundColor.getHex())
	this.keyColor.onChange(function(){
		scope.editor.keyBackgroundColor.setHex(scope.keyColor.getHexValue())
	})

//	animation	
	this.iTanSelect.setValue(this.editor.defaultTangentType)
	this.iTanSelect.onChange(function(){
		scope.editor.defaultTangentType = parseInt(scope.iTanSelect.getValue());
	})

	return this;
}

MM.SettingsWindow.prototype.viewportSettings = function(){

	var viewportContent = new MMUI.Panel().setClass('modal-section');
	this.body.appendChild(viewportContent.dom)

	var viewportTitle = new MMUI.Text('Workspace').setClass('modal-section-title').setClass('modal-section-title')
	viewportContent.add(viewportTitle)

	// //	change default panel layout 
	// var layoutContent = new MMUI.Panel().setClass('modal-section-content'); 
	// viewportContent.add(layoutContent)

	// var layoutText = new MMUI.Text('Panel Layout').setClass('modal-section-text')
	// layoutContent.add(layoutText)

	// var layoutSelect = new MMUI.Select().setOptions({
	// 	  '0':'single panel' 
	// 	, '1':'2 panels horizontal split'
	// 	, '2':'2 panels vertical split'
	// }).setClass('modal-section-input')
	// layoutContent.add(layoutSelect)

	// //	change default panel 0 content
	// var panel0Content = new MMUI.Panel().setClass('modal-section-content');
	// viewportContent.add(panel0Content)

	// var panel0Text = new MMUI.Text('Panel 0 Content').setClass('modal-section-text')
	// panel0Content.add(panel0Text)

	// var panel0Select = new MMUI.Select().setOptions({
	// 	   '0':'key view' 
	// 	  ,'1':'scene view' 
	// }).setClass('modal-section-input')
	// panel0Content.add(panel0Select)	

	// //	change default panel 1 content
	// var panel1Content = new MMUI.Panel().setClass('modal-section-content'); 
	// viewportContent.add(panel1Content)

	// var panel1Text = new MMUI.Text('Panel 1 Content').setClass('modal-section-text')
	// panel1Content.add(panel1Text)

	// var panel1Select = new MMUI.Select().setOptions({
	// 	   '0':'key view' 
	// 	  ,'1':'scene view' 
	// }).setClass('modal-section-input')
	// panel1Content.add(panel1Select)	

	//	change default scene view color
	var colorContent = new MMUI.Panel().setClass('modal-section-content');
	viewportContent.add(colorContent)

	var colorText = new MMUI.Text('Scene View Color').setClass('modal-section-text')
	colorContent.add(colorText)

	var colorInput = new MMUI.Color().setClass('modal-section-input')
	colorContent.add(colorInput);
	this.sceneColor = colorInput;

	//	change default key view color
	var colorContent = new MMUI.Panel().setClass('modal-section-content');
	viewportContent.add(colorContent)

	var colorText = new MMUI.Text('Key View Color').setClass('modal-section-text')
	colorContent.add(colorText)

	var colorInput = new MMUI.Color().setClass('modal-section-input')
	colorContent.add(colorInput);
	this.keyColor = colorInput;	

	return this;
}

MM.SettingsWindow.prototype.animationSettings = function(){
	var animationContent = new MMUI.Panel().setClass('modal-section');
	this.body.appendChild(animationContent.dom)

	var animationTitle = new MMUI.Text('Animation').setClass('modal-section-title')
	animationContent.add(animationTitle)

	// //	change frames per second
	// var fpsContent = new MMUI.Panel().setClass('modal-section-content'); ;
	// animationContent.add(fpsContent)

	// var fpsText = new MMUI.Text('Frames per Second').setClass('modal-section-text')
	// fpsContent.add(fpsText)

	// var fpsSelect = new MMUI.Select().setOptions({
	// 	'24':'24', '25':'25', '30':'30', '60':'60'}).setClass('modal-section-input')
	// fpsContent.add(fpsSelect)

	//	change default tangent type
	//	in
	var iTanContent = new MMUI.Panel().setClass('modal-section-content'); ;
	animationContent.add(iTanContent)

	var iTanText = new MMUI.Text('Default Key Interpolation').setClass('modal-section-text')
	iTanContent.add(iTanText)

	var iTanSelect = new MMUI.Select().setOptions({
		'0':'Stepped', '1':'Linear', '2':'Smooth'}).setClass('modal-section-input')
	iTanContent.add(iTanSelect)
	this.iTanSelect = iTanSelect;

	// //	out
	// var oTanContent = new MMUI.Panel().setClass('modal-section-content'); ;
	// animationContent.add(oTanContent)

	// var oTanText = new MMUI.Text('Default Ingoing Tangent').setClass('modal-section-text')
	// oTanContent.add(oTanText)

	// var oTanSelect = new MMUI.Select().setOptions({
	// 	'0':'Stepped', '1':'Linear', '2':'Smooth'}).setClass('modal-section-input')
	// oTanContent.add(oTanSelect)
	// this.oTanSelect = oTanSelect;

	return this;
}

