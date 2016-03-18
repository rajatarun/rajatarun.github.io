angular.module("MyApp",['ngRoute','RegistrationController','ContactController','ng-polymer-elements','loginController'])
    .config(["$routeProvider",function($routeProvider,$locationProvider){
		$routeProvider
			.when('/main',{
				templateUrl:"public/templates/main.html"
                
			})
			.when('/about',{
				templateUrl:"public/templates/about.html"
			})
			.when('/login',{
				templateUrl:"public/templates/login.html",
                controller:'lgnController'
			})
			.when('/register',{
				templateUrl:"public/templates/register.html",
                controller:'RegController'
			})
        .when('/contact',{
            templateUrl:"public/templates/contact.html",
            controller:'CntctController'
        });
        

	}])
	.controller('mainCntrl',function($routeParams,$scope,$http)
	{
		this.params = $routeParams;
	});
