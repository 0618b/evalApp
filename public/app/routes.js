angular.module('appRoutes', ['ngRoute'])

.config(function($routeProvider, $locationProvider) {

    $routeProvider
    .when('/', {
        templateUrl: 'app/views/pages/home.html'
    }) //default location
    .when('/evalForm', {
        templateUrl: 'app/views/pages/evalForms/evalForm.html'
        //controller: 'evalFormControllers'
    })
    .when('/user', {
        templateUrl: 'app/views/pages/users/user.html'
        //controller: 'userControllers'
    })
    .when('/addEvalForm', {
        templateUrl: 'app/views/pages/evalForms/addEvalForm.html',
        controller: 'addEvalFormControllers',
        controllerAs: 'addef'
    })
    .when('/addUser', {
        templateUrl: 'app/views/pages/users/addUser.html',
        controller: 'addUserControllers',
        controllerAs: 'adduser'
    })

    .otherwise({ redirectTo: '/' });

    $locationProvider.html5Mode({
      enabled: true,
      requiredBase: false
    });
});
