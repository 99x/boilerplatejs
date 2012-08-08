define(['_boiler_', './mainMenu/route-handler', './language/route-handler'], function (Boiler, MainMenuRouteHandler, LanguageRouteHandler) {

    var BaseModuleContext = function(globalContext) {
        var moduleContext = new Boiler.Context("baseModule", globalContext);
        var controller = new Boiler.DomController(moduleContext);
        controller.addRoutes({ "main-menu": MainMenuRouteHandler, "language": LanguageRouteHandler });
        controller.start();
    };
    
    return BaseModuleContext;

});