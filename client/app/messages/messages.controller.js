'use strict';

angular.module('fullAppApp')
  .controller('MessagesCtrl', function ($scope, $http, socket) {
    $scope.userMessages = [];

    $http.get('/api/messages').success(function(messages) {
      $scope.userMessages = messages;
      socket.syncUpdates('Message', $scope.awesomeThings);
    });

    $scope.addMessage = function() {
      if($scope.newMessage === '') {
        return;
      }
      $http.post('/api/messages', { name: $scope.newMessage });
      $scope.newMessage = '';
    };

    $scope.deleteMessage = function(message) {
      $http.delete('/api/messages/' + message._id);
    };

    $scope.$on('$destroy', function () {
      socket.unsyncUpdates('Message');
    });
  });
