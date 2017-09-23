/// <reference path="../../../typings/angularjs/angular.d.ts" />
/// <reference path="../../../typings/angularjs/angular-mocks.d.ts" />
/// <reference path="../../../typings/jasmine/jasmine.d.ts" />

/// <reference path="adminhomecontroller.ts" />


describe("AdminHomeController", () => {
    var controller: AdminSection.Controllers.AdminHomeController;
    var injectorService: ng.auto.IInjectorService;

    beforeEach(function () {
        angular.mock.module("App", []);
        angular.mock.module("Common", []);
        angular.mock.module("AdminSection");
    });


    it("should create controller", () => {
        controller = new AdminSection.Controllers.AdminHomeController();
        expect(controller).not.toBeNull();  
    });
});