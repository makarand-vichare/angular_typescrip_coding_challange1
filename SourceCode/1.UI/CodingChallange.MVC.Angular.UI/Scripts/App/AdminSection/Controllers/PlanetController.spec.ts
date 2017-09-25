/// <reference path="../../_controller-script-references.d.ts" />
/// <reference path="../../_controller-references.d.ts" />

/// <reference path="../interfaces/iplanetservice.ts" />
/// <reference path="../services/planetservice.ts" />
/// <reference path="planetcontroller.ts" />

describe("PlanetController", () => {

    var controller: AdminSection.Controllers.PlanetController;
    var planetService: AdminSection.Interfaces.IPlanetService;
    var injectorService: ng.auto.IInjectorService; //= angular.injector(['ngMock', 'ng']);
    var toastrService: ng.toastr.IToastrService;
    var httpBackEndService: ng.IHttpBackendService;
        
    beforeEach(function () {
        angular.mock.module("App");
        angular.mock.module("Common");
        angular.mock.module("AdminSection");
    });

    beforeEach(() => angular.mock.inject(["$injector", "toastr","$httpBackend", "AdminSection.Services.PlanetService",
        (_injectorService: ng.auto.IInjectorService, _toastrService: ng.toastr.IToastrService,
            _httpBackEndService: ng.IHttpBackendService, _planetService: AdminSection.Interfaces.IPlanetService) => {
            injectorService = _injectorService;
            toastrService = _toastrService;
            httpBackEndService = _httpBackEndService;
            planetService = _planetService;
    }]));

    afterEach(function () {
        httpBackEndService.verifyNoOutstandingExpectation();
        httpBackEndService.verifyNoOutstandingRequest();
    });

    it("should create controller", () => {
        controller = new AdminSection.Controllers.PlanetController(injectorService, toastrService, planetService);
        expect(controller).not.toBeNull();
    });

    it("should get planets", () => {

        var planets = [
            {
                "name": "Alderaan",
                "rotation_period": "24",
                "orbital_period": "364",
                "diameter": "12500",
                "climate": "temperate",
                "gravity": "1 standard",
                "terrain": "grasslands, mountains",
                "surface_water": "40",
                "population": "2000000000",
                "residents": [
                    "https://swapi.co/api/people/5/",
                    "https://swapi.co/api/people/68/",
                    "https://swapi.co/api/people/81/"
                ],
                "films": [
                    "https://swapi.co/api/films/6/",
                    "https://swapi.co/api/films/1/"
                ],
                "created": "2014-12-10T11:35:48.479000Z",
                "edited": "2014-12-20T20:58:18.420000Z",
                "url": "https://swapi.co/api/planets/2/"
            },
            {
                "name": "Yavin IV",
                "rotation_period": "24",
                "orbital_period": "4818",
                "diameter": "10200",
                "climate": "temperate, tropical",
                "gravity": "1 standard",
                "terrain": "jungle, rainforests",
                "surface_water": "8",
                "population": "1000",
                "residents": [],
                "films": [
                    "https://swapi.co/api/films/1/"
                ],
                "created": "2014-12-10T11:37:19.144000Z",
                "edited": "2014-12-20T20:58:18.421000Z",
                "url": "https://swapi.co/api/planets/3/"
            },
            {
                "name": "Hoth",
                "rotation_period": "23",
                "orbital_period": "549",
                "diameter": "7200",
                "climate": "frozen",
                "gravity": "1.1 standard",
                "terrain": "tundra, ice caves, mountain ranges",
                "surface_water": "100",
                "population": "unknown",
                "residents": [],
                "films": [
                    "https://swapi.co/api/films/2/"
                ],
                "created": "2014-12-10T11:39:13.934000Z",
                "edited": "2014-12-20T20:58:18.423000Z",
                "url": "https://swapi.co/api/planets/4/"
            }
        ];
        var response = {
            results: planets
        }
        httpBackEndService.expectGET(Common.AppConstants.SWAPIUrl + "/planets/?page=1").respond(response);

        controller = new AdminSection.Controllers.PlanetController(injectorService, toastrService, planetService);
        controller.GetPlanets(1);
        httpBackEndService.flush();
        expect(controller).not.toBeNull();
        expect(controller.model).not.toBeNull();
        expect(controller.model.planets).not.toBeNull();
        expect(controller.model.planets.length).toBe(3);
    });

});