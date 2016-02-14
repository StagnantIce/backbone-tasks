define(['./TaskView', '../text!../templates/task-list.html', '../collections/TaskCollection'], function(TaskView, taskListTemplate, TaskCollection){
    return Backbone.View.extend({
		events: {
			'click .sort': 'sort'
		},
    	collection: new TaskCollection(),
    	template: _.template(taskListTemplate),
	    initialize: function () {
	    	var obj = this;
	    	this.collection.bind("change remove add", function(e) {
	    		obj.save();
			});
			this.load();
	    },
	    save: function() {
	    	var data = JSON.stringify(this.collection.toJSON());
	    	window.localStorage.setItem("tasks", data);
	    },
	    load: function() {
	    	var tasks = window.localStorage.getItem('tasks');
	    	if (tasks) {
	    		this.collection.reset(JSON.parse(tasks));
	    	}
	    },
	    render: function() {
	    	var collection = this.collection;
	    	this.$el.html(this.template);
	    	_.each(collection.models, function(model) {
	    		var tr = new TaskView();
	    		$('tbody', this.$el).append(tr.render(model, collection.indexOf(model)));
	    	});
	    },
	    sort: function() {
	    	this.collection.sort();
	    	this.render();
	    	console.log('sort');
	    }
	});
});