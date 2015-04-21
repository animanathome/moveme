from maya import cmds, mel
import json
import os
'''
	export shapes
	export skinweights
	export skeleton
	export model
'''

def createFolderStructure( folderStructure ):
	'''
	Creates any missing folders 
	'''
	print 'createFolderStructure '+str(folderStructure) 

	if os.path.exists(folderStructure):
		return

	subFolders = str(folderStructure).split('/')
	path = '/'+subFolders[0]
	for i in range(1, len(subFolders)):
		path += '/'+subFolders[i]

		if not os.path.exists(path):
			os.mkdir(path)

#	export joint shapes --------------------------------------------------------
def exportJointShape( thisShape , baseShape, vertexIndexSets ):
	thisShapeAsDict = {}

	for thisVertexSet in vertexIndexSets:
		counter=1
		for vertexIndex in vertexIndexSets[thisVertexSet]:        
			wPosT = cmds.pointPosition(thisShape + '.vtx['+str(vertexIndex)+']')
			        
			jointToMatch = thisVertexSet+str(counter)

			# get the difference in world space
			wPosJ = cmds.xform(jointToMatch, q=True, ws=True, t=True)

			posToMx = wPosT[0] - wPosJ[0]
			posToMy = wPosT[1] - wPosJ[1]
			posToMz = wPosT[2] - wPosJ[2]

			if ( abs(posToMx) < 0.0001 ): posToMx = 0.0;
			if ( abs(posToMy) < 0.0001 ): posToMy = 0.0;
			if ( abs(posToMz) < 0.0001 ): posToMz = 0.0;

			# print '\t'+str(vertexIndex)+': '+str(posToMx)+', '+str(posToMy)+', '+str(posToMz)

			thisShapeAsDict[jointToMatch] = [posToMx, posToMy, posToMz]

			counter+= 1  

	return thisShapeAsDict


def exportJointShapes( baseShape, vertexIndexSets , destinationFolder):
	'''
	Exports all of the left joint shapes as a json file to be read by moveme
	Here we're only exporting the left shapes so we end up with less data
	NOTE: that here we could make the file even smaller if we only save out the changes 
	'''
	createFolderStructure( destinationFolder )

	jointShapesAsDict = {}

	shapesGroup = 'shapes'
	allShapes = cmds.listRelatives(shapesGroup, c=True)    
	for i in range(len(allShapes)):    
		if str(allShapes[i])[0] == "l":
			print '\texporting '+str(allShapes[i])
			jointShapesAsDict[allShapes[i]] = exportJointShape( allShapes[i], baseShape, vertexIndexSets )

	outputFile = os.path.join( destinationFolder, 'shapes.json' )
	with open(outputFile, 'w') as outfile:
		json.dump(jointShapesAsDict, outfile)

#	export skeleton ------------------------------------------------------------

def simple_matrix_name( thisJoint ):
    nameSplit=thisJoint.split('_')
    if len(nameSplit) != 4:
        return thisJoint+'_sm'
    else:
        return nameSplit[0]+'_'+nameSplit[1]+'_'+nameSplit[2]+'_sm'

def build_simple_matrix_hierarchy( thisJoint ):
	'''
	Build a simple matrix representation of the given joint hierarchy
	We do this since this matches closest to our representation in three.js
	'''   
	# NOTE: maya's default to X down the change.
	transName = simple_matrix_name( thisJoint )
	trans = cmds.createNode('transform', n=transName)
	hasParent=cmds.listRelatives(thisJoint, p=True)
	if hasParent:
		# WARNING: here we assume we move from the root down to the children
		# so we assume that the necessary parent simple matrix representation
		# already exists
		cmds.parent(trans, simple_matrix_name(hasParent[0]))

	# pcon = cmds.parentConstraint(thisJoint, trans)
	pcon = cmds.pointConstraint(thisJoint, trans)
	cmds.delete(pcon)

	hasChildren=cmds.listRelatives(thisJoint, c=True)
	if not hasChildren:
	    # align to parent
	    cmds.setAttr(trans+'.r', 0, 0, 0)

	children=cmds.listRelatives(thisJoint, c=True, type='transform')    
	if(children != None):            
	    for thisChild in children:                            
	        build_simple_matrix_hierarchy(thisChild) 

def get_transform_data(thisTransform, data ):
    thisData={
              "name":thisTransform,
              "parent":cmds.listRelatives(thisTransform, p=True),
              "children":cmds.listRelatives(thisTransform, c=True, type='transform'),
              "matrix": cmds.getAttr(thisTransform+'.matrix'),
              "matrixWorld": cmds.getAttr(thisTransform+'.worldMatrix[0]'),
              }
    data.append(thisData)
    
    children=cmds.listRelatives(thisTransform, c=True, type='transform')    
    if(children != None):            
        for thisChild in children:                            
            get_transform_data(thisChild, data)

    return data

def get_all_root_joints():
	'''
	Return all the skeletons 
	'''
	rootJoints=[]
	allJoints=cmds.ls(type='joint')
	for thisJoint in allJoints:
		parent=cmds.listRelatives(thisJoint, p=True)
		if not parent:
			rootJoints.append(thisJoint)
	return rootJoints    

def exportSkeletonData( skeleton ):
	'''
	Return simple matrix representation data for the given skeleton
	Here a skeleton is represented by the root the joint chain 
	'''
	build_simple_matrix_hierarchy( skeleton )
	result = skeleton + '_sm'
	if not cmds.objExists( result ):
		print '\tsomething went wrong when generating the simple matrix representation'

	data = []
	data = get_transform_data( result, data )

	# cleanup
	cmds.delete( result )

	return data

def exportSkeleton( destinationFolder ):
	'''
	Store skeleton data to file in a formate moveme can read and understand
	'''
	# make sure the destination folder exists
	createFolderStructure( destinationFolder )

	# get data
	skeletons = get_all_root_joints();
	if len(skeletons) != 1:
		print 'Only expecting one skeleton. Found '+str(len(skeletons))+'. Not sure what to do. Skipping...'
		return

	print '\tpreparing '+str(skeletons[0])
	skeletonData = exportSkeletonData( skeletons[0] )
	
	absPath = os.path.join(destinationFolder, skeletons[0]+'_skeleton.json')

	print '\texporting skeleton data for ' + str(skeletons[0]) + ' ' + str(absPath)

	# print skeletonData

	with open(absPath, 'w') as outfile:
		json.dump(skeletonData, outfile)    	

#	export weights -------------------------------------------------------------

def exportWeightsData( shape , skinCluster):
	'''
	Return the weight data for the given shape, skinCluster
	'''
	print 'exportWeightsData '+str(shape)+' '+str(skinCluster)
	
	data = {}
	data['shape'] = shape 
	data['npoints'] = numberOfPoints = cmds.polyEvaluate(shape, v=True)
	influences=cmds.skinCluster(skinCluster, q=True, inf=True)
	data['influences'] = list()
	for influence in influences:
	    data['influences'].append( influence )

	allWeights = list()
	allPositions = list()
	for point in range(numberOfPoints):
	    weights = cmds.skinPercent(skinCluster, shape+'.vtx['+str(point)+']', q=True, v=True)
	    allWeights.append( weights )
	    position = cmds.pointPosition(shape+'.vtx['+str(point)+']')
	    allPositions.append( position )

	data['weights'] = allWeights
	data['positions'] = allPositions

	return data

def exportAllWeights( destinationFolder ):
	'''
	Export all weight data for each skinCluster
	'''
	createFolderStructure( destinationFolder )

	skins = cmds.ls(type='skinCluster')
	for skin in skins:
		shape = cmds.listConnections(skin, type='mesh')
		if shape:
			skinData = exportWeightsData( shape[0], skin )

			absPath = os.path.join(destinationFolder, shape[0]+'_skin.json')
			
			print '\texporting skin data for ' + str(shape[0]) + ' ' + str(absPath)

			with open(absPath, 'w') as outfile:
				json.dump(skinData, outfile)   
		else:
			print '\tno skin data found for ' + str(skin) 

#	export shapes --------------------------------------------------------------

def exportAllModels( destinationFolder ):
	'''
	Export all models in the model group as OBJ's
	'''				
	createFolderStructure( destinationFolder )

	if not cmds.objExists( 'model' ):
		print 'Expecting a group called model which contains the models to export.'
		return

	for item in cmds.listRelatives( 'model', c=True):
		print '\texporting '+str(item)
		cmds.delete(item, ch=True )
		cmds.polyTriangulate(item, ch=False)
		cmds.select(item, r=True)

		mel.eval('polySoftEdge -a 180 -ch 0 '+str(item));

		exportCmd = 'file -force -options "groups=0;ptgroups=0;materials=0;smoothing=1;normals=1" '
		exportCmd += '-typ "OBJexport" -pr -es '
		exportCmd += '"' + str(os.path.join(destinationFolder, item)) + '"'
		mel.eval( exportCmd )

class Export( object ):
	def __init__(self):
		self.sourceFile = None
		self.destinationFolder = None		
		self.doModel = True;
		self.doSkeleton = True;
		self.doWeights = True;
		self.doShapes = True;
		
		#	original or base shape where the blendshapes where created from
		#	all blendshapes should be parented under the shapes group
		self.baseShape = 'head'

		#	map which define to matching vertex index for each joint 
		#	on the baseshape
		self.vertexIndexSets = {
			#    from in to out
			'lUEyeLid' : [38,23,39],
			'lDEyeLid' : [52,25,53],

			'rUEyeLid' : [201,200,203],
			'rDEyeLid' : [206,204,205],

			'cULip' : [15],
			'cDLip' : [19],

			'lULip' : [32,85,16],
			'lDLip' : [49,83,20],

			'rULip' : [210,164,165],
			'rDLip' : [196,195,178],

			'lBrow' : [86,27,33],
			'rBrow' : [208,188,185]
		} 

	def exportWeights(self):
		exportAllWeights( os.path.join(self.destinationFolder , 'weights' ) )

	def exportSkeleton(self):
		exportSkeleton( os.path.join( self.destinationFolder, 'skeleton' ) )

	def exportModel(self):
		exportAllModels( os.path.join( self.destinationFolder, 'model' ) )

	def exportShapes(self):
		exportJointShapes( self.baseShape, self.vertexIndexSets , os.path.join( self.destinationFolder, 'shapes' ))

	def __call__(self):
		print 'Exporting all data'

		# make sure we do not change the original file
		cmds.file(f=True, new=True)
		cmds.file(self.sourceFile, f=True, i=True)

		if self.doWeights:
			self.exportWeights()
		if self.doSkeleton:
			self.exportSkeleton()
		if self.doModel:
			self.exportModel()
		if self.doShapes:
			self.exportShapes()

def exportTail():
	e = Export();
	e.doShapes = False
	e.sourceFile = '/Users/animanatwork/Desktop/tail.ma'
	e.destinationFolder ='/Volumes/Dropbox/Dropbox/Public/data/tail/'
	e()

def exportManWithFace():
	'''Export man with face'''
	e = Export();
	e.sourceFile = '/Users/ambremaurin/Dropbox/learning/js/three.js/mrdoob-three.js-8673cc8/manu/resources/male_002.ma'
	e.destinationFolder = '/Users/ambremaurin/Dropbox/Public/data/manWithFace/'
	e();

def exportDrone():
	'''Export drone (character with 2 legs) '''
	e = Export();
	e.doShapes = False
	# e.sourceFile = '/Volumes/Dropbox/Dropbox/learning/js/three.js/mrdoob-three.js-8673cc8/manu/resources/legs_004.ma'
	e.sourceFile='/Users/animanatwork/Dropbox/learning/js/three.js/mrdoob-three.js-8673cc8/manu/resources/legs_005.ma'
	# e.destinationFolder = '/Users/animanatwork/Desktop/Public/data/drone/'
	e.destinationFolder = '/Users/animanatwork/Dropbox/MoveMe/public/data/drone1'
	e();

def exportCube():
	e = Export();
	e.doShapes = False
	e.sourceFile = '/Users/ambremaurin/Dropbox/learning/js/three.js/mrdoob-three.js-8673cc8/manu/resources/cube.ma' 
	e.destinationFolder = '/Users/ambremaurin/Dropbox/Public/data/skinnedCube/'
	e();

def exportLegs():
	pass

def exportTiny():
	e = Export();
	e.doShapes = False
	e.sourceFile = '/Users/ambremaurin/Dropbox/learning/js/three.js/mrdoob-three.js-8673cc8/manu/resources/tiny_002.ma'
	e.destinationFolder = '/Users/ambremaurin/Dropbox/Public/data/tiny/'
	e();

def exportTiny2():
	e = Export();
	e.doShapes = False
	e.sourceFile = '/Volumes/Dropbox/Dropbox/learning/js/three.js/mrdoob-three.js-8673cc8/manu/resources/tiny_005.ma'
	e.destinationFolder = '/Users/manu/Dropbox/MoveMe/public/data/tiny2/'
	e();

def exportBaby():	
	e = Export();
	e.doShapes = False
	e.sourceFile = '/Users/manu/Dropbox/learning/js/three.js/mrdoob-three.js-8673cc8/manu/resources/baby_001.ma'
	e.destinationFolder = '/Users/manu/Dropbox/MoveMe/public/data/baby/'
	e();

def exportMaxi():	
	e = Export();
	e.doShapes = False
	e.sourceFile = '/Users/manu/Dropbox/learning/js/three.js/mrdoob-three.js-8673cc8/manu/resources/biggy_004.ma'
	e.destinationFolder = '/Users/manu/Dropbox/MoveMe/public/data/maxi/'
	e();	

def exportTunny():
	e = Export();
	e.doShapes = False;
	e.sourceFile='/Volumes/Dropbox/Dropbox/Public/source/spaceTunny/model_001.ma'
	e.destinationFolder = '/Volumes/Dropbox/Dropbox/Public/data/spaceTunny/'
	e();

def exportDino():
	e = Export();
	e.doShapes = False;
	e.sourceFile='/Volumes/Dropbox/Dropbox/Public/source/dino/model_001.ma'
	e.destinationFolder = '/Volumes/Dropbox/Dropbox/Public/data/dino/'
	e();

def exportGruntA():
	cmds.file(f=True, new=True)
	cmds.file('/Volumes/Dropbox/Dropbox/reference/Data/MG/GruntA/RigComC/v17.ma', f=True, i=True, rer=False, pmt=False)

	missingNodes = ["parentConstraintNode", "parentConstraintSwitchNode"]

	items = cmds.ls(type='unknown')
	for item in items:
		if item.count('parentConstraintNode'):
			print item
			#    outgoing connections
			print cmds.listConnections(item, s=True, d=False, p=True)

	controls = ['GRTA_0:anim:C_chestIk_0_ctl',
	'GRTA_0:anim:C_headIk_0_ctl',
	'GRTA_0:anim:C_headIk_0_ctl',
	'GRTA_0:anim:L_shoulderIk_0_ctl',
	'GRTA_0:anim:R_shoulderIk_0_ctl',
	'GRTA_0:anim:L_wristIk_0_ctl',
	'GRTA_0:anim:R_wristIk_0_ctl',
	'GRTA_0:anim:C_bodyIk_0_ctl',
	'GRTA_0:anim:C_pelvisIk_0_ctl',
	'GRTA_0:anim:L_kneeIk_0_ctl',
	'GRTA_0:anim:R_kneeIk_0_ctl',
	'GRTA_0:anim:L_footIk_0_ctl',
	'GRTA_0:anim:R_footIk_0_ctl',
	'GRTA_0:anim:L_elbowIk_0_ctl',
	'GRTA_0:anim:R_elbowIk_0_ctl']

	# cmds.getAttr('GRTA_0:anim:C_chestIk_0_ctl.followFollow', asString=True) # C_bodyIk_0
	# cmds.getAttr('GRTA_0:anim:C_headIk_0_ctl.headTranslationFollow', asString=True) # C_chestIk_0 
	# cmds.getAttr('GRTA_0:anim:C_headIk_0_ctl.headRotationFollow', asString=True) # c_offset_0 
	# cmds.getAttr('GRTA_0:anim:L_shoulderIk_0_ctl.collarFollow', asString=True) # C_chestFk_0
	# cmds.getAttr('GRTA_0:anim:R_shoulderIk_0_ctl.collarFollow', asString=True) # C_chestFk_0
	# cmds.getAttr('GRTA_0:anim:L_wristIk_0_ctl.wristFollow', asString=True) # C_chestIk_0
	# cmds.getAttr('GRTA_0:anim:R_wristIk_0_ctl.wristFollow', asString=True) # C_chestIk_0
	# cmds.getAttr('GRTA_0:anim:C_bodyIk_0_ctl.followFollow', asString=True) # c_offset_0
	# cmds.getAttr('GRTA_0:anim:C_pelvisIk_0_ctl.followFollow', asString=True)# C_bodyIk_0
	# cmds.getAttr('GRTA_0:anim:L_kneeIk_0_ctl.followFollow', asString=True) # c_global_0
	# cmds.getAttr('GRTA_0:anim:R_kneeIk_0_ctl.followFollow', asString=True) # c_global_0
	# cmds.getAttr('GRTA_0:anim:L_footIk_0_ctl.followFollow', asString=True) # c_global_0
	# cmds.getAttr('GRTA_0:anim:R_footIk_0_ctl.followFollow', asString=True) # c_global_0
	# cmds.getAttr('GRTA_0:anim:L_elbowIk_0_ctl.elbowFollow', asString=True) # c_offset_1
	# cmds.getAttr('GRTA_0:anim:R_elbowIk_0_ctl.elbowFollow', asString=True) # C_chestIk_0


