/*
 * This is the exact implementation (copied) from Backbone which is used to create classes that are extensible.
 * see: https://github.com/documentcloud/backbone/blob/master/backbone.js
 * One can create a function and attach this module as it's 'extend' function.
 * 
 * e.g. extensible Router class:
 
		 define(['_util'], function(Util) {
			var router = function(parent) {
				//private variables and methods
				//...
				//call 'initialize' function once everything is setup
				this.initialize.apply(this, arguments);
			};
			//attach the 'extend function'
			router.extend = Util.Extend;
			//default 'initialize' function
			router.prototype.initialize = function(){};
			//add any protected methods to the prototype of the function
			router.prototype.myMethod = function(arg) {};
			router.prototype.init = function() {
			
			return router;
		 });
		 
 * e.g. extension of the Route class
 
		  define([],function( ) {
			return Core.Router.extend({
				initialize : function(globalRouter){
					Core.Router.prototype.initialize.call(this);
				}
			});
		  });
		  
 */


define([], function() {

	// Shared empty constructor function to aid in prototype-chain creation.
	var ctor = function() {
	};

	// Helper function to correctly set up the prototype chain, for subclasses.
	// Similar to `goog.inherits`, but uses a hash of prototype properties and
	// class properties to be extended.
	var inherits = function(parent, protoProps, staticProps) {
		var child;

		// The constructor function for the new subclass is either defined by
		// you
		// (the "constructor" property in your `extend` definition), or
		// defaulted
		// by us to simply call the parent's constructor.
		if (protoProps && protoProps.hasOwnProperty('constructor')) {
			child = protoProps.constructor;
		} else {
			child = function() {
				parent.apply(this, arguments);
			};
		}

		// Inherit class (static) properties from parent.
		_.extend(child, parent);

		// Set the prototype chain to inherit from `parent`, without calling
		// `parent`'s constructor function.
		ctor.prototype = parent.prototype;
		child.prototype = new ctor();

		// Add prototype properties (instance properties) to the subclass,
		// if supplied.
		if (protoProps)
			_.extend(child.prototype, protoProps);

		// Add static properties to the constructor function, if supplied.
		if (staticProps)
			_.extend(child, staticProps);

		// Correctly set child's `prototype.constructor`.
		child.prototype.constructor = child;

		// Set a convenience property in case the parent's prototype is needed
		// later.
		child.parent = parent.prototype;

		return child;
	};

	var Extend = function(protoProps, classProps) {
		var child = inherits(this, protoProps, classProps);
		child.Extend = Extend;
		return child;
	};
	
	return Extend;

	
	
});
