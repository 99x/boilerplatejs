define([], function () {

	/**
	DOM controller is used when it is required to add certain elements to the DOM when there is a url change
	 
	@namespace Boiler
 	@module BoilerCoreClasses
	@class DomController
	@constructor
	@param {Object} context 
	*/
    var DomController =  function (parent) {

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
                    parent.find(path).each(function (index) {
                        var paramString = $(this).attr("params");
                        var params = paramString ? eval("({" + paramString + "})") : {};
                        
                        //ask other handlers on this component to deactivate
                        $(this).trigger('DEACTIVATE_HANDLERS');
                        
                        //bind the current handler for deactivation events
                        $(this).bind('DEACTIVATE_HANDLERS', function(){
                        	(function(handler) {
                        		handler.deactivate();
                        	})(self.handles[path]);
                        });
                        //activate the current handler
                        self.handles[path].activate($(this), params);
                    });
                }
            }
        };

    };
    
    return DomController;
});
