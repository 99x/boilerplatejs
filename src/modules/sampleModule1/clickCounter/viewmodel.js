define([], function () {

    var ViewModel = function (moduleContext) {
	    this.numberOfClicks = ko.observable(0);
	 
	    this.registerClick = function() {
	        this.numberOfClicks(this.numberOfClicks() + 1);
	    };
	 
	    this.resetClicks = function() {
	        this.numberOfClicks(0);
	    };
	 
	    this.hasClickedTooManyTimes = ko.computed(function() {
	        return this.numberOfClicks() >= 3;
	    }, this);
    };
    
    return ViewModel;
});
