define(['_boiler_', './routes', './settings'], function (Boiler, routes, settings) {



    return function (globalContext) {

        var self = this;

        var moduleContext = new Boiler.Context(globalContext);
        moduleContext.addSettings(settings);

        var controller = new Boiler.UrlController(moduleContext, $(".appcontent"));
        controller.addRoutes(routes);
        controller.start();
    };

});