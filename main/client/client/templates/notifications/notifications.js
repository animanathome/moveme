Template.notifications.helpers({
  notifications: function() {
    return Notifications.find({userId: Meteor.userId(), read: false});
  },
  notificationCount: function(){
      return Notifications.find({userId: Meteor.userId(), read: false}).count();
  }
});

Template.notificationItem.helpers({
  notificationPostPath: function() {
    switch(this.postType){
      case "suggest": return Router.routes.postPage.path({_id: this.postId}); break;
      case "asset": return Router.routes.assetPage.path({_id: this.postId}); break;
    }
  }
});

Template.notificationItem.events({
  'click a': function() {
    Notifications.update(this._id, {$set: {read: true}});
  }
});