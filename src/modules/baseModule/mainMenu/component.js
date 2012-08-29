define(['require', 'Boiler', 'text!./view.html', 'i18n!./nls/resources'], function(require, Boiler, template, nls, style) {

	var RouteHandler = function(moduleContext) {
		var panel = null;
		return {
			activate : function(parent) {
				panel = new Boiler.ViewTemplate(parent, template, nls);
				Boiler.ViewTemplate.setStyleLink('languageStyleLink', require.toUrl('./style.css'));
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