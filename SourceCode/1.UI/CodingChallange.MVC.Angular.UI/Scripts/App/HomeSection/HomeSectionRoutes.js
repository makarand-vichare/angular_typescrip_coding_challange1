var HomeSection;
(function (HomeSection) {
    var HomeSectionRoutes = (function () {
        function HomeSectionRoutes() {
        }
        HomeSectionRoutes.ConfigureRoutes = function ($routeProvider) {
            $routeProvider
                .when("/", {
                controller: "HomeSection.Controllers.HomeController",
                templateUrl: "/Scripts/App/HomeSection/Views/home.html",
                controllerAs: "homeCtrl"
            })
                .when("/home", {
                controller: "HomeSection.Controllers.HomeController",
                templateUrl: "/Scripts/App/HomeSection/Views/home.html",
                controllerAs: "homeCtrl"
            });
            $routeProvider.otherwise({ redirectTo: "/" });
        };
        return HomeSectionRoutes;
    }());
    HomeSectionRoutes.$inject = ["$routeProvider"];
    HomeSection.HomeSectionRoutes = HomeSectionRoutes;
})(HomeSection || (HomeSection = {}));
//# sourceMappingURL=HomeSectionRoutes.js.map