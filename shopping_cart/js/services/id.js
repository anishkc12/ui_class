/**
 * Created by akc on 9/23/16.
 */


angular.module("shoppingCart").service("id", ["$http", function($http){


    //calling inventory_type
    this.productTypes = {};
    var objjj =this;

    var url="/service/inventory_type/"+this.productTypes;
    $http.get("url").then(function(response){
        objjj.productTypes= response.data;

        console.log(objjj.productTypes);
    });


}]);
