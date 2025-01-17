app.controller('topRatedMovieDetailsController', function ($scope, $routeParams, movieService) {
    var movieName = $routeParams.movieName.replace(/-/g, ' '); // Convert hyphens back to spaces
    $scope.loading = true;

    // Function to get movie details by title
    $scope.fetchMovieDetails = function (movieName) {
        movieService.getTopRatedMovies(1).then(function (data) {
            if (data && data.results) {
                var movie = data.results.find(function (movie) {
                    return movie.title.toLowerCase() === movieName.toLowerCase(); // Match movie by title
                });
                if (movie) {
                    $scope.movie = movie;
                } else {
                    console.error('Movie not found');
                }
            }
            $scope.loading = false;
        });
    };

    // Fetch movie details by name
    $scope.fetchMovieDetails(movieName);
});
