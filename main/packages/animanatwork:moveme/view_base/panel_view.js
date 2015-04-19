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
	this.showFrame = true;
    this.showCamera = true;
    this.menuCamera = undefined;
    this.textCamera = undefined;
    this.usedCamera = undefined;
    this.showSettingsMenu = true;
    this.showRatio = false;
    this.aspectRatio = [16,10]
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

//  TIME
//  shows us the current time
    var frameText = new MMUI.Text('0'); // default starting frame
    frameText.setPosition('absolute').setRight('10px').setBottom('10px')
    frameText.dom.style.zIndex = this.zIndex;
    frameText.setFontSize('24px')
    this.frameText = frameText
    dom.appendChild( frameText.dom )
    
    this.children.push( this.frameText.dom )

//  aspect ratio gate (16:10 - 4:3)
    var aspectFrame = new MMUI.Panel().setPosition('absolute');    
    aspectFrame.setWidth('120px')
    aspectFrame.setHeight('200px')   
    aspectFrame.dom.id = 'panelview-'+this.prefix
    aspectFrame.setDisplay('none')
    this.aspectFrame = aspectFrame;
    dom.appendChild( aspectFrame.dom )   

    this.children.push( this.aspectFrame.dom )

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

    var signals = editor.signals;
    signals.timeChanged.add( function(){
        console.log('MM.PanelView.onTimeChanged', scope.prefix)
        scope.setTime( scope.editor.time )
    });

    signals.timeShifted.add( function(){
        console.log('MM.PanelView.onTimeShifted', scope.prefix)
        scope.setTime( scope.editor.time )
    })

//  LISTEN TO CHANGE
    signals.cameraAdded.add( function(){
        console.log('MM.PanelView.onCameraAdded')
        scope.buildCameraDD();
    });

    signals.cameraRemoved.add( function(){
        console.log('MM.PanelView.onCameraRemoved')
        scope.buildCameraDD();
    });
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

//  FRAME
MM.PanelView.prototype.hideTime = function(){
    this.frameText.dom.style.display = 'none';
    this.showFrame = false;
}

MM.PanelView.prototype.showTime = function(){
    this.frameText.dom.style.display = '';
    this.showFrame = true;
}

MM.PanelView.prototype.setTime = function( time ){
    // console.log('MM.PanelView.setTime', time)
    if( ! this.showFrame ){
        console.log('\ttime is not visible')
        return
    }

    this.frameText.setValue(time);
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
MM.PanelView.prototype.hideCameraDD = function(){
    // console.log('MM.PanelView.hideCameraDD')
    this.cameraDD.dom.style.display = 'none';
    this.lockText.dom.style.display = 'none';
}

MM.PanelView.prototype.showCameraDD = function(){
    // console.log('MM.PanelView.showCameraDD')
    this.cameraDD.dom.style.display = '';
    this.lockText.dom.style.display = '';
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

    var verticalLayout = new MMUI.DropdownItem('Vertical')
    verticalLayout.onClick( function(){
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
        // scope.setContent('SceneView')

        console.log('parent layout', scope.parentLayout)

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
    }    
}
