var AdminSection;
(function (AdminSection) {
    var Services;
    (function (Services) {
        var AuthService = (function () {
            function AuthService($http, _localStorageService) {
                var _this = this;
                this.isAuth = false;
                this.authVM = {
                    IsAuth: this.isAuth,
                    UserName: "",
                    Id: 0,
                    Role: ""
                };
                this.Login = function (loginData) {
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
                this.LogOut = function () {
                    var self = _this;
                    self.localStorageService.remove('authorizationData');
                    self.authVM.IsAuth = self.isAuth;
                    self.authVM.Id = 0;
                    self.authVM.UserName = "";
                    self.authVM.Role = "";
                };
                this.GetAuthData = function () {
                    var self = _this;
                    var authData = self.localStorageService.get('authorizationData');
                    if (authData != null) {
                        self.authVM.IsAuth = !self.isAuth;
                        self.authVM.UserName = authData.UserName;
                        self.authVM.Id = authData.Id;
                        self.authVM.Role = authData.Role;
                    }
                };
                this.GetAntiForgeryToken = function () {
                    var self = _this;
                    return self.httpService.get(Common.AppConstants.AuthAPIUrl + '/api/Antiforgerytoken/GetAntiForgeryToken')
                        .then(function (response) {
                        return response;
                    })
                        .catch(function (response) {
                        return response;
                    });
                };
                this.httpService = $http;
                this.localStorageService = _localStorageService;
            }
            AuthService.getInstance = function () {
                var instance = function ($http, _localStorageService) { return new AuthService($http, _localStorageService); };
                return instance;
            };
            return AuthService;
        }());
        AuthService.$inject = ["$http", "localStorageService"];
        Services.AuthService = AuthService;
        App.ModuleInitiator.GetModule("AdminSection").service("AdminSection.Services.AuthService", AuthService);
    })(Services = AdminSection.Services || (AdminSection.Services = {}));
})(AdminSection || (AdminSection = {}));
//# sourceMappingURL=AuthService.js.map