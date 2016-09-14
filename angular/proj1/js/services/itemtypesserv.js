angular.module('app').service('itemtypesserv', function()

{
    this.itemTypes=["electronics","games","cell","stationary","home","audio"];
    this.title='Sample Shopping Cart';
    this.description= {
        "title": "CS Inc.",
        "body": "American multinational technology company headquartered in Cupertino, California, that " +
        "designs, develops, and sells consumer electronics, computer software, and online services."

    };
});


/*

angular.module('app').service(('itemtypeservice,function(){
};
});


angular.module('app').directive('AppTitle',function(){
return{
restrict:EAMC;
templateUrl: 'file path to html',
link:function(){

}

};
});


angular.module('app').controller('AppCtrl',['$scope','itemtypeservice',function('$scope','itemtypeservice')
{






}]);

angular.moduel('app',[]);

ng-app,
ng-repeat,
ng-click,
ng-cut,
ng-copy,
ng-modal,
ng-controller,
ng-modal

 */