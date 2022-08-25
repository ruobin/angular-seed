'use strict';

angular.module('myApp.spicy', ['ngRoute'])
    .controller('SpicyController', ['$scope', function ($scope) {
        $scope.spice = 'very';

        $scope.chiliSpicy = function () {
            $scope.spice = 'chili';
        };

        $scope.jalapenoSpicy = function () {
            $scope.spice = 'jalapeño';
        };
    }]);