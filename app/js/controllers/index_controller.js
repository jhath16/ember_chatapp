Crack.IndexController = Ember.ArrayController.extend({
  needs:['application'],
  message:'',

  actions: {
    newChat: function () {
      var username = this.get('controllers.application.currentUser.username');
      var chat = this.store.createRecord('chat', {
        username:username,
        message:this.get('message'),
        timestamp:new Date()
      });
      chat.save();
      this.set('message', '');
    }
  }
});
