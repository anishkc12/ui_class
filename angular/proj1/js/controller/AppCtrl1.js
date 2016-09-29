/**
 * Created by akc on 9/26/16.
 */

angular.module('app').controller('AppCtrl1', function ($scope) {

    $scope.sampletest="Hello world";
    var x=3;
    var y=4;
    $scope.add= function(){
        return x+y;
    };
   $scope.multiply=function(){
       return x*y;
    };

});