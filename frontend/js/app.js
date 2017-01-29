var app = angular.module('Spoilers', ['ui.router'])

.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function($stateProvider, $urlRouterProvider, $locationProvider) {
  $urlRouterProvider.otherwise('home');
  $locationProvider.html5Mode(true);
  $stateProvider
    .state('home', {
      url: '/home',
      templateUrl: '/views/home.html',
      controller: 'homeController',
      controllerAs: 'home'
    })
    .state('bio', {
      url: '/bio',
      templateUrl: '/views/bio.html',
      controller: 'bioController',
      controllerAs: 'bio'
    })
    .state('movies', {
      url: '/movies',
      templateUrl: '/views/movies.html',
      controller: 'moviesController',
      controllerAs: 'movies'
    })
    .state('contact', {
      url: '/contact',
      templateUrl: '/views/contact.html',
      controller: 'contactController',
      controllerAs: 'contact'
    })
    .state('stats', {
      url: '/SpoilersHOF',
      templateUrl: '/views/stats.html',
      controller: 'statsController',
      controllerAs: 'stats'
    })
}])
