import Controller from '@ember/controller';
import { action } from '@ember/object';
import { kebabCase } from 'change-case';
import { tracked } from '@glimmer/tracking';
import { Actor } from 'egame-portfolio/model/actor';
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
}
