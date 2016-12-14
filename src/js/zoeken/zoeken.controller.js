class ZoekenCtrl {
  constructor(AppConstants, $stateParams, $http, $state) {
    'ngInject';

    this.appName = AppConstants.appName;
    this.$state = $state;
    this.api = AppConstants.api;
    this.$stateParams = $stateParams;
    this.$http = $http;
    this.isSearching = false;
    this.searchData = {
      title: "",
      location: ""
    };
    this.status = "Laden...";
    this.leerkrachten = [];

    this.zoekData();
  }

  click(id){
    this.$state.go('app.bekijken', {id: id});
  }

  search(){
    this.isSearching = true;
    this.$state.go('app.zoeken', this.searchData);
  }

  zoekData(){
    if (!this.$stateParams.location || !this.$stateParams.title) this.status = "Er is iets fout gelopen, gelieve opnieuw te zoeken.";

    /*this.$http({
      url: 'https://api.mlab.com/api/1/databases/jorisboschmans-mydb/collections/findateacherserver?apiKey=RQtq7YLKM48Vm5xnUTi-YdZ8iso66f5M&q={"plaats":'+this.$stateParams.location+',"titel":'+this.$stateParams.title+'}',
      method: "GET"
    }).then(res => {
      console.log(res.data);
    }, err => {
      console.log(err);
    });*/



    this.$http({
      method: "GET",
      url: this.api + "search/" + this.$stateParams.location + "/" + this.$stateParams.title
    }).then(
      res => {
        this.status = "";
        this.leerkrachten = res.data;
        if (this.leerkrachten.length < 1) this.status = "Niets gevonden";
      }
    );
  }


}

export default ZoekenCtrl;
