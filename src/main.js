'use strict'; // avoid accidental global variable declarations

/*
 * Let's define short alias for commonly used AMD libraries and name-spaces. Using
 * these alias, we do not need to specify lengthy paths, when referring a child
 * files. We will 'import' these scripts, using the alias, later in our application.
 */
require.config({
	paths : {
		// requirejs plugins in use
		text : '../libs/require/text',
		i18n : '../libs/require/i18n',
		domReady : '../libs/require/domReady',
		path :  '../libs/require/path',
		// namespace that aggregate core classes that are in frequent use
		Boiler : './core/_boiler_'
	}
});



/*
 * This is the main entry to the application.
 * This script is called from the main HTML file.
 * 
 * We use requirejs for writing modular JavaScript. The 'require' function below
 * behaves just like 'import' in PHP or 'using' in .NET. You may define the
 * relative path to the script you wish to import in the first array parameter,
 * then requirejs will invoke the callback function (given in second param) with
 * the return values of those scripts.
 * 
 * Here we use the requirejs domReady plugin to run our code, once the DOM is ready to be used.
 */
require([ "./application", "domReady" ], function( Application, domReady) {
	domReady(function() {
		/*
		 * The "./appcontext" script contains a requirejs AMD module. It returns
		 * a function (not an object instance) that encapsulates the logic
		 * for creating a GlobalContext. In JavaScript, functions can be used
		 * as classes for OO programming. So below, we create an instance by
		 * calling the 'new' operator on that function.
		 */
		new Application();
	});
});
