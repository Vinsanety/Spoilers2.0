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
        categories: ['Pappy', 'Stevie', '$ Mike', 'Vints', 'JordN', 'Joshua'],
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
        name: 'Reviews',
        data: [57, 52, 41, 34, 21, 12]
      }, {
        name: "Yes's Given",
        data: [40, 41, 31, 20, 10, 8]
      }, {
        name: "No's Given",
        data: [17, 11, 10, 14, 11, 4]
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
          y: 10,
          // Add this to the highest number
          sliced: true,
          selected: true
        }, {
            name: 'Stevie',
            y: 8,
        }, {
            name: '$ Mike',
            y: 6,
          }, {
            name: 'Vints',
            y: 6,
          }, {
            name: 'JordN',
            y: 3,
          }, {
            name: 'Joshua',
            y: 3
        }]
      }]
    });

    Highcharts.chart('yesRec_vs_noRec', {
      chart: {
        type: 'area'
      },
      title: {
        text: "Host's <strong>Receieved</strong> Yes vs. No Percentage"
      },
      subtitle: {
        text: 'on Spoilers! Yes/No Rating Scale'
      },
      xAxis: {
        categories: ['Pappy', 'Stevie', '$ Mike', 'Vints', 'JordN', 'Joshua'],
        tickmarkPlacement: 'on',
        title: {
          enabled: false
        }
      },
      yAxis: {
        title: {
          text: 'Area of Hosts Total'
        }
      },
      tooltip: {
        pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.percentage:.1f}%</b><br/>',
        split: true
      },
      plotOptions: {
        area: {
          stacking: 'percent',
          lineColor: '#ffffff',
          lineWidth: 1,
          marker: {
            lineWidth: 1,
            lineColor: '#ffffff'
          }
        }
      },
      credits: {
        enabled: false
      },
      series: [{
        name: 'Host Yes Received',
        data: [80.49, 76.47, 74.07, 80.77, 58.33, 60],
        color: '#4caf50'
      }, {
        name: 'Host No Received',
        data: [19.51, 23.53, 25.93, 19.23, 41.67, 40],
        color: '#B44E86'
      }]
    });

    Highcharts.chart('yesGiven_vs_noGiven', {
      chart: {
        type: 'area'
      },
      title: {
        text: "Host's <strong>Given</strong> Yes vs. No Percentage"
      },
      subtitle: {
        text: 'on Spoilers! Yes/No Rating Scale'
      },
      xAxis: {
        categories: ['Pappy', 'Stevie', '$ Mike', 'Vints', 'JordN', 'Joshua'],
        tickmarkPlacement: 'on',
        title: {
          enabled: false
        }
      },
      yAxis: {
        title: {
          text: 'Area of Hosts Total'
        }
      },
      tooltip: {
        pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.percentage:.1f}%</b><br/>',
        split: true
      },
      plotOptions: {
        area: {
          stacking: 'percent',
          lineColor: '#ffffff',
          lineWidth: 1,
          marker: {
            lineWidth: 1,
            lineColor: '#ffffff'
          }
        }
      },
      credits: {
        enabled: false
      },
      series: [{
        name: 'Host Yes Given',
        data: [70.18, 78.85, 75.61, 58.82, 47.62, 66.67],
        color: '#2196F3'
      }, {
        name: 'Host No Given',
        data: [29.82, 21.15, 24.39, 41.18, 52.38, 33.33],
        color: '#f9a825'
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
        text: 'According to the MPAA'
      },
      plotOptions: {
        column: {
          depth: 25
        }
      },
      xAxis: {
        categories: ['R', 'PG-13', 'PG', 'G', "Approved (pre '68)"]
      },
      yAxis: {
        title: {
          text: null
        }
      },
      credits: {
        enabled: true
      },
      series: [{
        name: '# of movies',
        data: [30, 14, 8, 0, 0]
      }]
    });
  });
}])
