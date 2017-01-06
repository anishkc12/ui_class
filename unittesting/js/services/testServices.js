/**
 * Created by akc on 9/29/16.
 */

// angular.module('test').service('testServices', function() {
//
//
// });


angular.module('test').service('testServices', ['$window', 'modalSvc', function($window, modalSvc){
        this.showDialog = function(message, title){
            if(title){
                modalSvc.showModalDialog({
                    // title: title,
                    // message: message

                    title: kcha,
                    message: kbhayo

                });
            } else {
                $window.alert(message);
            }
        };
    }]);

