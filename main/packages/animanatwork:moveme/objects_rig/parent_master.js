MM.ParentMaster = function(){
	MM.Spaceswitch.call( this );

	this.objectType = 'ParentMaster'
    this.channelName = 'parentMaster'

	this.addChannel( 'custom' , this.channelName )
	this.custom = {'parentMaster': ''} 	
}

MM.ParentMaster.prototype = Object.create( MM.Spaceswitch.prototype );

MM.ParentMasterView = function( editor )
{
	var signals = editor.signals;
	/*
	creation:
		1. select asset we want to be driven
		2. select control we want to be driven
		3. select asset we to use to drive our control
		4. select control we to use to drive our control
		5. create spaceswitch

	edit ( add or remove )
		1. select asset we want to edit
		2. select spaceswitch we want to edit

	edit ( key )
		1. select asset we want to edit

	edit ( update matrix )

	*/
	var container = new MMUI.Panel();
	var scope = this;

	// driver
	var driverContainer = new MMUI.Panel();
	driverContainer.setPadding('5px')
	container.add( driverContainer )

	var driverText = new MMUI.Text('Driver').setClass('sidebar-text')
	driverContainer.add( driverText)

	var driverList = new MMUI.Select().setClass('sidebar-input')
	driverContainer.add( driverList );

	var driverControlContainer = new MMUI.Panel();
	driverControlContainer.setPadding('5px')	
	container.add( driverControlContainer )

	var driverControl = new MMUI.Text('Control').setClass('sidebar-text')
	driverControlContainer.add( driverControl );

	var driverControlList = new MMUI.Select().setOptions(["none"]).setClass('sidebar-input')
	driverControlContainer.add( driverControlList );

	driverList.onChange( function(){
		console.log('ParentMaster: driver change')

		var sAssetName = driverList.getValue();
		console.log('\tSelected', sAssetName)
		var sAsset = editor.getAssetByName( sAssetName )
		if( sAsset !== undefined ){
			driverControlList.setOptions( sAsset.getControlNames() )
		}
	})

	//	driven
	var drivenContainer = new MMUI.Panel();
	drivenContainer.setPadding('5px')
	container.add( drivenContainer )

	var drivenText = new MMUI.Text('Driven').setClass('sidebar-text')
	drivenContainer.add( drivenText)

	var drivenList = new MMUI.Select().setClass('sidebar-input')
	drivenContainer.add( drivenList );	

	var drivenControlContainer = new MMUI.Panel();
	drivenControlContainer.setPadding('5px')
	container.add( drivenControlContainer )

	var drivenControl = new MMUI.Text('Control').setClass('sidebar-text')
	drivenControlContainer.add( drivenControl );

	var drivenControlList = new MMUI.Select().setOptions(["none"]).setClass('sidebar-input')
	drivenControlContainer.add( drivenControlList );

	drivenList.onChange( function(){
		console.log('ParentMaster: driven change')

		var sAssetName = drivenList.getValue();
		console.log('\tSelected', sAssetName)
		var sAsset = editor.getAssetByName( sAssetName )

		if( sAsset !== undefined ){
			drivenControlList.setOptions( sAsset.getControlNames() )
		}
	})

	// set key or edit key
	var functionContainer = new MMUI.Panel();
	functionContainer.setPadding('5px')
	container.add( functionContainer )


	//	Add a space for the current space
	var setBtn = new MMUI.Button('Add Space').onClick( function(){
		console.log('ParentMaster: Add Space onClick')

		var drAssetName = driverList.getValue();
		var drControl = driverControlList.getSelectedText();

		console.log('\tdriver asset:', drAssetName)
		console.log('\tdriver control:', drControl)

		var dnAssetName = drivenList.getValue();
		var dnControl = drivenControlList.getSelectedText();

		console.log('\tdriven asset:', dnAssetName)
		console.log('\tdriven control:', dnControl)

		//	get the objects
		var driver = editor.scene.getObjectByName( drControl , true );
		if( driver === undefined ){
			console.log('\tunable to find', drControl)
			return 
		}

		var driven = editor.scene.getObjectByName( dnControl, true );
		if( driven === undefined ){
			console.log('\tunable to find', dnControl)
			return 
		}

		// check if we already have a parentMaster spaceswitch node
		// if so, reuse it, if not create one
		if( driven.parent instanceof THREE.ParentMaster ){
			console.log('\tdriven already has a parentMaster node')

			var parentMaster = driven.parent;
			if(!parentMaster.hasSpace( driver )){
				parentMaster.addSpace( driver )
			}

		}else{
			console.log('\tadding parentMaster node to', driven)
			parentMaster = driven.addInbetween(driven.name+'PM', 'ParentMaster')			

			parentMaster.addSpace( driver )
			parentMaster.addSpaceswitchChannel( driven )
		}

	})
	functionContainer.add( setBtn )

	var updateBtn = new MMUI.Button('Update Space').onClick( function(){
		console.log('Yet to be implemented')
	})
	functionContainer.add( updateBtn )

    signals.assetAdded.add( function() {
        console.log('ParentMaster: assetAdded')
        driverList.setOptions( editor.getNamespaceFromAssetObjects());
        drivenList.setOptions( editor.getNamespaceFromAssetObjects());
    })

    signals.assetRemoved.add( function() {
        console.log('ParentMaster: assetRemoved')
        driverList.setOptions( editor.getNamespaceFromAssetObjects());
        drivenList.setOptions( editor.getNamespaceFromAssetObjects());
    })


	return container;
}