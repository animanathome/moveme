from maya import cmds
import json
def mathJointsToShape( thisShape):
    baseShape = 'head'
    vertexIndexSets = {
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

            cmds.move(posToMx, posToMy, posToMz, jointToMatch, r=True)
            cmds.setKeyframe( jointToMatch )
            counter+= 1  

def jointsToShape():
    setupFile = '/Users/ambremaurin/Dropbox/learning/js/three.js/mrdoob-three.js-8673cc8/manu/resources/faceRig_001.ma';
    cmds.file(f=True, new=True)
    cmds.file(setupFile, f=True, o=True)

    # iterate over the different shapes
    shapesGroup = 'shapes'
    allShapes = cmds.listRelatives(shapesGroup, c=True)
    for i in range(len(allShapes)):    
        if str(allShapes[i])[0] == "l":
            print 'matching shape '+str(allShapes[i])

            mathJointsToShape( allShapes[i] )

            #    set or create a new frame
            cmds.currentTime((i +1) *5, e=True)


def exportJointShape( thisShape ):
    baseShape = 'head'
    vertexIndexSets = {
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

    thisShapeAsDict = {}

    for thisVertexSet in vertexIndexSets:
        counter=1
        for vertexIndex in vertexIndexSets[thisVertexSet]:        
            jointToMatch = thisVertexSet+str(counter)

            # get the difference in world space
            wPosJ = cmds.xform(jointToMatch, q=True, r=True, t=True)
            counter+= 1  

            thisShapeAsDict[jointToMatch] = wPosJ

    return thisShapeAsDict


def exportJointShapes( setupFile = '/Users/ambremaurin/Dropbox/learning/js/three.js/mrdoob-three.js-8673cc8/manu/resources/faceRig_002.ma'):
    '''
    Exports all of the left joint shapes as a json file to be read by moveme
    Here we're only exporting the left shapes so we end up with less data
    NOTE: that here we could make the file even smaller if we only save out the changes 
    '''
    jointShapesAsDict = {}
    
    cmds.file(f=True, new=True)
    cmds.file(setupFile, f=True, o=True)

    shapesGroup = 'shapes'
    allShapes = cmds.listRelatives(shapesGroup, c=True)    
    for i in range(len(allShapes)):    
        if str(allShapes[i])[0] == "l":
            print 'exporting '+str(allShapes[i])
            jointShapesAsDict[allShapes[i]] = exportJointShape( allShapes[i] )

            cmds.currentTime((i +1) *5, e=True)

    return jointShapesAsDict

def exportJointShapesFile( sourceFile, outputFile):    
    data=exportJointShapes( sourceFile )   
    with open(outputFile, 'w') as outfile:
        json.dump(data, outfile)


def buildSkeleton():
    cmds.file(f=True, new=True)
    cmds.file('/u/manus/Desktop/faceBase.ma', f=True, i=True)
    
    baseShape = 'head'
    
#    JOINTS
    allJoints=[]
    #    create joints for the vertices we want to tack
    #    create sets for each area of the face that we want to track
    vertexIndexSets = {
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
        
    for thisVertexSet in vertexIndexSets:
        counter=1
        for vertexIndex in vertexIndexSets[thisVertexSet]:
            wPos = cmds.pointPosition(baseShape + '.vtx['+str(vertexIndex)+']')
            
            cmds.select(cl=True)            
            
            addedJoint = cmds.joint(n=thisVertexSet+str(counter), p=wPos)
            cmds.setAttr(addedJoint+'.radius', 0.1)
            allJoints.append(addedJoint)
            counter+= 1

    #    jaw joint
    cmds.select(cl=True)
    rootJoint = cmds.joint(n='root', p=(0.0, 5.0, -0.1))
    cmds.setAttr(rootJoint+'.radius', 0.1)    
    allJoints.append(rootJoint)
    
    jawJoint = cmds.joint(n='jaw', p=(0.0, 5.069, 0.037))
    cmds.setAttr(jawJoint+'.radius', 0.1)
    cmds.setAttr(jawJoint+'.drawStyle', 2)
    allJoints.append(jawJoint)
    cmds.select(cl=True)
    
#    GEOMETRY 
#    setup a relationship between the created joints and the loaded geometry
    skinWeights.loadWeights('/u/manus/Desktop/faceWeights1', targetGeometry=baseShape)
    skinWeights.loadWeights('/u/manus/Desktop/browWeights1', targetGeometry='brows')
#     cmds.skinCluster(allJoints, baseShape, inf=True)
#     cmds.skinCluster(['rBrow3', 'rBrow2', 'rBrow1', 'lBrow3', 'lBrow2', 'lBrow1'], 'brows', inf=True)
    
    cmds.parent('uTeeth', 'root')
    cmds.parent('bTeeth', 'jaw')
    
#    to make this work properly we'll have to remove the position of the jaw of the shapes!!!!
#    otherwise we will get a double transformation
    for item in [u'cDLip1', u'lDLip1', u'lDLip2', u'lDLip3', u'rDLip1', u'rDLip2', u'rDLip3']:
        cmds.parent(item, 'jaw', a=True)
    
#    SHAPES
    cmds.currentTime(0, e=True)
    for thisJoint in allJoints:
        cmds.setKeyframe(thisJoint+'.t')

    #   for each shape, create a new frame and update the position of the 
    #   current joint to the matching vertex
    
    shapesGroup = 'shapes'
    allShapes = cmds.listRelatives(shapesGroup, c=True)
    for i in range(len(allShapes)):
        if str(allShapes[i])[0] == "l":
            print '\tmatching shape '+str(allShapes[i])            
        
            #    set or create a new frame
            cmds.currentTime((i +1) *5, e=True)
            
            #    iterate over all of the vertex sets        
            for thisVertexSet in vertexIndexSets:            
                counter=1
                for vertexIndex in vertexIndexSets[thisVertexSet]:
                    thisJoint = thisVertexSet+str(counter)
                    thisParentJoint = cmds.listRelatives(thisJoint, p=True)
                    
                    jpPos = (0.0,0.0,0.0)
                    if thisParentJoint:
                        jpPos = cmds.xform(thisParentJoint[0], q=True, ws=True, t=True)
                        
                    
                    wPos = cmds.pointPosition(allShapes[i] + '.vtx['+str(vertexIndex)+']')
                    
                    #print '\t\tmatching'+str(thisJoint)
                    cmds.xform(thisJoint, t= ((wPos[0] - jpPos[0]), (wPos[1] - jpPos[1]), (wPos[2] - jpPos[2])))
                    cmds.setKeyframe(thisJoint+'.t')
                    
                    counter+= 1
                    
    cmds.setAttr(shapesGroup+'.visibility', 0)
        
        