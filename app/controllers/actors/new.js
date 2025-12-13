import Controller from '@ember/controller';
import { action } from '@ember/object';
import { kebabCase } from 'change-case';
import { tracked } from '@glimmer/tracking';
import { Actor } from 'egame-portfolio/routes/actors';

export default class ActorsNewController extends Controller {
  @tracked name;

  get hasNoName() {
    return !this.name;
  }

  @action
  updateName(event) {
    this.name = event.target.value;
  }

  @action
  saveActor() {
    new Actor({ name: this.name, id: kebabCase(this.name) });
  }
}
