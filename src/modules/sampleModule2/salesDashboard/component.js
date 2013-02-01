define(['Boiler', 'text!./view.html', './viewmodel', './chartViewPanel/component', './treeViewPanel/component'], function(Boiler, viewText, ViewModel, ChartViewComponent, TreeViewComponent) {

	var Component = function(context) {

		var panel, vm = null;

		this.activate = function(parent, params) {
			if (!panel) {
				vm = new ViewModel(context);
				panel = new Boiler.ViewTemplate(parent, viewText);
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
