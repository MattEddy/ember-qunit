import { getResolver } from 'ember-test-helpers/test-resolver';
import Ember from 'ember';

export function startApp(attrs) {
  let prefix = getResolver().namespace.modulePrefix
  let Application = require(prefix + '/app').default;
  let config = require(prefix + '/config/environment').default;
  let application;

  let attributes = Ember.merge({}, config.APP);
  attributes = Ember.merge(attributes, attrs); // use defaults, but you can override;

  Ember.run(() => {
    application = Application.create(attributes);
    application.setupForTesting();
    application.injectTestHelpers();
  });

  return application;
}
