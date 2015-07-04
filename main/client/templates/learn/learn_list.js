Template.learn.helpers({
  tutorialList: function() {
    return TutorialList.find();
  },
  numberOfTutorials: function(){
  	return TutorialList.find().count()
  }
 });