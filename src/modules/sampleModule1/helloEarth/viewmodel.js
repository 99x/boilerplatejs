define([], function () {

    return function (moduleContext) {
        this.firstName = ko.observable("hello");
        this.lastName = ko.observable("earth");

        this.fullName = ko.computed(function () {
            // Knockout tracks dependencies automatically. It knows that fullName depends on firstName and lastName, because these get called when evaluating fullName.
            return this.firstName() + " " + this.lastName();
        }, this);
    };
});
