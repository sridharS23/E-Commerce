using System;

namespace API.RequestHelpers;

public class ProductParams : PaginationParams
{
    public string? OrderBy { set; get; }
    public string? SearchTerm { set; get; }
    public string? Brands { set; get; }
    public string? Types { set; get; }
}
