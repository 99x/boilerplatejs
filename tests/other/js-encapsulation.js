require(['core/helpers/mediator'], function() {

	module("other/js-encapsulation Tests",{
		setup : function(){
			Mediator = testr('core/helpers/mediator');
		}
	});
	
	
	// in JS, functions can be used as OO classes
	var Person = function(name) {
		var self = this;
		
		//private methods and attributes
		this.getNickname = function(){
			return "Yaka";
		};
		
		//public methods and attributes (return obj)
		return {
			getName : function() {
				return name + ' ' + self.getNickname();
			}
		}
	};
	
	//static functions attached to 'Person' class 
	Person.hasBrain = function() {
		return true;
	}


	test('use of private methods', function() {
		var developer = new Person("Hasith");
		equal(developer.getName(), "Hasith Yaka", "name creation of the person'");
		ok(!jQuery.isFunction(developer.getNickname), "private functions shouldn't be exposed");
		ok(!jQuery.isFunction(developer.hasBrain), "static functions shouldn't be exposed via instances");
		ok(jQuery.isFunction(Person.hasBrain), "static functions are exposed on the class itself");
	});

});

