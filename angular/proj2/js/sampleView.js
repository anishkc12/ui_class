/**
 * Created by akc on 9/20/16.
 */

    angular.module('sampleView',["ngRoute"])
    .config(function($locationProvider,$routeProvider){//adding config file its angular route
        $routeProvider

            .when('/',{
                controller : "sampleViewCtrl",
                templateUrl:'/views/home.html'//json object or template only

        })

        .when('/home',{
            controller : "homeCtrl",
        templateUrl:'/views/home.html'//json object or template only

        })

        .otherwise({
            templateUrl:"/views/error.html"

    });

    $locationProvider
        .html5Mode(false)
        .hashPrefix('!')

    });

///modilfy this page1. shoppingcart
//template using custom directives


