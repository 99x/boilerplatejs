define(['Boiler', './mainMenu/route-handler', './language/route-handler', './theme/route-handler', './landingPage/component'], function(Boiler, MainMenuRouteHandler, LanguageRouteHandler, ThemeRouteHandler, LandingPageComponent) {

	var Module = function(globalContext) {
		var context = new Boiler.Context(globalContext);

		//scoped DomController that will be effective only on $('#page-content')
		var controller = new Boiler.DomController($('#page-content'));
		//add routes with DOM node selector queries and relavant components
		controller.addRoutes({
			".main-menu" : new MainMenuRouteHandler(context),
			".language" : new LanguageRouteHandler(context),
			".theme" : new ThemeRouteHandler(context)
		});
		controller.start();

		//the landing page should respond to the root URL, so let's use an URLController too
		var controller = new Boiler.UrlController($(".appcontent"));
		controller.addRoutes({
			"/" : new LandingPageComponent()
		});
		controller.start();
	};

	return Module;

});
