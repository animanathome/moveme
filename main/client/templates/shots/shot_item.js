// Template.prodShotItem.helpers({
//     projectId: function(){
//         console.log('test', this)
//         return 'kaka'
//     }
// });

Template.prodShotItem.events({
  'click .launch': function(e) {
    e.preventDefault();
    console.log('launching shot', this._id);
    
    Router.go('anim', {somevalue: 'loadShot'}); 

    //	set the current shot id
    // Meteor.call('launchShot', this._id, function(error, result){
    //     //  read in the file scene data

    // 	//	result
    // 	Router.go('anim/empty'); 
    // })
  }
});