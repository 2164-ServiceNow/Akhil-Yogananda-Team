var app = angular.module('MovieApp', ['ngRoute']);

app.config(function ($routeProvider, $locationProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'app/views/home.html',
            controller: 'mainController'
        })
        .when('/movies', {
            templateUrl: 'app/views/movies-list.html',
            controller: 'movieListController'
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
        .otherwise({
            redirectTo: '/'
        });

    $locationProvider.html5Mode({
        enabled: true,
        requireBase: true
    });
});
