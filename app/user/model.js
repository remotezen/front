import DS from 'ember-data';

import {validator, buildValidations} from 'ember-cp-validations';

const Validations = buildValidations({
    username: [ 
      validator('presence',true), 
      validator('length', {
        min:4,
        max:16
      })
    ],

  password: [
    validator('present', true),
    validator('length', {
      min:4,
      max:8
     })
    ]
});

export default DS.Model.extend(Validations, {
  username: DS.attr('string'),
  password: DS.attr('string'),
  passwordConfirmation: DS.attr('string')
});

