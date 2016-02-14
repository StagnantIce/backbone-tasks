define(['../models/Task'], function(Task){
    return Backbone.Collection.extend({
        model : Task,
        order: 1,
        field: "name",
    	comparator : function(a, b) {
    		this.order = -this.order;
			if (a.get(this.field) > b.get(this.field)) return -1 * this.order;
			if (b.get(this.field) > a.get(this.field)) return 1 * this.order;
			return 0;
		}
    });
});