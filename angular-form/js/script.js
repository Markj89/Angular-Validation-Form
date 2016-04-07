var app = angular.module('MyApp', [ "kendo.directives" ]);

app.controller('MyController', ['$scope', '$http', function ($scope, $http) {
  $scope.viewModel = {};
  $scope.firstName    = '';
  $scope.lastName     = '';
  $scope.emailAddress = '';
  $scope.phone        = '';
  $http.get('test.json')
  .success(function (data) {
  	$scope.viewModel = data[0];
  });
}]);