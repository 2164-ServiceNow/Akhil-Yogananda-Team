app.controller('topRatedMoviesController', function ($scope, movieService, $location) {
    $scope.topRatedMovies = [];
    $scope.currentPage = 1;
    $scope.loading = true;

    $scope.fetchTopRatedMovies = function (page) {
        $scope.loading = true;
        movieService.getTopRatedMovies(page).then(function (data) {
            if (data && data.results) {
                $scope.topRatedMovies = data.results;
            } else {
                console.error('No top-rated movie data received');
            }
            $scope.loading = false;
        });
    };

    $scope.goToDetails = function (movieTitle) {
        var formattedTitle = movieTitle.replace(/\s+/g, '-').toLowerCase(); // Format the title to be URL-friendly
        $location.path('/top-rated/' + formattedTitle); // Redirect to the movie details page
    };

    $scope.nextPage = function () {
        $scope.currentPage++;
        $scope.fetchTopRatedMovies($scope.currentPage);
    };

    $scope.prevPage = function () {
        if ($scope.currentPage > 1) {
            $scope.currentPage--;
            $scope.fetchTopRatedMovies($scope.currentPage);
        }
    };

    // Fetch top-rated movies on initialization
    $scope.fetchTopRatedMovies($scope.currentPage);
});
