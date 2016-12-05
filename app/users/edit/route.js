import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('user', params.user_id);
  },
  setupController(controller, model) {
    this._super(controller, model);
    controller.set('title','Edit User');
    controller.set('buttonLabel', 'Save changes');
  },

  renderTemplate() {
    this.render('users/form');
  },
  actions: {
    saveUser(newUser) {
      newUser.save().then(()=> this.transitionTo('users', newUser.user_id));
    },

    willTansition(transition) {
      let model = this.controller.get('model');
      if(model.get('hasDirtyAttributes')) {
      let confirmation = confirm("Your change haven't  saved yet. Would youlike to leave this form");
        if(confirmation) {
          model.rollbackAtrributes();
        }else{
          transition.abort();
        }
      }
    }
  }
});
