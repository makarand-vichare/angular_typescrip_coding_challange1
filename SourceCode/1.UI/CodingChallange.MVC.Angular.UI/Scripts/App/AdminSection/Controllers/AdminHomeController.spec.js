/// <reference path="../../../typings/angularjs/angular.d.ts" />
/// <reference path="../../../typings/angularjs/angular-mocks.d.ts" />
/// <reference path="../../../typings/jasmine/jasmine.d.ts" />
/// <reference path="adminhomecontroller.ts" />
describe("AdminHomeController", function () {
    var controller;
    var injectorService;
    beforeEach(function () {
        angular.mock.module("App", []);
        angular.mock.module("Common");
        angular.mock.module("AdminSection");
    });
    it("should create controller", function () {
        controller = new AdminSection.Controllers.AdminHomeController();
        expect(controller).not.toBeNull();
    });
});
//# sourceMappingURL=AdminHomeController.spec.js.map