require.config({
	baseUrl : "../src/", //we will set the application's src folder as the base url
});

require.config({
	paths : {
		text : './libs/require/text',
		order : './libs/require/order',
		i18n : './libs/require/i18n',

		_boiler_ : './core/_boiler_'
	}
});


require([ 
          '../tests/core/helpers/settings', 
          '../tests/core/helpers/router' ,
          '../tests/core/helpers/mediator',
          '../tests/other/js-encapsulation',
          '../tests/other/js-prototypes'
], function() {}); 
