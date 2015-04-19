Template.prod.helpers({
  projectList: function() {
    return ProjectList.find();
  },
  // hasProjects: function(){
  	// if (Meteor.user()){
	  // 	if( ProjectList.find().count() === 0 ){
	  // 		//	create untitled project
	  // 		Meteor.call('projectInsert', {
	  // 			title:'Untitled project',
	  // 			description:'No description yet.'
	  // 		})
	  // 	}
  	// }
  // },
  numberOfProjects: function(){
  	return ProjectList.find().count()
  }
});