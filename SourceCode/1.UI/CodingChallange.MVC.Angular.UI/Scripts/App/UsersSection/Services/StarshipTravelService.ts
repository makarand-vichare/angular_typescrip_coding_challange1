
module UsersSection.Services {
    export class StarshipTravelService implements UsersSection.Interfaces.IStarshipTravelService {
        static $inject = ["$http", "$q"];
        constructor(private httpService: ng.IHttpService, private qService: ng.IQService) { }

        GetByUrl = (url: string, planetDistance: number): ng.IPromise<any> => {
            var self = this;
            var defer = this.qService.defer();

            var config = {
                headers: {
                    'Accept': 'application/json', 'Access-Control-Allow-Headers': 'Content-Type, x-xsrf-token'
                }
            } as ng.IRequestShortcutConfig;

            self.httpService.get(url, config)
                .then(function (response: any) {
                    response.data.results = self.CalculateReSupplyCount(response.data.results, planetDistance);
                    defer.resolve(response);
                })
                .catch(function (error: any) {
                    defer.reject(error);
                });

            return defer.promise;
        }

        GetShipsSupplyCount = (planetDistance: number): ng.IPromise<any> => {
            var self = this;
            var config = {
                headers: {
                    'Accept': 'application/json', 'Access-Control-Allow-Headers': 'Content-Type, x-xsrf-token'
                }
            } as ng.IRequestShortcutConfig;

            var defer = this.qService.defer();
            self.httpService.get(Common.AppConstants.SWAPIUrl + '/starships/', config)
                .then(function (response: any) {
                    response.data.results = self.CalculateReSupplyCount(response.data.results, planetDistance);
                    defer.resolve(response);
                })
                .catch(function (error: any) {
                    defer.reject(error);
                });
            return defer.promise;
        }

        private CalculateReSupplyCount = (starShips: Array<UsersSection.ViewModels.IStarshipTravelVM>, planetDistance: number): Array<UsersSection.ViewModels.IStarshipTravelVM> => {
            var self = this;
            starShips.forEach((starship) => {
                var unknown: string = 'unknown';
                var resupplyCount = (starship.MGLT === unknown || starship.consumables === unknown) ? unknown : (planetDistance / Number(starship.MGLT)) / self.GetConsumablesInHour(starship.consumables);
                // stopsNeeded = hours required to reach the distance divided by food available per hour
                starship.ReSupplyCount = (resupplyCount === unknown) ? resupplyCount : Math.floor(Number(resupplyCount)).toString();
            });
            return starShips;
        }

        private GetConsumablesInHour = (consumables: string): number => {
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
        }

        static GetInstance = () => {
            var instance = (httpService: ng.IHttpService, qService: ng.IQService) => new StarshipTravelService(httpService, qService);
            return instance;
        }
    }

    App.ModuleInitiator.GetModule("UsersSection").service("UsersSection.Services.StarshipTravelService", StarshipTravelService);
} 