import angular from 'angular';

// Create the module where our functionality can attach to
let servicesModule = angular.module('app.services', []);

// Services
import UserService from "./user.service";
servicesModule.service("User", UserService);

import ApiService from "./api.service";
servicesModule.service("Api", ApiService);


export default servicesModule;
