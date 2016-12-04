import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
  username: DS.attr('string'),
  password: DS.attr('string'),
  passwordConfirmation: DS.attr('string'),
  isValidUserName: Ember.computed.notEmpty('username'),
  isValidPassword: Ember.computed.notEmpty('password'),
  isPasswordValid: Ember.computed('password', 
    'passwordConfirmation', () => { 
      return 'password' === 'passwordConfirmation';   
    }),
  isValidStepOne: Ember.computed.and('isValidUsername', 'isValidPassword'),
  isValid: Ember.computed.and('isValidStepOne', 'isPasswordValid'),
  isDisabled: Ember.computed.not('isValid')
});
