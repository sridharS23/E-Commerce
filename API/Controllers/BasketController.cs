using System;
using API.Data;
using API.DTOs;
using API.Entities;
using API.Extensions;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers;

public class BasketController(StoreContext context) : BaseApiController
{
    [HttpGet]
    public async Task<ActionResult<BasketDto>> GetBasket()
    {
        var basket = await RetrierveBasket();

        if (basket == null) return NoContent();

        return basket.ToDo();
    }
    [HttpPost]
    public async Task<ActionResult<BasketDto>> AddItemToBasket(int productId, int quantity)
    {
        // get basket
        var basket = await RetrierveBasket();
        // create basket
        basket ??= CreateBasket();
        // get product
        var product = await context.Products.FindAsync(productId);

        if (product == null) return BadRequest("Problem to Adding item to basket");
        // add item to basket
        basket.AddItem(product, quantity);
        // save changes
        var result = await context.SaveChangesAsync() > 0;

        if (result) return CreatedAtAction(nameof(GetBasket), basket.ToDo());

        return BadRequest("Problem to updating Basket");
    }


    [HttpDelete]
    public async Task<ActionResult> RemoveBasketItem(int productId, int quantity)
    {
        // get basket
        var basket = await RetrierveBasket();
        // remove the item or reduce its quantity
        if (basket == null) return BadRequest("Unable to retrieve basket");
         
        basket.RemoveItem(productId, quantity);
        // save changes
        var result = await context.SaveChangesAsync() > 0;
        if (result) return Ok();
        return BadRequest("Problem in updating the basket");
    }

    private async Task<Basket?> RetrierveBasket()
    {
        return await context.Baskets
        .Include(x => x.Items)
        .ThenInclude(x => x.Product)
        .FirstOrDefaultAsync(x => x.BasketId == Request.Cookies["basketId"]);
    }

    private Basket CreateBasket()
    {
        var basketId = Guid.NewGuid().ToString();
        var cookieOptions = new CookieOptions
        {
            IsEssential = true,
            Expires = DateTime.UtcNow.AddDays(30)
        };
        Response.Cookies.Append("basketId", basketId, cookieOptions);
        var basket = new Basket { BasketId = basketId };
        context.Baskets.Add(basket);
        return basket;
    }
}
