requirejs.config({ urlArgs: new Date() })

require(["views/AppView"], function(AppView) {
	var appView = new AppView({el: $('#app')});
	appView.render();
});
