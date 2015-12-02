import { startApp } from './start-app'
import { destroyApp } from './destroy-app'
import { TestModule } from 'ember-test-helpers';
import { module } from 'qunit';

export default function(name, passedOptions) {
  let options = passedOptions || {}

  module(name, {
    beforeEach() {
      this.application = startApp();

      if (options.beforeEach) {
        options.beforeEach.apply(this, arguments);
      }
    },

    afterEach() {
      destroyApp(this.application);

      if (options.afterEach) {
        options.afterEach.apply(this, arguments);
      }
    }
  });
}
