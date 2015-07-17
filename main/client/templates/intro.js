/*
	-> animate
	-> publish/share with friends and mentors
	-> notes/corrections
 */

Template.intro.helpers({
  assetList: function() {
    return AssetList.find();
  }
});

Template.intro.rendered = function(){ 
  console.log('environment:', process.env.NODE_ENV)

//	ACTIVATE TOOLTIPS
	//  activate all tooltips for this page
  	$(function (){
    	$('[data-toggle="tooltip"]').tooltip()
  	})
}