// Model View
var MovieView = Backbone.View.extend({
  template: _.template($('#movieTmpl').html()),
  tagName: 'article', //wraps template contents inside an article?
  initialize: function () {
    // console.log(this.el);
  },
  events: {
    "click .deleteMovie": "removeMovie" //when delete clicked, run remove function
  },
  render: function () {
    // console.log(this.el);
    var markup = this.template(this.model.toJSON());
    this.$el.html(markup); //gathers markup

    return this;
  },
  removeMovie: function () {
    this.$el.remove(); //removes from DOM
    this.model.destroy(); //delete from server
  }
});

// Collection View
var AppView = Backbone.View.extend({
  el: $('section'),
  initialize: function () {
    console.log('appView started');
    this.addAllMovies();
  },
  events: {
    "click .createMovie": "showCreate", //this works
    "submit .new": "createMovie" //this doesn't work
  },
  createMovie: function (event) {
    event.preventDefault();
    console.log("createMovie starts");
    var newMovie = {
      title: $('.createMovie').find('input[name="newTitle"]').val(),
      photo: $('.createMovie').find('url[name="newPhoto"]').val(),
      summary: $('.createMovie').find('textarea[name="newSummary"]').val(),
      date: $('.createMovie').find('input[name="newDate"]').val()
    };
    console.log(newMovie);

    var newModelMovie = new MovieModel(newMovie); //declares newModelMovie and assigns newMovie to the model of Movie Model.
    newModelMovie.save(); //put to server
    console.log(this.collection.length);
    this.collection.add(newModelMovie); //adds new Model Movie to collection
    console.log(this.collection.length);
    this.addAllMovies(); //adds all movies within collection, including the new one?
    this.$el.find('.createMovie').find('input, textarea').val('');
    this.showCreate(); //shows form to enter data for new movie
  },
  showCreate: function () {
    // e.preventDefault();
    this.$el.find('.createNew').toggleClass('show');
    console.log("showCreate works");
  },
  addOneMovie: function (movie) {
    var movieView = new movieView({model: movie});
    this.$el.append(movieView.render().el);
  },
  addAllMovies: function () {
    _.each(this.collection.models, this.addOneMovie, this)
  }
});
