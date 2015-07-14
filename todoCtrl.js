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
