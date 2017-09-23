module HomeSection
{
    export class HomeSectionRoutes
    {
        static $inject = ["$routeProvider"];
        static ConfigureRoutes( $routeProvider: ng.route.IRouteProvider )
        {
            $routeProvider
                .when("/",
                {
                    controller: "HomeSection.Controllers.HomeController",
                    templateUrl: "/Scripts/App/HomeSection/Views/home.html",
                    controllerAs: "homeCtrl"
                })
                .when("/home",
                {
                    controller: "HomeSection.Controllers.HomeController",
                    templateUrl: "/Scripts/App/HomeSection/Views/home.html",
                    controllerAs: "homeCtrl"
                });

            $routeProvider.otherwise( { redirectTo: "/" });
        }
    }
}