/// <reference path="../../../typings/angularjs/angular.d.ts" />
/// <reference path="../../../typings/angularjs/angular-mocks.d.ts" />
/// <reference path="../../../typings/jasmine/jasmine.d.ts" />
/// <reference path="planetservice.ts" />
describe("PlanetService", function () {
    var service;
    var httpBackEndService;
    beforeEach(function () {
        angular.mock.module("App", []);
        angular.mock.module("Common", []);
        angular.mock.module("AdminSection");
    });
    beforeEach(angular.mock.inject(function (_httpBackEndService, _service) {
        httpBackEndService = _httpBackEndService;
        service = _service;
    }));
    afterEach(function () {
        httpBackEndService.verifyNoOutstandingExpectation();
        httpBackEndService.verifyNoOutstandingRequest();
    });
    it("should create service", function () {
        expect(service).not.toBeNull();
    });
    it("should get planets of page 1", function () {
        httpBackEndService.expectGET(Common.AppConstants.SWAPIUrl + "?page=1").respond([
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
        ]);
        var planets = service.GetByPage(1);
        expect(planets).toBeDefined();
        httpBackEndService.flush();
    });
    it("should get planets by next", function () {
        httpBackEndService.expectGET(Common.AppConstants.SWAPIUrl + "planets/?page=2").respond([
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
        ]);
        var planets = service.GetByUrl(Common.AppConstants.SWAPIUrl + "planets/?page=2");
        expect(planets).toBeDefined();
        httpBackEndService.flush();
    });
    it("should get planets by previous", function () {
        httpBackEndService.expectGET(Common.AppConstants.SWAPIUrl + "planets/?page=2").respond([
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
        ]);
        var planets = service.GetByUrl(Common.AppConstants.SWAPIUrl + "/planets/?page=2");
        expect(planets).toBeDefined();
        httpBackEndService.flush();
    });
});
//# sourceMappingURL=PlanetService.spec.js.map