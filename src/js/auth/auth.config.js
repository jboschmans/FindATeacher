function AuthConfig($stateProvider){
  'ngInject';

  $stateProvider

  .state('app.register', {
    url: '/register',
    controller: 'AuthCtrl as $ctrl',
    templateUrl: 'auth/auth.html',
    title:'Registreren'
  })

  .state('app.login', {
    url: '/login',
    controller: 'AuthCtrl as $ctrl',
    templateUrl: 'auth/auth.html',
    title:'Aanmelden'
  })

  .state('app.aangemeld', {
    url: '/aangemeld',
    controller: 'AuthCtrl as $ctrl',
    templateUrl: 'auth/auth.html',
    title: 'Advertentie aanpassen'
  });
}

export default AuthConfig;
