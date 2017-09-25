/// <reference path="../../_service-script-references.d.ts" />
/// <reference path="../../_service-references.d.ts" />
/// <reference path="../interfaces/iauthservice.ts" />

describe("AuthService", () => {

    var service: AdminSection.Services.AuthService;
    var injectorService: ng.auto.IInjectorService;
    var httpBackEndService: ng.IHttpBackendService;
    var httpService: ng.IHttpService;
    var localStorageService: ng.local.storage.ILocalStorageService;

    beforeEach(function () {
        angular.mock.module("App");
        angular.mock.module("Common");
        angular.mock.module("AdminSection");
    });

    beforeEach(() => angular.mock.inject(["$injector", "$httpBackend", "$http", "localStorageService",
        (_injectorService: ng.auto.IInjectorService,
            _httpBackEndService: ng.IHttpBackendService, _httpService: ng.IHttpService, _localStorageService: ng.local.storage.ILocalStorageService) => {
            injectorService = _injectorService;
            httpBackEndService = _httpBackEndService;
            httpService = _httpService;
            localStorageService = _localStorageService;
        }]));

    afterEach(function () {
        httpBackEndService.verifyNoOutstandingExpectation();
        httpBackEndService.verifyNoOutstandingRequest();
    });

    it("should create service", () => {
        service = new AdminSection.Services.AuthService(injectorService, httpService, localStorageService);
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
        service = new AdminSection.Services.AuthService(injectorService, httpService, localStorageService);
        var result = service.Login(loginData).then(function (response: any) {
            httpBackEndService.flush();
            expect(response).toBeDefined();
            expect(response.data).toBeDefined();
        });
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
        service = new AdminSection.Services.AuthService(injectorService, httpService, localStorageService);

        var result = service.Login(loginData).then(function (response: any) {
            httpBackEndService.flush();
            expect(response).toBeDefined();
            expect(response.data).toBeDefined();
        });
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

        service = new AdminSection.Services.AuthService(injectorService, httpService, localStorageService);

        var result = service.Login(loginData).then(function (response: any) {
            httpBackEndService.flush();
            expect(response).toBeDefined();
            expect(response.data).toBeDefined();
        });
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

        service = new AdminSection.Services.AuthService(injectorService, httpService, localStorageService);

        var result = service.GetAntiForgeryToken().then(function (response: any) {
            httpBackEndService.flush();
            expect(response).toBeDefined();
            expect(response.data).toBeDefined();
        });
    });

});