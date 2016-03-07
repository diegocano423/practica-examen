var practica = angular.module('practica', ['ngRoute', 'practica.services'])
 
practica.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
        $routeProvider
        .when('/', {
            templateUrl: 'views/welcome.html',
            controller: 'WelcomeCtrl',
            controllerAs: 'welcome'
        })
       .when('/contact', {
            templateUrl: 'views/contacts.html',
            controller: 'MainCtrl',
            controllerAs: 'contact'
        })
        .when('/contact/:id', {
            templateUrl: 'views/detail.html',
            controller: 'DetailCtrl',
            controllerAs: 'detail'
        })
        .when('/error', {
            templateUrl: 'views/error.html',
            controller: 'ErrorCtrl',
            controllerAs: 'error'
        })
        .otherwise({
            redirectTo: '/',
        });

        $locationProvider.html5Mode({
          enabled: true,
          requireBase: false
        });
   }]);