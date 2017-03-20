$(document).ready(function(){
  $.get("https://api.soundcloud.com/playlists/235506624?client_id=f4f2237e0ee1500764af3532c6bc5e13", function(data) {
    var data = data.tracks;
    var latestMovie = (data[data.length-1])
    var latestMovieTitleSplit = latestMovie.title.split(' -')
    var latestTitle = latestMovieTitleSplit[0];
    $('#latestEpTitle').html(latestTitle);

    var latestSRC = "https://w.soundcloud.com/player/?url=" + latestMovie.uri + "&amp;color=ff5500&amp;inverse=true&amp;auto_play=false&amp;show_user=truelatestMovie"
    console.log(latestSRC);

    $('#latestEpFrame').attr("src", latestSRC)
  })
});
