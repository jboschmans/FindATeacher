function ZoekenConfig($stateProvider) {
  'ngInject';

  $stateProvider
  .state('app.zoeken', {
    url: '/zoeken',
    controller: 'ZoekenCtrl as $ctrl',
    templateUrl: 'zoeken/zoeken.html',
    title: 'Zoeken',
    params: {
      'title': '',
      'location': ''
    }
  });

};

export default ZoekenConfig;
