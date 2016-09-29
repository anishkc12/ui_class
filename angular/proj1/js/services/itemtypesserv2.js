/**
 * Created by akc on 9/20/16.
 */

angular.module('app').service('itemtypesserv1', function()

{
    this.itemTypes=["electronics","games","cell","stationary","home","audio"];
    this.title='Sample Shopping Cart';
    this.description= {
        "title": "CS Inc.",
        "body": "American multinational technology company headquartered in Cupertino, California, that " +
        "designs, develops, and sells consumer electronics, computer software, and online services."

    };
});

/*

var itemTypesid=id;
for(i=0;i<$scope.itemTypes,length,i++){

    if($scope.itemTypes[i].id=itemTypesid){

$scope.title=$scope.itemTypes[i].type;
    }
}

    */