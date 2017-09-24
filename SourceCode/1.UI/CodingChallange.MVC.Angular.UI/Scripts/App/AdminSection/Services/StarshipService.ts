
module AdminSection.Services {
    export class StarshipService extends Common.Services.BaseService implements AdminSection.Interfaces.IStarshipService {
        static $inject = ["$injector", "$http", "$q"];
        constructor(private injectorService: ng.auto.IInjectorService, private httpService: ng.IHttpService, private qService: ng.IQService) {
            super(injectorService);
        }

        GetByPage = (page: number): ng.IPromise<any> => {
            var config = {
                params: { page: page },
                headers: {
                    'Accept': 'application/json', 'Access-Control-Allow-Headers': 'Content-Type, x-xsrf-token'
                }
            } as ng.IRequestShortcutConfig;

            return this.httpService.get(Common.AppConstants.SWAPIUrl + '/starships/', config);
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


        GetAll = (): ng.IPromise<any> => {
            var config = {
                headers: {
                    'Accept': 'application/json', 'Access-Control-Allow-Headers': 'Content-Type, x-xsrf-token'
                }
            } as ng.IRequestShortcutConfig;
            return this.httpService.get(Common.AppConstants.SWAPIUrl + '/starships/', config);
        }

        static GetInstance = () => {
            var instance = (injectorService: ng.auto.IInjectorService, httpService: ng.IHttpService, qService: ng.IQService) => new StarshipService(injectorService, httpService, qService);
            return instance;
        }
    }

    App.ModuleInitiator.GetModule("AdminSection").service("AdminSection.Services.StarshipService", StarshipService);
} 