Template.commentSubmit.created = function() {
  Session.set('commentSubmitErrors', {});
}

Template.commentSubmit.helpers({
  errorMessage: function(field) {
    return Session.get('commentSubmitErrors')[field];
  },
  errorClass: function (field) {
    return !!Session.get('commentSubmitErrors')[field] ? 'has-error' : '';
  }
});

Template.commentSubmit.events({
  'submit form': function(e, template) {
    e.preventDefault();

    // console.log('submit form', e, template)
    // console.log('current route', Router.current().route.path(this));
    var origin = Router.current().route.getName();
    console.log('\torigin', origin)
    
    var postType = '';
    switch(origin){
      case "postPage": postType = "suggest"; break;
      case "assetPage": postType = "asset"; break;
      default: throwError("Unsupported origin."); break;
    }

    var $body = $(e.target).find('[name=body]');
    var comment = {
      body: $body.val(),
      postId: template.data._id,
      postType: postType
    };

    var errors = {};
    if (! comment.body) {
      errors.body = "Please write some content";
      return Session.set('commentSubmitErrors', errors);
    }

    Meteor.call('commentInsert', comment, function(error, commentId) {
      if (error){
        throwError(error.reason);
      } else {
        $body.val('');
      }
    });
  }
});