define(['_boiler_', 'text!./view.html'], function (Boiler, template) {

    var RouteHandler = function(moduleContext) {
		return {
			activate: function(parent) {
                new Boiler.UiPanel(template, parent);
			}
		};
	};

    return function (globalContext) {
        var moduleContext = new Boiler.Context(globalContext);
        var controller = new Boiler.DomController(moduleContext);
        controller.addRoutes({ "mainMenu": RouteHandler });
        controller.start();
    };

});