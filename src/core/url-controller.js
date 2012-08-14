﻿define(['./helpers/_helpers_'], function (Helpers) {
	/**
	URL controller is used to trigger events when there is a url change
 	
 	@namespace Boiler
 	@module BoilerCoreClasses
	@class UrlController
	@uses This class uses helpers as a dependency
	@constructor
	@param {Object} context
	@param {Object} parentEl   
	**/
    var UrlController = function (context, parentEl) {

        var allHandles = {};
        var router = new Helpers.Router();

       	/**
        * Wrapper for handles. This allows us to intercept activation calls so
        * that we are able to execute custom logic such as deactivation of
        * other handles.		

		@method Wrapper
		@private		
		@param {Object} handle route-handler class
		**/	
        function Wrapper(handle) {
            var selfWrapper = this;
            selfWrapper.handle = handle;

            this.activate = function (vals) {
                // deactivate all active handles in current controller
                parentEl.empty();
                // activate the requested handler
                selfWrapper.handle.activate(parentEl, vals);
            };

        }

        return {
        	/**
			Create handler objects from each route handler using the 'Wrapper' method and add the activated handler object to the router as routes 

			@method addRoutes		
			@param {Array} handles route-handler object array
			**/	
            addRoutes: function (handles) {
                for (path in handles) {
                    var HandlerClass = handles[path];
                    var handlerObj = new Wrapper(new HandlerClass(context));
                    router.addRoute(path, handlerObj.activate);
                    allHandles[path] = handlerObj;
                }
                
            },
			
			/**
			Start the url controller by initializing the router 

			@method start		
			**/	
            start: function () {
                router.init();
            }

        };

    };
	/**
	Adds a new path to the router

	@method goTo		
	@param {String} newPath New path
	**/	
    UrlController.goTo = function (newPath) {
        Helpers.Router.routeTo(newPath);
    };

    return UrlController;
});
