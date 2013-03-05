define(function(require) {

	var DEFAULT_DEPT_NAME = 'Boiler Department';

	var ViewModel = function(moduleContext) {

		var self = this;
		this.itemToAdd = ko.observable(DEFAULT_DEPT_NAME);
		this.allItems = ko.observableArray([]);
		this.selectedItems = ko.observableArray();

		this.initialize = function(deptName) {
			if (deptName) {
				this.itemToAdd(deptName);
			} else {
				this.itemToAdd(DEFAULT_DEPT_NAME);
			}
			$.getJSON(moduleContext.getSettings().urls.departments, function(result) {
				self.allItems(result);
			});
		};

		this.addItem = function() {
			if ((this.itemToAdd() !== "") && (this.allItems.indexOf(this.itemToAdd()) < 0)) {// Prevent blanks and duplicates
				this.allItems.push(this.itemToAdd());
			}
			this.itemToAdd("");
			// Clear the text box
		};

		this.removeSelected = function() {
			this.allItems.removeAll(this.selectedItems());
			this.selectedItems([]);
			// Clear selection
		};

		this.sortItems = function() {
			this.allItems.sort();
		};

	};

	return ViewModel;
});
