// var remote = DDP.connect('http://localhost:3000/');
var remote = DDP.connect('http://192.168.1.69:3000/');
VersionList = new Mongo.Collection('versions', remote);

VersionList.allow({
  update: function(){ 
    return true; 
  }
  // remove: function(){ 
  //   return true; 
  // },
  // insert: function(){
  //   return true;
  // }
});
remote.subscribe('versions');

ShotList = new Mongo.Collection('shots', remote);
VersionList.allow({
  update: function(){ 
    return true; 
  }
  // remove: function(){ 
  //   return true; 
  // },
  // insert: function(){
  //   return true;
  // }
});
remote.subscribe('shots');

Meteor.methods({
	hardwareRenderScene: function( renderJob){
  		console.log('hardwareRenderScene', renderJob)  		

  		return MMHWR.renderScene(renderJob);
	}
})