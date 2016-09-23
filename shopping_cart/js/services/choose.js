/**
 * Created by akc on 9/23/16.
 */

angular.module("shoppingCart").service("choose", ["$http", function($http){


    //calling inventory_type
    this.productTypes = {};
    var objj =this;


    $http.get("/service/inventory").then(function(response){
        objj.productTypes= response.data;
        console.log(objj.productTypes);
    });


}]);