'use strict';

var myApp = angular.module('fullAppApp');

myApp.controller('TestCtrl', function ($scope, $http, socket, Modal) {
    $scope.names=['Igor Minar', 'Brad Green', 'Dave Geddes', 'Naomi Black', 'Greg Weber', 'Dean Sofer', 'Wes Alvaro', 'John Scott', 'Daniel Nadasi'];

    $http.get('/api/things').success(function(awesomeThings) {
      $scope.awesomeThings = awesomeThings;
      socket.syncUpdates('thing', $scope.awesomeThings);
    });

    // Modal.confirm.delete returns a function that will open a modal when ran
    // We use closure to define the callback for the modal's confirm action here in the controller
    $scope.delete = Modal.confirm.delete(function(thing) {   // callback when modal is confirmed
      console.log(thing);
      $http.delete('/api/things/' + thing._id);
    })

  });




myApp.animation('.my-special-animation', function() {
  return {
    enter : function(element, done) {
      jQuery(element).css({
        color:'#FF0000'
      });

      //node the done method here as the 2nd param
      jQuery(element).animate({
        color:'#0000FF'
      }, done);

      return function(cancelled) {
        /* this (optional) function is called when the animation is complete
         or when the animation has been cancelled (which is when
         another animation is started on the same element while the
         current animation is still in progress). */
        if(cancelled) {
          jQuery(element).stop();
        }
      }
    },

    leave : function(element, done) { done(); },
    move : function(element, done) { done(); },

    beforeAddClass : function(element, className, done) { done(); },
    addClass : function(element, className, done) { done(); },

    beforeRemoveClass : function(element, className, done) { done(); },
    removeClass : function(element, className, done) { done(); },

    allowCancel : function(element, event, className) {}
  };
});
