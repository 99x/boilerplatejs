define(function(require) {

	/* 
	 * Return an array containing all modules classes that needs to be initiated.
	 * We use the 'require' function of requirejs to get the relevant module context classes.
	 * This could be done of course, by passing those scripts as dependencies to 
	 * the 'define' function above. But following model is a bit simpler to read.
	 */
	return [
		require('./baseModule/module'),
		require('./sampleModule1/module'),
		require('./sampleModule2/module')
	];

});
