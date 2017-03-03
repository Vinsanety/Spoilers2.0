app.controller('statsController', ['$scope', '$http', function($scope, $http) {
  angular.element(document).ready(function () {
    $(this).scrollTop(0);

    $http.get('https://api.soundcloud.com/playlists/235506624?client_id=f4f2237e0ee1500764af3532c6bc5e13').then(function(data) {
      var data = data.data.tracks;
      $scope.movieCollection = [];
      console.log($scope.movieCollection);
      $(data).each(function(i) {
        var titleSplit = data[i].title.split(' -');
        var title = titleSplit[0];
        $http.get('https://www.omdbapi.com/?t='+title).then(function (movie) {
          var movieData = movie.data;
            if (movieData.Poster === 'N/A') {
              movieData.Poster = 'images/Confused-Travolta.gif'
            }
          $scope.movieCollection.push(movieData);
        })
      })
    })

      Highcharts.chart('host_Overview_Stats', {
          chart: {
            type: 'bar'
          },
          title: {
            text: 'Spoilers! Hosts',
            style: {
              fontWeight: 'bold',
              fontSize: '2em'
            }
          },
          subtitle: {
            text: ''
          },
          xAxis: {
            categories: ['Pappy', 'Stevie', '$ Mike', 'Vints'],
            title: {
              text: null
            }
          },
          yAxis: {
            min: 0,
            title: {
              text: '',
              align: 'high'
            },
            labels: {
              overflow: 'justify'
            }
          },
          tooltip: {
            valueSuffix: ' ',
            borderWidth: 0,
            pointFormat: '{series.name}: <b>{point.y}</b>'
          },
          plotOptions: {
            bar: {
              dataLabels: {
                enabled: true
              }
            }
          },
          legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'top',
            x: -20,
            y: -10,
            floating: true,
            borderWidth: 1,
            backgroundColor: ((Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'),
            shadow: true
          },
          navigation: {
            buttonOptions: {
              align: 'left'
            }
          },
          credits: {
            enabled: false
          },
          series: [{
            name: 'Appearances',
            data: [25, 23, 23, 23]
          }, {
            name: 'Trivia Wins',
            data: [5, 10, 4, 4]
          }, {
            name: "Yes's Received",
            data: [22, 17, 13, 15]
          }]
      });

      Highcharts.chart('hosting_pie', {
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie'
        },
        title: {
            text: 'Episodes Hosted'
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.y}</b>'
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: false
                },
                showInLegend: true
            }
        },
        credits: {
          enabled: false
        },
        series: [{
            name: 'Hosts',
            colorByPoint: true,
            data: [{
                name: 'Pappy',
                y: 8,
                // Add this to the highest number
                sliced: true,
                selected: true
            }, {
                name: 'Stevie',
                y: 6,
            }, {
                name: 'Money Mike',
                y: 4
            }, {
                name: 'Vints',
                y: 4
            }, {
                name: 'Jorda',
                y: 3
            }]
        }]
    });
      Highcharts.chart('movie_Rating', {
        chart: {
            type: 'column',
            options3d: {
                enabled: true,
                alpha: 10,
                beta: 25,
                depth: 70
            }
        },
        title: {
            text: 'Movie Ratings Distribution'
        },
        subtitle: {
            text: 'Fuck PG & G Movies, amiright?'
        },
        plotOptions: {
            column: {
                depth: 25
            }
        },
        xAxis: {
            categories: ['R', 'PG-13', 'PG', 'G']
        },
        yAxis: {
            title: {
                text: null
            }
        },
        credits: {
          enabled: false
        },
        series: [{
            name: '# of movies',
            data: [30, 14, 8, 0]
        }]
    });
  });
}])
