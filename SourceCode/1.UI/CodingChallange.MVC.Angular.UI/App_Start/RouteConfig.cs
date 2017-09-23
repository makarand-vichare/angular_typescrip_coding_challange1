using System.Web.Mvc;
using System.Web.Routing;

namespace CodingChallange.MVC.Angular.UI
{
    public class RouteConfig
    {
        public static void RegisterRoutes(RouteCollection routes)
        {
            routes.IgnoreRoute("{resource}.axd/{*pathInfo}");

            routes.MapRoute(
                name: "Home",
                url: "HomeSection/{*catchall}",
                defaults: new { controller = "HomeSection", action = "Index", id = UrlParameter.Optional }
            );

 
            routes.MapRoute(
                name: "Admin",
                url: "AdminSection/{*catchall}",
                defaults: new { controller = "AdminSection", action = "Index", id = UrlParameter.Optional }
            );

            routes.MapRoute(
                name: "Users",
                url: "UsersSection/{*catchall}",
                defaults: new { controller = "UsersSection", action = "Index", id = UrlParameter.Optional }
            );

            routes.MapRoute(
                name: "Default",
                url: "{controller}/{action}/{id}",
                defaults: new { controller = "HomeSection", action = "Index", id = UrlParameter.Optional }
            );
        }
    }
}
