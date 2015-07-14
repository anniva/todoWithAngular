'use strict';
describe('Test my controller', function () {

var app, scope, ListCtrl;

var importCtrl = require('../todoCtrl.js'); // Require the actual controller

beforeEach(function () {

    app = angular.module('testApp', ['ngMock']); // We make a test app to inject things to  ng-mock > provides you tools to use in testing

    app.controller('ListCtrl', importCtrl);  // We test a single controller -> And the only real stuff we add is the controller

    window.module('testApp'); // We use window > run this in a real browser -> we inject in into the DOM -> IMPORTANT!

    inject(function ($controller, $rootScope, $injector){	//inject function takes providers -> get the real controller -> rootscop

        scope = $rootScope.$new();	// call the provider to create a new scope for testing // because we dont want to pollute the scope

        ListCtrl = function(){	

            return $controller('ListCtrl',{		//The controller adds our new scoper to the controller
                "$scope": scope
            });
        };
    });
});

	it('should work', function () {

	    ListCtrl(); // invoke the listController

	    console.log('Current scope list: ', scope.listName);	//should return listname
	});

	it("should add an item", function(){
	    ListCtrl();
	    scope.addItem("Angular Testing");
	    console.log(scope.listName);

	});
});

//