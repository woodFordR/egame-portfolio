import Route from '@ember/routing/route';
import { tracked } from '@glimmer/tracking';

class Actor {
  @tracked name;
  constructor(name) {
    this.name = name;
  }
}

export default class ActorsRoute extends Route {
  model() {
    return [
      new Actor("Leonardo Dicaprio"),
      new Actor("Timothee Chalamet"),
      new Actor("Arnold Schwarzenegger"),
    ];
  }
}
