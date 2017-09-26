/// <reference path="../../_service-script-references.d.ts" />
/// <reference path="../../_service-references.d.ts" />

/// <reference path="../interfaces/istarshiptravelservice.ts" />
/// <reference path="starshiptravelservice.ts" />

describe("StarshipTravelService", () => {

    var service: UsersSection.Services.StarshipTravelService;
    var injectorService: ng.auto.IInjectorService;
    var httpBackEndService: ng.IHttpBackendService;
    var httpService: ng.IHttpService;
    var qService: ng.IQService;
       
    beforeEach(function () {
        angular.mock.module("App");
        angular.mock.module("Common");
        angular.mock.module("UsersSection");
    });

    beforeEach(() => angular.mock.inject(["$injector", "$httpBackend", "$http", "$q",
        (_injectorService: ng.auto.IInjectorService,
            _httpBackEndService: ng.IHttpBackendService, _httpService: ng.IHttpService, _qService: ng.IQService) => {
            injectorService = _injectorService;
            httpBackEndService = _httpBackEndService;
            httpService = _httpService;
            qService = _qService;
       }]));

    afterEach(function () {
        httpBackEndService.verifyNoOutstandingExpectation();
        httpBackEndService.verifyNoOutstandingRequest();
    });

    it("should create service", () => {
        service = new UsersSection.Services.StarshipTravelService(injectorService, httpService, qService);
        expect(service).not.toBeNull(); 
    });

    it("should get starships resupplycount", () => {
        var starships = [
            {
                "name": "Executor",
                "model": "Executor-class star dreadnought",
                "manufacturer": "Kuat Drive Yards, Fondor Shipyards",
                "cost_in_credits": "1143350000",
                "length": "19000",
                "max_atmosphering_speed": "n/a",
                "crew": "279144",
                "passengers": "38000",
                "cargo_capacity": "250000000",
                "consumables": "6 years",
                "hyperdrive_rating": "2.0",
                "MGLT": "40",
                "starship_class": "Star dreadnought",
                "films": [
                    "https://swapi.co/api/films/2/",
                    "https://swapi.co/api/films/3/"
                ],
                "created": "2014-12-15T12:31:42.547000Z",
                "edited": "2017-04-19T10:56:06.685592Z",
                "url": "https://swapi.co/api/starships/15/"
            },
            {
                "name": "Sentinel-class landing craft",
                "model": "Sentinel-class landing craft",
                "resupplyCount": "0",
                "manufacturer": "Sienar Fleet Systems, Cyngus Spaceworks",
                "cost_in_credits": "240000",
                "length": "38",
                "max_atmosphering_speed": "1000",
                "crew": "5",
                "passengers": "75",
                "cargo_capacity": "180000",
                "consumables": "1 month",
                "hyperdrive_rating": "1.0",
                "MGLT": "70",
                "starship_class": "landing craft",
                "pilots": [],
                "films": [
                    "https://swapi.co/api/films/1/"
                ],
                "created": "2014-12-10T15:48:00.586000Z",
                "edited": "2014-12-22T17:35:44.431407Z",
                "url": "https://swapi.co/api/starships/5/"
            },
            {
                "name": "Death Star",
                "model": "DS-1 Orbital Battle Station",
                "resupplyCount": "111",
                "manufacturer": "Imperial Department of Military Research, Sienar Fleet Systems",
                "cost_in_credits": "1000000000000",
                "length": "120000",
                "max_atmosphering_speed": "n/a",
                "crew": "342953",
                "passengers": "843342",
                "cargo_capacity": "1000000000000",
                "consumables": "3 years",
                "hyperdrive_rating": "4.0",
                "MGLT": "10",
                "starship_class": "Deep Space Mobile Battlestation",
                "pilots": [],
                "films": [
                    "https://swapi.co/api/films/1/"
                ],
                "created": "2014-12-10T16:36:50.509000Z",
                "edited": "2014-12-22T17:35:44.452589Z",
                "url": "https://swapi.co/api/starships/9/"
            },
            {
                "name": "Millennium Falcon",
                "model": "YT-1300 light freighter",
                "resupplyCount": "1",
                "manufacturer": "Corellian Engineering Corporation",
                "cost_in_credits": "100000",
                "length": "34.37",
                "max_atmosphering_speed": "1050",
                "crew": "4",
                "passengers": "6",
                "cargo_capacity": "100000",
                "consumables": "2 months",
                "hyperdrive_rating": "0.5",
                "MGLT": "75",
                "starship_class": "Light freighter",
                "pilots": [
                    "https://swapi.co/api/people/13/",
                    "https://swapi.co/api/people/14/",
                    "https://swapi.co/api/people/25/",
                    "https://swapi.co/api/people/31/"
                ],
                "films": [
                    "https://swapi.co/api/films/2/",
                    "https://swapi.co/api/films/7/",
                    "https://swapi.co/api/films/3/",
                    "https://swapi.co/api/films/1/"
                ],
                "created": "2014-12-10T16:59:45.094000Z",
                "edited": "2014-12-22T17:35:44.464156Z",
                "url": "https://swapi.co/api/starships/10/"
            }
        ];
        var response = {
            results: starships
        }

        httpBackEndService.expectGET(Common.AppConstants.SWAPIUrl + "/starships/").respond(response);
        service = new UsersSection.Services.StarshipTravelService(injectorService, httpService, qService);
        service.GetShipsSupplyCount(100000).then(function (response: any) {
            expect(response).toBeDefined();
            expect(response.data).toBeDefined();
            expect(response.data.results).toBeDefined();
            expect(response.data.results.length).toBe(4);
        });
        httpBackEndService.flush();

    });
});