app.controller('homeController', ['$http', '$scope', '$state', function($http, $scope, $state, IndividualStatsFactory) {
  angular.element(document).ready(function () {
    $('.parallax').parallax();

  var options = [
    {
      selector: '#QuoteOfTheDay-ScrollFire-Inititator', offset: 50, callback: function(el) {
        Materialize.toast("Spoilers! Quote of the Day!", 1500 );
      }
    },
    {
      selector: '#QuoteOfTheDay-ScrollFire-Inititator', offset: 400, callback: function(el) {
        Materialize.showStaggeredList($(el));
      }
    }
  ];
  Materialize.scrollFire(options);

  })
}])

app.controller('bioController', ['$http', '$scope', '$state', function($http, $scope, $state, hostFactory) {
  angular.element(document).ready(function () {
    $('.modal-trigger').leanModal({
       dismissible: true, // Modal can be dismissed by clicking outside of the modal
    });

  })
}])

app.controller('moviesController', ['$http', '$scope', '$state', function($http, $scope, $state) {

  $http.get('https://api.soundcloud.com/playlists/235506624?client_id=f4f2237e0ee1500764af3532c6bc5e13').then(function(data) {
    var data = data.data.tracks;

    //Scope array of objects to populate thumbnails
    $scope.movieCollection = [];
    console.log($scope.movieCollection);

    //TitleCollection for the autocomplete work *unfinished*
    $scope.titleCollection = {};
    // console.log($scope.titleCollection);

    // Adding playable iframe to each card *unfinished*
    // $scope.track_id_Collection = [];
    // $scope.iframeSRC_Collection = [];
    // for (var i = 0; i < data.length; i++) {
    //   var track_id = data[i].id;
    //   $scope.track_id_Collection.push(track_id);
    //   var movies_iframeSRC = "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/" + $scope.track_id_Collection[i] + "&amp;color=ff5500&amp;inverse=false&amp;auto_play=false&amp;show_user=true";
    //   $scope.iframeSRC_Collection.push(movies_iframeSRC);
    // }
    // // for (var i = 0; i < $scope.movieCollection.length; i++) {
    // //   console.log($scope.movieCollection[i]);
    // // }
    // $scope.movieCollection.src = $scope.iframeSRC_Collection;


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

app.controller('contactController', ['$http', '$scope', '$state', function($http, $scope, $state) {
  angular.element(document).ready(function () {
    // TWITTER EMBED
    !function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+"://platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");


  });
}])

// app.controller('statsController', ['$http', '$scope', '$state', function($http, $scope, $state, hostFactory) {
//   angular.element(document).ready(function () {
//
//
//   });
// }])
