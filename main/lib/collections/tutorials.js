TutorialList = new Mongo.Collection('tutorials')

TutorialList.allow({
  update: function(){ 
    return true; 
  },
  remove: function(){ 
    return true; 
  },
  insert: function(){
    return true;
  }
});