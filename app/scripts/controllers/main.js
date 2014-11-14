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

        $scope.title1 = 'Titel 1';
        $scope.title2 = 'Titel 2';
        $scope.textOne = 'asdfasdkf kalsdflasjfdk alksdjf lkasjdlfajskd fsakdflkasjfdkasjfdaguhiuha sd';
        $scope.textTwo = 'asdfasdkf kalsdflasjfdk alksdjf lkasjdlfajskd fsakdflkasjfdkasjfdaguhiuha sd';

    });
