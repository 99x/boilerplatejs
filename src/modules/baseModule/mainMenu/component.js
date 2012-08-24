define(['Boiler', 'text!./view.html', 'i18n!./nls/resources', 'text!./style.css'], function(Boiler, template, nls, style) {

	var RouteHandler = function(moduleContext) {
		var panel = null;
		return {
			activate : function(parent) {
				panel = new Boiler.ViewTemplate(parent, template, nls, style);
			},

			deactivate : function() {
				if (panel) {
					panel.remove();
				}
			}
		};
	};

	return RouteHandler;

}); 