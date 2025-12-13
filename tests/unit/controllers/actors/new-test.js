import { module, test } from 'qunit';
import { setupTest } from 'egame-portfolio/tests/helpers';

module('Unit | Controller | actors/new', function (hooks) {
  setupTest(hooks);

  // TODO: Replace this with your real tests.
  test('it exists', function (assert) {
    let controller = this.owner.lookup('controller:actors/new');
    assert.ok(controller);
  });
});
