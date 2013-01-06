define(['./helpers/_helpers_'], function (Helpers) {


	/**
	  Context is one of the most important classes in boilerplate. This represents a sandboxed environment
	  for writing group of functionalities. Contexts can be nested to create hierarchies for complex 
	  implementations. 
	  For example, 
	  - a product suit may have multiple products, 
	  - and a product may have multiple modules,
	  - and a module may have multiple submodules.
	  It is possible to create such hierarchies by nesting contexts. Context can provide several 
	  important services such as 'settings store', 'pub-sub event infrastructure', 'logging', etc.

	  @namespace Boiler
	  @module BoilerCoreClasses
	  @class Context
	  @constructor
	  @param {Object} parentContext reference to a parent context    
	 **/
	var Context = function (parentContext) {   	
		this.parentContext = parentContext;
		this.mediator = this.parentContext ? this.parentContext.mediator : new Helpers.Mediator();
		this.settings = this.parentContext ? new Helpers.Settings(this.parentContext.settings) : new Helpers.Settings();
	};


	/**
	 * This is the method used to get settings from the context. This will return an object that has 
	 * settings as object properties. Consumers can simply use the settings' property keys 
	 * to retrieve values. For example, context.getSettings().base-server-url will look for a 
	 * setting object defined under the 'base-server-url' property.
	 *
	 * If context is a part of a context hierarchy, the settings object returned will contain 
	 * settings of all parent contexts. Settings from child contexts will override settings from 
	 * parent contexts, if same key exists.
	 *
	 * To improve performance, it is a good practice to store the returned object and reduce the 
	 * number of calls to this method.

	 @method getSettings
	 @return {Object} settings
	 **/
	Context.prototype.getSettings = function () {
		return this.settings.items();
	};

	/**
	 * One can pass an object containing settings as properties in it. If the existing
	 * settings contain a properties with same key, those will be replaced.

	 @method addSettings
	 @param {Object} newSettings object containing settings as properties in it
	 **/
	Context.prototype.addSettings = function (newSettings) {
		this.settings.load(newSettings);
	};

	/**
	 * This is the method to raise an event in the context. All subscribers in the same context hierarchy
	 * will be notified. The first parameter is the event name as a string, and the next parameter is the 
	 * event data as a object.

	 @method notify
	 @param {String} event Event name
	 @param {Object} params Event data
	 **/
	Context.prototype.notify = function (event, params) {
		this.mediator.notify(event, params);
	};

	/**
	 * The method for subscribing to receive events. first parameter is the name of the event you wish
	 * to receive. Next, is the callback function to invoke when the event has occurred. The callback  
	 * function may have a parameter in case it is interesting to receive the event data as well.

	 @method listen
	 @param {String} event Event name
	 @param {Object} fn Callback function
	 **/
	Context.prototype.listen = function (event, fn) {
		this.mediator.listen(event, fn);
	};

	/**
	 * Set the language for the whole system. Will cause the page to refresh 

	 @method setLanguage
	 @param {String} lang
	 @return {Object} object
	 **/
	Context.prototype.setLanguage = function (lang) {
		return Helpers.Localizer.setLanguage(lang);
	};

	/**
	 * Clear any language settings stored. Falls back to browser language detection 

	 @method clearLanguage
	 @return {Object} object
	 **/
	Context.prototype.clearLanguage = function () {
		return Helpers.Localizer.clearLanguage();
	};


	/**
	 * If someone is interested in obtaining the parent context, this method could be used. But it is not a
	 * good practice to work directly on contexts other than your immediate. Instead use events to communicate.

	 @method getParentContext
	 @return {Object} parentContext Parent context object
	 **/
	Context.prototype.getParentContext = function () {
		return this.parentContext;
	};

	/**
	 * Helper method to construct child contexts under this parent context.
	 * Children will receive a reference to this object through a constructor argument.

	 @method loadChildContexts
	 @param {ObjectArray} children
	 **/
	Context.prototype.loadChildContexts = function (children) {
		for (var i = 0; i < children.length; i++) {
			var ChildContextClass = children[i];
			new ChildContextClass(this); //initializes the module
		}
	};

	//now we have built our Context class with methods. Lets return it so that callers may instantiate.
	return Context;
});
