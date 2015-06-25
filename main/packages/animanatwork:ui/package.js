Package.describe({
  name: 'animanatwork:ui',
  summary: 'THREE.js extended UI modules for Move Me',
  version: '0.0.1'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0.2.1');
  api.use([
           "globals"
           ], "client");  
  api.addFiles([
  				  'main.js'
  				, 'basic.js'
  				, 'panel.js'
  				, 'timeline.js'
  				, 'range_slider.js'
  				, 'panel_layout.js'
  				, 'tab.js'
  				, 'group_scroll_list.js'
          , 'menu_bar.js'
          , 'select.js' 
          , 'drop_down.js'   
          , 'input.js'
          , 'dialog.js'
  				], 'client');

  if (api.export) 
    api.export('MMUI');  
});

// Package.onTest(function(api) {
//   api.use('tinytest');
//   api.use('animanatwork:ui');
//   api.addFiles('animanatwork:ui-tests.js');
// });
