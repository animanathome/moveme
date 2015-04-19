MM.Projectbar = function( editor, parent ){
	// console.log('Projectbar', editor, parent)
	this.data = {};

	var container = new MMUI.Panel();
	this.dom = container.dom;
	container.setClass( 'projectbar')
	parent.appendChild( container.dom );

	return this;
}

MM.Projectbar.prototype.setSceneData = function( sceneData ){
	console.log('setSceneData', sceneData)
	this.data = sceneData;

	this.sceneUI();
}

MM.Projectbar.prototype.sceneUI = function(){
	
	var ol = document.createElement('ol')	
	ol.className='breadcrumb anim'
	this.dom.appendChild(ol)

	//  projects
	var psl = document.createElement('li')
	var psa = document.createElement('a')
	psa.href = this.data.projectsUrl
	psa.textContent = 'Projects'

	psl.appendChild(psa)
	ol.appendChild(psl)

	//  project
	var pl = document.createElement('li')
	var pa = document.createElement('a')
	pa.href = this.data.projectUrl
	pa.textContent = this.data.projectTitle

	pl.appendChild(pa)
	ol.appendChild(pl)

	//  shot
	var sl = document.createElement('li')
	sl.className = "active"
	var sa = document.createElement('a')
	sa.href = this.data.shotUrl
	sa.textContent = this.data.shotTitle

	sl.appendChild(sa)
	ol.appendChild(sl)
}

MM.Projectbar.prototype.setAssetData = function(assetData){
	console.log('setAssetData', assetData)
	this.data = assetData;

	this.assetUI();
}

MM.Projectbar.prototype.assetUI = function(){
	var ol = document.createElement('ol')	
	ol.className='breadcrumb anim'
	this.dom.appendChild(ol)

	//  projects
	var psl = document.createElement('li')
	var psa = document.createElement('a')
	psa.href = this.data.assetUrl;
	psa.textContent = 'Assets'

	psl.appendChild(psa)
	ol.appendChild(psl)

	//  asset
	var pl = document.createElement('li')
	var pa = document.createElement('a')	
	pa.textContent = this.data.assetTitle

	pl.appendChild(pa)
	ol.appendChild(pl)	
}

MM.Projectbar.prototype.setTryData = function(){
	var ol = document.createElement('ol')	
	ol.className='breadcrumb anim'
	this.dom.appendChild(ol)

	//  projects
	var psl = document.createElement('li')
	var psa = document.createElement('a')
	psa.textContent = 'Demo Session - please login to enable saving.'

	psl.appendChild(psa)
	ol.appendChild(psl)
}