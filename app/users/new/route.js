import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.createRecord('user');
  },
  setupController: function(controller,model){
    this._super(controller, model);
    controller.set('title','Enroll yourself!');
    controller.set('buttonLabel', 'Create');
    this.render('users/form');
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
