/// <reference path="../../../typings/angularjs/angular.d.ts" />
/// <reference path="../../../typings/angularjs/angular-mocks.d.ts" />
/// <reference path="../../../typings/jasmine/jasmine.d.ts" />
/// <reference path="logincontroller.ts" />

describe("LoginController", () => {

    var controller: AdminSection.Controllers.LoginController;
    var authService: AdminSection.Interfaces.IAuthService;
    var injectorService: ng.auto.IInjectorService;
        
    beforeEach(function () {
        angular.mock.module("App", []);
        angular.mock.module("Common", []);
        angular.mock.module("AdminSection");
    });

    beforeEach(inject(function (_injectorService: ng.auto.IInjectorService, _authService: AdminSection.Interfaces.IAuthService) {
        injectorService = _injectorService;
        authService = _authService;
    }));

    it("should create controller", () => {
        controller = new AdminSection.Controllers.LoginController(injectorService, authService);
        expect(controller).not.toBeNull(); 
    });
});