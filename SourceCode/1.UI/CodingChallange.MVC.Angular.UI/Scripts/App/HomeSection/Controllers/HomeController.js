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
var HomeSection;
(function (HomeSection) {
    var Controllers;
    (function (Controllers) {
        var HomeController = (function (_super) {
            __extends(HomeController, _super);
            function HomeController(testApiService, _injectorService) {
                var _this = _super.call(this, _injectorService) || this;
                _this.testApiService = testApiService;
                _this.CheckApiUrl = function () {
                    var self = _this;
                    self.StartProcess();
                    self.testApiService.GetTestValuesList()
                        .then(function (response) {
                        self.users = response.data.result;
                        self.ProcessInfo.Message = response.data.message;
                    })
                        .catch(function (response) {
                        self.ProcessInfo.Message = response.data;
                    })
                        .finally(function () {
                        self.ProcessInfo.Loading = false;
                    });
                };
                return _this;
            }
            return HomeController;
        }(Common.Controllers.BaseController));
        HomeController.$inject = ["HomeSection.Services.TestApiService", "$injector"];
        Controllers.HomeController = HomeController;
        App.ModuleInitiator.GetModule("HomeSection").controller("HomeSection.Controllers.HomeController", HomeController);
    })(Controllers = HomeSection.Controllers || (HomeSection.Controllers = {}));
})(HomeSection || (HomeSection = {}));
//# sourceMappingURL=HomeController.js.map