import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.createRecord('user');
  },
  actions: {
    saveUser(newUser) {
      newUser.save().then(() => this.transitionTo('secret'));
    },
    willTransition() {
      let model = this.controller.get('model');
      if(model.get('isNew')) {
        model.destroyRecord();
      }
    }

  }
});
