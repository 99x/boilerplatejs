define(['Boiler', './mainMenu/route-handler', './language/route-handler', './theme/route-handler', './landingPage/component'], function (Boiler, MainMenuRouteHandler, LanguageRouteHandler, ThemeRouteHandler, LandingPageComponent) {

    var BaseModuleContext = function(globalContext) {
        var moduleContext = new Boiler.Context("baseModule", globalContext);
        var controller = new Boiler.DomController(moduleContext);
        controller.addRoutes({ "main-menu": MainMenuRouteHandler, "language": LanguageRouteHandler, "theme" : ThemeRouteHandler });
        controller.start();
        
        var controller = new Boiler.UrlController($(".appcontent"));
        controller.addRoutes({"/": new LandingPageComponent()});
        controller.start();
    };
    
    return BaseModuleContext;

});