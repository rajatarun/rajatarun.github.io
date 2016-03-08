angular.module("UserService",[]).factory("getUser",function($http){
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
