angular.module("app")
    .factory("getUserFactory",function($http,$q){
    return{
        list:function(user){
            return $http.post("/api/login",user).then(function(response){
                return response.data
            })
        },
        name:"tarun",
        Active:false,
        getUserState:function(){
            
            if(this.Active){
                return true;
            }
            else{
                return false;
            }
            
        },
        setUserState:function(state){
            this.Active = state;
        }
    }
})


