define([ '_boiler_', 'text!./view.html', './chartViewPanel/component', './treeViewPanel/component' ], 
		function(Boiler, parentViewText, ChartViewComponent, TreeViewComponent) {
	
	var Component = function(parentEl, vm) {
		var splitterPanel = new Boiler.UiPanel(parentViewText, parentEl);
		new TreeViewComponent(vm, splitterPanel.getJqueryElement());
		new ChartViewComponent(vm, splitterPanel.getJqueryElement());
		
	};

	return Component;
});