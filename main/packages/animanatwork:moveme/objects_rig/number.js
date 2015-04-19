MM.Number = function(){
	this.value = 0.0
}

MM.Number.prototype = {
	constructor: MM.Number,

	getValue: function(){
		return this.value
	},

	setValue: function( value ){
		this.value = value
	}
}