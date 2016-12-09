import config from 'ember-easy-form/config';

export default {
  name: 'easy-form-config',
    initialize: function(){
      config.registerWrapper('user-form-wrapper',{
        formClass: 'form-horizontal',
        fieldErrorClass: 'error',
        hintClass: 'help-block',
        labelClass: 'control-label',
        inputClass: 'form-control'
      });
    }
};
