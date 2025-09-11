using System;
using Microsoft.AspNetCore.Identity;

namespace API.Entities;

public class User : IdentityUser
{
    public int? AddressId { set; get; }
    public Address? Address { get; set; }
}