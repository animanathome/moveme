MM.Build = function (editor )
{
	this.tasks = []	
	return this;
}

MM.Build.prototype = {	
	addDataProcess : function( params )
	{
		console.log('Build: addDataProcess')
		var newProcess = new MM.BuildProcess();
		newProcess.dataToLoad = params['filename']
		
		if( params.hasOwnProperty('onLoaded'))
		{
			console.log('\tsetting onLoaded function')
			newProcess.onLoaded = params['onLoaded']	
		}		

		if( params.hasOwnProperty('onFinished'))
		{
			console.log('\tsetting onFinished function')
			newProcess.onFinished = params['onFinished']
		}

		if(this.tasks.length !== 0)
		{						
			this.tasks[this.tasks.length - 1].nextProcess = newProcess
		}

		this.tasks.push( newProcess )
	},

	run : function()
	{
		console.log('Build: run')
		this.tasks[0].run()		
	}
}