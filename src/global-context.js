/*
 * This file holds the function (or you may call it a 'class' if you are from .NET or Java world)
 * to create a root context. 'Boiler.Context' can be nested to create a hierachy of contexts 
 * for complex implementations. Below we use requirejs to import following files 
 *      '_boiler_'      : Namespace for accessing the core boilerplate functions
 *      './settings'    : The global setting ( to make available for all children contexts)
 *      './modules'     : The object containing all sub module calsses
 *
 * Note: when we define the variables in AMD callback function, we use PascalCase for namespaces
 * and classes ('Boiler' in the case), whereas object instances ('settings' and 'modules') 
 * are represented with camelCase variable names.
 */
define(["_boiler_", "./settings", "./modules/module-contexts"], function (Boiler, settings, moduleContexts) {

    /*
     * Following is our function representing GlobalContext 'class'. Others can import this 
     * script as a AMD module and they will obtain the function to be used as a 'class' in 
     * creating instances.
     */
    return function () {
        //Lets use core Boiler classes to create our global context instance
        var globalContext = new Boiler.Context();
        //now lets add settings, which are to be available as global settings
        globalContext.addSettings(settings);
        //here we load the sub modules of the global context
        globalContext.loadChildContexts(moduleContexts);
    };
});
