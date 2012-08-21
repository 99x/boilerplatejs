define(['Boiler', './settings', './samplePanel1/component', './samplePanel2/component'], function(Boiler, settings, SamplePanel1, SamplePanel2) {

	var Module = function(globalContext) {

		var context = new Boiler.Context("sampleModule1", globalContext);
		context.addSettings(settings);

		var controller = new Boiler.UrlController($(".appcontent"));
		controller.addRoutes( {
			'samplepanel1' : new SamplePanel1(context),
			'samplepanel2' : new SamplePanel2(context)
		});
		controller.start();

	};

	return Module;

});
