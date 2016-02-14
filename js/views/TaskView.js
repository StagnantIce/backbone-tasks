define(['../text!../templates/task.html', '../models/Task'], function(taskTemplate, Task){
    return Backbone.View.extend({
    	tagName: 'tr',
    	template: _.template(taskTemplate),
	    render: function(model, index) {
	    	return this.$el.html(this.template({task: model.toJSON(), index: index}));
	    }
	});
});