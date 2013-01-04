define(['Boiler', './viewmodel', 'text!./view.html', 'path!./style.css'], function(Boiler, ViewModel, template, stylePath) {

	var Component = function(moduleContext) {

		var vm, panel = null;

		this.initialize = function (parent) {
		    if (!panel) {
		        panel = new Boiler.ViewTemplate(parent, template, null);
		        Boiler.ViewTemplate.setStyleLink(stylePath);
		        vm = new ViewModel(moduleContext);
		        ko.applyBindings(vm, panel.getDomElement());
		    }
		};
	};

	return Component;

}); 