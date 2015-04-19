MM.BuildProcess = function()
{	
	this.dataToLoad = undefined;
	this.onLoaded = undefined;	
	this.onFinished = undefined;
	this.nextProcess = undefined;

	return this;
}

MM.BuildProcess.prototype = {
	run: function(){	
		var scope = this;	
		if( this.dataToLoad === undefined ){			
			if( scope.onFinished !== undefined ){				
				scope.onFinished();
			}

			//	run the next build process when finished
			if ( scope.nextProcess !== undefined){		
				scope.nextProcess.run()
			}	
		}else{
			var xhr;
			if (window.XMLHttpRequest) {
			    xhr = new XMLHttpRequest();
			} else if (window.ActiveXObject) {
			    xhr = new ActiveXObject("Microsoft.XMLHTTP");
			}
			xhr.onreadystatechange = function(){
				if (xhr.readyState == 4){
					//	once the data is loaded and there is the onLoaded method 
					//	is defined then run it using the data
					if( scope.onLoaded !== undefined ){
						scope.onLoaded( xhr.responseText )
					}
					//	once the main or onLoaded method is finished and we've 
					//	defined a onFinished method, run it
					if( scope.onFinished !== undefined ){
						scope.onFinished();
					}

					//	run the next build process when finished all preceding 
					//	methods
					if ( scope.nextProcess !== undefined){		
						scope.nextProcess.run()
					}				
				}
			};
			xhr.open("GET",this.dataToLoad);
			xhr.send();	
		}
	}
}