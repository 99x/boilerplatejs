define([], function() {
	
	var Mediator =  function() {
		var pubsub = new PubSub();
		return{
			// function to notify others on an occurrence of an event
			notify : function(event, params) {
				pubsub.publish(event, params);
			},
			// function to listen to the events published by others
			listen : function(event, fn) {
				pubsub.subscribe(event, fn);
			}
		};

	};
	
	return Mediator;
});
