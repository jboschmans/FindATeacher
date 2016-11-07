class HomeCtrl {
  constructor(AppConstants) {
    'ngInject';

    this.appName = AppConstants.appName;
    this.isSearching = false;
  }

  search(){
    this.isSearching = true;
    console.log(this.searchData);
  }
}

export default HomeCtrl;
