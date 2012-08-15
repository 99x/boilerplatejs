define(function (require) {

    /**
    * Here we define the frequently accessed core classes of boilerplatejs. We are creating a object
 	* that carry these classes as properties of it. This object is then used as a namespace when 
 	* accessing the core classes. This is a trick we use to aggregate classes under namespaces 
 	* since javascript has no formal way of grouping functions in to namespace.
    
    * Here you will notice we are not returning a function from this AMD module. We are returning a 
    * plain javascript object with its properties holding references to core classes (functions).
    * We use 'require' function from requirejs inside the object to load appropriate core classes
    * from the respective AMD modules.
	
	@namespace Boiler.Helpers
	@module BoilerCoreClasses
	@main BoilerCoreClasses
	**/
    return {
        Context : require("./core/context"),
        DomController : require("./core/dom-controller"),
        UrlController : require("./core/url-controller"),
        ViewTemplate: require("./core/view-template"),
        Helpers : require ("./core/helpers/_helpers_")
    };
});
