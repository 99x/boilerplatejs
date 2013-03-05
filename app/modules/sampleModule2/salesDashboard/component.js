define(function(require) {

    // Load the dependencies
    var Boiler = require('Boiler'), 
        template = require('text!./view.html'),
        ViewModel = require('./viewmodel'),
        ChartViewComponent = require('./chartViewPanel/component'), 
        TreeViewComponent = require('./treeViewPanel/component');
        

	var Component = function(context) {

		var panel, vm = null;

		this.activate = function(parent, params) {
			if (!panel) {
				vm = new ViewModel(context);
				panel = new Boiler.ViewTemplate(parent, template);
				new TreeViewComponent(panel.getJQueryElement().find('#tree'));
				new ChartViewComponent(panel.getJQueryElement().find('#chart'));
				ko.applyBindings(vm, panel.getDomElement());
			}
			panel.show();
		};

		this.deactivate = function() {
			if (panel) {
				panel.hide();
			}

		};

	};

	return Component;
});
