define(function (require) {

    var ViewModel = function (moduleContext) {
	    this.numberOfClicks = ko.observable(0);
	 
	    this.registerClick = function() {
	        this.numberOfClicks(this.numberOfClicks() + 1);
	        moduleContext.notify('LOTTERY_ACTIVITY', this.numberOfClicks());
	    };
	 
	    this.resetClicks = function() {
	        this.numberOfClicks(0);
	    };
	 
	    this.hasClickedTooManyTimes = ko.computed(function() {
	        return this.numberOfClicks() >= 5;
	    }, this);
    };
    
    return ViewModel;
});
