(function() {
	if(window.location.protocol === 'file:') {
		window.alert("Samples in BoilerplateJS might not work when opened directly from the file system. Please deploy in to a web server and access with 'http://' url", "Samples may not work");
	}
})();
