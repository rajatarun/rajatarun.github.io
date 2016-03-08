
    var app= angular.module("RegistrationController",["UserService"]);
    app.controller("registrationController",['getUser',"$scope",function($scope,getUser){
        $scope.getUserDetails=function(userdata){
            console.log(userdata.fname);
            $scope.response = getUser.setUser(userdata);
        }
    }])
