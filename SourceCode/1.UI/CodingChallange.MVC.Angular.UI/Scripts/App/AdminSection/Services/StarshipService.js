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
        var StarshipService = (function (_super) {
            __extends(StarshipService, _super);
            function StarshipService(injectorService, httpService, qService) {
                var _this = _super.call(this, injectorService) || this;
                _this.injectorService = injectorService;
                _this.httpService = httpService;
                _this.qService = qService;
                _this.GetByPage = function (page) {
                    var config = {
                        params: { page: page },
                        headers: {
                            'Accept': 'application/json', 'Access-Control-Allow-Headers': 'Content-Type, x-xsrf-token'
                        }
                    };
                    return _this.httpService.get(Common.AppConstants.SWAPIUrl + '/starships/', config);
                };
                _this.GetByUrl = function (url) {
                    var self = _this;
                    var config = {
                        headers: {
                            'Accept': 'application/json', 'Access-Control-Allow-Headers': 'Content-Type, x-xsrf-token'
                        }
                    };
                    return self.httpService.get(url, config);
                };
                _this.GetAll = function () {
                    var config = {
                        headers: {
                            'Accept': 'application/json', 'Access-Control-Allow-Headers': 'Content-Type, x-xsrf-token'
                        }
                    };
                    return _this.httpService.get(Common.AppConstants.SWAPIUrl + '/starships/', config);
                };
                return _this;
            }
            return StarshipService;
        }(Common.Services.BaseService));
        StarshipService.$inject = ["$injector", "$http", "$q"];
        StarshipService.GetInstance = function () {
            var instance = function (injectorService, httpService, qService) { return new StarshipService(injectorService, httpService, qService); };
            return instance;
        };
        Services.StarshipService = StarshipService;
        App.ModuleInitiator.GetModule("AdminSection").service("AdminSection.Services.StarshipService", StarshipService);
    })(Services = AdminSection.Services || (AdminSection.Services = {}));
})(AdminSection || (AdminSection = {}));
//# sourceMappingURL=starshipservice.js.map