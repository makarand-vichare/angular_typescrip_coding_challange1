
module AdminSection.Services
{
    export class PlanetService implements AdminSection.Interfaces.IPlanetService
    {
        static $inject = ["$http"];
        constructor( private httpService: ng.IHttpService)
        {
        }

        GetByPage = (page: number): ng.IPromise<any> =>
        {
            var self = this;

            var config = {
                params: { page: page  },
                headers: {
                    'Accept': 'application/json', 'Access-Control-Allow-Headers':'Content-Type, x-xsrf-token'}
            } as ng.IRequestShortcutConfig;

            return self.httpService.get(Common.AppConstants.SWAPIUrl + '/planets/', config );
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

        static GetInstance = () =>
        {
            var instance = ($http: ng.IHttpService) => new PlanetService( $http );
            return instance;
        }
    }

    App.ModuleInitiator.GetModule("AdminSection").service("AdminSection.Services.PlanetService", PlanetService );
} 