angular.module('appRoutes', ['ngRoute'])

.config(function($routeProvider, $locationProvider) {

    $routeProvider
    .when('/', {
        templateUrl: 'app/views/pages/home.html'
    }) //default location
    .when('/evalForm', {
        templateUrl: 'app/views/pages/evalForm.html'
    })
    .when('/addUser', {
        templateUrl: 'app/views/pages/users/addUser.html',
        controller: 'addUserCtrl',
        controllerAs: 'adduser'
    })

    .otherwise({ redirectTo: '/' });

    $locationProvider.html5Mode({
      enabled: true,
      requiredBase: false
    });
});
