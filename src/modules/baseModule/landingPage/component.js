define(['Boiler', 'text!./view.html'], function(Boiler, template) {

	var RouteHandler = function(moduleContext) {
		var panel = null;
		this.activate = function(parent, params) {
			if(!panel) {
				panel = new Boiler.UiPanel(template, parent);
			}
			panel.show();
		};

		this.deactivate = function() {
			if (panel) {
				panel.hide();
			}
		}
	};

	return RouteHandler;

}); 