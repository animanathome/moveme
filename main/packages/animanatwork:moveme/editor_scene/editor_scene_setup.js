MM.Editor.prototype.getSetupsWithNamespace = function( namespace, level){
	console.log('getSetupsWithNamespace', namespace, level)
	
	setupLevel = 'step'+level+'Nodes';
	var j = this[setupLevel].length;
	var i = 0;
	for( i = 0; i < j; i++){
	 	console.log('\t', this[setupLevel][i])
	}
	console.warn('Not yet implemented')
}

MM.Editor.prototype.removeSetups = function( nodes, level ){
	console.log('removeSetups', nodes, level)
	console.warn('Not yet implemented')
}