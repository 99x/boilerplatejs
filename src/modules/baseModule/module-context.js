define(['_boiler_', './mainMenu/route-handler', './language/route-handler', './theme/route-handler'], function (Boiler, MainMenuRouteHandler, LanguageRouteHandler, ThemeRouteHandler) {

    var BaseModuleContext = function(globalContext) {
        var moduleContext = new Boiler.Context("baseModule", globalContext);
        var controller = new Boiler.DomController(moduleContext);
        controller.addRoutes({ "main-menu": MainMenuRouteHandler, "language": LanguageRouteHandler, "theme" : ThemeRouteHandler });
        controller.start();
    };
    
    return BaseModuleContext;

});