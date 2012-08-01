define(['_boiler_', 'text!./view.html', 'i18n!./nls/resources'], function (Boiler, template, nls) {

    var RouteHandler = function(moduleContext) {
		return {
			activate: function(parent) {
				console.log(nls);
                new Boiler.UiPanel(template, parent, nls);
			}
		};
	};

    return function(globalContext) {
        var moduleContext = new Boiler.Context(globalContext);
        var controller = new Boiler.DomController(moduleContext);
        controller.addRoutes({ "mainMenu": RouteHandler });
        controller.start();
    };

});