Notifications = new Mongo.Collection('notifications');

Notifications.allow({
  update: function(userId, doc, fieldNames) {
    return ownsDocument(userId, doc) && 
      fieldNames.length === 1 && fieldNames[0] === 'read';
  }
});

createCommentNotification = function(comment) {
  var post;
  switch( comment.postType ){
      case "suggest": post = Posts.findOne(comment.postId); break;
      case "asset": post = AssetList.findOne(comment.postId); break;
  }
  
  console.log('\t', comment.userId, post.userId)

  if (comment.userId !== post.userId){    
    Notifications.insert({
      userId: post.userId,
      postId: post._id,
      postType: comment.postType,
      commentId: comment._id,
      commenterName: comment.author,
      read: false
    });
  }
};