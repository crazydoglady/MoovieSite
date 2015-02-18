
$('document').ready(function() {
  var movieCollection = new MovieCollection();

 movieCollection.fetch().then(function () {
   var appView = new AppView({collection: movieCollection});
 });

});
