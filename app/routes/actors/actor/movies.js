import Route from '@ember/routing/route';

export default class ActorsActorMoviesRoute extends Route {
  resetController(controller) {
    controller.title = '';
    controller.showAddSong = true;
  }
}

