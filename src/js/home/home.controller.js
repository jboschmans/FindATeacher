class HomeCtrl {
  constructor(AppConstants, $state, $window) {
    'ngInject';

    this.appName = AppConstants.appName;
    this.$state = $state;
    this.isSearching = false;
    this.searchData = {
      title: "",
      location: ""
    };
    $window.scrollTo(0,0);
  }

  search(){
    this.isSearching = true;
    this.$state.go('app.zoeken', this.searchData);
  }
}

export default HomeCtrl;
