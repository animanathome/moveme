Template.gallery.helpers({
	shots: function(){
		return ShotList.find({})
	}
});

Template.gallery.events({
	'click .anim' : function(e){
		// console.log('Clicking on anim')
		// console.log('\tthis', this)		
		Router.go('anim', {
			projectId: this.projectId
			, shotId: this._id
			, _id: this.latestVersionId
		})
	}
});