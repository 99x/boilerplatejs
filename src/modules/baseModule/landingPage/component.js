define(['Boiler', 'text!./view.html'], function(Boiler, template) {

	var RouteHandler = function(moduleContext) {
		var panel = new Boiler.UiPanel(template);
		this.activate = function(parent, params) {
			panel.appendTo(parent);
		};

		this.deactivate = function() {
			if (panel) {
				panel.remove();
			}
		}
	};

	return RouteHandler;

}); 