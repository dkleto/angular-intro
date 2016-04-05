
var intro = angular.module('intro', ['ngRoute', 'logoCtrl']);

intro.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/logos', {
        templateUrl: 'partials/logos.html',
        controller: 'logoCtrl'
      }).
      otherwise({
        redirectTo: '/logos'
      });
}]);

