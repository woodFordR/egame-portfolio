
export class Movie {
  constructor({ title, rating, actor }) {
    this.title = title;
    this.rating = rating ?? 0;
    this.actor = actor;
  }
}

