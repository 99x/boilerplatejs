define(function(require) {
	
	/**
	Mediator is used for handling the messaging inside the framework
 	
 	@namespace Boiler.Helpers
 	@module BoilerCoreClasses
	@class Mediator
	@constructor    
	**/
	var Mediator =  function() {
		/**
		@private
		@property {Object} 'pubsub' Holds an instance of PubSub
		**/
		var pubsub = new PubSub();
		return{
			/**
			Notify others on an occurrence of an event by setting up a publish point with a string

			@method notify
			
			@param {String} event Event to publish
			@param {Array} params
			**/
			notify : function(event, params) {
				pubsub.publish(event, params);
			},
			/**
			listen to the events published by others by registering a callback on a named event

			@method listen
			
			@param {String} event Event to subscribe the callback function
			@param {Function} fn Callback function
			**/
			listen : function(event, fn) {
				pubsub.subscribe(event, fn);
			}
		};

	};
	
	return Mediator;
});
