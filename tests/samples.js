/*
 * This is a test module. Place all the Unit Tests related to module in this file
 */

require([], function() {

	module("QUnit Tests");
	test("equal Test", function() {
		var value = "hello";
		equal(value, "hello", "We expect value to be hello");
	});

	test("Expect test, expect two assertions", function() {
		expect(2);
		equal(true, true, "test 1");
		equal(true, true, "test 2");
	});


	/*
	 * Some examples of QUnit Unit tests, using SinonJS 
	 */
	module("QUnit + Sinon Tests");
	test("Using spies", function() {
		var spyOnThisMethod = sinon.spy();
		spyOnThisMethod(5);
		ok(spyOnThisMethod.calledWith(5));
	});

	test("Testing for returned value on existing methods", function() {
		//We have a method called test that returns 5
		this.test = function() {
			return 5;
		};

		var f = sinon.spy(this, "test"); //spy on the test method

		this.test(); //call the test method
		ok(f.returned(5));

		this.test.restore(); //unwrap sinon
	});

	test("Stubbing global environments", function() {
		this.stub(jQuery, "ajax");
		jQuery.ajax("/url", {});
		ok(jQuery.ajax.called);
	});

	test("Fake Server Test", function() {
		this.server = sinon.fakeServer.create();
		this.server.respondWith("GET", "/some/article/comments.json", [ 200, {
			"Content-Type" : "application/json"
		}, '[{ "id": 12, "comment": "Hey there" }]' ]);

		var callback = sinon.spy();

		$.ajax({
			url : "/some/article/comments.json",
			success : callback
		});
		this.server.respond();

		sinon.assert.calledWith(callback, [ {
			id : 12,
			comment : "Hey there"
		} ]);
	});
});
