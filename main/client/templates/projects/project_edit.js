Template.projectEdit.events({
  'submit form': function(e) {
    e.preventDefault();

    var currentPostId = this._id;

    var projectProperties = {
      title: $(e.target).find('[name=title]').val(),
      description: $(e.target).find('[name=description]').val()
    }

    console.log(projectProperties)

    ProjectList.update(currentPostId, {$set: projectProperties}, function(error) {
      if (error) {
        // display the error to the user
        alert(error.reason);
      } else {
        Router.go('projectPage', {_id: currentPostId});
      }
    });
  },

  'click .delete': function(e) {
    e.preventDefault();

    if (confirm("Delete this project?")) {

      var currentProjectId = this._id;
      ProjectList.remove(currentProjectId);
      Router.go('prod');
    }
  }
});