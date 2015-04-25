setWallHeight = function(dom){
	var totalWidth = dom.offsetWidth;
	var totalHeight = totalWidth * (9/16);
	dom.style.height = totalHeight+'px';	
}

buildWall = function(dom){
	console.log('buildWall', dom)
	var wallLayout = {
		panels : {
			view0: {
				 h: [0,33]
				,w: [0,33]
				,td: []
				,bd: []
				,rd: []
				,ld: []
				,dh: 33
				,dw: 33
				,v: true
			},
			view1: {
				 h: [33,66]
				,w: [0,33]
				,td: []
				,bd: []
				,rd: []
				,ld: []
				,dh: 33
				,dw: 33
				,v: true				
			},
			view2: {
				 h: [66,100]
				,w: [0,33]
				,td: []
				,bd: []
				,rd: []
				,ld: []
				,dh: 33
				,dw: 33
				,v: true				
			},
			view3: {
				 h: [33,100]
				,w: [33,100]
				,td: []
				,bd: []
				,rd: []
				,ld: []
				,dh: 66
				,dw: 66
				,v: true
			},
			view4: {
				 h: [0,33]
				,w: [33,66]
				,td: []
				,bd: []
				,rd: []
				,ld: []
				,dh: 33
				,dw: 33
				,v: true
			},
			view5: {
				 h: [0,33]
				,w: [66,100]
				,td: []
				,bd: []
				,rd: []
				,ld: []
				,dh: 33
				,dw: 33
				,v: true
			}
		}
	}
	
	var wallPanel = new MMUI.PanelLayout( null );
	wallPanel.sliderThickness = 10;
	wallPanel.setLayout( wallLayout )
	
	dom.appendChild( wallPanel.dom )
	wallPanel.init()

	return wallPanel;
}

Template.animWall.rendered = function(){ 
	// console.log('animWall', this)
	// console.log('\tdata', this.data)

//	build wall
	var wallBase = this.find("#animWall")
	wallBase.style.position = 'relative'
	// console.log('wallBase', wallBase)

	//	set the height of the wall (based on 16/9 ratio)
	setWallHeight(wallBase)

	//	build panel layout
	var wallPanel = buildWall(wallBase);

//	populate wall with video
//	https://developers.google.com/youtube/iframe_api_reference#Loading_a_Video_Player
	var counter = 0;
	var cursor = this.data.versions;
	cursor.forEach(function(item){
		var panelName = 'view'+counter;
		var panelItem = wallPanel.getPanel(panelName)				

	//	image
		// var srci = item.youTubeImageUrlHigh;
		var srci = '/ui/imagePlaceHolder.png'			
		var image = new MMUI.A().setImage(srci).setClass('btn btn-image')
		image.setWidth('100%')
		image.setHeight('100%')
		image.dom.style.backgroundSize='cover';
		panelItem.dom.appendChild( image.dom )

	// //	movie
	// 	var iframe = document.createElement('iframe');
	// 	iframe.setAttribute('id','player');
	// 	iframe.setAttribute('type','text/html');
	// 	iframe.style.border = '0px'
	// 	iframe.width = panelItem.dom.offsetWidth;
	// 	iframe.height = panelItem.dom.offsetHeight;

	// 	var srcs = 'http://www.youtube.com/embed/'+item.youTubeVideoId+'?'
	// 	srcs += 'loop=1&playlist='+item.youTubeVideoId
	// 	// srcs += '&autoplay=1'
	// 	srcs += '&fs=0'
	// 	srcs += '&showinfo=0'
	// 	srcs += '&enablejsapi=1'
	// 	srcs += '&modestbranding'
	// 	srcs += '&controls=0'		

	// 	iframe.src = srcs;
	// 	panelItem.dom.appendChild( iframe )
	
	//	Add banner
	//	start
		var banner = new MMUI.Panel()

		//	Attach mouse over and out css animations for the banner to the image.
		image.onMouseOver(
			function(banner){
				return function(){
					banner.dom.className = "banner-content-active anim-banner-content-active"
				}
			}(banner)
		)
		image.onMouseOut(
			function(banner){
				return function(){
					banner.dom.className = "banner-content anim-banner-content"
				}
			}(banner)
		)
		banner.setClass('banner-content anim-banner-content')
		panelItem.dom.appendChild( banner.dom )

		var title = document.createElement('span')
		title.className = 'anim-banner-title'
		title.textContent = 'Temp';//item.title;
		banner.dom.appendChild( title )
	//	end

		counter += 1;
	})	

	var onWindowResize = function ( event ) {
		console.log('onWindowResize');
		
		setWallHeight(wallBase);
		
		wallPanel.resize();
	}
	window.addEventListener( 'resize', onWindowResize, false );
}

Template.assetWall.rendered = function(){ 
	// console.log('Done building assetWall')
	// console.log('\tdata', this.data)

	//	build wall
	var wallBase = this.find("#assetWall")
	wallBase.style.position = 'relative'

	//	set the height of the wall (based on 16/9 ratio)
	setWallHeight(wallBase)

	//	build panel layout
	var wallPanel = buildWall(wallBase);	

	var counter = 0;
	var cursor = this.data.assets;
	cursor.forEach(function(item){
		var panelName = 'view'+counter;
		var panelItem = wallPanel.getPanel(panelName)

		var srci = '/ui/imagePlaceHolder.png'
		var srci = item.thumbnail;
		var image = new MMUI.A().setImage(srci).setClass('btn btn-image')
		image.setWidth('100%')
		image.setHeight('100%')
		image.dom.style.backgroundSize='cover';
		panelItem.dom.appendChild( image.dom )

	//	Add banner
	//	start
		var banner = new MMUI.Panel()

		//	Attach mouse over and out css animations for the banner to the image.
		image.onMouseOver(
			function(banner){
				return function(){
					banner.dom.className = "banner-content-active asset-banner-content-active"
				}
			}(banner)
		)
		image.onMouseOut(
			function(banner){
				return function(){
					banner.dom.className = "banner-content asset-banner-content"
				}
			}(banner)
		)
		banner.setClass('banner-content asset-banner-content')
		panelItem.dom.appendChild( banner.dom )

		var title = document.createElement('span')
		title.className = 'asset-banner-title'
		title.textContent = item.title;
		banner.dom.appendChild( title )
	//	end

		counter += 1;
	})

	var onWindowResize = function ( event ) {
		console.log('onWindowResize');
		
		setWallHeight(wallBase);
		
		wallPanel.resize();
	}
	window.addEventListener( 'resize', onWindowResize, false );	
}

Template.tutorialWall.rendered = function(){ 
	// console.log('tutorialWall', this)
	// console.log('\tdata', this.data)

	//	build wall
	var wallBase = this.find("#tutorialWall")
	wallBase.style.position = 'relative'
	// console.log('wallBase', wallBase)

	//	set the height of the wall (based on 16/9 ratio)
	setWallHeight(wallBase)

	//	build panel layout
	var wallPanel = buildWall(wallBase);

	var showMovie = function(parent, youtubeTitle, youtubeId){
		return function(){
			// console.log('showMovie', parent, youtubeId)
			var player = new MMUI.VideoDialog(youtubeTitle, youtubeId, 'view');
			parent.appendChild( player.dom )			
		}
	}

	//	NOTE: make sure we only get 6 tutorials here, equal to the number of panels
	var counter = 0;
	var cursor = this.data.tutorials;
	cursor.forEach(function(item){

		var panelName = 'view'+counter;
		var panelItem = wallPanel.getPanel(panelName)	

	//	image		
		// var srci = 'https://img.youtube.com/vi/'+item.youTubeVideoId+'/maxresdefault.jpg';
		// var srci = '/ui/imagePlaceHolder.png'
		var srci = item.thumbnail

		var image = new MMUI.A().setImage(srci).setClass('btn btn-image')
		image.setWidth('100%')
		image.setHeight('100%')
		image.dom.style.backgroundSize='cover';
		panelItem.dom.appendChild( image.dom )
		image.onClick(showMovie(wallBase, item.title, item.youTubeVideoId))
		// image.dom.style.outline='1px solid #e1e1e1'

	//	Add banner
	//	start
		var banner = new MMUI.Panel()

		//	Attach mouse over and out css animations for the banner to the image.
		image.onMouseOver(
			function(banner){
				return function(){
					banner.dom.className = "banner-content-active tutorial-banner-content-active"
				}
			}(banner)
		)
		image.onMouseOut(
			function(banner){
				return function(){
					banner.dom.className = "banner-content tutorial-banner-content"
				}
			}(banner)
		)
		banner.setClass('banner-content tutorial-banner-content')
		panelItem.dom.appendChild( banner.dom )

		var title = document.createElement('span')
		title.className = 'tutorial-banner-title'
		title.textContent = item.title;
		banner.dom.appendChild( title )
	//	end

		counter += 1;
	})		

	var onWindowResize = function ( event ) {
		console.log('onWindowResize');
		
		setWallHeight(wallBase);
		
		wallPanel.resize();
	}
	window.addEventListener( 'resize', onWindowResize, false );
}


