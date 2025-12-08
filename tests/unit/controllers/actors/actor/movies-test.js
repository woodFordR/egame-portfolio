import { module, test } from 'qunit';
import { setupTest } from 'egame-portfolio/tests/helpers';

module('Unit | Controller | actors/actor/movies', function (hooks) {
  setupTest(hooks);

  // TODO: Replace this with your real tests.
  test('it exists', function (assert) {
    let controller = this.owner.lookup('controller:actors/actor/movies');
    assert.ok(controller);
  });
});
