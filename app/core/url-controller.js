define(function (require) {
	
	var Helpers = require('./helpers/_helpers_'); //helpers namespace
	
	/**
	  URL controller is used to trigger events when there is a url change

	  @namespace Boiler
	  @module BoilerCoreClasses
	  @class UrlController
	  @uses This class uses helpers as a dependency
	  @constructor
	  @param scope {Object} jQuery element to which the routed components get attached to
	 **/
	var UrlController = function(scope) {

		var allHandles = {};
		var router = new Helpers.Router();

		/*
		 * Listen to the DOM events of parent element of this controller
		 * to get any deactivation calls. Upon deactivation call we will ask
		 * all components on this parent element to deactivate them.
		 */
		scope.bind('DEACTIVATE_HANDLERS', function() {
			for (handler in allHandles) {
				if (allHandles.hasOwnProperty(handler)) {
					allHandles[handler].deactivate();
				}
			}
		});

		/**
		 * Wrapper for handles. This allows us to intercept activation calls so
		 * that we are able to execute custom logic such as deactivation of
		 * other handles.

		 @method Wrapper
		 @private
		 @param {Object} handle route-handler class
		 **/
		function Wrapper(handle) {

			this.handle = handle;

			var selfWrapper = this;
			this.activate = function(vals) {
				// deactivate all active handles in current controller
				scope.trigger('DEACTIVATE_HANDLERS');
				// activate the requested handler
				selfWrapper.handle.activate(scope, vals);
			};

			this.deactivate = function () {

				if (jQuery.isFunction(selfWrapper.handle.deactivate)) {
					selfWrapper.handle.deactivate();
				}
			};
		}

		return {
			/**
			  Create handler objects from each route handler using the 'Wrapper' method and add the activated handler object to the router as routes

			  @method addRoutes
			  @param {Array} handles route-handler object array
			 **/
			addRoutes : function(handles) {
				for (path in handles) {
					if (handles.hasOwnProperty(path)) {
						var handlerObj = new Wrapper(handles[path]);
						router.addRoute(path, handlerObj.activate);
						allHandles[path] = handlerObj;
					}
				}
			},

			/**
			  Start the url controller by initializing the router

			  @method start
			 **/
			start : function() {
				router.init();
			}
		};

	};

	/**
	  Adds a new path to the router

	  @method goTo
	  @param {String} newPath New path
	 **/
	UrlController.goTo = function(newPath) {
		Helpers.Router.routeTo(newPath);
	};

	return UrlController;
});
