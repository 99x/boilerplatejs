define(['Boiler', 'text!./view.html', './viewmodel'],
		function (Boiler, template, ViewModel) {

		    var Component = function (moduleContext, parent, params) {
		        var panel = new Boiler.UiPanel(template, parent);
		        var vm = new ViewModel(moduleContext, params.initvalue);
		        ko.applyBindings(vm, panel.getDomElement());
		    };
		    
		    return Component;

		});