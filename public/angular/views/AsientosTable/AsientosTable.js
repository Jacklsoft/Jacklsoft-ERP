/**
 * Created by manga_000 on 24/11/2015.
 */
angularJERP.directive('jerpAsientosTable', function(){
    return {
        restrict: 'A',
        templateUrl: '/angular/views/AsientosTable/AsientosTable.html',
        controller: function($scope, $http){
            $scope.data = [];

            $http({
                method: 'GET',
                url: '/asientos',
                responseType: 'json'
            }).then(function(res){
                $scope.data = res.data;
            }, function(res){
                alert("Error");
            })
        }
    };
});