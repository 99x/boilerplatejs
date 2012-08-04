define(['_boiler_', './mainMenu/route-handler', './language/route-handler'], function (Boiler, MainMenuRouteHandler, LanguageRouteHandler) {



    return function(globalContext) {
        var moduleContext = new Boiler.Context(globalContext);
        var controller = new Boiler.DomController(moduleContext);
        controller.addRoutes({ "mainMenu": MainMenuRouteHandler, "language": LanguageRouteHandler });
        controller.start();
    };

});