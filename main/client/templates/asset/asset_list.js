Template.assets.helpers({
  assetList: function() {
    return AssetList.find();
  },
  numberOfAssets: function(){
  	return AssetList.find().count()
  }
 });