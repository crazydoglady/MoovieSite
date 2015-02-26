// Movie Model

var MovieModel = Backbone.Model.extend({
  urlRoot: 'http://tiy-fee-rest.herokuapp.com/collections/mooviesite1',
  idAttribute: '_id',
  defaults: function () {
    //console.log('movie model created?');
    return {
      photo: 'http://www.fillmurray.com/250/350',
      date: 'unknown'
    };
  },
  initialize: function () {
    console.log("model was created");
  }
});
