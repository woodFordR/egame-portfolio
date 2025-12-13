import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { Movie } from 'egame-portfolio/model/movie';
import { service } from '@ember/service';

export default class ActorsActorMoviesController extends Controller {
  @tracked showAddMovie = true;
  @tracked title = '';
  @service catalog

  get hasNoTitle() {
    return !this.title;
  }

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

  @action
  cancel() {
    this.title = '';
    this.showAddMovie = true;
  }
}

