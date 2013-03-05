define(function (require) {

    var ViewModel = function (moduleContext) {
    	var self = this;
    	this.hasWon = ko.observable(false);
    	this.luckyNumber = ko.observable();
    	this.yourNumber = ko.observable();
    	
	    moduleContext.listen("LOTTERY_ACTIVITY", function(activityNumber) {
	    	self.luckyNumber(Math.floor(Math.random() * 5) + 1);
	    	self.yourNumber(activityNumber);
	    	self.hasWon(self.luckyNumber() === self.yourNumber());
	    });
    };
    
    return ViewModel;
});
