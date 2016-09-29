/**
 * Created by akc on 9/29/16.
 */

describe("testDrectivetest cases", function () {

    beforeEach(angular.mock.module('duces'));//
    beforeEach(angular.mock.module('test'));//


    var element, scope;


    beforeEach(inject(function($rootScope, $compile){



        element =angular.element('<test-directive></test-directive>');//angular.element--> minified jquery stuffs
        scope = $rootScope.$new();
        $compile(element)(scope);//$compile: angular command. //element means from directive coming on the top and add these stuffs on scope
        scope.$digest();
        console.log(element);
        scope.firstNum = 2;
        scope.secondNum = 3;
        scope.submit();
        console.log(element.find('button').html());

    }));

    // it('asdf',function () {
    //     expect(element.html()).toBe('test');
    //
    // });

    it('test for first num', function () {
        expect(scope.firstNum).toBe(2);
    });
    it('test for second num', function () {
        expect(scope.secondNum).toBe(3);
    });
    it('test for add', function () {
        expect(scope.add).toBe(5);
    });
    it('test for multiply', function () {
        expect(scope.pro).toBe(6);
    });


});

