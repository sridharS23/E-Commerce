using System;
using API.Entities;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;

namespace API.Data;

public class StoreContext(DbContextOptions options) : IdentityDbContext<User>(options)
{
    public required DbSet<Product> Products { get; set; }
    public required DbSet<Basket> Baskets { get; set; }
    
        protected override void OnModelCreating(ModelBuilder builder)
    {
        base.OnModelCreating(builder);

        builder.Entity<IdentityRole>()
            .HasData(
                new IdentityRole {Id = "d50e08ed-c8d0-49eb-a05d-33fe5fa55c3c", Name = "Member", NormalizedName = "MEMBER"},
                new IdentityRole {Id = "b33cc5ab-2fcb-433a-84fa-d49f4c60672c", Name = "Admin", NormalizedName = "ADMIN"}
            );
    }
}



