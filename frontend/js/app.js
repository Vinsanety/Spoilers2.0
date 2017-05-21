var app = angular.module('Spoilers', ['ui.router'])

.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function($stateProvider, $urlRouterProvider, $locationProvider) {
  $urlRouterProvider.otherwise('home');
  $locationProvider.html5Mode(true);
  $stateProvider
    .state('home', {
      url: '/',
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
      url: '/stats',
      templateUrl: '/views/stats.html',
      controller: 'statsController',
      controllerAs: 'stats'
    })
    .state('Oscar-Pick-Em-17', {
      url: '/Oscar-Pick-Em-17',
      templateUrl: '/views/oscarPickEm.html',
      controller: 'oscarController',
      controllerAs: 'oscar'
    })
    // .state('credits', {
    //   url: '/credits',
    //   templateUrl: '/views/credits.html',
    //   controller: 'creditsController',
    //   controllerAs: 'credits'
    // })
    .state('collections', {
      url: '/collections',
      templateUrl: '/views/collections.html',
      controller: 'collectionsController',
      controllerAs: 'collections'
    })
}])
