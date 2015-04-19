MM.Editor = function(){
	// console.log('MM.Editor init')

    var scope = this;
	var SIGNAL = signals.Signal;
	this.signals = {
          sceneNew: new SIGNAL()
        , sceneSave: new SIGNAL()

        , assetAdded: new SIGNAL()
        , assetRemoved: new SIGNAL()

        , objectAdded: new SIGNAL()
        , objectRemoved: new SIGNAL()
        , objectChanged: new SIGNAL()
        , objectSelected: new SIGNAL()
        , objectRefresh: new SIGNAL()
        // , objectFramed: new SIGNAL()

        , helperAdded: new SIGNAL()
        , helperRemoved: new SIGNAL()

        , groupAdded: new SIGNAL()
        , groupContentAdded: new SIGNAL()

        , manipSpaceChange: new SIGNAL()
        , manipModeChange: new SIGNAL()
        
        , cameraChange: new SIGNAL()
        , cameraAdded: new SIGNAL()
        , cameraRemoved: new SIGNAL()

    //  keyframe editor 
        , keyAll: new SIGNAL()
        // removeAllKeys: new SIGNAL(),
        , keyAuto: new SIGNAL()
        , keyAdded: new SIGNAL()
        , keyRemoved: new SIGNAL()
        , keySelected: new SIGNAL()
        , keyChanged: new SIGNAL()
        , keyFramed: new SIGNAL()

        , keyframeEditorReset: new SIGNAL()
        , keyframeEditorChanged: new SIGNAL()
        , keyframeEditorKeysUpdated: new SIGNAL()
        , keyframeEditorTangentUpdated: new SIGNAL()

        , animCurveAdded: new SIGNAL()
        , animCurveRemoved: new SIGNAL()
        , animCurvesSelected: new SIGNAL()

        , tangentStepped: new SIGNAL()
        , tangentLinear: new SIGNAL()
        , tangentBezier: new SIGNAL()
        , tangentSelected: new SIGNAL()
        , tangentBreak: new SIGNAL()
        , tangentUnify: new SIGNAL()
        , tangentLock: new SIGNAL()
        , tangentUnLock: new SIGNAL()

        , showInfo: new SIGNAL()

        , play: new SIGNAL()
        , setTime: new SIGNAL()
        , timeChanged : new SIGNAL()
        , timeShifted: new SIGNAL()
        // , startTimeChanged: new SIGNAL()
        // , endTimeChanged: new SIGNAL()       
        // , endRangeChanged: new SIGNAL()
        // , startRangeChanged: new SIGNAL()
        , timeRangeChanged : new SIGNAL()
        
    //  
        , sceneGraphChanged: new SIGNAL()

    //  interface related signals
        , layoutResized: new SIGNAL()
        , windowResize: new SIGNAL()        
    }

//  PROJECT DATA ( contains project, shot and version id)
    this.projectObj = undefined;

//  HOTKEYS
    //  turn on the hot keys or shortcuts by default
    this.useHotKeys = true;

//	LOADER ( IO for scene, session, sets, ...)
    this.loader = new MM.Loader( this );

//  GROUPS
    this.groups = {} 
    this.groups['asset'] = new MM.GroupManager( this );
    this.groups['material'] = new MM.GroupManager( this );
    this.groups['light'] = new MM.GroupManager( this );
    this.groups['camera'] = new MM.GroupManager( this );

//  ASSET (OBJECTS)
    this.assets = []

//  SCENE
    this.sceneBackgroundColor = new THREE.Color().setRGB( 0.5, 0.7, 0.7 );
    this.activeCamera = undefined;    
    this.cameras = [];

    this.activePanel = 0; 
    this.panels = [];    
    this.viewportCameraControl = null;
    this.viewportTransformControl = undefined;

    this.scene = new THREE.Scene(); // sceneObjects
    this.scene.name = 'objectScene'
    this.selected = null;
    this.selectedObjects = [];
    this.selectableObjects = []
    this.prevSelected = null; 
    this.prevSelectedObjects = [];   
    this.object = {};
    this.objects = [];
    this.clock = new THREE.Clock()

    //  defines the order of rig objects evaluation as we first want to be able 
    //  evaluate a certain ik solver before we contrain to it's result.
    this.step1Nodes = [];
    this.step2Nodes = [];    

//  UNDO LIST
    this.undoStack = [];
    this.redoStack = [];
    this.undoLimit = 50;
    this.redoLimit = 50;    

//  HELPERS    
    this.helpers = [];   
    this.tooltip = undefined;
    this.showGrid = true;
    this.showJoints = true;
    this.showControls = true;

//  MANIPULATOR    
    this.activeTool = 'select';
    this.activeSpace = 'local';      

//  KEY VIEW
    //  ANIMCURVES
    this.keyBackgroundColor = new THREE.Color().setRGB( 0.5, 0.7, 0.7 );
    this.removedKey = false
    this.autoKey = false
    this.keyframeEditorCameraControl = null;
    this.sceneAnimCurves = new THREE.Scene();
    this.keyCamera = undefined;
    this.keySelectionBox = undefined;
    this.keyProjector = undefined;
    this.keyGrid = undefined;
    this.keyTimeline = undefined;
    this.animCurves = [];
    this.selectedAnimCurves = [];
    this.activeTimeValue = []; // unique list of time values collected from selectedAnimCurves
    this.previouslySelectedAnimCurves = [];
    // unique identifier to ensure no 2 animCurves have the exact same number
    this.animCurveId = 0; 

    this.useTimeSnap = false;
    this.timeSnapPrecision = 0;
    this.useValueSnap = false;
    this.valueSnapPrecision = 1;
    //  OLD
    this.pastedKeyValue = undefined; // clipboard for key value ( copy/paste)
    //  NEW
    this.pastedKeyValues = undefined; 
    this.defaultTangentType = 1;    //  tangent type that gets assigned to new keys

//  TIME
    this.isPlaying = false;
    this.timeAsDouble = 0.0;
    this.time = 0;
    this.startTime = 0;
    this.endTime = 96;    
    this.startRange = 0;
    this.endRange = 48; 
    this.playbackMode = 'fixed' // or free
    this.playbackSpeed = 24; 

//  LISTEN
    this.signals.keyframeEditorKeysUpdated.add( function(){
        //  update the list of time values for the displayed keys
        scope.setTimeValueFromSelectedAnimcurves();
    })

    this.signals.keyframeEditorChanged.add( function(){
        //  update the list of time values for the displayed keys
        scope.setTimeValueFromSelectedAnimcurves();
    })

    this.signals.sceneGraphChanged.add( function(){
        scope.evaluateScene( false );
    })   

    this.signals.objectSelected.add( function(){
        scope.evaluateScene( false );
    })

    this.signals.objectChanged.add( function(){
        scope.evaluateScene( false );
        scope.autoKeySelectedObjects();
    })

    this.signals.keyframeEditorKeysUpdated.add( function(){
        scope.evaluateScene( true );
    })

    this.signals.timeChanged.add( function(){
        scope.evaluateScene( true );
    })

    this.signals.manipModeChange.add( function(value){
        // console.log('setting active tool to', value)
        scope.activeTool = value;
    })
    this.signals.manipSpaceChange.add( function(value){
        scope.activeSpace = value;
    })
};
