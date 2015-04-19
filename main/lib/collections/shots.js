ShotList = new Mongo.Collection('shots');

ShotList.allow({
    update: function(userId, shot){ 
      // return ownsDocument(userId, shot); 
      return true;
  },
    remove: function(userId, shot){ 
      // return ownsDocument(userId, shot); 
      return true;
    },
});


Meteor.methods({
  shotInsert: function(shotAttributes) {
  	console.log('insert short')
    /*
      shotAttributes:
      {
          title: string
        , description: string
        , duration: number
        , fps: number
      }
    */
    
    check(shotAttributes.duration, Number)

    var shotCount = ShotList.find({projectId: shotAttributes.projectId}).count()    

    var user = Meteor.user();
    var shot = _.extend(shotAttributes, {
      userId: user._id, 
      author: user.username,
      submitted: new Date(),
      fps: 24,
      versionCount: 0,
      shotNumber: (shotCount + 1)
    });    

    //  update project
    ProjectList.update({
      _id: shotAttributes.projectId
    },{
      $inc: {
        shotCount: 1, 
        duration: shotAttributes.duration
      }
    })

    //  create shot
  	var shotId = ShotList.insert(shot);
    return {
      _id: shotId
    };
  }
  // launchShot: function( shotId){
  //   /*
  //   shot entry has the following data:
  //   - range
  //   - assets
  //   - scene file link
  //   */
  // 	console.log('launching shot', shotId)

  // 	versionInfo = Meteor.call("hasVersionForShot", shotId )
  // 	if( versionInfo.result ){
  // 		console.log('\tloading version', versionInfo.version)

  //     //  files is stored as /shotId/versionId.json

  //     Meteor.call("getVersionSceneFile")


  // 	}else{
  // 		console.log('\tFirst version')
  // 	}
  // }
});