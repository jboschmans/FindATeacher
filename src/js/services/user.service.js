export default class User{
  constructor(AppConstants, $http){
    'ngInject';

    this.AppConstants = AppConstants;
    this.$http = $http;

    this.current = null;
  }

  // Try to authenticate by registering or logging in
  /*
  attemptAuth(type, credentials){
    let route = (type === "login") ? "/login" : "";
    return this.$http({
      url: this.AppConstants.api + "/users" + route,
      method: "POST",
      data: {
        user: credentials
      }
    }).then(
      // On Success...
      (res) => {
        // Store the user's info for easy lookup
        this.current = res.data.user;
        return res;
      }
    );
  }*/

}
