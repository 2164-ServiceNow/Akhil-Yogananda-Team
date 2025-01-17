app.controller('movieSearchController', function ($scope, movieService) {
    $scope.searchQuery = "";
    $scope.searchResults = [];
    $scope.loading = false;

    // Perform the movie search
    $scope.searchMovie = function () {
        if ($scope.searchQuery.trim() !== "") {
            $scope.loading = true;
            movieService.searchMovie($scope.searchQuery).then(function (data) {
                if (data && data.results) {
                    $scope.searchResults = data.results;
                } else {
                    console.error('No results found for query:', $scope.searchQuery);
                }
                $scope.loading = false;
            });
        }
    };
});