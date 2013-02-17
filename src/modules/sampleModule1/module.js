define(function(require) {

    //dependencies
    var Boiler = require('Boiler'), 
    settings = require('./settings'), 
    DepartmentComponent = require('./departments/component'), 
    ClickCounterComponent = require('./clickCounter/component');

    return {
        initialize : function(parentContext) {
            //create a new context which is associated with the parent Context
            var context = new Boiler.Context(parentContext);
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
