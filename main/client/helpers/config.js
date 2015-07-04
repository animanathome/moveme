// "auth_uri": "https://accounts.google.com/o/oauth2/auth",
// "client_secret": "3XqBXjiskWRnjOQeIIokdeK0",
// "client_id": "384169809029-juf205k96fnvjraqaj20rhu1eptl8abr.apps.googleusercontent.com",
// "redirect_uri": "http://localhost:5000/oauth2callback"

Accounts.ui.config({
  requestPermissions: {
    google: [
             'email', 
             // 'https://www.googleapis.com/auth/calendar',
             'https://www.googleapis.com/auth/youtube',
             'https://www.googleapis.com/auth/youtube.readonly',
             'https://www.googleapis.com/auth/youtube.upload',
             'https://www.googleapis.com/auth/youtubepartner'
             ]
  }
  , requestOfflineToken: {
    google: true
  },
});

Meteor.loginWithGoogle({
  requestPermissions:[
                      'email', 
                      // 'https://www.googleapis.com/auth/calendar',
                      'https://www.googleapis.com/auth/youtube',
                      'https://www.googleapis.com/auth/youtube.readonly',
                      'https://www.googleapis.com/auth/youtube.upload',
                      'https://www.googleapis.com/auth/youtubepartner',
                      ],
  requestOfflineToken: true
}, function( err ){
  if (err)
    Session.set('errorMessage', err.reason || 'Unknown error');    
});

Accounts.ui.config({
  passwordSignupFields: "USERNAME_AND_OPTIONAL_EMAIL"
});