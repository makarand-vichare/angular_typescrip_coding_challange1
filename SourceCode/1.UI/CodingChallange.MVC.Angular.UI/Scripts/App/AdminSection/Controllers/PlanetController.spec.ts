/// <reference path="../../../typings/angularjs/angular.d.ts" />
/// <reference path="../../../typings/angularjs/angular-mocks.d.ts" />
/// <reference path="../../../typings/jasmine/jasmine.d.ts" />
/// <reference path="planetcontroller.ts" />

describe("PlanetController", () => {

    var controller: AdminSection.Controllers.PlanetController;
    var planetService: AdminSection.Interfaces.IPlanetService;
    var injectorService: ng.auto.IInjectorService;
        
    beforeEach(function () {
        angular.mock.module("App", []);
        angular.mock.module("Common", []);
        angular.mock.module("AdminSection");
    });

    beforeEach(inject(function (_injectorService: ng.auto.IInjectorService, _planetService: AdminSection.Interfaces.IPlanetService) {
        injectorService = _injectorService;
        planetService = _planetService;
    }));

    it("should create controller", () => {
        controller = new AdminSection.Controllers.PlanetController(injectorService, planetService);
        expect(controller).not.toBeNull(); 
    });
});