class HomeCtrl {
  constructor(AppConstants, $firebaseArray) {
    'ngInject';

    this.appName = AppConstants.appName;
    this.isSearching = false;
    console.log(firebase);
    /*this.data = $firebaseArray(firebase.database().ref());
    this.data.$loaded().then(res => {
      console.log(res);
    });*/
  }

  search(){
    this.isSearching = true;
    console.log(this.searchData);
  }
}

export default HomeCtrl;
