Package.describe({
  name: 'animanatwork:moveme',
  summary: 'Move Me animation package',
  version: '0.0.1'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0.2.1');
  api.use(["animanatwork:three", "animanatwork:ui", "codeadventure:js-signals"], "client");
  api.addFiles(["moveme.min.js"], 'client');

  if (api.export) 
    api.export('MM');
});
