define(function(require) {

    // Load the dependencies
    var Boiler = require('Boiler'), 
        template = require('text!./view.html'),
        ViewModel = require('./viewmodel');
        
	var Component = function(moduleContext) {

		var vm, panel = null;

		this.activate = function (parent, params) {
		    if (!panel) {
		        vm = new ViewModel(moduleContext);
		        panel = new Boiler.ViewTemplate(parent, template);
		        ko.applyBindings(vm, panel.getDomElement());
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
