define([], function() {
	/**
	Logger is used when we want to log something (some information or error) on the server side as it can be referred later
 	
 	@namespace Boiler.Helpers
 	@module BoilerCoreClasses
	@class Logger
	@constructor    
	**/
	var Logger = function(){
		/**
		Print the input string message on the console as a log

		@method info
		@param {String} msg
		**/
		this.info = function(msg) {
			if (console) {
				console.log(msg);
			}
		};
		/**
		Print the input string message as a console log and error as a console error

		@method error
		@param {String} msg
		@param {String} error
		**/		
		this.error = function(msg, error) {
			if (console) {
                console.log("ERROR : " + msg);
				console.error(error);
			}
		};
	};
	
	return Logger;

});
