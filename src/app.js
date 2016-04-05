
var intro = angular.module('intro', []);

intro.controller('introCtrl', ['$scope', function($scope) {
    $scope.red = 255;
    $scope.green = 255;
    $scope.blue = 255;
}]);
