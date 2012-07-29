define(['_boiler_', 'text!./view.html', './viewmodel'],
		function (Boiler, template, ViewModel) {

		    return function (moduleContext, parent, params) {

		        var panel = new Boiler.UiPanel(template, parent);
		        var vm = new ViewModel(moduleContext, params.initvalue);
		        ko.applyBindings(vm, panel.getDomElement());
		    }

		});