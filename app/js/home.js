
angular.module('MovieApp')
    .controller('mainController', function($scope) {
        $scope.isNavOpen = false;
        $scope.toggleNav = function() {
            $scope.isNavOpen = !$scope.isNavOpen;
        };
    });
