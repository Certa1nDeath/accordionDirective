'use strict';

/**
 * @ngdoc directive
 * @name accordionDirectiveApp.directive:accordionGroup
 * @description
 * # accordionGroup
 */
angular.module('accordionDirectiveApp')
    .directive('accordionGroup', function () {
        return {
            require: '^accordion',
            templateUrl: 'views/templates/accordionGroup.html',
            restrict: 'E',
            replace: true,
            scope: { heading: '@', detail: '@' },
            link: function postLink(scope, element, attrs, accordionCtrl) {
                accordionCtrl.addGroup(scope);
                scope.isOpen = false;
                scope.$watch('isOpen', function(value) {
                    if (value) {
                        accordionCtrl.closeOthers(scope);
                    }
                });
            }
        };
    });
