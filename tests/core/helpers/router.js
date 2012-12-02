require(['core/helpers/router'], function(Settings) {


	var Router = null;
	
	module("core/helpers/router Tests",{
		setup : function(){
			Router = testr('core/helpers/router');
		}
	});
	
	
	test('add route and then navigate to that route to check if route callback happens with correct arguments', function(){
		var router = new Router();
		
		var callback = sinon.spy();
		router.addRoute("heaven/{id}", callback);

		router.init();
		Router.routeTo("heaven/abc");
		sinon.assert.calledWith(callback, { 0: "abc", id: "abc", request_: "heaven/abc", vals_: ["abc"] });
		Router.routeTo(null); //clear the hash
	});

});

