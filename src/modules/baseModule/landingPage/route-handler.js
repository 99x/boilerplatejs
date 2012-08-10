define(['_boiler_', 'text!./view.html' ], function(Boiler, template) {

	var RouteHandler = function(moduleContext) {
		return {
			activate : function(parent) {
				new Boiler.UiPanel(template, parent);
			}
		};
	};

	return RouteHandler;

});