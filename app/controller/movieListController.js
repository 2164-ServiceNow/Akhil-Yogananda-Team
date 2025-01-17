

app.controller('movieListController', function ($scope, $location, movieService) {
    $scope.movies = [];
    $scope.currentPage = 1;
    $scope.searchTerm = '';
    $scope.loading = true;

    $scope.fetchMovies = function (page) {
        $scope.loading = true;
        movieService.getMovies(page).then(function (data) {
            if (data && data.results) {
                $scope.movies = data.results;
            } else {
                console.error('No movie data received');
            }
            $scope.loading = false;
        });
    };
    
    $scope.goToDetails = function (movieTitle) {
        var formattedTitle = movieTitle.replace(/\s+/g, '-').toLowerCase(); // Replace spaces with hyphens and make lowercase
        $location.path('/movie/' + formattedTitle); // Redirect to movie details
    };

    $scope.nextPage = function () {
        $scope.currentPage++;
        $scope.fetchMovies($scope.currentPage);
    };

    $scope.prevPage = function () {
        if ($scope.currentPage > 1) {
            $scope.currentPage--;
            $scope.fetchMovies($scope.currentPage);
        }
    };

    // Fetch the first page on initialization
    $scope.fetchMovies($scope.currentPage);
});
