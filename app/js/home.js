// AngularJS Controller for the Home page
angular.module('MovieApp')
    .controller('mainController', function($scope) {
        // Toggle nav menu visibility
        $scope.isNavOpen = false;

        $scope.toggleNav = function() {
            $scope.isNavOpen = !$scope.isNavOpen;
        };
    });
