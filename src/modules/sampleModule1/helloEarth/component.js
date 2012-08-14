define(['Boiler', './viewmodel', 'text!./view.html'], function(Boiler, ViewModel, template) {

	var Component = function(moduleContext) {

		var panel = new Boiler.UiPanel(template, null, null);
		var vm = null;

		this.activate = function(parent, params) {
			if (!vm) {
				vm = new ViewModel(moduleContext);
			}
			panel.appendTo(parent);
			ko.applyBindings(vm, panel.getDomElement());
		}

		this.deactivate = function() {
			panel.remove();
		}

	};

	return Component;

}); 