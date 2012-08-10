define(['Boiler', './settings', './employeeList/route-handler', './employeeDetails/route-handler','./salesDashboard/route-handler'], function (Boiler, settings, EmployeeListRouteHandler, EmployeeDetailRouteHandler, SalesDashboardRouteHandler) {

    var routes = {
		'employee/all' : EmployeeListRouteHandler,
		'employee/{id}' : EmployeeDetailRouteHandler,
    	'sales' : SalesDashboardRouteHandler
	};
	
    var ModuleContext = function (globalContext) {
    	
        var moduleContext = new Boiler.Context("sampleModule2", globalContext);
        moduleContext.addSettings(settings);

        var controller = new Boiler.UrlController(moduleContext, $(".appcontent"));
        controller.addRoutes(routes);
        controller.start();
    };
    
    return ModuleContext;

});