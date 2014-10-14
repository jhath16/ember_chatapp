Crack.Router.map(function() {
  this.route('login');
});

Crack.IndexRoute = Ember.Route.extend({
  model: function() {
    return this.store.find('chat');
  }
})
