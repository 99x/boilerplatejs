define(['Boiler', 'text!./view.html'], function(Boiler, template) {

	var Component = function(moduleContext) {
		var panel = null;
		this.activate = function(parent) {
			if(!panel) {
				panel = new Boiler.ViewTemplate(parent, template);
			}
			panel.show();
		};

		this.deactivate = function() {
			if (panel) {
				panel.hide();
			}
		}
	};

	return Component;
}); 