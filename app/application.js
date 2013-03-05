define(function(require) {
	
	//dependencies
    var Boiler = require("Boiler"), // BoilerplateJS namespace used to access core classes, see above for the definition
        settings = require("./settings"), //global settings file of the product suite
        modules = require("./modules/modules"); //file where all of your product modules will be listed

	//return an object with the public interface for an 'application' object. Read about module pattern for details.
    return {
        initialize : function() {

            /* In JavaScript, functions can be used similarly to classes in OO programming. Below,
             * we create an instance of 'Boiler.Context' by calling the 'new' operator. Then add
             * global settings. These will be propagated to child contexts
             */
            var globalContext = new Boiler.Context();
            globalContext.addSettings(settings);

            /* In BoilerplateJS, your product module hierachy is associated to a 'Context' heirachy. Below
             * we create the global 'Context' and load child contexts (representing your product sub modules)
             * to create a 'Context' tree (product modules as a tree).
             */
            for (var i = 0; i < modules.length; i++) {
                modules[i].initialize(globalContext);
            }

        }
    };
});

