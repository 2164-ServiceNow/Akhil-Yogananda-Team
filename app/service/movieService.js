app.service('movieService', function ($http) {

    const topRatedMoviesUrl = 'https://api.themoviedb.org/3/'
    const API_URL = 'https://api.themoviedb.org/3/discover/movie';
    const searchUrl= 'https://api.themoviedb.org/3/search/'
    const API_KEY = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZWMyNWIwZGEyZThjZTZjOGI0N2FhZmE2NDk1MGE1YyIsIm5iZiI6MTczNzA0ODY0Ny4xOSwic3ViIjoiNjc4OTQyNDc5NDdiMTlmNzhiOTc5YTY3Iiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.G4NMcUZKnbXllO-HVFZzHXkPzAyNw1kFpIFVUCV_S-s';

    this.getMovies = function (page) {
        const options = {
            headers: {
                accept: 'application/json',
                Authorization: API_KEY
            }
        };

        return $http.get(`${API_URL}?include_adult=false&include_video=false&language=en-US&page=${page}&sort_by=popularity.desc`, options)
            .then(response => response.data)
            .catch(error => {
                console.error('Error fetching movies:', error);
                return null;
            });
    };

    this.getTopRatedMovies = function (page) {
        const options = {
            headers: {
                accept: 'application/json',
                Authorization: API_KEY
            }
        };

        return $http.get(`${topRatedMoviesUrl}/movie/top_rated?language=en-US&page=${page}`, options)
            .then(response => response.data)
            .catch(error => {
                console.error('Error fetching top-rated movies:', error);
                return null;
            });
    };

    this.searchMovie = function (query) {
        return $http.get('https://api.themoviedb.org/3/search/movie?query=' + encodeURIComponent(query) + '&include_adult=false&language=en-US&page=1', {
            headers: {
                'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZWMyNWIwZGEyZThjZTZjOGI0N2FhZmE2NDk1MGE1YyIsIm5iZiI6MTczNzA0ODY0Ny4xOSwic3ViIjoiNjc4OTQyNDc5NDdiMTlmNzhiOTc5YTY3Iiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.G4NMcUZKnbXllO-HVFZzHXkPzAyNw1kFpIFVUCV_S-s',
                'accept': 'application/json'
            }
        }).then(function (response) {
            return response.data;
        });
    };
    
});

