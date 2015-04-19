Template.assetPage.helpers({
  comments: function() {
    return Comments.find({postId: this._id, postType: "asset"});
  }
});