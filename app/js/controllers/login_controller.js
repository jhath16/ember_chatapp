Crack.LoginController = Ember.ObjectController.extend({
  needs: ['application'],
  username:'',

  actions:{
    logIn:function() {
      console.log(this);
      this.set('controllers.application.currentUser', {
        username:this.get('username'),
      });
      this.transitionToRoute('index');
      this.set('username','');
    }
}})
