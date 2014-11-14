'use strict';

describe('Controller: AccordionCtrl', function () {

    beforeEach(module('accordionDirectiveApp'));

    var AccordionCtrl;
    var scope;

    beforeEach(inject(function ($controller, $rootScope) {
        scope = $rootScope.$new();
        AccordionCtrl = $controller('AccordionCtrl', {
            $scope: scope
        });
    }));

    describe('close others', function () {

        var group1;
        var group2;
        var group3;

        var initGroupScopes = function () {
            group1 = scope.$new;
            group2 = scope.$new;
            group3 = scope.$new;
        };

        var addGroupsToController = function () {
            AccordionCtrl.addGroup(group1);
            AccordionCtrl.addGroup(group2);
            AccordionCtrl.addGroup(group3);
        };

        var openAllGroups = function () {
            group1.isOpen = true;
            group2.isOpen = true;
            group3.isOpen = true;
        };

        beforeEach(function () {
            initGroupScopes();
            addGroupsToController();
            openAllGroups();
            AccordionCtrl.closeOthers(group2);
        });

        it('should close group1', function () {
            expect(group1.isOpen).toBe(false);
        });

        it('should let group2 to be opened', function () {
            expect(group2.isOpen).toBe(true);
        });

        it('should close group3', function () {
            expect(group3.isOpen).toBe(false);
        });

    });



});
