define(['./TaskListView', './TaskEditView', '../text!../templates/app.html'], function(TaskListView, TaskEditView, appHtml) {
    return Backbone.View.extend({
		events: {
		    'click .add': 'add',
		    'click .save': 'save',
		    'click .delete': 'delete',
		    'click .index': 'index',
		    'click .change': 'change',
		    'click .complete': 'complete'
		},
		template: appHtml,
	    initialize: function () {
	    	//$(this.$el).html(this.template);
	    	//this.listView = new TaskListView({el: $('.list', this.$el)});
	    	//this.editView = new TaskEditView({el: $('.edit', this.$el)});
	    	//this.index();
	    },
	    render: function() {
	    	$(this.$el).html(this.template);
	    	this.listView = new TaskListView({el: $('.list', this.$el)});
	    	this.listView.render();
	    	this.editView = new TaskEditView({el: $('.edit', this.$el)});
	    	this.editView.render();
	    	this.index();
	    },
	    showEdit: function() {
	    	this.$el.find('.list').hide();
	    	this.$el.find('.edit').show();
	    },
	    add: function() {
	    	this.editView.createNew();
	    	this.editView.render('Add');
	    	this.showEdit();
	    },
	    change: function() {
	    	var model = this.listView.collection.at($('.select').attr('index'));
	    	this.editView.model = model;
	    	this.editView.render('Save');
	    	this.showEdit();
	    },
	    index: function() {
	    	this.$el.find('.list').show();
	    	this.$el.find('.edit').hide();
	    },
	    save: function() {
	    	var model  = this.editView.model;
	    	if (this.listView.collection.indexOf(model) == -1) {
	    		this.listView.collection.add([model]);
	    	}
	    	this.listView.render();
	    	this.index();
	    },
	    complete: function() {
	    	var collection = this.listView.collection;
	    	$('.select:checked').each(function(){
	    		var index = $(this).attr('index');
	    		collection.at(index).set('complete', true);
	    	});
	    	this.listView.render();
	    },
	    delete: function() {
	    	var collection = this.listView.collection;
	    	$('.select:checked').each(function(){
	    		var index = $(this).attr('index');
	    		collection.remove(collection.at(index));
	    	});
	    	this.listView.render();
	    }
	});
});