Accounts.onCreateUser(function(options, user)
{
	console.log('New user', options, user)
	console.log('\tuserId', user._id)

	// if( ProjectList.find({userId: user.userId}).count() === 0){
	// 	console.log('No projects found')

	// 	//	create untitled project
 //  		Meteor.call('projectInsert', {
 //  			title:'Untitled project',
 //  			description:'No description yet.'
 //  		})
	// }

  	return user;
});

//	http://stackoverflow.com/questions/26691308/meteor-get-user-ip-on-login
//	http://stackoverflow.com/questions/23095478/get-account-profile-after-logging-in/23101763#23101763
//	http://stackoverflow.com/questions/23507384/adding-more-fields-to-meteor-user-accounts
Accounts.onLogin(function( loginData ){
	// console.log('User just logged in')

	var user = loginData.user;
	// console.log('\tuser', user)

	if( ProjectList.find({userId: user._id}).count() === 0){
		// console.log('No projects found, creating default project')

		var projectId = ProjectList.insert({
  			title:'Untitled project',
  			description:'No description',
			userId: user._id, 
            author: user.username, 
            submitted: new Date(),
            shotCount: 1,
            duration: 24
  		});

  		var shotId = ShotList.insert({
	     	userId: user._id, 
	      	author: user.username,
	      	submitted: new Date(),
	      	fps: 24,
	      	versionCount: 0,
	      	shotNumber: 1,
	      	title: 'Untitled shot',
        	description: 'No description',
        	duration: 24,
        	projectId: projectId
  		})

  		// console.log('Created untitle shot', shotId, 'for project', projectId)
	}
})