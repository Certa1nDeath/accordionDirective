'use strict';

ddescribe('Directive: accordionGroup', function () {

    beforeEach(module('accordionDirectiveApp'));
    beforeEach(module('views/templates/accordionGroup.html'));

    var element;
    var scope;
    var groups;

    beforeEach(inject(function ($rootScope, $compile) {
        scope = $rootScope.$new();
        var tpl = '<accordion>' +
            "<accordion-group heading='title 1'>Content 1</accordion-group>" +
            "<accordion-group heading='title 2'>Content 2</accordion-group>" +
            '</accordion>';
        element = angular.element(tpl);
        element = $compile(element)(scope);
        scope.$digest();
        groups = element.find('.accordion-group');
    }));

    it('should change selected element on click', function () {
        console.log(element);
        groups.eq(0).find('a').click();
        expect(groups.eq(0).scope().isOpen).toBe(true);
        groups.eq(1).find('a').click();
        expect(groups.eq(0).scope().isOpen).toBe(false);
        expect(groups.eq(1).scope().isOpen).toBe(true);
    });
});
