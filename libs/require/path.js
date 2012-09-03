define({
	stringEndsWith : function(string, suffix) {
		return string.indexOf(suffix, string.length - suffix.length) !== -1;
	},
		
	load : function(name, req, load, config) {
		var url = req.toUrl(name);
		//if require.toUrl injects '.js', remove it
		if (!this.stringEndsWith(name, '.js') && this.stringEndsWith(url, '.js')) {
			url = url.substring(0, url.length - 3)
		}
		load(url);
	}

});
