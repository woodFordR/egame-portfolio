import Route from '@ember/routing/route';

export default class ActorsActorMoviesRoute extends Route {
  model() {
    let actor = this.modelFor('actors.actor');
    return actor.movies;
  }
}

