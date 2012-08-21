define(['Boiler', './settings', './departments/component', './clickCounter/component'], function(Boiler, settings, DepartmentComponent, ClickCounterComponent) {

	var Module = function(globalContext) {

		var context = new Boiler.Context("sampleModule1", globalContext);
		context.addSettings(settings);

		var controller = new Boiler.UrlController($(".appcontent"));
		controller.addRoutes( {
			'departments/:name:' : new DepartmentComponent(context),
			'clickcounter' : new ClickCounterComponent(context)
		});
		controller.start();

	};

	return Module;

});
