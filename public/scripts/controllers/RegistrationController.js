
angular.module("RegistrationController",[])

.factory('getUserData',function($http){
    return {
        "users":function(){
            return $http.get("/api/nerds").then(function(response){
               return response.data; 
            });
        },
        "setUser":function(userdata){
            console.log(userdata);
            return $http.post("/api/nerds",userdata).then(function(response){
               return response.data; 
            });
        }
    }
})
.controller("RegController",['getUserData','$scope',function(getUserData,$scope){
    
        $scope.getUserDetails=function(userdata){
            console.log(userdata.fname);
            getUserData.setUser(userdata).then(function(response){
                if(response==="Sucess"){
                    $scope.action = true;
                    angular.element("#regForm").reset();
                }
                else{
                    $scope.action = false;
                    angular.element("#regForm").reset();
                }
            })
            
        }
       
    }])
