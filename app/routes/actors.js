import Route from '@ember/routing/route';

export default class ActorsRoute extends Route {
  model() {
    return [
      { name: "Leonardo Dicaprio" },
      { name: "Timothee Chalamet" },
      { name: "Arnold Schwarzenegger" },
    ];
  }
}
