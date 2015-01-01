// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({

  tagName: "table",

  id: "queue",

  initialize: function() {
    this.render();

    this.collection.on('add', function(model){

      console.log(model);
      this.trigger('enqueue', model);
    }, this);
  },

  render: function() {
    this.$el.children().detach();

    this.$el.html('<th>Song Queue</th>').append(
      this.collection.map(function(song){
        //return new LibraryEntryView({model: song}).render();
        return new SongQueueEntryView({model: song}).render();
      })
    );
  },

  addSong: function(song) {
    // new ID so we can add more than one copy of song to queue
    song.id =  Math.random().toString(36).slice(2);

    this.collection.push(song);
    this.render();

  }
});
