
var intro = angular.module('intro', []);

intro.controller('introCtrl', ['$scope', function($scope) {
    $scope.red = 255;
    $scope.green = 255;
    $scope.blue = 255;
    $scope.logoList = [];

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

    /**
     * Add a coloured logo object to logoList.
     *
     * @param number red
     * @param number green
     * @param number blue
     */
    $scope.addLogo = function(red, green, blue) {
        $scope.logoList.push({'red' : red, 'green' : green, 'blue' : blue});
    };
}]);
