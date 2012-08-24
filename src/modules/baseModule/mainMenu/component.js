define(['Boiler', 'text!./view.html', 'i18n!./nls/resources'], function(Boiler, template, nls) {

	var RouteHandler = function(moduleContext) {
		var panel = null;
		return {
			activate : function(parent) {
				panel = new Boiler.ViewTemplate(parent, template, nls);
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