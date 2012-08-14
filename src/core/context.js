﻿define(['./helpers/_helpers_'], function (Helpers) {

    /*
    * This is the constructor function for the context and it takes a reference to a parent
    * context. If supplied, it will be initialized to support chaining of it's functionalities.
    * For example, all child contexts will inherit the settings of its parent contexts. Event notifications 
    * will bubble through the context hierachy so that inter context communication is possibe 
    * within a hierachy tree.
    *
    * Lets assign the function to a variable which we will be returning at the end of the script. Below
    * the constructor function, you can find instance methods for Context class. This might appear strange
    * since they are defined outside the class body and attached to 'prototype' of the class. Although it is 
    * possible to define methods within the class body, we use this approach for better performance. For
    * more information read about prototypes in javascripts.
    */
    /**
	Context is one of the most important classes in boilerplate. This represents a sandboxed environment
  	for writing group of functionalities. Contexts can be nested to create hierachies for complex 
  	implementations. 
  	For example, 
    a product suit may have multiple products, 
    and a product may have multiple modules,
    and a module may have multiple submodules.
    It is possible to create such hierachies by nesting contexts. Context can provide several 
    necessary services such as 'settings store', 'pub-sub event infrastructure', 'logging', etc.
 	
 	@namespace Boiler
 	@module BoilerCoreClasses
	@class Context
	@constructor
	@param {Object} uniqueId
	@param {Object} parentContext reference to a parent context    
	**/
    var Context = function (uniqueId, parentContext) {   	
    	if (uniqueId) {
    		this.id = uniqueId;
    	} else {
    		throw "an id must be defined for a context";
    	}
        this.parentContext = parentContext;
        this.mediator = this.parentContext ? this.parentContext.mediator : new Helpers.Mediator();
        this.settings = this.parentContext ? new Helpers.Settings(this.parentContext.settings) : new Helpers.Settings();
    };
    /**
	Returns the context id

	@method getUid
	@return {Object} context id
	**/
    Context.prototype.getUid = function () {
        return this.id;
    };

    /**
    * This is the method to get settings from the context. This will return a object that has 
    * settings as object properties. Consimers can simply use the settings property keys 
    * to retrieve values. For example, context.getSettings().base-server-url will look for a 
    * setting object defined under 'base-server-url' preperty.
    *
    * If context is a part of a context hierachy, the settings object returned will contain 
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
    * settings contain properties with same key, those will be replaced.

	@method addSettings
	@param {Object} newSettings object containing settings as properties in it
	**/
    Context.prototype.addSettings = function (newSettings) {
        this.settings.load(newSettings);
    };

    /**
    * This is the method to raise an event in the context. All subscribers in the same context hierachy
    * will be notified. first parameter is the event name as a string, and the next parameter is the 
    * event data as a object.

	@method notify
	@param {String} event Event name
	@param {Object} params Event data
	**/
    Context.prototype.notify = function (event, params) {
        this.mediator.notify(event, params);
    };

    /**
    * The method for subscribing to recieve events. first parameter is the name of the event you wish
    * to recieve. Next is the callback function incase event has occurred. Callback function may have a 
    * parameter in case it is interesting to recieve the event data as well.

	@method listen
	@param {String} event Event name
	@param {Object} fn Callback function
	**/
    Context.prototype.listen = function (event, fn) {
        this.mediator.listen(event, fn);
    };

    /**
    * It is possible to use the context as a medium to share objects. Since context is usually
    * passed arround, it serves the purpose of sharing well.

	@method persistObject
	@param {String} key name of the object to store
	@param {Object} objectToStore object to store in
	**/
    Context.prototype.persistObject = function (key, objectToStore) {
        Helpers.Storage.persist(key, objectToStore);
    };

    /**
    * Allows developers to retrieve objects that are stored (using 'store' method) in 
    * this context. 
    
	@method retreiveObject
	@param {String} key name of the object
	@return {Object} object The stored object if found, else 'undefined'
	**/
    Context.prototype.retreiveObject = function (key) {
        return Helpers.Storage.retreive(key);
    };
    
    /**
     * Remove the object stored in persistance store. 
    
	@method removeObject
	@param {String} key Name of the object to be removed
	@return {Object} object
	**/
     Context.prototype.removeObject = function (key) {
         return Helpers.Storage.remove(key);
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
    * Children will recieve a reference to this object through a constructor argument.
    
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
