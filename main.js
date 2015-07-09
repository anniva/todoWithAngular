

 var todoApp = angular.module("myapp", []);

   todoApp.controller("todoController", function($scope) {

      $scope.list = {};
      $scope.list.items = ['anni', 'mina', 'jack', 'ronan', 'lucas', 'josh'];
    
    });