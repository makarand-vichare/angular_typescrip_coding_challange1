/// <reference path="../../../typings/angularjs/angular.d.ts" />
/// <reference path="../../../typings/angularjs/angular-mocks.d.ts" />
/// <reference path="../../../typings/jasmine/jasmine.d.ts" />
/// <reference path="../interfaces/iauthservice.ts" />
/// <reference path="logincontroller.ts" />

describe("LoginController", () => {

    var controller: AdminSection.Controllers.LoginController;
    var authService: AdminSection.Interfaces.IAuthService;
    var injectorService: ng.auto.IInjectorService;
    var locationService: ng.ILocationService;
    var windowService: ng.IWindowService;
    var httpBackEndService: ng.IHttpBackendService;

    beforeEach(function () {
        angular.mock.module("AdminSection");
    });

    beforeEach(inject(function (_windowService: ng.IWindowService, _locationService: ng.ILocationService, _injectorService: ng.auto.IInjectorService, _httpBackEndService: ng.IHttpBackendService , _authService: AdminSection.Interfaces.IAuthService) {
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

    it("should create controller", () => {

        controller = new AdminSection.Controllers.LoginController(injectorService, authService);
        httpBackEndService.flush();
        expect(controller).not.toBeNull(); 
    });

    it("admin should login", () => {

        var loginData = { UserName: "Admin", Password: "Admin" } as AdminSection.ViewModels.ILoginVM

        var data = "grant_type=password&username=" + loginData.UserName + "&password=" + loginData.Password;
        var response = {
            data: {
                access_token: "132324324ASWDFDGDGDFGFGH67",
                UserName: "Admin",
                role: "admin"
            }
        };

        httpBackEndService.expectPOST(Common.AppConstants.AuthAPIUrl + '/token', data).respond(
            response
        );
        controller = new AdminSection.Controllers.LoginController(injectorService, authService);
        controller.Login(loginData);
        httpBackEndService.flush();

        expect(controller).not.toBeNull();
    });
});