define([], function() {

	/*
	 * This is a simple utility class for initializing and managing a given set
	 * of module classes.
	 * 
	 */
	return function() {

		return {
			/*
			 * load the given module classes. Accepts a list of classes
			 * (functions) to be initiated. when initiating a module class,
			 * parent context will be passed as a constructor argument.
			 */
			load : function(scripts) {
				for (scriptId in scripts) {
						 
                  var js, fjs = document.getElementsByTagName("script")[0];
                  if (document.getElementById(scriptId)) return;
                  js = document.createElement("script"); js.id = scriptId;
                  js.src = scripts[scriptId];
                  fjs.parentNode.insertBefore(js, fjs);

				}
			},
		};

	};
});
