define([], function() {

	var Router = function() {
		var router = crossroads.create();
		router.normalizeFn = crossroads.NORM_AS_OBJECT;

		return {
			addRoute : function(pattern, handler) {
				router.addRoute(pattern, handler);
			},

			init : function() {

				function parseHash(newHash, oldHash) {
					router.parse(newHash);
				}
				hasher.initialized.add(parseHash);// parse initial hash
				hasher.changed.add(parseHash);// parse hash changes
				
				if (!hasher.isActive()) {
					hasher.init(); // start listening for history change
				}
			},

		};

	};

	Router.routeTo = function(path) {
		hasher.setHash(path);
	};

	return Router;
});
