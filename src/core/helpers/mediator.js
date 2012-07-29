define([], function() {
	
	return function(parentMediator) {
		var pubsub = new PubSub();
		var isMediatorChained = true;
		return{
			// function to notify others on an occurrence of an event
			notify : function(event, params) {
				pubsub.publish(event, params);
				if(isMediatorChained && parentMediator) {
					parentMediator.notify(event, params);
				}
			},
			// function to listen to the events published by others
			listen : function(event, fn) {
				if(isMediatorChained && parentMediator) {
					parentMediator.listen(event, fn);
				} else {
					pubsub.subscribe(event, fn);
				}
			},
			
			chainMediation : function(isChained) {
				isMediatorChained = isChained;
			}
		};

	};
});
