
module HomeSection.Services
{
    export class TestApiService implements HomeSection.Interfaces.ITestApiService
    {
        static $inject = ["$http","$location"];
        constructor( private httpService: ng.IHttpService)
        {
        }

        GetTestValuesList(): ng.IPromise<any> 
        {
            return this.httpService.get(Common.AppConstants.AuthAPIUrl + '/api/TestApi' );
        }

        static GetInstance = () =>
        {
            var instance = ( $http: ng.IHttpService ) => new TestApiService( $http );
            return instance;
        }
   }

    App.ModuleInitiator.GetModule( "HomeSection" ).service( "HomeSection.Services.TestApiService", TestApiService);
} 