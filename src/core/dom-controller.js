﻿define([], function () {

	/**
	DOM controller is used when it is required to add certain elements to the DOM when there is a url change
	 
	@namespace Boiler
 	@module BoilerCoreClasses
	@class DomController
	@constructor
	@param {Object} context 
	*/
    var DomController =  function (context) {

        var self = this;
        self.handles = {};

        return {
        	/**
			Add routes

			@method addRoutes		
			@param {Object} newHandles
			**/	
            addRoutes: function (newHandles) {
                _.extend(self.handles, newHandles);
            },
			/**
			Start the DOM controller

			@method start
			**/	
            start: function () {
                for (path in self.handles) {
                    var HandlerClass = self.handles[path];
                    $("." + path).each(function (index) {
                        var paramString = $(this).attr("params");
                        var params = paramString ? eval("({" + paramString + "})") : {};
                        var handlerObj = new HandlerClass(context);
                        handlerObj.activate($(this), params);
                    });
                }
            }
        };

    };
    
    return DomController;
});
