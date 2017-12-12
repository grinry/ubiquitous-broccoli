'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/view1', {
      templateUrl: 'view1/view1.html',
      controller: 'View1Ctrl'
    });
}])

.controller('View1Ctrl', ['$scope', function($scope) {
    $scope.items = [
        {fruit:'apple', color:'green', number: 6, isHealthy: true},
        {fruit:'pineapple', color:'yellow', number: 1, isHealthy: true},
        {fruit:'belladonna', color:'black', number: 3, isHealthy: false},
        {fruit:'blueberry', color:'blue', number: 4, isHealthy: true},
        {fruit:'pear', color:'green', number: 5, isHealthy: true},
        {fruit:'holly', color:'red', number: 2, isHealthy: false},
        {fruit:'orange', color:'orange', number: 7, isHealthy: true},
        {fruit:'lemon', color:'yellow', number: 8, isHealthy: true}
    ];

    $scope.sortBy = 'fruit';
    $scope.reverseSort = false;
    $scope.search = null;

    $scope.isHealthyString = function(value) {
        return value ? 'Yes' : 'No';
    };

    $scope.doSort = function(value) {
        if ($scope.sortBy === value) {
            $scope.reverseSort = !$scope.reverseSort;
        } else {
            $scope.sortBy = value;
            $scope.reverseSort = false;
        }
    };

    $scope.sortDir = function(value) {
        if ($scope.sortBy === value) {
            if ($scope.reverseSort) {
                return '☝';
            } else {
                return '☟';
            }
        }
        return '';
    };

    $scope.filteredItems = function() {
        if (!$scope.search) {
            return $scope.items;
        }
        return $scope.items.filter(function(item) {
            var has = false;
            for(var k in item) {
                if (item.hasOwnProperty(k)) {
                    if (isNaN(item[k])) {
                        has = item[k].indexOf($scope.search) > -1;
                    } else {
                        has = item[k] === $scope.search;
                    }
                    if (has) {
                        break;
                    }
                }
            }
            return has;
        });
    };

}]);
