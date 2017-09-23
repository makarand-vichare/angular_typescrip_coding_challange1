/// <reference path="../../typings/angularjs/angular.d.ts" />
(function () {
    var module = App.ModuleInitiator.GetModule("AdminSection");
    module.config(AdminSection.AdminSectionRoutes.configureRoutes);
    module.config(function ($httpProvider) {
        $httpProvider.interceptors.push(Common.Interceptors.AuthenticationInterceptor.Factory);
    });
    module.run(['AdminSection.Services.AuthService', function (authService) {
            authService.GetAuthData();
        }]);
})();
//# sourceMappingURL=AdminSectionApp.js.map