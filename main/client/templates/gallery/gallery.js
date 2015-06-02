Template.gallery.helpers({
	shots: function(){
		return ShotList.find({})
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