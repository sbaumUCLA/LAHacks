'use strict';

/**
 * @ngdoc function
 * @name lahacksApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the lahacksApp
 */
angular.module('lahacksApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
