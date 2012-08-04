define(['_boiler_', 'text!./view.html', 'i18n!./nls/resources' ], function(Boiler, template, nls) {

	var RouteHandler = function(moduleContext) {
		return {
			activate : function(parent) {
				new Boiler.UiPanel(template, parent, nls);
			}
		};
	};

	return RouteHandler;

});