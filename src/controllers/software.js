var softCtrl = angular.module('softCtrl', []);

softCtrl.controller('softCtrl', ['$scope', '$http', function($scope, $http) {
    $http.get('software/software.json').success(function(data) {
        $scope.softwareList = data;
    });
}]);
