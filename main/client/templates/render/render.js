moveme = {};

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
    console.log('\tfile url', file.url())
    var absUrl = Meteor.absoluteUrl(file.url());
    console.log('\tabs url', absUrl)

    var newUrl = 'http://192.168.1.69:3000'+file.url()
    console.log('\tnew url', newUrl)

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
	// xhr.open("GET", absUrl);
	xhr.open("GET", newUrl);
	xhr.send();		
}

// Template.render.rendered = function(){ 
// 	console.log('rendered', this)
// 	console.log('\tproject:', this.data.projects[0]._id)
// 	console.log('\tshot:', this.data.shots[0]._id)
// 	console.log('\tversion:', this.data.versions[0]._id)

// 	//	get the divider document element (so we have something we can parent our animation app under)
// 	var mmElement = this.find("#movemerender")

// 	var baseLayout = {
// 		panels : {
// 			workspace: {
// 				 h: [0,100]
// 				,w: [0,100]
// 				,td: []
// 				,bd: []
// 				,rd: []
// 				,ld: []
// 				,dh: 100
// 				,dw: 100
// 				,v: true
// 			}
// 		}	
// 	}
	
// 	var viewLayout = {
// 		panels : {
// 			view0: {
// 				 h: [0,100]
// 				,w: [0,100]
// 				,td: []
// 				,bd: []
// 				,rd: []
// 				,ld: []
// 				,dh: 100
// 				,dw: 100
// 				,v: true
// 			}
// 		}
// 	}

// 	//	launch in instance of our animation app with our custom layout. In this case we just want to see the main view.	
// 	moveme = new MM.App(mmElement, {
// 		hasNavigation: true,
// 		hasProjectBar: false,
// 		hasMenuBar: false,
// 		hasToolBar: false,
// 		baseLayout:baseLayout,
// 		viewLayout:viewLayout
// 	});

// //	get the associated file version
// 	var file = FileList.findOne(this.data.versions[0].fileId)
//     if( file === undefined ){
//       console.log('No file found. Nothing to load...')
//       return;
//     }
//     // console.log('\tfile url', file.url())
//     var absUrl = Meteor.absoluteUrl(file.url());

// //	load the data once loaded
// 	var xhr;
// 	if(window.XMLHttpRequest) {
// 	    xhr = new XMLHttpRequest();
// 	}else if(window.ActiveXObject) {
// 	    xhr = new ActiveXObject("Microsoft.XMLHTTP");
// 	}
// 	xhr.onload = function(){
// 		//	load scene file
// 		var data = JSON.parse(xhr.responseText)
// 		moveme.editor.loader.loadAsJSON(data)		
// 	}
// 	xhr.open("GET", absUrl);
// 	xhr.send();	

// //	add project data
// 	moveme.editor.importPTASettings({
// 		projectId:this.data.projects[0]._id,
// 		shotId:this.data.shots[0]._id,
// 		versionId:this.data.versions[0]._id
// 	});
// }
