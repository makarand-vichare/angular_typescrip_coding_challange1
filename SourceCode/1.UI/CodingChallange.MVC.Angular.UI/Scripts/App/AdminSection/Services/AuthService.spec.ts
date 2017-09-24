/// <reference path="../../../typings/angularjs/angular.d.ts" />
/// <reference path="../../../typings/angularjs/angular-mocks.d.ts" />
/// <reference path="../../../typings/jasmine/jasmine.d.ts" />
/// <reference path="../interfaces/iauthservice.ts" />
/// <reference path="authservice.ts" />

describe("AuthService", () => {

    var service: AdminSection.Interfaces.IAuthService;
    var httpBackEndService: ng.IHttpBackendService;
        
    beforeEach(function () {
        angular.mock.module("AdminSection");
    });

    beforeEach(angular.mock.inject(function (injectorService: ng.auto.IInjectorService) {
        httpBackEndService = injectorService.get<ng.IHttpBackendService>("$httpBackend");
        service = injectorService.get<AdminSection.Interfaces.IAuthService>("AdminSection.Services.AuthService");
    }));

    afterEach(function () {
        httpBackEndService.verifyNoOutstandingExpectation();
        httpBackEndService.verifyNoOutstandingRequest();
    });

    it("should create service", () => {
        expect(service).not.toBeNull(); 
    });

    it("Admin should able to login", () => {
        var loginData = { UserName: "Admin", Password: "Admin" } as AdminSection.ViewModels.ILoginVM

        var data = "grant_type=password&username=" + loginData.UserName + "&password=" + loginData.Password;
        var response = {
            data: {
                access_token: "132324324ASWDFDGDGDFGFGH67",
                UserName: "Admin",
                role: "admin"
            }};

        httpBackEndService.expectPOST(Common.AppConstants.AuthAPIUrl + '/token', data).respond(
            response
        );

        var result = service.Login(loginData);
        httpBackEndService.flush();

        expect(result).toBeDefined();
        expect(result).toBe(response);

    });

    it("User should able to login", () => {
        var loginData = { UserName: "User", Password: "User" } as AdminSection.ViewModels.ILoginVM

        var data = "grant_type=password&username=" + loginData.UserName + "&password=" + loginData.Password;
        var response = {
            data: {
                access_token: "132324324ASWDFDGDGDFGFGH67",
                UserName: "User",
                role: "user"
            }
        };

        httpBackEndService.expectPOST(Common.AppConstants.AuthAPIUrl + '/token').respond(
            response
        );

        var result = service.Login(loginData);
        httpBackEndService.flush();

        expect(result).toBeDefined();
        expect(result).toBe(response);

    });

    it("Invalid User should not able to login", () => {
        var loginData = { UserName: "User1", Password: "User1" } as AdminSection.ViewModels.ILoginVM

        var data = "grant_type=password&username=" + loginData.UserName + "&password=" + loginData.Password;
        var response = {
            data: {
                access_token: "",
                UserName: "User1",
                role: ""
            }
        };

        httpBackEndService.expectPOST(Common.AppConstants.AuthAPIUrl + '/token').respond(
            response
        );

        var result = service.Login(loginData);
        httpBackEndService.flush();

        expect(result).toBeDefined();
        expect(result).toBe(response);
    });

    it("Validate antiforgery token", () => {

        var response = {
            data: {
                FormToken: "132324324ASWDFDGDGDFGFGH67"
            }
        };

        httpBackEndService.expectGET(Common.AppConstants.AuthAPIUrl + '/api/Antiforgerytoken/GetAntiForgeryToken').respond(
            response
        );

        var result = service.GetAntiForgeryToken();
        httpBackEndService.flush();
        expect(result).toBeDefined();
    });

});