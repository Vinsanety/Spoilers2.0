$(document).ready(function(){
  // $.get("https://api.soundcloud.com/playlists/235506624?client_id=f4f2237e0ee1500764af3532c6bc5e13", function(data) {
  //   var data = data.tracks;
  //   var allMovies = [];
  //   console.log(allMovies);
  //   $(data).each(function(i) {
  //     var titleSplit = data[i].title.split(' -');
  //     var title = titleSplit[0];
  //     // Accessing OMDB, using the split title from above:
  //     $.get("https://www.omdbapi.com/?t="+title).then(function (movie) {
  //       // variable to access the API object
  //       var movieData = movie
  //       allMovies.push(movieData);
  //     }).then(function () {
  //       var latest5 = allMovies.slice(Math.max(allMovies.length - 5, 1));
  //       console.log(latest5);
  //       $('#test').html(latest5[0].Title);
  //       $('#test2').html(latest5[1].Title);
  //       $('#test3').html(latest5[2].Title);
  //       $('#test4').html(latest5[3].Title);
  //       $('#test5').html(latest5[4].Title);
  //     })
  //   })
  // })
});
