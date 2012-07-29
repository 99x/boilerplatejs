define(['_boiler_', 'text!./view.html', './viewmodel' ], function(Boiler, template, ViewModel) {


    return function (moduleContext, parent, params) {
        var vm = new ViewModel(moduleContext);
        var panel = new Boiler.UiPanel(template, parent);
        ko.applyBindings(vm, panel.getDomElement());
    }
		
}); 