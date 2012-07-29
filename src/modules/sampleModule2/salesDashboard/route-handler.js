define(['./component', './viewmodel'], function (SplitterComponent, ViewModel) {
    return function (moduleContext) {

        return {
            activate: function (parentEl, vals) {
                
                var vm = new ViewModel(moduleContext);
                var component = new SplitterComponent(parentEl, vm);
            }
        };

    };
});