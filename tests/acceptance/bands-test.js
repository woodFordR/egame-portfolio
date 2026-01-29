import { module, test } from 'qunit';
import { visit, click, fillIn, waitFor, findAll } from '@ember/test-helpers';
import { setupApplicationTest } from 'egame-portfolio/tests/helpers';
import { setupMirage } from 'ember-cli-mirage/test-support';
import { getPageTitle } from 'ember-page-title/test-support';

module('Acceptance | bands', function(hooks) {
  setupApplicationTest(hooks);
  setupMirage(hooks);

  test('List bands', async function(assert) {
    this.server.create('band', { name: 'Radiohead' });
    this.server.create('band', { name: 'Long Distance Calling' });

    await visit('/');

    assert.strictEqual(getPageTitle(), 'A Musical Portfolio');

    let bandLinks = document.querySelectorAll('.mb-2 > a');

    assert.strictEqual(bandLinks.length, 2, 'All band links are rendered');
    assert.ok(bandLinks[0].textContent.includes('Radiohead'),
      'First band link contains the band name'
    );
    assert.ok(bandLinks[1].textContent.includes('Long Distance Calling'),
      'The other band link contains the band name'
    );
  });

  test('Create a band', async function(assert) {

    this.server.create('band', { name: 'Royal Blood' });

    await visit('/');
    await click('[data-test-rr="new-band-button"]');
    await fillIn('[data-test-rr="new-band-name"]', 'Caspian');
    await click('[data-test-rr="save-band-button"]');
    await waitFor('[data-test-rr="no-songs-text"]')
    await waitFor('p.text-center');

    let bandLinks = findAll('[data-test-rr="band-link"]');
    assert.strictEqual(bandLinks.length, 2, 'All band links are rendered');
    assert.ok(
      bandLinks[1].textContent.includes('Caspian'),
      'The new band link is rendered as the last item'
    );
    assert.ok(
      document.querySelector('[data-test-rr="songs-nav-item"]')
        .textContent.includes('Songs'),
      'The Songs tab is active'
    );
  });
});

