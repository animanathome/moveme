UI.registerHelper('imageSize', function(n, thing) {
  // console.log('imageSize', n, thing)

  if( n === null || n === undefined )
  	return null;

  var filename = n.split('.')[0]
  var extension = n.split('.')[1]
  var result = filename+thing+'.'+extension

  // console.log('\tresult:', result)

  return result;
});

UI.registerHelper('pluralize', function(n, thing) {
  // fairly stupid pluralizer
  if (n === 1) {
    return '1 ' + thing;
  } else {
    return n + ' ' + thing + 's';
  }
});

UI.registerHelper('shortDescription', function(n, length){
  // console.log('shortDescription', n, length)

  check(n, String)
  check(n, String)

  if( n.length > length ){
    return n.slice(0, length)+' ...'
  }else{
    return n
  }
});

UI.registerHelper('assetCommand', function(asset){
  // console.log('assetCommand', asset)
  return "/anim/loadAsset?"+asset;
})

UI.registerHelper('youtubeVideo', function(videoId){
  return "https://www.youtube.com/v/"+videoId;
})

UI.registerHelper('youtubeImage', function(imageUrl){
  // console.log('youtubeImage', imageUrl)
  if( imageUrl === undefined ){
    return '/ui/imagePlaceHolder.png';
  }else{
    return imageUrl;
  }
})

UI.registerHelper('tutorialImage', function(id){
    return 'https://img.youtube.com/vi/'+id+'/maxresdefault.jpg';
})

UI.registerHelper('randomColor', function(){
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return "background: "+color;
})