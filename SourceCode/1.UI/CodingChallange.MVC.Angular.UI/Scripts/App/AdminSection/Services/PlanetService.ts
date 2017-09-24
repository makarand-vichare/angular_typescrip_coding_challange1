
module AdminSection.Services {
    export class PlanetService extends Common.Services.BaseService implements AdminSection.Interfaces.IPlanetService {
        static $inject = ["$injector", "$http"];
        constructor(private injectorService: ng.auto.IInjectorService, private httpService: ng.IHttpService) {
            super(injectorService);
        }

        GetByPage = (page: number): ng.IPromise<any> => {
            var self = this;

            var config = {
                params: { page: page },
                headers: {
                    'Accept': 'application/json', 'Access-Control-Allow-Headers': 'Content-Type, x-xsrf-token'
                }
            } as ng.IRequestShortcutConfig;

            return self.httpService.get(Common.AppConstants.SWAPIUrl + '/planets/', config);
        }


        GetByUrl = (url: string): ng.IPromise<any> => {
            var self = this;
            var config = {
                headers: {
                    'Accept': 'application/json', 'Access-Control-Allow-Headers': 'Content-Type, x-xsrf-token'
                }
            } as ng.IRequestShortcutConfig;
            return self.httpService.get(url, config);
        }

        static GetInstance = () => {
            var instance = (injectorService: ng.auto.IInjectorService, $http: ng.IHttpService) => new PlanetService(injectorService, $http);
            return instance;
        }
    }

    App.ModuleInitiator.GetModule("AdminSection").service("AdminSection.Services.PlanetService", PlanetService);
} 