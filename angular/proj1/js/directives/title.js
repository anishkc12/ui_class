
angular.module('app').directive('appTitle', function () {
return {
    restrict :'AMC', //E=elements, A=attributes, M=comment, C=class.//we removed E but add  <div app-title> </div> in index.html.
  //  template: '<h1>Hello World</h1>'
    templateUrl: '/views/title.html',//to display the html page of title.html
    controller: function ($scope) {
        $scope.title='shopping cart';
    },

    link: function(scope){
        scope.title='from directives';//this will override the shopping chart.//used for DOM manupulation.
    }
//json object

};
});



/*


 angular.module('app').directive('AppTitle',function(){
 return{
 restrict:'EAMC';
 templateUrl: 'file path to html',
 link:function(){

 }

 };
 });

 */
