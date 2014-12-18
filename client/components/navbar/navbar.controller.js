'use strict';

angular.module('fullAppApp')
  .controller('NavbarCtrl', function ($scope, $location, Auth) {
    $scope.menu = [
      {
        'title': 'Album',
        'description': 'Find your favorite album',
        'link': ''
      },
      {
        'title': 'Artist',
        'description': 'Find the artist your\'re looking for',
        'link': ''
      },
      {
        'title': 'Songs',
        'description': 'Find the songs your\'re looking for',
        'link': ''
      },
      {
        'title': 'Genre',
        'description': 'Browse all the genres',
        'link': ''
      },
      {
        'title': 'Search',
        'description': 'Search for a specific album,\nartist or song',
        'link': ''
      },
      {
        'title': 'Playlist',
        'description': 'Songs in the playlist',
        'link': ''
      },
      {
        'title': 'Options',
        'description': 'Set your own options',
        'link': ''
      }
    ];

    $scope.isCollapsed = true;
    $scope.isLoggedIn = Auth.isLoggedIn;
    $scope.isAdmin = Auth.isAdmin;
    $scope.getCurrentUser = Auth.getCurrentUser;

    $scope.logout = function() {
      Auth.logout();
      $location.path('/login');
    };

    $scope.isActive = function(route) {
      return route === $location.path();
    };
  });
