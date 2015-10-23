angular.module('Booya')

.controller('MainCtrl', function($scope, $http, Items) {
    //fetch all the data from the JSON file and display it
    $scope.allData;
    
    Items.getAll()
    //$http({method:'GET', url:'data/items.json'})
    .then(function(response){
        //success
        $scope.allData = response.data;
        
    }, function(response){
        //error
        
    });
});