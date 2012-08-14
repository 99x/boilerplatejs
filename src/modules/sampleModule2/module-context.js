define(['Boiler', './settings', './employeeList/route-handler', './employeeDetails/route-handler', './salesDashboard/component'], function(Boiler, settings, EmployeeListRouteHandler, EmployeeDetailRouteHandler, SalesDashboardRouteHandler) {

	var ModuleContext = function(globalContext) {

		var context = new Boiler.Context("sampleModule2", globalContext);
		context.addSettings(settings);

		var controller = new Boiler.UrlController($(".appcontent"));
		controller.addRoutes({
			//'employee/all' : EmployeeListRouteHandler,
			//'employee/{id}' : EmployeeDetailRouteHandler,
			'sales' : new SalesDashboardRouteHandler(context)
		});
		controller.start();
	};

	return ModuleContext;

}); 