// Movie Collection
var MovieCollection = Backbone.Collection.extend({
  url: 'http://tiy-fee-rest.herokuapp.com/collections/mooviesite1',
  model: MovieModel
});
