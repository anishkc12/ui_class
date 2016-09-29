/**
 * Created by akc on 9/29/16.
 */

angular.module('test').directive('testDirective',function () {
    return{
        restrict: 'EA',
       // template: 'test',
       //template: "<h3>Hello World!</h3>",
       templateUrl: "/views/calculator.html",
        link:function($scope){
           // alert();
           $scope.calculator=function(){
               var num1=0;
               var num2=0;

               this.setNum1 = function (param) {
                   num1 = parseInt(param);
               }
               this.setNum2= function(param){
                   num2= parseInt(param);
               }
               this.getNum1 = function(){

                   return num1;
               }
               this.getNum2 = function(){

                   return num2;
               }
               this.add = function()
               {
                   return num1 + num2;

               }
               this.multiply=function () {
                   return num1 * num2;
               }

           }
           $scope.submit=function(){
               var calobj= new $scope.calculator();
               calobj.setNum1($scope.firstNum);
                calobj.setNum2($scope.secondNum);
               // alert(calcobj.add());
               // alert(calobj.multiply());
               $scope.add= calobj.add();
               $scope.pro = calobj.multiply();
           }
        }
    };
});