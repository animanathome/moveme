Template.assetTry.rendered = function(){
	console.log('assetTry', this)

	var panel = this.find("#movemeanim");

	Template.anim.data = { 
		  'asset':this.data
			 //	ui settings
		, 'ui' : {
		 	  'menu' : {		 		
		 		  'server_actions' : false
		 		, 'demo_actions' : false
		 	}
		 	, 'toolbar':{
		 		'server_actions' : false
		 	}
		}
	}

	Template.anim.dom = panel;
	Template.anim.rendered();

	//	show a dialog instructing the user this is just for testing. If he or she wants to store the scene they will first have to login and create a project.
	// if (! Meteor.user()){
	// 	setTimeout(function (){
	// 		var message = MMUI.MessageDialog('Warning', 'This is just a "take me out for a test drive" type of area. You do not have access to all of the options. Please login to have full access.');
	// 		message.header.className="modal-header modal-warning";
	// 		panel.appendChild( message.dom );
	// 	}, 3000);
	// }
}