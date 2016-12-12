class BekijkenCtrl {
  constructor(AppConstants, $stateParams, $http, $state){
    'ngInject';

    this.appName = AppConstants.appName;
    this.$state = $state;
    this.status = "Laden....";
    this.isSearching = false;
    this.searchData = {
      title: "",
      location: ""
    };
    //$stateParams.id = "583d51e4dcba0f55bd9efc5e"; // Enkel om te testen !!!
    if (!$stateParams.id || $stateParams.id.length < 1) this.status = "Er is een fout opgetreden";
    else {
      $http({
        method: 'GET',
        url: AppConstants.api + "id/" + $stateParams.id
      }).then(
        res => {
          this.status = "";
          this.leerkracht = res.data[0];
          if (!this.leerkracht) this.status = "Er is een fout opgetreden";
          this.leerkracht.prijsString = this.leerkracht.prijs + " €/u";
        }
      );
    }

    $http({
      method: 'POST',
      url: AppConstants.api + "insert",
      data: {
        naam: "Ladida",
        straat: "rue",
        plaats: "Gent"
      }
    }).then(
      res => {
        console.log("res.data");
      },
      err => {
        console.log("failed");
      }
    );

  }

  search(){
    this.isSearching = true;
    this.$state.go('app.zoeken', this.searchData);
  }

}

export default BekijkenCtrl;