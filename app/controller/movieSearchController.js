app.controller('movieSearchController', ['$scope', 'movieService', function($scope, movieService) {
    $scope.searchQuery = '';
    $scope.movieData = null;
    $scope.error = null;

    // Fetch movies based on the search query
    $scope.searchMovies = function() {
        if ($scope.searchQuery) {
            movieService.searchMovies($scope.searchQuery)
                .then(function(data) {
                    if (data && data.results && data.results.length > 0) {
                        $scope.movieData = data.results[0];
                        $scope.error = null;
                    } else {
                        $scope.movieData = null;
                        $scope.error = 'No movies found. Please try a different query.';
                    }
                })
                .catch(function() {
                    $scope.error = 'Error fetching movies. Please try again later.';
                    $scope.movieData = null;
                });
        } else {
            $scope.error = 'Please enter a search query.';
        }
    };
}]);
