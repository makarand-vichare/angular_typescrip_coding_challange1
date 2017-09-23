/// <reference path="../../../typings/angularjs/angular.d.ts" />
/// <reference path="../../../typings/angularjs/angular-mocks.d.ts" />
/// <reference path="../../../typings/jasmine/jasmine.d.ts" />
/// <reference path="starshipcontroller.ts" />

describe("StarshipController", () => {

    var controller: AdminSection.Controllers.StarshipController;
    var starshipService: AdminSection.Interfaces.IStarshipService;
    var injectorService: ng.auto.IInjectorService;
        
    beforeEach(function () {
        angular.mock.module("App", []);
        angular.mock.module("Common", []);
        angular.mock.module("AdminSection");
    });

    beforeEach(inject(function (_injectorService: ng.auto.IInjectorService, _starshipService: AdminSection.Interfaces.IStarshipService) {
        injectorService = _injectorService;
        starshipService = _starshipService;
    }));

    it("should create controller", () => {
        controller = new AdminSection.Controllers.StarshipController(injectorService, starshipService);
        expect(controller).not.toBeNull(); 
    });
});