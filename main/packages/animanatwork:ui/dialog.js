MMUI.Dialog = function( title, placeholder, button){
	MMUI.Element.call( this )

	var scope = this;

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
	hh4.innerHTML = title
	header.appendChild(hh4)

//	BODY
	var body = document.createElement('div')
	body.className = "modal-body"
	content.appendChild(body)

	var bodyp = document.createElement('textarea')
	bodyp.className = 'form-control'
	bodyp.setAttribute('rows',"5");
	bodyp.setAttribute('id',"message-text");
	bodyp.setAttribute('placeholder',placeholder);
	body.appendChild( bodyp )
	this.body = bodyp;

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
	// footerbb.setAttribute('data-dismiss', 'modal')
	footerbb.setAttribute('type', 'button')
	footerbb.innerHTML = button
	footer.appendChild(footerbb)	

	footerbb.onclick = function(){
		scope.onAction();
	}

	return this;
}

MMUI.Dialog.prototype = Object.create( MMUI.Element.prototype );

MMUI.Dialog.prototype.hide = function(){
	this.dom.style.display = 'none';
	return this;
}

MMUI.Dialog.prototype.show = function(){
	this.dom.style.display = 'block';
	return this;
}

MMUI.Dialog.prototype.getValue = function(){
	return this.body.value;
}

MMUI.Dialog.prototype.onAction = function( ){
	return this;
}

MMUI.Dialog.prototype.deleteUI = function(){
	this.dom.parentNode.removeChild( this.dom )
}

MMUI.VideoDialog = function( videoTitle, videoId, buttonLabel, options){
	MMUI.Element.call( this )

	var scope = this;

	var dom = document.createElement('div')
	dom.className = "video"
	// dom.className = 'modal'
	this.dom = dom;

//	BODY
	var videoBody = document.createElement('div')
	videoBody.className = "embed-responsive embed-responsive-16by9";
	dom.appendChild(videoBody)
	
	var iframe = document.createElement('iframe');
	iframe.className = "embed-responsive-item";
// 	iframe.setAttribute('id','player');
// 	iframe.setAttribute('type','text/html');
// 	iframe.style.border = '0px'
// 	iframe.width = panelItem.dom.offsetWidth;
// 	iframe.height = panelItem.dom.offsetHeight;

	var srcs = 'https://www.youtube.com/embed/'+videoId+'?'
	srcs += 'loop=1&playlist='+videoId
	srcs += '&autoplay=1'
	srcs += '&fs=0'
	srcs += '&showinfo=0'
	srcs += '&enablejsapi=1'
	srcs += '&modestbranding'
	srcs += '&controls=0'
	iframe.src = srcs;	
	videoBody.appendChild(iframe)

	var banner = document.createElement('div')
	banner.className = 'video-banner-content'
	videoBody.appendChild( banner )

	var title = document.createElement('span')
	title.className = 'video-banner-title'
	title.textContent = videoTitle;
	banner.appendChild( title )

	var hbutton = document.createElement('button')
	hbutton.setAttribute('type', 'button')
	hbutton.className = "close"
	hbutton.setAttribute('data-dismiss', "modal")
	hbutton.setAttribute('aria-label', "Close")
	hbutton.onclick = function(){
		scope.deleteUI();
	}
	banner.appendChild(hbutton)

	var hspan = document.createElement('span')
	hspan.setAttribute('aria-hidden', 'true')
	hspan.style.padding = "5px";
	hspan.innerHTML = "x";
	hbutton.appendChild(hspan)

	return this;
}

MMUI.VideoDialog.prototype = Object.create( MMUI.Element.prototype );

MMUI.VideoDialog.prototype.deleteUI = function(){
	this.dom.parentNode.removeChild( this.dom )
}

MMUI.MessageDialog = function( title, textMessage){
	var scope = this;

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
	this.header = header

	var hbutton = document.createElement('button')
	hbutton.setAttribute('type', 'button')
	hbutton.className = "close"
	hbutton.setAttribute('data-dismiss', "modal")
	hbutton.setAttribute('aria-label', "Close")
	header.appendChild(hbutton)

	hbutton.onclick = function(){	
		
		dom.parentNode.removeChild( dom )
	}

	var hspan = document.createElement('span')
	hspan.setAttribute('aria-hidden', 'true')
	hspan.innerHTML = "x"
	hbutton.appendChild(hspan)

	var hh4 = document.createElement('h4')
	hh4.className = "modal-title"
	hh4.innerHTML = title
	header.appendChild(hh4)

//	BODY
	var body = document.createElement('div')
	body.className = "modal-body"
	body.textContent = textMessage;
	content.appendChild(body)

//	FOOTER
	var footer = document.createElement('div')
	footer.className = "modal-footer"
	content.appendChild(footer)

	var footerba = document.createElement('button')
	footerba.className="btn btn-default"
	footerba.setAttribute('data-dismiss', 'modal')
	footerba.setAttribute('type', 'button')
	footerba.innerHTML = 'OK'
	footer.appendChild(footerba)
	
	footerba.onclick = function(){
		dom.parentNode.removeChild( dom )
	}
	return this;
}

MMUI.ItemDialog = function( title ){
	var scope = this;

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
	this.header = header

	var hbutton = document.createElement('button')
	hbutton.setAttribute('type', 'button')
	hbutton.className = "close"
	hbutton.setAttribute('data-dismiss', "modal")
	hbutton.setAttribute('aria-label', "Close")
	header.appendChild(hbutton)

	hbutton.onclick = function(){	
		
		dom.parentNode.removeChild( dom )
	}

	var hspan = document.createElement('span')
	hspan.setAttribute('aria-hidden', 'true')
	hspan.innerHTML = "x"
	hbutton.appendChild(hspan)

	var hh4 = document.createElement('h4')
	hh4.className = "modal-title"
	hh4.innerHTML = title
	header.appendChild(hh4)

//	BODY
	var body = document.createElement('div')
	body.className = "modal-body"
	content.appendChild(body)
	this.body = body

	var list = document.createElement('ul')
	list.className = "modal-body-list"
	body.appendChild(list)
	this.list = list

//	FOOTER
	var footer = document.createElement('div')
	footer.className = "modal-footer"
	content.appendChild(footer)

	var footerba = document.createElement('button')
	footerba.className="btn btn-default"
	footerba.setAttribute('data-dismiss', 'modal')
	footerba.setAttribute('type', 'button')
	footerba.innerHTML = 'Cancel'
	footer.appendChild(footerba)
	
	footerba.onclick = function(){
		dom.parentNode.removeChild( dom )
	}

	var footerba = document.createElement('button')
	footerba.className="btn btn-default"
	footerba.setAttribute('data-dismiss', 'modal')
	footerba.setAttribute('type', 'button')
	footerba.innerHTML = 'OK'
	footer.appendChild(footerba)
	
	footerba.onclick = function(){
		dom.parentNode.removeChild( dom )
	}

	return this;	
}

MMUI.ItemDialog.prototype = Object.create( MMUI.Element.prototype );

MMUI.ItemDialog.prototype.addItem = function(image, title){

	var base = document.createElement('li')
	this.list.appendChild(base)

	var img = document.createElement('img')
	img.setAttribute('src', image)
	base.appendChild(img)

	var div = document.createElement('div')
	base.appendChild(div)

	var span = document.createElement('span')
	div.appendChild(span)
	span.innerHTML = title
}

