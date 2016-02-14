define([], function(){
    return Backbone.Model.extend({
       initialize: function(){
           console.log('init');
       },
       defaults: {
           name: 'No name',
           text: 'No text',
           complete: false,
       }
   });
});