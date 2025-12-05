import { tracked } from '@glimmer/tracking';

class Movie {
  @tracked name;

  constructor({ id, name, songs }) {
    this.id = id;
    this.name = name;
    this.songs = songs;
  }
}

class Actor {
  constructor({ title, rating, band }) {
    this.title = title;
    this.rating = rating ?? 0;
    this.band = band;
  }
}

export default class MoviesRoute extends Route {
  model() {
    let ladyBird = new Movie({
      title: 'Lady Bird',
      actor: 'Timothee Chalamet',
      rating: 5,
    });

    let predator = new Movie({
      title: 'Predator',
      actor: 'Arnold Schwarzenegger',
      rating: 4,
    });

    let theDeparted = new Movie({
      title: 'The Departed',
      band: 'Leonardo Dicaprio',
      rating: 5,
    });

    let dune = new Movie({
      title: 'Dune',
      actor: 'Timothee Chalamet',
      rating: 5,
    });

    let callMeByYourName = new Movie({
      title: 'Call Me by Your Name',
      actor: 'Timothee Chalamet',
      rating: 5,
    });

    let arnoldSchwarzenegger = new Actor({
      id: 'arnold-schwarzenegger',
      name: 'Arnold Schwarzenegger',
      movies: [predator],
    });

    let leonardoDicaprio = new Actor({
      id: 'leonardo-dicaprio',
      name: 'Leonardo Dicaprio',
      movies: [theDeparted],
    });

    let timotheeChalamet = new Actor({
      id: 'timothee-chalamet',
      name: 'Timothee Chalamet',
      movies: [callMeByYourName, dune],
    });

    return [
      arnoldSchwarzenegger,
      leonardoDicaprio,
      timotheeChalamet
    ];

  }
}

