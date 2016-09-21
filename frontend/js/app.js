angular.module('Spoilers', ['ui.router', 'Spoilers.controllers'])

.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('home')
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
}])
