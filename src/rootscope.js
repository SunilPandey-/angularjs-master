var app = angular.module('myApp',[]);

app.run(function($rootScope){
    $rootScope.color= "red";

});

app.controller('myCtrl',function($scope){

    $scope.color = "blue";
});