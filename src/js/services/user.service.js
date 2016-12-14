export default class User{
  constructor(AppConstants, $http, $window){
    'ngInject';

    this.AppConstants = AppConstants;
    this.$http = $http;
    this.$window = $window;

    this.currentID = null;

    this.tryLogin();
  }

  setStorage(id){
    this.$window.localStorage[this.AppConstants.storageKey] = id;
  }

  deleteStorage(){
    this.$window.localStorage.removeItem(this.AppConstants.storageKey);
  }

  tryLogin(){
    if (!this.$window.localStorage[this.AppConstants.storageKey]) return;
    else {
      this.$http({
        url: this.AppConstants.api + "id/" + this.$window.localStorage[this.AppConstants.storageKey],
        method: 'GET'
      }).then(
        res => {
          if (!res.data.id) return;
          else {
            this.currentID = res.data.id;
          }
        }, err => {return false;}
      );
    }
  }

}
