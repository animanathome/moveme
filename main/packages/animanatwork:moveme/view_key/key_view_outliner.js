MM.KeyframeEditorOutliner = function ( editor ){
	var signals = editor.signals;	

	var outliner = new MMUI.GroupScrollList().setWidth( '100%' ).setHeight('100%')//.setFontSize( '12px' )	
	outliner.name = 'animCurveList'

	//	outgoing signals
	//outliner.onChange( function(){console.log('test')})
	outliner.onMaximize( function(){
		console.log('KeyframeEditorOutliner: maxi')
	}) //	when maximizing or minimizing
	outliner.onGroupSelect( groupSelect ) // when selecting a group element
	outliner.onObjectSelect( objectSelect ) // when selecting an object element

	function groupSelect(){
		// console.log('KeyframeEditorOutliner: groupSelect')
		// console.log('\tselected groups', outliner.sGroups.length)

		//	display all of the animCurves from the selected groups
		var i,j;
		var animCurvesToDisplay = []
		for( i = 0, j = outliner.sGroups.length; i < j; i++){
			var sGroup=editor.scene.getObjectByName(outliner.sGroups[i], true )
			if( sGroup !== undefined ){			
				if(sGroup.hasOwnProperty('animCurves')){
					Array.prototype.push.apply(animCurvesToDisplay,sGroup.animCurves)
				}
			}			
		}		
		editor.displayAnimCurves(animCurvesToDisplay)
		signals.keyframeEditorChanged.dispatch()
		
		// var sGroup = editor.scene.getObjectByName( outliner.sGroups[0], true )
		// if( sGroup === undefined ){
		// 	return;
		// }

		// if(sGroup.hasOwnProperty('animCurves')){
		// 	editor.displayAnimCurves( sGroup.animCurves )
		// }else{
		// 	editor.displayAnimCurves( [] )
		// 	// console.log('\t', sGroup.name, 'has no animCurves. Nothing to display.')
		// }
		// signals.keyframeEditorChanged.dispatch()
	}

	function objectSelect(){
		//	here the object directly relate the animCurves that are currently selected
		editor.displayAnimCurves( outliner.sObjects )
		editor.clearSelectionAnimCurves( outliner.sObjects )
		signals.keyframeEditorChanged.dispatch()
	}

	//	incoming singals
    signals.objectSelected.add( function ( object ){
    	//	When an object is selected we'll have to rebuild our content
    	//	Before we can do that we first have to get all of the group
    	//	and object information. Here the groups relate to the selected
    	//	objects and the objects related to the animCurves each of them
    	//	holds
    	// console.log('KeyframeEditorOutliner: object selected ', object)

    	outliner.clear();

		var i, j, k, l;
		if( editor.selectedObjects.length !== 0 ){
			for( i = 0, j = editor.selectedObjects.length; i < j; i++){
				outliner.addGroup( editor.selectedObjects[i].name )

				//	make sure the selected has animCurves
				if(editor.selectedObjects[i].hasOwnProperty('animCurves')){
					for( k = 0, l = editor.selectedObjects[i].animCurves.length; k < l; k++){
						outliner.addObject( editor.selectedObjects[i].name, editor.selectedObjects[i].animCurves[k] )
						// console.log('\t', editor.selected.animCurves[i])						
					}

					// 	BEHAVIOR
					//	select the object by default
					outliner.selectGroup( editor.selectedObjects[i].name, 'add' )
				}
			}
		}		

		outliner.updateUI();		

		//	BEHAVIOR
		//	since we're selecting the added groups by default we need to make sure
		//	it's anim curves get drawn
		groupSelect();
    });

    signals.objectChanged.add( function( object ){
    /*
    	When an object is changed ( channels added or removed ) we 
    	need to update the UI.

    */
		// console.log('KeyframeEditorOutliner: object changed', object)
		if(!editor.selected === null && !editor.selected === undefined){
			if( outliner.hasGroup( editor.selected.name )){
				//	make sure the selected has animCurves
				if(editor.selected.hasOwnProperty('animCurves')){
					for( var i = 0; i < editor.selected.animCurves.length; i++){
						if( ! outliner.hasObject( editor.selected.name, editor.selected.animCurves[i] )){	
							outliner.addObject( editor.selected.name, editor.selected.animCurves[i] )					
						}
					}
				}
			}
		}
		outliner.updateUI();
    })

	signals.animCurveRemoved.add(function ( object ){   
    	outliner.removeObject( object.driven.name, object)
    	outliner.updateUI();
    });

	return outliner;
}