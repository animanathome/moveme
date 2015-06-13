MM.TentacleComponent = function(parameters){
	MM.RigComponent.call(this)

	this.joints = ['Spine0', 'Spine1', 'Spine2', 'Spine3']
    this.controlNames = ['global', 'tip']

    this.setValues(parameters)
    return this;
}

MM.TentacleComponent.prototype = Object.create(MM.RigComponent.prototype)

MM.TentacleComponent.prototype.build = function(){
	console.log('TentacleComponent', this)

	var nJ = this.joints.length 
	var joints = this.getJoints()
	var jointPositions = this.getJointPositions()
	
//	root control
	var rootPos = jointPositions[this.joints[0]]
	console.log('\troot position', rootPos)

	var root = MM.createControlGroup(this.side, this.namespace
		+this.controlNames[0])	
	root.zero.position.set(rootPos.x, rootPos.y, rootPos.z)
	root.control.setChannelsTranslateAndRotate()
	
	this.editor.addObject(root.zero)
	this.editor.addSelectables([root.control])
	this.addControl( root.control, this.controlNames[0])

//	tip control
	var tipPos = jointPositions[this.joints[nJ-1]]
	console.log('\ttip position', tipPos)

	var tip = MM.createControlGroup(this.side, this.namespace
		+this.controlNames[1])	
	tip.zero.position.set(tipPos.x, tipPos.y, tipPos.z)
	tip.control.setChannelsTranslateAndRotate()
	
	this.editor.addObject(tip.zero)
	this.editor.addSelectables([tip.control])
	this.addControl( tip.control, this.controlNames[1])

	this.editor.addGroupContent(this.assetGroup, [tip.control, root.control])

//	curve solver
	var solver = new MM.CurveSolver();
	solver.name=this.getName('solver')
	console.log('\tsolver name', solver.name)
	solver.setJoints(this.getJointsAsArray())
	solver.setTipControl(tip.control)
	solver.setRootControl(root.control)
	solver.followBottomControl = true
	this.editor.addObject(solver)	

	return this
}

MM.BackComponent = function(parameters){
	MM.RigComponent.call(this)

	this.joints = ['Spine0', 'Spine1', 'Spine2', 'Spine3']
    this.controlNames = ['global', 'globalSub', 'root', 'tip']
	this.controlSizes = [1.2, 1.1, 1.0, 1.0]
    this.setValues(parameters)
    return this;	
}

MM.BackComponent.prototype = Object.create(MM.RigComponent.prototype)

MM.BackComponent.prototype.build = function(){
	console.log('TentacleComponent', this)

	var nJ = this.joints.length 
	var joints = this.getJoints()
	var jointPositions = this.getJointPositions()

	//	global control
	var globalPos = jointPositions[this.joints[0]]
	console.log('\tglobal position', globalPos)

	var global = MM.createControlGroup(this.side, this.namespace
		+this.controlNames[0])	
	global.zero.position.set(globalPos.x, globalPos.y, globalPos.z)
	global.control.setChannelsTranslateAndRotate()
	global.control.controlSize = this.controlSizes[0]
	
	this.editor.addObject(global.zero)
	this.editor.addSelectables([global.control])
	this.addControl( global.control, this.controlNames[0])

	//	global sub control
	var globalSub = MM.createControlGroup(this.side, this.namespace
		+this.controlNames[1])	
	globalSub.zero.position.set(globalPos.x, globalPos.y, globalPos.z)
	globalSub.control.setChannelsTranslateAndRotate()
	globalSub.control.controlSize = this.controlSizes[1]
	
	this.editor.addObject(globalSub.zero)
	global.control.setChild( globalSub.zero)
	this.editor.addSelectables([globalSub.control])
	this.addControl(globalSub.control, this.controlNames[1])

	//	root control
	var rootPos = jointPositions[this.joints[0]]
	console.log('\troot position', rootPos)

	var root = MM.createControlGroup(this.side, this.namespace
		+this.controlNames[2])
	root.zero.position.set(rootPos.x, rootPos.y, rootPos.z)
	root.control.setChannelsTranslateAndRotate()
	root.control.controlSize = this.controlSizes[2]
	
	this.editor.addObject(root.zero)
	globalSub.control.setChild(root.zero)
	this.editor.addSelectables([root.control])
	this.addControl(root.control, this.controlNames[2])

//	tip control
	var tipPos = jointPositions[this.joints[nJ-1]]
	console.log('\ttip position', tipPos)

	var tip = MM.createControlGroup(this.side, this.namespace
		+this.controlNames[1])	
	tip.zero.position.set(tipPos.x, tipPos.y, tipPos.z)
	tip.control.setChannelsTranslateAndRotate()
	tip.control.controlSize = this.controlSizes[3]
	
	this.editor.addObject(tip.zero)
	globalSub.control.setChild(tip.zero)
	this.editor.addSelectables([tip.control])
	this.addControl( tip.control, this.controlNames[3])

	this.editor.addGroupContent(this.assetGroup, [global.control, globalSub.control, tip.control, root.control])

//	curve solver
	var solver = new MM.CurveSolver()
	solver.name=this.getName('solver')
	console.log('\tsolver name', solver.name)
	solver.setJoints(this.getJointsAsArray())
	solver.setTipControl(tip.control)
	solver.setRootControl(root.control)
	solver.followBottomControl = true
	this.editor.addObject(solver)

	return this
}