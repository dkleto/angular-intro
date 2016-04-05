describe('logo controller', function() {
  var scope, ctrl, $httpBackend;

  beforeEach(module('intro'));
  beforeEach(inject(function(_$httpBackend_, $rootScope, $controller) {
    $httpBackend = _$httpBackend_;
    scope = $rootScope.$new();
    ctrl = $controller('logoCtrl', {$scope: scope});
  }));

});

