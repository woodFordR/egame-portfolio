import Service from '@ember/service';
import { tracked } from 'tracked-built-ins';

export default class CatalogService extends Service {
  storage = {};

  constructor() {
    super(...arguments);
    this.storage.actors = tracked([]);
    this.storage.movies = tracked([]);
  }

  add(type, record) {
    let collection = type === 'actor' ? this.storage.actors : this.storage.movies;
    collection.push(record);
  }

  get actors() {
    return this.storage.actors;
  }

  get movies() {
    return this.storage.movies;
  }
}

