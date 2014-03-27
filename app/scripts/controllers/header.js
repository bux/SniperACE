'use strict';

angular.module('sniperAceApp')
.controller('HeaderCtrl', function ($scope, $location) {
    $scope.isActive = function (viewLocation) {
        return viewLocation === $location.path();
    };
});