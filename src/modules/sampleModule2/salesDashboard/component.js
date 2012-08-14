define(['Boiler', 'text!./view.html', './viewmodel', './chartViewPanel/component', './treeViewPanel/component'], function(Boiler, parentViewText, ViewModel, ChartViewComponent, TreeViewComponent) {

	var Component = function(context) {
		var vm = new ViewModel(context);
		var splitterPanel = new Boiler.UiPanel(parentViewText);
		var treePanel = new TreeViewComponent();
		var chartPanel = new ChartViewComponent();

		this.activate = function(parent, params) {
			splitterPanel.appendTo(parent);
			treePanel.appendTo(splitterPanel.getJQueryElement());
			chartPanel.appendTo(splitterPanel.getJQueryElement());

			ko.applyBindings(vm, splitterPanel.getDomElement());

		};

		this.deactivate = function() {
			splitterPanel.remove();
		};

	};

	return Component;
});
