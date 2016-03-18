angular.module("loginController",[])
        
        .controller("lgnController",['getUser','$scope',function(getUser,$scope){
    $scope.submit= function(user){
        console.log(getUser.list(user));
    }
}])
.factory("getUser",function($http){
    return{
        list:function(user){
            return $http.post("/api/login",user).then(function(response){
                return response.data
            })
        }
    }
})