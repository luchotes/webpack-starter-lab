require('angular');

import homeController from './home/home.controller';
import homeService from './home/home.service';

angular.module('app', [])
    .controller('homeController', homeController)
    .service('homeService', homeService);