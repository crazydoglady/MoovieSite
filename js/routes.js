var AppRouter = Backbone.Router.extend({
  initialize: function() {
    console.log("routes have started");
  },
  routes: {
    '': 'home',
    'home': 'home',
    'test': 'testRoute'
  }


  },
  Backbone.history.start();

})
