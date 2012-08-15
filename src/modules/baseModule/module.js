define(['Boiler', './mainMenu/route-handler', './language/route-handler', './theme/route-handler', './landingPage/component'], function(Boiler, MainMenuRouteHandler, LanguageRouteHandler, ThemeRouteHandler, LandingPageComponent) {

	var Module = function(globalContext) {
		var context = new Boiler.Context("baseModule", globalContext);

		var controller = new Boiler.DomController($('#page-content'));
		controller.addRoutes({
			".main-menu" : new MainMenuRouteHandler(context),
			".language" : new LanguageRouteHandler(context),
			".theme" : new ThemeRouteHandler(context)
		});
		controller.start();

		var controller = new Boiler.UrlController($(".appcontent"));
		controller.addRoutes({
			"/" : new LandingPageComponent()
		});
		controller.start();
	};

	return Module;

});
