define(['require', 'Boiler', 'text!./view.html', 'i18n!./nls/resources', 'path!./style.css'], function(require, Boiler, template, nls, cssPath) {

	var Component = function(moduleContext) {
		var panel = null;
		return {
			activate : function(parent) {
				panel = new Boiler.ViewTemplate(parent, template, nls);
				Boiler.ViewTemplate.setStyleLink(cssPath);
			},

			deactivate : function() {
				if (panel) {
					panel.remove();
				}
			}
		};
	};

	return Component;

}); 