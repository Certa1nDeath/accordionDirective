'use strict';

/**
 * @ngdoc directive
 * @name accordionDirectiveApp.directive:accordion
 * @description
 * # accordion
 */
angular.module('accordionDirectiveApp')
    .directive('accordion', function () {
        return {
            restrict: 'E',
            controller: 'AccordionCtrl',
            link: function postLink(scope, element, attrs) {
                element.addClass('accordion');
            }
        };
    });
