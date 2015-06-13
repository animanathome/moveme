MM.TentacleComponent = function(parameters){
	MM.RigComponent.call(this)

	this.joints = [ 'C_spine0_0_jnt',
                    'C_spine1_0_jnt',
                    'C_spine2_0_jnt',
                    'C_spine3_0_jnt']
    this.controlNames = ['C_hip_0_ctrl', 
    					'C_chest_0_ctrl']

    this.setValues(parameters)
    return this;
}

MM.TentacleComponent.prototype = Object.create(MM.RigComponent.prototype);

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
	solver.setJoints(this.getJointsAsArray())
	solver.setTipControl(tip.control)
	solver.setRootControl(root.control)
	solver.followBottomControl = true
	this.editor.addObject(solver)	

	return this
}