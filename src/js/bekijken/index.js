import angular from 'angular';

let bekijkenModule = angular.module('app.bekijken', []);

import BekijkenConfig from './bekijken.config';
bekijkenModule.config(BekijkenConfig);

import BekijkenCtrl from './bekijken.controller';
bekijkenModule.controller('BekijkenCtrl', BekijkenCtrl);

export default bekijkenModule;
