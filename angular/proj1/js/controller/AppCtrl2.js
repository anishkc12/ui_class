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

    //Data to post information, assume this is coming from a form element.
    var data={
        name: "Peter Scotch",
        address: "Club House",
        phone: "1233455678",
        email:"peter@gmail.com"

    }
    //POST SERVICE TO ADD INFORMATION TO THE SERVICE
    $http.post("/service/customer",data)//here you can replace the data variable with a JSON object.
        .success(function (data) {
            console.log(data);

        })
        .error(function (data) {
            console.log(data);

        })
}]);

