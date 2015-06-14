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
    console.log('View movie', this.youTubeVideoId)

    event.preventDefault();
    window.open("https://www.youtube.com/v/"+this.youTubeVideoId, '_blank');
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