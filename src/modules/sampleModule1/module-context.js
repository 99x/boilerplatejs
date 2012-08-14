define(['Boiler', './settings', './departments/component', './helloEarth/route-handler'], function(Boiler, settings, DepartmentRouteHandler, HelloEarthRouteHandler) {

	var routes = {
		'departments' : DepartmentRouteHandler,
		'helloearth' : HelloEarthRouteHandler
	};

	var ModuleContext = function(globalContext) {

		var moduleContext = new Boiler.Context("sampleModule1", globalContext);
		moduleContext.addSettings(settings);

		var controller = new Boiler.UrlController(moduleContext, $(".appcontent"));
		controller.addRoutes({'departments' : DepartmentRouteHandler});
		controller.start();

		var controller2 = new Boiler.UrlController(moduleContext, $(".appcontent"));
		controller2.addRoutes({'helloearth' : HelloEarthRouteHandler});
		controller2.start();

		var controller = new Boiler.DomController(moduleContext);
		controller.addRoutes(routes);
		controller.start();
	};

	return ModuleContext;

}); 