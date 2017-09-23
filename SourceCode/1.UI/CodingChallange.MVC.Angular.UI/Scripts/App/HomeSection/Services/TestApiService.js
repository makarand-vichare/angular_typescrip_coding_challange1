var HomeSection;
(function (HomeSection) {
    var Services;
    (function (Services) {
        var TestApiService = (function () {
            function TestApiService(httpService) {
                this.httpService = httpService;
            }
            TestApiService.prototype.GetTestValuesList = function () {
                return this.httpService.get(Common.AppConstants.AuthAPIUrl + '/api/TestApi');
            };
            return TestApiService;
        }());
        TestApiService.$inject = ["$http", "$location"];
        TestApiService.GetInstance = function () {
            var instance = function ($http) { return new TestApiService($http); };
            return instance;
        };
        Services.TestApiService = TestApiService;
        App.ModuleInitiator.GetModule("HomeSection").service("HomeSection.Services.TestApiService", TestApiService);
    })(Services = HomeSection.Services || (HomeSection.Services = {}));
})(HomeSection || (HomeSection = {}));
//# sourceMappingURL=TestApiService.js.map