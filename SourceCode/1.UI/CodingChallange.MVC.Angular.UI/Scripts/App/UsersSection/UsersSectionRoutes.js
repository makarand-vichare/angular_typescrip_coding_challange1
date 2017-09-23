var UsersSection;
(function (UsersSection) {
    var UsersSectionRoutes = (function () {
        function UsersSectionRoutes() {
        }
        UsersSectionRoutes.configureRoutes = function ($routeProvider) {
            $routeProvider
                .when("/", {
                controller: "UsersSection.Controllers.StarshipTravelController",
                templateUrl: "/Scripts/App/UsersSection/Views/starshipstravel.html",
                controllerAs: "starshiptravelCtrl"
            });
            $routeProvider.otherwise({ redirectTo: "/" });
        };
        return UsersSectionRoutes;
    }());
    UsersSectionRoutes.$inject = ["$routeProvider"];
    UsersSection.UsersSectionRoutes = UsersSectionRoutes;
})(UsersSection || (UsersSection = {}));
//# sourceMappingURL=UsersSectionRoutes.js.map