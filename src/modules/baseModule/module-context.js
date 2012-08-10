define(['_boiler_', './mainMenu/route-handler', './language/route-handler', './theme/route-handler', './landingPage/route-handler'], function (Boiler, MainMenuRouteHandler, LanguageRouteHandler, ThemeRouteHandler, LandingPageRouteHandler) {

    var BaseModuleContext = function(globalContext) {
        var moduleContext = new Boiler.Context("baseModule", globalContext);
        var controller = new Boiler.DomController(moduleContext);
        controller.addRoutes({ "main-menu": MainMenuRouteHandler, "language": LanguageRouteHandler, "theme" : ThemeRouteHandler });
        controller.start();
        
        var controller = new Boiler.UrlController(moduleContext, $(".appcontent"));
        controller.addRoutes({"/":LandingPageRouteHandler});
        controller.start();
    };
    
    return BaseModuleContext;

});