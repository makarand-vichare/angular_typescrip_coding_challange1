/// <reference path="../../typings/angularjs/angular.d.ts" />
(function () {
    var module = App.ModuleInitiator.GetModule("HomeSection");
    module.config(HomeSection.HomeSectionRoutes.ConfigureRoutes);
    module.config(function ($httpProvider) {
        $httpProvider.interceptors.push(Common.Interceptors.AuthenticationInterceptor.Factory);
    });
    module.run(['AdminSection.Services.AuthService', function (authService) {
            authService.GetAuthData();
        }]);
})();
//# sourceMappingURL=HomeSectionApp.js.map