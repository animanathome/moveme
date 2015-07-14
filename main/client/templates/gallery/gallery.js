Template.gallery.helpers({
	shots: function(){
		return ShotList.find({versionCount:{$gte: 1}})
	}
});

Template.gallery.events({
	'click .anim' : function(e){
		Router.go('anim', {
			projectId: this.projectId
			, shotId: this._id
			, _id: this.latestVersionId
		})
	},

	'click .new' : function(e){
		Meteor.call('shotInsertEmpty', function(error, result) {
		  	Router.go('anim', {
				  projectId: result.projectId
				, shotId: result.shotId
				, _id: -1
			});
    	});
	}
});

Template.galleryItem.helpers({
  getImage: function(){
    console.log('getImage', this._id, this)
    if(this.hasOwnProperty('latestImageUrl')){
      console.log('\treturning latestImageUrl')
      return this.latestImageUrl
    }
    return '/ui/imagePlaceHolder.png';
  },
  getGifOver: function(){
    if(this.hasOwnProperty('latestGifUrl')){
      return "this.src='"+this.latestGifUrl+"'";
    }
    return "this.src='/ui/imagePlaceHolder.png'";
  },
  getImageOut: function(){
    if(this.hasOwnProperty('latestImageUrl')){
      return "this.src='"+this.latestImageUrl+"'";
    }
    return "this.src='/ui/imagePlaceHolder.png'";
  }
});