Template.projectSubmit.events({
  	'submit form': function(e) {
    	e.preventDefault();

		var user = Meteor.user();

		var project = {
      		title: $(e.target).find('[name=title]').val(),
      		description: $(e.target).find('[name=description]').val(),
			userId: user._id,
      		submitted: new Date()
    	};

	    Meteor.call('projectInsert', project, function(error, result) {
	      // display the error to the user and abort
			if (error)
				return throwError(error.reason);

			// show this result but route anyway
			if (result.postExists)
				throwError('This project has already been created');
	    
			Router.go('projectPage', {_id: result._id});  	      
	    });
	}
})

Template.projectSubmitCollapse.events({
  	'submit form': function(e) {
    	e.preventDefault();

		var project = {
      		title: $(e.target).find('[name=title]').val(),
      		description: $(e.target).find('[name=description]').val()
    	};

	    Meteor.call('projectInsert', project, function(error, result) {
	      // display the error to the user and abort
			if (error)
				return throwError(error.reason);

			// show this result but route anyway
			if (result.postExists)
				throwError('This project has already been created');
	    
			// Router.go('projectPage', {_id: result._id});
			Router.go('prod', {_id: result._id});
	    });
	}
})