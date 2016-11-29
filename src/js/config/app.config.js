import firebase from 'firebase';

function AppConfig($httpProvider, $stateProvider, $locationProvider, $urlRouterProvider) {
  'ngInject';

  $stateProvider
  .state('app', {
    abstract: true,
    templateUrl: 'layout/app-view.html'
  });

  $urlRouterProvider.otherwise('/');

  // Set up firebase
  var config = {
    apiKey: "AIzaSyAeC83uIRnN8ICvSB3H0pIKomOOzF_Ckmc",
    authDomain: "findateacher-5c7ad.firebaseapp.com",
    databaseURL: "https://findateacher-5c7ad.firebaseio.com",
    storageBucket: "findateacher-5c7ad.appspot.com",
    messagingSenderId: "934745545351"
  };
  firebase.initializeApp(config);

}

export default AppConfig;
