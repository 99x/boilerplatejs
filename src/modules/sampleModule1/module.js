define(function(require) {

    //dependencies
    var Boiler = require('Boiler'), 
    settings = require('./settings'), 
    DepartmentComponent = require('./departments/component'), 
    ClickCounterComponent = require('./clickCounter/component');

    return {
        initialize : function(globalContext) {
            var context = new Boiler.Context(globalContext);
            context.addSettings(settings);

            var controller = new Boiler.UrlController($(".appcontent"));
            controller.addRoutes({
                'departments/:name:' : new DepartmentComponent(context),
                'clickcounter' : new ClickCounterComponent(context)
            });
            controller.start();
        }
    }

});
