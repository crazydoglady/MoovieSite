// Movie Model

var MovieModel = Backbone.Model.extend({
  urlRoot: 'http://tiy-fee-rest.herokuapp.com/collections/mooviesite1',
  idAttribute: '_id',
  defaults: function () {
    return {
      photo: 'not available',
      date: 'unknown'
    };
  },
  initialize: function () {
    console.log("model was created");
  }
});
