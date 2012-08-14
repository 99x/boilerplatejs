define([ 'Boiler', 'text!./view.html', './chartViewPanel/component', './treeViewPanel/component' ], 
		function(Boiler, parentViewText, ChartViewComponent, TreeViewComponent) {
	
	var Component = function(parentEl, vm) {
		var splitterPanel = new Boiler.UiPanel(parentViewText, parentEl);
		new TreeViewComponent(vm, splitterPanel.getJQueryElement());
		new ChartViewComponent(vm, splitterPanel.getJQueryElement());
		
	};

	return Component;
});