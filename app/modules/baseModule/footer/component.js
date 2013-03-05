define(function(require) {

    // Load the dependencies
    var Boiler = require('Boiler'), 
        template = require('text!./view.html');

	var Component = function(moduleContext) {
		var panel = null;
		this.activate = function(parent) {
			if(!panel) {
				panel = new Boiler.ViewTemplate(parent, template);
			}
			panel.show();
		};

		this.deactivate = function () {
		    if (panel) {
		        panel.hide();
		    }
		};
	};

	return Component;
}); 