using System;
using Microsoft.EntityFrameworkCore;

namespace API.RequestHelpers;

public class PagedList<T> : List<T>
{
    public PagedList(List<T> items, int Count, int PageNumber, int pageSize)
    {
        Metadata = new PagiantionMetadata
        {
            TotalCount = Count,
            PageSize = pageSize,
            CurrentPage = PageNumber,
            TotalPages = (int)Math.Ceiling(Count / (double)pageSize)
        };
        AddRange(items);
    }

    public PagiantionMetadata Metadata { get; set; }

    public static async Task<PagedList<T>> ToPagedList(IQueryable<T> query,
        int pageNumber, int pageSize)
    {
        var count = await query.CountAsync();
        var items = await query.Skip((pageNumber - 1) * pageSize).Take(pageSize).ToListAsync();
        return new PagedList<T>(items, count, pageNumber, pageSize);
    }
}

