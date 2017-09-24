/// <reference path="../../typings/angularjs/angular.d.ts" />

((): void => {
    var module = App.ModuleInitiator.GetModule("HomeSection");

    module.config(HomeSection.HomeSectionRoutes.ConfigureRoutes);
    module.config(($httpProvider: ng.IHttpProvider) => {
        $httpProvider.interceptors.push(Common.Interceptors.AuthenticationInterceptor.Factory);
    });

    module.run(['AdminSection.Services.AuthService', function (authService: AdminSection.Services.AuthService) {
        authService.GetAuthData();
    }]);
})() 