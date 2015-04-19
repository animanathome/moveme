Template.prodImageSubmit.events({
  'change .imageInput': function(e, template) {
  	console.log('Adding Image', e.target.files)
    e.preventDefault();

    FS.Utility.eachFile(event, function(file) {
      ImageList.insert(file, function (err, fileObj) {
        //Inserted new doc with ID fileObj._id, and kicked off the data upload using HTTP
      });
    });

    // console.log('Image list:')
    // ImageList.find().forEach(function (fileObj) {
    //   console.log('name:', fileObj.name());
    //   console.log('extension:', fileObj.extension());
    //   console.log('size:', fileObj.size());
    // });

   }
});