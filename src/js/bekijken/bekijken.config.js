function BekijkenConfig($stateProvider){
  'ngInject';

  $stateProvider
  .state('app.bekijken',{
    url: '/bekijken',
    controller: 'BekijkenCtrl as $ctrl',
    templateUrl: 'bekijken/bekijken.html',
    title: 'Bekijken',
    params: {
      'id': ''
    }
  });
};

export default BekijkenConfig;
