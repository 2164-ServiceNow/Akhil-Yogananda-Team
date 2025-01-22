var app = angular.module('MovieApp', ['ngRoute']);

app.config(function ($routeProvider, $locationProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'app/views/home.html', 
            controller: 'mainController'
        })
        .when('/top-rated', {
            templateUrl: 'app/views/topRatedMovies.html',
            controller: 'topRatedMoviesController'
        })
        .when('/movie/:movieName', {
            templateUrl: 'app/views/movie-details.html',
            controller: 'movieDetailsController'
        })
        .when('/top-rated/:movieName', {
            templateUrl: 'app/views/topRatedMovieDetails.html',
            controller: 'topRatedMovieDetailsController'
        })
        .when('/about', {
            templateUrl: 'app/views/about.html'
        })
        .otherwise({
            redirectTo: '/'
        });

    $locationProvider.html5Mode({
        enabled: true,
        requireBase: true
    });
});
