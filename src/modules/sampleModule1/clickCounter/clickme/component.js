define(function(require) {

    // Load the dependencies
    var Boiler = require('Boiler'), 
        template = require('text!./view.html'),
        ViewModel = require('./viewmodel');


	var Component = function(moduleContext) {
		var vm, panel = null;
		this.initialize = function (parent) {
		    if (!panel) {
		        panel = new Boiler.ViewTemplate(parent, template, null);
		        vm = new ViewModel(moduleContext);
		        ko.applyBindings(vm, panel.getDomElement());
		    }
		};
	};

	return Component;

}); 