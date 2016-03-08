(function () {
    'use strict';
	var app = angular.module("MyApp",["ngRoute","RegistrationController"]);
	app.config(["$routeProvider",function($routeProvider,$locationProvider){
		$routeProvider
			.when('/main',{
				templateUrl:"public/templates/main.html"
			})
			.when('/about',{
				templateUrl:"public/templates/about.html"
			})
			.when('/login',{
				templateUrl:"public/templates/login.html"
			})
			.when('/register',{
				templateUrl:"public/templates/register.html"	
			})
        .when('/contact',{
            templateUrl:"public/templates/contact.html"
        })

	}]);
	app.controller('mainCntrl',function($routeParams,$scope,$http)
	{
		this.params = $routeParams;
	});


})();