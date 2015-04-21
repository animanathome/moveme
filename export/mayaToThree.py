import json
import pymel.core as pm
from pymel.core import *
from maya import mel, cmds    

JOINT_DATA=[]
TRANSFORM_DATA=[]


'''
Exporting to maya
1. convert all joints to transforms
2. export transform hierarchy data as json
'''

# shape = 'm:cPants'
# node = PyNode('skinCluster6')
# fileName = '/Users/ambremaurin/Dropbox/learning/js/three.js/mrdoob-three.js-8673cc8/manu/resources/cutup/pants_skin11.json'

# data = {}
# data['shape'] = shape.split(':')[1]
# data['npoints'] = numberOfPoints=pm.polyEvaluate(shape, v=True)
# influences=cmds.skinCluster(node.name(), q=True, inf=True)
# data['influences'] = list()
# for influence in influences:
#     data['influences'].append( influence.split(':')[1] )

# allWeights = list()
# allPositions = list()
# for point in range(numberOfPoints):
#     weights = cmds.skinPercent(node.name(), shape+'.vtx['+str(point)+']', q=True, v=True)
#     allWeights.append( weights )
#     position = cmds.pointPosition(shape+'.vtx['+str(point)+']')
#     allPositions.append( position )
# data['weights'] = allWeights
# data['positions'] = allPositions
# with open(fileName, 'w') as outfile:
#     json.dump(data, outfile)    


def simple_matrix_name( thisJoint ):
    nameSplit=thisJoint.split('_')
    if len(nameSplit) != 4:
        return thisJoint+'_sm'
    else:
        return nameSplit[0]+'_'+nameSplit[1]+'_'+nameSplit[2]+'_sm'

def build_simple_matrix_hierarchy( thisJoint ):   
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
            
build_simple_matrix_hierarchy('ground')

def get_transform_data(thisTransform):
    thisData={
              "name":thisTransform,
              "parent":cmds.listRelatives(thisTransform, p=True),
              "children":cmds.listRelatives(thisTransform, c=True, type='transform'),
              "matrix": cmds.getAttr(thisTransform+'.matrix'),
              "matrixWorld": cmds.getAttr(thisTransform+'.worldMatrix[0]'),
              }
    TRANSFORM_DATA.append(thisData)
    
    children=cmds.listRelatives(thisTransform, c=True, type='transform')    
    if(children != None):            
        for thisChild in children:                            
            get_transform_data(thisChild)   

def get_all_root_transforms():
    rootJoints=[]
    allJoints=cmds.ls(type='transform')
    for thisJoint in allJoints:
        parent=cmds.listRelatives(thisJoint, p=True)
        if not parent:
            hasShape=cmds.listRelatives(thisJoint, s=True)
            if not hasShape:
                rootJoints.append(thisJoint)
    return rootJoints

def get_all_transform_data():
    allRootTransforms=get_all_root_transforms()
    if allRootTransforms:
        for rootTransform in allRootTransforms:
            # build_simple_matrix_hierarchy(rootTransform)

            get_transform_data(rootTransform)
            
    return TRANSFORM_DATA  

def save_all_transform_data(myfile='Users/ambremaurin/Dropbox/Public/data/drone/skeleton/drone_sskeleton.json'): 
    TRANSFORM_DATA=[]    
    data={}

    data['joints']=get_all_transform_data()   
    with open(myfile, 'w') as outfile:
        json.dump(data, outfile)      
        
# ---------------------------------------------------------------------------------------
def get_all_root_joints():
    rootJoints=[]
    allJoints=cmds.ls(type='joint')
    for thisJoint in allJoints:
        parent=cmds.listRelatives(thisJoint, p=True)
        if not parent:
            rootJoints.append(thisJoint)
    return rootJoints

def get_joint_data(thisJoint):  
    thisData={
              "name":thisJoint,
              "parent":cmds.listRelatives(thisJoint, p=True),
              "children":cmds.listRelatives(thisJoint, c=True, type='joint'),
              "matrix": cmds.getAttr(thisJoint+'.matrix'),
              "matrixWorld": cmds.getAttr(thisJoint+'.worldMatrix[0]'),
              }
    JOINT_DATA.append(thisData)
    
    children=cmds.listRelatives(thisJoint, c=True, type='joint')    
    if(children != None):            
        for thisChild in children:                            
            get_joint_data(thisChild)            

def get_all_joint_data():
    allRootJoints=get_all_root_joints()
    if allRootJoints:
        for rootJoint in allRootJoints: 
            get_joint_data(rootJoint)
            
    return JOINT_DATA
                        
def get_all_data():
    DATA={}        
    JOINT_DATA=[]    
    
    DATA['joints']=get_all_joint_data();
    
    return DATA

def save_all_data(myfile='Users/ambremaurin/Dropbox/Public/data/drone/skeleton/drone_skeleton.json'): 
    data=get_all_data()   
    with open(myfile, 'w') as outfile:
        json.dump(data, outfile)      