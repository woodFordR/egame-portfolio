import Route from '@ember/routing/route';
import { service } from '@ember/service';

export default class ActorsActorRoute extends Route {
  @service catalog

  model(params) {
    return this.catalog.find('actor', (actor) => actor.id === params.id);
  }
}

