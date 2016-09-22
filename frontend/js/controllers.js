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

  // AUTOCOMPLETE FOR SEARCH
  $('input.autocomplete').autocomplete({
      data: {
        "Apple": null,
        "Microsoft": null,
        "Google": null
      }
    });

  $http.get('https://api.soundcloud.com/playlists/235506624?client_id=f4f2237e0ee1500764af3532c6bc5e13').then(function(data) {
    var data = data.data.tracks;
    // console.log(data);
    //Scope array of objects to populate thumbnails
    $scope.movieCollection = [];
    console.log($scope.movieCollection);

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
            movieData.Poster = 'images/Seinfeld-No-Img.gif'
          }
        $scope.movieCollection.push(movieData)
      })
    })
  })
  //below adds the entire Playlist to the DOM
  $('#iframe').attr('src','https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/235506624&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true')
}])

.controller('contactController', ['$http', '$scope', '$state', function($http, $scope, $state) {
  console.log('contact test');
}])
