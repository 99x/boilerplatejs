define(['_boiler_', 'text!./view.html', './viewmodel'], function (Boiler, template, ViewModel) {


    var Component = function (moduleContext, parent, id) {
        var vm = new ViewModel(moduleContext, id);
        var panel = new Boiler.UiPanel(template, parent);
        ko.applyBindings(vm, panel.getDomElement());

        this.dispose = function () {
            panel.dispose();
        };
    };
    
    return Component;

}); 