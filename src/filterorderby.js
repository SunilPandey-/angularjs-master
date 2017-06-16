var app = angular.module('myApp',[]);

app.controller('myCtrl',function($scope){
    $scope.names = [
        {name : 'Sunil',country : 'India'},
        {name : 'John',country : 'America'},
        {name : 'Brian',country : 'Japan'},
        {name : 'Chan Li',country : 'China'},
        {name : 'Md Amir',country : 'Pakistan'},
        {name : 'Joe Root',country : 'England'},
        ];

});