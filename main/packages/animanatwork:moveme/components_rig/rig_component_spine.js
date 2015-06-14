MM.SpineComponent = function(parameters){
	MM.RigComponent.call(this)

	this.joints = ['Spine0', 'Spine1', 'Spine2', 'Spine3', 'cSpine4', 'cNeck0', 'cNeck1', 'cNeck2']
    this.controlNames = ['body', 'bodySub', 'hip', 'chest', 'chestSub', 'head']
    this.controlSizes = [5.0, 4.0, 3.0, 3.0, 3.0, 3.0, 5.0]
    this.controlShapes = ['plane', 'plane', 'cube', 'cube', 'cube', 'cube']
    this.setValues(parameters)
    return this;
}

MM.SpineComponent.prototype = Object.create(MM.RigComponent.prototype)

MM.SpineComponent.prototype.build = function(){
	console.log('SpineComponent', this)

	var nJ = this.joints.length 
	var joints = this.getJoints()
	var jointPositions = this.getJointPositions()

	//	global control
	var globalPos = jointPositions[this.joints[0]]
	console.log('\tglobal position', globalPos)

	var global = MM.createControlGroup(this.side, this.namespace
		+this.controlNames[0], this.controlShapes[0])	
	global.zero.position.set(globalPos.x, globalPos.y, globalPos.z)
	global.control.setChannelsTranslateAndRotate()
	global.control.controlSize = this.controlSizes[0]
	
	this.editor.addObject(global.zero)
	this.editor.addSelectables([global.control])
	this.addControl( global.control, this.controlNames[0])

	//	global sub control
	var globalSub = MM.createControlGroup(this.side, this.namespace
		+this.controlNames[1], this.controlShapes[1])	
	globalSub.zero.position.set(globalPos.x, globalPos.y, globalPos.z)
	globalSub.control.setChannelsTranslateAndRotate()
	globalSub.control.controlSize = this.controlSizes[1]
	
	this.editor.addObject(globalSub.zero)
	global.control.setChild( globalSub.zero)
	this.editor.addSelectables([globalSub.control])
	this.addControl(globalSub.control, this.controlNames[1])

	//	hip control
	var hipPos = jointPositions[this.joints[0]]
	console.log('\thip position', hipPos)

	var hip = MM.createControlGroup(this.side, this.namespace
		+this.controlNames[2], this.controlShapes[2])
	hip.zero.position.set(hipPos.x, hipPos.y, hipPos.z)
	hip.control.setChannelsTranslateAndRotate()
	hip.control.controlSize = this.controlSizes[2]
	
	this.editor.addObject(hip.zero)
	globalSub.control.setChild(hip.zero)
	this.editor.addSelectables([hip.control])
	this.addControl(hip.control, this.controlNames[2])

	//	chest control
	var chestPos = jointPositions[this.joints[3]]
	console.log('\tchest position', chestPos)

	var chest = MM.createControlGroup(this.side, this.namespace
		+this.controlNames[3], this.controlShapes[3])	
	chest.zero.position.set(chestPos.x, chestPos.y, chestPos.z)
	chest.control.setChannelsTranslateAndRotate()
	chest.control.controlSize = this.controlSizes[3]
	
	this.editor.addObject(chest.zero)
	globalSub.control.setChild(chest.zero)
	this.editor.addSelectables([chest.control])
	this.addControl( chest.control, this.controlNames[3])

	//	chest sub control
	var chestSubPos = jointPositions[this.joints[4]]
	console.log('\tchest sub position', chestSubPos)

	var chestSub = MM.createControlGroup(this.side, this.namespace
		+this.controlNames[4], this.controlShapes[4])
	chestSub.zero.position.set(chestSubPos.x, chestSubPos.y, chestSubPos.z)
	chestSub.control.setChannelsTranslateAndRotate()
	chestSub.control.controlSize = this.controlSizes[4]
	
	this.editor.addObject(chestSub.zero)
	chest.control.setChild(chestSub.zero)
	this.editor.addSelectables([chestSub.control])
	this.addControl(chestSub.control, this.controlNames[4])

	//	head control
	var headPos = jointPositions[this.joints[7]]
	console.log('\thead sub position', headPos)

	var head = MM.createControlGroup(this.side, this.namespace
		+this.controlNames[5], this.controlShapes[5])
	head.zero.position.set(headPos.x, headPos.y, headPos.z)
	head.control.setChannelsTranslateAndRotate()
	head.control.controlSize = this.controlSizes[5]
	
	this.editor.addObject(head.zero)
	// globalSub.control.setChild(head.zero)
	this.editor.addSelectables([head.control])
	this.addControl(head.control, this.controlNames[5])


//	back solver
	allJoints = this.getJointsAsArray()
	backJoints = allJoints.slice(0, 4)
	neckJoints = allJoints.slice(4, 8)

	var backSolver = new MM.CurveSolver();
	backSolver.name=this.getName('backSolver')
	console.log('\tback solver name', backSolver.name)
	console.log('\tback joints', backJoints)
	backSolver.setJoints(backJoints)
	backSolver.setRootControl(hip.control)
	backSolver.setTipControl(chest.control)	
	backSolver.followBottomControl = true
	this.editor.addObject(backSolver)

	var neckSolver = new MM.CurveSolver();
	neckSolver.name=this.getName('neckSolver')
	console.log('\tneck solver name', neckSolver.name)
	console.log('\tneck joints', neckJoints)
	neckSolver.setJoints(neckJoints)
	neckSolver.setRootControl(chestSub.control)
	neckSolver.setTipControl(head.control)	
	neckSolver.followBottomControl = true
	this.editor.addObject(neckSolver)

	this.editor.addGroupContent(this.assetGroup, [global.control, globalSub.control, chest.control, chestSub.control, head.control])

	return this;
}