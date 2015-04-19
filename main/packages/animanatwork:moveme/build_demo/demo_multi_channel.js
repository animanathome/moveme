MM.DemoMultiChannelPass = function( editor ){
	//	Pass the value of one channel to another. This allows us to drive
	//	a channel using another one 
	//	1. Toggle visibility of controls
	//	2. Change the positionX value using the sideBar to see it's effect
	var c = new MM.Control();
	c.name = 'driveTxAndRyWithTx'
	c.tag = 'control'
	c.displayRotationAxis = true
	c.controlSize = 10			
	c.controlShape = ''

	//	IMPORTANT to add the animChannels at this point. Otherwise we won't be 
	//	able to ask to hide or remove certain onces ( since we default to all
	//	channel when animChannels is undefined)
	c.setChannelsTranslateAndRotate()
	editor.addObject( c )

	var m = new MM.MultiChannel();
	m.setDriverChannel( c, 'position', 'x' )
	m.addDrivenChannel( c, 'position', 'y' )

	//	WARNING: when setting up the following connection we get the expected
	//  behavior when we directly drive the value using the side bar. We don't
	//	however, when we use the transform manipulator.
	m.addDrivenChannel( c, 'rotation', 'y' )
	editor.step2Nodes.push( m )

	//	hide position channel y since it is driven
	c.removeChannel( 'position', 'y')
	c.removeChannel( 'rotation', 'y')

	var addedGroup = editor.addGroup( 'multiChannel' , 'asset')
	editor.addGroupContent( addedGroup, [c] )	

	editor.controlsVisibility()	
}

MM.DemoMultiChannelShapesPass = function( editor )
{
	//	Showing the different expressions we can use with the multiChannel 
	//	object
	//	1. multiply the driver value with custom value
	//	2. clamp the driver value between 2 values
	function lastFunction()
	{
		var j2 = editor.scene.getObjectByName('joint2', true);
		var j3 = editor.scene.getObjectByName('joint3', true);
		
		//	make sure we pass on a the offset as a THREE.Vector3
		j2.addTarget( new THREE.Vector3(1.0,0.0,0.0), 0, 'test2X')
		j3.addTarget( new THREE.Vector3(1.0,0.0,0.0), 0, 'test3X')

		var c = new MM.Control();
		c.name = 'TxAndTyDriveJoints'
		c.setChannelsTranslate()
		c.setControlShape()
		editor.addObject( c )

		var m = new MM.MultiChannel();
		m.setDriverChannel( c, 'position', 'y' )
		var cDrivenChannelIndex = m.addDrivenChannel( j2, 'shapes', 'test2X' ) 
		m.setDrivenBehavior( cDrivenChannelIndex, 'MULTIPLY', 0.5)
		console.log('Created driven channel ', cDrivenChannelIndex)
		editor.step2Nodes.push( m )	

		var m1 = new MM.MultiChannel();
		m1.setDriverChannel( c, 'position', 'x' )
		var c1DrivenChannelIndex = m1.addDrivenChannel( j3, 'shapes', 'test3X' )
		m1.setDrivenBehavior( c1DrivenChannelIndex, 'CLAMP', 0, 10)
		console.log('Created driven channel ', c1DrivenChannelIndex)
		editor.step2Nodes.push( m1 )	

		var addedGroup = editor.addGroup( 'multiChannel' , 'asset')
		editor.addGroupContent( addedGroup, [c] )	

		editor.controlsVisibility()	
	}

	var assetName = 'skinnedCube'
	var u = new MM.AssetBuild( editor );
	u.addModel('data/'+assetName+'/model/pCube1.obj')
	u.addSkeleton('data/'+assetName+'/skeleton/joint1_skeleton.json')
	u.addSkin('data/'+assetName+'/weights/pCube1_skin.json')
	u.addLast( lastFunction )
	u.build();		
}

MM.DemoMultiChannelMouthPass = function( editor )
{
	//	Mocks up a mouth control driving 4 different shapes using its X, Y
	//	channels.
	function lastFunction()
	{
		var j2 = editor.scene.getObjectByName('joint3', true);

		//	create control setup
		var c = new MM.Control();
		c.name = 'lMouthCtl'
		c.setChannelsTranslate()
		c.setControlShape( 'c','planeX', 5)
		editor.addObject( c )

		var o = new MM.Control();
		editor.addObject( o );	
		o.add( c )
		o.translateZ( - 20 )

		//	create joint shapes
		j2.addTarget( new THREE.Vector3( 0.0, 0.0,-1.0), 0, 'xMin')
		j2.addTarget( new THREE.Vector3( 0.0, 0.0, 1.0), 0, 'xMax')
		j2.addTarget( new THREE.Vector3( 0.0,-1.0, 0.0), 0, 'yMin')
		j2.addTarget( new THREE.Vector3( 0.0, 1.0, 0.0), 0, 'yMax')

		//	connect control to shapes
		//	hook up Y up and down
		var m1 = new MM.MultiChannel();
		m1.setDriverChannel( c, 'position', 'y' )
		
		var c1DrivenChannelIndex = m1.addDrivenChannel( j2, 'shapes', 'yMin' )
		m1.setDrivenBehavior( c1DrivenChannelIndex, 'CLAMP_MULTIPLY', -5, 0, -1)
		
		var c2DrivenChannelIndex = m1.addDrivenChannel( j2, 'shapes', 'yMax' )
		m1.setDrivenBehavior( c2DrivenChannelIndex, 'CLAMP_MULTIPLY', 0, 5, 1)

		editor.step2Nodes.push( m1 )
		
		//	hook up X in and out
		var m2 = new MM.MultiChannel();
		m2.setDriverChannel( c, 'position', 'z' )
		
		c1DrivenChannelIndex = m2.addDrivenChannel( j2, 'shapes', 'xMin' )
		m2.setDrivenBehavior( c1DrivenChannelIndex, 'CLAMP_MULTIPLY', -5, 0, -1)

		c2DrivenChannelIndex = m2.addDrivenChannel( j2, 'shapes', 'xMax' )
		m2.setDrivenBehavior( c2DrivenChannelIndex, 'CLAMP_MULTIPLY', 0, 5, 1)

		editor.step2Nodes.push( m2 )

		var addedGroup = editor.addGroup( 'multiChannel' , 'asset')
		editor.addGroupContent( addedGroup, [c] )	

		editor.controlsVisibility()	
	}

	var assetName = 'skinnedCube'
	var u = new MM.AssetBuild( editor );
	u.addModel('data/'+assetName+'/model/pCube1.obj')
	u.addSkeleton('data/'+assetName+'/skeleton/joint1_skeleton.json')
	u.addSkin('data/'+assetName+'/weights/pCube1_skin.json')
	u.addLast( lastFunction )
	u.build();
}

MM.DemoAnimatableChannels = function( editor ){
	//	The following shows us how we add and remove animatable channels
	//	and their groups. Further more we also show how we can create 
	//	and animate custom channels. We do this using our MultiChannel
	//	object.

	//	create control setup
	var c = new MM.Control();
	c.name = 'globalCtl'
	c.tag = 'control'
	c.controlSize = 5			
	c.controlShape = 'cube'
	editor.addObject( c )

	var d = new MM.Control();
	d.name = 'drivenCtl'
	d.tag = 'control'
	d.controlSize = 2.5			
	d.controlShape = 'cube'
	editor.addObject( d )

	// edit the animatable channels	
	c.addChannel('position', 'x')
	c.addChannel('position', 'y')
	// console.log('animChannels', c.animChannels)		
	// console.log( 'Position X is animatable', c.isAnimatable('position', 'x'))
	// console.log( 'Position W is not animatable', c.isAnimatable('position', 'w'))
	c.removeChannel('position', 'y')
	// console.log('animChannels', c.animChannels)	
	c.removeChannelGroup('position')
	// console.log('animChannels', c.animChannels)	
	c.addChannel('custom', 'heelPivot')
	c.custom = {}
	c.custom['heelPivot'] = 0.0;

	var m2 = new MM.MultiChannel();
	m2.setDriverChannel( c, 'custom', 'heelPivot' )		
	m2.addDrivenChannel( d, 'position', 'y' )
	editor.step2Nodes.push( m2 )

	var thisAnimCurve = new MM.AnimCurve( c, ['custom', 'heelPivot'])
	c.addAnimCurve( thisAnimCurve )
	editor.addAnimCurve( thisAnimCurve )
	thisAnimCurve.add( 0, 0 )
	thisAnimCurve.add( 10, 5 )
	thisAnimCurve.add( 20, 0 )
	thisAnimCurve.it = [1,1,1]
	thisAnimCurve.ot = [1,1,1]

	editor.controlsVisibility()	
}