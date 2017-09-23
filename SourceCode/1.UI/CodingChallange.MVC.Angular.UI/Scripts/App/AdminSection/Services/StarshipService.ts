
module AdminSection.Services
{
    export class StarshipService implements AdminSection.Interfaces.IStarshipService
    {
        static $inject = ["$http","$q"];
        constructor( private httpService: ng.IHttpService, private qService:ng.IQService) {}

        GetByPage = (page: number): ng.IPromise<any>  =>
        {
            var config = {
                params: { page: page  },
                headers: {
                    'Accept': 'application/json', 'Access-Control-Allow-Headers': 'Content-Type, x-xsrf-token'
                }
            } as ng.IRequestShortcutConfig;

            return this.httpService.get(Common.AppConstants.SWAPIUrl + '/starships/', config );
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

        static GetInstance = () =>
        {
            var instance = (httpService: ng.IHttpService, qService: ng.IQService) => new StarshipService(httpService, qService );
            return instance;
        }
    }

    App.ModuleInitiator.GetModule("AdminSection").service("AdminSection.Services.StarshipService", StarshipService );
} 