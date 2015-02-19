//model view

var MovieView = Backbone.View.extend({
  template: _.template($('#movieTmpl').html()), //declares template
  tagName: 'article', //declares element that will contain template content
  initialize: function () {
    console.log(this.el);
  },
  events: {
    "click .deleteMovie": "removeMovie", // when delete is pressed in posts, call remove movie function
    //"click .editMovie": "editMovie" //when edit button pressed, call editMovie function
    //click events for Models go here
  },
  render: function() {
    var markup = this.template(this.model.toJSON()); //declares that content of template is markup
    this.$el.html(markup); //insert markup into html in this location

    return this; //?? stops function
  },
  removeMovie: function () {
    this.$el.remove(); //removes from html
    this.model.destroy(); //removes from server
  }

});//end movie model view all methods here are performed on only one movie attr at a time. ie-deletes only one thing or adds one at a time

//collection View

var AppView = Backbone.View.extend ({
  el: $('section'), //this is element where collections will be rendered. tagname for models ^^ is contained within it
  initialize: function () {
    console.log('app view works')
  },
  events: { //these events will apply to all elements within collection
    "click .createMovie": "showCreate", //when createmovie buttoon at top of page is clicked, run showCreate function
    "submit #new": "createMovie" //when new button in form clicked, run create post function
  },
  createMovie: function (event) {
    event.preventDefault();
    console.log("create movie init");
    var newMovie = {
      title: $('#newMoovie').find("input[name='newTitle']").val(), //grabs value of title field in create form
      photo: $('#newMoovie').find("input[name='newPhoto']").val(),
      summary: $('#newMoovie').find("textarea[name='newSummary']").val(),
      date: $('#newMoovie').find("input[name='newDate']").val()
    }; //end new movie attr, this is info that will be pulled from fields in form. name of input fields should match keys
      console.log("newMovie", newMovie);

      var newModelMovie = new MovieModel(newMovie); //creates new instance of movie model and passes in it's content to create constructor with new attr
      newModelMovie.save(); //PUT to server at url for collection
      console.log(this.collection/length); //collection is array so this returns its length
      this.collection.add(newModelMovie); //adds new instance created ^^ to the collection
      console.log(this.collection.length); //prints new length of array-ensures that new object has been added
      this.addAllMovies(); //calls addAllMovies function (below)
      this.$el.find('#newMoovie').find('input,textarea').val(''); //finds values of form fields within current model within collection
      this.showCreate(); //calls showCreate function (below)

  },//end createMovie

  showCreate: function () {
    console.log('showCreate works');
    this.$el.find('#newMoovie').toggleClass('show'); //causes form to become visible
  }, //end showCreate

  addOneMovie: function (movie) {
    var movieView = new MovieView({model: movie}); //this declares new instance of Model view and passes in movie that was just created ^^
    this.$el.append(movieView.render().el); //appends new instance of model and collects the markup within it and appends markup to the DOM element

  },
  addAllMovies: function() {
    _.each(this.collection.models, this.addOneMovie, this) //for array (collection), this one movie(idx), this(element)
    //runs addOneMovie function for each model in the collection, adds them each to the html
    console.log("addAll works")
  }
});//end appView
