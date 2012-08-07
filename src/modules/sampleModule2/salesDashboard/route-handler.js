define([ './component', './viewmodel' ], function(SplitterComponent, ViewModel) {
	var RouteHandler = function(moduleContext) {
		
		var vm = new ViewModel(moduleContext);

		this.activate = function(parentEl, vals) {
			new SplitterComponent(parentEl, vm);
		};

	};

	return RouteHandler;
});