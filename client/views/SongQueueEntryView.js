// SongQueueEntryView.js - Defines a backbone view class for the song queue entries.
var SongQueueEntryView = Backbone.View.extend({
  // your code here!
  tagName: 'tr',

  initialize: function(){
    this.model.on('change', function(model){
      console.log(model);
    },this);
  },

  template: _.template('<td>(<%= artist %>)</td><td><%= title %></td>'),

  // events: {
  //   'click': function() {
  //     this.model.play();
  //   }
  // },





  render: function(){
    return this.$el.html(this.template(this.model.attributes));
  }

});
