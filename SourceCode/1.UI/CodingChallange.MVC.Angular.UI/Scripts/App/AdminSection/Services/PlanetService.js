var AdminSection;
(function (AdminSection) {
    var Services;
    (function (Services) {
        var PlanetService = (function () {
            function PlanetService(httpService) {
                var _this = this;
                this.httpService = httpService;
                this.GetByPage = function (page) {
                    var self = _this;
                    var config = {
                        params: { page: page },
                        headers: {
                            'Accept': 'application/json', 'Access-Control-Allow-Headers': 'Content-Type, x-xsrf-token'
                        }
                    };
                    return self.httpService.get(Common.AppConstants.SWAPIUrl + '/planets/', config);
                };
                this.GetByUrl = function (url) {
                    var self = _this;
                    var config = {
                        headers: {
                            'Accept': 'application/json', 'Access-Control-Allow-Headers': 'Content-Type, x-xsrf-token'
                        }
                    };
                    return self.httpService.get(url, config);
                };
            }
            return PlanetService;
        }());
        PlanetService.$inject = ["$http"];
        PlanetService.GetInstance = function () {
            var instance = function ($http) { return new PlanetService($http); };
            return instance;
        };
        Services.PlanetService = PlanetService;
        App.ModuleInitiator.GetModule("AdminSection").service("AdminSection.Services.PlanetService", PlanetService);
    })(Services = AdminSection.Services || (AdminSection.Services = {}));
})(AdminSection || (AdminSection = {}));
//# sourceMappingURL=PlanetService.js.map