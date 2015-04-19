MM.GroupViewList = function ( editor ){
	var signals = editor.signals;

    var sceneList = new MMUI.Group( editor.groups ).setWidth('100%').setHeight('100%')    
    sceneList.onObjectSelect( function(){
        console.log('ViewportOutliner: objectSelected')
        
    //  SINGLE SELECTION
        // editor.select( sceneList.sObjects[0])

    //  MULTI SELECTION
        editor.select( sceneList.sObjects)

        signals.sceneGraphChanged.dispatch();
    })
    sceneList.onCommand( function(){
        console.log('ViewportOutliner: onCommand')
    })
    sceneList.addMenuItem('Toggle Visibility')
    sceneList.addMenuItem('Delete Object')

    //  only display objects witht the tag control
    sceneList.objectsWithTag = 'control'

    signals.groupAdded.add( function ( group ){
        // console.log('ViewportOutliner: Group added', group)

        //  refresh UI 
        sceneList.update();
    })

    signals.groupContentAdded.add( function ( group, content ){
        // console.log('ViewportOutliner: Group content added', group, content)

        //  refresh UI
        sceneList.update();
    })

    signals.objectSelected.add( function (){
    	// console.log('ViewportOutliner object selected')
        
    //  SINGLE SELECTION
        // sceneList.selectObject( object )
    
    //  MULTI SELECTION
        sceneList.selectObjects( editor.selectedObjects )
        sceneList.update();
    });

    return sceneList;
}