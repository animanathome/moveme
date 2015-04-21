MM.Sidebar = function ( editor, mdom){
    var container = new MMUI.Panel();
    // container.setPosition( 'absolute' );
    container.setClass( 'sidebar' );    
    
//  ChannelBox
    var channelBox = new MMUI.CollapsiblePanel()
    channelBox.addStatic( new MMUI.Text( 'Channel Box' )).collapse();        
    channelBox.add( new MM.Sidebar.ChannelBox( editor, mdom) );      

    //  ensures the high of the channel box stays consistent
    //  whether or not something is selected or not 
    //  this avoids from the other ui element from jumping
    //  up and down 
    channelBox.onCollapsedChange( function( boolean ){
        console.log('collapsed', boolean)
        if( boolean === false ){
            channelBox.setHeight('350px');
        }else{
            channelBox.setHeight(null);
        }
    });
    //  NOTE: it's important we expaned the panel once we defined the callback. This we ensure we get the proper behavior (height)
    channelBox.expand();
    
    container.add( channelBox );

//  AssetOutliner
    var assetOutliner = new MMUI.CollapsiblePanel();
    assetOutliner.addStatic( new MMUI.Text('Asset Outliner')).collapse();
    var filters = new MMUI.Tab().setPosition('absolute').setMarginLeft('5px')
    filters.addTab( 'asset', '/ui/asset.gif' )
    filters.addTab( 'material', '/ui/material.gif' )
    filters.addTab( 'light', '/ui/light.gif' )
    filters.addTab( 'camera', '/ui/camera.gif' )
    filters.setWidth( 185 )
    filters.build()
    filters.onTabSelect( function(){
        viewportList.gt = filters.activeTab;
        viewportList.update();
    })

    var list = new MMUI.Panel();
    list.dom.style.borderTopStyle = 'none'
    list.setMarginTop('22px').setMarginLeft('5px').setMarginRight('5px')
    container.add( list ) 

    var viewportList = new MM.GroupViewList( editor )
    viewportList.setHeight('250px').setWidth('100%')//.setPosition('absolute')
    list.add( viewportList )

    assetOutliner.add( filters )   
    assetOutliner.add( list )       
    container.add( assetOutliner )     

// AssetSelect
    var assetSelect = new MMUI.CollapsiblePanel();
    assetSelect.addStatic( new MMUI.Text('Asset Selector')).collapse();    
    assetSelect.add( new MM.AssetSelect( editor ) );     
    container.add( assetSelect );

// //  ParentMaster
//     var parentMaster = new MMUI.CollapsiblePanel()
//     parentMaster.addStatic( new MMUI.Text('Parent Master')).collapse();
//     parentMaster.add( new MM.ParentMasterView( editor ) )    
//     container.add( parentMaster );

    return container;
}

MM.Sidebar.ChannelBox = function( editor, mdom ){
    
    var signals = editor.signals;
    var mdom = mdom; // master dom - replaces document
	
    var scope = this;
    this.channelValueUIs = []
    
    this.menu = undefined
    this.selectedChannel = undefined
    this.selectedMenuItem = undefined

    var container = new MMUI.Panel().setClass('channelbox');
    
    var popupYOffset = 50;
    // var keyedChannelColor = 'rgb(255, 111, 111)';

    var commandEvent = document.createEvent( 'HTMLEvents' );
    commandEvent.initEvent( 'command', true, true );  

    var onMouseDown = function ( event ){
        // console.log('Sidebar.ChannelBox: onMouseDown')

        if( event.button === 2 ){
            // console.log('\tRight mouse button')
            if( scope.menu === undefined ){
                // console.log('\tNo option menu available')
                return 
            }

            //  only show the popup menu when we're above a channel (name of value)           
            if ( event.target.id !== "channel-name" && event.target.id !== "channel-value")
                return 

            //  we should always have 3 parts channel + channelGroup + channelName
            var attrSlices = event.target.parentNode.id.split('-');
            if( attrSlices.length !== 3 ){
                // console.log('\tBad parent info, expecting 3 elements, got', attrSlices.length)
                return
            }
            scope.selectedChannel = [attrSlices[1], attrSlices[2]];

            //  get the world position of the channel box
            var parentPosition = MM.elementWorldPosition( scope.menu.dom.parentNode);

            scope.menu.setDisplay('block');
            scope.menu.dom.style.left = event.clientX-parentPosition.x+'px';
            scope.menu.dom.style.top = event.clientY-parentPosition.y+popupYOffset+'px';
            
            mdom.addEventListener( 'mouseup', onMouseUp, false );
        }
    }

    var onMouseUp = function ( event ){
        // console.log('dSidebar.ChannelBox: onMouseUp')

        if( event.button === 2 ){
            if( scope.menu === undefined ){
                return;
            }

            scope.selectedMenuItem = event.target.innerText;            
            container.dom.dispatchEvent( commandEvent );  

            scope.menu.setDisplay('none');
            mdom.removeEventListener( 'mouseup', onMouseUp, false );            
        }
    }

    // container.dom.addEventListener( 'command', onCommand, false );  
    mdom.addEventListener( 'mousedown', onMouseDown, false );

    function rebuildMenu(){
        console.log('dSidebar.ChannelBox: rebuildMenu')
        
        var listOptions = new MMUI.Panel().setClass('sidebar-popup');
        container.add( listOptions );
        scope.menu = listOptions;

        var actions = [   'Key Channel'
                        , 'Clear Channel'
                        // , 'Reset Channel'
                        // , 'Mute Channel'
                        // , 'Unmute Channel'
                        ]
        var i, j;
        for( i = 0, j = actions.length; i < j; i++){            
            listOptions.add( new MMUI.Panel().setTextContent(actions[i])); 
        }
    }

    function rebuildUI(){
        var object;
        if ( editor.selectedObjects.length !== 0 ){            
            object = editor.selectedObjects[0];
        }else{
            object = null;
        }
        // console.log('rebuildUI', object)
        // console.log('\tusing first element from', editor.selectedObjects)

    //  -------------------------------------    	
        //  reset the list of channelValueUI
        scope.channelValueUIs = []

    	//	remove all children
    	while (container.dom.firstChild) {
    		container.dom.removeChild(container.dom.firstChild);
		}

    	if( object !== null ){
    		container.setDisplay('block')            

    		// console.log('adding name element')
    		var objectNameRow = new MMUI.Panel()
            // objectNameRow.dom.style.overflow = 'hidden'
            // objectNameRow.dom.style.width = '100%'
			objectNameRow.add( new MMUI.Text( 'Name' ).setClass('sidebar-text'));
			objectNameRow.add( new MMUI.Input().setClass('channelbox-object').setValue( object.name) );
			container.add( objectNameRow ); 

    		var channelGroups = object.getChannels();
    		
    		//	iterate over the different channel groups
    		for( var i = 0, l = channelGroups.length; i < l; i++){
    			// console.log('\t', channelGroups[i][0])

    			var channelGroup = channelGroups[i][0];
    			var channels = channelGroups[i][1];
    			for( var j = 0, k = channels.length; j < k; j++){                  
                    var channelName = object.getNiceName(channelGroup, channels[j]);

    				//	NOTE: here we store the name of the attribute in the id. This will allow us to easily recove the attribute we need to drive based on the id.
				    var channelRow = new MMUI.Panel().setClass('sidebar-group').setId('channel-'+channelGroup+'-'+channels[j]);//.setFontSize('14px');


                    var channelText = new MMUI.Text( channelName ).setClass('sidebar-text').setId('channel-name');

				    channelRow.add(channelText);

                    var ChannelValueUI;
                    var valueGroup;                
                    // console.log('\tChannel Type', object.getChannelType( channelGroup, channels[j] ))
                    switch( object.getChannelType( channelGroup, channels[j] )){
                        case "number": 
                            // console.log('\tCreating number ui element')
                            ChannelValueUI = new MMUI.Number(0); 
                            valueGroup = object[channelGroup]
                            // console.log('\tUI Element', ChannelValueUI)
                        break;

                        case "boolean":
                            // console.log('\tCreating boolean')
                            ChannelValueUI = new MMUI.Checkbox();
                            
                            valueGroup = object[channelGroup]                            
                        break;
                        
                        case "enum": 
                            // console.log('\tCreating enum ui element')
                            ChannelValueUI = new MMUI.Select();
                            ChannelValueUI.setOptions( 
                                object.getChannelRange( channelGroup, channels[j] ));

                            //  WARNING: here we assume we only have a enum channel
                            //  in case of a euler object
                            valueGroup = object[channelGroup]
                            // console.log('\tvalueGroup', valueGroup)
                        break;

                        case "color":
                            ChannelValueUI = new MMUI.Color();
                            valueGroup = object[channelGroup]
                        break;
                    }
                    // console.log('\tOut of switch', ChannelValueUI)
                    //  style our value element
                    //  NOTE: here we use the id
                    ChannelValueUI.setId('channel-value').setClass('sidebar-input');

                    channelRow.add( ChannelValueUI );
                    container.add( channelRow );

                    //  collect the created valueUI object 
                    //  together with channelGroup and channel we're driving
                    scope.channelValueUIs.push( ChannelValueUI )
                    ChannelValueUI.channelGroup = channelGroup
                    ChannelValueUI.channel = channels[j]

                    //  check whether or not the channel is animated
                    if( object.isChannelAnimated ( [channelGroup, channels[j]]) ){
                        // ChannelValueUI.setBackgroundColor( keyedChannelColor );
                        ChannelValueUI.addClass('keyed')
                    }

                    //  pass the channel value to the UI element
                    // console.log('\tvalueGroup:', valueGroup)
                    
                    if( valueGroup instanceof THREE.Euler ){
                        // console.log('\t-->'+channels[j])
                        if( channels[j] === 'order' ){
                            ChannelValueUI.setSelectedText(valueGroup['_'+channels[j]])
                        }else{
                            ChannelValueUI.setValue( valueGroup['_'+channels[j]] )
                        }
                    }
                    else{
                        if( valueGroup === undefined ){
                            // console.log('Unable to find channel group', channelGroup, 'on', object)
                            break;
                        }

                        if(!valueGroup.hasOwnProperty(channels[j])){
                            // console.log('Unable to find channel', channelGroup, channels[j], 'on', object)
                            break;
                        }

                        //  not sure if this still needs to be supported
    				    if( valueGroup[channels[j]].constructor == THREE.Number ){
    				    	ChannelValueUI.setValue( valueGroup[channels[j]].value )
                        }else if(channels[j] === 'visibility'){
                            ChannelValueUI.setValue( object.getVisibility())
                        }else if(channels[j] === 'color'){
                            console.log('\tpassing on color', valueGroup[channels[j]])
                            ChannelValueUI.setHexValue( valueGroup[channels[j]].getHex())
    				    }else{
    				    	ChannelValueUI.setValue( valueGroup[channels[j]] )
    				    }
                    }
                                    

				    // http://stackoverflow.com/questions/1451009/javascript-infamous-loop-issue
				    // have a look on the suggested solution for this as our current implementation
				    // appears to be inefficient
           

                    // record undo channel commands
                    ChannelValueUI.onStart(
                        function( ui, channelGroup, channel ){
                            return function(){
                                editor.getUndoDataForObjectValue(object, 
                                    channelGroup, channel)                                
                            }
                        }(ChannelValueUI, channelGroup, channels[j])
                    )
                    
                    //  do channel commands
				    ChannelValueUI.onChange(
                        function( ui, channelGroup, channel ){	

						return function(){
							console.log('onChange:', channelGroup, channel)

                        //  NEW
                            var i, j;
                            var prevValue, curValue, offValue, object, thisChannelGroup;
                            object = editor.selectedObjects[0];
                            thisChannelGroup = object[channelGroup]

                            console.log('\tchannelGroup', thisChannelGroup)

                        //  DRIVEN CHANNEL
                            if( thisChannelGroup[channel].constructor === THREE.Number){
                                console.log('\ttype Number')

                                prevValue = thisChannelGroup[channel].value
                                
                                thisChannelGroup[channel].value = ui.getValue()

                                offValue = thisChannelGroup[channel].value - prevValue;

                                for(i = 1, j = editor.selectedObjects.length; i < j; i++){
                                    object = editor.selectedObjects[i];
                                    thisChannelGroup = object[channelGroup]
                                    curValue = thisChannelGroup[channel].value
                                    thisChannelGroup[channel].value = curValue + offValue
                                }

                        //  EULER CHANNEL
                            }else if( thisChannelGroup instanceof THREE.Euler ){
                                console.log('\ttype Euler')

                                prevValue = thisChannelGroup[channel]
                                var value = ui.getValue();
                                    
                                switch( channel ){
                                    case "x": case "y": case "z":
                                        thisChannelGroup[channel] = value ; 

                                        offValue = thisChannelGroup[channel] - prevValue;

                                        for(i = 1, j = editor.selectedObjects.length; i < j; i++){
                                            object = editor.selectedObjects[i];
                                            thisChannelGroup = object[channelGroup]
                                            curValue = thisChannelGroup[channel]
                                            thisChannelGroup[channel] = curValue + offValue
                                        }
                                    break;
                                    
                                    case "order":
                                        value = ui.getSelectedText();                                        
                                        console.log('\torder', value)
                                            
                                        thisChannelGroup.order = value;
                                        thisChannelGroup._updateQuaternion();

                                        offValue = thisChannelGroup.order 
                                        for(i = 1, j = editor.selectedObjects.length; i < j; i++){
                                            object = editor.selectedObjects[i];
                                            thisChannelGroup = object[channelGroup]                                            
                                            thisChannelGroup.order = offValue
                                        }
                                    break;
                                }                                                                                                
                                object.setRotationFromEuler( object.rotation )
                    //  CAMERA
                        //  FOCUSLENGTH CHANNEL
                            }else if( channel === 'focusLength'){
                                console.log('\ttype focusLength')
                                console.log('\t\tvalue', ui.getValue())
                                
                                //  pass on the value to our custom channel object
                                thisChannelGroup[channel] = ui.getValue(); 

                                //  pass on the value to the actual object
                                object.setLens( ui.getValue(), object.custom.frameHeight)
                            }else if( channel === 'frameHeight'){

                                //  pass on the value to our custom channel object
                                thisChannelGroup[channel] = ui.getValue(); 

                                //  pass on the value to the actual object
                                object.setLens( object.custom.focusLength, ui.getValue())
                            }else if( channel === 'near' || channel === 'far'){
                                thisChannelGroup[channel] = ui.getValue(); 
                            
                                object[channel] = ui.getValue();
                                object.updateProjectionMatrix();

                        //  VISIBILITY CHANNEL
                            }else if( channel === 'visibility'){
                                console.log('\ttype visibility')
                                console.log('\t\tvalue', ui.getValue())

                                //  Since visiblity is a boolean value we need a special method 
                                //  to have it properly propogate it's value
                                object.setVisibility(ui.getValue())

                                offValue = ui.getValue()

                                for(i = 1, j = editor.selectedObjects.length; i < j; i++){
                                    object = editor.selectedObjects[i];
                                    object.setVisibility(offValue);
                                }
                            }else if( channel === 'color'){
                                /*
                                Since color is an object we can just directly manipulate it
                                */
                                console.log('\ttype color')
                                console.log('\t\tvalue', ui.getHexValue())

                                thisChannelGroup[channel].setHex( ui.getHexValue())

                        //  ENUM
                            }else if( channel === 'parentMaster' 
                                   || channel === 'parentSwitch'){
                                console.log('\ttype enum')
                                console.log('\t\tvalue', ui.getValue())

                                thisChannelGroup[channel] = ui.getValue(); 

                        //  FLOAT
                            }else{
                                console.log('\ttype default')

                                prevValue = thisChannelGroup[channel]

                                thisChannelGroup[channel] = ui.getValue(); 

                                console.log('\t\tsetting', channel, 'to', ui.getValue())

                                offValue = thisChannelGroup[channel] - prevValue   

                                for(i = 1, j = editor.selectedObjects.length; i < j; i++){
                                    object = editor.selectedObjects[i];
                                    thisChannelGroup = object[channelGroup]
                                    curValue = thisChannelGroup[channel]
                                    thisChannelGroup[channel] = curValue + offValue
                                }                             
                            }

                        //  OBJECT has been changed
                            signals.objectChanged.dispatch( object );
						}
				    }(ChannelValueUI, channelGroup, channels[j])
                  )
    			} 
    		}
            //  create popup menus
            rebuildMenu();
    	}else{
    		container.setDisplay('none')
    	}
    }

    function updateUI(){
        // console.log('dSidebar: updateUI')      
        // console.log(scope.channelValueUIs)

        if( editor.selectedObjects.length === 0){
            return;
        }

        var i, l;
        var channelGroup, channel;
        
    //  SINGLE SELECTION
        // var object = editor.selected

    //  MULTI SELECTION - WIP        
        var object = editor.selectedObjects[0];
        // console.log('\tusing multi selection object', object)

        // console.log('\tobject:', object.name)
        // console.log('\tthis', object)
        for( i = 0, l = scope.channelValueUIs.length; i < l; i++){
            channelGroup = scope.channelValueUIs[i].channelGroup;
            channel = scope.channelValueUIs[i].channel;

            // console.log('\t', i, channelGroup)
            // console.log('\t', i, channel)

            var thisChannelGroup = object[channelGroup]

            // console.log('\t', i, 'value', thisChannelGroup[channel])
            if( thisChannelGroup instanceof THREE.Euler ){
                // console.log('\tEuler:', thisChannelGroup, channel)
                if( channel === 'order'){
                    scope.channelValueUIs[i].setSelectedText( thisChannelGroup[channel] )
                }else{
                    scope.channelValueUIs[i].setValue( thisChannelGroup[channel] )
                }
            }else{
                if(!thisChannelGroup.hasOwnProperty(channel)){
                    console.log('Unable to find channel', channelGroup, channel, 'on', object, ':', thisChannelGroup)
                    return
                }

                if( thisChannelGroup[channel].constructor == THREE.Number ){
                    scope.channelValueUIs[i].setValue( thisChannelGroup[channel].value )
                }else if(channel === 'visibility'){
                    //  Since visiblity is a boolean value we need a special method 
                    //  to have it properly propogate it's value
                    scope.channelValueUIs[i].setValue( object.getVisibility() )
                }else if(channel === 'color'){                    
                    //  Since color is an object we can just directly manipulate it                    
                    scope.channelValueUIs[i].setHexValue( thisChannelGroup[channel].getHex() )
                }else{
                    scope.channelValueUIs[i].setValue( thisChannelGroup[channel] );
                }
            }
        }
    }

    //  run selected command from popup menu
    container.dom.addEventListener( 'command', function(){
        // console.log('Sidebar.command')
        // console.log('\taction', scope.selectedMenuItem)
        // console.log('\tattr', scope.selectedChannel)

        switch(scope.selectedMenuItem){
            case "Key Channel":
                editor.keySelectedObjectsChannels([scope.selectedChannel]);
            break;

            case "Clear Channel":
                editor.clearSelectedObjectsChannels([scope.selectedChannel])
            break;

            case "Reset Channel":
            break;
        }

    });

    signals.objectSelected.add( function (){
        // console.log('DSidebar: objectSelected')
        rebuildUI();
    });

    signals.objectChanged.add( function (){
        // console.log('sidebar object changed')
        // if ( object !== editor.selected ) return;
        updateUI();
    });      

    signals.objectRefresh.add( function(){
        console.log('Sidebar.objectRefresh')
        updateUI();
    });

    signals.keyframeEditorKeysUpdated.add( function () {
        updateUI();
    });

    signals.keyframeEditorTangentUpdated.add( function () {
        updateUI();
    })

    return container;
};