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
    var Services;
    (function (Services) {
        var AuthService = (function (_super) {
            __extends(AuthService, _super);
            function AuthService(injectorService, $http, _localStorageService) {
                var _this = _super.call(this, injectorService) || this;
                _this.injectorService = injectorService;
                _this.isAuth = false;
                _this.authVM = {
                    IsAuth: _this.isAuth,
                    UserName: "",
                    Id: 0,
                    Role: ""
                };
                _this.Login = function (loginData) {
                    var self = _this;
                    var data = "grant_type=password&username=" + loginData.UserName + "&password=" + loginData.Password;
                    return self.httpService.post(Common.AppConstants.AuthAPIUrl + '/token', data, { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } })
                        .then(function (response) {
                        self.localStorageService.set('authorizationData', {
                            Token: response.data.access_token,
                            UserName: loginData.UserName,
                            Id: response.data.id,
                            Role: response.data.role
                        });
                        self.authVM.IsAuth = !self.isAuth;
                        self.authVM.UserName = loginData.UserName;
                        self.authVM.Id = response.data.id;
                        self.authVM.Role = response.data.role;
                        return response;
                    }).catch(function (response) {
                        self.LogOut();
                        return response;
                    });
                };
                _this.LogOut = function () {
                    var self = _this;
                    self.localStorageService.remove('authorizationData');
                    self.authVM.IsAuth = self.isAuth;
                    self.authVM.Id = 0;
                    self.authVM.UserName = "";
                    self.authVM.Role = "";
                };
                _this.GetAuthData = function () {
                    var self = _this;
                    var authData = self.localStorageService.get('authorizationData');
                    if (authData != null) {
                        self.authVM.IsAuth = !self.isAuth;
                        self.authVM.UserName = authData.UserName;
                        self.authVM.Id = authData.Id;
                        self.authVM.Role = authData.Role;
                    }
                };
                _this.GetAntiForgeryToken = function () {
                    var self = _this;
                    return self.httpService.get(Common.AppConstants.AuthAPIUrl + '/api/Antiforgerytoken/GetAntiForgeryToken')
                        .then(function (response) {
                        return response;
                    })
                        .catch(function (response) {
                        return response;
                    });
                };
                _this.httpService = $http;
                _this.localStorageService = _localStorageService;
                return _this;
            }
            AuthService.getInstance = function () {
                var instance = function (injectorService, $http, _localStorageService) { return new AuthService(injectorService, $http, _localStorageService); };
                return instance;
            };
            return AuthService;
        }(Common.Services.BaseService));
        AuthService.$inject = ["$injector", "$http", "localStorageService"];
        Services.AuthService = AuthService;
        App.ModuleInitiator.GetModule("AdminSection").service("AdminSection.Services.AuthService", AuthService);
    })(Services = AdminSection.Services || (AdminSection.Services = {}));
})(AdminSection || (AdminSection = {}));
//# sourceMappingURL=authservice.js.map