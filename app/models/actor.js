import { tracked } from '@glimmer/tracking';

export default class Actor {
  @tracked name;
  @tracked movies
  // constructor({ id, name, movies }, relationships = {}) {
  constructor({ id, name, movies }) {
    this.id = id;
    this.name = name;
    this.movies = movies || [];
    // this.relationships = relationships;
  }
}

