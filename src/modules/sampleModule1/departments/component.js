define(['Boiler', 'text!./view.html', './viewmodel', 'text!./style.css', 'i18n!./nls/resources'], function(Boiler, template, ViewModel, styleText, nls) {

	var Component = function(moduleContext) {
		Boiler.UiPanel.setStyleText("DEPAERTMENT_PANEL_CSS", styleText);

		var panel = new Boiler.UiPanel(template, null, nls);
		var vm = null;
		

		this.activate = function(parent, params) {
			if(!vm) {
				vm = new ViewModel(moduleContext, params.initvalue);
			}
			panel.appendTo(parent);
			ko.applyBindings(vm, panel.getDomElement());
		}
		
		this.deactivate = function(){
			panel.remove();
		}
	};

	return Component;

}); 