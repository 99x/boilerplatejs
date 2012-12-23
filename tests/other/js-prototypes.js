require(['core/helpers/mediator'], function() {

	module("other/js-prototypes Tests", {
		setup : function() {
			Mediator = testr('core/helpers/mediator');
		}
	});

	// in JS, functions can be used as OO classes
	var Person = function(name) {
		this.name = null;
	};

	// use of prototypes improves performance and memory use
	Person.prototype.getName = function() {
		return this.name;
	}
	
	Person.prototype.setName = function(name) {
		this.name = name;
	}	
	
	var Manager = function() {}
	Manager.prototype = new Person();


	test('use of prototype inheritance', function() {
		var manager1 = new Manager();
		manager1.setName("mgr one");
		
		var manager2 = new Manager();
		manager2.setName("mgr two");
		
		
		equal(manager1.getName(), "mgr one", "one prototype instance, but differnt behavior");
		equal(manager2.getName(), "mgr two", "one prototype instance, but differnt behavior");

	});

});

