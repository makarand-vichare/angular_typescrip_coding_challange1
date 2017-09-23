var Common;
(function (Common) {
    var Directives;
    (function (Directives) {
        var AntiForgeryTokenDirectiveController = (function () {
            function AntiForgeryTokenDirectiveController(authService, httpService) {
                this.authService = authService;
                this.httpService = httpService;
                this.antiForgeryToken = '';
            }
            AntiForgeryTokenDirectiveController.prototype.GetAntiForgeryToken = function () {
                var self = this;
                return self.authService.GetAntiForgeryToken().then(function (response) {
                    self.httpService.defaults.headers.common['XSRF-TOKEN'] = response.data.FormToken || "no request verification token";
                });
            };
            return AntiForgeryTokenDirectiveController;
        }());
        AntiForgeryTokenDirectiveController.$inject = ["AdminSection.Services.AuthService", "$http"];
        Directives.AntiForgeryTokenDirectiveController = AntiForgeryTokenDirectiveController;
        function AntiForgeryToken() {
            return {
                replace: true,
                template: '',
                controller: AntiForgeryTokenDirectiveController,
                link: function (scope, element, attributes, ctrl) {
                    ctrl.GetAntiForgeryToken();
                }
            };
        }
        App.ModuleInitiator.GetModule("Common").directive("antiForgeryToken", AntiForgeryToken);
    })(Directives = Common.Directives || (Common.Directives = {}));
})(Common || (Common = {}));
//# sourceMappingURL=AntiForgeryTokenDirective.js.map