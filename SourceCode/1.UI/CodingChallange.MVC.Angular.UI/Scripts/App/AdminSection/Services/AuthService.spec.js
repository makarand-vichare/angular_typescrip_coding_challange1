/// <reference path="../../../typings/angularjs/angular.d.ts" />
/// <reference path="../../../typings/angularjs/angular-mocks.d.ts" />
/// <reference path="../../../typings/jasmine/jasmine.d.ts" />
/// <reference path="../interfaces/iauthservice.ts" />
/// <reference path="authservice.ts" />
describe("AuthService", function () {
    var service;
    var httpBackEndService;
    beforeEach(function () {
        angular.mock.module("AdminSection");
    });
    beforeEach(angular.mock.inject(function (injectorService) {
        httpBackEndService = injectorService.get("$httpBackend");
        service = injectorService.get("AdminSection.Services.AuthService");
    }));
    afterEach(function () {
        httpBackEndService.verifyNoOutstandingExpectation();
        httpBackEndService.verifyNoOutstandingRequest();
    });
    it("should create service", function () {
        expect(service).not.toBeNull();
    });
    it("Admin should able to login", function () {
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
        var result = service.Login(loginData);
        httpBackEndService.flush();
        expect(result).toBeDefined();
        expect(result).toBe(response);
    });
    it("User should able to login", function () {
        var loginData = { UserName: "User", Password: "User" };
        var data = "grant_type=password&username=" + loginData.UserName + "&password=" + loginData.Password;
        var response = {
            data: {
                access_token: "132324324ASWDFDGDGDFGFGH67",
                UserName: "User",
                role: "user"
            }
        };
        httpBackEndService.expectPOST(Common.AppConstants.AuthAPIUrl + '/token').respond(response);
        var result = service.Login(loginData);
        httpBackEndService.flush();
        expect(result).toBeDefined();
        expect(result).toBe(response);
    });
    it("Invalid User should not able to login", function () {
        var loginData = { UserName: "User1", Password: "User1" };
        var data = "grant_type=password&username=" + loginData.UserName + "&password=" + loginData.Password;
        var response = {
            data: {
                access_token: "",
                UserName: "User1",
                role: ""
            }
        };
        httpBackEndService.expectPOST(Common.AppConstants.AuthAPIUrl + '/token').respond(response);
        var result = service.Login(loginData);
        httpBackEndService.flush();
        expect(result).toBeDefined();
        expect(result).toBe(response);
    });
    it("Validate antiforgery token", function () {
        var response = {
            data: {
                FormToken: "132324324ASWDFDGDGDFGFGH67"
            }
        };
        httpBackEndService.expectGET(Common.AppConstants.AuthAPIUrl + '/api/Antiforgerytoken/GetAntiForgeryToken').respond(response);
        var result = service.GetAntiForgeryToken();
        httpBackEndService.flush();
        expect(result).toBeDefined();
    });
});
//# sourceMappingURL=AuthService.spec.js.map