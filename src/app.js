
var intro = angular.module('intro', ['ngRoute', 'logoCtrl', 'softCtrl']);

intro.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/logos', {
        templateUrl: 'partials/logos.html',
        controller: 'logoCtrl'
      }).
      when('/software', {
        templateUrl: 'partials/software.html',
        controller: 'softCtrl'
      }).
      otherwise({
        redirectTo: '/logos'
      });
}]);

