/*
* This is the definition file for creating route path handles for a controller. 
* One can add multiple handler objects by specifying a route path on what 
* they should be activated. Handler objects needs a method 'activate(params)'
* for the controller to invoke. 
*/
define(function (require) {

    /* 
    * return a structure containing the route path and handler classes.
    * use 'require' function to load the handler functions from relevant
    * script files.
    */
    return {
        'departments': require('./departments/route-handler'),
        'helloearth': require('./helloEarth/route-handler')
    };
});