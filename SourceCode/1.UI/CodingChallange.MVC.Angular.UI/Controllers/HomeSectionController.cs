using System.Web.Mvc;

namespace CodingChallange.MVC.Angular.UI.Controllers
{
    public class HomeSectionController : Controller
    {
        public ActionResult Index()
        {
            ViewBag.Message = "Kneat - Coding Challange Home page.";
            return View();
        }

        public ActionResult About()
        {
            ViewBag.Message = "Developered by Makarand Vichare.";

            return View();
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "+899894485";

            return View();
        }
    }
}