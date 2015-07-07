MM.insertTail = function( editor ){
	var assetName = 'tail'

	var u = new MM.AssetBuild( editor );
    u.assetName = assetName
	u.setNamespace( assetName+':')

	u.addModel('/data/tail/model/cMain.obj')
	u.addSkeleton('/data/tail/skeleton/cRoot_skeleton.json')
	u.addSkin('/data/tail/weights/cMain_skin.json')

	//	create global control
	u.addRigComponent( new MM.GlobalComponent( {
		'controlShape' : 'plane',
		'controlSize' : 20, 
		'asset' : assetName, 
		'side' : 'c', 		
		'names' : ['GlobalCtl'], 
		'joints' : ['Root']
	} ) )

	u.addRigComponent( new MM.GlobalComponent( {
		'controlShape' : 'circle',
		'controlSize' : 14, 
		'asset' : assetName, 
		'side' : 'c', 
		'names' : ['BodyCtl', 'Body2Ctl'], 
		'joints' : ['Body', 'Body']
	} ) )

	//	create fk chain
	var tailJoints = ['Tail0', 'Tail1', 'Tail2', 'Tail3', 'Tail4']
	var tailNames = ['Tail0Ctl', 'Tail1Ctl', 'Tail2Ctl', 'Tail3Ctl', 'Tail4Ctl']
	u.addRigComponent( new MM.FkChainComponent({
		'controlSize' : 7, 
		'controlShape' : 'circleZ', 
		'asset' : assetName, 
		'side' : 'c',
		'names' : tailNames, 
		'joints' : tailJoints
	} ) )

	var lastFunction = function(){
		// u.rigComponents[1].controls['BodyCtl'].controlOffset.y = -1.0;
        // u.rigComponents[1].controls['Body2Ctl'].controlOffset.y = 1.0;
		u.rigComponents[0].controls['GlobalCtl'].setParent(
			u.rigComponents[1].controls['BodyCtl'].parent)

		u.rigComponents[1].controls['Body2Ctl'].setParent(
			u.rigComponents[2].controls['Tail0Ctl'].parent)

		editor.controlsVisibility()	
		editor.jointsVisibility()

	//	color geometry		
		var i, j;
		for( i = 0, j = u.models.length; i < j; i++){
			// console.log('\t', i, 'model:', u.models[i])
            u.models[i].addChannel( 'custom', 'color', undefined, 'color')
            u.models[i].custom={'visibility': u.models[i].visible, 
                                'color': u.models[i].material.color};
			switch(u.models[i].name){
				case u.namespace+'cMain':	
					u.models[i].material.color.setRGB(85/255,72/255,68/255)
				break;
			}
		}	

	//	undo
		editor.getUndoDataForAddAsset( u.namespace, 'undo')	
	}
	
	u.addLast(lastFunction)
	u.showProgress();	
	u.build()
}

MM.tailSelect = function( namespace, container, editor ){
	console.log('tailSelect', namespace, container, editor)

    container.setHeight('306px')

    var space = new MMUI.Panel();
    space.setPosition('absolute');
    container.add( space )

    var img = document.createElement("img");    
    img.src = "/ui/tailSelect1.gif";    
    img.width = 205;
    img.height = 306;
    space.dom.appendChild( img )

    var cValue = 92;

    var globalButton = new MMUI.Button('')
    globalButton.setClass('gCtrlButton')
    globalButton.setPosition('absolute')    
    globalButton.setLeft(cValue+'px')
    globalButton.setTop('10px')
    globalButton.onClick( function (){ 
        editor.selectObjectByName( namespace+':cGlobalCtl') } )  
    space.add( globalButton )

    var bodyButton = new MMUI.Button('')
    bodyButton.setClass('cCtrlButton')
    bodyButton.setPosition('absolute')    
    bodyButton.setLeft(cValue+'px')
    bodyButton.setTop('60px')
    bodyButton.onClick( function (){ 
        editor.selectObjectByName( namespace+':cBodyCtl') } )  
    space.add( bodyButton )

	var body2Button = new MMUI.Button('')
    body2Button.setClass('cCtrlButton')
    body2Button.setPosition('absolute')    
    body2Button.setLeft(cValue+'px')
    body2Button.setTop('80px')
    body2Button.onClick( function (){ 
        editor.selectObjectByName( namespace+':cBody2Ctl') } )  
    space.add( body2Button )  

//  tail
    var tail0Button = new MMUI.Button('')
    tail0Button.setClass('cCtrlButton')
    tail0Button.setPosition('absolute')    
    tail0Button.setLeft(cValue+'px')
    tail0Button.setTop('130px')
    tail0Button.onClick( function (){ 
        editor.selectObjectByName( namespace+':cTail0Ctl') } )  
    space.add( tail0Button )

	var tail1Button = new MMUI.Button('')
    tail1Button.setClass('cCtrlButton')
    tail1Button.setPosition('absolute')    
    tail1Button.setLeft(cValue+'px')
    tail1Button.setTop('160px')
    tail1Button.onClick( function (){ 
        editor.selectObjectByName( namespace+':cTail1Ctl') } )  
    space.add( tail1Button ) 

	var tail2Button = new MMUI.Button('')
    tail2Button.setClass('cCtrlButton')
    tail2Button.setPosition('absolute')    
    tail2Button.setLeft(cValue+'px')
    tail2Button.setTop('190px')
    tail2Button.onClick( function (){ 
        editor.selectObjectByName( namespace+':cTail2Ctl') } )  
    space.add( tail2Button )    

	var tail3Button = new MMUI.Button('')
    tail3Button.setClass('cCtrlButton')
    tail3Button.setPosition('absolute')    
    tail3Button.setLeft(cValue+'px')
    tail3Button.setTop('220px')
    tail3Button.onClick( function (){ 
        editor.selectObjectByName( namespace+':cTail3Ctl') } )  
    space.add( tail3Button )     

	var tail4Button = new MMUI.Button('')
    tail4Button.setClass('cCtrlButton')
    tail4Button.setPosition('absolute')    
    tail4Button.setLeft(cValue+'px')
    tail4Button.setTop('250px')
    tail4Button.onClick( function (){ 
        editor.selectObjectByName( namespace+':cTail4Ctl') } )  
    space.add( tail4Button )     

    return space;    
}

MM.tailKeyAll = function( namespace, container, editor){
    console.log('cubeKeyAll', namespace, container)

    var backgroundColor = "#D8D8D8" // should be E instead of D

    var allControls = [
          namespace+':cGlobalCtl'
        , namespace+':cBodyCtl'
        , namespace+':cBody2Ctl'
        , namespace+':cTail4Ctl'
        , namespace+':cTail3Ctl'
        , namespace+':cTail2Ctl'
        , namespace+':cTail1Ctl'
        , namespace+':cTail0Ctl'
    ]
    var all = new MM.AssetKeySelectControls( editor )
    all.setTitle('All').setControls(allControls)
    all.setBackgroundColor(backgroundColor)
    container.add( all.panel )

    var global = new MM.AssetKeySelectControls( editor )
    global.setTitle('Global').setControls([namespace+':cGlobalCtl'])
    container.add( global.panel )

    var body = new MM.AssetKeySelectControls( editor )
    body.setTitle('Body').setControls([namespace+':cBodyCtl'])
    body.setBackgroundColor(backgroundColor)
    container.add( body.panel )

    var tail = new MM.AssetKeySelectControls( editor )
    tail.setTitle('Tail').setControls([namespace+':cTail4Ctl',
                                       namespace+':cTail3Ctl',
                                       namespace+':cTail2Ctl',
                                       namespace+':cTail1Ctl',
                                       namespace+':cTail0Ctl'])
    container.add( tail.panel )

    return container
}