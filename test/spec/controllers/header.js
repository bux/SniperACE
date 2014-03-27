'use strict';

describe('Controller: HeaderCtrl', function () {

    // load the controller's module
    beforeEach(module('sniperAceApp'));

    var HeadercontrollerCtrl,
      scope;

    // Initialize the controller and a mock scope
    beforeEach(inject(function ($controller, $rootScope) {
        scope = $rootScope.$new();
        HeadercontrollerCtrl = $controller('HeaderCtrl', {
            $scope: scope
        });
    }));

});
