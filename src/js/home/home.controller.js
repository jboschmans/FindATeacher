class HomeCtrl {
  constructor(AppConstants, $state) {
    'ngInject';

    this.appName = AppConstants.appName;
    this.$state = $state;
    this.isSearching = false;
    this.searchData = {
      title: "",
      location: ""
    };
  }

  search(){
    this.isSearching = true;
    this.$state.go('app.zoeken', this.searchData);
  }
}

export default HomeCtrl;
