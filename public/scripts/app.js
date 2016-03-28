angular.module("app",['ngRoute','RegistrationController','ContactController','ng-polymer-elements'])
    .config(["$routeProvider",function($routeProvider,$locationProvider){
		$routeProvider
            .when('/',{
                controller:'mainCntrl'
            })
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
	.controller('mainCntrl',['$routeParams','$scope','$http','getUserFactory',function(getUserFactory,$routeParams,$scope,$http)
	{
		this.params = $routeParams;
        $scope.test = true;
        if(getUserFactory.Active){
            $scope.test = false;
            console.log(getUserFactory.name);
            $scope.name = getUserFactory.name;
        }
       
	}]);
