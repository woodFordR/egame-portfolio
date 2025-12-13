import Route from '@ember/routing/route';
import { service } from '@ember/service';
import Actor from 'egame-portfolio/models/actor';
import Movie from 'egame-portfolio/models/movie';

export default class ActorsRoute extends Route {
  @service catalog

  model() {
    let titanic = new Movie({
      title: 'Titanic',
      rating: 1,
    });

    let theTerminator = new Movie({
      title: 'The Terminator',
      rating: 4,
    });

    let callMeByYourName = new Movie({
      title: 'Call Me by Your Name',
      rating: 3,
    });

    let theDeparted = new Movie({
      title: 'The Departed',
      rating: 5,
    });

    let predator = new Movie({
      title: 'Predator',
      rating: 2,
    });

    let dune = new Movie({
      title: 'Dune',
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

    dune.actor = timotheeChalamet;
    callMeByYourName.actor = timotheeChalamet;
    predator.actor = arnoldSchwarzenegger;
    theTerminator.actor = arnoldSchwarzenegger;
    theDeparted.actor = leonardoDicaprio;
    titanic.actor = leonardoDicaprio;

    this.catalog.add('movie', dune);
    this.catalog.add('movie', callMeByYourName);
    this.catalog.add('movie', predator);
    this.catalog.add('movie', theTerminator);
    this.catalog.add('movie', theDeparted);
    this.catalog.add('movie', titanic);
    this.catalog.add('actor', leonardoDicaprio);
    this.catalog.add('actor', timotheeChalamet);
    this.catalog.add('actor', arnoldSchwarzenegger);

    return this.catalog.actors;
  }
}
