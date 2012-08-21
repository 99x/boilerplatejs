define(['Boiler', './settings', './employeeList/component', './employeeDetails/component', './salesDashboard/component'], function(Boiler, settings, EmployeeListRouteHandler, EmployeeDetailRouteHandler, SalesDashboardRouteHandler) {

	var Module = function(globalContext) {

		var context = new Boiler.Context(globalContext);
		context.addSettings(settings);

		var controller = new Boiler.UrlController($(".appcontent"));
		controller.addRoutes({
			'employee/all' : new EmployeeListRouteHandler(context),
			'employee/{id}' : new EmployeeDetailRouteHandler(context),
			'sales' : new SalesDashboardRouteHandler(context)
		});
		controller.start();
	};

	return Module;

}); 