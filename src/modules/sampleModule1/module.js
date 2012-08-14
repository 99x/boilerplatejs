define(['Boiler', './settings', './departments/component', './helloEarth/component'], function(Boiler, settings, DepartmentComponent, HelloEarthComponent) {

	var Module = function(globalContext) {

		var context = new Boiler.Context("sampleModule1", globalContext);
		context.addSettings(settings);

		var controller = new Boiler.UrlController($(".appcontent"));
		controller.addRoutes( {
			'departments/:name:' : new DepartmentComponent(context),
			'helloearth' : new HelloEarthComponent(context)
		});
		controller.start();

	};

	return Module;

});
