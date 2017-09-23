/// <reference path="../../typings/angularjs/angular.d.ts" />
(function () {
    var module = App.ModuleInitiator.GetModule("UsersSection");
    module.config(UsersSection.UsersSectionRoutes.configureRoutes);
    module.config(function ($httpProvider) {
        $httpProvider.interceptors.push(Common.Interceptors.AuthenticationInterceptor.Factory);
    });
    module.run(['AdminSection.Services.AuthService', function (authService) {
            authService.GetAuthData();
        }]);
})();
//# sourceMappingURL=UsersSectionApp.js.map