/// <reference path="../../../typings/angularjs/angular.d.ts" />
/// <reference path="../../../typings/angularjs/angular-mocks.d.ts" />
/// <reference path="../../../typings/jasmine/jasmine.d.ts" />
/// <reference path="logincontroller.ts" />
describe("LoginController", function () {
    var controller;
    var authService;
    var injectorService;
    beforeEach(function () {
        angular.mock.module("App", []);
        angular.mock.module("Common", []);
        angular.mock.module("AdminSection");
    });
    beforeEach(inject(function (_injectorService, _authService) {
        injectorService = _injectorService;
        authService = _authService;
    }));
    it("should create controller", function () {
        controller = new AdminSection.Controllers.LoginController(injectorService, authService);
        expect(controller).not.toBeNull();
    });
});
//# sourceMappingURL=LoginController.spec.js.map