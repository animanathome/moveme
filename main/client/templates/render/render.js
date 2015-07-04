// moveme = {};

Template.render.rendered = function(){ 
	console.log('render.rendered')

	var mmElement = this.find("#movemerender")

	moveme = new MM.App(mmElement, {
		isRenderer: true
	});

//	get the associated file version
	var file = FileList.findOne(this.data.versions[0].fileId)
    if( file === undefined ){
      console.log('No file found. Nothing to load...')
      return;
    }

    // console.log('\tfile url', file.url())
    var absUrl = Meteor.absoluteUrl(file.url());
    // console.log('\tabs url', absUrl)

    // var newUrl = 'http://192.168.1.69:3000'+file.url()
    // var newUrl = 'http://108.180.115.126:3000'+file.url()
    // console.log('\tnew url', newUrl)

//	load the data once loaded
	var xhr;
	if(window.XMLHttpRequest) {
	    xhr = new XMLHttpRequest();
	}else if(window.ActiveXObject) {
	    xhr = new ActiveXObject("Microsoft.XMLHTTP");
	}
	xhr.onload = function(){
		//	load scene file
		var data = JSON.parse(xhr.responseText)
		moveme.editor.loader.loadAsJSON(data)		
	}
	xhr.open("GET", absUrl);
	// xhr.open("GET", newUrl);
	xhr.send();

	var overlay = document.createElement('div')
	overlay.className = 'render-banner-overlay'
	overlay.style.position = 'absolute'
	overlay.style.right = '5px'
	overlay.style.bottom = '5px'
	overlay.style.width = '300px'
	overlay.style.height = '50px'

	var logo = document.createElement('img')
	logo.src = '/ui/brand_small_io.png'
	overlay.appendChild(logo)

	mmElement.appendChild(overlay)
}