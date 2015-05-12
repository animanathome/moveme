Package.describe({
  name: 'animanatwork:ui',
  summary: 'THREE.js extended UI modules for Move Me',
  version: '0.0.1'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0.2.1');
  api.addFiles(['ui.min.js'], 'client');

  if (api.export) 
    api.export('MMUI');  
});
