/**
 * Created by akc on 9/30/16.
 */

describe('test', function(){
    var mockWindow, mockModalSvc, TestServicesObj;

    beforeEach(function(){
        module(function($provide){
            $provide.service('$window', function(){
                this.alert = jasmine.createSpy('alert');
            });
            $provide.service('modalSvc', function(){
                this.showModalDialog = jasmine.createSpy('showModalDialog');
            });
        });

        module('test');
    });

    beforeEach(inject(function($window, modalSvc, testServices){
        mockWindow=$window;
        mockModalSvc=modalSvc;
        TestServicesObj=testServices;
    }));

    it('should show alert when title is not passed into showDialog', function(){
       // var message="Some message";
        var message= "Naya naulo";
        TestServicesObj.showDialog(message);

        // expect(mockWindow.alert).toHaveBeenCalled();
        // expect(mockWindow.alert).toHaveBeenCalledWith(message);
        expect(mockModalSvc.showModalDialog).not.toHaveBeenCalled();
    });

    it('should show modal when title is passed into showDialog', function(){
        // var message="Some message";
        // var title="Some title";
        var message="kcha";
        var title="kbhayo";

        TestServicesObj.showDialog(message, title);

        expect(mockModalSvc.showModalDialog).toHaveBeenCalled();
        expect(mockModalSvc.showModalDialog).toHaveBeenCalledWith({
            // message: message,
            // title: title

            message: kcha,
            title: kbhayo
        });
        expect(mockWindow.alert).not.toHaveBeenCalled();
    });
});
