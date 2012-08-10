define(['Boiler', './routes', './settings'], function (Boiler, routes, settings) {

    var ModuleContext = function (globalContext) {
        var moduleContext = new Boiler.Context("sampleModule2", globalContext);
        moduleContext.addSettings(settings);

        var controller = new Boiler.UrlController(moduleContext, $(".appcontent"));
        controller.addRoutes(routes);
        controller.start();
    };
    
    return ModuleContext;

});