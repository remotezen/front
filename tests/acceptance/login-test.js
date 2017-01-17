import { test } from 'qunit';
import moduleForAcceptance from '../helpers/module-for-acceptance';
moduleForAcceptance('Acceptance | login');
import { /*currentSession,*/ authenticateSession, invalidateSession } from 'auth/tests/helpers/ember-simple-auth';





test('visiting /login', function(assert) {
  visit('/login');
  andThen(function() {
    assert.equal(currentURL(), '/login');
    assert.equal(find('h1').text(), "Login");
  });
});

test('visiting /login logging in', function(assert) {
  authenticateSession();
  visit('/secret');
  andThen(function() {
    assert.equal(currentURL(), '/secret');
    invalidateSession();
  });
});

