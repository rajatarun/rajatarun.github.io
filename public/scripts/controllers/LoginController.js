angular.module("app")
        .controller("lgnController",['getUserFactory','$scope',function(getUserFactory,$scope){
            $scope.form = true;
    $scope.submit= function(user){
        console.log(getUserFactory.name);
        getUserFactory.list(user).then(function(dat){
            getUserFactory.name = dat.name; 
            console.log(getUserFactory.name);
            $scope.name = getUserFactory.name;
            console.log(dat);
            $scope.form = false;
            getUserFactory.Active= true;
            console.log(getUserFactory.Active);
        });
    }
    if(getUserFactory.Active){
            
            console.log(getUserFactory.name);
            //angular.element(".log").html(data);
        }
    else{
        $scope.form = true;
    }
    
}])
      