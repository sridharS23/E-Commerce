using API.Data;
using API.Entities;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductsController(StoreContext context) : BaseApiController
    {


        [HttpGet]
        public async Task<ActionResult<List<Products>>> GetProducts()
        {
            return await context.Product.ToListAsync();
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Products>> GetProduct(int id)
        {
            var product = await context.Product.FindAsync(id);
            if (product == null)
                return NotFound();
                    return product;
        }
    }
}