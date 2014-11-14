'use strict';

/**
 * @ngdoc function
 * @name accordionDirectiveApp.controller:AccordionCtrl
 * @description
 * # AccordionCtrl
 * Controller of the accordionDirectiveApp
 */
angular.module('accordionDirectiveApp')
    .controller('AccordionCtrl', ['$scope', function ($scope) {
        this.groups = [];
        this.closeOthers = function (openGroup) {
            angular.forEach(this.groups, function (group) {
                if (!angular.equals(group, openGroup)) {
                    group.isOpen = false;
                }
            });
        };

        this.addGroup = function (groupScope) {
            var that = this;
            this.groups.push(groupScope);
            //groupScope.$on('$destroy', function (event) {
            //    that.removeGroup(groupScope);
            //});
        };

        this.removeGroup = function (group) {
            var index = this.groups.indexOf(group);
            if (index !== -1) {
                this.groups.splice(this.groups.indexOf(group), 1);
            }
        };
    }]);
