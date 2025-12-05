import Route from '@ember/routing/route';

export default class MoviesMovieActorsRoute extends Route {
  model() {
    let movie = this.modelFor('movies.movie');
    return movie.actors;
  }
}

