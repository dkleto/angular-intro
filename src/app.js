
var intro = angular.module('intro', []);

intro.controller('introCtrl', ['$scope', function($scope) {
    $scope.red = 255;
    $scope.green = 255;
    $scope.blue = 255;

    /**
     * Generate a background colour object for use with ng-style.
     *
     * @param number red
     * @param number green
     * @param number blue
     * @return object rgbColour
     */
    $scope.getRgbColour = function(red, green, blue) {
        var rgb = 'rgb(' + red + ', ' + green + ', ' + blue + ')';
        return {'background-color' : rgb};
    };
}]);
