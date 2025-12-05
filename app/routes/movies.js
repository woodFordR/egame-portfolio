import Route from '@ember/routing/route';

export default class MoviesRoute extends Route {
  model() {
    return [
      { title: "Inception", actor: "Leonardo Dicaprio", rating: 8 },
      { title: "Dune", actor: "Timothee Chalamet", rating: 5 },
      { title: "The Terminator", actor: "Arnold Schwarzenegger", rating: 6 },
    ];
  }
}
