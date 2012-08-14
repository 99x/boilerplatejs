define(['Boiler', 'text!./view.html', './viewmodel', './chartViewPanel/component', './treeViewPanel/component'], function(Boiler, parentViewText, ViewModel, ChartViewComponent, TreeViewComponent) {

	var Component = function(context) {

		var panel, vm = null;

		this.activate = function(parent, params) {
			if (!panel) {
				vm = new ViewModel(context);
				panel = new Boiler.UiPanel(parentViewText);
				panel.getJQueryElement().append(new TreeViewComponent().getJQueryElement());
				panel.getJQueryElement().append(new ChartViewComponent().getJQueryElement());
				panel.appendTo(parent);
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
