define(['_boiler_', 'text!./view.html', './chartViewPanel/component', './treeViewPanel/component'], function (Boiler, parentViewText, ChartViewComponent, TreeViewComponent) {
	return function(parentEl, vm) {

	    var splitterPanel = new Boiler.UiPanel(parentViewText, parentEl);

	    var chartPanel = new ChartViewComponent(vm, splitterPanel.getJqueryElement());
	    var treePanel = new TreeViewComponent(vm, splitterPanel.getJqueryElement());

	};
});