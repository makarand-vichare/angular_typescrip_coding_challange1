/// <reference path="../../../typings/angularjs/angular.d.ts" />
/// <reference path="../../../typings/angularjs/angular-mocks.d.ts" />
/// <reference path="../../../typings/jasmine/jasmine.d.ts" />
/// <reference path="../interfaces/iauthservice.ts" />
/// <reference path="../../common/basecontroller.ts" />
/// <reference path="logincontroller.ts" />
describe("LoginController", function () {
    var controller;
    var authService;
    var injectorService;
    var locationService;
    var windowService;
    var httpBackEndService;
    beforeEach(function () {
        angular.mock.module("App", []);
        angular.mock.module("Common", []);
        angular.mock.module("AdminSection");
    });
    beforeEach(inject(function (_windowService, _locationService, _injectorService, _httpBackEndService, _authService) {
        injectorService = _injectorService;
        httpBackEndService = _httpBackEndService;
        locationService = _locationService;
        windowService = _windowService;
        authService = _authService;
    }));
    afterEach(function () {
        httpBackEndService.verifyNoOutstandingExpectation();
        httpBackEndService.verifyNoOutstandingRequest();
    });
    it("should create controller", function () {
        controller = new AdminSection.Controllers.LoginController(injectorService, authService);
        httpBackEndService.flush();
        expect(controller).not.toBeNull();
    });
    it("admin should login", function () {
        var loginData = { UserName: "Admin", Password: "Admin" };
        var data = "grant_type=password&username=" + loginData.UserName + "&password=" + loginData.Password;
        var response = {
            data: {
                access_token: "132324324ASWDFDGDGDFGFGH67",
                UserName: "Admin",
                role: "admin"
            }
        };
        httpBackEndService.expectPOST(Common.AppConstants.AuthAPIUrl + '/token', data).respond(response);
        controller = new AdminSection.Controllers.LoginController(injectorService, authService);
        controller.Login(loginData);
        httpBackEndService.flush();
        expect(controller).not.toBeNull();
    });
});
//# sourceMappingURL=LoginController.spec.js.map