import angular from 'angular';

// Create the module where our functionality can attach to
let zoekenModule = angular.module('app.zoeken', []);

// Include our UI-Router config settings
import ZoekenConfig from './zoeken.config';
zoekenModule.config(ZoekenConfig);


// Controllers
import ZoekenCtrl from './zoeken.controller';
zoekenModule.controller('ZoekenCtrl', ZoekenCtrl);


export default zoekenModule;
