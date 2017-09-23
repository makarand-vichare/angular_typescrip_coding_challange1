
module AdminSection.Services
{
    export class AuthService extends Common.Services.BaseService implements AdminSection.Interfaces.IAuthService
    {
        httpService: ng.IHttpService;
        localStorageService: ng.local.storage.ILocalStorageService;
        static $inject = ["$injector", "$http", "localStorageService"];

        constructor(private injectorService: ng.auto.IInjectorService, $http: ng.IHttpService, _localStorageService: ng.local.storage.ILocalStorageService )
        {
            super(injectorService);
            this.httpService = $http;
            this.localStorageService = _localStorageService;
        }

        isAuth: boolean = false;

        authVM: AdminSection.ViewModels.IAuthenticationVM = {
            IsAuth: this.isAuth,
            UserName: "",
            Id: 0,
            Role :""
        };

        Login = (loginData: AdminSection.ViewModels.ILoginVM): ng.IPromise<any> =>
        {
            var self = this;

            var data = "grant_type=password&username=" + loginData.UserName + "&password=" + loginData.Password;

            return self.httpService.post(Common.AppConstants.AuthAPIUrl + '/token', data, { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } })
                .then( function( response:any )
                {
                        self.localStorageService.set( 'authorizationData',
                            {
                                Token: response.data.access_token,
                                UserName: loginData.UserName,
                                Id: response.data.id,
                                Role: response.data.role
                            } as AdminSection.ViewModels.IAuthorizationVM );

                        self.authVM.IsAuth = !self.isAuth;
                        self.authVM.UserName = loginData.UserName;
                        self.authVM.Id = response.data.id;
                        self.authVM.Role = response.data.role;

                    return response;

                }).catch( function ( response: any )
                {
                    self.LogOut();
                    return response;
                });
        }

        LogOut = () =>
        {
            var self = this;
            self.localStorageService.remove( 'authorizationData' );
            self.authVM.IsAuth = self.isAuth;
            self.authVM.Id = 0;
            self.authVM.UserName = "";
            self.authVM.Role = "";
        }

        GetAuthData = () =>
        {
            var self = this;

            var authData = self.localStorageService.get( 'authorizationData' ) as AdminSection.ViewModels.IAuthorizationVM;
            if ( authData != null )
            {
                self.authVM.IsAuth = !self.isAuth;
                self.authVM.UserName = authData.UserName;
                self.authVM.Id = authData.Id;
                self.authVM.Role = authData.Role;

            }
        }

        GetAntiForgeryToken = (): ng.IPromise<any> =>
        {
            var self = this;

            return self.httpService.get(Common.AppConstants.AuthAPIUrl + '/api/Antiforgerytoken/GetAntiForgeryToken')
                .then( function ( response: any )
                {
                    return response;
                })
                .catch( function ( response: any )
                {
                    return response
                });
        }

        public static getInstance()
        {
            var instance = (injectorService: ng.auto.IInjectorService, $http: ng.IHttpService, _localStorageService: ng.local.storage.ILocalStorageService) => new AuthService(injectorService, $http, _localStorageService);
            return instance;
        }
    }

    App.ModuleInitiator.GetModule( "AdminSection" ).service( "AdminSection.Services.AuthService", AuthService );
} 