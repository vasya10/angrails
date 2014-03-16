'use strict';

describe('angrailsTest', function () {

	beforeEach(module('angrailsApp'));

	var scope, mainCtrl;
  
	beforeEach(inject(function ($compile, $rootScope) {
		scope = $rootScope.$new();
	}));

	describe('angrailsMainCtrl', function () {

		beforeEach(inject(function ($controller) {
			mainCtrl = $controller("MainCtrl", {$scope: scope});
		}));


		it("should set hello text", function () {
			var helloText = 'Hello Angrails Demo!';
			expect(scope.helloText).toEqual(helloText);
		});


	})
});
