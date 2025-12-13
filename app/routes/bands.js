import Route from '@ember/routing/route';
import { service } from '@ember/service';
import Band from 'egame-portfolio/models/band';
import Song from 'egame-portfolio/models/song';

export default class BandsRoute extends Route {
  @service catalog

  async model() {
    let response = await fetch('/bands');
    let json = await response.json();

    for (let item of json.data) {
      let { id, attributes, relationships } = item;
      let rels = {};
      for (let relationshipName in relationships) {
        rels[relationshipName] = relationships[relationshipName].links.related;
      }
      let record = new Band({ id, ...attributes }, rels);
      this.catalog.add('band', record);
    }

    return this.catalog.bands;
  }
}
