//  108.180.115.126
// var remote = DDP.connect('http://localhost:3000/');
// var remote = DDP.connect('http://192.168.1.69:3000/');
var remote = DDP.connect('https://moveme.io/');
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

ShotList = new Mongo.Collection('shots', remote);
ShotList.allow({
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
remote.subscribe('shots');


ThumbnailList = new FS.Collection('thumbnails', {
  stores: [new FS.Store.FileSystem('image')]
});

ThumbnailList.allow({
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

GifList = new FS.Collection('gifs', {
    stores: [new FS.Store.FileSystem('gif')]
})

GifList.allow({
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

//  http://www.meteorpedia.com/read/Async_on_server
var Future = Npm.require('fibers/future');

function async(cb){
  console.log('async')
  Meteor.setTimeout(function () {
    cb(null, 'hello');
  }, 3000);
}

Meteor.methods({
    hardwareRenderScene: function( renderJob){
    	console.log('hardwareRenderScene', renderJob)  		

        var fut = new Future()
    	MMHWR.renderScene(renderJob, function(data){
            console.log('hardwareRenderScene: callback', data)
            fut.return(data)
        });
        return fut.wait();
    }
})