// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  //model: SongModel,

  playFirst: function(){
    this.trigger('play', this.unshift());
  },

  initialize: function(){
    this.on('all', function(called) { console.log(called)});

  }

});
