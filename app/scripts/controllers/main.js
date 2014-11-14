'use strict';

/**
 * @ngdoc function
 * @name accordionDirectiveApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the accordionDirectiveApp
 */
angular.module('accordionDirectiveApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
