define(['_boiler_', './routes', './settings'], function (Boiler, routes, settings) {

    var ModuleContext = function (globalContext) {

        var moduleContext = new Boiler.Context("sampleModule1", globalContext);
        moduleContext.addSettings(settings);

        var controller = new Boiler.UrlController(moduleContext, $(".appcontent"));
        controller.addRoutes(routes);
        controller.start();
    };
    
    return ModuleContext;

});