
$(document).ready(function() {
  console.log('doc ready');
  var movieCollection = new MovieCollection();
  movieCollection.fetch().then(function () {
   var appView = new AppView({collection: movieCollection});
 });

});
