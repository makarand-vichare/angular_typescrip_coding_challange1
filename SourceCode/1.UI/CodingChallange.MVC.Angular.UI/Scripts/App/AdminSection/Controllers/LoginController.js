var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var AdminSection;
(function (AdminSection) {
    var Controllers;
    (function (Controllers) {
        var LoginController = (function (_super) {
            __extends(LoginController, _super);
            function LoginController(_injectorService, authService) {
                var _this = _super.call(this, _injectorService) || this;
                _this.authService = authService;
                _this.loginVM = {
                    UserName: "",
                    Password: ""
                };
                _this.Initialize();
                return _this;
            }
            LoginController.prototype.Login = function (loginData) {
                var self = this;
                self.authService.Login(loginData).then(function (response) {
                    if (response.data != null) {
                        self.windowService.location.href = (response.data.role === 'admin') ? '/AdminSection' : '/UsersSection';
                    }
                })
                    .catch(function (response) {
                    self.ProcessInfo.Message = response.data;
                })
                    .finally(function () {
                    self.ProcessInfo.Loading = false;
                });
            };
            LoginController.prototype.LogOut = function () {
                var self = this;
                self.authService.LogOut();
                self.windowService.location.href = '/HomeSection/#/home';
            };
            LoginController.prototype.Initialize = function () {
                var self = this;
                self.authenticationVM = self.authService.authVM;
            };
            return LoginController;
        }(Common.Controllers.BaseController));
        LoginController.$inject = ["$injector", "AdminSection.Services.AuthService"];
        Controllers.LoginController = LoginController;
        App.ModuleInitiator.GetModule("AdminSection").controller("AdminSection.Controllers.LoginController", LoginController);
    })(Controllers = AdminSection.Controllers || (AdminSection.Controllers = {}));
})(AdminSection || (AdminSection = {}));
//# sourceMappingURL=LoginController.js.map