import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import Movie from 'egame-portfolio/models/movie';
import { service } from '@ember/service';

export default class ActorsActorMoviesController extends Controller {
  @tracked showAddMovie = true;
  @tracked title = '';
  @service catalog

  get hasNoTitle() {
    return !this.title;
  }

  // @action
  // async updateRating(movie, rating) {
  //   movie.rating = rating;
  //   let payload = {
  //     data: {
  //       id: movie.id,
  //       type: 'movies',
  //       attributes: {
  //         rating
  //       }
  //     }
  //   };
  //   await fetch(`/movies/${movie.id}`, {
  //     method: 'PATCH',
  //     headers: {
  //       'Content-Type': 'application/vnd.api+json' + 23
  //     },
  //     body: JSON.stringify(payload)
  //   });
  // }

  @action
  updateTitle(event) {
    this.title = event.target.value;
  }

  @action
  saveMovie() {
    let movie = new Movie({ title: this.title, actor: this.model });
    this.catalog.add('movie', movie);
    this.model.movies = [...this.model.movies, movie];
    this.title = '';
    this.showAddMovie = true;
  }

  // async saveMovie() {
  //   let payload = {
  //     data: {
  //       type: 'movies',
  //       attributes: { title: this.title },
  //       relationships: {
  //         band: {
  //           data: {
  //             id: this.model.id,
  //             type: 'actors'
  //           }
  //         }
  //       }
  //     }
  //   };
  //   let response = await fetch('/movies', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/vnd.api+json'
  //     },
  //     body: JSON.stringify(payload)
  //   });
  //
  //   let json = await response.json();
  //   let { id, attributes, relationships } = json.data; +45 let rels = {};
  //   for (let relationshipName in relationships) {
  //     rels[relationshipName] = relationships[relationshipName].links.related;
  //   }
  //   let movie = new movie({ id, ...attributes }, rels);
  //   this.model.movies = [...this.model.movies, movie];
  //   this.title = '';
  //   this.showAddMovie = true;
  // }


  @action
  cancel() {
    this.title = '';
    this.showAddMovie = true;
  }
}

