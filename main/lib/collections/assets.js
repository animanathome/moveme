AssetList = new Mongo.Collection('assets');

AssetList.allow({
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

// ImageList = new FS.Collection("images", {
//  stores: [
//       new FS.Store.FileSystem("images"),
//       new FS.Store.FileSystem("thumbs", {
//         beforeWrite: function(fileObj) {
//           // We return an object, which will change the
//           // filename extension and type for this store only.
//           return {
//             extension: 'png',
//             type: 'image/png'
//           };
//         },
//         transformWrite: function(fileObj, readStream, writeStream) {
//           // Transform the image into a 10x10px PNG thumbnail
//           gm(readStream).resize(60).stream('PNG').pipe(writeStream);
//           // The new file size will be automatically detected and set for this store
//         }
//       })
//     ],
//     filter: {
//       allow: {
//         contentTypes: ['image/*'] //allow only images in this FS.Collection
//       }
//     }
// });
