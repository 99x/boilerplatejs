define(['Boiler', 'text!./view.html','text!./style.css', './viewmodel'], function(Boiler, template, styleText,  ViewModel) {

	var Component = function(moduleContext) {

		var vm, panel = null;

		this.activate = function (parent, params) {
		    if (!panel) {
		        vm = new ViewModel(moduleContext, params.id);
		        panel = new Boiler.ViewTemplate(parent, template, null, styleText);
		        ko.applyBindings(vm, panel.getDomElement());
		    }

		    vm.setEmployee(params.id);
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
