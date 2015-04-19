VersionList = new Mongo.Collection('versions');

VersionList.allow({
  update: function(){ 
    return true; 
  },
  remove: function(){ 
    return true; 
  },
  insert: function(){
    return true;
  }
});

FileList = new FS.Collection("scenes", {
  stores: [
    new FS.Store.FileSystem("animation")
    ]
});

FileList.allow({
  update: function(){ 
    return true; 
  },
  remove: function(){ 
    return true; 
  },
  insert: function(){
    return true;
  },
  download: function(){
    return true;
  }
});


function str2ab(str) {
  var buf = new ArrayBuffer(str.length);
  var bufView = new Uint8Array(buf);
  for (var i=0, strLen=str.length; i<strLen; i++) {
    bufView[i] = str.charCodeAt(i);
  }
  return buf;
}

Meteor.methods({
  deleteSceneVersion: function( versionAttributes ){
    console.log('deleteSceneVersion', versionAttributes)

    //  delete version file
    var version = VersionList.findOne(versionAttributes.versionId)
    if( version === undefined ){
        console.log('\tUnable to find version')
        return;
    }

    console.log('\tsubmitted', version.submitted.toString())
    console.log('\tversion object', version)

    if(!version.hasOwnProperty('fileId')){
        console.log('\tUnable to find attached file id to version')      
    }else{
        //  delete associated file
        console.log('deleting version file', version.fileId)
        FileList.remove(version.fileId)
    }

    //  delete version
    console.log('deleting version', versionAttributes.versionId)
    VersionList.remove(versionAttributes.versionId);

    //  update shot version count
    ShotList.update({
      _id: versionAttributes.shotId   
    }, { 
      $inc: {versionCount:-1}
    })
  },
  createSceneVersion: function( versionAttributes, sceneData){
    //  create an animation scene version for the given sceneAttributes and attach it's id to the given versionId.
    console.log('createSceneVersion')
    console.log('\tdata', sceneData)
    console.log('\tproject:', versionAttributes.projectId)
    console.log('\tshot:', versionAttributes.shotId)
    console.log('\tdescription:', versionAttributes.description)

    //  create file
    console.log('\tcreate file')
    var newFile = new FS.File();       
    newFile.attachData(str2ab(sceneData), {type: 'text/plain'});
    newFile.userId = Meteor.userId();
    newFile.versionId = -1;
    
    console.log('\tstore file')
    var fileId = FileList.insert(newFile);
    console.log('\tfile id', fileId._id)
    
    //  create version
    var user = Meteor.user();
    var version = {
      userId: user._id, 
      author: user.username,
      submitted: new Date(),
      projectId: versionAttributes.projectId,
      shotId: versionAttributes.shotId,
      description: versionAttributes.description,
      fileId: fileId._id,
      fps: 24,
      duration: 24,
      
      commentsCount: 0,
      upvoters: [],
      votes: 0,

      youTubeVideoId: -1,
      youTubeImageUrlDef: '',
      youTubeImageUrlMed: '',
      youTubeImageUrlHigh: ''
    }

    var versionId = VersionList.insert(version);
    console.log('\tversion id', versionId)

    //  update file 
    FileList.update({
      _id: fileId._id
    }, { versionId:versionId})
    console.log('\tupdating file')


    //  update shot version count
    ShotList.update({
      _id: versionAttributes.shotId   
    }, { 
      $inc: {versionCount:1}
    })
    
    return {
      _id : versionId,
      _fileId : fileId._id
    }
  },
  launchVersion: function( versionId){
  	console.log('launching version', versionId)
  },
  hasVersionForShot: function( shotId ){  
  	console.log('hasVersionForShot', shotId)
  	var currentShotVersions = VersionList.find({ shotId: shotId }, {sort: {submitted: -1}}, {reactive: false}).fetch()
  	console.log('\tshot versions', currentShotVersions)  	

  	if( currentShotVersions.length > 0){
  		return { result: true, version: currentShotVersions[0] }
  	}else{
  		return { result: false, version: null }
  	}
  }
});