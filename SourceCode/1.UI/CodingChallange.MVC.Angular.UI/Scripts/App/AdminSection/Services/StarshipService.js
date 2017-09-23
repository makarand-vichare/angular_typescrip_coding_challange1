var AdminSection;
(function (AdminSection) {
    var Services;
    (function (Services) {
        var StarshipService = (function () {
            function StarshipService(httpService, qService) {
                var _this = this;
                this.httpService = httpService;
                this.qService = qService;
                this.GetByPage = function (page) {
                    var config = {
                        params: { page: page },
                        headers: {
                            'Accept': 'application/json', 'Access-Control-Allow-Headers': 'Content-Type, x-xsrf-token'
                        }
                    };
                    return _this.httpService.get(Common.AppConstants.SWAPIUrl + '/starships/', config);
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
                this.GetAll = function () {
                    var config = {
                        headers: {
                            'Accept': 'application/json', 'Access-Control-Allow-Headers': 'Content-Type, x-xsrf-token'
                        }
                    };
                    return _this.httpService.get(Common.AppConstants.SWAPIUrl + '/starships/', config);
                };
            }
            return StarshipService;
        }());
        StarshipService.$inject = ["$http", "$q"];
        StarshipService.GetInstance = function () {
            var instance = function (httpService, qService) { return new StarshipService(httpService, qService); };
            return instance;
        };
        Services.StarshipService = StarshipService;
        App.ModuleInitiator.GetModule("AdminSection").service("AdminSection.Services.StarshipService", StarshipService);
    })(Services = AdminSection.Services || (AdminSection.Services = {}));
})(AdminSection || (AdminSection = {}));
//# sourceMappingURL=StarshipService.js.map