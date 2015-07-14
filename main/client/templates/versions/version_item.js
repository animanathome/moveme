Template.prodShotVersionItem.helpers({
  submittedText: function() {
    // return this.submitted.toString();

    var time = this.submitted.getHours();
    time += ":"
    time += this.submitted.getMinutes();
    time += " "
    time += this.submitted.getDate();
    time += "/"
    time += this.submitted.getMonth();
    time += "/"
    time += this.submitted.getFullYear();
    return time;
  },
  hasRender: function(){
    // console.log('hadRender')
    // console.log('this', this)
    if(this.youTubeVideoId === -1){
      return false
    }else{
      return true
    }
  },
  getImage: function(){
    console.log('getImage', this._id, this)
    if(this.hasOwnProperty('imageUrl')){
      console.log('\treturning latestImageUrl')
      return this.imageUrl
    }
    return '/ui/imagePlaceHolder.png';
  },
  getGifOver: function(){
    if(this.hasOwnProperty('gifUrl')){
      return "this.src='"+this.gifUrl+"'";
    }
    return "this.src='/ui/imagePlaceHolder.png'";
  },
  getImageOut: function(){
    if(this.hasOwnProperty('imageUrl')){
      return "this.src='"+this.imageUrl+"'";
    }
    return "this.src='/ui/imagePlaceHolder.png'";
  }
});

Template.prodShotVersionItem.events({
  'click .render': function(e) {
  	e.preventDefault();

    Meteor.call('hardwareRenderScene', {
        projectId:this.projectId
      , shotId:this.shotId
      , versionId:this._id
    }, function(error, data){
        throwError(error)
    })      
  },  
  'click .view' : function(e){
    Router.go('anim', {
          projectId:this.projectId
        , shotId:this.shotId
        , _id:this._id})
  },
  'click .movie' : function(e){
    console.log('View movie', this, this.youTubeVideoId)

    var player = new MMUI.VideoDialog('', this.youTubeId, 'view');
    $('#'+this._id)[0].appendChild( player.dom )

    // event.preventDefault();
    // window.open("https://www.youtube.com/v/"+this.youTubeVideoId, '_blank');
  },
  'click .delete': function(e) {
    e.preventDefault();

    if (confirm("Delete this version?")) {
      Meteor.call("deleteSceneVersion", {
          projectId:this.projectId
      	, shotId:this.shotId
      	, versionId:this._id
      });
    }
  }
});