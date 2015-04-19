MM.Menubar.Edits = function( editor ){
	var signals = editor.signals;

	var menuGrp = new MMUI.MenuGrp('Edit');	

//	undo - redo	
	var undoItem = new MMUI.MenuItem('Undo').onClick( function(){
		editor.undo()
	}).addShortcut('Shift+z')
	menuGrp.add( undoItem )

	var redoItem = new MMUI.MenuItem('Redo').onClick( function(){
		editor.redo()
	}).addShortcut('Alt+z')
	menuGrp.add( redoItem )

	var flushUndoItem = new MMUI.MenuItem('Flush Undo').onClick( function(){
		editor.flushUndoStack();
	})
	menuGrp.add( flushUndoItem )

	var sepItem1 = new MMUI.MenuDivider();
	menuGrp.add( sepItem1 )
	
//	manipulation tools
	var selectItem = new MMUI.MenuItem('Select Tool').onClick( function(){
		signals.manipModeChange.dispatch('select')
	}).addShortcut('q')
	menuGrp.add( selectItem )

	var moveItem = new MMUI.MenuItem('Move Tool').onClick( function(){
		signals.manipModeChange.dispatch('translate')
	}).addShortcut('w')
	menuGrp.add( moveItem )

	var rotateItem = new MMUI.MenuItem('Rotate Tool').onClick( function(){
		signals.manipModeChange.dispatch('rotate')
	}).addShortcut('e')
	menuGrp.add( rotateItem )

	var scaleItem = new MMUI.MenuItem('Scale Tool').onClick( function(){
		signals.manipModeChange.dispatch('scale')
	}).addShortcut('r')
	menuGrp.add( scaleItem )

//	delete 
	var sepItem2 = new MMUI.MenuDivider();
	menuGrp.add( sepItem2 )

	var deleteItem = new MMUI.MenuItem('Delete').onClick( function(){
		editor.deleteSelected()		
	}).addShortcut('delete')
	menuGrp.add( deleteItem )

	return menuGrp;
}