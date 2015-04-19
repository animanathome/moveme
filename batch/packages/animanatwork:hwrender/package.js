Package.describe({
  name: 'animanatwork:hwrender',
  summary: 'Hardware render for Move Me',
  version: '0.0.1'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0.3.1');

  api.use([
           "productiveme:googleapis"
           ], "server");

  api.addFiles(['hwrender.js'], 'server');

  if(api.export)
    api.export('MMHWR');  

});

// Package.onTest(function(api) {
//   api.use('tinytest');
//   api.use('animanatwork:hwrender');
//   api.addFiles('animanatwork:hwrender-tests.js');
// });
