//  http://stackoverflow.com/questions/26691308/meteor-get-user-ip-on-login
//  http://stackoverflow.com/questions/23095478/get-account-profile-after-logging-in/23101763#23101763
//  http://stackoverflow.com/questions/23507384/adding-more-fields-to-meteor-user-accounts
Accounts.onLogin(function( loginData ){
    console.log('User just logged in')

    var user = loginData.user;
    // console.log('\t# user', user)

    // GOOGLE account login
    // when logging in with a google account for the first time we do not get 
    // a username, this result is us being unable to show who is logged in or
    // who has added a certain comment. This is resolved here by taking the 
    // accounts given_name and use it as a username
    if(!user.hasOwnProperty('username')){
        // console.log('\t# no username specified')
        if(user.hasOwnProperty('services')){
            if(user.services.hasOwnProperty('google')){
                Meteor.users.update({ _id: user._id }, {
                    $set: { username: user.services.google.given_name }
                });  
            }
        }
    }    

    if( ProjectList.find({userId: user._id}).count() === 0){
        // console.log('No projects found, creating default project')

        var projectId = ProjectList.insert({
            title:'Untitled project',
            description:'No description',
            userId: user._id, 
            author: user.username, 
            submitted: new Date(),
            shotCount: 1,
            duration: 24,
            isActive: true
        });

        var shotId = ShotList.insert({
              userId: user._id
            , author: user.username
            , submitted: new Date()
            , fps: 24
            , versionCount: 0
            , shotNumber: 1
            , title: 'Untitled shot'
            , description: 'No description'
            , duration: 24
            , projectId: projectId

            , latestVersionId: 0
            , latestVersionVideoId: ''
            , latestVersionThumbnail: ''

            , isPublic: true            
        })

        // console.log('Created untitle shot', shotId, 'for project', projectId)
    }
})