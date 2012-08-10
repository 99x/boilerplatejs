define(['Boiler', './settings', './departments/route-handler', './helloEarth/route-handler'], function(Boiler, settings, DepartmentRouteHandler, HelloEarthRouteHandler) {
	
	var routes = {
		'departments' : DepartmentRouteHandler,
		'helloearth' : HelloEarthRouteHandler
	};

    var ModuleContext = function (globalContext) {
		
        var moduleContext = new Boiler.Context("sampleModule1", globalContext);
        moduleContext.addSettings(settings);

        var controller = new Boiler.UrlController(moduleContext, $(".appcontent"));
        controller.addRoutes(routes);
        controller.start();
        
        var controller = new Boiler.DomController(moduleContext);
        controller.addRoutes(routes);
        controller.start();
    };
    
    return ModuleContext;

});