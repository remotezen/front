import DS from 'ember-data';
import Ember from 'ember' ;
import {validator, buildValidations} from 'ember-cp-validations';


const Validations = buildValidations({
  username: [
    validator('presence', true),
    validator('length', {
      min:3, 
      max:12,
      message: 'Please ensure username is 4 - 12 characters long'
  })
  ],
  password: [
    validator('presence', true),
    validator('length', {
      min:6,
      max:12,
      message: 'Please ensure password is 6 to 12 characters in length'
  })
  ],
  passwordConfirmation: [
    validator('presence', true),
    validator('confirmation', {
      on: 'password',
      min:6,
      message: '{description} do not match',
      description: 'Passwords'
    })
  ]
});

export default DS.Model.extend(Validations, {
  username: DS.attr('string'),
  password: DS.attr('string'),
  passwordConfirmation: DS.attr('string'),
  isFormValid: Ember.computed.alias('validations.isValid'),
  inValidForm: Ember.computed.not('isFormValid')

});

