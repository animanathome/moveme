Meteor.publish("userData", function (){
  // console.log('userData', this.userId)
  // console.log('data', Meteor.users.findOne({_id:this.userId}))
  if (this.userId) {
    // currentUser = Meteor.users.findOne({_id:this.userId})    
    // if(currentUser.hasOwnProperty('services')){
    //   if(currentUser.services.hasOwnProperty('google')){
    //     user_name = currentUser.services.google.given_name
    //     console.log('google account', user_name)
    //     return Meteor.users.find({_id: this.userId}, {fields:{'services':1}});
    //   }
    // }else{
      
    // } 
    return Meteor.users.find({_id: this.userId});   
  } else {
    this.ready();
  }
});

Meteor.publish('assets', function() {
  return AssetList.find();
});

Meteor.publish('numberOfAssets', function(number){
  return AssetList.find({},{limit:number})
});

Meteor.publish('singleAsset', function(id){
  check(id, String)
  return AssetList.find(id)
});

Meteor.publish('projects', function() {
  return ProjectList.find({userId: this.userId});
});

Meteor.publish('singleProject', function(id){
  // console.log('singleProject', id)
  return ProjectList.find(id);
});

Meteor.publish('activeProject', function(){
  console.log('activeProject')
  console.log('\tuser', this.userId)
  return ProjectList.find({
      userId: this.userId
    , isActive: true
  });
})


//  -------------------------------------------------------------------------
//  SHOTS

Meteor.publish('numberOfPublicShots', function( number_of_shots ){
  return ShotList.find({isPublic:true}, {limit:number_of_shots})  
})

Meteor.publish('numberOfMyShots', function( number_of_shots){
  return ShotList.find({userId:this.userId}, {limit:number_of_shots})  
})

Meteor.publish('numberOfMyPublicShots', function( number_of_shots){
  return ShotList.find({
      userId:this.userId
    , isPublic:true
  }, {
      limit:number_of_shots    
  })  
})

Meteor.publish('shots', function(projectId){
    //  return all shots that belong to the given project
    return ShotList.find({
        projectId: projectId
    });
})

Meteor.publish('singleShot', function(id){
    //  return the following shot
    // console.log('singleShot', id)
    return ShotList.find(id)
})

Meteor.publish('numberOfVersions', function( numberOfVersions ){
  // console.log('numberOfVersions', numberOfVersions)  
  return VersionList.find({},{limit:numberOfVersions})//.limit(numberOfVersions)
})

Meteor.publish('scenes', function(userId){
  return FileList.find({userId:userId})
})

Meteor.publish('sceneVersion', function(versionId){
  return FileList.find({versionId:versionId})
})

Meteor.publish('versions', function(shotId, options){
    if( options === undefined ) options = {}
    return VersionList.find({shotId: shotId}, options);
})

Meteor.publish('singleVersion', function(versionId){
  // console.log('singleVersion', versionId)
  return VersionList.find(versionId)
})

//  TUTORIALS
Meteor.publish('tutorials', function(){
  return TutorialList.find({},{limit:6})
})

Meteor.publish('tutorialsByCategory', function(category){
  return TutorialList.find({category:category})
})

//  ----------------------------------------------------------------------------
//	SUGGESTIONS

//	https://book.discovermeteor.com/chapter/publications-and-subscriptions
Meteor.publish('posts', function(options) {
  check(options, {
    sort: Object,
    limit: Number
  });
  return Posts.find({}, options);
});

Meteor.publish('singlePost', function(id) {
  check(id, String)
  return Posts.find(id);
});

//  ----------------------------------------------------------------------------
//  COMMENTS ( currently implemented for both assets and suggestions)
Meteor.publish('comments', function(postId, postType) {
  //  id = unique identifier
  //  type = suggest, asset, version
  check(postId, String);
  check(postType, String)

  return Comments.find({
      postId: postId, 
      postType:postType
    });
});

Meteor.publish('notifications', function() {
  return Notifications.find({userId: this.userId, read: false});
});