var remote = DDP.connect('http://localhost:3000/');
VersionList = new Mongo.Collection('versions', remote);

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

remote.subscribe('versions');

Meteor.methods({
	hardwareRenderScene: function( renderJob){
  		console.log('hardwareRenderScene', renderJob)  		

  		return MMHWR.renderScene(renderJob);
	}
})