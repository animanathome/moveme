Template.prodShotItem.events({
  'click .launch': function(e) {
    e.preventDefault();
    console.log('launching shot', this._id);
    
    Router.go('anim', {somevalue: 'loadShot'}); 
  }
});