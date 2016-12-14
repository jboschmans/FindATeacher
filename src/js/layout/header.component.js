class AppHeaderCtrl {
  constructor(AppConstants, User, $scope) {
    'ngInject';

    this.appName = AppConstants.appName;
    this.User = User;
  }

}

let AppHeader = {
  controller: AppHeaderCtrl,
  templateUrl: 'layout/header.html'
};

export default AppHeader;
