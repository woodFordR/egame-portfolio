import Route from '@ember/routing/route';

export default class ActorsActorRoute extends Route {
  model(params) {
    let actors = this.modelFor('actors');
    return actors.find((actor) => actor.id === params.id);
  }
}

