angular.module('app').controller('AppCtrl2',['$scope','$http', function($scope,$http){
   // alert("coming from AppCtrl2 controller");
    $scope.contents="Hello World";
    $http.get("/service/customer/2").then(function(response){
        console.log('loggin just the response');
        console.log(response);
        console.log("end of response");
        $scope.contents=response.data;
        console.log($scope.contents);

    });
}]);