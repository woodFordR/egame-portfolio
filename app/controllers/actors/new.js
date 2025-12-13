import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import Actor from 'egame-portfolio/models/actor';
import { service } from '@ember/service';

export default class ActorsNewController extends Controller {
  @tracked name;
  @service catalog;
  @service router;

  get hasNoName() {
    return !this.name;
  }

  @action
  updateName(event) {
    this.name = event.target.value;
  }

  @action
  saveActor() {
    let actor = new Actor({ name: this.name, id: kebabCase(this.name) });
    this.catalog.add('actor', actor);
    this.router.transitionTo('actors.actor.movies', actor.id);
  }
  // async saveActor() {
  //   let response = await fetch('/actors', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/vnd.api+json',
  //     },
  //     body: JSON.stringify({
  //       data: {
  //         type: 'actors',
  //         attributes: {
  //           name: this.name,
  //         },
  //       },
  //     }),
  //   });
  //   let json = await response.json();
  //   let { id, attributes } = json.data;
  //   let record = new Actor({ id, ...attributes });
  //   this.catalog.add('actor', record);
  //   this.router.transitionTo('actors.actor.movies', id);
  // }
}
