console.log('mainController registered');
app.controller('mainController', function ($scope) {
    console.log('mainController initialized');
    $scope.message = "Welcome to Cine Bloom!";
});
