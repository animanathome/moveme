Template.prodImagePage.helpers({
  imageList: function(){
    console.log('imageList')
    return ImageList.find();
  }
});