
//
// describe("Test for calculator service",function(){
//     beforeEach(angular.mock.module("app"));
//
//     var $scope= {};
//     var $controller;
//
//     beforeEach(angular.mock.inject(function (_$controller_) {
//         $controller= _$controller_;
//         var controller = $controller('calculator',{$scope: $scope});
//
//     }));
//
//     it("sum",function () {
//
//         expect($scope.setx()).toBe("Hello world")
//
//     });
//
//
// });

describe('Test for calculator1 controller', function () {

    describe('sum', function () {
        it('1 + 1 should equal 2', function () {
            expect($scope.add(1, 1)).toBe(2);
        });
    });

    describe('subtract', function () {
        it('3 - 2 should equal 1', function () {
            expect($scope.sub(3, 2)).toBe(1);
        });
    });

describe('multiply', function () {
    it('10 * 5 should equal 50', function () {
        expect($scope.mult(10, 5)).toBe(50);
    });

    describe('divide', function () {
        it('10 / 5 should equal 2', function () {
            expect($scope.div(10, 5)).toBe(2);
        });


    });
})

