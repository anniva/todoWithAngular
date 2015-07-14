(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var todoApp = angular.module("myapp", []);

todoApp.controller("todoController", require('./todoCtrl.js'));

},{"./todoCtrl.js":2}],2:[function(require,module,exports){
module.exports = function($scope) {


      $scope.items = [
	      {text: "Buy milk", done:false},
	      {text: "Buy a cat", done:false},
	      {text: "Buy a porche", done:false},
	      {text: "Buy sparkling wine", done:false}

      ];
    
    $scope.addItem = function (someData) {
    	var timeStamp = Date.now();
    	$scope.items.push({text:someData, done:false, time: timeStamp});
    	$scope.data= ''; // This clears the searchbox after the input
    };

	$scope.deleteItem = function (itemToDelete) {
		console.log('delete', itemToDelete);
		var index = $scope.items.indexOf(itemToDelete);

		$scope.items.splice(index,1);
	};

};


/*var hello = "hello";
module.exports = hello;
*/

},{}]},{},[1]);
