var ContactController = angular.module("ContactController",[]);
ContactController.factory('userContact',function($http){
    return{
        "postcontact":function(contact){
            return $http.post('/api/contact',contact).then(function(response){
                return response.data;
            })
        }
    }
});

ContactController.controller("CntctController",["userContact","$scope",function(UserContact,$scope){
        
        $scope.postusercontact=function(contact){
            console.log(contact)
            UserContact.postcontact(contact).then(function(response){
                if(response==="Sucess"){
                    $scope.action1 = true;
                    
                }
                else{
                    $scope.action1 = false;
                    
                }
            })
        }
}]);