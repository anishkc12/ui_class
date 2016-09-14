angular.module('app').directive('navBar',function () {
    return{
        restrict: 'EA',
        templateUrl: '/views/nav-bar.html',
        link:function(){
            //alert();
        }
    };
});