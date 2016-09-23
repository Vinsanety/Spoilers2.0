angular.module('Spoilers.controllers', [])

.controller('homeController', ['$http', '$scope', '$state', function($http, $scope, $state) {
  console.log('home test');
  $(document).ready(function(){
    $('.parallax').parallax();
  });
}])

.controller('bioController', ['$http', '$scope', '$state', function($http, $scope, $state) {
  console.log('bio test');
}])

.controller('moviesController', ['$http', '$scope', '$state', function($http, $scope, $state) {
  console.log('movie test');

  $http.get('https://api.soundcloud.com/playlists/235506624?client_id=f4f2237e0ee1500764af3532c6bc5e13').then(function(data) {
    var data = data.data.tracks;
    // console.log(data);
    //Scope array of objects to populate thumbnails
    $scope.movieCollection = [];
    console.log($scope.movieCollection);
    $scope.titleCollection = {};
    console.log($scope.titleCollection);

    // AUTOCOMPLETE FOR SEARCH
    $('input.autocomplete').autocomplete({
        data: {
          "Apple": null,
          "Google": null,
          "Time Bandits": 'http://ia.media-imdb.com/images/M/MV5BMTg2MDYwMzM0NF5BMl5BanBnXkFtZTcwODI3MTQ5OQ@@._V1_SX300.jpg'
        }
      });

    //Works the soundcloud api down to the splitting the title of our tracks to before the dash
    $(data).each(function(i) {
      var titleSplit = data[i].title.split(' -');
      // console.log(titleSplit);
      var title = titleSplit[0];
      // console.log(title);

      // Accessing OMDB, using the split title from above:
      $http.get('https://www.omdbapi.com/?t='+title).then(function (movie) {
      // variable to access the API object
        var movieData = movie.data;
        //Pushes movie data object into array movieCollection and adds a holder image if Poster doesn't exist within API
          if (movieData.Poster === 'N/A') {
            movieData.Poster = 'images/Confused-Travolta.gif'
          }
        $scope.movieCollection.push(movieData);
        $scope.titleCollection[movieData.Title] = movieData.Poster;
      })
    })
  })
}])

.controller('contactController', ['$http', '$scope', '$state', function($http, $scope, $state) {
  console.log('contact test');
}])
