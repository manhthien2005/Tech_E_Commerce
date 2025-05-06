using Microsoft.AspNetCore.Mvc;

namespace Tech_E_Commerce.Controllers
{
    public class ProductController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
