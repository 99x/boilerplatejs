define(['Boiler', 'text!./view.html', './controller'], function(Boiler, template, Controller) {

	var Component = function(moduleContext) {

		var panel = null;

		return {
			activate : function(parent) {
				if (!panel) {
					//create the theme selection component
					panel = new Boiler.ViewTemplate(parent, template, null);
					//create our controller that will handle user events
					new Controller(moduleContext).init();
				}
				panel.show();
			},

			deactivate : function() {
				if (panel) {
					panel.hide();
				}
			}
		};
	};

	return Component;

});
