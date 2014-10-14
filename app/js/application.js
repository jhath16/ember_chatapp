window.Crack = Ember.Application.create();

Crack.ApplicationAdapter = DS.FirebaseAdapter.extend({
  firebase: new Firebase("https://crack.firebaseio.com/")
});

Crack.ChatAdapter = Crack.ApplicationAdapter.extend({
  pathForType: function(type) {
    return "rooms/general";
  }
});

Ember.Handlebars.helper('date-format', function (date) {
  return moment(date).format('lll');
});
