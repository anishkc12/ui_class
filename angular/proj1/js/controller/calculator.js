/**
 * Created by akc on 9/26/16.
 */
// angular.module('App', [])
//     .controller('calculator', function($scope) {
//         $scope.result = function() {
//             if ($scope.operator == '+') {
//                 return $scope.a + $scope.b;
//             }
//             if ($scope.operator == '-') {
//                 return $scope.a - $scope.b;
//             }
//             if ($scope.operator == '*') {
//                 return $scope.a * $scope.b;
//             }
//             if ($scope.operator == '/') {
//                 return $scope.a / $scope.b;
//             }
//         };
//     });

angular.module('app').service('calculator', function() {
    var x;
    var y;

    this.setx=function(val) {
        return val;
    }
    this.sety=function(val){
        return val;
    }

    this.getx=function () {
        return x;
    }
    this.gety=function () {
        return y;
    }

    this.add();{
        return x+y;
    }
    this.sub();{
        return x-y;
    }

    this.mult();{
        return x*y;
    }
    this.div();{
        return x/y;
    }


});
//
//     var calculator = {
//         sum: function (x, y) {
//             return x + y;
//         },
//         subtract: function (x, y) {
//             return x - y;
//         },
//         divide: function (x, y) {
//             return (y === 0) ? 0 : x / y;
//         }
//     }
// });
