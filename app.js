var app = angular.module('myApp', []);
  app.controller('cafeController', function($scope, $http) {
    $http({
      method: "GET",
      url: "http://api.demo.muulla.com/cms/merchant/all/active/10/1",
      headers: {
        'Authorization' : 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiI1NGQxOTY4MGI1MWMxNTI2MGI5NDRmZDUiLCJpc3N1ZV9kYXRlIjoiMjAxNS0wOS0wOVQwNToxMzo1My40NThaIn0.Hk2XypA_KMUnIKdSVYnwq3Rn3QyMNSQ-e80-sZsA9bY'
        }
    })
    .success(function(response) {$scope.cafes = response.data;});
  });
