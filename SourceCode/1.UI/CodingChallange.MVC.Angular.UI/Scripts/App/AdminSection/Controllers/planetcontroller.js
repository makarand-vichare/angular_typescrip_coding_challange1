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
        var PlanetController = (function (_super) {
            __extends(PlanetController, _super);
            function PlanetController(_injectorService, planetService) {
                var _this = _super.call(this, _injectorService) || this;
                _this.planetService = planetService;
                _this.model = {
                    planets: new Array(),
                    next: '',
                    previous: ''
                };
                _this.GetPlanets = function (page) {
                    var self = _this;
                    self.StartProcess();
                    self.planetService.GetByPage(page)
                        .then(function (response) {
                        self.model.planets = response.data.results;
                        self.model.next = response.data.next;
                        self.model.previous = response.data.previous;
                        self.ProcessInfo.IsSucceed = true;
                        self.ProcessInfo.Message = response.data.message;
                    })
                        .catch(function (response) {
                        self.ProcessInfo.Message = response.data.message;
                    })
                        .finally(function () {
                        self.ProcessInfo.Loading = false;
                    });
                };
                _this.GetByUrl = function (url) {
                    var self = _this;
                    self.StartProcess();
                    self.planetService.GetByUrl(url)
                        .then(function (response) {
                        self.model.planets = response.data.results;
                        self.model.next = response.data.next;
                        self.model.previous = response.data.previous;
                        self.ProcessInfo.IsSucceed = true;
                        self.ProcessInfo.Message = response.data.message;
                    })
                        .catch(function (response) {
                        self.ProcessInfo.Message = response.data.message;
                    })
                        .finally(function () {
                        self.ProcessInfo.Loading = false;
                    });
                };
                return _this;
            }
            return PlanetController;
        }(Common.Controllers.BaseController));
        PlanetController.$inject = ["$injector", "AdminSection.Services.PlanetService"];
        Controllers.PlanetController = PlanetController;
        App.ModuleInitiator.GetModule("AdminSection").controller("AdminSection.Controllers.PlanetController", PlanetController);
    })(Controllers = AdminSection.Controllers || (AdminSection.Controllers = {}));
})(AdminSection || (AdminSection = {}));
//# sourceMappingURL=planetcontroller.js.map