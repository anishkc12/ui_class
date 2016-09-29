/**
 * Created by akc on 9/26/16.
 */



describe("Test for AppCtrl1test controller",function(){
   beforeEach(angular.mock.module("app"));


    var $scope= {};
    var $controller;
//we can use inject to access $controller, the service that is responsible for instantiating controllers.
    beforeEach(angular.mock.inject(function (_$controller_) {
        $controller= _$controller_;
        // The injector unwraps the underscores (_) from around the parameter names when matching
        var controller = $controller('AppCtrl1',{$scope: $scope});

    }));

    it("has sampleTest defined",function () {

        expect($scope.sampletest).toBe("Hello world")

    })
    it("add should return 7",function () {

        expect($scope.add()).toBe(7);

    })
    it("multiply should return 12",function () {

        expect($scope.multiply()).toBe(12);

    })
});


//it is the unit test in console it says five of five means five "it"
//mock: third party application which grabs the application

//beforeEach: before test cases runs (it) it return beforeEach

//AfterEach: after test cases run it executes afterEach