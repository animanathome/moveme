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
  //  add an empty short, this one gets selected through the gallery option.
  shotInsertEmpty: function(){
    // console.log('shotInsertEmpty')

    //  get the users active project
    var user = Meteor.user();
    var project = ProjectList.find({userId:user._id}, {fields: {_id: 1, shotCount: 1}}).fetch();
    // console.log('\tproject', project)

    if(project.length === 0 ){
      // console.log('\tNo active project was found.');
      return;
    }

    // console.log('\tproject id', project[0]._id)

    //  create default shot attributes    
    shotAttributes = {
        title: 'Untitled'
      , description: 'No description'
      , duration: -1
      , fps: 24
    }
    var shot = _.extend(shotAttributes, {
        projectId: project[0]._id
      , userId: user._id
      , author: user.username
      , submitted: new Date()
      , fps: 24
      , versionCount: 0
      , shotNumber: (project[0].shotCount + 1)
      , latestVersionId: 0
      , latestVersionVideoId: ''
      , latestVersionThumbnail: ''
      , isPublic: true
    });
    // console.log('\tadd shot', shot)

    //  update the shotcount for the active project
    ProjectList.update({
      _id: project[0]._id
    },{
      $inc: {
        shotCount: 1
      }
    })

    //  create shot
    var shotId = ShotList.insert(shot);
    // console.log('\tadded shot', shotId);
    
    return {
        projectId: project[0]._id
      , shotId: shotId
    }
  },

  //  add a shot to the given project
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
});