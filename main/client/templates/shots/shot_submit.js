Template.shotSubmit.events({
  'submit form': function(e, template) {
  	console.log('Adding Shot')
    e.preventDefault();

	 var shot = {      
        title: $(e.target).find('[name=title]').val(),
        description: $(e.target).find('[name=description]').val(),
        duration: $(e.target).find('[name=duration]').val(),
        projectId: template.data._id
    };

    Meteor.call('shotInsert', shot, function(error, result) {

		  // Router.go('shotPage', {_id: result._id});  
    });

   }
});

Template.shotSubmitCollapse.events({
  'submit form': function(e, template) {
    console.log('Adding Shot')
    e.preventDefault();

     var shot = {      
        title: $(e.target).find('[name=title]').val(),
        description: $(e.target).find('[name=description]').val(),
        duration: parseInt($(e.target).find('[name=duration]').val()),
        projectId: template.data._id
    };

    Meteor.call('shotInsert', shot, function(error, result) {

          // Router.go('shotPage', {_id: result._id});  
    });

   }
})