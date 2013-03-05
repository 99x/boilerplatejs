define(function(require) {

    // Load the dependencies
    var Boiler = require('Boiler'), 
        template = require('text!./view.html'),
        ViewModel = require('./viewmodel'), 
        stylePath = require('path!./style.css');

	var Component = function(moduleContext) {

		var vm, panel = null;

		this.initialize = function (parent) {
		    if (!panel) {
		        panel = new Boiler.ViewTemplate(parent, template, null);
		        Boiler.ViewTemplate.setStyleLink(stylePath);
		        vm = new ViewModel(moduleContext);
		        ko.applyBindings(vm, panel.getDomElement());
		    }
		};
	};

	return Component;

}); 