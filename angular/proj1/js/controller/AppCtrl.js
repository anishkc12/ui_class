/**
 * Created by akc on 9/8/16.
 */
//angular.module('app').controller('AppCtrl',
//     function ($scope) {
//
//     // $scope.person=
//     // {
//     //     'name':'John Due'
//     // };
//
// });
//scope

angular.module('app').controller('AppCtrl',['$scope','itemtypesserv',function ($scope,itemtypesserv) {
    console.log(itemtypesserv.itemTypes);
    $scope.itemTypes=itemtypesserv.itemTypes;

    // $scope.itemTypes=["electronics","games","cell","stationary","home","audio"];
    $scope.title='Sample Shopping Cart';
    $scope.description={
        "title":"CS Inc.",
        "body": "American multinational technology company headquartered in Cupertino, California, that " +
        "designs, develops, and sells consumer electronics, computer software, and online services."
    };

    $scope.prommsg={
        "title": "Message from Promoter",
        "body": "It is my pleasure to welcome you to the Marathon Petroleum Corporation website. We are one of the largest " +
        "independent petroleum product refiners and marketers in the United States and one of the largest operators of" +
        " company-owned and operated retail gasoline outlets in the United States, and we own one of the largest terminal " +
        "and pipeline systems in the United States. We own and operate seven refineries, located in the Midwest and " +
        "Gulf Coast regions of the United States, with an aggregate crude oil refining capacity of approximately 1.8 million" +
        " barrels per day. We sell our refined products to wholesale customers, including private-brand marketers and large" +
        " commercial and industrial consumers, and we also distribute our refined products through a large network of retail" +
        " stores and stations. We have an extensive distribution network, which we use to deliver crude oil and other " +
        "feedstocks to our refineries and refined products to wholesale and retail market areas. We believe the efficiency," +
        " flexibility and optionality in our integrated system allows us to capture opportunities in the markets we serve" +
        " and have been the keys to the success and strong financial performance of our business." +
        "President: Anish KC"

    };

}]);

