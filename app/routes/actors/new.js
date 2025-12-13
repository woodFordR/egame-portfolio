import Route from '@ember/routing/route';

export default class ActorsNewRoute extends Route {
  resetController(controller) {
    controller.name = '';
  }
}

