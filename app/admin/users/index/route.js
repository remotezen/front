import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('user');
  },
  actions: {
    deleteUser(userOne) {
      let confirmation = confirm('Are you sure?');
      if (confirmation) {
        userOne.destroyRecord();
      }
    }
  }
});
