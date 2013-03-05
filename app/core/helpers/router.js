define(function(require) {
	
	/**
	Router is used to handle url navigation by setting up routes and hash codes
 	
 	@namespace Boiler.Helpers
 	@module BoilerCoreClasses
	@class Router
	@constructor    
	**/
	var Router = function() {
		/**
		@private
		@property {Object} 'router' Holds an instance of crossroads router
		**/
		var router = crossroads.create();
		router.normalizeFn = crossroads.NORM_AS_OBJECT;

		return {
			/**
			Creates a new route pattern and add it to crossroads routes collection

			@method addRoute
			
			@param {String} pattern String pattern that should be used to match against requests
			@param {Function} handler Function that should be executed when a request matches the route pattern
			**/	
			addRoute : function(pattern, handler) {
				router.addRoute(pattern, handler);
			},
			/**
			Initializes the router by parsing initial hash, parsing hash changes and initializing the hasher 

			@method init
			**/	
			init : function() {

				function parseHash(newHash, oldHash) {
					router.parse(newHash);
				}
				hasher.initialized.add(parseHash);// parse initial hash
				hasher.changed.add(parseHash);// parse hash changes
				
				if (!hasher.isActive()) {
					hasher.init(); // start listening for history change
				}
			}

		};

	};
	/**
	Set the hash code to the url

	@method routeTo
			
	@param {String} path Hash code to update the url
	**/	
	Router.routeTo = function(path) {
		hasher.setHash(path);
	};

	return Router;
});
