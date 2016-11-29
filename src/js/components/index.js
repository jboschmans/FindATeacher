import angular from 'angular';

let componentsModule = angular.module('app.components', []);

// Components
import Banner from './banner/banner.component';
componentsModule.component('banner', Banner);

export default componentsModule;
