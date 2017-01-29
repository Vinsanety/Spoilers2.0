app.controller('hostFactory', ['$scope', function($scope) {
  angular.element(document).ready(function () {

    $scope.hostFactory = [
      {
        "name": "Pappy",
        "appearances": 25,
        "triviaWins": 5,
        "episodesHosted": 8,
        "yesReceived": 22,
        "noReceived": 6,
        "yesGiven": 20,
        "noGiven": 5,
        "pivots ": 0,
        "yesGivenPercentage": "80.00%",
        "noGivenPercentage": "20.00%",
        "triviaWinningPercentage": "29.41%",
        "yesReceivedPercentage": "78.57%",
        "noReceivedPercentage": "21.43%"
      },
      {
        "name": "Stevie",
        "appearances": 23,
        "triviaWins": 10,
        "episodesHosted": 5,
        "yesReceived": 17,
        "noReceived": 8,
        "yesGiven": 21,
        "noGiven": 3,
        "pivots ": 2,
        "yesGivenPercentage": "87.50%",
        "noGivenPercentage": "12.50%",
        "triviaWinningPercentage": "52.63%",
        "yesReceivedPercentage": "68.00%",
        "noReceivedPercentage": "32.00%"
      },
      {
        "name": "$ Mike",
        "appearances": 23,
        "triviaWins": 4,
        "episodesHosted": 4,
        "yesReceived": 13,
        "noReceived": 4,
        "yesGiven": 19,
        "noGiven": 4,
        "pivots ": 0,
        "yesGivenPercentage": "82.61%",
        "noGivenPercentage": "17.39%",
        "triviaWinningPercentage": "21.05%",
        "yesReceivedPercentage": "76.47%",
        "noReceivedPercentage": "23.53%"
      },
      {
        "name": "Vints",
        "appearances": 23,
        "triviaWins": 4,
        "episodesHosted": 4,
        "yesReceived": 15,
        "noReceived": 1,
        "yesGiven": 14,
        "noGiven": 8,
        "pivots ": 0,
        "yesGivenPercentage": "63.64%",
        "noGivenPercentage": "36.36%",
        "triviaWinningPercentage": "21.05%",
        "yesReceivedPercentage": "93.75%",
        "noReceivedPercentage": "6.25%"
      },
      {
        "name": "Long",
        "appearances": 6,
        "triviaWins": 2,
        "episodesHosted": 2,
        "yesReceived": 5,
        "noReceived": 3,
        "yesGiven": 4,
        "noGiven": 2,
        "pivots ": 0,
        "yesGivenPercentage": "66.67%",
        "noGivenPercentage": "33.33%",
        "triviaWinningPercentage": "50.00%",
        "yesReceivedPercentage": "62.50%",
        "noReceivedPercentage": "37.50%"
      }
    ]
  });
}])
