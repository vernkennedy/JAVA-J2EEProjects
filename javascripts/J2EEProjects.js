var app = angular.module('myApp', []);
app.controller('customersCtrl', function($scope, $http) {
  $http.get("https://raw.githubusercontent.com/vernkennedy/J2EEProjects/gh-pages/javascripts/J2EEProjects.json")
  .success(function (response) {$scope.names = response.records;});
});