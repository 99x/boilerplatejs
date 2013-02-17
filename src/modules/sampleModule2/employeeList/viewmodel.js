define(function(require) {

    // Load the dependencies
    var Boiler = require('Boiler');

    var ViewModel = function (moduleContext) {
        var self = this;
        
        this.salesPersons = ko.observableArray();

        this.personClicked = function (person) {
            Boiler.UrlController.goTo("employee/"+ person.id);
        };

        /*
         * Initialization code:
         * Get the employee list from server
         */
        $.getJSON(moduleContext.getSettings().urls.employees, function (result) {
            self.salesPersons(result);
        });

    };
    
    return ViewModel;
});
