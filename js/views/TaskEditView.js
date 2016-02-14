define(['../text!../templates/edit.html', '../models/Task'], function(taskTemplate, Task){
    return Backbone.View.extend({
		events: {
			'change input': 'change'
		},
    	template: _.template(taskTemplate),
    	model: new Task(),
	    createNew: function() {
	    	this.model = new Task();
	    },
	    render: function(buttonText) {
	    	$(this.$el).html(this.template({task: this.model.toJSON()}));
	    	$('.save', this.$el).text( buttonText );
	    },
	    change: function() {
	    	console.log('change')
	    	this.model.set('name', $('.task-name', this.$el).val());
	    	this.model.set('text', $('.task-text', this.$el).val());
	    	this.model.set('complete', $('.task-complete', this.$el).is(':checked'));
	    }
	});
});