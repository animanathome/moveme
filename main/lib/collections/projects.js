ProjectList = new Mongo.Collection('projects');

ProjectList.allow({
  	update: function(userId, project){ 
  		return ownsDocument(userId, project); 
      return true;
 	},
  	remove: function(userId, project){ 
  		return ownsDocument(userId, project); 
      return true;
  	},
});

// ProjectList.deny({
//   update: function(userId, project, fieldNames, modifier) {
//     var errors = validatePost(modifier.$set);
//     return errors.title || errors.description;
//   }
// });

Meteor.methods({
    projectInsert: function(projectAttributes){
        console.log('projectInsert', projectAttributes)

        check(Meteor.userId(), String);
        check(projectAttributes, {
            title: String,
            description: String
        });

        var user = Meteor.user();
        var project = _.extend(projectAttributes, {
            userId: user._id, 
            author: user.username, 
            submitted: new Date(),
            shotCount: 0,
            duration: 0
        });
        var projectId = ProjectList.insert(project);

        return {
            _id: projectId
        };
    }
});