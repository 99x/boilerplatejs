define(['Boiler', './viewmodel', 'text!./view.html'], function(Boiler, ViewModel, template) {

	var Component = function(moduleContext) {

		var vm, panel = null;

		this.initialize = function(parent) {
			if (!panel) {
				panel = new Boiler.ViewTemplate(parent, template, null);
				vm = new ViewModel(moduleContext);
				ko.applyBindings(vm, panel.getDomElement());
			}
		}
	};

	return Component;

}); 