Package.describe({
  name: 'globals',
  version: '0.0.1',  
  summary: 'moveme global variable package',
});

Package.onUse(function(api) {
	api.versionsFrom('1.1.0.2');
	api.addFiles(['globals.js'], "client");

	if (api.export) {
		api.export('moveme');
	}
});