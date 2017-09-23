/// <reference path="../../typings/angularjs/angular.d.ts" />
/// <reference path="../../typings/angularjs/angular-mocks.d.ts" />
/// <reference path="../../typings/jasmine/jasmine.d.ts" />
/// <reference path="basecontroller.ts" />
describe("BaseController", function () {
    var controller;
    var injectorService;
    beforeEach(function () {
        angular.mock.module("App", []);
        angular.mock.module("Common", []);
    });
    beforeEach(inject(function (_injectorService) {
        injectorService = _injectorService;
    }));
    it("should create controller", function () {
        controller = new Common.Controllers.BaseController(injectorService);
        expect(controller).not.toBeNull();
    });
});
//# sourceMappingURL=BaseController.spec.js.map