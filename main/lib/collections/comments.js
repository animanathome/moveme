Comments = new Mongo.Collection('comments');

Meteor.methods({
  commentInsert: function(commentAttributes) {
    console.log('commentInsert')

    check(this.userId, String);
    check(commentAttributes, {
      postId: String,
      postType: String,
      body: String      
    });
    var user = Meteor.user();
    var post;
    switch( commentAttributes.postType ){
      case "suggest": post = Posts.findOne(commentAttributes.postId); break;
      case "asset": post = AssetList.findOne(commentAttributes.postId); break;
    }

    console.log('\tuser', user)

    //  If the user logs in using a google account then we don't get a username. When that is the case, let's just use the real name which can be found under profile.
    var username;
    if(user.username === undefined ){
      username = user.profile.name;
    }else{
      username = user.username
    }
        
    if (!post)
      throw new Meteor.Error('invalid-comment', 'You must comment on a post');
        comment = _.extend(commentAttributes, {
            userId: user._id,
            author: username,
            submitted: new Date()
        });

	// update the post with the number of comments
    switch( commentAttributes.postType ){
        case "suggest": Posts.update(comment.postId, {$inc: {commentsCount: 1}}); break;
        case "asset": AssetList.update(comment.postId, {$inc: {commentsCount: 1}}); break;
    }

    // create the comment, save the id
    comment._id = Comments.insert(comment);
    
    // now create a notification, informing the user that there's been a comment
    createCommentNotification(comment);
    return comment._id;
  }
});