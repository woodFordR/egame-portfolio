import EmberRouter from '@ember/routing/router';
import config from 'egame-portfolio/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function() {
  this.route('actors', function() {
    this.route('actor', {
      path: ':id'
    }, function() {
      this.route('movies');
    });
  });
});

