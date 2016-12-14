export default class User{
  constructor(AppConstants, $http){
    'ngInject';

    this.AppConstants = AppConstants;
    this.$http = $http;

    this.currentID = null;
  }

}
