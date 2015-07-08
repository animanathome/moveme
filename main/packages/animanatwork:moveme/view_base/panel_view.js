MM.PanelView = function( editor , prefix){
	// console.log('MM.PanelView', prefix)

    if( prefix === undefined ){
        prefix = 'base'
    }

	MMUI.Element.call( this );    

    this.editor = editor
	this.parentLayout = undefined;
    this.childPanel = undefined;
    this.prefix = prefix;
    this.zIndex = 10;
    this.contentType = undefined;
    
    var scope = this;
    var signals = editor.signals;
    var dom = document.createElement( 'div' );  
    dom.id = 'panelview-'+prefix    
    dom.style.top = '0px'
    dom.style.bottom = '0px'
    dom.style.left = '0px'
    dom.style.right = '0px'
    dom.style.position = 'absolute'
    // dom.style.zIndex = this.zIndex;
    this.dom = dom;

    this.children = []

//	SETTINGS
    //  hide our panel HUD options by default
	this.show_frame = false
    this.show_fps = false
    this.show_camera = false
    this.show_aspect = false

    this.menuCamera = undefined
    this.textCamera = undefined
    this.usedCamera = undefined
    this.showSettingsMenu = true
    this.aspectRatio = [1.6, 1]
    //  UNKNOWN: not sure how we are going to deal with this offset value as it means the final render will be actually smaller. 
    this.aspectBorder = 20
    this.lockCamera = false;

//  SETTINGS LAYOUT
    this.layoutDD = new MMUI.Dropdown('layout').addClass('dropdown-panelview');
    this.layoutDD.dom.style.zIndex = this.zIndex;
    dom.appendChild( this.layoutDD.dom );
    this.buildLayoutDD();

    this.children.push( this.layoutDD.dom )

//  SETTINGS menu
    this.panelDD = new MMUI.Dropdown('panel').addClass('dropdown-panelview')
    this.panelDD.dom.style.zIndex = this.zIndex;
    dom.appendChild( this.panelDD.dom )   
    this.panelDD.onClick( function(){
        scope.buildPanelDD();    
    })
        
    this.children.push( this.panelDD.dom )

//  CAMERA PANEL
    this.cameraDD = new MMUI.Dropdown('camera').addClass('dropdown-panelview');
    this.cameraDD.dom.style.zIndex = this.zIndex;
    dom.appendChild( this.cameraDD.dom );
    this.buildCameraDD();

    this.children.push( this.cameraDD.dom )

//  FPS
//  show use the computed frames per second
    var fpsText = new MMUI.Text('0 fps'); // default starting frame
    fpsText.setPosition('absolute').setRight('25%').setBottom('10px')
    fpsText.dom.style.zIndex = this.zIndex;
    fpsText.setFontSize('24px')
    this.fpsText = fpsText
    dom.appendChild( fpsText.dom )
    
    this.children.push( this.fpsText.dom )

//  TIME
//  shows us the current time
    var frameText = new MMUI.Text('frame 0'); // default starting frame
    frameText.setPosition('absolute').setRight('10px').setBottom('10px')
    frameText.dom.style.zIndex = this.zIndex;
    frameText.setFontSize('24px')
    this.frameText = frameText
    dom.appendChild( frameText.dom )
    
    this.children.push( this.frameText.dom )

//  aspect ratio gate (16:10 - 4:3)
    // var aspectFrame = new MMUI.Panel().setPosition('absolute')
    // aspectFrame.addClass('aspectview')
    // aspectFrame.setWidth('120px')
    // aspectFrame.setHeight('200px')
    // aspectFrame.dom.id = 'panelview-'+this.prefix
    // aspectFrame.setDisplay('none')
    // this.aspectFrame = aspectFrame;
    // dom.appendChild( aspectFrame.dom ) 

    // this.children.push( this.aspectFrame.dom )

    //  new aspectFrame
    var aspectFrame = document.createElement('div')    
    aspectFrame.className = 'aspectview'
    aspectFrame.style.position = 'absolute'
    // aspectFrame.style.width = '120px'
    // aspectFrame.style.height = '200px'
    aspectFrame.id = 'panelview-'+this.prefix
    aspectFrame.style.display = 'none'
    aspectFrame.style.pointerEvents = 'none'
    this.aspectFrame = aspectFrame
    dom.appendChild(aspectFrame)

    this.children.push(this.aspectFrame)

//  CAMERA LOCK
//  shows us whether or not the camera lock is on. When the lock is on
//  the user can not more the camera using this panel
    // var lockText = new MMUI.Text('unlocked');
    var lockText = new MMUI.Text(this.prefix); // temp for debugging
    lockText.setPosition('absolute').setLeft('50%').setBottom('10px')    
    lockText.dom.style.zIndex = this.zIndex;
    this.lockText = lockText;    
    dom.appendChild( lockText.dom )

    this.children.push( this.lockText.dom )

    // var signals = editor.signals;
    signals.timeChanged.add( function(){
        // console.log('MM.PanelView.onTimeChanged', scope.prefix)
        scope.setTime( scope.editor.time )
        scope.setFPS( scope.editor._fps)
    });

    signals.timeShifted.add( function(){
        // console.log('MM.PanelView.onTimeShifted', scope.prefix)
        scope.setTime( scope.editor.time )
        scope.setFPS( scope.editor._fps)
    })

//  LISTEN TO CHANGE
    signals.cameraAdded.add( function(){
        // console.log('MM.PanelView.onCameraAdded')
        scope.buildCameraDD();
    });

    signals.cameraRemoved.add( function(){
        // console.log('MM.PanelView.onCameraRemoved')
        scope.buildCameraDD();
    });

//  hide HUD elements
    this.hideCamera();
    this.hideFPS();
    this.hideTime();
}

MM.PanelView.prototype = Object.create( MMUI.Element.prototype );

MM.PanelView.prototype.setParentLayout = function( parentLayout ){
    // console.log('setParentLayout', parentLayout)
    this.parentLayout = parentLayout;
}

MM.PanelView.prototype.setParentPanel = function( parentPanel ){
	this.parentPanel = parentPanel;
}

MM.PanelView.prototype.setChildPanel = function( childPanel ){
    //  child panel object
    //  this can be a MM.SceneView or a MM.KeyView
    this.childPanel = childPanel;
}

MM.PanelView.prototype.setContent = function( contentType ){
    console.log('MM.PanelView.setContent', contentType)
    /*
    Currently supported content types:
        1. Scene View
        2. Key View
    */

    //  check if we actually have to build something different
    //  if not, return
    if( this.contentType === contentType ){
        // console.log('Content type is the same. Nothing to do.')
        return
    }
    
    //  remove the old content
    //  this should be move to the child object 
    this.childPanel.clear();
    delete this.childPanel;

    //  build the new content
    var viewContent;
    switch( contentType ){
        case "SceneView":
            viewContent = new MM.SceneView( this.editor, this.prefix, this)
            this.showCameraDD();    
            this.setCamera( this.editor.cameras[0])();  
        break;

        case "KeyView":
            viewContent = new MM.KeyView( this.editor, this.prefix, this)
            this.hideCameraDD();
        break;

        default:
            console.log('Unsupported content type.')
        break;
    }
    this.contentType = contentType;
    this.setChildPanel( viewContent ) 

    this.resize();
}

//  CAMERA 
MM.PanelView.prototype.toggleCamera = function(){
    if( this.show_camera ){
        this.hideCamera()
    }else{
        this.showCamera()
    }
}

MM.PanelView.prototype.showCamera = function(){
    this.lockText.dom.style.display = 'block';
    this.show_camera = true;
    this.lockText.setValue(this.childPanel.camera.name)
}

MM.PanelView.prototype.hideCamera = function(){
    this.lockText.dom.style.display = 'none';
    this.show_camera = false;
}

//  FPS
MM.PanelView.prototype.toggleFPS = function(){
    if( this.show_fps ){
        this.hideFPS()        
    }else{
        this.showFPS()
    }
}

MM.PanelView.prototype.hideFPS = function(){
    this.fpsText.dom.style.display = 'none';
    this.show_fps = false;
}

MM.PanelView.prototype.showFPS = function(){
    this.fpsText.dom.style.display = 'block';
    this.show_fps = true;
}

MM.PanelView.prototype.setFPS = function( fps ){
    // console.log('MM.PanelView.setTime', time)
    if( ! this.show_fps ){
        // console.log('\tfps is not visible')
        return
    }
    this.fpsText.setValue(fps+' fps');
}

MM.PanelView.prototype.toggleAspect = function(){
    if(this.show_aspect){
        this.hideAspect()
    }else{
        this.showAspect()
    }
}

MM.PanelView.prototype.hideAspect = function(){
    // this.aspectFrame.setDisplay('none')
    this.aspectFrame.style.display = 'none'
    this.show_aspect = false
}

MM.PanelView.prototype.showAspect = function(){
    // this.aspectFrame.setDisplay('block')
    this.aspectFrame.style.display = 'block'
    this.show_aspect = true

    //  redraw panel to properly scale the frame
    this.resize()
}

//  FRAME
MM.PanelView.prototype.toggleTime = function(){
    if( this.show_frame ){
        this.hideTime()
    }else{
        this.showTime()
    }
}

MM.PanelView.prototype.hideTime = function(){
    this.frameText.dom.style.display = 'none';
    this.show_frame = false;
}

MM.PanelView.prototype.showTime = function(){
    this.frameText.dom.style.display = 'block';
    this.show_frame = true;
}

MM.PanelView.prototype.setTime = function( time ){
    // console.log('MM.PanelView.setTime', time)
    if( ! this.show_frame ){
        // console.log('\ttime is not visible')
        return
    }

    this.frameText.setValue('frame '+time);
}

//  PANEL DROP DOWN
MM.PanelView.prototype.hidePanelDD = function(){
    this.panelDD.dom.style.display = 'none'
}

MM.PanelView.prototype.showPanelDD = function(){
    this.panelDD.dom.style.display = ''
}

MM.PanelView.prototype.buildPanelDD = function(){
    var scope = this;

    //  remove all of the child elements from panelDD
    while (this.panelDD.dropgrp.firstChild) {
        this.panelDD.dropgrp.removeChild(this.panelDD.dropgrp.firstChild);
    }

//  PANEL TYPE    
    var sceneViewDD = new MMUI.DropdownItem('SceneView')
    sceneViewDD.onClick( function(){
        scope.setContent('SceneView')
    });
    this.panelDD.add( sceneViewDD )

    var keyViewDD = new MMUI.DropdownItem('KeyView')
    keyViewDD.onClick( function(){
        scope.setContent('KeyView')
    });
    this.panelDD.add( keyViewDD )

    this.panelDD.add( new MMUI.DropdownDivider() )

//  LAYOUT FUNCTIONS
    var splitHDD = new MMUI.DropdownItem('Split Horizontal')
    splitHDD.onClick( function(){
        // console.log('Split Horizontal')
        // console.log('\tparent', scope.parentLayout)
        // console.log('\tthis', scope.prefix)
        scope.parentLayout.createPanel( scope.prefix, 'h')
    })
    this.panelDD.add( splitHDD )

    var splitVDD = new MMUI.DropdownItem('Split Vertical')
    splitVDD.onClick( function(){
        // console.log('\tSplit Vertical')
        // console.log('\tparent', scope.parentLayout)
        // console.log('\tthis', scope.prefix)
        scope.parentLayout.createPanel( scope.prefix, 'v')
    })    
    this.panelDD.add( splitVDD )

    // console.log('parentLayout', this.parentLayout)
    var i, dropdownName;
    var pn = scope.parentLayout.getNeighourDirections( scope.prefix )
    if( pn.length === 0){
        // var deleteDDD = new MMUI.DropdownItem('Collapse') 
        // deleteDDD.onClick( function(){
        //     //  collapse in no direction
        //     scope.parentLayout.deletePanel( scope.prefix , 'nd')
        // })
        // scope.panelDD.add( deleteDDD ) 
    }else{
        for(i = 0; i < pn.length; i++){
            // console.log('Adding', pn[i])
            switch( pn[i] ){
                case "ld": dropdownName = "Collapse Right"; break;
                case "rd": dropdownName = "Collapse Left"; break;
                case "td": dropdownName = "Collapse Downwards"; break;
                case "bd": dropdownName = "Collapse Upwards"; break;
            }
            //  delete + direction
            var deleteDDD = new MMUI.DropdownItem(dropdownName)  
            deleteDDD.onClick( scope.deletePanel( scope.prefix, pn[i]) );
            scope.panelDD.add( deleteDDD )
        }
    }

    this.panelDD.add( new MMUI.DropdownDivider() )
    
    // time text
    var timeTxt = ((this.show_frame)?'Hide Time':'Show Time');
    var timeDDI = new MMUI.DropdownItem(timeTxt).onClick( function(){
        scope.toggleTime();
    })
    this.panelDD.add( timeDDI );
    
    // camera text
    var cameraTxt = ((this.show_camera)?'Hide Camera':'Show Camera')
    var cameraDDI = new MMUI.DropdownItem(cameraTxt).onClick( function(){
        scope.toggleCamera();
    });
    this.panelDD.add( cameraDDI );
    
    //  fps text
    var fpsText = ((this.show_fps)?'Hide FPS':'Show FPS')
    var fpsDDI = new MMUI.DropdownItem(fpsText).onClick( function(){
        scope.toggleFPS();
    })
    this.panelDD.add( fpsDDI )

    // aspect ratio
    var aspectText = ((this.show_aspect)?'Hide Aspect Ratio':'Show Aspect Ratio')
    var aspectDDI = new MMUI.DropdownItem(aspectText).onClick( function(){
        scope.toggleAspect();
    })
    this.panelDD.add( aspectDDI )
}

MM.PanelView.prototype.deletePanel = function( panel, direction ){
    // console.log('PanelView.deletePanel', panel, direction)
    var scope = this;
    return function(){
        // console.log('delete', panel, direction)
        scope.parentLayout.deletePanel( panel, direction )
    }
}

//  CAMERA DROP DOWN
//  Hide the camera display options depending out the type panel content we have. For instance, in case of the key view we don't want to show the camera drop down nor the camera name

MM.PanelView.prototype.hideCameraDD = function(){
    // console.log('MM.PanelView.hideCameraDD')
    this.cameraDD.dom.style.display = 'none';
    this.lockText.dom.style.display = 'none';
}

MM.PanelView.prototype.showCameraDD = function(){
    // console.log('MM.PanelView.showCameraDD')
    this.cameraDD.dom.style.display = 'block';
    this.lockText.dom.style.display = 'block';
}

MM.PanelView.prototype.buildCameraDD = function(){
    // console.log('MM.PanelView.buildCameraDD')

    this.cameraDD.removeAll();
    var i,j, scope = this;

    //  list persp cameras
    for( i = 0, j = this.editor.cameras.length; i < j; i++){
        if( this.editor.cameras[i] instanceof THREE.PerspectiveCamera){
            // console.log('\t', this.editor.cameras[i])
            this.cameraDD.add( 
                new MMUI.DropdownItem( this.editor.cameras[i].name ).onClick(
                scope.setCamera( scope.editor.cameras[i]))
            );
        }
    }

    this.cameraDD.add( new MMUI.DropdownDivider );

    //  list ortho cameras
    for( i = 0, j = this.editor.cameras.length; i < j; i++){
        if( this.editor.cameras[i] instanceof THREE.OrthographicCamera){
            // console.log('\t', this.editor.cameras[i])
            this.cameraDD.add( 
                new MMUI.DropdownItem( this.editor.cameras[i].name ).onClick(
                scope.setCamera( scope.editor.cameras[i]))
            );
        }
    }
}

MM.PanelView.prototype.buildLayoutDD = function(){
    var scope = this;

    var singleLayout = new MMUI.DropdownItem('Single')
    singleLayout.onClick(function(){  
        
        //  cleanup existing panels
        var space;
        for( space in scope.parentLayout.layoutElements['view']){
            var tPanel = scope.parentLayout.layoutElements['view'][space]
            tPanel.childPanel.clear()
            delete tPanel.childPanel
            tPanel.deletePanel()
        }
        
        //  define new configuration
        var viewLayout = {
            panels : {
                view0: {
                     h: [0,100]
                    ,w: [0,100]
                    ,td: []
                    ,bd: []
                    ,rd: []
                    ,ld: []
                    ,dh: 100
                    ,dw: 100
                    ,v: true
                }
            }   
        }        
        scope.parentLayout.rebuild(viewLayout)
    })
    this.layoutDD.add( singleLayout )

    var verticalLayout = new MMUI.DropdownItem('Vertical')
    verticalLayout.onClick( function(){
        
        //  cleanup existing panels
        var space;
        for( space in scope.parentLayout.layoutElements['view']){              
            var tPanel = scope.parentLayout.layoutElements['view'][space]
            tPanel.childPanel.clear()
            delete tPanel.childPanel
            tPanel.deletePanel()
        }

        //  define new configuration
        var viewLayout = {
            panels : {
                view0: {
                     h: [0,100]
                    ,w: [0,50]
                    ,td: []
                    ,bd: []
                    ,rd: ['view1']
                    ,ld: []
                    ,dh: 100
                    ,dw: 50
                    ,v: true
                },
                view1: {
                     h: [0,100]
                    ,w: [50,100]
                    ,td: []
                    ,bd: []
                    ,rd: []
                    ,ld: ['view0']
                    ,dh: 100
                    ,dw: 50
                    ,v: true
                }
            },
            vsliders : {
                view1: {
                     h: [0,100]
                    ,w: [50, 100]
                    ,ld: ['view0'] // left dependency
                    ,rd: ['view1'] // right dependency              
                    ,td: []
                    ,bd: []
                }
            }       
        }        
        scope.parentLayout.rebuild(viewLayout)

    })
    this.layoutDD.add( verticalLayout )

    var horizontalLayout = new MMUI.DropdownItem('Horizontal')
    horizontalLayout.onClick( function(){
        
        //  cleanup existing panels
        var space;
        for( space in scope.parentLayout.layoutElements['view']){ 
            var tPanel = scope.parentLayout.layoutElements['view'][space]
            tPanel.childPanel.clear()
            delete tPanel.childPanel
            tPanel.deletePanel()
        }

        //  define new configuration
        var viewLayout = {
            panels : {
                view0: {
                     h: [50,100]
                    ,w: [0,100]
                    ,td: []
                    ,bd: ['view1']
                    ,rd: []
                    ,ld: []
                    ,dh: 50
                    ,dw: 100
                    ,v: true
                },
                view1: {
                     h: [0,50]
                    ,w: [0,100]
                    ,td: []
                    ,bd: ['view0']
                    ,rd: []
                    ,ld: []
                    ,dh: 50
                    ,dw: 100
                    ,v: true
                }
            },
            hsliders : {
                view0: {
                     h: [0, 50]
                    ,w: [0, 100]
                    ,ld: [] // left dependency
                    ,rd: [] // right dependency              
                    ,td: ['view0']
                    ,bd: ['view1']
                }
            }       
        }
        
        scope.parentLayout.rebuild(viewLayout)
    });
    this.layoutDD.add( horizontalLayout )
}

MM.PanelView.prototype.activate = function(){
    // console.log('MM.PanelView.activate', this.prefix)
    // this.dom.style.outline = '1px solid #00ab89'
    this.isActive = true;
    if( this.childPanel ){
        this.childPanel.activate();
    }    
}

MM.PanelView.prototype.deactivate = function(){
    // console.log('MM.PanelView.deactivate', this.prefix)

    this.dom.style.outline = ''
    this.isActive = false;
    if( this.childPanel ){
        this.childPanel.deactivate();
    }
}

MM.PanelView.prototype.setCamera = function( camera ){
    var scope = this;
    return function (){
        // console.log('MM.PanelView.setCamera', camera.name)
        // console.log('\tchild', scope.childPanel)
        
        //  update camera dropdown title
        scope.cameraDD.setTitle( camera.name )
        
        if( scope.childPanel ){            
            if( scope.childPanel instanceof MM.SceneView ){
                // console.log('Setting camera to', camera.name)
                scope.childPanel.setCamera( camera )
            }            
        }
    }
}

MM.PanelView.prototype.focus = function(){
    console.log('PanelView.focus')
    if( this.childPanel ){
        this.childPanel.focus()
    }
}

MM.PanelView.prototype.render = function(){
    // console.log('MMUI.PanelView.render', this.prefix)
    if( this.childPanel ){
        // console.log('\trender', this.childPanel)
        this.childPanel.render();
    }
}

MM.PanelView.prototype.resize = function(){
    if( this.childPanel ){
        this.childPanel.resize();

        if(this.contentType === 'SceneView' && this.show_aspect === true){
            // console.log('resize', this.dom)
            // console.log('\tdimension', this.dom.offsetWidth, this.dom.offsetHeight)
            
            var widthRatio = (this.dom.offsetWidth - this.aspectBorder) / 1.6
            var heightRatio = (this.dom.offsetHeight - this.aspectBorder) / 1

            // console.log('\tratio', widthRatio, heightRatio)

            var smallest = widthRatio
            if(heightRatio < smallest){
                smallest = heightRatio
            }

            var widthOffset = this.dom.offsetWidth - (smallest * 1.6)
            this.aspectFrame.style.left = widthOffset/2+'px'
            this.aspectFrame.style.width = (smallest*1.6)+'px'

            var heightOffset = this.dom.offsetHeight - smallest
            this.aspectFrame.style.top = heightOffset/2+'px'
            this.aspectFrame.style.height = smallest+'px'
        }
    }    
}
