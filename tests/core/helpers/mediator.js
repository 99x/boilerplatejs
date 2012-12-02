require(['core/helpers/mediator'], function(Settings) {


	var Mediator = null;
	
	module("core/helpers/mediator Tests",{
		setup : function(){
			Mediator = testr('core/helpers/mediator');
		}
	});
	
	
	test('basic mediation of listen-notify functionality', function(){
		var mediator = new Mediator();
		var separateMediator = new Mediator();
		
		var eventData = {id:20, name:"data"};
		
		var callback = sinon.spy();
		mediator.listen("test_event_1", callback);
		
		var separateCallback = sinon.spy();
		separateMediator.listen("test_event_1", separateCallback);
		
		
		mediator.notify("test_event_1", eventData);
		sinon.assert.calledWith(callback, eventData);
		sinon.assert.notCalled(separateCallback);
	});
	
	test('independent separate mediators should not listen to others notifications', function(){
		
		var separateMediator = new Mediator();
		var separateCallback = sinon.spy();
		separateMediator.listen("test_event_1", separateCallback);
		
		var mediator = new Mediator();
		mediator.notify("test_event_1", null);

		sinon.assert.notCalled(separateCallback);
	});

});

