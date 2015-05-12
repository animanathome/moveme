Package.describe({
  name: 'animanatwork:three',
  summary: 'Custom version of three for animanatwork',
  version: '0.0.1'
});

Package.onUse(function(api) {
	api.versionsFrom('1.0.2.1');
	api.addFiles(["three.min.js"], 'client');

	if (api.export) 
	    api.export('THREE');  
});
