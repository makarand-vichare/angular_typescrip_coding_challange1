var UsersSection;
(function (UsersSection) {
    var Services;
    (function (Services) {
        var StarshipTravelService = (function () {
            function StarshipTravelService(httpService, qService) {
                var _this = this;
                this.httpService = httpService;
                this.qService = qService;
                this.GetByUrl = function (url, planetDistance) {
                    var self = _this;
                    var defer = _this.qService.defer();
                    var config = {
                        headers: {
                            'Accept': 'application/json', 'Access-Control-Allow-Headers': 'Content-Type, x-xsrf-token'
                        }
                    };
                    self.httpService.get(url, config)
                        .then(function (response) {
                        response.data.results = self.CalculateReSupplyCount(response.data.results, planetDistance);
                        defer.resolve(response);
                    })
                        .catch(function (error) {
                        defer.reject(error);
                    });
                    return defer.promise;
                };
                this.GetShipsSupplyCount = function (planetDistance) {
                    var self = _this;
                    var config = {
                        headers: {
                            'Accept': 'application/json', 'Access-Control-Allow-Headers': 'Content-Type, x-xsrf-token'
                        }
                    };
                    var defer = _this.qService.defer();
                    self.httpService.get(Common.AppConstants.SWAPIUrl + '/starships/', config)
                        .then(function (response) {
                        response.data.results = self.CalculateReSupplyCount(response.data.results, planetDistance);
                        defer.resolve(response);
                    })
                        .catch(function (error) {
                        defer.reject(error);
                    });
                    return defer.promise;
                };
                this.CalculateReSupplyCount = function (starShips, planetDistance) {
                    var self = _this;
                    starShips.forEach(function (starship) {
                        var unknown = 'unknown';
                        var resupplyCount = (starship.MGLT === unknown || starship.consumables === unknown) ? unknown : (planetDistance / Number(starship.MGLT)) / self.GetConsumablesInHour(starship.consumables);
                        // stopsNeeded = hours required to reach the distance divided by food available per hour
                        starship.ReSupplyCount = (resupplyCount === unknown) ? resupplyCount : Math.floor(Number(resupplyCount)).toString();
                    });
                    return starShips;
                };
                this.GetConsumablesInHour = function (consumables) {
                    var result = 0;
                    var splitArray = consumables.split(' ');
                    switch (splitArray[1]) {
                        case "days":
                        case "day":
                            {
                                result = Number(splitArray[0]) * 24;
                                break;
                            }
                        case "weeks":
                        case "week":
                            {
                                result = Number(splitArray[0]) * 24 * 7;
                                break;
                            }
                        case "months":
                        case "month":
                            {
                                result = Number(splitArray[0]) * 24 * 30;
                                break;
                            }
                        case "years":
                        case "year":
                            {
                                result = Number(splitArray[0]) * 24 * 365;
                                break;
                            }
                    }
                    return result;
                };
            }
            return StarshipTravelService;
        }());
        StarshipTravelService.$inject = ["$http", "$q"];
        StarshipTravelService.GetInstance = function () {
            var instance = function (httpService, qService) { return new StarshipTravelService(httpService, qService); };
            return instance;
        };
        Services.StarshipTravelService = StarshipTravelService;
        App.ModuleInitiator.GetModule("UsersSection").service("UsersSection.Services.StarshipTravelService", StarshipTravelService);
    })(Services = UsersSection.Services || (UsersSection.Services = {}));
})(UsersSection || (UsersSection = {}));
//# sourceMappingURL=StarshipTravelService.js.map