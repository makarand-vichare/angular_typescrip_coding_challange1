/// <reference path="../../../typings/angularjs/angular.d.ts" />
/// <reference path="../../../typings/angularjs/angular-mocks.d.ts" />
/// <reference path="../../../typings/jasmine/jasmine.d.ts" />
/// <reference path="starshipcontroller.ts" />
describe("StarshipController", function () {
    var controller;
    var starshipService;
    var injectorService;
    beforeEach(function () {
        angular.mock.module("App", []);
        angular.mock.module("Common", []);
        angular.mock.module("AdminSection");
    });
    beforeEach(inject(function (_injectorService, _starshipService) {
        injectorService = _injectorService;
        starshipService = _starshipService;
    }));
    it("should create controller", function () {
        controller = new AdminSection.Controllers.StarshipController(injectorService, starshipService);
        expect(controller).not.toBeNull();
    });
});
//# sourceMappingURL=StarshipController.spec.js.map