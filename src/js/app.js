import angular from 'angular';

// Import our app config files
import constants      from './config/app.constants';
import appConfig      from './config/app.config';
import appRun         from './config/app.run';
import * as firebase  from 'firebase';

import 'angular-ui-router';
import 'firebase';
import 'angularfire';
// Import our templates file (generated by Gulp)
import './config/app.templates';
// Import our app functionaity
import './layout';
import './components';
import './home';
import './profile';
import './article';
import './services';
import './auth';


// Create and bootstrap application
const requires = [
  'ui.router',
  'templates',
  'firebase',
//  'angularfire',
  'app.layout',
  'app.components',
  'app.home',
  'app.profile',
  'app.article',
  'app.services',
  'app.auth'
];

// Mount on window for testing
window.app = angular.module('app', requires);

angular.module('app').constant('AppConstants', constants);

angular.module('app').config(appConfig);

angular.module('app').run(appRun);

angular.bootstrap(document, ['app'], {
  strictDi: true
});
