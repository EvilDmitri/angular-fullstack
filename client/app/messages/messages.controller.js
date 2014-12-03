'use strict';

angular.module('fullAppApp')
  .controller('MessagesCtrl', function ($scope, $http) {
    $http.get('/api/messages').success(function(message) {
      $scope.message = message;
    });
  });
