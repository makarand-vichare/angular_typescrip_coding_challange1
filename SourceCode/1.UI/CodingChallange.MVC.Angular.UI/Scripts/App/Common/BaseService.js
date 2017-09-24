var Common;
(function (Common) {
    var Services;
    (function (Services) {
        var BaseService = (function () {
            function BaseService(injectorService) {
                this.logService = injectorService.get("$log");
            }
            return BaseService;
        }());
        BaseService.$inject = ["$injector"];
        Services.BaseService = BaseService;
        App.ModuleInitiator.GetModule("Common").service("Common.Services.BaseService", BaseService);
    })(Services = Common.Services || (Common.Services = {}));
})(Common || (Common = {}));
//# sourceMappingURL=BaseService.js.map