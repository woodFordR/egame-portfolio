// import { tracked } from '@glimmer/tracking';

export default class Movie {
  // @tracked rating;
  // constructor({ id, title, rating, actor }, relationships = {} ) {
  constructor({ title, rating, actor }) {
    // this.id = id;
    this.title = title;
    this.rating = rating ?? 0;
    this.actor = actor;
    // this.relationships = this.relationships;
  }
}

