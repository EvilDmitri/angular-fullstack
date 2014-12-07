'use strict';

angular.module('fullAppApp')
  .controller('MessagesCtrl', function ($scope, $http, socket, Auth, User) {
    $scope.userMessages = [];
    $scope.user = Auth.getCurrentUser();

    $http.get('/api/messages').success(function(messages) {
      $scope.userMessages = messages;
      socket.syncUpdates('Message', $scope.userMessages);
    });

    $scope.addMessage = function() {
      if($scope.newMessage === '') {
        return;
      }

      $http.post('/api/messages', {  user: $scope.user.name, name: $scope.newMessage });
      $scope.newMessage = '';
    };

    $scope.deleteMessage = function(message) {
      $http.delete('/api/messages/' + message._id);
    };

    $scope.$on('$destroy', function () {
      socket.unsyncUpdates('Message');
    });
  });
