using Microsoft.AspNetCore.Mvc;
using TEST_DataAccess.Data;
using TEST_Models.Models;

namespace TEST.Controllers
{
    public class ProductController : Controller
    {
        private readonly ApplicationDbContext _db;
        public ProductController(ApplicationDbContext db)
        {
            _db = db;
        }
        public IActionResult Index()
        {
            return View();
        }
        #region API CALLS
        [HttpGet]
        public IActionResult getProductList()
        {
            IEnumerable<Product> prod_list = _db.Product.ToList();
            return Json(new { data = prod_list });
        }
        #endregion

        public IActionResult Create()
        {
            return PartialView("_AddProd");
        }

        //POST -Create
        [HttpPost]
        [AutoValidateAntiforgeryToken]
        public IActionResult Create(Product obj)
        {
            if (ModelState.IsValid)
            {
                _db.Product.Add(obj);
                _db.SaveChanges();
                return RedirectToAction("Index");
            }
            return PartialView("_AddProd");
        }

        //GET -Edit
        public IActionResult Edit(int id)
        {
            var prd = _db.Product.Find(id);
            return PartialView("_EditProd", prd);
        }

        //POST -Edit
        [HttpPost]
        [AutoValidateAntiforgeryToken]
        public IActionResult Edit(Product product)
        {
            if (ModelState.IsValid)
            {
                _db.Product.Update(product);
                _db.SaveChanges();
                return RedirectToAction("Index");
            }
            return PartialView("_EditProd");
        }

        //GET -Delete
        public IActionResult Delete(int id)
        {
            var brand = _db.Product.Find(id);
            return PartialView("_DeleteProd", brand);
        }

        //POST -Delete
        [HttpPost]
        [AutoValidateAntiforgeryToken]
        public IActionResult DeleteCon(int? id)
        {
            var prod = _db.Product.FirstOrDefault(x => x.Id == id);
            //var brand = _db.Brand.Find(id);
            _db.Product.Remove(prod);
            _db.SaveChanges();
            return RedirectToAction("Index");
        }
    }
}
