define(['_boiler_'], function (Boiler) {

    return function (moduleContext) {
        var self = this;
        this.salesPersons = ko.observableArray();

        this.personClicked = function (person) {
            Boiler.UrlController.goTo("employee/"+ person.id);
        };

        //load the data from the server
        $.getJSON(moduleContext.getSettings().urls.employees, function (result) {
            self.salesPersons(result);
        });

    };
});
