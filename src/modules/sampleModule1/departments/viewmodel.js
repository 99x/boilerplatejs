define([], function () {

    return function (moduleContext) {

        var self = this;
        this.itemToAdd = ko.observable('Boiler Department');
        this.allItems = ko.observableArray([]);
        this.selectedItems = ko.observableArray();

        this.addItem = function () {
            if ((this.itemToAdd() != "") && (this.allItems.indexOf(this.itemToAdd()) < 0)) // Prevent blanks and duplicates
                this.allItems.push(this.itemToAdd());
            this.itemToAdd(""); // Clear the text box
        };

        this.removeSelected = function () {
            this.allItems.removeAll(this.selectedItems());
            this.selectedItems([]); // Clear selection
        };

        this.sortItems = function () {
            this.allItems.sort();
        };

        $.getJSON(moduleContext.getSettings().urls.departments, function (result) {
            self.allItems(result);
        });



    };
});
