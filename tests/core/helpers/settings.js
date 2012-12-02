require(['core/helpers/settings'], function(Settings) {


	var Settings = null;
	
	module("core/helpers/settings Tests",{
		setup : function(){
			Settings = testr('core/helpers/settings');
		}
	});
	

	
	test('basic settings usage, load and verify settings exist', function(){
		var settings = new Settings();
		settings.load({
			key1 : "value1",
			key2 : {key2_1 : "value2.1",},
		});
		
		equal(settings.items()['key1'], "value1");
		equal(settings.items().key1, "value1");
		
		equal(settings.items().key2.key2_1, "value2.1");
		equal(settings.items()['key2']['key2_1'], "value2.1");
	});
	
	
	test('chained settings usage, verify inheritance from parent settings object', function(){
		var baseSettings = new Settings();
		baseSettings.load({
			key1 : "value1",
			key2 : {key2_1 : "value2.1",},
		});
		
		var settings = new Settings(baseSettings);
		settings.load({
			key1 : "valueOverwriten",
			key3 : "value3",
		});
		
		equal(settings.items()['key1'], "valueOverwriten");
		equal(settings.items().key2.key2_1, "value2.1");
		equal(settings.items().key3, "value3");
		
		settings.chainSettings(false);
		equal(settings.items()['key2'], undefined);
	});
	
});

