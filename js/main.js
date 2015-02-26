// var App = {};



$(document).ready(function() {
  console.log('doc ready');
  // var appRouter = new AppRouter(); //calls router when page laods
  // Backbone.history.start();
  //
  //
  var movieCollection = new MovieCollection(); //calls collection when page loads
  movieCollection.fetch().then(function () {
   var appView = new AppView({collection: movieCollection});
 });

});
