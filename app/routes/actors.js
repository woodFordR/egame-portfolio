import Route from '@ember/routing/route';
import { tracked } from '@glimmer/tracking';

class Actor {
  @tracked name;
  constructor({ id, name, movies }) {
    this.id = id;
    this.name = name;
    this.movies = movies;
  }
}

class Movie {
  constructor({ title, rating, actor }) {
    this.title = title;
    this.rating = rating ?? 0;
    this.actor = actor;
  }
}

export default class ActorsRoute extends Route {
  model() {
    let titanic = new Movie({
      title: 'Titanic',
      actor: 'Leonardo Dicaprio',
      rating: 5,
    });

    let theTerminator = new Movie({
      title: 'The Terminator',
      actor: 'Arnold Schwarzenegger',
      rating: 4,
    });

    let callMeByYourName = new Movie({
      title: 'Call Me by Your Name',
      actor: 'Timothee Chalamet',
      rating: 3,
    });

    let theDeparted = new Movie({
      title: 'The Departed',
      actor: 'Leonardo Dicaprio',
      rating: 5,
    });

    let predator = new Movie({
      title: 'Predator',
      actor: 'Arnold Schwarzenegger',
      rating: 2,
    });

    let dune = new Movie({
      title: 'Dune',
      actor: 'Timothee Chalamet',
      rating: 5,
    });

    let leonardoDicaprio = new Actor({
      id: 'leonardo-dicaprio',
      name: 'Leonardo Dicaprio',
      movies: [titanic, theDeparted],
    });

    let timotheeChalamet = new Actor({
      id: 'timothee-chalamet',
      name: 'Timothee Chalamet',
      movies: [dune, callMeByYourName],
    });

    let arnoldSchwarzenegger = new Actor({
      id: 'arnold-schwarzenegger',
      name: 'Arnold Schwarzenegger',
      movies: [predator, theTerminator],
    });

    return [
      leonardoDicaprio,
      timotheeChalamet,
      arnoldSchwarzenegger
    ];
  }
}
