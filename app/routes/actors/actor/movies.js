import Route from '@ember/routing/route';
// import { service } from '@ember/service';
// import Movie from '/models/song';

export default class ActorsActorMoviesRoute extends Route {
  // @service catalog;
  //
  // async model() {
  //   let actor = this.modelFor('actors.actor');
  //   let url = actor.relationships.movies;
  //   let response = await fetch(url);
  //   let json = await response.json();
  //   let movies = [];
  //   for (let item of json.data) {
  //     let { id, attributes, relationships } = item;
  //     let rels = {};
  //     for (let relationshipName in relationships) {
  //       rels[relationshipName] = relationships[relationshipName].links.related;
  //     }
  //     let movie = new Movie({ id, ...attributes }, rels);
  //     movies.push(movie);
  //     this.catalog.add('movie', movie);
  //   }
  //   actor.movies = movies;
  //   return actor;
  // }

  resetController(controller) {
    controller.title = '';
    controller.showAddMovie = true;
  }
}

