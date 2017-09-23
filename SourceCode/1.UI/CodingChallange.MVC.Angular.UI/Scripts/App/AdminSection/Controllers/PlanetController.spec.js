/// <reference path="../../../typings/angularjs/angular.d.ts" />
/// <reference path="../../../typings/angularjs/angular-mocks.d.ts" />
/// <reference path="../../../typings/jasmine/jasmine.d.ts" />
/// <reference path="planetcontroller.ts" />
describe("PlanetController", function () {
    var controller;
    var planetService;
    var injectorService;
    beforeEach(function () {
        angular.mock.module("App", []);
        angular.mock.module("Common", []);
        angular.mock.module("AdminSection");
    });
    beforeEach(inject(function (_injectorService, _planetService) {
        injectorService = _injectorService;
        planetService = _planetService;
    }));
    it("should create controller", function () {
        controller = new AdminSection.Controllers.PlanetController(injectorService, planetService);
        expect(controller).not.toBeNull();
    });
});
//# sourceMappingURL=PlanetController.spec.js.map