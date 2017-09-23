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
        var PlanetService = (function (_super) {
            __extends(PlanetService, _super);
            function PlanetService(injectorService, httpService) {
                var _this = _super.call(this, injectorService) || this;
                _this.injectorService = injectorService;
                _this.httpService = httpService;
                _this.GetByPage = function (page) {
                    var self = _this;
                    var config = {
                        params: { page: page },
                        headers: {
                            'Accept': 'application/json', 'Access-Control-Allow-Headers': 'Content-Type, x-xsrf-token'
                        }
                    };
                    return self.httpService.get(Common.AppConstants.SWAPIUrl + '/planets/', config);
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
                return _this;
            }
            return PlanetService;
        }(Common.Services.BaseService));
        PlanetService.$inject = ["$injector", "$http"];
        PlanetService.GetInstance = function () {
            var instance = function (injectorService, $http) { return new PlanetService(injectorService, $http); };
            return instance;
        };
        Services.PlanetService = PlanetService;
        App.ModuleInitiator.GetModule("AdminSection").service("AdminSection.Services.PlanetService", PlanetService);
    })(Services = AdminSection.Services || (AdminSection.Services = {}));
})(AdminSection || (AdminSection = {}));
//# sourceMappingURL=planetservice.js.map