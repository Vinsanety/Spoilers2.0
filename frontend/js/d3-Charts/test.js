app.controller('statsController', ['$scope', function($scope) {
  angular.element(document).ready(function () {
  console.log('test');

      Highcharts.chart('container', {
          chart: {
              type: 'bar'
          },
          title: {
              text: 'Quickshot Stats Test'
          },
          subtitle: {
              text: 'Source: <a href="https://en.wikipedia.org/wiki/World_population">Wikipedia.org</a>'
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
              valueSuffix: ' '
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
              x: -40,
              y: 80,
              floating: true,
              borderWidth: 1,
              backgroundColor: ((Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'),
              shadow: true
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

  });
}])
