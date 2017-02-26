app.controller('oscarController', ['$http', '$scope', '$state', function($http, $scope, $state) {
  angular.element(document).ready(function () {
    $(this).scrollTop(0);

    $scope.Oscar = [
      {
        "Name": "Pappy",
        "ANIMATED SHORT FILM": "Piper",
        "ORIGINAL SCREENPLAY": "Manchester by the Sea",
        "PRODUCTION DESIGN": "La La Land",
        "ADAPTED SCREENPLAY": "Moonlight",
        "ORIGINAL SONG": "City of Stars",
        "VISUAL EFFECTS": "Jungle book",
        "ORIGINAL SCORE": "La La Land",
        "SOUND MIXING": "La La Land",
        "MAKEUP AND HAIRSTYLING": "Star Treck Beyond",
        "SOUND EDITING": "La La Land",
        "FOREIGN LANGUAGE FILM": "A man Called Ove",
        "LIVE ACTION SHORT FILM": "Sing",
        "FILM EDITING": "La La Land",
        "DOCUMENTARY SHORT SUBJECT": "Extremis",
        "DOCUMENTARY FEATURE": "O.J Made in America",
        "COSTUME DESIGN": "La La Land",
        "CINEMATOGRAPHY": "La La Land",
        "ANIMATED FEATURE FILM": "Kubo and the Two Strings",
        "ACTOR IN A SUPPORTING ROLE": "Mahershala Ali, Moonlight",
        "ACTRESS IN A SUPPORTING ROLE": "Viola Davis, Fences",
        "ACTRESS IN A LEADING ROLE": "Emma Stone La La Land",
        "ACTOR IN A LEADING ROLE": "Casey Affleck, Manchester by the Sea",
        "DIRECTING": "La La",
        "BEST PICTURE": "La La Land"
      },
      {
        "Name": "Mikey",
        "ANIMATED SHORT FILM": "Piper",
        "ORIGINAL SCREENPLAY": "La La Land",
        "PRODUCTION DESIGN": "La La Land",
        "ADAPTED SCREENPLAY": "Fences",
        "ORIGINAL SONG": "Audition - La La Land",
        "VISUAL EFFECTS": "Rogue One",
        "ORIGINAL SCORE": "La La Land",
        "SOUND MIXING": "Rogue One",
        "MAKEUP AND HAIRSTYLING": "SUICIDE SQUAD 🔫",
        "SOUND EDITING": "Hacksaw Ridge",
        "FOREIGN LANGUAGE FILM": "The Salesman",
        "LIVE ACTION SHORT FILM": "Timecode",
        "FILM EDITING": "Moonlight",
        "DOCUMENTARY SHORT SUBJECT": "4.1 Miles",
        "DOCUMENTARY FEATURE": "OJ Made in America",
        "COSTUME DESIGN": "Jackie",
        "CINEMATOGRAPHY": "La La Land",
        "ANIMATED FEATURE FILM": "Kubo and the Two Strings",
        "ACTOR IN A SUPPORTING ROLE": "Mahershala Ali, Moonlight",
        "ACTRESS IN A SUPPORTING ROLE": "Viola Davis, Fences",
        "ACTRESS IN A LEADING ROLE": "Emma Stone, La La Land",
        "ACTOR IN A LEADING ROLE": "Casey Affleck, Manchester by the Sea",
        "DIRECTING": "Moonlight",
        "BEST PICTURE": "Moonlight"
      },
      {
        "Name": "Stevie",
        "ANIMATED SHORT FILM": "Piper",
        "ORIGINAL SCREENPLAY": "La La Land",
        "PRODUCTION DESIGN": "La La Land",
        "ADAPTED SCREENPLAY": "Moonlight",
        "ORIGINAL SONG": "City of Stars",
        "VISUAL EFFECTS": "Rogue one",
        "ORIGINAL SCORE": "La La Land",
        "SOUND MIXING": "Hacksaw ridge",
        "MAKEUP AND HAIRSTYLING": "Suicide squad",
        "SOUND EDITING": "La La land",
        "FOREIGN LANGUAGE FILM": "The Salesman",
        "LIVE ACTION SHORT FILM": "Silent nights",
        "FILM EDITING": "Arrival",
        "DOCUMENTARY SHORT SUBJECT": "Joes violin",
        "DOCUMENTARY FEATURE": "OJ made in America",
        "COSTUME DESIGN": "La La Land",
        "CINEMATOGRAPHY": "La La land",
        "ANIMATED FEATURE FILM": "Kubo and the two strings",
        "ACTOR IN A SUPPORTING ROLE": "Mahershala Ali, Moonlight",
        "ACTRESS IN A SUPPORTING ROLE": "Viola Davis, Fences",
        "ACTRESS IN A LEADING ROLE": "Emma stone, La La land",
        "ACTOR IN A LEADING ROLE": "Denzel Washington, Fences",
        "DIRECTING": "La La land",
        "BEST PICTURE": "La La Land"
      },
      {
        "Name": "Jordan",
        "ANIMATED SHORT FILM": "Piper",
        "ORIGINAL SCREENPLAY": "La La Land",
        "PRODUCTION DESIGN": "Fantastic Beasts",
        "ADAPTED SCREENPLAY": "Fences",
        "ORIGINAL SONG": "City of Stars",
        "VISUAL EFFECTS": "Doctor Strange",
        "ORIGINAL SCORE": "La La Land",
        "SOUND MIXING": "Hacksaw Ridge",
        "MAKEUP AND HAIRSTYLING": "Suicide Squad",
        "SOUND EDITING": "La La Land",
        "FOREIGN LANGUAGE FILM": "Land of Mine",
        "LIVE ACTION SHORT FILM": "Ennemis Interieurs",
        "FILM EDITING": "Hell or HIgh Water",
        "DOCUMENTARY SHORT SUBJECT": "The White Helmets",
        "DOCUMENTARY FEATURE": "OJ: Made in Papmerica",
        "COSTUME DESIGN": "Jackie",
        "CINEMATOGRAPHY": "Arrival",
        "ANIMATED FEATURE FILM": "Moana",
        "ACTOR IN A SUPPORTING ROLE": "Mahershala Ali, Moonlight",
        "ACTRESS IN A SUPPORTING ROLE": "Viola Davis, Fences",
        "ACTRESS IN A LEADING ROLE": "Ruth Negga",
        "ACTOR IN A LEADING ROLE": "Denzel Washington, Fences",
        "DIRECTING": "Manchester by teh Sea",
        "BEST PICTURE": "La La Land"
      },
      {
        "Name": "Vints",
        "ANIMATED SHORT FILM": "Piper",
        "ORIGINAL SCREENPLAY": "The Lobster",
        "PRODUCTION DESIGN": "La La Land",
        "ADAPTED SCREENPLAY": "Moonlight",
        "ORIGINAL SONG": "Audition (The Fools Who Dream), La La Land",
        "VISUAL EFFECTS": "Doctor Strange",
        "ORIGINAL SCORE": "La La Land",
        "SOUND MIXING": "Hacksaw Ridge",
        "MAKEUP AND HAIRSTYLING": "A Man Called Ove",
        "SOUND EDITING": "La La Land",
        "FOREIGN LANGUAGE FILM": "The Salesman",
        "LIVE ACTION SHORT FILM": "Sing",
        "FILM EDITING": "La La Land",
        "DOCUMENTARY SHORT SUBJECT": "The White Helmets",
        "DOCUMENTARY FEATURE": "O.J.: Made in America",
        "COSTUME DESIGN": "La La Land",
        "CINEMATOGRAPHY": "Moonlight",
        "ANIMATED FEATURE FILM": "Zootopia",
        "ACTOR IN A SUPPORTING ROLE": "Michael Shannon",
        "ACTRESS IN A SUPPORTING ROLE": "Naomie Harris, Moonlight",
        "ACTRESS IN A LEADING ROLE": "Emma Stone, La La Land",
        "ACTOR IN A LEADING ROLE": "Casey Affleck, Manchester by the Sea",
        "DIRECTING": "Moonlight",
        "BEST PICTURE": "Moonlight"
      },
      {
        "Name": "Carter",
        "ANIMATED SHORT FILM": "Piper",
        "ORIGINAL SCREENPLAY": "Manchester by the Sea",
        "PRODUCTION DESIGN": "La La Land",
        "ADAPTED SCREENPLAY": "Moonlight",
        "ORIGINAL SONG": "City of Stars",
        "VISUAL EFFECTS": "the jungle book",
        "ORIGINAL SCORE": "lala land by a mile",
        "SOUND MIXING": "La La Land",
        "MAKEUP AND HAIRSTYLING": "Star Treck Beyond",
        "SOUND EDITING": "Hacksaw Ridge",
        "FOREIGN LANGUAGE FILM": "toni erdmann",
        "LIVE ACTION SHORT FILM": "ennemis interierurs",
        "FILM EDITING": "lala land",
        "DOCUMENTARY SHORT SUBJECT": "extremis",
        "DOCUMENTARY FEATURE": "OJ made in merica",
        "COSTUME DESIGN": "lala land",
        "CINEMATOGRAPHY": "lala land",
        "ANIMATED FEATURE FILM": "zootopia",
        "ACTOR IN A SUPPORTING ROLE": "Mahershala Ali, Moonlight",
        "ACTRESS IN A SUPPORTING ROLE": "Viola Davis, Fences",
        "ACTRESS IN A LEADING ROLE": "emma stone",
        "ACTOR IN A LEADING ROLE": "Casey Affleck, Manchester by the Sea",
        "DIRECTING": "lala land",
        "BEST PICTURE": "lala land"
      }
    ]

    console.log($scope.Oscar);

  });
}])


app.controller('homeController', ['$http', '$scope', '$state', function($http, $scope, $state, IndividualStatsFactory) {
  angular.element(document).ready(function () {
    $(this).scrollTop(0);
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
    $(this).scrollTop(0);
    $('.modal-trigger').leanModal({
       dismissible: true, // Modal can be dismissed by clicking outside of the modal
    });

  })
}])

app.controller('moviesController', ['$http', '$scope', '$state', function($http, $scope, $state) {
  angular.element(document).ready(function () {
    $(this).scrollTop(0);

    $http.get('https://api.soundcloud.com/playlists/235506624?client_id=f4f2237e0ee1500764af3532c6bc5e13').then(function(data) {
      var data = data.data.tracks;

      //Scope array of objects to populate thumbnails
      $scope.movieCollection = [];
      console.log($scope.movieCollection);

      //TitleCollection for the autocomplete work *unfinished*
      $scope.titleCollection = {};
      // console.log($scope.titleCollection);


      // START Adding playable iframe to each card *unfinished*
      $scope.track_id_Collection = [];
      $scope.iframeSRC_Collection = [];
      for (var i = 0; i < data.length; i++) {
        var track_id = data[i].id;
        $scope.track_id_Collection.push(track_id);
        var movies_iframeSRC = "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/" + $scope.track_id_Collection[i] + "&amp;color=ff5500&amp;inverse=false&amp;auto_play=false&amp;show_user=true";
        $scope.iframeSRC_Collection.push(movies_iframeSRC);
      }
      // for (var i = 0; i < $scope.movieCollection.length; i++) {
      //   console.log($scope.movieCollection[i]);
      // }
      $scope.movieCollection.src = $scope.iframeSRC_Collection;
      // END Adding SRC playable iframe *unfinished*


      // AUTOCOMPLETE FOR SEARCH
      $('input.autocomplete').autocomplete({
          data: {
            // "Apple": null,
            // "Google": null,
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
  });
}])

app.controller('contactController', ['$http', '$scope', '$state', function($http, $scope, $state) {
  angular.element(document).ready(function () {
    $(this).scrollTop(0);
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
