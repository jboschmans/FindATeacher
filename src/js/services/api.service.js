export default class Api{
  constructor(AppConstants, $http){
    'ngInject';

    this.AppConstants = AppConstants;
    this.$http = $http;
  }
}
