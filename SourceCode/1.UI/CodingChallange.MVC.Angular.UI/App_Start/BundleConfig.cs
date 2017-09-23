using System.Web.Optimization;

namespace CodingChallange.MVC.Angular.UI
{
    public class BundleConfig
    {
        // For more information on bundling, visit http://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {
            BundleTable.EnableOptimizations = false;

            bundles.Add(new ScriptBundle("~/bundles/angular").Include(
            "~/Scripts/angular.js",
             "~/Scripts/angular-cookies.js",
           "~/Scripts/angular-route.js",
            "~/Scripts/angular-local-storage.js",
            "~/Scripts/loading-bar.js",
            "~/Scripts/angular-messages.js"
            ));

            bundles.Add(new StyleBundle("~/Content/css").Include(
            "~/Content/bootstrap.css",
            "~/Content/site.css",
            "~/Content/loading-bar.css",
            "~/Content/app.css"
            ));
      
            #region "common module Section"

            bundles.Add(new ScriptBundle("~/bundles/common-modules").Include(
                "~/Scripts/App/ModuleInitiator.js",
                "~/Scripts/App/Common/AppConstants.js",
                "~/Scripts/App/Common/BaseController.js",
                "~/Scripts/App/Common/AuthenticationInterceptor.js"
            ));

            bundles.Add(new ScriptBundle("~/bundles/common-directives").Include(
                "~/Scripts/App/Common/Directives/AntiForgeryTokenDirective.js"
            ));

            #endregion

            #region "Home module section"

            bundles.Add(new ScriptBundle("~/bundles/home-modules").Include(
                "~/Scripts/App/HomeSection/HomeSectionRoutes.js",
                "~/Scripts/App/HomeSection/HomeSectionApp.js"
            ));

            bundles.Add(new ScriptBundle("~/bundles/home-services").Include(
                "~/Scripts/App/HomeSection/Services/TestApiService.js"
            ));

            bundles.Add(new ScriptBundle("~/bundles/home-controllers").Include(
                "~/Scripts/App/HomeSection/Controllers/HomeController.js"
            ));

            #endregion

            #region "Admin module Section"

            bundles.Add(new ScriptBundle("~/bundles/adminsection-modules").Include(
            "~/Scripts/App/AdminSection/AdminSectionRoutes.js",
            "~/Scripts/App/AdminSection/AdminSectionApp.js"
            ));

            bundles.Add(new ScriptBundle("~/bundles/adminsection-services").Include(
            "~/Scripts/App/AdminSection/Services/AuthService.js",
            "~/Scripts/App/AdminSection/Services/PlanetService.js",
            "~/Scripts/App/AdminSection/Services/StarshipService.js"
            ));

            bundles.Add(new ScriptBundle("~/bundles/adminsection-controllers").Include(
                "~/Scripts/App/AdminSection/Controllers/AdminHomeController.js",
                "~/Scripts/App/AdminSection/Controllers/PlanetController.js",
                "~/Scripts/App/AdminSection/Controllers/StarshipController.js",
                "~/Scripts/App/AdminSection/Controllers/LoginController.js"
            ));

            #endregion

            #region "User module Section"

            bundles.Add(new ScriptBundle("~/bundles/userssection-modules").Include(
                "~/Scripts/App/UsersSection/UsersSectionRoutes.js",
                "~/Scripts/App/UsersSection/UsersSectionApp.js"
            ));

            bundles.Add(new ScriptBundle("~/bundles/userssection-services").Include(
                "~/Scripts/App/UsersSection/Services/StarshipTravelService.js"
            ));

            bundles.Add(new ScriptBundle("~/bundles/userssection-controllers").Include(
                "~/Scripts/App/UsersSection/Controllers/StarshipTravelController.js"
            ));

            #endregion

        }
    }
}
