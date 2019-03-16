$(document).ready(function(){
    var a = $("a");
	var b = "";
	plugins.webViewChecker.isWebViewEnabled()
		.then(function(enabled){b = enabled})
		.catch(function(error){b = error});
	plugins.webViewChecker.getWebViewVersion()
		.then(function(version){b = b + version})
		.catch(function(error){b = b + error});
	plugins.webViewChecker.openGooglePlayStore()
		.then(function(){b = + "opened"})
		.catch(function(error){b = + error});
	a.html(b);
});